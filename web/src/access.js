// Trial / purchase state. The Android app is the source of truth; the web preview has no paywall.
import { T } from './i18n.js';

const $ = (id) => document.getElementById(id);
let access = { state: 'free' };

export function readAccess() {
  const host = window.AndroidHost;
  if (!host || !host.access) return (access = { state: 'free' });
  try { access = JSON.parse(host.access()); } catch (e) { access = { state: 'trial', daysLeft: 14, price: '' }; }
  return access;
}
export const isLocked = () => access.state === 'expired';

function render(note) {
  const a = access;
  const bar = $('trialbar');
  bar.hidden = a.state !== 'trial';
  if (a.state === 'trial') $('trialtext').textContent = T.trialLeft(a.daysLeft);
  const pay = $('paywall');
  if (a.state === 'owned' || a.state === 'free') { pay.hidden = true; return; }
  if (a.state === 'expired') pay.hidden = false;
  $('paytitle').textContent = a.state === 'expired' ? T.payTitleExpired : T.trialLeft(a.daysLeft);
  $('paybody').textContent = T.payBody;
  $('paybuy').textContent = a.price ? T.payBuy + ' · ' + a.price : T.payBuy;
  $('payclose').hidden = a.state === 'expired';
  $('paynote').textContent = note || '';
}

export function initAccess(onChange) {
  $('trialbuy').textContent = T.trialBuy;
  $('payrestore').textContent = T.payRestore;
  $('payclose').textContent = T.aboutClose;
  $('trialbuy').addEventListener('click', () => { render(); $('paywall').hidden = false; });
  $('payclose').addEventListener('click', () => { $('paywall').hidden = true; });
  $('paybuy').addEventListener('click', () => { $('paynote').textContent = ''; try { window.AndroidHost.buy(); } catch (e) { $('paynote').textContent = T.payUnavailable; } });
  $('payrestore').addEventListener('click', () => { $('paynote').textContent = T.payChecking; try { window.AndroidHost.restore(); } catch (e) { $('paynote').textContent = T.payUnavailable; } });
  // called by the Android side whenever the purchase state may have changed
  window.__access = (reason) => {
    const before = access.state;
    readAccess();
    let note = '';
    if (reason === 'unavailable') note = T.payUnavailable;
    else if (reason === 'restore' && access.state !== 'owned') note = T.payRestoreNone;
    else if (reason === 'pending') note = T.payPending;
    render(note);
    if (before !== access.state && onChange) onChange(access);
  };
  readAccess();
  render();
}
