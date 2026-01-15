export default function Servicios() {
  return (
    <div className="services-pro">

      <span className="section-badge">Servicios</span>

      <h2>Soluciones digitales para hacer crecer tu negocio</h2>

      <p className="subtitle">
        Te ayudamos a vender más, mostrarte profesional
        y ordenar tu negocio con herramientas simples y efectivas.
      </p>

      <div className="cards">

        {/* LANDING */}
        <div className="card service-card">
          <div className="service-icon">🚀</div>
          <h3>Landing Pages</h3>
          <p>
            Páginas de una sola sección diseñadas para vender.
            Ideales para Instagram, campañas y anuncios.
          </p>
          <a href="#portfolio" className="service-link">
            Ver ejemplos →
          </a>
        </div>

        {/* WEB */}
        <div className="card service-card">
          <div className="service-icon">🌐</div>
          <h3>Páginas Web Profesionales</h3>
          <p>
            Sitios web con varias secciones, formulario de contacto,
            WhatsApp y diseño moderno para tu negocio.
          </p>
          <a href="#portfolio" className="service-link">
            Ver ejemplos →
          </a>
        </div>
    {/* SISTEMAS */}<div className="card service-card service-disabled">
  <div className="service-icon">📊</div>
  <h3>Soluciones de Gestión</h3>
  <p>
   Herramientas personalizadas para controlar ventas,
            stock, gastos y organizar mejor tu negocio.
    <br />
    <strong className="coming-soon">Próximamente disponible.</strong>
  </p>
  <span className="service-note">
    Podés consultarlo sin compromiso
  </span>
</div>
      </div>

    </div>
  );
}
  
           
