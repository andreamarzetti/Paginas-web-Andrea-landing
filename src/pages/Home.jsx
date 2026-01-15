import Servicios from "./Servicios";
import Portfolio from "./Portfolio";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Proceso from "./Proceso";
import CTA from "./Cta";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-pro">
        <div className="hero-pro-content">
          <span className="hero-badge">Diseño & Desarrollo Web</span>

          <h1>
            Páginas web profesionales<br />
            <span>que venden por vos</span>
          </h1>

          <p>
            Creamos landing pages y sitios web modernos para negocios que
            quieren verse profesionales y conseguir más clientes.
          </p>

          <div className="hero-actions">
            <a href="#contacto" className="btn-primary">
              Hablemos
            </a>
            <a href="#portfolio" className="btn-outline">
              Ver trabajos
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <Servicios />
      </section>

      {/* PROCESO */}
      <section id="proceso" className="section section-soft">
        <Proceso />
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section">
        <Portfolio />
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="section">
        <Nosotros />
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section section-dark">
        <Contacto />
      </section>
      
      {/* CTA */}
      <section className="section section-cta">
        <CTA />
      </section>

    </>
  );
}
