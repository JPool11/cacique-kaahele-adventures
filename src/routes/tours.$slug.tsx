import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Check,
  X,
  Star,
  Clock,
  MapPin,
  CalendarDays,
  Users,
  Info,
  ArrowRight,
} from "lucide-react";
import { getTour, formatCOP, tours, WHATSAPP, type Tour } from "@/data/tours";
import { TourCard } from "@/components/site/TourCard";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }): { tour: Tour } => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  component: TourPage,
  head: ({ params, loaderData }) => {
    const t = loaderData?.tour;
    const title = t ? `${t.nombre} · ${t.duracion} | Cacique Kaahele` : "Tour | Cacique Kaahele";
    const description = t
      ? `${t.resumen} Salida ${t.salida}. Desde ${formatCOP(t.precio)} por persona con todo incluido.`
      : "Detalle del tour.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/tours/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/tours/${params.slug}` }],
      scripts: t
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "TouristTrip",
                name: t.nombre,
                description: t.descripcion,
                touristType: t.tipo,
                itinerary: { "@type": "ItemList", itemListElement: t.itinerario.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: d.titulo })) },
                provider: { "@type": "TravelAgency", name: "Cacique Kaahele" },
                offers: { "@type": "Offer", price: t.precio, priceCurrency: "COP", availability: "https://schema.org/InStock" },
                aggregateRating: { "@type": "AggregateRating", ratingValue: String(t.rating), reviewCount: String(t.viajeros) },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
                  { "@type": "ListItem", position: 2, name: "Tours", item: "/tours" },
                  { "@type": "ListItem", position: 3, name: t.nombre, item: `/tours/${t.slug}` },
                ],
              }),
            },
          ]
        : [],
    };
  },
});

function TourPage() {
  const { tour } = Route.useLoaderData();
  const relacionados = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate flex min-h-[85dvh] items-end overflow-hidden">
        <img
          src={tour.imagen}
          alt={`${tour.nombre}, ${tour.lugar}`}
          width={900}
          height={1200}
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/60" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-16 text-on-ocean sm:px-6">
          <nav aria-label="Ruta de navegación" className="text-sm text-on-ocean/70">
            <ol className="flex flex-wrap gap-2">
              <li><Link to="/" className="focus-ring hover:text-sun">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/tours" className="focus-ring hover:text-sun">Tours</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-on-ocean">{tour.nombre}</li>
            </ol>
          </nav>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-sun px-4 py-1.5 text-xs font-bold tracking-widest text-on-sun uppercase">
            {tour.tipo} · Temporada {tour.temporada}
          </span>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,7.5vw,5.5rem)] leading-[0.95] font-extrabold">{tour.nombre}</h1>
          <p className="mt-4 max-w-2xl text-lg text-on-ocean/85">{tour.resumen}</p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <li className="inline-flex items-center gap-2"><MapPin className="size-4 text-sun" aria-hidden="true" /> {tour.lugar}, {tour.pais}</li>
            <li className="inline-flex items-center gap-2"><Clock className="size-4 text-sun" aria-hidden="true" /> {tour.duracion}</li>
            <li className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-sun" aria-hidden="true" /> Salida {tour.salida}</li>
            <li className="inline-flex items-center gap-2"><Users className="size-4 text-sun" aria-hidden="true" /> {tour.viajeros.toLocaleString("es-CO")} viajeros</li>
            <li className="inline-flex items-center gap-2"><Star className="size-4 fill-sun text-sun" aria-hidden="true" /> {tour.rating.toFixed(1)} / 5</li>
          </ul>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:py-24">
        <div className="min-w-0 space-y-16">
          <Reveal>
            <h2 className="text-3xl font-extrabold">La experiencia</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{tour.descripcion}</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {tour.destacados.map((d) => (
                <li key={d} className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold">{d}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-extrabold">Galería</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[tour, ...relacionados].map((t, i) => (
                <img
                  key={t.slug + i}
                  src={t.imagen}
                  alt={`Paisaje de ${t.nombre}`}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className={`w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.03] ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"}`}
                />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-extrabold">Cronograma</h2>
            <ol className="mt-6 space-y-5 border-l border-border pl-6">
              {tour.itinerario.map((d) => (
                <li key={d.dia} className="relative">
                  <span aria-hidden="true" className="absolute top-1.5 -left-[1.9rem] size-3 rounded-full bg-gradient-sunset ring-4 ring-background" />
                  <p className="text-xs font-bold tracking-widest text-coral uppercase">{d.dia}</p>
                  <h3 className="mt-1 text-xl font-extrabold">{d.titulo}</h3>
                  <p className="mt-1 text-muted-foreground">{d.detalle}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-6">
                <h2 className="text-xl font-extrabold">Incluye</h2>
                <ul className="mt-4 space-y-2.5">
                  {tour.incluye.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="mt-0.5 size-5 shrink-0 text-jungle" aria-hidden="true" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6">
                <h2 className="text-xl font-extrabold">No incluye</h2>
                <ul className="mt-4 space-y-2.5">
                  {tour.noIncluye.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-muted-foreground">
                      <X className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden="true" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-extrabold">Recomendaciones</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {tour.recomendaciones.map((r) => (
                <li key={r} className="flex items-start gap-2 rounded-2xl bg-secondary p-4 font-medium">
                  <Info className="mt-0.5 size-5 shrink-0 text-ocean" aria-hidden="true" /> {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-extrabold">Ubicación</h2>
            <div className="mt-5 overflow-hidden rounded-3xl border border-border">
              <iframe
                title={`Mapa de ${tour.lugar}`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-79%2C-2%2C-66%2C13&layer=mapnik`}
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-extrabold">Opiniones de viajeros</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { n: "Camila R.", t: "Superó todas mis expectativas. El grupo, el guía y la logística: 10/10." },
                { n: "Sebastián G.", t: "Repetiría mañana mismo. Se nota que conocen cada rincón del destino." },
              ].map((o) => (
                <blockquote key={o.n} className="rounded-3xl bg-card p-6 shadow-soft">
                  <div className="flex" aria-label="Calificación 5 de 5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="size-4 fill-sun text-sun" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-3 leading-relaxed text-muted-foreground">“{o.t}”</p>
                  <footer className="mt-3 font-bold">{o.n}</footer>
                </blockquote>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl font-extrabold">Preguntas frecuentes del viaje</h2>
            <Accordion type="single" collapsible className="mt-4 w-full">
              {[
                { q: "¿Cuánto debo pagar para separar mi cupo?", a: "Con el 30% del valor total aseguras tu lugar. El saldo lo pagas hasta 15 días antes de la salida." },
                { q: "¿Cuál es el tamaño del grupo?", a: "Grupos pequeños de 12 a 20 viajeros, siempre acompañados por un guía de Cacique Kaahele." },
                { q: "¿Puedo pagar a cuotas?", a: "Sí, con tarjeta de crédito hasta 12 cuotas o con plan de pagos directo con nosotros." },
                { q: "¿Qué pasa si debo cancelar?", a: "Puedes ceder tu cupo a otra persona o reprogramar según la política de cada operador. Te acompañamos en el proceso." },
              ].map((f, i) => (
                <AccordionItem key={f.q} value={`f-${i}`}>
                  <AccordionTrigger className="text-left font-display font-bold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2rem] border border-border bg-card p-7 shadow-float">
            <p className="text-sm text-muted-foreground">Precio por persona desde</p>
            <p className="font-display text-4xl font-extrabold">{formatCOP(tour.precio)}</p>
            <p className="mt-1 text-sm text-muted-foreground">Separa con el 30% · cuotas sin intereses</p>

            <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
              <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Salida</dt><dd className="font-bold">{tour.salida}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Duración</dt><dd className="font-bold">{tour.duracion}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Nivel</dt><dd className="font-bold">{["Suave", "Moderado", "Intenso"][tour.aventura - 1]}</dd></div>
            </dl>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 flex min-h-13 items-center justify-center rounded-full bg-gradient-sunset px-6 text-base font-extrabold text-on-sun shadow-glow transition-transform hover:scale-[1.03]"
            >
              Reservar ahora
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-3 flex min-h-13 items-center justify-center rounded-full border border-border px-6 text-base font-bold transition-colors hover:bg-secondary"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              to="/contacto"
              className="focus-ring mt-3 flex min-h-13 items-center justify-center rounded-full px-6 text-base font-bold text-ocean hover:underline"
            >
              Solicitar asesoría
            </Link>
          </div>
        </aside>
      </div>

      <section className="section-y bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold">También te puede gustar</h2>
            <Link to="/tours" className="focus-ring inline-flex items-center gap-2 font-bold text-ocean">
              Ver todos <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((t) => (
              <li key={t.slug}>
                <TourCard tour={t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring fixed inset-x-4 bottom-4 z-40 flex min-h-13 items-center justify-center rounded-full bg-gradient-sunset text-base font-extrabold text-on-sun shadow-float lg:hidden"
      >
        Reservar ahora
      </a>
    </>
  );
}

