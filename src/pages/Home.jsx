import Hero from "./Hero";
import Servicios from "./Servicios";
import DemoInteractiva from "./DemoInteractiva";
import Proceso from "./Proceso";
import Portfolio from "./Portfolio";
import Asistente from "./Asistente";
import Nosotros from "./Nosotros";
import CTA from "./Cta";
import Contacto from "./Contacto";
import useReveal from "../hooks/useReveal";

export default function Home() {
  useReveal();
  return (
    <main id="main">
      <Hero />
      <Servicios />
      <DemoInteractiva />
      <Proceso />
      <Portfolio />
      <Asistente />
      <Nosotros />
      <CTA />
      <Contacto />
    </main>
  );
}
