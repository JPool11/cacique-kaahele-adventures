import { CountUp } from "@/components/site/CountUp";
import { Reveal } from "@/components/site/Reveal";

const stats = [
  { to: 5000, prefix: "+", suffix: "", label: "Viajeros felices" },
  { to: 120, prefix: "+", suffix: "", label: "Destinos recorridos" },
  { to: 98, prefix: "", suffix: "%", label: "Satisfacción" },
  { to: 10, prefix: "+", suffix: "", label: "Años creando experiencias" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-on-ink">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-sunset opacity-70" />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <p className="font-display text-[clamp(2.25rem,6vw,4rem)] leading-none font-extrabold text-gradient-sunset">
              <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-sm font-semibold tracking-wide text-on-ink/70 uppercase">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
