import { Link, useParams, type MetaFunction } from "react-router";
import { ProjectVisual } from "../components/ProjectVisual";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { absoluteUrl, site } from "../config/site";
import { getProject, projects } from "../data/projects";

export const meta: MetaFunction = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) return [{ title: "Proyecto no encontrado | Benjamín Cueva" }];
  const title = `${project.title} | Benjamín Cueva`;
  const url = absoluteUrl(`/proyectos/${project.slug}`);
  return [
    { title },
    { name: "description", content: project.summary },
    { property: "og:type", content: "article" },
    { property: "og:title", content: title },
    { property: "og:description", content: project.summary },
    ...(url ? [{ property: "og:url", content: url }, { tagName: "link", rel: "canonical", href: url }] : []),
  ];
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <div className="not-found"><h1>Proyecto no encontrado</h1><Link to="/#proyectos">Volver a proyectos</Link></div>;
  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];
  return (
    <>
      <SiteHeader />
      <main className="case-page">
        <div className="page-width">
          <div className="case-page__intro" data-reveal>
            <Link className="case-page__back" to="/#proyectos">← Volver a proyectos</Link>
            <div className="case-page__eyebrow"><span>CASO {project.number} / {project.kind.toUpperCase()}</span><span className="status">{project.status}</span></div>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>
          <div className="case-page__visual" data-reveal><ProjectVisual project={project} large /></div>
          <p className="case-page__visual-caption">Representación conceptual. {project.evidence}</p>
          <div className="case-page__body">
            <aside className="case-page__facts" data-reveal><div><span>CLIENTE / PROYECTO</span><strong>{project.client ?? "Proyecto de automatización"}</strong></div><div><span>ESTADO</span><strong>{project.status}</strong></div><div><span>TECNOLOGÍAS Y ENFOQUE</span><div className="tag-list">{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div></div>{project.liveUrl && <a className="button button--primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visitar sitio <span aria-hidden="true">↗</span></a>}</aside>
            <div className="case-page__story" data-reveal>
              <section><span className="case-page__section-number">01 / CONTEXTO</span><h2>El punto de partida</h2><p>{project.context}</p></section>
              <section><span className="case-page__section-number">02 / PROBLEMA</span><h2>Qué había que resolver</h2><p>{project.problem}</p></section>
              <section><span className="case-page__section-number">03 / SOLUCIÓN</span><h2>La solución planteada</h2><p>{project.solution}</p></section>
              <section><span className="case-page__section-number">04 / PARTICIPACIÓN</span><h2>Mi participación</h2><p>{project.role}</p></section>
              <section><span className="case-page__section-number">05 / DECISIONES TÉCNICAS</span><h2>Decisiones del proyecto</h2><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></section>
              <section><span className="case-page__section-number">06 / ESTADO Y EVIDENCIA</span><h2>Situación actual</h2><p>{project.evidence}</p></section>
            </div>
          </div>
          <div className="case-page__next"><span>SIGUIENTE CASO</span><Link to={`/proyectos/${next.slug}`}>{next.title} <span aria-hidden="true">↗</span></Link></div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
