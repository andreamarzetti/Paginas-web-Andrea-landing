import { LuArrowRight, LuSparkles } from "react-icons/lu";

export default function CTA() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-box" data-reveal>
          <div className="cta-beam" aria-hidden="true" />
          <div className="cta-copy">
            <h2 id="cta-title">¿Listo para tener tu web profesional?</h2>
            <p>Contanos tu idea y te asesoramos sin compromiso.</p>
          </div>
          <div className="cta-actions">
            <a href="#contacto" className="btn btn-primary btn-lg">
              Contactanos ahora <LuArrowRight aria-hidden="true" />
            </a>
            <a href="#asistente" className="btn btn-ghost btn-lg">
              <LuSparkles aria-hidden="true" /> Usar el asistente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
