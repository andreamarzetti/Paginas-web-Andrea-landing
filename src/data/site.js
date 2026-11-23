/* ==========================================================
   VEKTRA TECH · Fuente única de contenido
   Editá acá datos de contacto, servicios y proyectos.
   ========================================================== */

// Identidad: "original" usa el isotipo recortado del logo actual.
// "svg" usa la versión vectorial propuesta (pendiente de aprobación).
export const BRAND_MARK = "original";

export const CONTACT = {
  whatsappNumber: "5491122631648",
  email: "andreamarzetti.9@gmail.com",
  instagramUrl: "https://www.instagram.com/vektra_tech/",
  instagramHandle: "@vektra_tech",
  responseTime: "Respondemos dentro de las 24 hs hábiles",
};

export const whatsappLink = (message) =>
  `https://wa.me/${CONTACT.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#demo", label: "Demo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#nosotros", label: "Nosotros" },
];

export const SERVICES = [
  {
    id: "web",
    code: "02",
    tag: "Web profesional",
    title: "Páginas Web Profesionales",
    description:
      "Sitios web con varias secciones, formulario de contacto, WhatsApp y diseño moderno para tu negocio.",
    features: ["Varias secciones", "Formulario de contacto", "WhatsApp integrado"],
    example: "#proyecto-gym",
  },
  {
    id: "landing",
    code: "01",
    tag: "Landing page",
    title: "Landing Pages",
    description:
      "Páginas de una sola sección diseñadas para vender. Ideales para Instagram, campañas y anuncios.",
    features: ["Una sección, foco total", "Para campañas e Instagram"],
    example: "#proyecto-logistica",
  },
  {
    id: "ecommerce",
    code: "03",
    tag: "Ecommerce",
    title: "Tiendas Online",
    description:
      "Tu tienda online lista para vender 24/7. Con catálogo de productos, carrito de compras, medios de pago y gestión simple.",
    features: ["Catálogo y carrito", "Medios de pago"],
    example: "#proyecto-ecommerce",
  },
];

export const PROJECTS = [
  {
    id: "proyecto-ecommerce",
    title: "Ecommerce de Amigurumis",
    tag: "Ecommerce",
    description:
      "Tienda online optimizada para ventas con carrito, checkout y gestión de productos.",
    url: "https://vbternurastejidas.com/",
    domain: "vbternurastejidas.com",
    image: "/assets/proyecto-4.webp",
    imageSm: "/assets/proyecto-4-sm.webp",
    featured: true,
  },
  {
    id: "proyecto-logistica",
    title: "Logística Pro",
    tag: "Landing Page",
    description: "Landing profesional enfocada en conversión y contacto.",
    url: "https://logisticapro.netlify.app/",
    domain: "logisticapro.netlify.app",
    image: "/assets/proyecto-3.webp",
    imageSm: "/assets/proyecto-3-sm.webp",
  },
  {
    id: "proyecto-gym",
    title: "Gimnasio Fitness",
    tag: "Web Corporativa",
    description: "Web institucional con servicios, horarios y contacto.",
    url: "https://gym-web-andrea.netlify.app/#/",
    domain: "gym-web-andrea.netlify.app",
    image: "/assets/proyecto-2.webp",
    imageSm: "/assets/proyecto-2-sm.webp",
  },
  {
    id: "proyecto-pasteleria",
    title: "Pastelería Artesanal",
    tag: "Web Corporativa",
    description: "Sitio web con múltiples secciones y diseño visual atractivo.",
    url: "https://paginas-web-andrea-pateleria.vercel.app/#/",
    domain: "paginas-web-andrea-pateleria.vercel.app",
    image: "/assets/proyecto-1.webp",
    imageSm: "/assets/proyecto-1-sm.webp",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Idea & Objetivos",
    text: "Analizamos tu negocio, tu público y qué necesitás lograr con tu web.",
  },
  {
    n: "02",
    title: "Diseño",
    text: "Creamos un diseño moderno alineado a tu marca y pensado para convertir.",
  },
  {
    n: "03",
    title: "Desarrollo",
    text: "Programamos tu sitio optimizado, rápido y adaptable a todos los dispositivos.",
  },
  {
    n: "04",
    title: "Entrega & Soporte",
    text: "Publicamos tu web y te acompañamos para que empiece a generar resultados.",
  },
];
