(() => {
  /* Filled in by src/build.mjs */
  const B = {{boardData}};
  const SPOTS = {{spots}};
  const FSPOTS = {{fspots}};
  const makeOrder = {{makeOrder}};
  const orderHTML = {{orderHTML}};

  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const narrow = matchMedia('(max-width:760px)');

  /* ── Delivery board ── */
  let seq = 2041;
  const lanesEl = $('#lanes');

  function placeOrder(o){
    if (!o.el){ o.el = document.createElement('div'); o.el.className = 'order'; }
    o.el.classList.toggle('done', o.stage === 4);
    o.el.innerHTML = orderHTML(o, B, esc);
    $(`[data-lane="${o.stage}"]`, lanesEl).appendChild(o.el);
  }
  function tick(){
    const first = new Map(orders.map(o => [o, o.el.getBoundingClientRect()]));
    const leaving = orders.find(o => o.stage === 4);
    orders.forEach(o => { if (o !== leaving) o.stage++; });
    if (leaving){
      const el = leaving.el;
      el.animate([{opacity:1, transform:'scale(1)'},{opacity:0, transform:'scale(.92)'}], {duration:380, easing:'ease-in'}).onfinish = () => el.remove();
      orders = orders.filter(o => o !== leaving);
    }
    orders.forEach(o => {
      placeOrder(o);
      const a = first.get(o), b = o.el.getBoundingClientRect();
      o.el.animate([{ transform:`translate(${a.left-b.left}px,${a.top-b.top}px)` },{ transform:'none' }], { duration:820, easing:'cubic-bezier(.16,1,.3,1)' });
    });
    const fresh = makeOrder(seq++, 0);
    orders.unshift(fresh);
    placeOrder(fresh);
    fresh.el.animate([{opacity:0, transform:'translateY(-10px)'},{opacity:1, transform:'none'}], {duration:520, delay:250, easing:'cubic-bezier(.16,1,.3,1)', fill:'backwards'});
  }
  /* The starting cards are already in the HTML: attach to them. */
  let orders = [4,3,2,1,0].map(s => {
    const o = makeOrder(seq++, s);
    o.el = $(`[data-lane="${s}"] .order`, lanesEl);
    return o;
  });
  let timer = null, boardVisible = true;
  function runBoard(){
    clearInterval(timer); timer = null;
    if (!reduce.matches && boardVisible && !document.hidden) timer = setInterval(tick, 2400);
  }
  new IntersectionObserver(es => { boardVisible = es[0].isIntersecting; runBoard(); }, {threshold:.15}).observe(lanesEl);
  document.addEventListener('visibilitychange', runBoard);
  reduce.addEventListener?.('change', runBoard);

  /* ── Tracking bar ── */
  function setStep(i){
    $$('#track li').forEach((li, k) => { li.classList.toggle('on', k <= i); li.classList.toggle('cur', k === i); });
    $$('#track button').forEach((b, k) => b.setAttribute('aria-current', k === i ? 'step' : 'false'));
    $('#fill').style.width = (i / 4 * 80) + '%';
    $('#trackName').textContent = (i+1) + '. ' + $(`#step${i} h3`).textContent;
  }
  $$('#track button').forEach((b, i) => b.addEventListener('click', () => $('#step' + i).scrollIntoView({behavior: reduce.matches ? 'auto' : 'smooth', block:'center'})));
  const stepIO = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) setStep(+e.target.dataset.step); });
  }, { rootMargin:'-45% 0px -45% 0px' });
  $$('.step').forEach(el => stepIO.observe(el));

  /* ── Phone stage ── */
  function setDoor(i){
    const s = SPOTS[i], spot = $('#spot');
    Object.assign(spot.style, { top:s.top+'%', left:s.left+'%', width:s.width+'%', height:s.height+'%' });
    $$('.door').forEach((d, k) => { d.classList.toggle('cur', k === i); d.querySelector('button').setAttribute('aria-pressed', k === i); });
    $('#doorDesc').textContent = $$('.door')[i].querySelector('p').textContent;
  }
  const doorIO = new IntersectionObserver(es => {
    if (narrow.matches) return;
    es.forEach(e => { if (e.isIntersecting) setDoor(+e.target.dataset.door); });
  }, { rootMargin:'-45% 0px -45% 0px' });
  $$('.door').forEach((d, i) => { doorIO.observe(d); d.querySelector('button').addEventListener('click', () => setDoor(i)); });

  /* ── Real order flow (hero) ── */
  const hero = $('#hero'), shots = $$('#fscreen .shot');
  const scrollDriven = matchMedia('(min-width:1081px) and (min-height:640px)');
  let curFlow = -1, flowTimer = null, flowVisible = true, flowPausedUntil = 0;
  function setFlow(i){
    if (i === curFlow) return;
    curFlow = i;
    shots.forEach((im, k) => { im.classList.toggle('on', k === i); im.classList.toggle('past', k < i); });
    const sp = $('#fspot'), s = FSPOTS[i];
    sp.classList.toggle('on', !!s);
    if (s) Object.assign(sp.style, { top:s.top+'%', left:s.left+'%', width:s.width+'%', height:s.height+'%' });
    $('#notif').classList.toggle('on', i === 2);
    $$('#fsteps li').forEach((li, k) => { li.classList.toggle('on', k === i); li.querySelector('button').setAttribute('aria-pressed', k === i); });
    const step = $$('#fsteps li')[i];
    $('#fcap').innerHTML = `<b>${esc(step.querySelector('b').textContent)}</b>${esc(step.querySelector('p').textContent)}`;
  }
  $$('#fsteps button').forEach((b, i) => b.addEventListener('click', () => goFlow(i)));
  function flowRange(){ return hero.offsetHeight - innerHeight; }
  function goFlow(i){
    if (scrollDriven.matches){
      const y = hero.getBoundingClientRect().top + scrollY + flowRange() * (i / shots.length + 0.06);
      scrollTo({ top:y, behavior: reduce.matches ? 'auto' : 'smooth' });
    } else {
      flowPausedUntil = Date.now() + 12000; setFlow(i);
    }
  }
  function onFlowScroll(){
    if (!scrollDriven.matches) return;
    const r = flowRange(); if (r <= 0) return;
    const p = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / r));
    setFlow(Math.min(shots.length - 1, Math.floor(p * shots.length)));
  }
  function runFlow(){
    clearInterval(flowTimer); flowTimer = null;
    if (scrollDriven.matches || reduce.matches || !flowVisible || document.hidden) return;
    flowTimer = setInterval(() => { if (Date.now() > flowPausedUntil) setFlow((curFlow + 1) % shots.length); }, 3600);
  }
  addEventListener('scroll', onFlowScroll, {passive:true});
  new IntersectionObserver(es => { flowVisible = es[0].isIntersecting; runFlow(); }, {threshold:.25}).observe($('#fscreen'));
  scrollDriven.addEventListener?.('change', () => { runFlow(); onFlowScroll(); });
  document.addEventListener('visibilitychange', runFlow);

  /* ── Starting state ── */
  setStep(0);
  setDoor(0);
  setFlow(0);
  onFlowScroll();
  $('#year').textContent = new Date().getFullYear();

  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('solid', scrollY > 30);
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
})();
