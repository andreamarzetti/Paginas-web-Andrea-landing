import { LuArrowUpRight, LuLightbulb, LuShieldCheck, LuSparkles } from "react-icons/lu";
import { KITS, money, whatsappLink } from "../data/site";

const ICONS = { light: LuLightbulb, security: LuShieldCheck, sparkles: LuSparkles };

export default function Kits() {
  return (
    <section className="section kits-section" id="kits">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Soluciones para cada necesidad</span>
          <h2>Empezá por lo que más te importa.</h2>
          <p>Armamos kits para que no tengas que investigar qué dispositivo comprar ni cómo hacer que funcione con los demás.</p>
        </div>

        <div className="kits-grid">
          {KITS.map((kit) => {
            const Icon = ICONS[kit.icon];
            return (
              <article className="kit-card" key={kit.id}>
                <div className={`kit-art ${kit.art}`}>
                  <div className="kit-symbol" aria-hidden="true"><Icon /></div>
                </div>
                <div className="kit-body">
                  <div className="kit-label">{kit.category}</div>
                  <h3>{kit.name}</h3>
                  <p>{kit.description}</p>
                  <ul className="kit-list">
                    {kit.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="kit-bottom">
                    <div className="kit-price">{money(kit.price)}</div>
                    <div className="kit-price-note">Precio de referencia · confirmar disponibilidad</div>
                    <a
                      className="btn btn-dark"
                      href={whatsappLink(`Hola, quiero consultar por el ${kit.name} (${money(kit.price)}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar este kit <LuArrowUpRight className="arrow" aria-hidden="true" />
                    </a>
                    {kit.paymentUrl && (
                      <a className="btn btn-light btn-buy" href={kit.paymentUrl} target="_blank" rel="noopener noreferrer">
                        Comprar online
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="custom-banner">
          <div>
            <h3>¿Tenés una idea más grande?</h3>
            <p>Diseñamos soluciones a medida para casas, locales, oficinas y proyectos.</p>
          </div>
          <a className="btn btn-primary" href={whatsappLink("Hola, quiero una propuesta de domótica a medida.")} target="_blank" rel="noopener noreferrer">
            Contanos tu proyecto <LuArrowUpRight className="arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
