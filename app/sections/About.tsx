import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section id="sobre-mi" className="section about-section" aria-labelledby="about-title">
      <div className="page-width">
        <SectionHeading id="about-title" number="02" eyebrow="SOBRE MÍ" title="Me interesa entender cómo funcionan las cosas para descubrir cómo mejorarlas." />
        <div className="about-grid">
          <div className="about-quote" data-reveal><span className="about-quote__mark" aria-hidden="true">“</span><p>La tecnología cobra sentido cuando se conecta con la forma en que las personas realmente trabajan.</p><span className="about-quote__signature">BENJAMÍN / PERSPECTIVA</span></div>
          <div className="about-copy" data-reveal>
            <p>Soy Benjamín Cueva, egresado de Computación e Informática, con experiencia en desarrollo web, automatización, integración de sistemas y despliegue de aplicaciones.</p>
            <p>Mi experiencia previa en actividades administrativas y operativas me permitió comprender cómo trabajan las organizaciones y reconocer oportunidades para mejorar procesos mediante tecnología.</p>
            <p>Hoy combino esa perspectiva con desarrollo de software, diseño de interfaces, infraestructura e inteligencia artificial aplicada.</p>
            <div className="about-copy__line"><span>TRUJILLO, PERÚ</span><span>SOFTWARE + PROCESOS + EXPERIENCIA</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
