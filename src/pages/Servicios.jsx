import { LuArrowRight, LuCheck, LuGlobe, LuRocket, LuShoppingBag, LuSparkles } from "react-icons/lu";
import { SERVICES } from "../data/site";
import { spotlight } from "../hooks/useReveal";

const ICONS = { web: LuGlobe, landing: LuRocket, ecommerce: LuShoppingBag };

/* Mini ilustraciones propias de cada servicio (CSS puro). */
function ServiceArt({ id }) {
  if (id === "web")
    return (
      <div className="art art-web" aria-hidden="true">
        {["Inicio", "Servicios", "Contacto"].map((p, i) => (
          <div key={p} className="art-page" style={{ "--i": i }}>
            <span className="art-page-tab mono">/{p.toLowerCase()}</span>
            <span className="art-bar" /><span className="art-bar short" />
            <span className="art-blocks"><i /><i /></span>
          </div>
        ))}
      </div>
    );
  if (id === "landing")
    return (
      <div className="art art-landing" aria-hidden="true">
        <div className="art-scroll">
          <span className="art-bar" /><span className="art-bar short" />
          <span className="art-cta">Quiero mi web</span>
        </div>
        <span className="art-ring" />
      </div>
    );
  return (
    <div className="art art-shop" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="art-product" style={{ "--i": i }}>
          <span className="art-thumb" /><span className="art-bar short" /><span className="art-price" />
        </div>
      ))}
      <span className="art-cart"><LuShoppingBag /><b>3</b></span>
    </div>
  );
}

export default function Servicios() {
  return (
    <section className="section services" id="servicios">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="eyebrow">Servicios</span>
          <h2>Soluciones digitales para hacer crecer tu negocio.</h2>
          <p>
            Te ayudamos a vender más, mostrarte profesional y ordenar tu negocio
            con herramientas simples y efectivas.
          </p>
        </header>

        <div className="bento">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.id];
            return (
              <article
                key={s.id}
                className={`svc svc-${s.id} glow-card`}
                onPointerMove={spotlight}
                data-reveal
                style={{ "--rd": `${i * 90}ms` }}
              >
                <ServiceArt id={s.id} />
                <div className="svc-body">
                  <div className="svc-top">
                    <span className="icon-tile"><Icon aria-hidden="true" /></span>
                    <span className="mono svc-code">{s.code} / {s.tag}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <ul className="svc-features">
                    {s.features.map((f) => (
                      <li key={f}><LuCheck aria-hidden="true" />{f}</li>
                    ))}
                  </ul>
                  <a href={s.example} className="link-arrow">
                    Ver ejemplo real <LuArrowRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <a href="#asistente" className="services-helper" data-reveal>
          <span className="icon-tile icon-tile-sm"><LuSparkles aria-hidden="true" /></span>
          <span><strong>¿No sabés cuál elegir?</strong> Respondé 3 preguntas y te recomendamos una opción.</span>
          <LuArrowRight aria-hidden="true" className="services-helper-arrow" />
        </a>
      </div>
    </section>
  );
}
