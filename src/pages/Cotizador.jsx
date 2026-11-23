import { useState } from "react";
import { LuArrowLeft, LuArrowUpRight, LuRotateCcw } from "react-icons/lu";
import { KITS, QUESTIONS, whatsappLink } from "../data/site";

function recommend(answers) {
  if (answers.goal === "Seguridad y monitoreo") return KITS.find((k) => k.id === "seguridad") || KITS[0];
  if (answers.goal === "Iluminación y comodidad") return KITS.find((k) => k.id === "iluminacion") || KITS[0];
  return KITS[0];
}

export default function Cotizador() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const q = QUESTIONS[current];
  const choose = (option) => {
    setAnswers((a) => ({ ...a, [q.key]: option }));
    if (current < QUESTIONS.length - 1) setCurrent(current + 1);
    else setDone(true);
  };
  const restart = () => { setCurrent(0); setAnswers({}); setDone(false); };

  const kit = done ? recommend(answers) : null;
  const message = done
    ? `Hola, completé el cotizador y quiero asesoramiento. Espacio: ${answers.space}. Objetivo: ${answers.goal}. Tamaño: ${answers.size}. ¿Me ayudan a elegir una solución?`
    : "";

  return (
    <section className="section quote-section" id="cotizador">
      <div className="container">
        <div className="quote-layout">
          <div className="quote-aside">
            <span className="eyebrow">Te ayudamos a elegir</span>
            <h2>Encontrá el kit ideal para vos.</h2>
            <p>Respondé estas preguntas rápidas y te orientamos con una recomendación inicial. Después podemos ajustar la propuesta por WhatsApp.</p>
            <p><strong>¿Preferís hablar con alguien?</strong><br />También podés escribirnos directamente y te asesoramos.</p>
            <a className="btn btn-outline" href={whatsappLink("Hola, necesito ayuda para elegir un kit de domótica.")} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp <LuArrowUpRight className="arrow" aria-hidden="true" />
            </a>
          </div>

          <div className="quote-box" aria-live="polite">
            <div className="progress">
              <div className="progress-bar" style={{ width: done ? "100%" : `${((current + 1) / QUESTIONS.length) * 100}%` }} />
            </div>

            {!done ? (
              <>
                <div className="question-meta">Pregunta {current + 1}</div>
                <h3>{q.title}</h3>
                <div className="choice-list">
                  {q.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`choice ${answers[q.key] === option ? "selected" : ""}`}
                      onClick={() => choose(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="quote-nav">
                  <button className="btn btn-light" type="button" disabled={current === 0} onClick={() => setCurrent(current - 1)}>
                    <LuArrowLeft aria-hidden="true" /> Volver
                  </button>
                  <span className="step-count">Paso {current + 1} de {QUESTIONS.length}</span>
                </div>
              </>
            ) : (
              <>
                <div className="question-meta">Tu recomendación inicial</div>
                <h3>Podrías empezar con {kit.name}.</h3>
                <div className="quote-result">
                  <strong>{kit.name}</strong>
                  <p>{kit.description} La propuesta final depende de los dispositivos compatibles, las características del espacio y la instalación necesaria.</p>
                  <a className="btn btn-dark" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                    Recibir asesoramiento por WhatsApp <LuArrowUpRight className="arrow" aria-hidden="true" />
                  </a>
                </div>
                <button className="btn btn-light restart" type="button" onClick={restart}>
                  Volver a empezar <LuRotateCcw aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
