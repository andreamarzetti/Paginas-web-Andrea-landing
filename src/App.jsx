import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "./data/site";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <NavBar />
      <Home />

      {/* WhatsApp flotante */}
      <a
        href={whatsappLink()}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>

      <Footer />
    </>
  );
}
