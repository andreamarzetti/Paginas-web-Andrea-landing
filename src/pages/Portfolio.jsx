import { LuArrowUpRight, LuArrowRight } from "react-icons/lu";
import { PROJECTS } from "../data/site";

function ProjectCard({ p, index }) {
  return (
    <a
      id={p.id}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`project ${p.featured ? "project-featured" : ""}`}
      data-reveal
      style={{ "--rd": `${index * 80}ms` }}
      aria-label={`${p.title}: abrir sitio en una nueva pestaña`}
    >
      <div className="project-frame">
        <div className="project-bar">
          <i /><i /><i />
          <span className="mono">{p.domain}</span>
        </div>
        <div className="project-shot">
          <img
            src={p.featured ? p.image : p.imageSm}
            srcSet={`${p.imageSm} 640w, ${p.image} 1200w`}
            sizes={p.featured ? "(max-width: 900px) 100vw, 720px" : "(max-width: 680px) 100vw, 400px"}
            alt={`Captura del sitio ${p.title}`}
            width="1200"
            height="573"
            loading="lazy"
            decoding="async"
          />
          <span className="project-visit">
            Ver sitio <LuArrowUpRight aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="tag">{p.tag}</span>
          <span className="status"><i /> Online</span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
      </div>
    </a>
  );
}

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <header className="section-head section-head-row" data-reveal>
          <div>
            <span className="eyebrow">Portfolio web</span>
            <h2>Proyectos desarrollados.</h2>
          </div>
          <p>Sitios web modernos, responsive y optimizados para distintos rubros. Todos están online: entrá y recorrelos.</p>
        </header>

        <div className="projects">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <div className="portfolio-cta" data-reveal>
          <a href="#contacto" className="btn btn-primary btn-lg">
            Quiero una web como estas <LuArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
