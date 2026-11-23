import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  LuMonitor, LuTablet, LuSmartphone, LuMessageCircle, LuClipboardList,
  LuShoppingCart, LuRotateCcw, LuMenu, LuX, LuCheck, LuSend,
} from "react-icons/lu";

const DEVICES = {
  desktop: { label: "Desktop", icon: LuMonitor, w: 1280, h: 800, cols: "3 columnas" },
  tablet: { label: "Tablet", icon: LuTablet, w: 820, h: 1100, cols: "2 columnas" },
  mobile: { label: "Mobile", icon: LuSmartphone, w: 390, h: 800, cols: "1 columna" },
};

const FEATURES = [
  { key: "whatsapp", icon: LuMessageCircle, title: "Botón de WhatsApp", on: "Tus clientes te escriben en un toque", off: "Sumá contacto directo" },
  { key: "form", icon: LuClipboardList, title: "Formulario de contacto", on: "Recibí consultas ordenadas", off: "Agregá un formulario" },
  { key: "cart", icon: LuShoppingCart, title: "Carrito de compras", on: "Probá agregar productos", off: "Convertí la web en tienda" },
];

const PRODUCTS = [
  { name: "Producto destacado", price: "$ 18.900", hue: 215 },
  { name: "Nuevo ingreso", price: "$ 24.500", hue: 160 },
  { name: "Más vendido", price: "$ 12.300", hue: 265 },
];

/* Sitio de ejemplo dentro del dispositivo. Responsive real con container queries. */
function MockSite({ features, cart, onAdd, scrollerRef, formRef, shopRef }) {
  const [menu, setMenu] = useState(false);
  const [chat, setChat] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => { if (!features.whatsapp) setChat(false); }, [features.whatsapp]);
  useEffect(() => { if (!features.form) setSent(false); }, [features.form]);

  return (
    <div className="ms" ref={scrollerRef}>
      <div className="ms-nav">
        <span className="ms-logo"><i />Tu marca</span>
        <span className="ms-links"><span>Inicio</span><span>Productos</span><span>Contacto</span></span>
        <span className="ms-nav-right">
          {features.cart && (
            <span className="ms-cart" key={cart}>
              <LuShoppingCart /><b>{cart}</b>
            </span>
          )}
          <button type="button" className="ms-burger" onClick={() => setMenu((v) => !v)} aria-label="Menú del sitio de ejemplo" tabIndex={-1}>
            {menu ? <LuX /> : <LuMenu />}
          </button>
        </span>
        {menu && (
          <div className="ms-menu"><span>Inicio</span><span>Productos</span><span>Contacto</span></div>
        )}
      </div>

      <div className="ms-hero">
        <div className="ms-hero-copy">
          <span className="ms-kicker">Nueva temporada</span>
          <h4>Tu negocio, abierto las 24 horas.</h4>
          <p>Mostrá lo que hacés, respondé consultas y vendé desde cualquier dispositivo.</p>
          <span className="ms-btn">Ver productos</span>
        </div>
        <div className="ms-hero-media"><i /><i /><i /></div>
      </div>

      <div className="ms-section" ref={shopRef}>
        <h5>Productos</h5>
        <div className="ms-grid">
          {PRODUCTS.map((p) => (
            <div className="ms-card" key={p.name}>
              <div className="ms-thumb" style={{ "--h": p.hue }} />
              <strong>{p.name}</strong>
              <span className="ms-price">{p.price}</span>
              {features.cart && (
                <button type="button" className="ms-add" onClick={onAdd} tabIndex={-1}>
                  <LuShoppingCart /> Agregar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {features.form && (
        <div className="ms-section ms-form-wrap" ref={formRef}>
          <h5>Contacto</h5>
          {sent ? (
            <div className="ms-sent"><LuCheck /> ¡Consulta recibida! Así te llegarían los mensajes.</div>
          ) : (
            <form className="ms-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input placeholder="Nombre" aria-label="Nombre (demo)" tabIndex={-1} />
              <input placeholder="Email" aria-label="Email (demo)" tabIndex={-1} />
              <textarea placeholder="¿En qué te podemos ayudar?" aria-label="Mensaje (demo)" rows={3} tabIndex={-1} />
              <button type="submit" className="ms-btn" tabIndex={-1}><LuSend /> Enviar consulta</button>
            </form>
          )}
        </div>
      )}

      <div className="ms-footer">© Tu marca · Sitio de ejemplo</div>

      {features.whatsapp && (
        <div className="ms-wa-wrap">
          {chat && (
            <div className="ms-chat">
              <strong>Tu marca</strong>
              <p>¡Hola! ¿En qué podemos ayudarte?</p>
              <span>Responde en minutos</span>
            </div>
          )}
          <button type="button" className="ms-wa" onClick={() => setChat((v) => !v)} aria-label="WhatsApp del sitio de ejemplo" tabIndex={-1}>
            <LuMessageCircle />
          </button>
        </div>
      )}
    </div>
  );
}

export default function DemoInteractiva() {
  const [device, setDevice] = useState("desktop");
  const [features, setFeatures] = useState({ whatsapp: false, form: false, cart: false });
  const [cart, setCart] = useState(0);
  const [stage, setStage] = useState({ w: 640, h: 520 });
  const stageRef = useRef(null);
  const scrollerRef = useRef(null);
  const formRef = useRef(null);
  const shopRef = useRef(null);
  const pendingScroll = useRef(null);

  useLayoutEffect(() => {
    const el = stageRef.current;
    const measure = () => {
      const cs = getComputedStyle(el);
      const w = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const h = window.innerWidth < 680 ? 400 : 540;
      setStage({ w, h });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Al activar una función, el sitio de ejemplo se desplaza hasta mostrarla.
  useEffect(() => {
    const target = pendingScroll.current;
    if (!target || !scrollerRef.current) return;
    const el = target === "form" ? formRef.current : target === "cart" ? shopRef.current : null;
    pendingScroll.current = null;
    if (el) scrollerRef.current.scrollTo({ top: el.offsetTop - 24, behavior: "smooth" });
  }, [features]);

  const d = DEVICES[device];
  const scale = Math.min(1, stage.w / d.w, stage.h / d.h);

  const toggle = (key) => {
    const next = !features[key];
    if (next) pendingScroll.current = key;
    if (key === "cart" && !next) setCart(0);
    setFeatures({ ...features, [key]: next });
  };

  const reset = () => {
    setFeatures({ whatsapp: false, form: false, cart: false });
    setCart(0);
    setDevice("desktop");
    scrollerRef.current?.scrollTo({ top: 0 });
  };

  const activeCount = Object.values(features).filter(Boolean).length;

  return (
    <section className="section demo" id="demo">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="eyebrow">Tecnología & experiencia</span>
          <h2>Mirá tu web en cada pantalla.</h2>
          <p>
            Cambiá de dispositivo y activá funciones: el sitio de ejemplo se adapta
            en vivo, igual que los proyectos que desarrollamos.
          </p>
        </header>

        <div className="demo-layout" data-reveal>
          <div className="demo-stage" ref={stageRef} style={{ "--stage-h": `${Math.round(d.h * scale) + 40}px` }}>
            <div className="demo-readout mono" aria-live="polite">
              <span><i className="dot-live" /> {d.label}</span>
              <span>{d.w} px</span>
              <span className="hide-xs">{d.cols}</span>
              <span>{activeCount}/3 funciones</span>
            </div>
            <div
              className={`device device-${device}`}
              style={{ width: d.w * scale, height: d.h * scale }}
            >
              <div
                className="device-screen"
                style={{ width: d.w, height: d.h, transform: `scale(${scale})` }}
              >
                {device === "desktop" && (
                  <div className="device-bar"><i /><i /><i /><span>tumarca.com</span></div>
                )}
                {device === "mobile" && <div className="device-notch" />}
                <div className="device-content" key={device}>
                  <MockSite
                    features={features}
                    cart={cart}
                    onAdd={() => setCart((c) => c + 1)}
                    scrollerRef={scrollerRef}
                    formRef={formRef}
                    shopRef={shopRef}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="demo-panel">
            <div className="seg" role="radiogroup" aria-label="Elegí un dispositivo">
              {Object.entries(DEVICES).map(([key, v]) => {
                const Icon = v.icon;
                return (
                  <button
                    key={key}
                    type="button"
                    role="radio"
                    aria-checked={device === key}
                    className={device === key ? "is-on" : ""}
                    onClick={() => setDevice(key)}
                  >
                    <Icon aria-hidden="true" /> {v.label}
                  </button>
                );
              })}
              <span className="seg-thumb" style={{ "--pos": Object.keys(DEVICES).indexOf(device) }} />
            </div>

            <div className="toggles">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                const on = features[f.key];
                return (
                  <button
                    key={f.key}
                    type="button"
                    className={`toggle ${on ? "is-on" : ""}`}
                    aria-pressed={on}
                    onClick={() => toggle(f.key)}
                  >
                    <span className="icon-tile"><Icon aria-hidden="true" /></span>
                    <span className="toggle-text">
                      <strong>{f.title}</strong>
                      <small>{on ? f.on : f.off}</small>
                    </span>
                    <span className="switch" aria-hidden="true"><i /></span>
                  </button>
                );
              })}
            </div>

            <button type="button" className="btn btn-ghost btn-sm demo-reset" onClick={reset}>
              <LuRotateCcw aria-hidden="true" /> Restablecer demo
            </button>
            <p className="demo-note">
              Demo ilustrativa con un sitio de ejemplo. Las funciones de cada proyecto
              se definen según tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
