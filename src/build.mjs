/*
  Generates the site's static pages from src/. Node built-ins only.

    node src/build.mjs           write index.html, ar/index.html, sitemap.xml, robots.txt
    node src/build.mjs --check   write nothing; fail if a committed file is out of date

  Vercel has no build step: run this, then commit the generated files.
*/
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { t } from './strings.mjs';
import { makeOrder, orderHTML } from './board.mjs';

const SRC = dirname(fileURLToPath(import.meta.url));
const ROOT = join(SRC, '..');
const SITE = 'https://www.ezydelivery.io';
const IOS = 'https://apps.apple.com/app/id6747339321';
const PLAY = 'https://play.google.com/store/apps/details?id=com.mmc.waslii';
const LANE_ICONS = ['i-send','i-truck','i-box','i-check','i-wallet'];

/* Highlight positions on the phone screenshots. */
const SPOTS = [
  { top:25.4, left:6.4, width:87.3, height:11.6 },
  { top:37.2, left:6.4, width:87.3, height:11.6 },
  { top:53.6, left:6.4, width:43.6, height:12.4 },
  { top:53.6, left:50.4, width:43.3, height:12.4 },
];
const FSPOTS = [
  { top:40.6, left:3.6, width:92.8, height:6.3 },
  { top:54.4, left:2.4, width:95.2, height:20.0 },
  null,
];

const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const icon = id => `<svg class="ic" aria-hidden="true"><use href="#${id}"/></svg>`;
const spotStyle = s => `top:${s.top}%;left:${s.left}%;width:${s.width}%;height:${s.height}%`;
/* Data placed inside the page's script must not be able to close the script tag. */
const scriptJSON = v => JSON.stringify(v).replace(/</g, '\\u003c');

/* Replaces every {{name}} in one pass. Inserted values are not scanned again. */
function fill(text, vars, label){
  return text.replace(/\{\{(\w+)\}\}/g, (_, name) => {
    if (!(name in vars) || vars[name] == null) throw new Error(`${label}: nothing to fill {{${name}}}`);
    return vars[name];
  });
}

const stores = L =>
  `<a class="store" href="${IOS}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-apple"/></svg><span><small>${esc(L.iosSmall)}</small><strong>${L.iosBig}</strong></span></a>`
  + `<a class="store" href="${PLAY}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-play"/></svg><span><small>${esc(L.playSmall)}</small><strong>${L.playBig}</strong></span></a>`;

const chain = L => L.chain.map(c =>
  `<li><div class="node${c.ezy ? ' ezy' : ''}">${c.ezy ? `<img src="${L.logo}" alt="" width="64" height="64"/>` : icon(c.icon)}</div><b>${esc(c.b)}</b><span>${esc(c.s)}</span></li>`).join('');

const groups = L => L.groups.map(g =>
  `<div class="group"><h3>${esc(g.title)}</h3>${g.items.map(f => `<div class="feat">${icon(f.icon)}<div><b>${esc(f.title)}</b><p>${esc(f.desc)}</p></div></div>`).join('')}</div>`).join('');

const kinds = L => L.kinds.map(k => `<li>${icon(k[0])}${esc(k[1])}</li>`).join('');

const trackItems = L => L.steps.map((s, i) =>
  `<li${i === 0 ? ' class="on cur"' : ''}><button type="button" aria-label="${esc(L.stepWord)} ${i+1}: ${esc(s.title)}" aria-current="${i === 0 ? 'step' : 'false'}"><span class="dot">${i+1}</span><span>${esc(s.short)}</span></button></li>`).join('');

function steps(L){
  const arts = [
    `<div class="chips">${L.a1.map((c, k) => `<span class="chip">${icon(['i-globe','i-chat','i-chat','i-store'][k])}${esc(c)}</span>`).join('')}</div>`,
    `<ul class="lines">${L.a2.rows.map(r => `<li><span>${esc(r[0])}</span><b>${esc(r[1])}</b></li>`).join('')}</ul><div class="art-cap">${esc(L.a2.cap)}</div>`,
    `<div class="art-cap" style="margin:0">${esc(L.a2.rows[1][1])} · ${esc(L.a2.rows[2][1])}</div><div class="submit">${esc(L.a3.btn)}</div><div class="art-cap">${esc(L.a3.cap)}</div>`,
    `<div class="msgs">${L.a4.map((m, k) => `<div class="msg">${icon(['i-truck','i-link','i-pin'][k])}<span>${esc(m[0])}<small>${esc(m[1])}</small></span></div>`).join('')}</div>`,
    `<div class="wallet"><small>${esc(L.a5.label)}</small><strong>${esc(L.a5.amount)}</strong><div class="row"><span class="pill">${esc(L.a5.btn)}</span></div></div><div class="art-cap">${esc(L.a5.cap)}</div>`,
  ];
  return L.steps.map((s, i) =>
    `<article class="step" id="step${i}" data-step="${i}"><div><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div><div class="art" aria-hidden="true">${arts[i]}</div></article>`).join('');
}

const doors = L => L.doors.map((d, i) =>
  `<li class="door${i === 0 ? ' cur' : ''}" data-door="${i}"><button type="button" aria-pressed="${i === 0}"><h3>${esc(d.title)} <span class="who">· ${esc(d.who)}</span></h3><p>${esc(d.desc)}</p></button></li>`).join('');

const fsteps = L => L.flow.map((f, i) =>
  `<li${i === 0 ? ' class="on"' : ''}><button type="button" aria-pressed="${i === 0}" aria-label="${i+1}. ${esc(f.title)}"><span class="n" aria-hidden="true">${i+1}</span><b>${esc(f.title)}</b><p>${esc(f.desc)}</p></button></li>`).join('');

const boardData = L => ({ states:L.states, stateCod:L.stateCod, statePaid:L.statePaid, areas:L.areas, sar:L.sar });

/* The same five starting cards the page's script continues from (see client.js). */
function lanes(L){
  const cards = new Map([4,3,2,1,0].map((stage, k) => [stage, makeOrder(2041 + k, stage)]));
  return L.lanes.map((name, i) => {
    const o = cards.get(i);
    return `<div class="lane"><div class="lane-h">${icon(LANE_ICONS[i])}<span>${esc(name)}</span></div><div class="lane-cards" data-lane="${i}"><div class="order${o.stage === 4 ? ' done' : ''}">${orderHTML(o, boardData(L), esc)}</div></div></div>`;
  }).join('');
}

function page(L, template, client){
  const canonical = SITE + L.path;
  const vars = {
    lang:L.lang, dir:L.dir,
    bodyAttrs: L.dir === 'rtl' ? ' class="rtl"' : '',
    currentEn: L.lang === 'en' ? ' aria-current="page"' : '',
    currentAr: L.lang === 'ar' ? ' aria-current="page"' : '',
    canonical, urlEn:SITE + t.en.path, urlAr:SITE + t.ar.path,
    ogImageUrl:SITE + L.ogImage,
    fspotStyle:spotStyle(FSPOTS[0]), spotStyle:spotStyle(SPOTS[0]),
    stores:stores(L), lanes:lanes(L), chain:chain(L), trackItems:trackItems(L),
    trackName:esc(`1. ${L.steps[0].title}`), steps:steps(L), groups:groups(L), kinds:kinds(L),
    doors:doors(L), doorDesc:esc(L.doors[0].desc),
    fsteps:fsteps(L), fcap:`<b>${esc(L.flow[0].title)}</b>${esc(L.flow[0].desc)}`,
    h1:L.h1,
    client:fill(client, {
      boardData:scriptJSON(boardData(L)), spots:scriptJSON(SPOTS), fspots:scriptJSON(FSPOTS),
      makeOrder:makeOrder.toString(), orderHTML:orderHTML.toString(),
    }, 'client.js'),
  };
  L.flowAlt.forEach((alt, i) => { vars['flowAlt' + i] = esc(alt); });
  /* Every other {{name}} is a plain string from strings.mjs. */
  for (const [k, v] of Object.entries(L)) if (typeof v === 'string' && !(k in vars)) vars[k] = esc(v);
  return fill(template, vars, `template (${L.lang})`);
}

function sitemap(){
  const alternates = [['en', t.en.path], ['ar', t.ar.path], ['x-default', t.en.path]]
    .map(([code, path]) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE}${path}"/>`).join('\n');
  const urls = [t.en.path, t.ar.path].map(path => `  <url>\n    <loc>${SITE}${path}</loc>\n${alternates}\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}

const robots = () => `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;

const template = readFileSync(join(SRC, 'template.html'), 'utf8');
const client = readFileSync(join(SRC, 'client.js'), 'utf8').trimEnd();
const outputs = {
  'index.html': page(t.en, template, client),
  'ar/index.html': page(t.ar, template, client),
  'sitemap.xml': sitemap(),
  'robots.txt': robots(),
};

if (process.argv.includes('--check')){
  const stale = Object.entries(outputs).filter(([file, content]) => {
    try { return readFileSync(join(ROOT, file), 'utf8') !== content; } catch { return true; }
  }).map(([file]) => file);
  if (stale.length){
    console.error(`Out of date: ${stale.join(', ')}. Run: node src/build.mjs`);
    process.exit(1);
  }
  console.log(`Up to date: ${Object.keys(outputs).join(', ')}`);
} else {
  for (const [file, content] of Object.entries(outputs)){
    mkdirSync(dirname(join(ROOT, file)), { recursive:true });
    writeFileSync(join(ROOT, file), content);
    console.log(`Wrote ${file}`);
  }
}
