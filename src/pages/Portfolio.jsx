export default function Portfolio() {
  return (
    <section className="portfolio-pro" id="portfolio">

      <span className="section-badge">Portfolio Web</span>

      <h2>Proyectos desarrollados</h2>

      <p className="subtitle">
        Sitios web modernos, responsive y optimizados para distintos rubros
      </p>

      <div className="portfolio-grid">

        {/* PASTELERÍA */}
        <a
          href="https://paginas-web-andrea-pateleria.vercel.app/#/"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card-pro"
        >
          <div
            className="portfolio-image"
            style={{ backgroundImage: "url('/assets/img1.jpg.png')" }}
          />

          <div className="portfolio-info">
            <span className="portfolio-tag">Web Corporativa</span>
            <h3>Pastelería Artesanal</h3>
            <p>Sitio web con múltiples secciones y diseño visual atractivo.</p>
            <strong className="portfolio-status online">Online</strong>
          </div>
        </a>

        {/* GYM */}
        <a
          href="https://gym-web-andrea.netlify.app/#/"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card-pro"
        >
          <div
            className="portfolio-image"
            style={{ backgroundImage: "url('/assets/img2.jpg.png')" }}
          />

          <div className="portfolio-info">
            <span className="portfolio-tag">Web Corporativa</span>
            <h3>Gimnasio Fitness</h3>
            <p>Web institucional con servicios, horarios y contacto.</p>
            <strong className="portfolio-status online">Online</strong>
          </div>
        </a>

        {/* LOGÍSTICA */}
        <a
          href="https://logisticapro.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="portfolio-card-pro"
        >
          <div
            className="portfolio-image"
            style={{ backgroundImage: "url('/assets/img3.jpg.png')" }}
          />

          <div className="portfolio-info">
            <span className="portfolio-tag">Landing Page</span>
            <h3>Logística Pro</h3>
            <p>Landing profesional enfocada en conversión y contacto.</p>
            <strong className="portfolio-status online">Online</strong>
          </div>
        </a>

      </div>

      {/* CTA */}
      <div className="portfolio-cta">
        <a href="#contacto" className="btn-primary btn-large">
          Quiero una web como estas
        </a>
      </div>

    </section>
  );
}
