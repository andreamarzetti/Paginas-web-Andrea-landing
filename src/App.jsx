import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />

      {/* WhatsApp flotante */}
      <a
        href="https://wa.me/5491122631648"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <Footer />
    </>
  );
}
