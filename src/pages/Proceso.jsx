const STEPS = [
  { n: "01", title: "Nos contás qué necesitás", text: "Hablamos sobre tu espacio, qué querés automatizar y qué presupuesto tenés en mente." },
  { n: "02", title: "Preparamos tu solución", text: "Te recomendamos el kit adecuado y coordinamos entrega, configuración e instalación si corresponde." },
  { n: "03", title: "Empezás a disfrutarla", text: "Te acompañamos con indicaciones claras para que puedas usar tus dispositivos con confianza." },
];

export default function Proceso() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Simple desde el primer mensaje</span>
          <h2>De la idea a tu casa conectada.</h2>
          <p>Un proceso claro, con acompañamiento en cada paso.</p>
        </div>
        <div className="process-grid">
          {STEPS.map((s) => (
            <article className="process-card" key={s.n}>
              <div className="process-number">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
