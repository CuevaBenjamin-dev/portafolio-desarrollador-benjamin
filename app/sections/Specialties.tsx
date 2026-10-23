import { SectionHeading } from "../components/SectionHeading";

const specialties = [
  { number: "01", symbol: "◇", motion: "diamond", title: "Lógica de negocio y análisis de procesos", description: "Entender necesidades, flujos operativos, reglas del sistema y oportunidades de mejora.", detail: "ENTENDER / ESTRUCTURAR" },
  { number: "02", symbol: "✳", motion: "star", title: "Automatización e IA aplicada", description: "Reducir tareas repetitivas, conectar herramientas y utilizar inteligencia artificial para mejorar la productividad.", detail: "CONECTAR / OPTIMIZAR" },
  { number: "03", symbol: "◎", motion: "rings", title: "Diseño de interfaces y UX/UI", description: "Crear experiencias comprensibles, organizar información y simplificar interacciones entre personas y sistemas.", detail: "DISEÑAR / SIMPLIFICAR" },
];

export function Specialties() {
  return (
    <section id="especialidades" className="section specialties-section" aria-labelledby="specialties-title">
      <div className="page-width">
        <SectionHeading id="specialties-title" number="03" eyebrow="MIS ESPECIALIDADES" title="Tres enfoques que conectan mi forma de desarrollar." />
        <div className="specialties-list">{specialties.map((item) => <article className="specialty" key={item.number} data-reveal><span className="specialty__number">/{item.number}</span><span className="specialty__symbol" aria-hidden="true"><span className={`specialty__symbol-glyph specialty__symbol-glyph--${item.motion}`}>{item.symbol}</span></span><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="specialty__detail">{item.detail}</span></article>)}</div>
      </div>
    </section>
  );
}
