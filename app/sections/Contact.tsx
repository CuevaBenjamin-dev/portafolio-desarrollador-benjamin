import { site } from "../config/site";
import { SectionHeading } from "../components/SectionHeading";

export function Contact() {
  return (
    <section id="contacto" className="section contact-section" aria-labelledby="contact-title">
      <div className="page-width">
        <SectionHeading id="contact-title" number="06" eyebrow="ENFOQUE Y CONTACTO" title="La tecnología debe adaptarse al problema, no al revés." />
        <div className="contact-grid">
          <p className="contact-philosophy" data-reveal>Antes de desarrollar una solución, busco comprender el proceso que necesita mejorar. Creo que el valor del software no está solamente en las tecnologías que utiliza, sino en su capacidad de resolver necesidades reales, simplificar operaciones y aportar resultados útiles.</p>
          <div className="contact-cta" data-reveal><span className="contact-cta__overline">EL SIGUIENTE PASO</span><h3>¿Tienes una idea o un desafío tecnológico?</h3><p>Podemos conversar sobre cómo abordarlo.</p><a className="button button--primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Conversemos <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="contact-details" data-reveal><a href={`mailto:${site.email}`}>{site.email} ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><span>Trujillo, Perú</span></div>
      </div>
    </section>
  );
}
