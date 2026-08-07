import { Reveal } from "@/components/site/Reveal";
import { tours } from "@/data/tours";

const items = [
  { src: tours[2].imagen, alt: "Playa de aguas turquesa en San Andrés", span: "row-span-2" },
  { src: tours[6].imagen, alt: "Palmas de cera del Valle del Cocora", span: "" },
  { src: tours[3].imagen, alt: "Balcones coloniales de Cartagena", span: "" },
  { src: tours[7].imagen, alt: "Playa y rocas del Parque Tairona", span: "row-span-2" },
  { src: tours[9].imagen, alt: "Ballena jorobada saltando en el Pacífico", span: "" },
  { src: tours[8].imagen, alt: "Atardecer en la bahía de Santa Marta", span: "" },
  { src: tours[1].imagen, alt: "Peñón de Guatapé y su embalse", span: "" },
  { src: tours[4].imagen, alt: "Pirámide maya frente al mar turquesa", span: "row-span-2" },
];

export function Galeria() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Galería</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-extrabold">
            Imagina que ya <span className="text-gradient-tropic">estás allí</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Momentos reales de nuestros viajeros. Sin filtros imposibles, solo buena luz y mejor compañía.
          </p>
        </Reveal>

        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {items.map((it, i) => (
            <Reveal key={it.alt} delay={(i % 4) * 0.07}>
              <figure className="group relative overflow-hidden rounded-3xl">
                <img
                  src={it.src}
                  alt={it.alt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-110 ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 to-transparent p-4 text-sm font-semibold text-on-ocean opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {it.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
