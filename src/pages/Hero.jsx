import { LuArrowRight, LuCheck, LuSmartphone, LuMessageCircle, LuZap } from "react-icons/lu";

/* Fondo "Vector": líneas que convergen hacia un punto, como la V del logo. */
function VectorField() {
  const lines = Array.from({ length: 13 }, (_, i) => i);
  return (
    <svg className="hero-field" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="hf-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2f6bff" stopOpacity="0" />
          <stop offset=".5" stopColor="#22d3ee" stopOpacity=".55" />
          <stop offset="1" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
      </defs>
      {lines.map((i) => (
        <path
          key={i}
          d={`M${-100 + i * 110} -20 L860 760`}
          className="hero-field-line"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
    </svg>
  );
}

/* Ventana de navegador que se "construye": wireframe -> diseño terminado. */
function BuildWindow() {
  return (
    <div className="build" aria-hidden="true">
      <div className="build-window">
        <div className="build-bar">
          <i /><i /><i />
          <span className="build-url">tunegocio.com</span>
        </div>
        <div className="build-body">
          <div className="b-nav b-step" style={{ "--d": 0 }}>
            <span className="b-logo" /><span className="b-links"><i /><i /><i /></span><span className="b-btn" />
          </div>
          <div className="b-hero">
            <div className="b-copy">
              <span className="b-line b-xl b-step" style={{ "--d": 1 }} />
              <span className="b-line b-lg b-step b-accent" style={{ "--d": 2 }} />
              <span className="b-line b-sm b-step" style={{ "--d": 3 }} />
              <span className="b-cta b-step" style={{ "--d": 4 }} />
            </div>
            <div className="b-media b-step" style={{ "--d": 2 }} />
          </div>
          <div className="b-cards">
            {[5, 6, 7].map((d) => (
              <div key={d} className="b-card b-step" style={{ "--d": d }}>
                <span className="b-ico" /><span className="b-line" /><span className="b-line b-short" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="build-chip chip-a">
        <span className="chip-ico"><LuSmartphone /></span>
        <span><small>Responsive</small><strong>Todos los dispositivos</strong></span>
      </div>
      <div className="build-chip chip-b">
        <span className="chip-ico chip-wa"><LuMessageCircle /></span>
        <span><small>Conversión</small><strong>WhatsApp integrado</strong></span>
      </div>
      <div className="build-code mono">
        <span className="c-k">const</span> web = <span className="c-f">crear</span>({"{"}
        <br />&nbsp;&nbsp;diseño: <span className="c-s">&quot;a medida&quot;</span>,
        <br />&nbsp;&nbsp;objetivo: <span className="c-s">&quot;vender&quot;</span>
        <br />{"}"});
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <VectorField />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow hero-in" style={{ "--d": 0 }}>Diseño & Desarrollo Web</span>
          <h1 className="hero-in" style={{ "--d": 1 }}>
            Páginas web profesionales <span className="text-gradient">que venden por vos.</span>
          </h1>
          <p className="hero-lead hero-in" style={{ "--d": 2 }}>
            Creamos landing pages y sitios web modernos para negocios que quieren
            verse profesionales y conseguir más clientes.
          </p>
          <div className="hero-actions hero-in" style={{ "--d": 3 }}>
            <a href="#contacto" className="btn btn-primary btn-lg">
              Hablemos <LuArrowRight aria-hidden="true" />
            </a>
            <a href="#portfolio" className="btn btn-ghost btn-lg">Ver trabajos</a>
          </div>
          <ul className="hero-proof hero-in" style={{ "--d": 4 }}>
            <li><LuCheck aria-hidden="true" /> Asesoramiento sin compromiso</li>
            <li><LuSmartphone aria-hidden="true" /> 100% responsive</li>
            <li><LuZap aria-hidden="true" /> Sitios rápidos</li>
          </ul>
        </div>
        <BuildWindow />
      </div>
      <a href="#servicios" className="hero-scroll" aria-label="Ir a servicios">
        <span />
      </a>
    </section>
  );
}
