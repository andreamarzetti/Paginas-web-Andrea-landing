import { LuArrowUpRight } from "react-icons/lu";
import Hero from "./Hero";
import Kits from "./Kits";
import Experiencia from "./Experiencia";
import Playground from "./Playground";
import Proceso from "./Proceso";
import Cotizador from "./Cotizador";
import Preguntas from "./Preguntas";
import { whatsappLink } from "../data/site";

export default function Home() {
  return (
    <main>
      <Hero />
      <Kits />
      <Experiencia />
      <Playground />
      <Proceso />
      <Cotizador />
      <Preguntas />

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <h2>Tu casa puede hacer más por vos.</h2>
            <p>Contanos qué te gustaría automatizar. Nosotros te ayudamos a dar el primer paso.</p>
          </div>
          <a className="btn" href={whatsappLink("Hola, quiero empezar a automatizar mi casa.")} target="_blank" rel="noopener noreferrer">
            Quiero mi casa inteligente <LuArrowUpRight className="arrow" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
