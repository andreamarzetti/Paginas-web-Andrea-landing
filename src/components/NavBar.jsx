import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <h2 className="logo">
          <span className="logo-blue">Vektra</span>
          <span className="logo-green">Tech</span>
        </h2>

        {/* NAV DESKTOP */}
        <nav className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contacto" className="btn-nav">Contacto</a>
        </nav>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* NAV MOBILE */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
        <a href="#proceso" onClick={() => setOpen(false)}>Proceso</a>
        <a href="#contacto" className="btn-nav" onClick={() => setOpen(false)}>
          Contacto
        </a>
      </div>
    </header>
  );
}
