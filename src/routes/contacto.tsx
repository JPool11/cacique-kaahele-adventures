import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { tours, WHATSAPP } from "@/data/tours";

const title = "Contacto | Cacique Kaahele agencia de turismo";
const description =
  "Escríbenos por WhatsApp, correo o formulario y arma tu viaje a la medida. Asesoría personalizada para viajes grupales y a la medida en Colombia y el mundo.";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacto" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
});

function Contacto() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("¡Mensaje enviado!", { description: "Te respondemos en menos de 24 horas hábiles." });
    e.currentTarget.reset();
  };

  const field =
    "focus-ring min-h-13 w-full rounded-2xl border border-input bg-card px-4 text-base placeholder:text-muted-foreground";

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-ocean pt-32 pb-20 text-on-ocean sm:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 right-0 size-96 rounded-full bg-coral/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav aria-label="Ruta de navegación" className="text-sm text-on-ocean/70">
            <ol className="flex gap-2">
              <li><Link to="/" className="focus-ring hover:text-sun">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-on-ocean">Contacto</li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,7vw,5rem)] leading-[0.98] font-extrabold">
            Cuéntanos a dónde <span className="text-gradient-sunset">quieres ir</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-on-ocean/85">
            Respondemos rápido, hablamos claro y armamos tu viaje a la medida.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-9">
              <h2 className="text-2xl font-extrabold">Solicita tu asesoría</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-bold">Nombre completo</label>
                  <input id="nombre" name="nombre" required className={field} placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="tel" className="mb-2 block text-sm font-bold">Teléfono / WhatsApp</label>
                  <input id="tel" name="tel" type="tel" required className={field} placeholder="+57 300 000 0000" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="mb-2 block text-sm font-bold">Correo electrónico</label>
                  <input id="email" name="email" type="email" required className={field} placeholder="tucorreo@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="destino" className="mb-2 block text-sm font-bold">Destino de interés</label>
                  <select id="destino" name="destino" className={field} defaultValue="">
                    <option value="" disabled>Selecciona un viaje</option>
                    {tours.map((t) => (
                      <option key={t.slug} value={t.slug}>{t.nombre}</option>
                    ))}
                    <option value="otro">Otro / viaje a la medida</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="mensaje" className="mb-2 block text-sm font-bold">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    className="focus-ring w-full rounded-2xl border border-input bg-card p-4 text-base placeholder:text-muted-foreground"
                    placeholder="Cuéntanos cuántas personas viajan, fechas tentativas y qué te gustaría hacer."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="focus-ring mt-7 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-gradient-sunset px-8 text-base font-extrabold text-on-sun shadow-glow transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Enviar solicitud
              </button>
              {sent && (
                <p className="mt-4 text-sm font-semibold text-jungle" role="status">
                  ¡Gracias! Un asesor te contactará muy pronto.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-[2rem] bg-ink p-7 text-on-ink">
              <h2 className="text-2xl font-extrabold">Canales directos</h2>
              <ul className="mt-5 space-y-4 text-on-ink/80">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-sun" aria-hidden="true" />
                  <a href="tel:+573000000000" className="focus-ring hover:text-sun">+57 300 000 0000</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-sun" aria-hidden="true" />
                  <a href="mailto:hola@caciquekaahele.com" className="focus-ring hover:text-sun">hola@caciquekaahele.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-sun" aria-hidden="true" /> Cra. 45 #52-30, Medellín, Colombia
                </li>
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-6 inline-flex rounded-full bg-jungle px-6 py-3 font-bold text-on-ocean"
              >
                Hablar por WhatsApp
              </a>
              <div className="mt-6 flex gap-3">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="focus-ring grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border">
              <iframe
                title="Mapa de la oficina de Cacique Kaahele en Medellín"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-75.60%2C6.22%2C-75.54%2C6.27&layer=mapnik"
                className="h-80 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
