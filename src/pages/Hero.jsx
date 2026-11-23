import { LuArrowRight, LuCheck, LuSun, LuMousePointerClick, LuHouse, LuHeart, LuCpu } from "react-icons/lu";

export default function Hero() {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Tu hogar evoluciona</span>
            <h1>Una casa más inteligente. <span>Una vida más simple.</span></h1>
            <p>Elegí un kit de domótica pensado para vos. Lo preparamos, te acompañamos en la instalación y te ayudamos a disfrutar la tecnología sin complicaciones.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#kits">Descubrir los kits <LuArrowRight className="arrow" aria-hidden="true" /></a>
              <a className="btn btn-outline" href="#cotizador">No sé cuál elegir</a>
            </div>
            <div className="hero-proof">
              {["Soluciones listas para usar", "Asesoramiento personalizado", "Soporte cercano"].map((t) => (
                <div className="proof-item" key={t}><span className="proof-icon"><LuCheck aria-hidden="true" /></span> {t}</div>
              ))}
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="Ilustración de un living con iluminación inteligente">
            <div className="visual-card">
              <div className="visual-glow" />
              <div className="smart-pill pill-top"><span className="status-dot" />Hogar conectado<strong>Todo bajo control</strong></div>
              <div className="room"><div className="room-art"><div className="floor-lamp" /><div className="plant" /><div className="sofa" /></div></div>
              <div className="smart-pill pill-bottom"><LuSun className="pill-icon" aria-hidden="true" /> Escena<strong>Modo relax activado</strong></div>
              <div className="hero-caption">TECNOLOGÍA QUE SE ADAPTA A VOS</div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="container trust-grid">
          <div className="trust-item"><b><LuMousePointerClick aria-hidden="true" /></b> Fácil de usar</div>
          <div className="trust-item"><b><LuHouse aria-hidden="true" /></b> Para tu espacio</div>
          <div className="trust-item"><b><LuHeart aria-hidden="true" /></b> Acompañamiento real</div>
          <div className="trust-item"><b><LuCpu aria-hidden="true" /></b> Tecnología práctica</div>
        </div>
      </div>
    </>
  );
}
