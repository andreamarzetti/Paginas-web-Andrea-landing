export default function Portfolio() {
  return (
    <div className="portfolio-pro" id="portfolio">

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
            style={{ backgroundImage: "url('../assets/img1.jpg.png')" }}
          />

          <div className="portfolio-info">
            <span className="portfolio-tag">Web Corporativa</span>
            <h3>Pastelería Artesanal</h3>
            <p>
              Sitio web con múltiples secciones y diseño visual atractivo.
            </p>
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
            style={{ backgroundImage: "url('../assets/img2.jpg.png')" }}
          />

          <div className="portfolio-info">
            <span className="portfolio-tag">Web Corporativa</span>
            <h3>Gimnasio Fitness</h3>
            <p>
              Web institucional con servicios, horarios y contacto.
            </p>
            <strong className="portfolio-status online">Online</strong>
          </div>
        </a>

        {/* LANDING DEMO */}
        <div className="portfolio-card-pro disabled">
          <div className="portfolio-image placeholder" />

          <div className="portfolio-info">
            <span className="portfolio-tag">Landing Page</span>
            <h3>Landing Comercial</h3>
            <p>Ejemplo de landing enfocada en conversión.</p>
            <strong className="portfolio-status soon">Próximamente</strong>
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="portfolio-cta">
        <a href="#contacto" className="btn-primary">
          Quiero una web como estas
        </a>
      </div>

    </div>
  );
}
