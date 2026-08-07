import { motion } from "motion/react";
import { Sparkles, Plane } from "lucide-react";
import { WHATSAPP } from "@/data/tours";
import { Reveal } from "@/components/site/Reveal";

const frases = [
  "Un lugar donde el mar tiene otro color…",
  "Una aventura que nunca olvidarás.",
  "¿Te atreves a viajar sin saber a dónde?",
];

export function Sorpresa() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-ocean py-24 text-on-ocean sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.span
          animate={{ y: [0, -26, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-[12%] size-28 rounded-full bg-sun/25 blur-2xl"
        />
        <motion.span
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] bottom-10 size-44 rounded-full bg-coral/25 blur-3xl"
        />
        <Plane className="absolute top-16 right-[18%] size-10 rotate-12 text-white/25" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="eyebrow justify-center text-sun">Destino sorpresa</p>
          <h2 className="mt-4 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1] font-extrabold">
            No te decimos a dónde.
            <br />
            <span className="text-gradient-sunset">Solo empaca.</span>
          </h2>
        </Reveal>

        <ul className="mt-10 space-y-4">
          {frases.map((f, i) => (
            <Reveal as="li" key={f} delay={0.15 + i * 0.15}>
              <p className="font-display text-lg font-medium text-on-ocean/85 italic sm:text-2xl">“{f}”</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.6}>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-9 py-4 text-lg font-extrabold text-on-sun shadow-glow transition-transform hover:scale-105"
          >
            <Sparkles className="size-5" aria-hidden="true" /> Quiero descubrirlo
          </a>
          <p className="mt-4 text-sm text-on-ocean/65">Revelamos el destino 48 horas antes de la salida.</p>
        </Reveal>
      </div>
    </section>
  );
}
