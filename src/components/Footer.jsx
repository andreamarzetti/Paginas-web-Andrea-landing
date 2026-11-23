import { Wordmark } from "./Brand";
import { CONTACT, NAV_LINKS, whatsappLink } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Wordmark />
          <p>Desarrollo de sitios web y landing pages modernas.</p>
        </div>
        <div>
          <h4 className="mono">Explorá</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
            <li><a href="#asistente">Asistente</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mono">Contacto</h4>
          <ul>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>Email</a></li>
            <li><a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Vektra Tech · Todos los derechos reservados</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
