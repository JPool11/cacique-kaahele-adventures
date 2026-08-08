import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { WHATSAPP, tours } from "@/data/tours";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-on-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-gradient-ocean opacity-25 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img src={logo.url} alt="Cacique Kaahele" width={200} height={110} loading="lazy" className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-ink/70">
            Agencia de turismo especializada en experiencias de viaje inolvidables por Colombia y el mundo. Más de 10 años
            creando recuerdos.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
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
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Ubicación de Cacique Kaahele en Pital, Huila"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-75.8146%2C2.2561%2C-75.7946%2C2.2761&layer=mapnik&marker=2.2661%2C-75.8046"
              className="h-36 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-on-ink/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Cacique Kaahele. Todos los derechos reservados. RNT 000000</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contacto" className="focus-ring hover:text-sun">Política de privacidad</Link>
            <Link to="/contacto" className="focus-ring hover:text-sun">Términos y condiciones</Link>
            <Link to="/contacto" className="focus-ring hover:text-sun">Política de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
