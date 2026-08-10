import { useEffect, useRef, useState } from "react";

/** Lucide Plane fuselage axis (wing-root → nose) is ~-37°, not a flat -45°. */
const NOSE_OFFSET = 37;

export function PlaneCursor() {
  const [enabled, setEnabled] = useState(false);
  const planeRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -200, y: -200 });
  const current = useRef({ x: -200, y: -200 });
  const angle = useRef(-NOSE_OFFSET);
  const boost = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add("plane-cursor");

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = (e: PointerEvent) => {
      boost.current = 1;
      const layer = layerRef.current;
      if (!layer) return;
      const puff = document.createElement("span");
      puff.className = "plane-trail";
      puff.style.left = `${e.clientX}px`;
      puff.style.top = `${e.clientY}px`;
      layer.appendChild(puff);
      window.setTimeout(() => puff.remove(), 750);
    };

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      const dist = Math.hypot(dx, dy);

      current.current.x += dx * 0.18;
      current.current.y += dy * 0.18;

      if (dist > 2) {
        const desired = (Math.atan2(dy, dx) * 180) / Math.PI;
        let diff = ((desired - angle.current + 540) % 360) - 180;
        angle.current += diff * 0.15;
      }

      if (boost.current > 0) boost.current = Math.max(0, boost.current - 0.035);
      const lift = boost.current * 18;
      const scale = 1 + boost.current * 0.45;

      const el = planeRef.current;
      if (el) {
        el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%) rotate(${angle.current + NOSE_OFFSET}deg) translateX(${lift}px) scale(${scale})`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      document.body.classList.remove("plane-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" ref={layerRef} className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div ref={planeRef} className="absolute top-0 left-0 will-change-transform">
        <svg viewBox="0 0 24 24" className="size-7 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
          <defs>
            <linearGradient id="plane-cursor-fill" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-coral, #ff6b4a)" />
              <stop offset="48%" stopColor="var(--color-coral, #ff6b4a)" />
              <stop offset="52%" stopColor="var(--color-sun, #f7a53b)" />
              <stop offset="100%" stopColor="var(--color-sun, #f7a53b)" />
            </linearGradient>
          </defs>
          <path
            d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
            fill="url(#plane-cursor-fill)"
          />
        </svg>
      </div>
    </div>
  );
}
