import type { ImageMetadata } from 'astro'
import type { Localized } from '../i18n/ui'
import angularAdmin from '../assets/projects/angular-admin.jpg'
import djangoBlog from '../assets/projects/django-blog.jpg'
import docuchat from '../assets/projects/docuchat-ai.jpg'
import kanban from '../assets/projects/kanban-board.jpg'
import linkvault from '../assets/projects/linkvault.jpg'
import orderflow from '../assets/projects/orderflow.jpg'
import shopfront from '../assets/projects/shopfront.jpg'

export type Category = 'python' | 'typescript' | 'ai' | 'fullstack'

export interface Project {
  slug: string
  name: string
  description: Localized
  highlights: Localized[]
  stack: string[]
  categories: Category[]
  repo: string
  demo?: string
  /** Extra links such as API docs or a second repository. */
  links?: { label: Localized; url: string }[]
  image?: ImageMetadata
  /** Shown instead of a screenshot for API-only projects. */
  snippet?: string
  featured?: boolean
}

const gh = (repo: string) => `https://github.com/MigueIAngel/${repo}`

export const projects: Project[] = [
  {
    slug: 'finance-tracker',
    name: 'Finance Tracker',
    description: {
      en: 'Personal finance app built from scratch: a Fastify + TypeScript REST API over PostgreSQL and a Next.js 15 frontend with charts, savings plans and AI categorization.',
      es: 'App de finanzas personales construida desde cero: API REST en Fastify + TypeScript sobre PostgreSQL y un frontend en Next.js 15 con gráficas, planes de ahorro y clasificación con IA.',
    },
    highlights: [
      {
        en: 'API key never reaches the browser: every call goes through server-side proxy routes',
        es: 'La API key nunca llega al navegador: todo pasa por rutas proxy en el servidor',
      },
      {
        en: 'Drizzle ORM, Zod validation and signed JWT sessions',
        es: 'Drizzle ORM, validación con Zod y sesiones con JWT firmado',
      },
      {
        en: 'Uncategorized transactions classified by a language model',
        es: 'Transacciones sin categoría clasificadas con un modelo de lenguaje',
      },
    ],
    stack: ['TypeScript', 'Fastify', 'Drizzle ORM', 'PostgreSQL', 'Zod', 'Next.js', 'Recharts'],
    categories: ['typescript', 'fullstack', 'ai'],
    repo: gh('finance-tracker'),
    demo: 'https://finance-tracker-demo-u2s6.onrender.com',
    snippet: `GET /transactions?month=9&type=expense
x-api-key: •••••• (added by the Next.js proxy)

200 OK
{ "total": 1840.5, "byCategory": {
    "Food": 420, "Rent": 900, "Transport": 120 } }`,
    featured: true,
  },
  {
    slug: 'orderflow',
    name: 'OrderFlow',
    description: {
      en: 'Event-driven order processing across five polyglot microservices (NestJS, FastAPI, Fastify) that coordinate through Redis Streams, with a React client that draws every step of the saga live.',
      es: 'Procesamiento de órdenes orientado a eventos con cinco microservicios políglotas (NestJS, FastAPI, Fastify) coordinados por Redis Streams, y un cliente React que dibuja cada paso del saga en vivo.',
    },
    highlights: [
      {
        en: 'Choreographed saga with compensation, transactional outbox and idempotent consumers',
        es: 'Saga coreografiado con compensación, outbox transaccional y consumidores idempotentes',
      },
      {
        en: 'API gateway with circuit breakers, rate limiting and API composition',
        es: 'API gateway con circuit breakers, rate limiting y composición de APIs',
      },
      {
        en: 'CI boots the whole stack in Docker Compose and runs the saga end to end',
        es: 'El CI levanta todo el stack en Docker Compose y prueba el saga de punta a punta',
      },
    ],
    stack: ['NestJS', 'FastAPI', 'Fastify', 'Redis Streams', 'PostgreSQL', 'React', 'Docker'],
    categories: ['typescript', 'python', 'fullstack'],
    repo: gh('orderflow'),
    demo: 'https://orderflow-demo-sf3g.onrender.com',
    links: [
      {
        label: { en: 'API docs', es: 'Docs de la API' },
        url: 'https://orderflow-api-demo-d22t.onrender.com/docs',
      },
    ],
    image: orderflow,
    featured: true,
  },
  {
    slug: 'docuchat-ai',
    name: 'DocuChat AI',
    description: {
      en: 'Chat with your PDFs. A RAG pipeline that indexes documents in ChromaDB and streams answers from Google Gemini with page-level citations.',
      es: 'Chatea con tus PDF. Un pipeline RAG que indexa documentos en ChromaDB y transmite respuestas de Google Gemini con citas a nivel de página.',
    },
    highlights: [
      {
        en: 'Sentence-aware chunking, asymmetric embeddings, grounded prompts',
        es: 'Chunking por oraciones, embeddings asimétricos y prompts anclados al contexto',
      },
      {
        en: 'Server-Sent Events streaming with clickable citations',
        es: 'Streaming con Server-Sent Events y citas clicables',
      },
      { en: 'Offline demo provider so CI needs no secrets', es: 'Proveedor demo offline: el CI no necesita secretos' },
    ],
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Gemini', 'RAG', 'React', 'TypeScript'],
    categories: ['python', 'ai', 'fullstack'],
    repo: gh('docuchat-ai'),
    demo: 'https://docuchat-ai-demo.onrender.com',
    image: docuchat,
    featured: true,
  },
  {
    slug: 'linkvault',
    name: 'LinkVault',
    description: {
      en: 'Bookmark manager on the Next.js 16 App Router with Server Actions, Prisma 7, Auth.js and next-intl. Metadata is fetched on the server behind an SSRF guard.',
      es: 'Gestor de marcadores con el App Router de Next.js 16, Server Actions, Prisma 7, Auth.js y next-intl. Los metadatos se obtienen en el servidor con protección SSRF.',
    },
    highlights: [
      { en: 'useOptimistic, useActionState and URL-driven filters', es: 'useOptimistic, useActionState y filtros en la URL' },
      { en: 'Credentials + GitHub OAuth', es: 'Credenciales + OAuth de GitHub' },
    ],
    stack: ['Next.js', 'React 19', 'Prisma', 'PostgreSQL', 'Auth.js', 'next-intl'],
    categories: ['typescript', 'fullstack'],
    repo: gh('linkvault'),
    demo: 'https://linkvault-demo.onrender.com',
    image: linkvault,
  },
  {
    slug: 'kanban-board',
    name: 'Flowboard · Kanban',
    description: {
      en: 'Full-stack Kanban board: React + dnd-kit with optimistic drag & drop on top of a Django REST Framework API secured with JWT.',
      es: 'Tablero Kanban full-stack: React + dnd-kit con drag & drop optimista sobre una API de Django REST Framework protegida con JWT.',
    },
    highlights: [
      { en: 'Row locking keeps card positions consistent', es: 'Bloqueo de filas para mantener posiciones consistentes' },
      { en: 'Token refresh shared across parallel requests', es: 'Refresh del token compartido entre peticiones paralelas' },
    ],
    stack: ['React', 'TypeScript', 'dnd-kit', 'TanStack Query', 'Django REST', 'JWT'],
    categories: ['typescript', 'python', 'fullstack'],
    repo: gh('kanban-board'),
    demo: 'https://kanban-board-demo.onrender.com',
    links: [{ label: { en: 'API docs', es: 'Docs de la API' }, url: 'https://kanban-api-demo.onrender.com/api/docs/' }],
    image: kanban,
  },
  {
    slug: 'nest-inventory-api',
    name: 'Inventory API + Admin',
    description: {
      en: 'NestJS inventory API (TypeORM, roles, transactional stock movements, Swagger) and an Angular 22 admin panel built with signals, httpResource and Material.',
      es: 'API de inventario en NestJS (TypeORM, roles, movimientos de stock transaccionales, Swagger) y un panel de administración en Angular 22 con signals, httpResource y Material.',
    },
    highlights: [
      { en: 'SELECT … FOR UPDATE prevents overselling', es: 'SELECT … FOR UPDATE evita vender sin stock' },
      { en: 'Role-aware UI, charts, ES/EN and dark mode', es: 'UI según rol, gráficas, ES/EN y modo oscuro' },
    ],
    stack: ['NestJS', 'TypeORM', 'PostgreSQL', 'Angular', 'Angular Material', 'Chart.js'],
    categories: ['typescript', 'fullstack'],
    repo: gh('nest-inventory-api'),
    demo: 'https://angular-admin-demo.onrender.com',
    links: [
      { label: { en: 'Angular repo', es: 'Repo Angular' }, url: gh('angular-admin') },
      { label: { en: 'API docs', es: 'Docs de la API' }, url: 'https://nest-inventory-api-demo.onrender.com/docs' },
    ],
    image: angularAdmin,
  },
  {
    slug: 'taskflow-api',
    name: 'TaskFlow API',
    description: {
      en: 'Task management REST API with FastAPI, SQLAlchemy 2.0 and Alembic: JWT auth, ownership checks, filters, pagination and per-project statistics.',
      es: 'API REST de gestión de tareas con FastAPI, SQLAlchemy 2.0 y Alembic: autenticación JWT, control de propiedad, filtros, paginación y estadísticas por proyecto.',
    },
    highlights: [
      { en: 'Typed end to end with Pydantic v2', es: 'Tipado de punta a punta con Pydantic v2' },
      { en: 'CI runs migrations against PostgreSQL', es: 'El CI ejecuta migraciones contra PostgreSQL' },
    ],
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'Docker'],
    categories: ['python'],
    repo: gh('taskflow-api'),
    demo: 'https://taskflow-api-demo-au9h.onrender.com/docs',
    snippet: `GET /api/v1/projects/1/stats
Authorization: Bearer eyJhbGciOi…

200 OK
{ "total": 4, "todo": 1, "in_progress": 1,
  "done": 2, "overdue": 1, "completion_rate": 0.5 }`,
  },
  {
    slug: 'django-blog',
    name: 'The Dev Notebook',
    description: {
      en: 'Bilingual Django 6 blog: server-rendered pages with HTMX live search and comments, sanitized Markdown, and a REST API with Swagger.',
      es: 'Blog bilingüe en Django 6: páginas renderizadas en el servidor con búsqueda y comentarios con HTMX, Markdown sanitizado y una API REST con Swagger.',
    },
    highlights: [
      { en: 'i18n_patterns with full Spanish catalog', es: 'i18n_patterns con catálogo completo en español' },
      { en: 'Token auth, throttling and filters in DRF', es: 'Autenticación por token, throttling y filtros en DRF' },
    ],
    stack: ['Python', 'Django', 'DRF', 'HTMX', 'PostgreSQL'],
    categories: ['python', 'fullstack'],
    repo: gh('django-blog'),
    demo: 'https://django-blog-demo.onrender.com',
    links: [{ label: { en: 'API docs', es: 'Docs de la API' }, url: 'https://django-blog-demo.onrender.com/api/docs/' }],
    image: djangoBlog,
  },
  {
    slug: 'shopfront',
    name: 'Shopfront',
    description: {
      en: 'React e-commerce storefront: URL-driven catalog filters, persistent cart and wishlist with Zustand, and a checkout validated with react-hook-form + zod.',
      es: 'Tienda en React: filtros del catálogo en la URL, carrito y favoritos persistentes con Zustand y un checkout validado con react-hook-form + zod.',
    },
    highlights: [
      { en: 'TanStack Query with request cancellation', es: 'TanStack Query con cancelación de peticiones' },
      { en: 'Luhn + expiry validation, i18n error messages', es: 'Validación Luhn y de vencimiento, errores traducidos' },
    ],
    stack: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Zod', 'Tailwind'],
    categories: ['typescript'],
    repo: gh('shopfront'),
    demo: 'https://migueiangel.github.io/shopfront/',
    image: shopfront,
  },
]
