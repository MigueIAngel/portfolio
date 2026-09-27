import type { Localized } from '../i18n/ui'

export const profile = {
  name: 'Miguel Ángel Altamar',
  fullName: 'Miguel Ángel Altamar Rodríguez',
  role: {
    en: 'Full-Stack Developer · Web Apps, APIs & Integrations',
    es: 'Desarrollador Full-Stack · Aplicaciones Web, APIs e Integraciones',
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
        en: 'Electronic invoicing (e-CF, Dominican Republic): end-to-end integration with the SERES PAC from Business Central, building the fiscal XML for Fiscal Credit (31) and Consumer (32) invoices and their credit notes, and consuming the SOAP service with WS-Security for submission and status queries.',
        es: 'Facturación electrónica (e-CF, República Dominicana): integración de punta a punta con el PAC SERES desde Business Central, construyendo el XML fiscal de Factura de Crédito Fiscal (31), Factura de Consumo (32) y sus notas de crédito, y consumiendo el servicio SOAP con WS-Security para el envío y la consulta de estado.',
      },
      {
        en: 'Reporting: 14 RDL/RDLC reports built from scratch for 8 clients (cash reconciliation, payment summaries, settlement sheets, AR/AP aging, trial balance, G/L register, withholding certificates, fixed-asset book value) and 13 invoice, purchase-order and check layouts improved.',
        es: 'Reportes: 14 reportes RDL/RDLC construidos desde cero para 8 clientes (arqueo de caja, resumen y detalle de pagos, liquidaciones, antigüedad de CxC/CxP, balance de comprobación, registro de mayor, certificados de retención, valor en libros de activos fijos) y 13 formatos de facturas, órdenes de compra y cheques mejorados.',
      },
      {
        en: 'Integration APIs: custom API pages for external systems (create, update, query and delete items, units of measure and dimension values), backed by an integration log table and codeunit that make every call traceable.',
        es: 'APIs de integración: páginas API para sistemas externos (crear, actualizar, consultar y eliminar artículos, unidades de medida y valores de dimensión), respaldadas por una tabla y una codeunit de log que dan trazabilidad a cada llamada.',
      },
      {
        en: 'Production support: diagnosis and fixes of AL extension defects in live environments (dimensions in APIs and budgets, user permissions, formatting in bank export files) and refactoring of obsoleted code after Business Central upgrades.',
        es: 'Soporte en producción: diagnóstico y corrección de defectos de extensiones AL en ambientes productivos (dimensiones en APIs y presupuestos, permisos de usuario, formato en archivos de exportación bancaria) y refactorización de código obsoleto tras actualizaciones de Business Central.',
      },
    ],
    tags: ['AL', 'Business Central', 'SOAP · WS-Security', 'XML', 'RDLC', 'REST APIs'],
  },
  {
    role: { en: 'Business Central Developer', es: 'Desarrollador Business Central' },
    company: 'LLB Solutions',
    location: { en: 'Barranquilla, Colombia', es: 'Barranquilla, Colombia' },
    start: '2025-06',
    end: '2026-03',
    highlights: [
      {
        en: 'Designed, developed and implemented custom Microsoft Dynamics 365 Business Central solutions for client-specific business needs.',
        es: 'Diseño, desarrollo e implementación de soluciones a la medida en Microsoft Dynamics 365 Business Central según las necesidades de cada cliente.',
      },
      {
        en: 'Extended the ERP in AL with reports, pages and integrations with external systems, plus automated tests to reduce regressions.',
        es: 'Extensión del ERP en AL con reportes, páginas e integraciones con sistemas externos, además de pruebas automatizadas para reducir regresiones.',
      },
      {
        en: 'Worked closely with functional consultants to deliver scalable solutions that support business processes and digital transformation.',
        es: 'Trabajo cercano con consultores funcionales para entregar soluciones escalables que soportan los procesos de negocio y la transformación digital.',
      },
    ],
    tags: ['AL', 'Dynamics 365', 'Reports', 'Integrations', 'Automated testing'],
  },
  {
    role: { en: 'Fullstack Developer', es: 'Desarrollador Fullstack' },
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
    title: { en: 'Front-end', es: 'Front-end' },
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Astro', 'HTMX', 'Zustand · TanStack Query'],
  },
  {
    title: { en: 'Back-end', es: 'Back-end' },
    items: ['Node.js', 'Fastify', 'NestJS', 'FastAPI', 'Django', 'Spring Boot', 'JEE / JPA', 'ASP.NET'],
  },
  {
    title: { en: 'Languages', es: 'Lenguajes' },
    items: ['TypeScript', 'Python', 'Java', 'C#', 'SQL', 'AL'],
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
