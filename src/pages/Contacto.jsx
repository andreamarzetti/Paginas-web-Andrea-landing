import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { LuMail, LuArrowUpRight, LuClock } from "react-icons/lu";
import { CONTACT, whatsappLink } from "../data/site";
import { spotlight } from "../hooks/useReveal";

export default function Contacto() {
  return (
    <section className="section contact" id="contacto">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <span className="eyebrow">Contacto</span>
          <h2>Hablemos de tu proyecto.</h2>
          <p>
            Contanos tu idea y te asesoramos sin compromiso. Respondemos rápido y
            con propuestas claras.
          </p>
          <p className="contact-time">
            <span className="dot-live" aria-hidden="true" />
            <LuClock aria-hidden="true" /> {CONTACT.responseTime}
          </p>
        </div>

        <div className="channels">
          <a
            href={whatsappLink("Hola Vektra Tech! Quiero consultar por una página web.")}
            target="_blank"
            rel="noopener noreferrer"
            className="channel channel-wa glow-card"
            onPointerMove={spotlight}
            data-reveal
          >
            <span className="channel-icon"><FaWhatsapp aria-hidden="true" /></span>
            <span className="channel-text">
              <small>La vía más rápida</small>
              <strong>Escribinos por WhatsApp</strong>
            </span>
            <LuArrowUpRight className="channel-arrow" aria-hidden="true" />
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="channel glow-card"
            onPointerMove={spotlight}
            data-reveal
            style={{ "--rd": "90ms" }}
          >
            <span className="channel-icon"><LuMail aria-hidden="true" /></span>
            <span className="channel-text">
              <small>Email</small>
              <strong>{CONTACT.email}</strong>
            </span>
            <LuArrowUpRight className="channel-arrow" aria-hidden="true" />
          </a>

          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="channel glow-card"
            onPointerMove={spotlight}
            data-reveal
            style={{ "--rd": "180ms" }}
          >
            <span className="channel-icon channel-ig"><FaInstagram aria-hidden="true" /></span>
            <span className="channel-text">
              <small>Instagram</small>
              <strong>{CONTACT.instagramHandle}</strong>
            </span>
            <LuArrowUpRight className="channel-arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
