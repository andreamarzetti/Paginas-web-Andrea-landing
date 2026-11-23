import { Brand } from "./Brand";
import { CONTACT, whatsappLink } from "../data/site";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand className="footer-brand" />
            <p>Soluciones de domótica pensadas para hacer tu día a día más simple. Asesoramiento, configuración y acompañamiento.</p>
          </div>
          <div>
            <h4>Explorá</h4>
            <div className="footer-links">
              <a href="#kits">Nuestros kits</a>
              <a href="#experiencia">Cómo funciona</a>
              <a href="#cotizador">Encontrá tu kit</a>
              <a href="#preguntas">Preguntas frecuentes</a>
            </div>
          </div>
          <div>
            <h4>Contacto</h4>
            <div className="footer-links">
              <a href={whatsappLink("Hola, quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={`mailto:${CONTACT.email}`}>Email</a>
              <a href="#inicio">Volver arriba ↑</a>
              <span>{CONTACT.zone}</span>
            </div>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Vektra Tech. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
