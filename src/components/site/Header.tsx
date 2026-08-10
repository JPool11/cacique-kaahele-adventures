import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { WHATSAPP } from "@/data/tours";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/tours", label: "Tours" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel shadow-soft" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="focus-ring flex shrink-0 items-center rounded-xl" aria-label="Cacique Kaahele — inicio">
          <img
            src={logo}
            alt="Cacique Kaahele agencia de turismo"
            width={160}
            height={88}
            className={cn("h-11 w-auto transition-all duration-500 sm:h-14", !scrolled && "drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]")}
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                scrolled ? "text-foreground/75 hover:text-foreground" : "text-on-ocean/85 hover:text-on-ocean",
              )}
              activeProps={{
                className: cn("rounded-full px-4 py-2 text-sm font-semibold", scrolled ? "bg-secondary text-foreground" : "bg-white/15 text-on-ocean"),
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-5 py-2.5 text-sm font-bold text-on-sun shadow-glow transition-transform hover:scale-[1.04]"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Quiero viajar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className={cn(
            "focus-ring grid size-11 place-items-center rounded-full transition-colors md:hidden",
            scrolled ? "bg-secondary text-foreground" : "bg-white/15 text-on-ocean backdrop-blur",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="glass-panel mx-4 mb-3 rounded-3xl p-3 md:hidden">
          <nav className="flex flex-col" aria-label="Navegación móvil">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl px-4 py-3 text-base font-semibold text-foreground/80"
                activeProps={{ className: "rounded-2xl px-4 py-3 text-base font-semibold bg-secondary text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-sunset px-4 py-3 text-base font-bold text-on-sun"
            >
              <MessageCircle className="size-5" aria-hidden="true" /> Hablar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
