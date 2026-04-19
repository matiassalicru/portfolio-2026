export type Locale = 'en' | 'es'

const translations = {
  en: {
    meta: {
      title: 'Matias Salicru — Senior Frontend Engineer',
      description:
        'Senior Frontend Engineer with 5+ years delivering production React/Next.js applications at scale.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      ai: 'AI',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Senior Frontend Engineer',
      subtagline: 'Building fast, scalable systems that ship.',
      location: 'Catamarca, Argentina · Open to Remote',
      cta: 'Get in touch',
      metrics: {
        deploy: { value: '80%', label: 'Deployment Time Reduction' },
        perf: { value: '35%', label: 'Page Load Improvement' },
        mttd: { value: '80%', label: 'Faster Incident Detection' },
      },
    },
    about: {
      sectionLabel: 'About',
      heading: 'I build things that perform.',
      p1: "Senior Frontend Engineer with 5+ years delivering production React and Next.js applications at scale. I care deeply about performance, observability, and shipping with confidence.",
      p2: "I've led frontend architecture, built CI/CD pipelines, integrated observability tools like Datadog, and mentored teams across multicultural remote environments. English is my everyday working language.",
      p3: "Early adopter of agentic AI development — I use multi-agent Claude and Cursor workflows with MCP integrations to ship faster without sacrificing quality.",
    },
    experience: {
      sectionLabel: 'Experience',
      entries: {
        mentatech: {
          role: 'Senior Software Engineer',
          period: 'Mar 2023 – Present',
          location: 'Buenos Aires, Argentina (Remote)',
          bullets: [
            { text: 'Led architecture of Next.js (TypeScript) frontend, achieving ~35% reduction in page load time through strategic code-splitting and dynamic imports.', metric: '35%' },
            { text: 'Integrated Datadog observability stack, reducing mean time to detection (MTTD) of production incidents by 80%.', metric: '80%' },
            { text: 'Redesigned CI/CD pipelines with GitHub Actions, cutting deployment time by 80% across frontend and backend services.', metric: '80%' },
            { text: 'Partnered with backend engineers to solve large dataset rendering bottlenecks via caching strategies, eliminating UI freezes at scale.' },
            { text: 'Established Cypress E2E test suite and led Next.js version migration, improving build performance and long-term maintainability.' },
          ],
        },
        cor: {
          role: 'SSR Front-end Engineer',
          period: 'Jul 2021 – Apr 2023',
          location: 'Buenos Aires, Argentina (Remote)',
          bullets: [
            { text: 'Built and maintained React features for a SaaS project management platform adopted by 100+ professionals across distributed teams.', metric: '100+' },
            { text: 'Created Storybook component library as the single source of truth for UI patterns, reducing engineer onboarding time and inconsistencies.' },
            { text: 'Delivered features consistently on schedule within a fully remote, English-speaking multicultural team across multiple timezones.' },
          ],
        },
        brainIT: {
          role: 'Web Developer',
          period: 'Jun 2021 – Oct 2021',
          location: 'Chicago, IL — Remote (Fixed-scope contract)',
          bullets: [
            { text: 'Delivered a React web application using micro-frontend architecture as a fixed-scope contract engagement, enabling independent deployment of each product module.' },
          ],
        },
      },
    },
    stack: {
      sectionLabel: 'Stack',
      categories: {
        frontend: 'Frontend',
        testing: 'Testing',
        tools: 'Tools & DevOps',
        'ui-libs': 'UI Libraries',
        apis: 'APIs',
        ai: 'AI Development',
      },
    },
    aiWorkflows: {
      sectionLabel: 'AI-Assisted Development',
      intro:
        "I treat AI as a force multiplier — not a replacement for engineering judgment. Here's how I integrate it into my daily workflow.",
      toolsLabel: 'Tools in rotation',
      capabilities: [
        {
          title: 'Multi-agent git worktree',
          description:
            'Run multiple Claude agents in parallel on isolated git worktrees — enabling concurrent feature development without branch conflicts.',
        },
        {
          title: 'MCP Server integrations',
          description:
            'Figma MCP for design-to-code workflows. Filesystem MCP for cross-session context persistence and memory.',
        },
        {
          title: 'Model selection by task',
          description:
            'Anthropic Claude Sonnet for speed-critical tasks, Opus for complex architectural reasoning — optimized per task type.',
        },
        {
          title: 'Context persistence',
          description:
            'Persistent memory across sessions via engram — AI agents retain project context, decisions, and conventions between conversations.',
        },
      ],
    },
    projects: {
      sectionLabel: 'Projects',
      heading: "Things I've built.",
      swyd: {
        description:
          'Task management mobile app built with Clean Architecture. Organizes todos into collapsible sections with inline editing, swipe gestures, and full SQLite persistence.',
      },
      swiftTodoApp: {
        description:
          'Native macOS todo app that lives in the menu bar. Built entirely in Swift with no dependencies.',
      },
      dashboard: {
        description:
          'Personal dashboard to manage tasks, job applications, and goals. Features drag-and-drop, Supabase auth, real-time queries with React Query, and i18n.',
      },
      viewOnGitHub: 'View on GitHub',
    },
    contact: {
      sectionLabel: 'Contact',
      heading: "Let's talk.",
      body: 'Open to remote opportunities worldwide. Reach out via any of the channels below.',
    },
  },
  es: {
    meta: {
      title: 'Matias Salicru — Senior Frontend Engineer',
      description:
        'Senior Frontend Engineer con más de 5 años entregando aplicaciones React/Next.js en producción a escala.',
    },
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      stack: 'Stack',
      ai: 'IA',
      contact: 'Contacto',
    },
    hero: {
      tagline: 'Senior Frontend Engineer',
      subtagline: 'Construyo sistemas rápidos y escalables que llegan a producción.',
      location: 'Catamarca, Argentina · Disponible para trabajo remoto',
      cta: 'Hablemos',
      metrics: {
        deploy: { value: '80%', label: 'Reducción en tiempo de deploy' },
        perf: { value: '35%', label: 'Mejora en carga de página' },
        mttd: { value: '80%', label: 'Detección de incidentes más rápida' },
      },
    },
    about: {
      sectionLabel: 'Sobre mí',
      heading: 'Construyo cosas que rinden.',
      p1: 'Senior Frontend Engineer con más de 5 años entregando aplicaciones React y Next.js en producción a escala. Me importa profundamente el rendimiento, la observabilidad y el hecho de poder deployar con confianza.',
      p2: 'Lideré arquitecturas frontend, construí pipelines de CI/CD, integré herramientas de observabilidad como Datadog y trabajé con equipos multiculturales distribuidos. El inglés es mi idioma de trabajo del día a día.',
      p3: 'Adoptador temprano del desarrollo asistido por IA — uso workflows multi-agente con Claude y Cursor, junto con integraciones MCP, para entregar más rápido sin sacrificar calidad.',
    },
    experience: {
      sectionLabel: 'Experiencia',
      entries: {
        mentatech: {
          role: 'Senior Software Engineer',
          period: 'Mar 2023 – Actualidad',
          location: 'Buenos Aires, Argentina (Remoto)',
          bullets: [
            { text: 'Lideré la arquitectura del frontend en Next.js (TypeScript), logrando una reducción de ~35% en el tiempo de carga mediante code-splitting estratégico e imports dinámicos.', metric: '35%' },
            { text: 'Integré el stack de observabilidad de Datadog, reduciendo el tiempo medio de detección (MTTD) de incidentes en producción en un 80%.', metric: '80%' },
            { text: 'Rediseñé los pipelines de CI/CD con GitHub Actions, reduciendo el tiempo de deploy en un 80% en servicios frontend y backend.', metric: '80%' },
            { text: 'Trabajé junto a ingenieros de backend para resolver cuellos de botella en el renderizado de grandes datasets mediante estrategias de caché, eliminando freezes de UI a escala.' },
            { text: 'Establecí la suite de tests E2E con Cypress y lideré la migración de versión de Next.js, mejorando la performance del build y la mantenibilidad a largo plazo.' },
          ],
        },
        cor: {
          role: 'SSR Front-end Engineer',
          period: 'Jul 2021 – Abr 2023',
          location: 'Buenos Aires, Argentina (Remoto)',
          bullets: [
            { text: 'Desarrollé y mantuve funcionalidades React para una plataforma SaaS de gestión de proyectos adoptada por más de 100+ profesionales en equipos distribuidos.', metric: '100+' },
            { text: 'Creé una biblioteca de componentes en Storybook como fuente única de verdad para los patrones de UI, reduciendo el tiempo de onboarding y las inconsistencias.' },
            { text: 'Entregué features consistentemente en tiempo dentro de un equipo multicultural totalmente remoto en inglés con múltiples zonas horarias.' },
          ],
        },
        brainIT: {
          role: 'Web Developer',
          period: 'Jun 2021 – Oct 2021',
          location: 'Chicago, IL — Remoto (Contrato de alcance fijo)',
          bullets: [
            { text: 'Desarrollé una aplicación web React usando arquitectura micro-frontend como contrato de alcance fijo, habilitando el deploy independiente de cada módulo del producto.' },
          ],
        },
      },
    },
    stack: {
      sectionLabel: 'Stack',
      categories: {
        frontend: 'Frontend',
        testing: 'Testing',
        tools: 'Herramientas & DevOps',
        'ui-libs': 'Librerías UI',
        apis: 'APIs',
        ai: 'Desarrollo con IA',
      },
    },
    aiWorkflows: {
      sectionLabel: 'Desarrollo Asistido por IA',
      intro:
        'Trato a la IA como un multiplicador de fuerza — no como un reemplazo del criterio de ingeniería. Así la integro en mi flujo de trabajo diario.',
      toolsLabel: 'Herramientas en uso',
      capabilities: [
        {
          title: 'Multi-agente con git worktree',
          description:
            'Ejecuto múltiples agentes Claude en paralelo sobre git worktrees aislados — permitiendo desarrollo de features concurrente sin conflictos de ramas.',
        },
        {
          title: 'Integraciones con MCP Servers',
          description:
            'MCP de Figma para flujos de diseño a código. MCP de filesystem para persistencia de contexto entre sesiones.',
        },
        {
          title: 'Selección de modelo por tarea',
          description:
            'Claude Sonnet de Anthropic para tareas críticas de velocidad, Opus para razonamiento arquitectónico complejo — optimizado por tipo de tarea.',
        },
        {
          title: 'Persistencia de contexto',
          description:
            'Memoria persistente entre sesiones con engram — los agentes IA retienen contexto del proyecto, decisiones y convenciones entre conversaciones.',
        },
      ],
    },
    projects: {
      sectionLabel: 'Proyectos',
      heading: 'Cosas que construí.',
      swyd: {
        description:
          'App mobile de gestión de tareas construida con Clean Architecture. Organiza todos en secciones colapsables con edición inline, gestos de swipe y persistencia local con SQLite.',
      },
      swiftTodoApp: {
        description:
          'App de tareas nativa para macOS que vive en la barra de menú. Construida íntegramente en Swift sin dependencias externas.',
      },
      dashboard: {
        description:
          'Dashboard personal para gestionar tareas, búsqueda laboral y metas. Incluye drag-and-drop, auth con Supabase, React Query y soporte i18n.',
      },
      viewOnGitHub: 'Ver en GitHub',
    },
    contact: {
      sectionLabel: 'Contacto',
      heading: 'Hablemos.',
      body: 'Disponible para oportunidades remotas en cualquier parte del mundo. Contactame por cualquiera de los canales de abajo.',
    },
  },
} as const

export type Translations = typeof translations.en

export function getTranslations(locale: Locale): Translations {
  return translations[locale]
}
