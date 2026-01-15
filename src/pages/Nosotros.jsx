export default function Nosotros() {
  return (
    <div className="section section-soft" id="nosotros">

      <span className="section-badge">Sobre nosotros</span>

      <h2>Diseñamos experiencias digitales que convierten</h2>

      <p className="subtitle" style={{ maxWidth: "760px", margin: "0 auto" }}>
        En <strong>Vektra Tech</strong> ayudamos a emprendedores y negocios a
        construir una presencia online profesional, clara y enfocada en
        generar resultados reales.
      </p>

      <div className="cards" style={{ marginTop: "60px" }}>
        <div className="card">
          <h3>🎯 Enfoque en resultados</h3>
          <p>
            No solo diseñamos sitios lindos. Creamos páginas pensadas para
            atraer clientes, generar confianza y aumentar conversiones.
          </p>
        </div>

        <div className="card">
          <h3>⚡ Desarrollo moderno</h3>
          <p>
            Utilizamos tecnologías actuales para lograr sitios rápidos,
            responsivos y optimizados para cualquier dispositivo.
          </p>
        </div>

        <div className="card">
          <h3>🤝 Acompañamiento real</h3>
          <p>
            Te asesoramos en cada etapa del proyecto para que tu web
            represente tu negocio de la mejor manera.
          </p>
        </div>
      </div>

    </div>
  );
}
