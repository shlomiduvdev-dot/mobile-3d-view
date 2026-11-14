// First-run walkthrough; reopened from the "?" button.
import { T } from './i18n.js';

const I = (d) => '<svg viewBox="0 0 48 48" width="72" height="72" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
const ICONS = [
  I('<path d="M10 8h18l10 10v22H10z"/><path d="M28 8v10h10"/><path d="M24 36V24m-5 5 5-5 5 5"/>'),
  I('<path d="M24 6 8 15v18l16 9 16-9V15z"/><path d="M8 15l16 9 16-9M24 24v18"/><path d="M38 6a10 10 0 0 1 5 6m0-6v6h-6" stroke-width="2"/>'),
  I('<path d="M6 30 30 6l12 12-24 24z"/><path d="m13 23 4 4m2-10 4 4m2-10 4 4"/>'),
  I('<circle cx="24" cy="24" r="14"/><path d="M14 34 34 14"/><circle cx="14" cy="34" r="2.5" fill="currentColor"/><circle cx="34" cy="14" r="2.5" fill="currentColor"/>'),
  I('<path d="M4 40h40"/><path d="M12 40V22l12-8 12 8v18z"/><path d="M40 10a12 12 0 0 0-8-6m0 0v6m0-6h6" stroke-width="2"/>'),
  I('<path d="M24 8v6m-14 4h28M10 18l-5 14a7 7 0 0 0 12 0zm28 0-5 14a7 7 0 0 0 12 0z" transform="translate(0 2) scale(.92) translate(2 0)"/><path d="M16 42h16M24 14v28"/>'),
];
const KEY = 'm3dv-tour-seen';
const $ = (id) => document.getElementById(id);
let step = 0;

function render() {
  const s = T.tour[step];
  $('touricon').innerHTML = ICONS[step];
  $('tourtitle').textContent = s[0];
  $('tourbody').textContent = s[1] + (step === 0 && window.AndroidHost ? ' ' + T.tourOpenWith : '');
  $('tourdots').innerHTML = T.tour.map((_, i) => '<i' + (i === step ? ' class="on"' : '') + '></i>').join('');
  $('tourback').style.visibility = step ? 'visible' : 'hidden';
  $('tournext').textContent = step === T.tour.length - 1 ? T.tourDone : T.tourNext;
  $('tourcount').textContent = (step + 1) + ' / ' + T.tour.length;
}

export function openTour() { step = 0; render(); $('tour').hidden = false; $('tournext').focus(); }
function closeTour() {
  $('tour').hidden = true;
  try { localStorage.setItem(KEY, '1'); } catch (e) { /* storage may be unavailable */ }
}

export function initTour() {
  $('tourback').textContent = T.tourBack;
  $('tourskip').textContent = T.tourSkip;
  $('help').setAttribute('aria-label', T.tourHelp);
  $('tour').setAttribute('aria-label', T.tourHelp);
  $('tournext').addEventListener('click', () => { if (step < T.tour.length - 1) { step++; render(); } else closeTour(); });
  $('tourback').addEventListener('click', () => { if (step) { step--; render(); } });
  $('tourskip').addEventListener('click', closeTour);
  $('help').addEventListener('click', openTour);
  // about & licences
  const LIBS = [
    ['three.js', 'MIT', 'three'], ['fflate', 'MIT', 'fflate'],
    ['occt-import-js', 'LGPL-2.1', 'occt-import-js'], ['Open CASCADE Technology', 'LGPL-2.1 + exception', 'opencascade'],
  ];
  $('aboutlink').textContent = T.about;
  $('abouttitle').textContent = T.about;
  $('abouttext').textContent = T.aboutText;
  $('aboutoss').textContent = T.aboutOss;
  $('aboutclose').textContent = T.aboutClose;
  $('aboutlibs').innerHTML = LIBS.map((l) => '<li><span><b>' + l[0] + '</b> · ' + l[1] + '</span><button data-lic="' + l[2] + '">' + T.aboutView + '</button></li>').join('');
  const showList = (on) => { $('aboutmain').hidden = !on; $('lictext').hidden = on; $('aboutclose').textContent = on ? T.aboutClose : T.aboutBack; };
  $('aboutlink').addEventListener('click', () => { $('tour').hidden = true; showList(true); $('about').hidden = false; });
  $('aboutclose').addEventListener('click', () => { if ($('lictext').hidden) $('about').hidden = true; else showList(true); });
  $('aboutlibs').addEventListener('click', async (e) => {
    const b = e.target.closest('[data-lic]');
    if (!b) return;
    $('lictext').textContent = '…';
    showList(false);
    try { const r = await fetch('licenses/' + b.dataset.lic + '.txt'); $('lictext').textContent = r.ok ? await r.text() : '–'; }
    catch (err) { $('lictext').textContent = '–'; }
  });
  let seen = false;
  try { seen = localStorage.getItem(KEY) === '1'; } catch (e) { /* ignore */ }
  if (!seen) openTour();
}
