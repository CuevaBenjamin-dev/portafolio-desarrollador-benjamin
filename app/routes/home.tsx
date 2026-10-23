import type { MetaFunction } from "react-router";
import { SiteFooter } from "../components/SiteFooter";
import { absoluteUrl, site } from "../config/site";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Hero } from "../sections/Hero";
import { Process } from "../sections/Process";
import { Projects } from "../sections/Projects";
import { Specialties } from "../sections/Specialties";
import { Technologies } from "../sections/Technologies";

export const meta: MetaFunction = () => [
  { title: site.title },
  { name: "description", content: site.description },
  { property: "og:type", content: "website" },
  { property: "og:title", content: site.title },
  { property: "og:description", content: site.description },
  ...(absoluteUrl("/") ? [{ property: "og:url", content: absoluteUrl("/") }] : []),
];

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Desarrollador de Soluciones Tecnológicas",
    description: "Software e inteligencia artificial aplicada",
    email: site.email,
    sameAs: [site.github, site.instagram, site.facebook],
    address: { "@type": "PostalAddress", addressLocality: "Trujillo", addressCountry: "PE" },
    ...(site.url ? { url: site.url } : {}),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Specialties />
        <Process />
        <Technologies />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
