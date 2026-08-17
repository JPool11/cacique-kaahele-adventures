import { Reveal } from "@/components/site/Reveal";
import laguna from "@/assets/galeria-laguna.webp";
import iglesia from "@/assets/galeria-iglesia.webp";
import lancha from "@/assets/galeria-lancha.webp";
import laguna2 from "@/assets/galeria-laguna-2.webp";
import boyacense from "@/assets/galeria-boyacense.webp";
import vargas from "@/assets/galeria-vargas.webp";
import selfie from "@/assets/galeria-selfie.webp";
import playa from "@/assets/galeria-playa.webp";
import aeropuerto from "@/assets/galeria-aeropuerto.webp";
import mexico from "@/assets/galeria-mexico.webp";
import cancun from "@/assets/galeria-cancun.webp";
import barco from "@/assets/galeria-barco.webp";

const items = [
  { src: laguna, alt: "Grupo de viajeros de Cacique Kaahele junto a una laguna de montaña" },
  { src: iglesia, alt: "Viajeros con el pendón de Cacique Kaahele frente a una iglesia colonial" },
  { src: lancha, alt: "Grupo en lancha con chalecos salvavidas durante un tour de Cacique Kaahele" },
  { src: laguna2, alt: "Viajeros sonrientes con la bandera de Colombia en un paisaje de laguna" },
  { src: boyacense, alt: "Viajeras en el Pueblito Boyacense con el logo de Cacique Kaahele" },
  { src: vargas, alt: "Grupo del Tour por Boyacá en el Monumento a los Lanceros" },
  { src: selfie, alt: "Selfie de un grupo de viajeros con el pendón de Cacique Kaahele" },
  { src: playa, alt: "Viajeros de Cacique Kaahele en un malecón frente al mar Caribe" },
  { src: aeropuerto, alt: "Grupo de viajeros con la bandera de Colombia en el aeropuerto" },
  { src: mexico, alt: "Viajeros de Cacique Kaahele en una plaza colonial de México" },
  { src: cancun, alt: "Grupo de viajeros en el letrero de Cancún con la bandera de Colombia" },
  { src: barco, alt: "Viajeros de Cacique Kaahele frente al barco Captain Hook en Cancún" },
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
                  className="w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
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
