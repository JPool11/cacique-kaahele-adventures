import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, CalendarDays, Star } from "lucide-react";
import hero from "@/assets/hero-beach.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-dvh items-end overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-20 scale-110">
        <img
          src={hero}
          alt="Vista aérea de una playa caribeña de aguas turquesa al atardecer"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="size-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/85" aria-hidden="true" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <span className="animate-float-slow absolute top-[22%] left-[8%] size-24 rounded-full bg-sun/25 blur-2xl" />
        <span className="animate-float-slow absolute top-[38%] right-[12%] size-40 rounded-full bg-jungle/25 blur-3xl [animation-delay:1.5s]" />
        <span className="animate-float-slow absolute bottom-[30%] left-[42%] size-16 rounded-full bg-coral/30 blur-xl [animation-delay:0.8s]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-28 sm:px-6 sm:pb-36">
        <motion.div style={{ opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-xs font-bold tracking-[0.18em] text-on-ocean uppercase backdrop-blur"
          >
            <Star className="size-3.5 fill-sun text-sun" aria-hidden="true" /> Agencia de turismo · Salidas 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[0.95] font-extrabold text-on-ocean"
          >
            El destino
            <br />
            lo eliges <span className="text-gradient-sunset">tú.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-on-ocean/85 sm:text-xl"
          >
            Playas imposibles, montañas que despiertan con neblina y culturas que se quedan contigo. Nosotros lo
            organizamos todo: tú solo empaca las ganas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              to="/tours"
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-sunset px-8 py-4 text-base font-bold text-on-sun shadow-glow transition-transform hover:scale-[1.03]"
            >
              Explorar destinos
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href="#proximas-salidas"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-on-ocean backdrop-blur transition-colors hover:bg-white/20"
            >
              <CalendarDays className="size-5" aria-hidden="true" /> Ver próximos viajes
            </a>
          </motion.div>
        </motion.div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-20 w-full text-background sm:h-28"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,140 480,10 720,52 C960,94 1200,140 1440,86 L1440,140 L0,140 Z"
        />
      </svg>
    </section>
  );
}
