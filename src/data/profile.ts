import type { Localized } from '../i18n/ui'

export const profile = {
  name: 'Miguel Ángel Altamar',
  fullName: 'Miguel Ángel Altamar Rodríguez',
  role: {
    en: 'Backend Developer · APIs, Integrations & Enterprise Systems',
    es: 'Desarrollador Back-End · APIs, Integraciones y Sistemas Empresariales',
  } satisfies Localized,
  email: 'maltamarr@outlook.com',
  linkedin: 'https://www.linkedin.com/in/mangel2002/',
  github: 'https://github.com/MigueIAngel',
}

export interface Experience {
  role: Localized
  company: string
  location: Localized
  start: string // YYYY-MM
  end?: string
  highlights: Localized[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    role: { en: 'Senior AL Developer', es: 'Desarrollador AL Senior' },
    company: '4 Ways Tech',
    location: { en: 'Remote', es: 'Remoto' },
    start: '2026-03',
    highlights: [
      {
        en: 'Design of integration APIs in Business Central with a traceability log for every call.',
        es: 'Diseño de APIs de integración en Business Central con log de trazabilidad de las llamadas.',
      },
      {
        en: 'Electronic invoicing (e-CF) for the Dominican Republic integrated with the PAC SERES from Business Central.',
        es: 'Integración de facturación electrónica (e-CF) de República Dominicana con el PAC SERES desde Business Central.',
      },
    ],
    tags: ['AL', 'Business Central', 'REST APIs', 'e-Invoicing'],
  },
  {
    role: { en: 'Microsoft Dynamics Developer', es: 'Microsoft Dynamics Developer' },
    company: 'LLB Solutions',
    location: { en: 'Barranquilla, Colombia', es: 'Barranquilla, Colombia' },
    start: '2025-06',
    end: '2026-03',
    highlights: [
      {
        en: 'Extended ERP functionality in AL: pages, reports and integrations with external systems.',
        es: 'Extensión de funcionalidad ERP en lenguaje AL: páginas, reportes e integraciones con sistemas externos.',
      },
      {
        en: 'Automated tests for Business Central features to reduce regressions.',
        es: 'Pruebas automatizadas de funcionalidades de Business Central para reducir regresiones.',
      },
    ],
    tags: ['AL', 'Dynamics 365', 'Automated testing'],
  },
  {
    role: { en: 'Fullstack Developer', es: 'Fullstack Developer' },
    company: 'Wizybot',
    location: { en: 'Barranquilla, Colombia', es: 'Barranquilla, Colombia' },
    start: '2025-04',
    end: '2025-05',
    highlights: [
      {
        en: 'Design and integration of REST APIs between internal tools and third-party services.',
        es: 'Diseño e integración de APIs REST entre herramientas internas y servicios de terceros.',
      },
    ],
    tags: ['REST APIs', 'Node.js', 'Integrations'],
  },
]

export const skills: { title: Localized; items: string[] }[] = [
  {
    title: { en: 'Back-end', es: 'Back-end' },
    items: ['Node.js', 'Fastify', 'NestJS', 'FastAPI', 'Django', 'Spring Boot', 'JEE / JPA', 'ASP.NET'],
  },
  {
    title: { en: 'Languages', es: 'Lenguajes' },
    items: ['TypeScript', 'Python', 'Java', 'C#', 'SQL', 'AL'],
  },
  {
    title: { en: 'Front-end', es: 'Front-end' },
    items: ['React', 'Next.js', 'Angular', 'Astro', 'Tailwind CSS', 'HTMX'],
  },
  {
    title: { en: 'Integrations', es: 'Integraciones' },
    items: ['REST', 'GraphQL', 'SOAP', 'WS-Security', 'JWT', 'OAuth 2.0', 'XML', 'LLM APIs / RAG'],
  },
  {
    title: { en: 'Databases', es: 'Bases de datos' },
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'DB2', 'DynamoDB', 'AWS RDS', 'Azure SQL', 'ChromaDB'],
  },
  {
    title: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    items: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'CI/CD', 'DevSecOps', 'Git flow'],
  },
]

export const education = [
  {
    title: { en: 'B.Sc. Systems Engineering', es: 'Ingeniería de Sistemas' } satisfies Localized,
    place: 'Universidad del Norte',
    year: '2024',
    note: {
      en: 'Distinguished student and scholarship holder',
      es: 'Estudiante distinguido y becario',
    } satisfies Localized,
  },
  {
    title: {
      en: 'Microsoft Certified: Dynamics 365 Business Central Developer Associate (MB-820)',
      es: 'Microsoft Certified: Dynamics 365 Business Central Developer Associate (MB-820)',
    } satisfies Localized,
    place: 'Microsoft',
    year: '2025',
  },
  {
    title: { en: 'Languages', es: 'Idiomas' } satisfies Localized,
    place: 'Español (nativo) · English (B2)',
    year: '',
  },
]
