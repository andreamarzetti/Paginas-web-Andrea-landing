import { useEffect, useState } from "react";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { Brand } from "./Brand";
import { NAV_LINKS, whatsappLink } from "../data/site";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="container nav">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
        </button>
        <nav className={`nav-links ${open ? "open" : ""}`} id="navLinks" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <a
          className="btn btn-primary nav-cta"
          href={whatsappLink("Hola, quiero asesoramiento para elegir un kit de domótica.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hablemos <LuArrowUpRight className="arrow" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
