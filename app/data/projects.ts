export type Project = {
  slug: string;
  number: string;
  title: string;
  kind: string;
  client?: string;
  status: string;
  summary: string;
  context: string;
  problem: string;
  solution: string;
  role: string;
  decisions: string[];
  evidence: string;
  technologies: string[];
  liveUrl?: string;
  visual: "flow" | "web" | "academic" | "erp" | "ai";
};

export const projects: Project[] = [
  {
    slug: "whatsapp-comercial",
    number: "01",
    title: "Plataforma de gestión comercial por WhatsApp",
    kind: "Sistema comercial",
    client: "Boston Bilingual School",
    status: "En producción",
    summary: "Una operación comercial más ordenada, desde el primer mensaje hasta el seguimiento.",
    context: "Las solicitudes comerciales llegan a través de WhatsApp y requieren coordinación entre asesores.",
    problem: "Organizar conversaciones entrantes, distribuir la atención y dar continuidad a cada contacto dentro de un proceso comercial claro.",
    solution: "Sistema para organizar solicitudes recibidas mediante WhatsApp, asignar conversaciones a asesores y facilitar el seguimiento de contactos.",
    role: "Definí reglas de negocio y flujos de asignación, diseñé interfaces, dirigí técnicamente la implementación y participé en el despliegue.",
    decisions: ["Integración con WhatsApp Cloud API", "Modelo de datos en PostgreSQL", "Despliegue mediante Docker y Cloudflare"],
    evidence: "Proyecto interno en producción. La representación visual es conceptual; no se muestran datos ni capturas del sistema.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "WhatsApp Cloud API", "Docker", "Cloudflare"],
    visual: "flow",
  },
  {
    slug: "sitio-web-boston",
    number: "02",
    title: "Sitio web institucional bilingüe",
    kind: "Experiencia web",
    client: "Boston Bilingual School",
    status: "Publicado",
    summary: "Una presencia digital institucional pensada para comunicar en dos idiomas.",
    context: "Un sitio institucional necesita presentar información con claridad a públicos de habla hispana e inglesa.",
    problem: "Estructurar contenido bilingüe y habilitar formularios protegidos dentro de una experiencia web accesible.",
    solution: "Sitio web institucional bilingüe desarrollado con Astro, TypeScript y CSS, con formularios protegidos e integración con servicios de Cloudflare.",
    role: "Participé en la organización de contenido, diseño y desarrollo de la experiencia web e integración de servicios.",
    decisions: ["Astro para una web de contenido", "Interfaces responsive con CSS", "Formularios protegidos e integración con Cloudflare"],
    evidence: "Sitio público disponible en bostonbbs.com.",
    technologies: ["Astro", "TypeScript", "CSS", "Cloudflare"],
    liveUrl: "https://bostonbbs.com",
    visual: "web",
  },
  {
    slug: "aula-virtual",
    number: "03",
    title: "Aula virtual académica",
    kind: "Plataforma educativa",
    client: "Boston Bilingual School",
    status: "En desarrollo",
    summary: "Una estructura para reunir la actividad académica en un solo entorno.",
    context: "La actividad académica combina cursos, entregas, clases y evaluación en varios flujos de trabajo.",
    problem: "Definir una organización funcional comprensible para estudiantes, docentes y administración.",
    solution: "Plataforma en desarrollo destinada a organizar cursos, actividades académicas, entregas, clases virtuales y calificaciones.",
    role: "Trabajo en el análisis funcional, la organización de módulos y el diseño UX/UI.",
    decisions: ["Definición de módulos por flujo académico", "Prioridad a claridad de navegación", "Validación progresiva de requerimientos"],
    evidence: "Proyecto en desarrollo. El diagrama es una representación conceptual de sus áreas previstas, no una captura ni una demostración de funciones operativas.",
    technologies: ["Análisis funcional", "UX/UI", "Diseño de módulos"],
    visual: "academic",
  },
  {
    slug: "erp-escolar",
    number: "04",
    title: "ERP de gestión escolar",
    kind: "Sistemas de gestión",
    client: "Boston Bilingual School",
    status: "En planificación y desarrollo inicial",
    summary: "Procesos escolares conectados desde una lógica de negocio común.",
    context: "Los procesos de gestión escolar abarcan estudiantes, matrículas, apoderados, secciones y pagos.",
    problem: "Comprender las relaciones entre áreas y definir reglas coherentes antes de construir los módulos.",
    solution: "Solución orientada a centralizar procesos escolares; actualmente se encuentra en planificación y desarrollo inicial.",
    role: "Analizo procesos, defino reglas de negocio y planifico los módulos y sus relaciones.",
    decisions: ["Mapeo de procesos existentes", "Definición de entidades y reglas", "Planificación modular"],
    evidence: "Proyecto en etapa inicial. El diagrama representa el alcance previsto y no funciones terminadas.",
    technologies: ["Análisis de procesos", "Reglas de negocio", "Planificación de módulos"],
    visual: "erp",
  },
  {
    slug: "generador-ia",
    number: "05",
    title: "Generador de contenido académico con IA",
    kind: "Automatización aplicada",
    status: "Implementado",
    summary: "Menos trabajo repetitivo al preparar materiales académicos.",
    context: "La preparación de materiales académicos puede incluir tareas repetitivas de generación y organización de contenido.",
    problem: "Reducir parte del tiempo dedicado a estas tareas mediante una herramienta concreta.",
    solution: "Aplicación implementada para automatizar parte del proceso de generación de materiales académicos mediante Python y OpenAI API.",
    role: "Definí el flujo funcional y participé en la implementación e integración de la API.",
    decisions: ["Automatización con Python", "Integración con OpenAI API", "Flujo enfocado en materiales académicos"],
    evidence: "Aplicación implementada. La visualización es conceptual y no reproduce su interfaz real.",
    technologies: ["Python", "OpenAI API", "Automatización"],
    visual: "ai",
  },
];

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug);
