import { writeFile, rm } from "node:fs/promises";
import { join } from "node:path";

const output = join(process.cwd(), "build", "client");
const rawUrl = process.env.SITE_URL?.replace(/\/$/, "");
const sitemapPath = join(output, "sitemap.xml");

if (rawUrl) {
  const url = new URL(rawUrl);
  if (url.protocol !== "https:") throw new Error("SITE_URL debe utilizar https.");
  const paths = ["/", "/proyectos/whatsapp-comercial", "/proyectos/sitio-web-boston", "/proyectos/aula-virtual", "/proyectos/erp-escolar", "/proyectos/generador-ia"];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${url.origin}${path}</loc></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(sitemapPath, sitemap);
  await writeFile(join(output, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${url.origin}/sitemap.xml\n`);
  console.log(`Sitemap generado para ${url.origin}`);
} else {
  await rm(sitemapPath, { force: true });
  console.log("SITE_URL no configurada: sitemap.xml se generará al definir el dominio de producción.");
}
