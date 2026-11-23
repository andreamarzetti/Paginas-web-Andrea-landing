import { LuTarget, LuZap, LuHeartHandshake } from "react-icons/lu";

const VALUES = [
  {
    icon: LuTarget,
    title: "Enfoque en resultados",
    text: "No solo diseñamos sitios lindos. Creamos páginas pensadas para atraer clientes, generar confianza y aumentar conversiones.",
  },
  {
    icon: LuZap,
    title: "Desarrollo moderno",
    text: "Utilizamos tecnologías actuales para lograr sitios rápidos, responsivos y optimizados para cualquier dispositivo.",
  },
  {
    icon: LuHeartHandshake,
    title: "Acompañamiento real",
    text: "Te asesoramos en cada etapa del proyecto para que tu web represente tu negocio de la mejor manera.",
  },
];

export default function Nosotros() {
  return (
    <section className="section about" id="nosotros">
      <div className="about-lines" aria-hidden="true" />
      <div className="container about-grid">
        <div className="about-manifesto" data-reveal>
          <span className="eyebrow">Sobre Vektra Tech</span>
          <h2>
            Diseñamos experiencias digitales <span className="text-gradient">que convierten.</span>
          </h2>
          <p>
            En <strong>Vektra Tech</strong> ayudamos a emprendedores y negocios a
            construir una presencia online profesional, clara y enfocada en
            generar resultados reales.
          </p>
        </div>

        <ul className="values">
          {VALUES.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="value" data-reveal style={{ "--rd": `${i * 100}ms` }}>
              <span className="mono value-n">0{i + 1}</span>
              <span className="icon-tile"><Icon aria-hidden="true" /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
