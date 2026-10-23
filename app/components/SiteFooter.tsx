import { Link } from "react-router";
import { site } from "../config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width site-footer__main">
        <div>
          <Link className="site-footer__name" to="/">Benjamín Cueva<span className="accent">.</span></Link>
          <p>Desarrollador de Soluciones Tecnológicas</p>
        </div>
        <div className="site-footer__links">
          <nav aria-label="Navegación del pie de página">
            <Link to="/">Inicio</Link>
            <Link to="/#proyectos">Proyectos</Link>
            <Link to="/#contacto">Contacto</Link>
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={`mailto:${site.email}`}>Correo ↗</a>
          </nav>
          <nav className="site-footer__social" aria-label="Redes sociales">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.2 11.7a8.2 8.2 0 0 1-11.7 7.4L3.7 20.3l1.2-4.8A8.2 8.2 0 1 1 20.2 11.7Z" />
                <path d="M8.2 8.1c.3-.4.6-.5.9-.2l1.2 1.4c.2.2.2.5 0 .7l-.7.8c.7 1.4 1.8 2.5 3.3 3.2l.8-.7c.2-.2.5-.2.7 0l1.4 1.2c.3.3.2.6-.2.9-.5.4-1.1.6-1.7.4-3.4-.9-6.1-3.6-7-7-.2-.6 0-1.2.4-1.7Z" />
              </svg>
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14.2 21v-8.1h2.7l.4-3.2h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.5-.1-2.6 0-4.4 1.6-4.4 4.6v1.9H7.7v3.2h2.9V21h3.6Z" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
      <div className="page-width site-footer__bottom"><span>Trujillo, Perú</span><span>© {new Date().getFullYear()} Benjamín Cueva</span></div>
    </footer>
  );
}
