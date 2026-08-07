import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const testimonios = [
  { nombre: "Laura Restrepo", ciudad: "Medellín", viaje: "San Andrés Islas", rating: 5, texto: "Todo estuvo perfecto desde el primer mensaje. El guía nos llevó a una playa que no sale en Google y ahí entendí por qué la gente repite con ellos." },
  { nombre: "Andrés Camacho", ciudad: "Bogotá", viaje: "Eje Cafetero", rating: 5, texto: "Viajé solo y terminé con un grupo que hoy son amigos. La logística impecable y el café… otro nivel." },
  { nombre: "Valentina Ortiz", ciudad: "Cali", viaje: "Pacífico Colombiano", rating: 5, texto: "Ver una ballena saltar a 20 metros me hizo llorar. Cacique Kaahele piensa hasta en el detalle del mareo." },
  { nombre: "Julián Mesa", ciudad: "Barranquilla", viaje: "Ciudad de México y Cancún", rating: 5, texto: "Primera vez fuera del país y no tuve que preocuparme por nada. Asesoría real, no un vendedor de paquetes." },
];

export function Testimonios() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((p) => (p + d + testimonios.length) % testimonios.length);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonios.length), 6500);
    return () => clearInterval(id);
  }, []);

  const t = testimonios[i];

  return (
    <section className="section-y bg-secondary/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="eyebrow justify-center">Testimonios</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-extrabold">
            Lo dicen quienes ya <span className="text-gradient-tropic">volvieron</span>
          </h2>
        </Reveal>

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.nombre}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] bg-card p-8 shadow-soft sm:p-12"
            >
              <Quote className="size-10 text-sun" aria-hidden="true" />
              <p className="mt-5 font-display text-xl leading-relaxed font-medium sm:text-2xl">“{t.texto}”</p>
              <footer className="mt-8 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gradient-tropic text-lg font-extrabold text-on-ocean">
                  {t.nombre.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-bold">{t.nombre}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {t.ciudad} · viajó a {t.viaje}
                  </p>
                  <div className="mt-1 flex" aria-label={`Calificación ${t.rating} de 5`}>
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} className="size-4 fill-sun text-sun" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Testimonio anterior"
              className="focus-ring grid size-11 place-items-center rounded-full bg-card shadow-soft transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {testimonios.map((tt, k) => (
                <button
                  key={tt.nombre}
                  type="button"
                  onClick={() => setI(k)}
                  aria-label={`Ver testimonio de ${tt.nombre}`}
                  aria-current={k === i}
                  className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-coral" : "w-2.5 bg-border"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente testimonio"
              className="focus-ring grid size-11 place-items-center rounded-full bg-card shadow-soft transition-colors hover:bg-secondary"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
