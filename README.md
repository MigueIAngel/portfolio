# Portfolio · Miguel Ángel Altamar

[![Deploy](https://github.com/MigueIAngel/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/MigueIAngel/portfolio/actions/workflows/deploy.yml)
![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

My personal portfolio, in English and Spanish, deployed to GitHub Pages.

**Live:** https://migueiangel.github.io/portfolio/ · [Español](https://migueiangel.github.io/portfolio/es/)

## Highlights

- **Astro 7**: static output, zero JavaScript by default. Only two tiny scripts ship to the browser, for the scroll reveal and the project filter
- **i18n** with Astro's built-in routing (`/` and `/es/`), `hreflang` alternates and localized dates
- **Typed content** in `src/data`: profile, experience, skills and projects, with every text available in both languages
- **Optimized images**: project screenshots go through `astro:assets` and are served as responsive WebP
- Accessible: semantic sections, `aria-pressed` filters, and support for `prefers-reduced-motion`
- **Downloadable CV** in English and Spanish, built from LaTeX sources in [`cv/`](cv) (`cv/build.sh`) and served from `public/cv/`; each language version of the site links its own PDF
- CI builds every PR, and pushes to `main` deploy to GitHub Pages

## Projects featured

| Project | Stack |
|---|---|
| [finance-tracker](https://github.com/MigueIAngel/finance-tracker) | Fastify, Drizzle, PostgreSQL, Next.js |
| [orderflow](https://github.com/MigueIAngel/orderflow) | NestJS, FastAPI, Fastify, Redis Streams, React (microservices) |
| [docuchat-ai](https://github.com/MigueIAngel/docuchat-ai) | FastAPI, ChromaDB, Gemini, React |
| [linkvault](https://github.com/MigueIAngel/linkvault) | Next.js 16, Prisma, Auth.js, next-intl |
| [kanban-board](https://github.com/MigueIAngel/kanban-board) | React, dnd-kit, Django REST Framework |
| [nest-inventory-api](https://github.com/MigueIAngel/nest-inventory-api) + [angular-admin](https://github.com/MigueIAngel/angular-admin) | NestJS, TypeORM, Angular 22 |
| [taskflow-api](https://github.com/MigueIAngel/taskflow-api) | FastAPI, SQLAlchemy, Alembic |
| [django-blog](https://github.com/MigueIAngel/django-blog) | Django 6, DRF, HTMX |
| [shopfront](https://github.com/MigueIAngel/shopfront) | React, Zustand, TanStack Query |

## Development

```bash
npm install
npm run dev       # http://localhost:4321/portfolio/
npm run build     # static site in dist/
```

Content lives in `src/data/*.ts` and UI strings in `src/i18n/ui.ts`.

## License

MIT for the code. The personal content (texts, CV data) belongs to its author.
