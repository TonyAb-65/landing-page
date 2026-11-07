/*
  The moving order cards on the delivery board. Used twice: the build writes the
  starting cards into the HTML, and the page uses the same functions for new cards.
  The build copies these functions into the page with toString(), so they must not
  use anything from outside their own parameters.
*/
export function makeOrder(n, stage){
  const AMOUNTS = [185, 240, 96, 312, 150, 74, 205, 128];
  return { ref:'EZ-' + n, area:(n * 3) % 8, amt:AMOUNTS[n % 8], cod:n % 3 !== 0, stage };
}

export function orderHTML(o, B, esc){
  let state = o.stage === 0 ? (o.cod ? B.stateCod : B.statePaid) : B.states[o.stage];
  if (o.stage === 4) state = `${B.states[4]}<span class="amt">+${o.amt} ${B.sar}</span>`;
  return `<div class="ref">${o.ref}</div><div class="area">${esc(B.areas[o.area])}</div><div class="state"><span>${state}</span></div>`;
}
