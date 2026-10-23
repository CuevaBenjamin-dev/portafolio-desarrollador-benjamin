import { Link } from "react-router";
import { ProjectVisual } from "../components/ProjectVisual";
import { SectionHeading } from "../components/SectionHeading";
import { projects, type Project } from "../data/projects";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "project-card--featured" : ""}`} data-reveal>
      <Link className="project-card__visual-link" to={`/proyectos/${project.slug}`} aria-label={`Ver caso: ${project.title}`}>
        <ProjectVisual project={project} large={featured} />
      </Link>
      <div className="project-card__content">
        <div className="project-card__meta"><span>CASO {project.number} / {project.kind.toUpperCase()}</span><span className="status">{project.status}</span></div>
        <h3><Link to={`/proyectos/${project.slug}`}>{project.title}</Link></h3>
        {project.client && <p className="project-card__client">{project.client}</p>}
        <p className="project-card__summary">{project.summary}</p>
        <div className="project-card__bottom"><div className="tag-list">{project.technologies.slice(0, featured ? 5 : 3).map((tag) => <span key={tag}>{tag}</span>)}</div><Link className="text-link" to={`/proyectos/${project.slug}`}>Ver caso <span aria-hidden="true">↗</span></Link></div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="section projects-section" aria-labelledby="projects-title">
      <div className="page-width">
        <SectionHeading id="projects-title" number="01" eyebrow="PROYECTOS DESTACADOS" title="Soluciones que toman forma a partir de problemas reales." lead="Cada proyecto comienza al entender un proceso, ordenar sus necesidades y construir una respuesta útil." />
        <div className="projects-layout"><ProjectCard project={projects[0]} featured /><div className="projects-layout__secondary">{projects.slice(1).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div>
      </div>
    </section>
  );
}
