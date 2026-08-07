import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { pic } from "@/data/tours";

const posts = [
  {
    titulo: "Qué empacar para San Andrés sin llevar maleta de más",
    categoria: "Consejos",
    fecha: "12 de enero, 2026",
    lectura: "5 min",
    resumen: "La lista definitiva para 5 días de isla: lo que sí necesitas, lo que sobra y el error que todos cometen con el bloqueador.",
    imagen: pic("san-andres-islas"),
  },
  {
    titulo: "Temporada de ballenas 2026: cuándo y dónde verlas",
    categoria: "Destinos",
    fecha: "3 de febrero, 2026",
    lectura: "7 min",
    resumen: "De julio a octubre el Pacífico colombiano se convierte en la sala de partos más grande del planeta. Así se planea el viaje.",
    imagen: pic("valle-y-pacifico-colombiano"),
  },
  {
    titulo: "Eje Cafetero en 4 días: la ruta que sí vale la pena",
    categoria: "Recomendaciones",
    fecha: "20 de febrero, 2026",
    lectura: "6 min",
    resumen: "Salento, Filandia y Cocora sin correr. Horarios, miradores y el mejor tinto de la región según nuestros guías.",
    imagen: pic("eje-cafetero"),
  },
];

const post0 = posts[0]!;

export function Blog() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Diario de viaje</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-extrabold">
            Historias, rutas y <span className="text-gradient-tropic">consejos reales</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <article className="card-lift group relative h-full overflow-hidden rounded-[2rem] bg-card shadow-soft">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post0.imagen}
                  alt={post0.titulo}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <span className="absolute top-5 left-5 rounded-full bg-sun px-3 py-1 text-xs font-bold text-on-sun">
                  {post0.categoria}
                </span>
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {post0.fecha} · {post0.lectura} de lectura
                </p>
                <h3 className="mt-3 text-2xl leading-tight font-extrabold sm:text-3xl">{post0.titulo}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{post0.resumen}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-ocean">
                  Leer artículo <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6">
            {posts.slice(1).map((p, i) => (
              <Reveal key={p.titulo} delay={0.1 + i * 0.1}>
                <article className="card-lift group grid grid-cols-[7rem_minmax(0,1fr)] gap-4 overflow-hidden rounded-3xl bg-card p-3 shadow-soft sm:grid-cols-[10rem_minmax(0,1fr)]">
                  <img
                    src={p.imagen}
                    alt={p.titulo}
                    width={900}
                    height={1200}
                    loading="lazy"
                    className="size-full rounded-2xl object-cover"
                  />
                  <div className="min-w-0 py-2 pr-3">
                    <p className="text-xs font-bold tracking-wide text-coral uppercase">{p.categoria}</p>
                    <h3 className="mt-1.5 text-lg leading-snug font-extrabold">{p.titulo}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.resumen}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{p.fecha} · {p.lectura}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
