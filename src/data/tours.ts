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

export const tours: Tour[] = [
  {
    slug: "cundinamarca-y-boyaca",
    nombre: "Cundinamarca y Boyacá",
    lugar: "Villa de Leyva y Zipaquirá",
    pais: "Colombia",
    tipo: "Cultura",
    duracion: "4 días / 3 noches",
    dias: 4,
    temporada: "Media",
    aventura: 1,
    precio: 1900000,
    viajeros: 640,
    rating: 4.9,
    salida: "14 de marzo, 2026",
    salidaISO: "2026-03-14",
    imagen: boyaca,
    resumen: "Pueblos coloniales, catedral de sal y cielos andinos infinitos.",
    descripcion:
      "Un recorrido por el corazón andino de Colombia: calles empedradas, plazas gigantes, gastronomía boyacense y paisajes de montaña que parecen pintados a mano.",
    destacados: ["Catedral de Sal de Zipaquirá", "Plaza Mayor de Villa de Leyva", "Viñedos y desierto de La Candelaria"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "3 noches de alojamiento", "Desayunos y 2 cenas típicas", "Guía local certificado", "Entradas a atractivos", "Seguro de viaje"],
    noIncluye: ["Almuerzos no descritos", "Gastos personales", "Propinas", "Actividades opcionales"],
    recomendaciones: ["Ropa abrigada para las noches", "Zapatos cómodos para empedrado", "Documento de identidad"],
    itinerario: [
      { dia: "Día 1", titulo: "Salida y Zipaquirá", detalle: "Encuentro en la madrugada, desayuno en ruta y visita guiada a la Catedral de Sal." },
      { dia: "Día 2", titulo: "Villa de Leyva", detalle: "Recorrido por la Plaza Mayor, museos y atardecer en mirador." },
      { dia: "Día 3", titulo: "Desierto y viñedos", detalle: "Ráquira, La Candelaria y cata de vinos boyacenses." },
      { dia: "Día 4", titulo: "Regreso", detalle: "Mañana libre, compras de artesanías y retorno." },
    ],
  },
  {
    slug: "antioquia",
    nombre: "Antioquia",
    lugar: "Medellín y Guatapé",
    pais: "Colombia",
    tipo: "Cultura",
    duracion: "5 días / 4 noches",
    dias: 5,
    temporada: "Alta",
    aventura: 2,
    precio: 1900000,
    viajeros: 820,
    rating: 4.8,
    salida: "11 de abril, 2026",
    salidaISO: "2026-04-11",
    imagen: antioquia,
    resumen: "La ciudad de la eterna primavera y el embalse más colorido del país.",
    descripcion:
      "Medellín moderna, comuna 13 con su arte urbano y el Peñón de Guatapé con 740 escalones hacia una de las vistas más impresionantes de Colombia.",
    destacados: ["Peñón de Guatapé", "Grafitour Comuna 13", "Paseo en bote por el embalse"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Vuelos o transporte terrestre", "4 noches de hotel", "Desayunos", "Tours guiados", "Traslados internos", "Seguro de viaje"],
    noIncluye: ["Cenas", "Impuestos hoteleros opcionales", "Gastos personales"],
    recomendaciones: ["Protector solar", "Ropa fresca", "Efectivo para artesanías"],
    itinerario: [
      { dia: "Día 1", titulo: "Llegada a Medellín", detalle: "Traslado, city tour nocturno y cena de bienvenida." },
      { dia: "Día 2", titulo: "Comuna 13", detalle: "Grafitour, escaleras eléctricas y cultura urbana." },
      { dia: "Día 3", titulo: "Guatapé", detalle: "Peñón, zócalos y navegación por el embalse." },
      { dia: "Día 4", titulo: "Pueblos de oriente", detalle: "Santa Fe de Antioquia y puente de Occidente." },
      { dia: "Día 5", titulo: "Regreso", detalle: "Compras y traslado al aeropuerto." },
    ],
  },
  {
    slug: "san-andres-islas",
    nombre: "San Andrés Islas",
    lugar: "San Andrés",
    pais: "Colombia",
    tipo: "Playa",
    duracion: "5 días / 4 noches",
    dias: 5,
    temporada: "Alta",
    aventura: 1,
    precio: 1900000,
    viajeros: 1240,
    rating: 5,
    salida: "9 de mayo, 2026",
    salidaISO: "2026-05-09",
    imagen: sanandres,
    resumen: "El mar de los siete colores, snorkel y atardeceres imposibles.",
    descripcion:
      "Cinco días en la isla donde el mar cambia de color cada 100 metros: Johnny Cay, Acuario, Hoyo Soplador y la vuelta a la isla en carrito de golf.",
    destacados: ["Johnny Cay y Acuario", "Snorkel en arrecife", "Vuelta a la isla al atardecer"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Tiquetes aéreos", "4 noches con desayuno", "Tarjeta de turismo", "Tour náutico", "Traslados aeropuerto-hotel", "Asistencia médica"],
    noIncluye: ["Impuesto de salida", "Almuerzos y cenas", "Deportes náuticos extra"],
    recomendaciones: ["Bloqueador biodegradable", "Traje de baño y toalla rápida", "Cédula o pasaporte vigente"],
    itinerario: [
      { dia: "Día 1", titulo: "Bienvenida isleña", detalle: "Traslado, cóctel de bienvenida y atardecer en West View." },
      { dia: "Día 2", titulo: "Tour náutico", detalle: "Johnny Cay, Acuario y Rocky Cay." },
      { dia: "Día 3", titulo: "Vuelta a la isla", detalle: "Hoyo Soplador, La Piscinita y cultura raizal." },
      { dia: "Día 4", titulo: "Día libre", detalle: "Playa, buceo opcional o Cayo Bolívar." },
      { dia: "Día 5", titulo: "Regreso", detalle: "Compras libres de impuestos y vuelo de retorno." },
    ],
  },
  {
    slug: "caribe-colombiano",
    nombre: "Caribe Colombiano",
    lugar: "Cartagena y Barú",
    pais: "Colombia",
    tipo: "Playa",
    duracion: "4 días / 3 noches",
    dias: 4,
    temporada: "Alta",
    aventura: 1,
    precio: 1900000,
    viajeros: 980,
    rating: 4.9,
    salida: "6 de junio, 2026",
    salidaISO: "2026-06-06",
    imagen: caribe,
    resumen: "Ciudad amurallada, islas del Rosario y noches de champeta.",
    descripcion:
      "Historia, color y mar en el mismo viaje: murallas al atardecer, playas de arena blanca en Barú y la energía del Caribe hasta la madrugada.",
    destacados: ["Ciudad amurallada", "Islas del Rosario", "Atardecer en Café del Mar"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Transporte", "3 noches de hotel", "Desayunos", "Tour a islas con almuerzo", "City tour", "Seguro de viaje"],
    noIncluye: ["Impuesto de muelle", "Cenas", "Bebidas"],
    recomendaciones: ["Ropa de lino y sombrero", "Hidratación constante", "Sandalias cómodas"],
    itinerario: [
      { dia: "Día 1", titulo: "Llegada", detalle: "Traslado y caminata por el centro histórico." },
      { dia: "Día 2", titulo: "Islas del Rosario", detalle: "Navegación, playa y almuerzo típico." },
      { dia: "Día 3", titulo: "Cartagena profunda", detalle: "Getsemaní, Castillo San Felipe y Cerro de la Popa." },
      { dia: "Día 4", titulo: "Regreso", detalle: "Mañana libre y retorno." },
    ],
  },
  {
    slug: "ciudad-de-mexico-y-cancun",
    nombre: "Ciudad de México y Cancún",
    lugar: "CDMX y Riviera Maya",
    pais: "México",
    tipo: "Internacional",
    duracion: "8 días / 7 noches",
    dias: 8,
    temporada: "Alta",
    aventura: 2,
    precio: 1900000,
    viajeros: 410,
    rating: 4.9,
    salida: "18 de julio, 2026",
    salidaISO: "2026-07-18",
    imagen: mexico,
    resumen: "Pirámides, tacos, cenotes y el turquesa del Caribe mexicano.",
    descripcion:
      "Del corazón azteca al paraíso maya: Teotihuacán, Coyoacán, Chichén Itzá, cenotes secretos y días enteros de playa en Cancún.",
    destacados: ["Teotihuacán", "Chichén Itzá", "Cenotes de Yucatán", "Playa Delfines"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Vuelos internacionales", "7 noches de alojamiento", "Desayunos", "Tours descritos", "Traslados", "Asistencia médica internacional"],
    noIncluye: ["Visa si aplica", "Comidas no descritas", "Propinas"],
    recomendaciones: ["Pasaporte con 6 meses de vigencia", "Dólares o pesos mexicanos", "Repelente"],
    itinerario: [
      { dia: "Día 1-2", titulo: "Ciudad de México", detalle: "Zócalo, Bellas Artes y Coyoacán." },
      { dia: "Día 3", titulo: "Teotihuacán", detalle: "Pirámides del Sol y la Luna." },
      { dia: "Día 4", titulo: "Vuelo a Cancún", detalle: "Tarde libre de playa." },
      { dia: "Día 5", titulo: "Chichén Itzá", detalle: "Maravilla del mundo y cenote sagrado." },
      { dia: "Día 6-7", titulo: "Riviera Maya", detalle: "Isla Mujeres y días de playa." },
      { dia: "Día 8", titulo: "Regreso", detalle: "Traslado al aeropuerto." },
    ],
  },
  {
    slug: "santuario-de-las-lajas-y-ecuador",
    nombre: "Santuario de Las Lajas y Ecuador",
    lugar: "Ipiales y Quito",
    pais: "Colombia / Ecuador",
    tipo: "Internacional",
    duracion: "6 días / 5 noches",
    dias: 6,
    temporada: "Media",
    aventura: 2,
    precio: 1900000,
    viajeros: 360,
    rating: 4.8,
    salida: "15 de agosto, 2026",
    salidaISO: "2026-08-15",
    imagen: lajas,
    resumen: "Una catedral suspendida sobre el cañón y la mitad del mundo.",
    descripcion:
      "Fe, historia y frontera: el santuario gótico más impresionante de América, Otavalo, la Mitad del Mundo y el casco colonial de Quito.",
    destacados: ["Santuario de Las Lajas", "Mitad del Mundo", "Mercado de Otavalo"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Transporte terrestre", "5 noches de alojamiento", "Desayunos", "Guía acompañante", "Entradas", "Seguro internacional"],
    noIncluye: ["Almuerzos y cenas", "Gastos personales"],
    recomendaciones: ["Documento de identidad vigente", "Ropa por capas", "Efectivo en dólares"],
    itinerario: [
      { dia: "Día 1", titulo: "Ruta al sur", detalle: "Viaje panorámico y noche en Ipiales." },
      { dia: "Día 2", titulo: "Las Lajas", detalle: "Santuario, cañón del Guáitara y teleférico." },
      { dia: "Día 3", titulo: "Cruce a Ecuador", detalle: "Otavalo y laguna de Cuicocha." },
      { dia: "Día 4", titulo: "Quito", detalle: "Centro histórico y La Ronda." },
      { dia: "Día 5", titulo: "Mitad del Mundo", detalle: "Monumento y museo intiñan." },
      { dia: "Día 6", titulo: "Regreso", detalle: "Retorno a Colombia." },
    ],
  },
  {
    slug: "eje-cafetero",
    nombre: "Eje Cafetero",
    lugar: "Salento y Valle del Cocora",
    pais: "Colombia",
    tipo: "Naturaleza",
    duracion: "4 días / 3 noches",
    dias: 4,
    temporada: "Media",
    aventura: 2,
    precio: 1900000,
    viajeros: 760,
    rating: 4.9,
    salida: "12 de septiembre, 2026",
    salidaISO: "2026-09-12",
    imagen: cafetero,
    resumen: "Palmas de cera gigantes, fincas de café y balcones de colores.",
    descripcion:
      "El paisaje cultural cafetero declarado Patrimonio de la Humanidad: caminatas entre neblina, catación de café de origen y pueblos que parecen de acuarela.",
    destacados: ["Valle del Cocora", "Finca cafetera y catación", "Filandia y Salento"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Transporte", "3 noches en finca-hotel", "Desayunos", "Tour del café", "Caminata guiada", "Seguro de viaje"],
    noIncluye: ["Willys al Cocora", "Cenas", "Gastos personales"],
    recomendaciones: ["Impermeable ligero", "Botas de caminata", "Ropa de cambio"],
    itinerario: [
      { dia: "Día 1", titulo: "Llegada", detalle: "Check-in en finca y recorrido por Salento." },
      { dia: "Día 2", titulo: "Valle del Cocora", detalle: "Caminata entre palmas de cera." },
      { dia: "Día 3", titulo: "Ruta del café", detalle: "Cultivo, tostión y catación." },
      { dia: "Día 4", titulo: "Filandia y regreso", detalle: "Mirador y retorno." },
    ],
  },
  {
    slug: "parque-tairona",
    nombre: "Parque Tairona",
    lugar: "Magdalena",
    pais: "Colombia",
    tipo: "Aventura",
    duracion: "3 días / 2 noches",
    dias: 3,
    temporada: "Alta",
    aventura: 3,
    precio: 1900000,
    viajeros: 890,
    rating: 4.8,
    salida: "10 de octubre, 2026",
    salidaISO: "2026-10-10",
    imagen: tairona,
    resumen: "Donde la selva se lanza al mar. Cabo San Juan y playas vírgenes.",
    descripcion:
      "Senderos entre selva húmeda, playas de arena dorada rodeadas de rocas milenarias y noches escuchando el mar desde una hamaca.",
    destacados: ["Cabo San Juan del Guía", "Playa Cristal", "Piscina natural de Arrecifes"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Transporte", "Entrada al parque", "2 noches de alojamiento ecológico", "Alimentación completa", "Guía interpretativo", "Seguro de aventura"],
    noIncluye: ["Alquiler de caballo", "Bebidas", "Souvenirs"],
    recomendaciones: ["Mochila liviana", "Repelente y bloqueador", "Buen estado físico"],
    itinerario: [
      { dia: "Día 1", titulo: "Ingreso al parque", detalle: "Caminata a Arrecifes y tarde de playa." },
      { dia: "Día 2", titulo: "Cabo San Juan", detalle: "Sendero, snorkel y mirador." },
      { dia: "Día 3", titulo: "Playa Cristal", detalle: "Navegación y regreso." },
    ],
  },
  {
    slug: "santa-marta",
    nombre: "Santa Marta",
    lugar: "Magdalena",
    pais: "Colombia",
    tipo: "Playa",
    duracion: "4 días / 3 noches",
    dias: 4,
    temporada: "Alta",
    aventura: 1,
    precio: 1900000,
    viajeros: 1050,
    rating: 4.7,
    salida: "7 de noviembre, 2026",
    salidaISO: "2026-11-07",
    imagen: santamarta,
    resumen: "Bahía dorada, Minca y los atardeceres más cálidos del Caribe.",
    descripcion:
      "La bahía más linda de América combinada con la sierra: café de altura en Minca, playas de Taganga y noches en el Camellón.",
    destacados: ["Bahía de Santa Marta", "Minca y cascadas", "Taganga"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Transporte", "3 noches de hotel", "Desayunos", "Tour a Minca", "Traslados", "Seguro de viaje"],
    noIncluye: ["Cenas", "Actividades opcionales"],
    recomendaciones: ["Ropa fresca", "Traje de baño", "Zapatos para caminata suave"],
    itinerario: [
      { dia: "Día 1", titulo: "Llegada", detalle: "Camellón y atardecer en la bahía." },
      { dia: "Día 2", titulo: "Minca", detalle: "Cascadas, café y hamaca gigante." },
      { dia: "Día 3", titulo: "Playas", detalle: "Taganga y Playa Blanca." },
      { dia: "Día 4", titulo: "Regreso", detalle: "Quinta de San Pedro Alejandrino y retorno." },
    ],
  },
  {
    slug: "valle-y-pacifico-colombiano",
    nombre: "Valle y Pacífico Colombiano",
    lugar: "Buenaventura y Bahía Málaga",
    pais: "Colombia",
    tipo: "Naturaleza",
    duracion: "5 días / 4 noches",
    dias: 5,
    temporada: "Alta",
    aventura: 3,
    precio: 1900000,
    viajeros: 320,
    rating: 5,
    salida: "8 de agosto, 2026",
    salidaISO: "2026-08-08",
    imagen: pacifico,
    resumen: "Avistamiento de ballenas jorobadas y selva que toca el océano.",
    descripcion:
      "Cada año las ballenas jorobadas recorren miles de kilómetros para dar a luz en el Pacífico colombiano. Verlas saltar a pocos metros no se olvida jamás.",
    destacados: ["Avistamiento de ballenas", "Cascada La Sierpe", "Gastronomía del Pacífico"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Transporte y lancha", "4 noches en eco-lodge", "Alimentación completa", "Avistamiento con biólogo", "Chalecos y equipo", "Seguro de aventura"],
    noIncluye: ["Bebidas alcohólicas", "Gastos personales"],
    recomendaciones: ["Impermeable", "Pastillas para el mareo", "Cámara con protección de agua"],
    itinerario: [
      { dia: "Día 1", titulo: "Llegada al Pacífico", detalle: "Traslado en lancha al eco-lodge." },
      { dia: "Día 2", titulo: "Ballenas", detalle: "Salida de avistamiento con guía biólogo." },
      { dia: "Día 3", titulo: "Selva y cascada", detalle: "Sendero a La Sierpe y manglares." },
      { dia: "Día 4", titulo: "Cultura", detalle: "Comunidad local, música y gastronomía." },
      { dia: "Día 5", titulo: "Regreso", detalle: "Retorno a Cali." },
    ],
  },
  {
    slug: "arboletes",
    nombre: "Arboletes",
    lugar: "Antioquia",
    pais: "Colombia",
    tipo: "Aventura",
    duracion: "3 días / 2 noches",
    dias: 3,
    temporada: "Baja",
    aventura: 2,
    precio: 1900000,
    viajeros: 540,
    rating: 4.7,
    salida: "6 de febrero, 2026",
    salidaISO: "2026-02-06",
    imagen: arboletes,
    resumen: "El volcán de lodo más grande del mundo, frente al mar.",
    descripcion:
      "Un plan divertido y diferente: flotar en el volcán de lodo, enjuagarse en el mar Caribe y cerrar el día con pescado fresco al atardecer.",
    destacados: ["Volcán de lodo", "Playa del Sol", "Atardecer caribeño"],
    incluye: ["Salida desde El Pital, Huila", "Transporte terrestre y aéreo", "Transporte", "2 noches de hotel", "Desayunos", "Entrada al volcán", "Guía acompañante", "Seguro de viaje"],
    noIncluye: ["Almuerzos", "Bebidas", "Propinas"],
    recomendaciones: ["Ropa que se pueda manchar", "Toalla extra", "Sandalias"],
    itinerario: [
      { dia: "Día 1", titulo: "Salida", detalle: "Viaje y tarde de playa." },
      { dia: "Día 2", titulo: "Volcán de lodo", detalle: "Baño de lodo y enjuague en el mar." },
      { dia: "Día 3", titulo: "Regreso", detalle: "Mañana libre y retorno." },
    ],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);

export const formatCOP = (v: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(v);

export const WHATSAPP =
  "https://wa.me/573203778945?text=Hola%20Cacique%20Kaahele,%20quiero%20informaci%C3%B3n%20de%20un%20viaje";

export const pic = (slug: string): string => tours.find((t) => t.slug === slug)?.imagen ?? "";
