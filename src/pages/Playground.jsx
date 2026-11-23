import { useState } from "react";
import { LuLightbulb, LuSnowflake, LuBlinds } from "react-icons/lu";

/* Mini simulador de domótica: interacción visual, sin conexión a dispositivos reales. */
export default function Playground() {
  const [lampOn, setLampOn] = useState(false);
  const [lampPinned, setLampPinned] = useState(false);
  const [airOn, setAirOn] = useState(false);
  const [blindsOpen, setBlindsOpen] = useState(false);

  const toggleLamp = () => {
    const next = !lampPinned;
    setLampPinned(next);
    setLampOn(next);
  };

  return (
    <section className="section playground" id="proba-domotica">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Tu casa, en modo interactivo</span>
          <h2>Probá la domótica antes de imaginarla.</h2>
          <p>Pasá el mouse por la lámpara o tocá los controles. Encendé luces, activá el aire y abrí las persianas. ¡Jugá un poquito!</p>
        </div>

        <div className="playground-layout">
          <div className={`smart-room ${lampOn ? "light-on" : ""} ${airOn ? "air-on" : ""}`} role="img" aria-label="Habitación inteligente interactiva">
            <div className="room-label">Living · Demo interactiva</div>
            <div className="room-window"><div className={`blinds ${blindsOpen ? "open" : ""}`} /></div>
            <div
              className="room-lamp"
              title="Pasá el mouse para encender la luz"
              onMouseEnter={() => !lampPinned && setLampOn(true)}
              onMouseLeave={() => !lampPinned && setLampOn(false)}
              onClick={toggleLamp}
            />
            <div className="room-ac" />
            <div className="airflow" />
            <div className="room-sofa" />
            <div className="room-floor" />
            <div className="room-hint"><LuLightbulb aria-hidden="true" /> Probá pasar el mouse por la lámpara</div>
          </div>

          <div className="play-controls" aria-label="Controles de domótica">
            <button className="play-control" type="button" aria-pressed={lampOn} onClick={toggleLamp}>
              <span className="play-icon"><LuLightbulb aria-hidden="true" /></span>
              <span><strong>Iluminación inteligente</strong><small>{lampOn ? "Luz encendida · ambiente cálido" : "Encendé o apagá la luz"}</small></span>
              <span className="play-state">{lampOn ? "ON" : "OFF"}</span>
            </button>
            <button className="play-control" type="button" aria-pressed={airOn} onClick={() => setAirOn((v) => !v)}>
              <span className="play-icon"><LuSnowflake aria-hidden="true" /></span>
              <span><strong>Aire acondicionado</strong><small>{airOn ? "¡Sentí la brisa! · modo frío" : "Activá el flujo de aire"}</small></span>
              <span className="play-state">{airOn ? "22° · ON" : "OFF"}</span>
            </button>
            <button className="play-control" type="button" aria-pressed={blindsOpen} onClick={() => setBlindsOpen((v) => !v)}>
              <span className="play-icon"><LuBlinds aria-hidden="true" /></span>
              <span><strong>Persianas automáticas</strong><small>{blindsOpen ? "Dejá entrar la luz natural" : "Abrí o cerrá las persianas"}</small></span>
              <span className="play-state">{blindsOpen ? "ABIERTAS" : "CERRADAS"}</span>
            </button>
            <p className="play-footnote">Es una simulación visual para que explores ideas. No controla equipos reales; las funciones disponibles dependen de los dispositivos instalados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
