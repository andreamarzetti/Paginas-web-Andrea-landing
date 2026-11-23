import { LuLightbulb, LuPenTool, LuCode, LuRocket } from "react-icons/lu";
import { PROCESS } from "../data/site";

const ICONS = [LuLightbulb, LuPenTool, LuCode, LuRocket];

export default function Proceso() {
  return (
    <section className="section process" id="proceso">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="eyebrow">Cómo trabajamos</span>
          <h2>Un proceso claro, simple y enfocado en resultados.</h2>
        </header>

        <ol className="timeline" data-reveal>
          <span className="timeline-track" aria-hidden="true"><span className="timeline-fill" /></span>
          {PROCESS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <li key={step.n} className="step" style={{ "--i": i }}>
                <span className="step-node"><Icon aria-hidden="true" /></span>
                <span className="mono step-n">Paso {step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
