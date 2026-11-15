// A picture of the current view with the model's key figures underneath, for sending to someone.
export function composeShare(canvas, { title, lines, brand, rtl }) {
  const W = canvas.width, H = canvas.height, s = W / 1080;
  const pad = 48 * s, titleSize = 46 * s, lineSize = 34 * s, gap = 18 * s, brandSize = 28 * s;
  const panelH = pad + titleSize + lines.length * (lineSize + gap) + gap + brandSize + pad;
  const c = document.createElement('canvas');
  c.width = W; c.height = Math.round(H + panelH);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1d2128';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.drawImage(canvas, 0, 0);
  ctx.fillStyle = '#2c323b';
  ctx.fillRect(0, H, W, Math.max(1, 2 * s));
  const font = 'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans Hebrew", sans-serif';
  ctx.direction = rtl ? 'rtl' : 'ltr';
  ctx.textAlign = rtl ? 'right' : 'left';
  ctx.textBaseline = 'top';
  const x = rtl ? W - pad : pad, maxW = W - 2 * pad;
  let y = H + pad;
  ctx.font = '700 ' + titleSize + 'px ' + font;
  ctx.fillStyle = '#eef1f5';
  let t = title;
  while (t.length > 4 && ctx.measureText(t).width > maxW) t = t.slice(0, -2);
  // file names read left-to-right even in a right-to-left layout
  ctx.direction = 'ltr';
  ctx.fillText(t === title ? t : t + '…', x, y);
  ctx.direction = rtl ? 'rtl' : 'ltr';
  y += titleSize + gap;
  ctx.font = '400 ' + lineSize + 'px ' + font;
  ctx.fillStyle = '#cfd6df';
  for (const l of lines) { ctx.fillText(l, x, y, maxW); y += lineSize + gap; }
  ctx.font = '700 ' + brandSize + 'px ' + font;
  ctx.fillStyle = '#f2a33a';
  ctx.direction = 'ltr';
  ctx.textAlign = rtl ? 'left' : 'right';
  ctx.fillText(brand, rtl ? pad : W - pad, y + gap * 0.3);
  return c.toDataURL('image/jpeg', 0.92);
}
