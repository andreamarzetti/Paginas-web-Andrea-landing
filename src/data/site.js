/* ==========================================================
   VEKTRA TECH · DOMÓTICA · Configuración y contenido
   Editá acá contacto, kits, precios, preguntas y FAQ.
   ========================================================== */

// Identidad: "original" usa el isotipo recortado del logo actual.
// "svg" usa la versión vectorial propuesta (pendiente de aprobación).
export const BRAND_MARK = "original";

export const CONTACT = {
  // Código de país y área, sin +, espacios ni guiones.
  whatsappNumber: "5491122631648",
  email: "andreamarzetti.9@gmail.com",
  instagramUrl: "https://www.instagram.com/vektra_tech/",
  instagramHandle: "@vektra_tech",
  zone: "CABA y GBA · Argentina",
};

export const whatsappLink = (message = "Hola, quiero hacer una consulta.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const money = (value) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(value);

export const NAV_LINKS = [
  { href: "#kits", label: "Kits" },
  { href: "#experiencia", label: "Cómo funciona" },
  { href: "#cotizador", label: "Encontrá tu kit" },
  { href: "#preguntas", label: "Preguntas" },
];

// Dejá paymentUrl vacío hasta tener el link real de Mercado Pago.
// icon: "light" | "security" | "sparkles"
export const KITS = [
  {
    id: "inicio", name: "Kit Inicio Inteligente", category: "Para empezar",
    description: "El primer paso para sumar comodidad y control a tu hogar.",
    icon: "light", art: "lighting",
    items: ["Iluminación inteligente", "Control de dispositivos compatibles", "Configuración y guía inicial"],
    price: 120000, paymentUrl: "",
  },
  {
    id: "seguridad", name: "Kit Seguridad y Control", category: "Más tranquilidad",
    description: "Una solución para estar más conectado con lo que pasa en casa.",
    icon: "security", art: "security",
    items: ["Cámara WiFi", "Sensor de apertura", "Sensor de movimiento"],
    price: 210000, paymentUrl: "",
  },
  {
    id: "iluminacion", name: "Kit Iluminación Ambiente", category: "Tu espacio, a tu manera",
    description: "Creá ambientes y escenas de luz para cada momento del día.",
    icon: "sparkles", art: "climate",
    items: ["Llave inteligente", "Módulo de control", "Iluminación LED inteligente"],
    price: 240000, paymentUrl: "",
  },
];

// Cotizador en tres pasos. La recomendación es orientativa, no una cotización cerrada.
export const QUESTIONS = [
  { key: "space", title: "¿Para qué espacio estás buscando una solución?", options: ["Casa o departamento", "Local u oficina", "Obra o proyecto"] },
  { key: "goal", title: "¿Qué te gustaría mejorar primero?", options: ["Iluminación y comodidad", "Seguridad y monitoreo", "Climatización y control", "Un poco de todo"] },
  { key: "size", title: "¿Qué tamaño tiene el espacio?", options: ["1 o 2 ambientes", "3 a 4 ambientes", "5 ambientes o más"] },
];

export const FAQ = [
  { q: "¿Necesito saber de tecnología para usar los kits?", a: "No. La propuesta es que recibas orientación y acompañamiento para configurar y usar los dispositivos. Te explicamos cada paso de manera sencilla." },
  { q: "¿Puedo empezar con un solo ambiente?", a: "Sí. Podés comenzar con una solución pequeña e ir sumando dispositivos compatibles a medida que quieras automatizar otros espacios." },
  { q: "¿Los dispositivos funcionan con Alexa o Google Home?", a: "La compatibilidad depende de cada producto. Antes de confirmar tu kit verificamos qué asistentes y aplicaciones admite cada dispositivo." },
  { q: "¿Hacen instalación?", a: "Podemos coordinar instalación según el tipo de equipo, la ubicación y el alcance del proyecto. Algunos dispositivos son autoinstalables y otros requieren un profesional." },
  { q: "¿Puedo pedir una solución para mi negocio?", a: "Sí. Podemos evaluar automatizaciones para locales, oficinas, consorcios y obras. Escribinos para conversar sobre el proyecto." },
];
