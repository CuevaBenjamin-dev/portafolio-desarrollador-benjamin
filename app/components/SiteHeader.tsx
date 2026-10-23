import { useState } from "react";
import { Link, useLocation } from "react-router";
import { site } from "../config/site";

const links = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Proceso", href: "/#proceso" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`site-header ${overlay ? "site-header--overlay" : ""}`}>
      <div className="site-header__inner page-width">
        <Link className="brand" to="/" aria-label="Benjamín Cueva, inicio" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">BC<span>.</span></span>
          <span className="brand__caption">BENJAMÍN CUEVA<span>DESARROLLO & TECNOLOGÍA</span></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={`site-nav ${open ? "site-nav--open" : ""}`} aria-label="Navegación principal">
          {links.map((link) => (
            <Link key={link.label} to={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <a className="site-nav__contact" href={site.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Conversemos <span aria-hidden="true">↗</span>
          </a>
        </nav>
        {!isHome && <Link className="site-header__back" to="/#proyectos">← Todos los proyectos</Link>}
      </div>
    </header>
  );
}
