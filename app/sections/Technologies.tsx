import { SectionHeading } from "../components/SectionHeading";

const groups = [
  { number: "01", title: "Desarrollo web", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Astro", "React", "Node.js", "NestJS"] },
  { number: "02", title: "Backend y datos", items: ["PostgreSQL", "SQL", "APIs REST", "Java", "Spring Boot"] },
  { number: "03", title: "Infraestructura", items: ["VPS Linux", "Docker", "DNS", "Cloudflare", "Vercel", "Railway", "Git / GitHub"] },
  { number: "04", title: "Diseño y experiencia", items: ["Diseño de interfaces", "Organización de flujos", "Prototipado", "Diseño responsive"] },
  { number: "05", title: "IA y automatización", items: ["Codex", "OpenAI API", "IA aplicada al desarrollo", "Integración de servicios"] },
];

export function Technologies() {
  return (
    <section id="tecnologias" className="section technologies-section" aria-labelledby="technologies-title">
      <div className="page-width">
        <SectionHeading id="technologies-title" number="05" eyebrow="TECNOLOGÍAS E INFRAESTRUCTURA" title="Herramientas que utilizo para llevar soluciones a la práctica." />
        <div className="technology-grid">{groups.map((group) => <div className="technology-group" key={group.number} data-reveal><div className="technology-group__head"><span>{group.number}</span><h3>{group.title}</h3></div><div className="technology-group__items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
      </div>
    </section>
  );
}
