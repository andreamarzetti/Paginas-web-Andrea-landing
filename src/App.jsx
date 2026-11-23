import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "./data/site";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />

      {/* WhatsApp flotante */}
      <a
        className="whatsapp-float"
        href={whatsappLink("Hola, quiero consultar por domótica.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </>
  );
}
