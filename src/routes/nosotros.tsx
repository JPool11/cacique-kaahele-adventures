import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Target, Eye, Heart } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Stats } from "@/components/home/Stats";
import { pic, WHATSAPP } from "@/data/tours";

const title = "Nosotros | Cacique Kaahele, agencia de turismo";
const description =
  "Conoce la historia, la misión y el equipo de Cacique Kaahele: más de 10 años diseñando viajes grupales inolvidables por Colombia y el mundo.";

export const Route = createFileRoute("/nosotros")({
  component: Nosotros,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/nosotros" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
});

const valores = [
  { Icon: Heart, t: "Pasión", d: "Viajamos primero para poder recomendarte de verdad." },
  { Icon: Compass, t: "Autenticidad", d: "Trabajamos con comunidades y operadores locales." },
  { Icon: Target, t: "Responsabilidad", d: "Turismo consciente con el entorno y la cultura." },
  { Icon: Eye, t: "Transparencia", d: "Precios claros, sin letras pequeñas ni sorpresas." },
];

const equipo = [
  {
    n: "Melqui Pajoy Pizo",
    c: "Director General, Diseñador de Rutas y Guía de aventuras (Sede El Pital)",
    d: "Fundador de esta aventura y el encargado de conectar los hilos detrás de cada viaje. Desde nuestra sede principal en El Pital, Huila, diseño la logística, negocio los mejores vuelos y hoteles, y coordino cada detalle para que tu experiencia sea perfecta. Mi mayor pasión es el turismo, por eso sigo saliendo al terreno como guía para asegurarme personalmente de que disfrutes cada kilómetro del camino.",
    i: pic("caribe-colombiano"),
  },
  {
    n: "Alis Bonilla Vargas",
    c: "Asesora de Viajes y Guía de Aventuras (Sede Cartagena)",
    d: "Apasionada por el servicio y experta en hacer realidad los viajes de tus sueños. En nuestra sede de Cartagena te ayudo a planificar y elegir tu próxima aventura, y en el terreno, me convierto en tu guía para asegurarme de que vivas cada destino con la máxima seguridad, alegría y detalles locales que nadie más te contará.",
    i: pic("eje-cafetero"),
  },
  {
    n: "Jhan Pool Agudelo Triana",
    c: "Líder de Tecnología & Guía de Aventuras (Sede El Pital)",
    d: "¿Quién dice que los programadores no salen al sol? En la agencia construyo el código de nuestra web y lidero toda el área tecnológica. Cuando no estoy programando o editando los videos de nuestras redes, cambio el teclado por la mochila para ser tu guía en el terreno, capturando cada gran momento de la ruta.",
    i: pic("parque-tairona"),
  },
];

function Nosotros() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-ocean pt-32 pb-20 text-on-ocean sm:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 size-96 rounded-full bg-jungle/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Ruta de navegación" className="text-sm text-on-ocean/70">
            <ol className="flex gap-2">
              <li><Link to="/" className="focus-ring hover:text-sun">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-on-ocean">Nosotros</li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] font-extrabold">
            Somos <span className="text-gradient-sunset">Cacique Kaahele</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-on-ocean/85">
            “Kaahele” significa viajar. Y eso hacemos desde 2016: convertir días normales en historias que se cuentan
            durante años.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={pic("caribe-colombiano")}
              alt="Grupo de viajeros recorriendo una calle colonial del Caribe"
              width={900}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-float"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Nuestra historia</p>
            <h2 className="mt-3 text-4xl leading-tight font-extrabold">Empezamos con una buseta y 14 amigos</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              El primer viaje fue a Guatapé, sin página web y con un grupo de WhatsApp. Diez años después seguimos con la
              misma obsesión: que nadie se preocupe por la logística y todos se concentren en disfrutar.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-secondary p-6">
                <h3 className="font-display text-lg font-extrabold">Misión</h3>
                <p className="mt-2 text-muted-foreground">
                  Diseñar experiencias de viaje seguras, auténticas y emocionantes que conecten a las personas con la
                  naturaleza y la cultura de cada destino.
                </p>
              </div>
              <div className="rounded-3xl bg-secondary p-6">
                <h3 className="font-display text-lg font-extrabold">Visión</h3>
                <p className="mt-2 text-muted-foreground">
                  Ser en 2030 la agencia de experiencias más querida de Colombia, reconocida por su cercanía y su turismo
                  responsable.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Valores</p>
            <h2 className="mt-3 text-4xl font-extrabold">Lo que nos mueve</h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map(({ Icon, t, d }, i) => (
              <Reveal as="li" key={t} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-card p-7 shadow-soft transition-transform duration-500 hover:-translate-y-2">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-tropic text-on-ocean">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Stats />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Equipo</p>
            <h2 className="mt-3 text-4xl font-extrabold">Las personas detrás de cada viaje</h2>
          </Reveal>
          <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {equipo.map((m, i) => (
              <Reveal as="li" key={m.n} delay={i * 0.08}>
                <figure className="card-lift group overflow-hidden rounded-3xl bg-card shadow-soft">
                  <img
                    src={m.i}
                    alt={`${m.n}, ${m.c} en Cacique Kaahele`}
                    width={900}
                    height={1200}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <figcaption className="p-6">
                    <p className="text-xl font-extrabold">{m.n}</p>
                    <p className="text-muted-foreground">{m.c}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex rounded-full bg-gradient-sunset px-8 py-4 text-lg font-extrabold text-on-sun shadow-glow transition-transform hover:scale-105"
            >
              Quiero viajar con ustedes
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
