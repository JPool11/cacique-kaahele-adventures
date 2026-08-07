import { useState, type FormEvent } from "react";
import { Send, PartyPopper } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("¡Listo! Ya estás en la lista de ofertas exclusivas.", {
      description: "Revisa tu correo, ahí te llegará el primer descuento.",
    });
    setEmail("");
  };

  return (
    <section className="px-4 pb-20 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-sunset px-6 py-14 text-on-sun sm:px-14">
          <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-white/25 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                <PartyPopper className="size-4" aria-hidden="true" /> Ofertas exclusivas
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.05] font-extrabold">
                Recibe los viajes antes que nadie
              </h2>
              <p className="mt-3 max-w-lg text-lg text-on-sun/85">
                Cupos anticipados, tarifas especiales y destinos sorpresa. Un correo al mes, cero spam.
              </p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@email.com"
                className="focus-ring min-h-13 w-full rounded-full border-0 bg-white/95 px-6 text-base text-ink placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="focus-ring inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-7 text-base font-bold text-on-ink transition-transform hover:scale-105"
              >
                Suscribirme <Send className="size-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
