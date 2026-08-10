import { useEffect, useRef, useState } from "react";

export function PlaneCursor() {
  const [enabled, setEnabled] = useState(false);
  const planeRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: -200, y: -200 });
  const current = useRef({ x: -200, y: -200 });
  const angle = useRef(-45);
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
        el.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%) rotate(${angle.current}deg) translateX(${lift}px) scale(${scale})`;
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
          <path
            d="M22.5 12 2.8 20.6c-.6.3-1.2-.4-.8-.9L6.6 12 2 4.3c-.4-.6.2-1.2.8-.9L22.5 12Z"
            className="fill-[color:var(--color-sun,#f7a53b)]"
          />
          <path d="M6.6 12 2 4.3c-.4-.6.2-1.2.8-.9L22.5 12H6.6Z" className="fill-[color:var(--color-coral,#ff6b4a)]" />
        </svg>
      </div>
    </div>
  );
}
