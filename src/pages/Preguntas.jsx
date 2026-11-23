import { LuArrowUpRight } from "react-icons/lu";
import { FAQ, whatsappLink } from "../data/site";

export default function Preguntas() {
  return (
    <section className="section" id="preguntas">
      <div className="container faq-grid">
        <div className="faq-intro">
          <span className="eyebrow">Antes de empezar</span>
          <h2>Preguntas frecuentes.</h2>
          <p>Si tenés otra consulta, escribinos. Te ayudamos a encontrar una solución para tu espacio.</p>
          <a className="btn btn-dark" href={whatsappLink("Hola, tengo una consulta sobre los kits de domótica.")} target="_blank" rel="noopener noreferrer">
            Hacer una consulta <LuArrowUpRight className="arrow" aria-hidden="true" />
          </a>
        </div>
        <div>
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
