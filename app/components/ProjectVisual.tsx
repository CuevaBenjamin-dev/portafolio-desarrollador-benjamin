import type { Project } from "../data/projects";

const nodes: Record<Project["visual"], string[]> = {
  flow: ["WhatsApp", "Solicitudes", "Asignación", "Seguimiento"],
  web: ["ES / EN", "Contenido", "Formularios", "Servicios"],
  academic: ["Cursos", "Actividades", "Entregas", "Evaluación"],
  erp: ["Estudiantes", "Matrículas", "Secciones", "Pagos"],
  ai: ["Entrada", "Python", "OpenAI API", "Materiales"],
};

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`project-visual project-visual--${project.visual} ${large ? "project-visual--large" : ""}`} role="img" aria-label={`Representación conceptual de ${project.title}`}>
      <span className="project-visual__grid" aria-hidden="true" />
      <span className="project-visual__orb project-visual__orb--one" aria-hidden="true" />
      <span className="project-visual__orb project-visual__orb--two" aria-hidden="true" />
      <div className="project-visual__frame" aria-hidden="true">
        <div className="project-visual__topline"><span className="project-visual__monogram">BC / {project.number}</span><span>CONCEPTO — {project.kind.toUpperCase()}</span></div>
        <div className="project-visual__center"><span className="project-visual__symbol">{project.visual === "ai" ? "✳" : project.visual === "web" ? "↗" : "◇"}</span><span className="project-visual__center-title">{project.kind}</span></div>
        <div className="project-visual__nodes">{nodes[project.visual].map((node, index) => <span key={node}><b>0{index + 1}</b>{node}</span>)}</div>
      </div>
      <span className="project-visual__note">VISUALIZACIÓN CONCEPTUAL</span>
    </div>
  );
}
