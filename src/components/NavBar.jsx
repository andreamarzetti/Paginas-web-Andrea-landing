import { useEffect, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Wordmark } from "./Brand";
import { NAV_LINKS } from "../data/site";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Fondo más sólido al hacer scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta la sección visible.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Menú mobile: bloquea scroll y cierra con Escape.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container nav-inner">
        <Wordmark />

        <nav className="nav-links" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? "is-active" : ""}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn btn-primary btn-sm nav-cta">
          Hablemos <LuArrowUpRight aria-hidden="true" />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>
    </header>

      {/* Fuera del header: su backdrop-filter recortaría un elemento fixed */}
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Navegación mobile">
          {NAV_LINKS.map((l, i) => (
            <a key={l.href} href={l.href} onClick={close} style={{ "--i": i }}>
              <span className="mono">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="btn btn-primary btn-block" onClick={close}>
          Hablemos de tu proyecto <LuArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
