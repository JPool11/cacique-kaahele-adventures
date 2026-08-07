import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/site/TourCard";
import { Reveal } from "@/components/site/Reveal";

export function Destinos() {
  const destacados = tours.slice(0, 6);
  return (
    <section id="destinos" className="section-y relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Destinos destacados</p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-extrabold">
              Lugares que se sienten <span className="text-gradient-tropic">antes de llegar</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cada viaje está diseñado por gente que ya lo caminó. Grupos pequeños, logística resuelta y momentos que no
              caben en una foto.
            </p>
          </div>
          <Link
            to="/tours"
            className="focus-ring group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-6 py-3 font-bold transition-colors hover:bg-secondary"
          >
            Ver todos los tours
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>

        <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {destacados.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={(i % 3) * 0.1}>
              <TourCard tour={t} priority={i < 3} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
