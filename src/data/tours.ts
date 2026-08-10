import boyaca from "@/assets/dest-boyaca.jpg";
import antioquia from "@/assets/dest-antioquia.jpg";
import sanandres from "@/assets/dest-sanandres.jpg";
import caribe from "@/assets/dest-caribe.jpg";
import mexico from "@/assets/dest-mexico.jpg";
import lajas from "@/assets/dest-lajas.jpg";
import cafetero from "@/assets/dest-cafetero.jpg";
import tairona from "@/assets/dest-tairona.jpg";
import santamarta from "@/assets/dest-santamarta.jpg";
import pacifico from "@/assets/dest-pacifico.jpg";
import arboletes from "@/assets/dest-arboletes.jpg";
import murillo from "@/assets/dest-murillo.jpg";
import huila from "@/assets/dest-huila.jpg";
import amazonas from "@/assets/dest-amazonas.jpg";
import oculto from "@/assets/dest-oculto.jpg";

export type Tour = {
  slug: string;
  nombre: string;
  lugar: string;
  pais: string;
  tipo: "Playa" | "Cultura" | "Naturaleza" | "Aventura" | "Internacional";
  duracion: string;
  dias: number;
  temporada: "Alta" | "Media" | "Baja";
  aventura: 1 | 2 | 3;
  precio: number;
  ciudadSalida: string;
  otrasSalidas?: { ciudad: string; precio: number }[];
  viajeros: number;
  rating: number;
  salida: string;
  salidaISO: string;
  imagen: string;
  resumen: string;
  descripcion: string;
  destacados: string[];
  incluye: string[];
  noIncluye: string[];
  recomendaciones: string[];
  itinerario: { dia: string; titulo: string; detalle: string }[];
};

const incluyeBase = (extra: string[]) => [
  "Transporte terrestre y/o aéreo",
  ...extra,
  "Guía acompañante certificado",
  "Seguro de asistencia en viaje",
];

export const tours: Tour[] = [
  {
    slug: "murillo-tour-en-dos-ruedas",
    nombre: "Tour en dos ruedas",
    lugar: "Murillo, Tolima",
    pais: "Colombia",
    tipo: "Aventura",
    duracion: "3 días / 2 noches",
    dias: 3,
    temporada: "Media",
    aventura: 3,
    precio: 0,
    ciudadSalida: "El Pital, Huila",
    viajeros: 120,
    rating: 4.9,
    salida: "Marzo, 2026",
    salidaISO: "2026-03-01",
    imagen: murillo,
    resumen: "Moteros, páramo y carretera: la ruta más adrenalínica del Tolima.",
    descripcion:
      "Un recorrido en moto por las alturas de Murillo, entre frailejones, neblina y curvas infinitas con vista al Nevado del Ruiz.",
    destacados: ["Páramo de Letras", "Mirador del Nevado del Ruiz", "Pueblo típico de Murillo"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "2 noches de alojamiento", "Desayunos", "Apoyo mecánico en ruta"]),
    noIncluye: ["Combustible", "Almuerzos y cenas", "Gastos personales"],
    recomendaciones: ["Equipo de protección completo", "Ropa térmica e impermeable", "Documentos de la moto al día"],
    itinerario: [
      { dia: "Día 1", titulo: "Salida", detalle: "Ruta panorámica y llegada a Murillo." },
      { dia: "Día 2", titulo: "Páramo", detalle: "Ascenso al Páramo de Letras y miradores." },
      { dia: "Día 3", titulo: "Regreso", detalle: "Desayuno típico y retorno." },
    ],
  },
  {
    slug: "tour-colombia-ecuador",
    nombre: "Tour Colombia - Ecuador",
    lugar: "Las Lajas y Quito",
    pais: "Colombia / Ecuador",
    tipo: "Internacional",
    duracion: "6 días / 5 noches",
    dias: 6,
    temporada: "Media",
    aventura: 2,
    precio: 900000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 360,
    rating: 4.8,
    salida: "27 de marzo al 1 de abril, 2026",
    salidaISO: "2026-03-27",
    imagen: lajas,
    resumen: "Una catedral suspendida sobre el cañón y la mitad del mundo.",
    descripcion:
      "Fe, historia y frontera: el santuario gótico más impresionante de América, Otavalo, la Mitad del Mundo y el casco colonial de Quito.",
    destacados: ["Santuario de Las Lajas", "Mitad del Mundo", "Mercado de Otavalo"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "5 noches de alojamiento", "Desayunos", "Entradas descritas"]),
    noIncluye: ["Almuerzos y cenas", "Gastos personales"],
    recomendaciones: ["Documento de identidad vigente", "Ropa por capas", "Efectivo en dólares"],
    itinerario: [
      { dia: "Día 1", titulo: "Ruta al sur", detalle: "Viaje panorámico y noche en Ipiales." },
      { dia: "Día 2", titulo: "Las Lajas", detalle: "Santuario, cañón del Guáitara y teleférico." },
      { dia: "Día 3", titulo: "Cruce a Ecuador", detalle: "Otavalo y laguna de Cuicocha." },
      { dia: "Día 4", titulo: "Quito", detalle: "Centro histórico y La Ronda." },
      { dia: "Día 5", titulo: "Mitad del Mundo", detalle: "Monumento y museo Intiñán." },
      { dia: "Día 6", titulo: "Regreso", detalle: "Retorno a Colombia." },
    ],
  },
  {
    slug: "disney-colombiano-arboletes",
    nombre: "Disney Colombiano",
    lugar: "Arboletes, Antioquia",
    pais: "Colombia",
    tipo: "Aventura",
    duracion: "3 días / 2 noches",
    dias: 3,
    temporada: "Alta",
    aventura: 2,
    precio: 1390000,
    ciudadSalida: "El Pital, Huila",
    otrasSalidas: [{ ciudad: "Cartagena", precio: 950000 }],
    viajeros: 540,
    rating: 4.7,
    salida: "17 al 19 de abril, 2026",
    salidaISO: "2026-04-17",
    imagen: arboletes,
    resumen: "El volcán de lodo más grande del mundo, frente al mar.",
    descripcion:
      "Un plan divertido y diferente: flotar en el volcán de lodo, enjuagarse en el mar Caribe y cerrar el día con pescado fresco al atardecer.",
    destacados: ["Volcán de lodo", "Playa del Sol", "Atardecer caribeño"],
    incluye: incluyeBase(["Salida desde El Pital, Huila o Cartagena", "2 noches de hotel", "Desayunos", "Entrada al volcán"]),
    noIncluye: ["Almuerzos", "Bebidas", "Propinas"],
    recomendaciones: ["Ropa que se pueda manchar", "Toalla extra", "Sandalias"],
    itinerario: [
      { dia: "Día 1", titulo: "Salida", detalle: "Viaje y tarde de playa." },
      { dia: "Día 2", titulo: "Volcán de lodo", detalle: "Baño de lodo y enjuague en el mar." },
      { dia: "Día 3", titulo: "Regreso", detalle: "Mañana libre y retorno." },
    ],
  },
  {
    slug: "tour-por-el-huila",
    nombre: "Tour por el Huila",
    lugar: "Tatacoa, San Agustín y Rivera",
    pais: "Colombia",
    tipo: "Naturaleza",
    duracion: "4 días / 3 noches",
    dias: 4,
    temporada: "Media",
    aventura: 2,
    precio: 870000,
    ciudadSalida: "Bogotá",
    viajeros: 280,
    rating: 4.8,
    salida: "11 al 14 de mayo, 2026",
    salidaISO: "2026-05-11",
    imagen: huila,
    resumen: "Desierto rojo, estrellas y la cuna arqueológica de Colombia.",
    descripcion:
      "Del Desierto de la Tatacoa a los parques arqueológicos de San Agustín: cielos limpios para observación astronómica y cultura milenaria.",
    destacados: ["Desierto de la Tatacoa", "Parque Arqueológico de San Agustín", "Estrecho del Magdalena"],
    incluye: incluyeBase(["Salida desde Bogotá", "3 noches de alojamiento", "Desayunos", "Entradas a parques"]),
    noIncluye: ["Almuerzos y cenas", "Gastos personales"],
    recomendaciones: ["Bloqueador solar", "Ropa fresca", "Linterna para la noche"],
    itinerario: [
      { dia: "Día 1", titulo: "Llegada", detalle: "Traslado y noche en Neiva." },
      { dia: "Día 2", titulo: "Tatacoa", detalle: "Laberintos rojos y observatorio astronómico." },
      { dia: "Día 3", titulo: "San Agustín", detalle: "Parque arqueológico y Estrecho del Magdalena." },
      { dia: "Día 4", titulo: "Regreso", detalle: "Termales de Rivera y retorno." },
    ],
  },
  {
    slug: "conoce-tu-tierra",
    nombre: "Conoce tu tierra",
    lugar: "Huila",
    pais: "Colombia",
    tipo: "Cultura",
    duracion: "3 días / 2 noches",
    dias: 3,
    temporada: "Media",
    aventura: 1,
    precio: 670000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 210,
    rating: 4.9,
    salida: "12 al 14 de mayo, 2026",
    salidaISO: "2026-05-12",
    imagen: huila,
    resumen: "Redescubre el Huila: tradición, café y paisajes de casa.",
    descripcion:
      "Un recorrido pensado para los locales: pueblos, fincas cafeteras, gastronomía opita y los rincones que casi nadie conoce del departamento.",
    destacados: ["Ruta del café huilense", "Represa de Betania", "Gastronomía opita"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "2 noches de alojamiento", "Desayunos", "Actividades descritas"]),
    noIncluye: ["Almuerzos y cenas no descritos", "Gastos personales"],
    recomendaciones: ["Ropa cómoda", "Gorra y bloqueador", "Efectivo para artesanías"],
    itinerario: [
      { dia: "Día 1", titulo: "Salida", detalle: "Recorrido por pueblos del sur del Huila." },
      { dia: "Día 2", titulo: "Café y agua", detalle: "Finca cafetera y represa de Betania." },
      { dia: "Día 3", titulo: "Regreso", detalle: "Mercado local y retorno." },
    ],
  },
  {
    slug: "amazonas-desafia-tus-limites",
    nombre: "Desafía tus límites",
    lugar: "Leticia, Amazonas",
    pais: "Colombia",
    tipo: "Aventura",
    duracion: "3 días / 2 noches",
    dias: 3,
    temporada: "Alta",
    aventura: 3,
    precio: 0,
    ciudadSalida: "El Pital, Huila",
    viajeros: 180,
    rating: 5,
    salida: "13 al 15 de junio, 2026",
    salidaISO: "2026-06-13",
    imagen: amazonas,
    resumen: "Selva, río y comunidades: la aventura más intensa del país.",
    descripcion:
      "Navegación por el río Amazonas, caminatas nocturnas en la selva, avistamiento de delfines rosados y convivencia con comunidades indígenas.",
    destacados: ["Delfines rosados", "Isla de los Micos", "Caminata nocturna en la selva"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "2 noches de alojamiento", "Alimentación descrita", "Navegación por el río"]),
    noIncluye: ["Tasa de ingreso", "Bebidas", "Gastos personales"],
    recomendaciones: ["Vacuna de fiebre amarilla", "Repelente", "Botas de caucho"],
    itinerario: [
      { dia: "Día 1", titulo: "Llegada a Leticia", detalle: "Traslado y atardecer en el río." },
      { dia: "Día 2", titulo: "Río Amazonas", detalle: "Delfines rosados, Isla de los Micos y comunidad Ticuna." },
      { dia: "Día 3", titulo: "Regreso", detalle: "Mercado amazónico y retorno." },
    ],
  },
  {
    slug: "cundinamarca-y-boyaca",
    nombre: "Cundinamarca y Boyacá",
    lugar: "Villa de Leyva y Zipaquirá",
    pais: "Colombia",
    tipo: "Cultura",
    duracion: "5 días / 4 noches",
    dias: 5,
    temporada: "Media",
    aventura: 1,
    precio: 900000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 640,
    rating: 4.9,
    salida: "17 al 21 de julio, 2026",
    salidaISO: "2026-07-17",
    imagen: boyaca,
    resumen: "Pueblos coloniales, catedral de sal y cielos andinos infinitos.",
    descripcion:
      "Un recorrido por el corazón andino de Colombia: calles empedradas, plazas gigantes, gastronomía boyacense y paisajes de montaña que parecen pintados a mano.",
    destacados: ["Catedral de Sal de Zipaquirá", "Plaza Mayor de Villa de Leyva", "Viñedos y desierto de La Candelaria"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "4 noches de alojamiento", "Desayunos", "Entradas a atractivos"]),
    noIncluye: ["Almuerzos no descritos", "Gastos personales", "Propinas"],
    recomendaciones: ["Ropa abrigada para las noches", "Zapatos cómodos para empedrado", "Documento de identidad"],
    itinerario: [
      { dia: "Día 1", titulo: "Salida", detalle: "Viaje nocturno hacia el altiplano." },
      { dia: "Día 2", titulo: "Zipaquirá", detalle: "Visita guiada a la Catedral de Sal." },
      { dia: "Día 3", titulo: "Villa de Leyva", detalle: "Plaza Mayor, museos y atardecer en mirador." },
      { dia: "Día 4", titulo: "Desierto y viñedos", detalle: "Ráquira, La Candelaria y cata de vinos." },
      { dia: "Día 5", titulo: "Regreso", detalle: "Compras de artesanías y retorno." },
    ],
  },
  {
    slug: "antioquia",
    nombre: "Tour por Antioquia",
    lugar: "Medellín y Guatapé",
    pais: "Colombia",
    tipo: "Cultura",
    duracion: "5 días / 4 noches",
    dias: 5,
    temporada: "Alta",
    aventura: 2,
    precio: 1100000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 820,
    rating: 4.8,
    salida: "14 al 18 de agosto, 2026",
    salidaISO: "2026-08-14",
    imagen: antioquia,
    resumen: "La ciudad de la eterna primavera y el embalse más colorido del país.",
    descripcion:
      "Medellín moderna, comuna 13 con su arte urbano y el Peñón de Guatapé con 740 escalones hacia una de las vistas más impresionantes de Colombia.",
    destacados: ["Peñón de Guatapé", "Grafitour Comuna 13", "Paseo en bote por el embalse"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "4 noches de hotel", "Desayunos", "Tours guiados y traslados internos"]),
    noIncluye: ["Cenas", "Impuestos hoteleros opcionales", "Gastos personales"],
    recomendaciones: ["Protector solar", "Ropa fresca", "Efectivo para artesanías"],
    itinerario: [
      { dia: "Día 1", titulo: "Llegada a Medellín", detalle: "Traslado, city tour nocturno y cena de bienvenida." },
      { dia: "Día 2", titulo: "Comuna 13", detalle: "Grafitour, escaleras eléctricas y cultura urbana." },
      { dia: "Día 3", titulo: "Guatapé", detalle: "Peñón, zócalos y navegación por el embalse." },
      { dia: "Día 4", titulo: "Pueblos de oriente", detalle: "Santa Fe de Antioquia y puente de Occidente." },
      { dia: "Día 5", titulo: "Regreso", detalle: "Compras y retorno." },
    ],
  },
  {
    slug: "san-andres-islas",
    nombre: "San Andrés Isla",
    lugar: "San Andrés",
    pais: "Colombia",
    tipo: "Playa",
    duracion: "4 días / 3 noches",
    dias: 4,
    temporada: "Alta",
    aventura: 1,
    precio: 1900000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 1240,
    rating: 5,
    salida: "21 al 24 de agosto, 2026",
    salidaISO: "2026-08-21",
    imagen: sanandres,
    resumen: "El mar de los siete colores, snorkel y atardeceres imposibles.",
    descripcion:
      "Días en la isla donde el mar cambia de color cada 100 metros: Johnny Cay, Acuario, Hoyo Soplador y la vuelta a la isla en carrito de golf.",
    destacados: ["Johnny Cay y Acuario", "Snorkel en arrecife", "Vuelta a la isla al atardecer"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "3 noches con desayuno", "Tarjeta de turismo", "Tour náutico y traslados"]),
    noIncluye: ["Impuesto de salida", "Almuerzos y cenas", "Deportes acuáticos"],
    recomendaciones: ["Documento vigente", "Bloqueador biodegradable", "Efectivo para lanchas"],
    itinerario: [
      { dia: "Día 1", titulo: "Llegada", detalle: "Traslado al hotel y tarde en Spratt Bight." },
      { dia: "Día 2", titulo: "Johnny Cay", detalle: "Cayo, Acuario y snorkel." },
      { dia: "Día 3", titulo: "Vuelta a la isla", detalle: "Hoyo Soplador, West View y La Piscinita." },
      { dia: "Día 4", titulo: "Regreso", detalle: "Compras libres de impuestos y retorno." },
    ],
  },
  {
    slug: "caribe-colombiano",
    nombre: "Tour por el Caribe Colombiano",
    lugar: "Cartagena y Santa Marta",
    pais: "Colombia",
    tipo: "Playa",
    duracion: "6 días / 5 noches",
    dias: 6,
    temporada: "Alta",
    aventura: 1,
    precio: 1900000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 980,
    rating: 4.9,
    salida: "17 al 22 de septiembre, 2026",
    salidaISO: "2026-09-17",
    imagen: caribe,
    resumen: "Murallas coloniales, islas del Rosario y bahías doradas.",
    descripcion:
      "El Caribe colombiano completo: la ciudad amurallada, islas de agua cristalina y el encanto samario con su sierra al fondo.",
    destacados: ["Ciudad amurallada", "Islas del Rosario", "Bahía de Santa Marta"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "5 noches de hotel", "Desayunos", "Tours descritos y traslados"]),
    noIncluye: ["Impuestos de muelle", "Cenas", "Gastos personales"],
    recomendaciones: ["Ropa fresca", "Traje de baño", "Bloqueador solar"],
    itinerario: [
      { dia: "Día 1", titulo: "Salida", detalle: "Viaje hacia la costa Caribe." },
      { dia: "Día 2", titulo: "Cartagena", detalle: "City tour por la ciudad amurallada." },
      { dia: "Día 3", titulo: "Islas del Rosario", detalle: "Navegación y día de playa." },
      { dia: "Día 4", titulo: "Santa Marta", detalle: "Traslado, Camellón y atardecer." },
      { dia: "Día 5", titulo: "Playas", detalle: "Taganga y Playa Blanca." },
      { dia: "Día 6", titulo: "Regreso", detalle: "Retorno a casa." },
    ],
  },
  {
    slug: "destino-oculto",
    nombre: "Destino Oculto",
    lugar: "Sorpresa",
    pais: "Por revelar",
    tipo: "Internacional",
    duracion: "16 días / 15 noches",
    dias: 16,
    temporada: "Alta",
    aventura: 3,
    precio: 4670000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 90,
    rating: 5,
    salida: "2 al 17 de octubre, 2026",
    salidaISO: "2026-10-02",
    imagen: oculto,
    resumen: "No sabes a dónde vas. Solo sabes que vas a volver diferente.",
    descripcion:
      "Nuestro viaje insignia: revelamos el destino 48 horas antes de la salida. Tú pones la maleta y las ganas, nosotros ponemos la sorpresa.",
    destacados: ["Destino revelado 48 horas antes", "Itinerario diseñado a medida", "Experiencias exclusivas del grupo"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "15 noches de alojamiento", "Desayunos", "Experiencias sorpresa"]),
    noIncluye: ["Visados si aplican", "Comidas no descritas", "Gastos personales"],
    recomendaciones: ["Pasaporte vigente por 6 meses", "Mente abierta", "Equipaje versátil"],
    itinerario: [
      { dia: "Días 1-5", titulo: "Primer tramo", detalle: "Se revela 48 horas antes de la salida." },
      { dia: "Días 6-11", titulo: "Segundo tramo", detalle: "Experiencias sorpresa diseñadas para el grupo." },
      { dia: "Días 12-16", titulo: "Cierre", detalle: "Últimos destinos y regreso." },
    ],
  },
  {
    slug: "ciudad-de-mexico-y-cancun",
    nombre: "CD México y Cancún",
    lugar: "Ciudad de México y Cancún",
    pais: "México",
    tipo: "Internacional",
    duracion: "6 días / 5 noches",
    dias: 6,
    temporada: "Alta",
    aventura: 2,
    precio: 4890000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 410,
    rating: 4.9,
    salida: "12 al 17 de noviembre, 2026",
    salidaISO: "2026-11-12",
    imagen: mexico,
    resumen: "Pirámides milenarias, cenotes y el azul del Caribe mexicano.",
    descripcion:
      "De la capital azteca a la Riviera Maya: historia, gastronomía y playas de arena blanca en un mismo viaje.",
    destacados: ["Teotihuacán", "Chichén Itzá", "Cenotes de Yucatán"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "5 noches de alojamiento", "Desayunos", "Tours descritos y traslados"]),
    noIncluye: ["Visa si aplica", "Comidas no descritas", "Propinas"],
    recomendaciones: ["Pasaporte con 6 meses de vigencia", "Pesos mexicanos", "Repelente"],
    itinerario: [
      { dia: "Día 1", titulo: "Ciudad de México", detalle: "Zócalo, Bellas Artes y Coyoacán." },
      { dia: "Día 2", titulo: "Teotihuacán", detalle: "Pirámides del Sol y la Luna." },
      { dia: "Día 3", titulo: "Vuelo a Cancún", detalle: "Tarde libre de playa." },
      { dia: "Día 4", titulo: "Chichén Itzá", detalle: "Maravilla del mundo y cenote sagrado." },
      { dia: "Día 5", titulo: "Riviera Maya", detalle: "Isla Mujeres y día de playa." },
      { dia: "Día 6", titulo: "Regreso", detalle: "Traslado al aeropuerto." },
    ],
  },
  {
    slug: "caribe-colombiano-diciembre",
    nombre: "Tour por el Caribe Colombiano (Diciembre)",
    lugar: "Cartagena y Santa Marta",
    pais: "Colombia",
    tipo: "Playa",
    duracion: "6 días / 5 noches",
    dias: 6,
    temporada: "Alta",
    aventura: 1,
    precio: 1900000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 760,
    rating: 4.9,
    salida: "4 al 9 de diciembre, 2026",
    salidaISO: "2026-12-04",
    imagen: caribe,
    resumen: "Cierra el año con murallas iluminadas y mar turquesa.",
    descripcion:
      "La misma ruta caribeña, en su versión decembrina: Cartagena en temporada de luces, islas del Rosario y Santa Marta.",
    destacados: ["Cartagena iluminada", "Islas del Rosario", "Bahía de Santa Marta"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "5 noches de hotel", "Desayunos", "Tours descritos y traslados"]),
    noIncluye: ["Impuestos de muelle", "Cenas", "Gastos personales"],
    recomendaciones: ["Reserva con anticipación", "Traje de baño", "Bloqueador solar"],
    itinerario: [
      { dia: "Día 1", titulo: "Salida", detalle: "Viaje hacia la costa Caribe." },
      { dia: "Día 2", titulo: "Cartagena", detalle: "City tour y noche de luces decembrinas." },
      { dia: "Día 3", titulo: "Islas del Rosario", detalle: "Navegación y día de playa." },
      { dia: "Día 4", titulo: "Santa Marta", detalle: "Traslado y atardecer en la bahía." },
      { dia: "Día 5", titulo: "Playas", detalle: "Taganga y Playa Blanca." },
      { dia: "Día 6", titulo: "Regreso", detalle: "Retorno a casa." },
    ],
  },
  {
    slug: "excursion-estudiantil-tairona",
    nombre: "Excursión estudiantil - Tairona",
    lugar: "Santa Marta y Parque Tairona",
    pais: "Colombia",
    tipo: "Aventura",
    duracion: "3 días / 2 noches",
    dias: 3,
    temporada: "Alta",
    aventura: 3,
    precio: 1650000,
    ciudadSalida: "El Pital, Huila",
    viajeros: 890,
    rating: 4.8,
    salida: "11 al 13 de diciembre, 2026",
    salidaISO: "2026-12-11",
    imagen: tairona,
    resumen: "Donde la selva se lanza al mar. Plan ideal para grupos estudiantiles.",
    descripcion:
      "Senderos entre selva húmeda, playas de arena dorada rodeadas de rocas milenarias y acompañamiento permanente para grupos de colegio.",
    destacados: ["Cabo San Juan del Guía", "Playa Cristal", "Bahía de Santa Marta"],
    incluye: incluyeBase(["Salida desde El Pital, Huila", "Entrada al Parque Tairona", "2 noches de alojamiento", "Alimentación completa"]),
    noIncluye: ["Alquiler de caballo", "Bebidas", "Souvenirs"],
    recomendaciones: ["Mochila liviana", "Repelente y bloqueador", "Autorización del acudiente"],
    itinerario: [
      { dia: "Día 1", titulo: "Ingreso al parque", detalle: "Caminata a Arrecifes y tarde de playa." },
      { dia: "Día 2", titulo: "Cabo San Juan", detalle: "Sendero, snorkel y mirador." },
      { dia: "Día 3", titulo: "Regreso", detalle: "Playa Cristal y retorno." },
    ],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);

export const formatCOP = (v: number) =>
  v > 0
    ? new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(v)
    : "Por confirmar";

export const WHATSAPP =
  "https://wa.me/573203778945?text=Hola%20Cacique%20Kaahele,%20quiero%20informaci%C3%B3n%20de%20un%20viaje";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Agencia+de+Turismo+Cacique+Kaahele/data=!4m2!3m1!1s0x0:0x8d36f54e3ffa3beb";

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps?q=Agencia+de+Turismo+Cacique+Kaahele&hl=es&z=16&output=embed";

const imagenes: Record<string, string> = {
  boyaca,
  antioquia,
  sanandres,
  caribe,
  mexico,
  lajas,
  cafetero,
  tairona,
  santamarta,
  pacifico,
  arboletes,
  murillo,
  huila,
  amazonas,
  oculto,
  "eje-cafetero": cafetero,
  "santa-marta": santamarta,
  "valle-y-pacifico-colombiano": pacifico,
  "parque-tairona": tairona,
};

export const pic = (slug: string): string =>
  tours.find((t) => t.slug === slug)?.imagen ?? imagenes[slug] ?? "";
