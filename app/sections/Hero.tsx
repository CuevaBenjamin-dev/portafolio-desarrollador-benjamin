import { Link } from "react-router";
import { SiteHeader } from "../components/SiteHeader";
import { site } from "../config/site";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <SiteHeader overlay />
      <div className="hero__ambient hero__ambient--one" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--two" aria-hidden="true" />
      <div className="hero__wrap page-width">
        <div className="hero__panel">
          <div className="hero__texture" aria-hidden="true" />
          <div className="hero__copy">
            <p className="hero__index"><span className="signal-dot" /> PORTAFOLIO / 2026 <span className="hero__index-rule" /></p>
            <p className="hero__name">BENJAMÍN CUEVA</p>
            <p className="hero__role">Desarrollador de Soluciones Tecnológicas <span>Software e IA Aplicada</span></p>
            <h1 id="hero-title">Del problema de negocio a una <em>solución que funciona.</em></h1>
            <p className="hero__description">Comprendo procesos, diseño experiencias y desarrollo soluciones tecnológicas que responden a necesidades reales. Combino lógica de negocio, automatización e inteligencia artificial para crear sistemas funcionales y eficientes.</p>
            <div className="hero__actions">
              <Link className="button button--primary" to="/#proyectos">Explorar proyectos <span aria-hidden="true">↗</span></Link>
              <a className="button button--text" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Conversemos <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero__portrait-wrap">
            <div className="hero__portrait-light" aria-hidden="true" />
            <img className="hero__portrait" src="/images/benjamin-anime.webp" width="1055" height="1491" alt="Ilustración anime de Benjamín Cueva mirando sobre el hombro con traje azul oscuro" fetchPriority="high" />
          </div>
          <aside className="hero__focus" aria-label="Mi enfoque profesional">
            <p className="hero__focus-label"><span className="signal-dot" /> MI ENFOQUE</p>
            <ol>
              <li><span>01</span><strong>Lógica de negocio</strong></li>
              <li><span>02</span><strong>Automatización e IA</strong></li>
              <li><span>03</span><strong>Experiencia UX/UI</strong></li>
            </ol>
            <p className="hero__focus-end">IDEA → SISTEMA → IMPACTO</p>
          </aside>
          <span className="hero__vertical" aria-hidden="true">PENSAR · DISEÑAR · CONSTRUIR</span>
        </div>
        <a className="hero__scroll" href="#proyectos"><span className="hero__scroll-line" /> DESLIZA PARA EXPLORAR <span>↓</span></a>
      </div>
    </section>
  );
}
