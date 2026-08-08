import { useEffect, useRef, useState } from "react";

type Trail = { id: number; x: number; y: number; angle: number };

export function PlaneCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [angle, setAngle] = useState(0);
  const [takeoff, setTakeoff] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);
  const last = useRef({ x: 0, y: 0, t: 0 });
  const trailId = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const dx = e.clientX - last.current.x;
      const dy = e.clientY - last.current.y;
      if (Math.hypot(dx, dy) > 6) {
        setAngle((Math.atan2(dy, dx) * 180) / Math.PI);
        last.current = { x: e.clientX, y: e.clientY, t: Date.now() };
      }
    };

    const onDown = (e: PointerEvent) => {
      setTakeoff(true);
      const id = trailId.current++;
      const t: Trail = { id, x: e.clientX, y: e.clientY, angle };
      setTrails((prev) => [...prev, t]);
      window.setTimeout(() => setTrails((prev) => prev.filter((p) => p.id !== id)), 700);
      window.setTimeout(() => setTakeoff(false), 480);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [angle]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {trails.map((t) => (
        <span
          key={t.id}
          className="plane-trail absolute"
          style={{ left: t.x, top: t.y, transform: `translate(-50%, -50%) rotate(${t.angle}deg)` }}
        />
      ))}
      <span
        className="absolute will-change-transform"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-30%, -55%) rotate(${angle}deg)`,
          transition: "transform 120ms ease-out",
        }}
      >
        <span className={takeoff ? "plane-takeoff block" : "block"}>
          <svg viewBox="0 0 24 24" className="size-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
            <path
              d="M2.5 12.6 21 4.2c.9-.4 1.8.5 1.4 1.4L14 24l-2.6-8L2.5 12.6Z"
              className="fill-[color:var(--color-sun,#f7a53b)]"
              transform="rotate(-45 12 12)"
            />
            <path
              d="M2.5 12.6 21 4.2 11.4 16 2.5 12.6Z"
              className="fill-[color:var(--color-coral,#ff6b4a)]"
              transform="rotate(-45 12 12)"
            />
          </svg>
        </span>
      </span>
    </div>
  );
}
