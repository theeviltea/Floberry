// Soft petal burst: a few petals slip out from under a control, flutter up and settle.
// Pure Web Animations, no layout work on the page; skipped when the user prefers reduced motion.
const COLORS = ['#F2C6C2', '#E8B4B8', '#F7E1D7', '#E3CFBD', '#D98C96', '#FFFFFF'];
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
let layer: HTMLDivElement | null = null;

function getLayer() {
  if (layer && document.body.contains(layer)) return layer;
  layer = document.createElement('div');
  layer.setAttribute('aria-hidden', 'true');
  layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:60;overflow:hidden';
  document.body.appendChild(layer);
  return layer;
}

function petalSvg(color: string) {
  // a single rose petal: rounded top, pinched base, soft vein
  return `<svg viewBox="0 0 20 24" width="100%" height="100%"><path d="M10 23C4 19 1 13 2 8 3 3 7 1 10 4c3-3 7-1 8 4 1 5-2 11-8 15Z" fill="${color}"/><path d="M10 22C9 16 9 10 10 5" stroke="rgba(122,101,82,.18)" stroke-width=".8" fill="none" stroke-linecap="round"/></svg>`;
}

export function petals(el: Element, count = 7) {
  if (reduce()) return;
  const r = el.getBoundingClientRect();
  const host = getLayer();
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    const size = 11 + Math.random() * 9;
    // start just under the lower half of the control, spread across its width
    const x0 = r.left + r.width * (0.15 + Math.random() * 0.7);
    const y0 = r.top + r.height * (0.55 + Math.random() * 0.35);
    p.style.cssText = `position:absolute;left:${x0}px;top:${y0}px;width:${size}px;height:${size * 1.2}px;margin:${-size / 2}px 0 0 ${-size / 2}px;will-change:transform,opacity`;
    p.innerHTML = petalSvg(COLORS[(Math.random() * COLORS.length) | 0]);
    host.appendChild(p);
    const side = x0 < r.left + r.width / 2 ? -1 : 1;
    const dx = side * (18 + Math.random() * 46);
    const up = -(26 + Math.random() * 44);
    const fall = 22 + Math.random() * 30;
    const rot0 = Math.random() * 360, rot = rot0 + side * (120 + Math.random() * 220);
    const dur = 1100 + Math.random() * 600;
    p.animate(
      [
        { transform: `translate(0,0) rotate(${rot0}deg) scale(.4)`, opacity: 0 },
        { transform: `translate(${dx * 0.45}px,${up}px) rotate(${(rot0 + rot) / 2}deg) scale(1)`, opacity: 1, offset: 0.35 },
        { transform: `translate(${dx}px,${up + fall}px) rotate(${rot}deg) scale(.9)`, opacity: 0 },
      ],
      { duration: dur, delay: i * 28, easing: 'cubic-bezier(.22,.7,.2,1)', fill: 'both' },
    ).finished.then(() => p.remove(), () => p.remove());
  }
}
