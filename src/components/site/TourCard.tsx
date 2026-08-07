import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Users, Star, ArrowUpRight } from "lucide-react";
import type { Tour } from "@/data/tours";
import { formatCOP } from "@/data/tours";

export function TourCard({ tour, priority = false }: { tour: Tour; priority?: boolean }) {
  return (
    <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.imagen}
          alt={`${tour.nombre}, ${tour.lugar}`}
          width={900}
          height={1200}
          loading={priority ? "eager" : "lazy"}
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" aria-hidden="true" />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink">
          {tour.tipo}
        </span>
        <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-sun px-3 py-1 text-xs font-bold text-on-sun">
          <Star className="size-3 fill-current" aria-hidden="true" /> {tour.rating.toFixed(1)}
        </span>
        <div className="absolute inset-x-4 bottom-4 text-on-ocean">
          <h3 className="text-2xl leading-tight font-extrabold">{tour.nombre}</h3>
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-on-ocean/85">
            <MapPin className="size-4" aria-hidden="true" /> {tour.lugar}, {tour.pais}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{tour.resumen}</p>

        <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/80">
          <div className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-ocean" aria-hidden="true" />
            <dt className="sr-only">Duración</dt>
            <dd>{tour.duracion}</dd>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Users className="size-4 text-jungle" aria-hidden="true" />
            <dt className="sr-only">Viajeros</dt>
            <dd>{tour.viajeros.toLocaleString("es-CO")} viajeros</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground">
            Desde
            <span className="block font-display text-xl font-extrabold text-foreground">{formatCOP(tour.precio)}</span>
          </p>
          <Link
            to="/tours/$slug"
            params={{ slug: tour.slug }}
            className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-ocean-deep"
          >
            Ver más <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
