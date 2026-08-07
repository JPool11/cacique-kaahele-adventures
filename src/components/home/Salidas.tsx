import { Link } from "@tanstack/react-router";
import { tours } from "@/data/tours";
import { Reveal } from "@/components/site/Reveal";

export function Salidas() {
  const proximas = [...tours].sort((a, b) => a.salidaISO.localeCompare(b.salidaISO)).slice(0, 6);

  return (
    <section id="proximas-salidas" className="section-y relative overflow-hidden bg-ink text-on-ink">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -bottom-24 size-[30rem] rounded-full bg-gradient-ocean opacity-30 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-sun">Próximas salidas</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-extrabold">
            Los cupos vuelan. <span className="text-gradient-sunset">Literal.</span>
          </h2>
          <p className="mt-4 text-lg text-on-ink/70">
            Fechas confirmadas del calendario 2026. Reserva con el 30% y paga el resto a cuotas sin intereses.
          </p>
        </Reveal>

        <ol className="relative mt-14 space-y-8 border-l border-white/15 pl-6 sm:pl-10">
          {proximas.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={i * 0.06} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[1.85rem] size-3.5 rounded-full bg-gradient-sunset ring-4 ring-ink sm:-left-[2.85rem]"
              />
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-3xl bg-white/5 p-5 transition-colors hover:bg-white/10 sm:flex sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-bold tracking-wide text-sun uppercase">{t.salida}</p>
                  <h3 className="mt-1 truncate text-xl font-extrabold sm:text-2xl">{t.nombre}</h3>
                  <p className="mt-1 text-sm text-on-ink/65">
                    {t.duracion} · {t.lugar}
                  </p>
                </div>
                <Link
                  to="/tours/$slug"
                  params={{ slug: t.slug }}
                  className="focus-ring inline-flex shrink-0 items-center rounded-full bg-sun px-5 py-3 text-sm font-bold text-on-sun transition-transform hover:scale-105"
                >
                  Reservar
                </Link>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
