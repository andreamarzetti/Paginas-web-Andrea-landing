import { useRef, useState } from "react";
import {
  LuArrowLeft, LuRotateCcw, LuMessageCircle, LuGlobe, LuRocket, LuShoppingBag, LuSparkles,
} from "react-icons/lu";
import { SERVICES, whatsappLink } from "../data/site";

/* Cada respuesta suma puntos a un servicio: landing / web / ecommerce. */
const QUESTIONS = [
  {
    key: "negocio",
    title: "¿Qué tipo de proyecto tenés?",
    options: [
      { label: "Emprendimiento que está arrancando", score: { landing: 2, web: 1 } },
      { label: "Comercio, local o servicio", score: { web: 2, landing: 1 } },
      { label: "Empresa o profesional", score: { web: 2 } },
      { label: "Marca que vende productos", score: { ecommerce: 2, web: 1 } },
    ],
  },
  {
    key: "objetivo",
    title: "¿Qué querés lograr primero?",
    options: [
      { label: "Conseguir consultas desde Instagram o anuncios", score: { landing: 3 } },
      { label: "Mostrar mi negocio y mis servicios", score: { web: 3 } },
      { label: "Vender productos online", score: { ecommerce: 3 } },
      { label: "Todavía no lo tengo claro", score: { web: 1, landing: 1 } },
    ],
  },
  {
    key: "contenido",
    title: "¿Qué necesitás que tenga tu web?",
    options: [
      { label: "Una sola sección clara con WhatsApp", score: { landing: 3 } },
      { label: "Varias secciones y formulario de contacto", score: { web: 3 } },
      { label: "Catálogo, carrito y medios de pago", score: { ecommerce: 3 } },
      { label: "Prefiero que me asesoren", score: { web: 1 } },
    ],
  },
];

const ICONS = { web: LuGlobe, landing: LuRocket, ecommerce: LuShoppingBag };
const REASONS = {
  landing: "Es la forma más directa de convertir visitas de redes y campañas en consultas.",
  web: "Te permite presentar tu negocio completo, generar confianza y recibir consultas ordenadas.",
  ecommerce: "Vas a poder vender 24/7 con catálogo, carrito y medios de pago.",
};

function recommend(answers) {
  const total = { landing: 0, web: 0, ecommerce: 0 };
  answers.forEach((a) => Object.entries(a.score).forEach(([k, v]) => (total[k] += v)));
  // En caso de empate, prioriza lo que respondió como objetivo.
  return Object.keys(total).sort((a, b) => total[b] - total[a] || (answers[1].score[b] || 0) - (answers[1].score[a] || 0))[0];
}

export default function Asistente() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [message, setMessage] = useState("");
  const boxRef = useRef(null);

  const done = answers.length === QUESTIONS.length;
  const resultId = done ? recommend(answers) : null;
  const service = SERVICES.find((s) => s.id === resultId);

  const choose = (opt) => {
    const next = [...answers.slice(0, step), opt];
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      const rec = SERVICES.find((s) => s.id === recommend(next));
      setMessage(
        `Hola Vektra Tech! Usé el asistente de su web.\n` +
          `• Proyecto: ${next[0].label}\n` +
          `• Objetivo: ${next[1].label}\n` +
          `• Necesito: ${next[2].label}\n` +
          `Me recomendaron: ${rec.title}. ¿Me asesoran?`
      );
      setStep(QUESTIONS.length);
    }
    boxRef.current?.focus({ preventScroll: true });
  };

  const back = () => setStep((s) => Math.max(0, s - 1));
  const restart = () => { setStep(0); setAnswers([]); setMessage(""); };

  const q = QUESTIONS[step];
  const progress = done && step === QUESTIONS.length ? 100 : (step / QUESTIONS.length) * 100 + 8;
  const Icon = service ? ICONS[service.id] : null;

  return (
    <section className="section assistant" id="asistente">
      <div className="container assistant-layout">
        <div className="assistant-aside" data-reveal>
          <span className="eyebrow">Asistente</span>
          <h2>Encontrá la web ideal para tu negocio.</h2>
          <p>
            Respondé tres preguntas rápidas y te recomendamos por dónde empezar.
            Después te preparamos un mensaje para que nos escribas por WhatsApp,
            <strong> solo si querés</strong>.
          </p>
          <ul className="assistant-steps mono" aria-hidden="true">
            {QUESTIONS.map((qq, i) => (
              <li key={qq.key} className={i < step ? "is-done" : i === step ? "is-current" : ""}>
                <span>0{i + 1}</span>{qq.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="assistant-box" data-reveal ref={boxRef} tabIndex={-1} aria-live="polite">
          <div className="assistant-progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>

          {step < QUESTIONS.length ? (
            <div className="assistant-q" key={step}>
              <span className="mono assistant-meta">Pregunta {step + 1} de {QUESTIONS.length}</span>
              <h3>{q.title}</h3>
              <div className="choices">
                {q.options.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    className={`choice ${answers[step]?.label === opt.label ? "is-selected" : ""}`}
                    onClick={() => choose(opt)}
                  >
                    <span className="choice-dot" aria-hidden="true" />
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="assistant-nav">
                <button type="button" className="btn btn-ghost btn-sm" onClick={back} disabled={step === 0}>
                  <LuArrowLeft aria-hidden="true" /> Volver
                </button>
              </div>
            </div>
          ) : (
            <div className="assistant-result" key="result">
              <span className="mono assistant-meta"><LuSparkles aria-hidden="true" /> Tu recomendación</span>
              <div className="result-card">
                <span className="icon-tile icon-tile-lg"><Icon aria-hidden="true" /></span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{REASONS[service.id]}</p>
                </div>
              </div>
              <label className="result-label" htmlFor="wa-message">
                Tu mensaje (podés editarlo antes de enviarlo)
              </label>
              <textarea
                id="wa-message"
                className="result-message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="result-actions">
                <a
                  className="btn btn-wa btn-lg"
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuMessageCircle aria-hidden="true" /> Abrir en WhatsApp
                </a>
                <button type="button" className="btn btn-ghost" onClick={restart}>
                  <LuRotateCcw aria-hidden="true" /> Volver a empezar
                </button>
              </div>
              <p className="result-note">
                No se envía nada automáticamente: WhatsApp se abre con el mensaje listo
                para que lo revises y decidas si enviarlo. La recomendación es orientativa.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
