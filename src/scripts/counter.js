/* ============================================
   COUNTER LOGIC — andrea-counter
   Toda la lógica del contador en tiempo real.
   ============================================ */

const ENTRY_DATE    = new Date('2026-02-23T22:15:00-03:00');
const WEEKLY_SALARY = 6_000_000;
const PER_SECOND    = WEEKLY_SALARY / (7 * 24 * 3600);

function formatARS(n) {
  return '$' + Math.floor(n).toLocaleString('es-AR');
}
function formatARSFrac(n) {
  return '$' + n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function pad(n) { return String(Math.floor(n)).padStart(2, '0'); }

function breakdownTime(ts) {
  const AVG = Math.floor(30.4375 * 86400);
  const meses   = Math.floor(ts / AVG);
  const rem1    = ts % AVG;
  const dias    = Math.floor(rem1 / 86400);
  const horas   = Math.floor((rem1 % 86400) / 3600);
  const segs    = ts % 60;
  return { meses, dias, horas, segs };
}

function tick() {
  const diffSec = (Date.now() - ENTRY_DATE.getTime()) / 1000;
  if (diffSec < 0) return;

  const total = diffSec * PER_SECOND;
  const ts    = Math.floor(diffSec);
  const { meses, dias, horas, segs } = breakdownTime(ts);

  const el = (id) => document.getElementById(id);

  if (el('moneyTotal'))  el('moneyTotal').textContent  = formatARS(total);
  if (el('timeMeses'))   el('timeMeses').textContent   = pad(meses);
  if (el('timeDias'))    el('timeDias').textContent    = pad(dias);
  if (el('timeHoras'))   el('timeHoras').textContent   = pad(horas);
  if (el('timeSegs'))    el('timeSegs').textContent    = pad(segs);
  if (el('rateSub'))     el('rateSub').textContent     =
    `≈ ${formatARSFrac(PER_SECOND)} por segundo · mientras silba y cocina arroz`;
  if (el('porDia'))      el('porDia').textContent      = formatARS(PER_SECOND * 86400);
  if (el('porHora'))     el('porHora').textContent     = formatARS(PER_SECOND * 3600);
  if (el('porMin'))      el('porMin').textContent      = formatARS(PER_SECOND * 60);
  if (el('porSeg'))      el('porSeg').textContent      = formatARSFrac(PER_SECOND);
}

tick();
setInterval(tick, 1000);
