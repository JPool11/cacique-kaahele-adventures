import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/site/TourCard";
import { Reveal } from "@/components/site/Reveal";

const title = "Tours y viajes 2026 | Cacique Kaahele";
const description =
  "Explora nuestro calendario de tours 2026: San Andrés, Caribe, Eje Cafetero, Tairona, Pacífico, México y más. Filtra por destino, tipo, duración y nivel de aventura.";

export const Route = createFileRoute("/tours/")({
  component: ToursPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tours" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: tours.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.nombre,
            url: `/tours/${t.slug}`,
          })),
        }),
      },
    ],
  }),
});

const TODOS = "Todos";
const tipos = [TODOS, "Playa", "Cultura", "Naturaleza", "Aventura", "Internacional"];
const duraciones = [TODOS, "Hasta 4 días", "5 a 6 días", "7 días o más"];
const temporadas = [TODOS, "Alta", "Media", "Baja"];
const niveles = [TODOS, "Suave", "Moderado", "Intenso"];

function Chips({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-xs font-bold tracking-widest text-muted-foreground uppercase">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              value === o ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function ToursPage() {
  const [destino, setDestino] = useState(TODOS);
  const [tipo, setTipo] = useState(TODOS);
  const [duracion, setDuracion] = useState(TODOS);
  const [temporada, setTemporada] = useState(TODOS);
  const [nivel, setNivel] = useState(TODOS);

  const destinos = useMemo(() => [TODOS, ...new Set(tours.map((t) => t.pais))], []);

  const filtrados = tours.filter((t) => {
    if (destino !== TODOS && t.pais !== destino) return false;
    if (tipo !== TODOS && t.tipo !== tipo) return false;
    if (temporada !== TODOS && t.temporada !== temporada) return false;
    if (duracion === "Hasta 4 días" && t.dias > 4) return false;
    if (duracion === "5 a 6 días" && (t.dias < 5 || t.dias > 6)) return false;
    if (duracion === "7 días o más" && t.dias < 7) return false;
    if (nivel !== TODOS && niveles.indexOf(nivel) !== t.aventura) return false;
    return true;
  });

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-ocean pt-32 pb-20 text-on-ocean sm:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-sun/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Ruta de navegación" className="text-sm text-on-ocean/70">
            <ol className="flex gap-2">
              <li><Link to="/" className="focus-ring hover:text-sun">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-on-ocean">Tours</li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] font-extrabold">
            Calendario de viajes <span className="text-gradient-sunset">2026</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-on-ocean/85">
            {tours.length} experiencias diseñadas para todos los ritmos: desde playas para no hacer nada hasta selvas
            para no parar.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
            <p className="mb-6 inline-flex items-center gap-2 font-display font-extrabold">
              <SlidersHorizontal className="size-5 text-ocean" aria-hidden="true" /> Filtra tu próximo viaje
            </p>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <Chips label="Destino" options={destinos} value={destino} onChange={setDestino} />
              <Chips label="Tipo" options={tipos} value={tipo} onChange={setTipo} />
              <Chips label="Duración" options={duraciones} value={duracion} onChange={setDuracion} />
              <Chips label="Temporada" options={temporadas} value={temporada} onChange={setTemporada} />
              <Chips label="Nivel de aventura" options={niveles} value={nivel} onChange={setNivel} />
            </div>
          </Reveal>

          <p className="mt-8 text-sm font-semibold text-muted-foreground" aria-live="polite">
            {filtrados.length} {filtrados.length === 1 ? "viaje encontrado" : "viajes encontrados"}
          </p>

          {filtrados.length > 0 ? (
            <ul className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filtrados.map((t, i) => (
                <Reveal as="li" key={t.slug} delay={(i % 3) * 0.08}>
                  <TourCard tour={t} priority={i < 3} />
                </Reveal>
              ))}
            </ul>
          ) : (
            <p className="mt-10 rounded-3xl bg-secondary p-10 text-center text-lg font-semibold">
              No encontramos viajes con esos filtros. Prueba ampliando la búsqueda.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
