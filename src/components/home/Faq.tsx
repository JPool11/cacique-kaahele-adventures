import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";

export const faqs = [
  { q: "¿Cómo reservo mi cupo?", a: "Eliges tu viaje, nos escribes por WhatsApp o llenas el formulario y separas con el 30% del valor total. El saldo lo pagas hasta 15 días antes de la salida, sin intereses." },
  { q: "¿Qué incluyen los precios?", a: "Cada tour detalla su propio 'Incluye' y 'No incluye'. En general cubrimos transporte, alojamiento, alimentación descrita, entradas, guía y seguro de asistencia." },
  { q: "¿Puedo viajar solo?", a: "Claro. Más del 40% de nuestros viajeros van solos y se unen a grupos pequeños. Puedes elegir habitación compartida o pagar suplemento individual." },
  { q: "¿Qué pasa si me cancelan el viaje?", a: "Si la cancelación es por nuestra parte, te devolvemos el 100% o trasladamos tu cupo a otra fecha sin costo." },
  { q: "¿Trabajan con grupos empresariales o colegios?", a: "Sí. Diseñamos viajes a la medida para empresas, colegios, universidades y grupos familiares desde 15 personas." },
  { q: "¿Necesito pasaporte para los destinos internacionales?", a: "Para México se requiere pasaporte con mínimo 6 meses de vigencia. Para Ecuador basta la cédula colombiana vigente. Te asesoramos en todo el trámite." },
];

export function Faq() {
  return (
    <section className="section-y">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-extrabold">
            Resolvemos tus <span className="text-gradient-tropic">dudas</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Te quedó algo pendiente? Escríbenos por WhatsApp y te responde una persona real en minutos.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-base font-bold hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
