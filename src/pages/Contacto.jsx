import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="contact-pro" id="contacto">
      <div className="contact-card">

        <span className="section-badge">Contacto</span>

        <h2>Hablemos de tu proyecto</h2>

        <p className="contact-text">
          Contanos tu idea y te asesoramos sin compromiso.
          Respondemos rápido y con propuestas claras.
        </p>

        <div className="contact-actions">
          <a
            href="https://wa.me/5491122631648"
            target="_blank"
            rel="noreferrer"
            className="contact-btn wpp"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="mailto:andreamarzetti.9@gmail.com"
            className="contact-btn mail"
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://www.instagram.com/vektra_tech/"
            target="_blank"
            rel="noreferrer"
            className="contact-btn ig"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>

        <p className="contact-foot">
          ⏱ Respondemos dentro de las 24 hs hábiles
        </p>

      </div>
    </section>
  );
}
