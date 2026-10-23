# Portafolio de Benjamín Cueva

Sitio personal creado con React, TypeScript, Vite, React Router en modo framework y CSS nativo. La página principal y las cinco páginas de proyectos se prerenderizan como HTML y se sirven sin servidor de aplicación.

## Desarrollo

```bash
npm ci
npm run dev
```

## Verificación y compilación

```bash
npm run typecheck
npm run build
npm run preview
```

La compilación produce los archivos estáticos en `build/client`, directorio previsto para Cloudflare Pages. Las rutas de proyectos también generan su propio `index.html` para permitir el acceso directo a cada URL.

## Despliegue en Cloudflare Pages

Conecta este repositorio a Cloudflare Pages mediante la integración nativa de GitHub. Configura la rama de producción `main`, el comando de compilación `npm run build` y el directorio de salida `build/client`. Cloudflare instala las dependencias desde `package-lock.json`; no se necesita un servidor Node.js permanente ni un flujo de GitHub Actions. Cada nuevo commit enviado a `main` inicia una nueva compilación y publicación.

El dominio principal es `https://valana.tech`. En la configuración de producción de Pages, `SITE_URL` y `VITE_SITE_URL` deben tener ese valor para generar el sitemap, `robots.txt`, los metadatos Open Graph y los datos estructurados. El subdominio `https://portafolio-benjamin.pages.dev` sigue disponible como dirección de Pages. La versión de Node para compilar está fijada en `.node-version`.

Si el dominio público cambia más adelante, actualiza ambas variables y vuelve a desplegar.

Los visuales de los casos son representaciones conceptuales originales, no capturas de sistemas internos. La imagen del personaje tiene una fuente PNG sin pérdida en `assets/source` y una versión WebP optimizada en `public/images`.
