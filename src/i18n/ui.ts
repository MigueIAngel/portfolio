export const languages = { en: 'English', es: 'Español' } as const
export type Lang = keyof typeof languages
export const defaultLang: Lang = 'en'

/** Text in both languages. */
export type Localized = Record<Lang, string>

export const ui = {
  en: {
    'meta.title': 'Miguel Ángel Altamar · Backend Developer',
    'meta.description':
      'Backend developer from Barranquilla, Colombia. APIs, integrations and enterprise systems with Node.js, Python, Java, .NET and Business Central.',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm",
    'hero.pitch':
      'I build reliable APIs and integrations that connect business systems, from ERP extensions in Business Central to full-stack apps with modern JavaScript and Python frameworks.',
    'hero.cta.projects': 'See my work',
    'hero.cta.contact': 'Get in touch',
    'hero.location': 'Barranquilla, Colombia · Remote',
    'about.title': 'About me',
    'about.body1':
      'I am a systems engineer (Universidad del Norte, distinguished student and scholarship holder) focused on the backend: designing APIs, integrating third-party services and keeping every call traceable.',
    'about.body2':
      'Day to day I extend Microsoft Dynamics 365 Business Central in AL and connect it to external services, including e-invoicing providers (PAC). Outside the ERP world I enjoy building full-stack products with TypeScript and Python, which is what the projects below are about.',
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
    'projects.filter': 'Filter by technology',
    'skills.title': 'Skills',
    'education.title': 'Education & certifications',
    'contact.title': "Let's work together",
    'contact.body':
      "I'm always happy to talk about backend roles, integrations or interesting projects. The best way to reach me is by email or LinkedIn.",
    'contact.email': 'Send an email',
    'footer.built': 'Built with Astro and Tailwind CSS.',
    'footer.source': 'Source code',
    'lang.switch': 'Español',
  },
  es: {
    'meta.title': 'Miguel Ángel Altamar · Desarrollador Back-End',
    'meta.description':
      'Desarrollador back-end de Barranquilla, Colombia. APIs, integraciones y sistemas empresariales con Node.js, Python, Java, .NET y Business Central.',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.pitch':
      'Construyo APIs e integraciones confiables que conectan sistemas de negocio, desde extensiones de ERP en Business Central hasta aplicaciones full-stack con frameworks modernos de JavaScript y Python.',
    'hero.cta.projects': 'Ver mi trabajo',
    'hero.cta.contact': 'Contactar',
    'hero.location': 'Barranquilla, Colombia · Remoto',
    'about.title': 'Sobre mí',
    'about.body1':
      'Soy ingeniero de sistemas (Universidad del Norte, estudiante distinguido y becario) enfocado en el back-end: diseño de APIs, integración de servicios de terceros y trazabilidad de cada llamada.',
    'about.body2':
      'En mi día a día extiendo Microsoft Dynamics 365 Business Central en AL y lo conecto con servicios externos, incluidos proveedores de facturación electrónica (PAC). Fuera del mundo ERP disfruto construyendo productos full-stack con TypeScript y Python; de eso tratan los proyectos de abajo.',
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
    'projects.filter': 'Filtrar por tecnología',
    'skills.title': 'Habilidades',
    'education.title': 'Educación y certificaciones',
    'contact.title': 'Trabajemos juntos',
    'contact.body':
      'Siempre estoy abierto a conversar sobre roles back-end, integraciones o proyectos interesantes. La mejor forma de contactarme es por correo o LinkedIn.',
    'contact.email': 'Enviar un correo',
    'footer.built': 'Hecho con Astro y Tailwind CSS.',
    'footer.source': 'Código fuente',
    'lang.switch': 'English',
  },
} as const

export type UIKey = keyof (typeof ui)['en']

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key]
}
