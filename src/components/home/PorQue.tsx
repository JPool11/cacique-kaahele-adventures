import { Compass, UserCheck, PackageCheck, HeartHandshake, ShieldCheck, CreditCard } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const razones = [
  { Icon: Compass, titulo: "Experiencias únicas", texto: "Itinerarios que salen del circuito turístico: rincones locales, sabores reales y momentos irrepetibles." },
  { Icon: UserCheck, titulo: "Guías especializados", texto: "Gente que nació en el destino y lo cuenta como nadie. Historia, cultura y los mejores secretos." },
  { Icon: PackageCheck, titulo: "Todo incluido", texto: "Transporte, alojamiento, entradas y alimentación. Tú solo decides qué foto tomar primero." },
  { Icon: HeartHandshake, titulo: "Atención personalizada", texto: "Un asesor te acompaña antes, durante y después del viaje. Siempre hay alguien al otro lado." },
  { Icon: ShieldCheck, titulo: "Viajes seguros", texto: "Operadores certificados, seguro de asistencia y protocolos verificados en cada salida." },
  { Icon: CreditCard, titulo: "Pagos fáciles", texto: "Separa con el 30%, paga a cuotas y elige tarjeta, transferencia o efectivo." },
];

export function PorQue() {
  return (
    <section className="section-y relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 size-[28rem] rounded-full bg-sun/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">¿Por qué viajar con nosotros?</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-extrabold">
            Viajar bien <span className="text-gradient-tropic">también se diseña</span>
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {razones.map(({ Icon, titulo, texto }, i) => (
            <Reveal as="li" key={titulo} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-float">
                <span className="grid size-16 place-items-center rounded-2xl bg-gradient-tropic text-on-ocean shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="size-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-extrabold">{titulo}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{texto}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
