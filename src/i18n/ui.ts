export const languages = { en: 'English', es: 'Español' } as const
export type Lang = keyof typeof languages
export const defaultLang: Lang = 'en'

/** Text in both languages. */
export type Localized = Record<Lang, string>

export const ui = {
  en: {
    'meta.title': 'Miguel Ángel Altamar · Full-Stack Developer',
    'meta.description':
      'Full-stack developer from Barranquilla, Colombia. Web apps with React, Angular and Next.js, APIs with Node.js, Python, Java and .NET, and ERP integrations on Business Central.',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm",
    'hero.pitch':
      'I build complete web products: interfaces in React, Angular and Next.js, and the APIs, databases and integrations behind them. By day I also extend and integrate Microsoft Dynamics 365 Business Central.',
    'hero.cta.projects': 'See my work',
    'hero.cta.contact': 'Get in touch',
    'cv.download': 'Download CV',
    'cv.file': 'MiguelAngelAltamar-CV-EN.pdf',
    'hero.location': 'Barranquilla, Colombia · Remote',
    'about.title': 'About me',
    'about.body1':
      'I am a systems engineer (Universidad del Norte, distinguished student and scholarship holder) who enjoys owning a feature end to end: modeling the data, designing the API, integrating third-party services and building the interface people actually use.',
    'about.body2':
      'Day to day I work on Microsoft Dynamics 365 Business Central for several clients: electronic invoicing integrations, integration APIs, reports and production support. Alongside that I build full-stack products with TypeScript and Python, which is what the projects below show.',
    'stats.projects': 'portfolio projects',
    'stats.stacks': 'languages in production',
    'stats.cert': 'Microsoft certified',
    'stats.english': 'English level',
    'experience.title': 'Experience',
    'experience.present': 'Present',
    'projects.title': 'Selected projects',
    'projects.subtitle':
      'Each project is a complete repository with tests, CI, Docker and a documented git history of pull requests.',
    'projects.featured': 'Featured',
    'projects.all': 'All',
    'projects.code': 'Code',
    'projects.demo': 'Live demo',
    'projects.docs': 'API docs',
    'projects.demoNote': 'Demos run on free hosting: the first request can take up to a minute while the server wakes up.',
    'projects.filter': 'Filter by technology',
    'skills.title': 'Skills',
    'education.title': 'Education & certifications',
    'contact.title': "Let's work together",
    'contact.body':
      "I'm always happy to talk about full-stack roles, integrations or interesting projects. The best way to reach me is by email or LinkedIn.",
    'contact.email': 'Send an email',
    'footer.built': 'Built with Astro and Tailwind CSS.',
    'footer.source': 'Source code',
    'lang.switch': 'Español',
    'banner.text':
      'Heads-up: the live demos run on free hosting (Render). If a demo has been idle, the first load can take up to a minute while the server wakes up.',
    'banner.close': 'Dismiss notice',
  },
  es: {
    'meta.title': 'Miguel Ángel Altamar · Desarrollador Full-Stack',
    'meta.description':
      'Desarrollador full-stack de Barranquilla, Colombia. Aplicaciones web con React, Angular y Next.js, APIs con Node.js, Python, Java y .NET, e integraciones de ERP en Business Central.',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.pitch':
      'Construyo productos web completos: interfaces en React, Angular y Next.js, y las APIs, bases de datos e integraciones que hay detrás. En mi día a día también extiendo e integro Microsoft Dynamics 365 Business Central.',
    'hero.cta.projects': 'Ver mi trabajo',
    'hero.cta.contact': 'Contactar',
    'cv.download': 'Descargar CV',
    'cv.file': 'MiguelAngelAltamar-CV-ES.pdf',
    'hero.location': 'Barranquilla, Colombia · Remoto',
    'about.title': 'Sobre mí',
    'about.body1':
      'Soy ingeniero de sistemas (Universidad del Norte, estudiante distinguido y becario) y disfruto llevar una funcionalidad de punta a punta: modelar los datos, diseñar la API, integrar servicios de terceros y construir la interfaz que la gente realmente usa.',
    'about.body2':
      'En mi día a día trabajo con Microsoft Dynamics 365 Business Central para varios clientes: integraciones de facturación electrónica, APIs de integración, reportes y soporte en producción. En paralelo construyo productos full-stack con TypeScript y Python; eso es lo que muestran los proyectos de abajo.',
    'stats.projects': 'proyectos de portafolio',
    'stats.stacks': 'lenguajes en producción',
    'stats.cert': 'certificado por Microsoft',
    'stats.english': 'nivel de inglés',
    'experience.title': 'Experiencia',
    'experience.present': 'Presente',
    'projects.title': 'Proyectos destacados',
    'projects.subtitle':
      'Cada proyecto es un repositorio completo con tests, CI, Docker y un historial de git documentado con pull requests.',
    'projects.featured': 'Destacado',
    'projects.all': 'Todos',
    'projects.code': 'Código',
    'projects.demo': 'Demo en vivo',
    'projects.docs': 'Docs de la API',
    'projects.demoNote': 'Las demos corren en hosting gratuito: la primera petición puede tardar hasta un minuto mientras el servidor despierta.',
    'projects.filter': 'Filtrar por tecnología',
    'skills.title': 'Habilidades',
    'education.title': 'Educación y certificaciones',
    'contact.title': 'Trabajemos juntos',
    'contact.body':
      'Siempre estoy abierto a conversar sobre roles full-stack, integraciones o proyectos interesantes. La mejor forma de contactarme es por correo o LinkedIn.',
    'contact.email': 'Enviar un correo',
    'footer.built': 'Hecho con Astro y Tailwind CSS.',
    'footer.source': 'Código fuente',
    'lang.switch': 'English',
    'banner.text':
      'Aviso: las demos en vivo están alojadas en servicios gratuitos (Render). Si una demo lleva un rato sin uso, la primera carga puede tardar hasta un minuto mientras el servidor despierta.',
    'banner.close': 'Cerrar aviso',
  },
} as const

export type UIKey = keyof (typeof ui)['en']

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key]
}
