export const site = {
  name: "Benjamín Cueva",
  title: "Benjamín Cueva | Desarrollador de Soluciones Tecnológicas e IA Aplicada",
  description:
    "Portafolio de Benjamín Cueva: desarrollo de soluciones tecnológicas, software e inteligencia artificial aplicada con enfoque en procesos, automatización y experiencia de usuario.",
  email: "cueva_dev@hotmail.com",
  github: "https://github.com/CuevaBenjamin-dev",
  whatsapp: "https://wa.me/51923880101",
  instagram: "https://www.instagram.com/benya_cu/",
  facebook: "https://www.facebook.com/benjamin.cueva.394715/",
  url: (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, ""),
};

export function absoluteUrl(path: string) {
  return site.url ? `${site.url}${path}` : undefined;
}
