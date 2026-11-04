const DEFAULT_COLORS = ["#E8432B", "#177A47", "#F2B632", "#141414"];

/** Small confetti burst at viewport coordinates; respects reduced motion. */
export function burst(
  x: number,
  y: number,
  count = 12,
  colors: string[] = DEFAULT_COLORS,
) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("i");
    el.style.cssText = `position:fixed;width:8px;height:8px;border-radius:2px;pointer-events:none;z-index:50;left:${x}px;top:${y}px;background:${colors[i % colors.length]}`;
    document.body.appendChild(el);
    const angle = Math.random() * Math.PI * 2;
    const dist = 50 + Math.random() * 100;
    const anim = el.animate(
      [
        { transform: "translate(0,0) scale(1)", opacity: 1 },
        {
          transform: `translate(${Math.cos(angle) * dist}px,${Math.sin(angle) * dist + 40}px) rotate(${Math.random() * 540}deg) scale(.4)`,
          opacity: 0,
        },
      ],
      { duration: 800 + Math.random() * 600, easing: "cubic-bezier(.2,.7,.2,1)" },
    );
    anim.onfinish = () => el.remove();
  }
}

/** Center point of an element in viewport coordinates. */
export function centerOf(el: Element): [number, number] {
  const r = el.getBoundingClientRect();
  return [r.left + r.width / 2, r.top + r.height / 2];
}
