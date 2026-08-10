import { motion } from "motion/react";
import { Instagram, Facebook, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP, GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED } from "@/data/tours";
import { PlaneCursor } from "@/components/site/PlaneCursor";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.8a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.85 4.85 0 0 1-1-.11Z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        className="fill-current"
        d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.01-1.04 2.47 1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 2C6.5 2 2 6.5 2 12.05c0 1.77.46 3.5 1.34 5.02L2 22l5.05-1.32a10 10 0 0 0 5 1.28h.01c5.54 0 10.04-4.5 10.04-10.05C22.1 6.5 17.6 2 12.05 2zm0 18.13h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3 .78.8-2.92-.2-.3a8.28 8.28 0 0 1-1.27-4.4c0-4.6 3.74-8.34 8.35-8.34 2.23 0 4.32.87 5.9 2.45a8.28 8.28 0 0 1 2.44 5.9c0 4.6-3.74 8.34-8.34 8.34z"
      />
    </svg>
  );
}

const socials = [
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/cacique_kaahele/" },
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/p/Agencia-de-Turismo-Cacique-Kaahele-61557319840422/",
  },
  { Icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@cacique_kaahele" },
];

export function MaintenancePage() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 20% 10%, color-mix(in oklab, var(--ocean) 35%, transparent), transparent 55%), radial-gradient(ellipse 80% 60% at 85% 20%, color-mix(in oklab, var(--sun) 28%, transparent), transparent 50%), radial-gradient(ellipse 70% 50% at 50% 100%, color-mix(in oklab, var(--coral) 22%, transparent), transparent 45%), var(--ocean-deep)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <main className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <motion.img
          src={logo}
          alt="Cacique Kaahele"
          width={200}
          height={110}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="h-16 w-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:h-20"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-xs font-bold tracking-[0.18em] text-on-ocean/75 uppercase"
        >
          Agencia de turismo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-display text-[clamp(2.25rem,7vw,3.75rem)] leading-[1.05] font-extrabold text-on-ocean"
        >
          Sitio en <span className="text-gradient-sunset">construcción</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="mt-5 text-base leading-relaxed text-on-ocean/80 sm:text-lg"
        >
          Somos una agencia de turismo y estamos preparando algo especial para tus próximas
          aventuras. Pronto podrás explorar destinos, salidas y reservar con nosotros aquí.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-jungle px-7 text-sm font-bold text-on-ocean shadow-float transition-transform hover:scale-[1.03]"
          >
            <WhatsAppIcon className="size-5 shrink-0" />
            Escríbenos por WhatsApp
          </a>
          <a
            href="mailto:informacion@caciquekaahele.com"
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-sunset px-7 text-sm font-bold text-on-sun shadow-glow transition-transform hover:scale-[1.03]"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            informacion@caciquekaahele.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
          className="mt-10 flex gap-3"
        >
          {socials.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="focus-ring grid size-11 place-items-center rounded-full bg-white/10 text-on-ocean transition-colors hover:bg-white/20"
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-12 w-full text-left"
        >
          <p className="mb-3 flex items-center justify-center gap-2 text-sm text-on-ocean/75">
            <MapPin className="size-4 shrink-0 text-sun" aria-hidden="true" />
            Cra. 10 #7-33, Pital, Huila, Colombia
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir ubicación de Cacique Kaahele en Google Maps"
            className="focus-ring block overflow-hidden rounded-2xl border border-white/15 shadow-float"
          >
            <iframe
              title="Ubicación de Cacique Kaahele en Pital, Huila"
              src={GOOGLE_MAPS_EMBED}
              className="pointer-events-none h-48 w-full sm:h-56"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </a>
        </motion.div>
      </main>

      <footer className="relative border-t border-white/10 bg-ink/40 text-on-ocean backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-on-ocean/60 sm:px-6">
          <p>© {new Date().getFullYear()} Cacique Kaahele. Todos los derechos reservados. RNT 212273 · NIT 83227323-1</p>
          <p className="mt-2 text-on-ocean/45">
            Powered by:{" "}
            <a
              href="https://www.jpooltech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring font-semibold transition-colors hover:text-sun"
            >
              JPool Tech.
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/jhan-pool-agudelo-triana-29500a225/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring font-semibold transition-colors hover:text-sun"
            >
              Jhan Pool Agudelo Triana
            </a>
          </p>
        </div>
      </footer>

      <PlaneCursor />
    </div>
  );
}
