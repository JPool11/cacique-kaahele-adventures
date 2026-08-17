import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP, tours, GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED } from "@/data/tours";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.8a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.85 4.85 0 0 1-1-.11Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-on-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-gradient-ocean opacity-25 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img src={logo} alt="Cacique Kaahele" width={200} height={110} loading="lazy" className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-ink/70">
            Agencia de turismo especializada en experiencias de viaje inolvidables por Colombia y el mundo. Más de 10 años
            creando recuerdos.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              {
                Icon: Instagram,
                label: "Instagram",
                href: "https://www.instagram.com/cacique_kaahele/",
              },
              {
                Icon: Facebook,
                label: "Facebook",
                href: "https://www.facebook.com/p/Agencia-de-Turismo-Cacique-Kaahele-61557319840422/",
              },
              {
                Icon: TikTokIcon,
                label: "TikTok",
                href: "https://www.tiktok.com/@cacique_kaahele",
              },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="focus-ring grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Enlaces rápidos">
          <h3 className="text-sm font-bold tracking-widest uppercase text-sun">Explorar</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-on-ink/75">
            <li><Link to="/" className="focus-ring transition-colors hover:text-sun">Inicio</Link></li>
            <li><Link to="/tours" className="focus-ring transition-colors hover:text-sun">Tours 2026</Link></li>
            <li><Link to="/nosotros" className="focus-ring transition-colors hover:text-sun">Nosotros</Link></li>
            <li><Link to="/contacto" className="focus-ring transition-colors hover:text-sun">Contacto</Link></li>
          </ul>
        </nav>

        <nav aria-label="Destinos destacados">
          <h3 className="text-sm font-bold tracking-widest uppercase text-sun">Destinos</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-on-ink/75">
            {tours.slice(0, 5).map((t) => (
              <li key={t.slug}>
                <Link to="/tours/$slug" params={{ slug: t.slug }} className="focus-ring transition-colors hover:text-sun">
                  {t.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase text-sun">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-on-ink/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sun" aria-hidden="true" /> Cra. 10 #7-33, Pital, Huila, Colombia
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-sun" aria-hidden="true" />
              <a href="tel:+573204180019" className="focus-ring hover:text-sun">+57 320 418 0019</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-sun" aria-hidden="true" />
              <a href="mailto:informacion@caciquekaahele.com" className="focus-ring hover:text-sun">informacion@caciquekaahele.com</a>
            </li>
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-5 inline-flex rounded-full bg-gradient-sunset px-5 py-2.5 text-sm font-bold text-on-sun"
          >
            Solicitar asesoría
          </a>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir ubicación de Cacique Kaahele en Google Maps"
            className="focus-ring mt-5 block overflow-hidden rounded-2xl border border-white/10"
          >
            <iframe
              title="Ubicación de Cacique Kaahele en Pital, Huila"
              src={GOOGLE_MAPS_EMBED}
              className="pointer-events-none h-36 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-on-ink/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Cacique Kaahele. Todos los derechos reservados. RNT 212273 · NIT 83227323-1</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contacto" className="focus-ring hover:text-sun">Política de privacidad</Link>
            <Link to="/contacto" className="focus-ring hover:text-sun">Términos y condiciones</Link>
            <Link to="/contacto" className="focus-ring hover:text-sun">Política de cookies</Link>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-6 text-xs text-on-ink/45 sm:px-6">
          <p>
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
      </div>
    </footer>
  );
}
