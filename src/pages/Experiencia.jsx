import { useState } from "react";
import { LuLightbulb, LuSnowflake, LuLock, LuClock, LuPuzzle, LuSmartphone, LuHandshake, LuArrowUpRight, LuRotateCcw } from "react-icons/lu";

export default function Experiencia() {
  const [on, setOn] = useState(false);

  const controls = [
    { icon: LuLightbulb, label: "Iluminación", value: on ? "Encendida" : "Apagada" },
    { icon: LuSnowflake, label: "Climatización", value: on ? "Confort 22°" : "En pausa" },
    { icon: LuLock, label: "Seguridad", value: on ? "Modo noche" : "Activada" },
    { icon: LuClock, label: "Rutina", value: on ? "Modo llegada" : "Modo descanso" },
  ];

  return (
    <section className="section experience" id="experiencia">
      <div className="container experience-grid">
        <div className="experience-panel">
          <div className="panel-top">
            <span>ASÍ PODRÍA VERSE TU CASA</span>
            <span className="panel-status" aria-live="polite">● {on ? "Escena activa" : "En espera"}</span>
          </div>
          <div className="scene">
            {controls.map(({ icon: Icon, label, value }) => (
              <div className={`scene-control ${on ? "is-on" : ""}`} key={label}>
                <span><Icon aria-hidden="true" /></span>
                <small>{label}</small>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <button className="btn btn-primary demo-toggle" type="button" aria-pressed={on} onClick={() => setOn((v) => !v)}>
            {on ? <>Restablecer escena <LuRotateCcw className="arrow" aria-hidden="true" /></> : <>Probar una escena inteligente <LuArrowUpRight className="arrow" aria-hidden="true" /></>}
          </button>
          <p className="demo-note">Demo ilustrativa: la automatización real depende de los dispositivos y la instalación elegidos.</p>
        </div>

        <div className="experience-copy">
          <span className="eyebrow">No vendemos complicaciones</span>
          <h2>La tecnología tiene que trabajar para vos.</h2>
          <p>Te ayudamos a elegir dispositivos compatibles y a pensar cómo usarlos en tu rutina. La idea es que la domótica te simplifique el día, no que tengas que aprender sistemas complejos.</p>
          <div className="benefits">
            <div className="benefit"><div className="benefit-icon"><LuPuzzle aria-hidden="true" /></div><div><strong>Elegimos lo que necesitás</strong><span>Te orientamos según tus ambientes, objetivos y presupuesto.</span></div></div>
            <div className="benefit"><div className="benefit-icon"><LuSmartphone aria-hidden="true" /></div><div><strong>Te acompañamos a configurarlo</strong><span>Dejamos los equipos preparados y te guiamos para empezar.</span></div></div>
            <div className="benefit"><div className="benefit-icon"><LuHandshake aria-hidden="true" /></div><div><strong>No te dejamos solo</strong><span>Tenés un canal de contacto para resolver dudas y recibir soporte.</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
