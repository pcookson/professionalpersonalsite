# CLAUDE.md

## Project Overview

Personal portfolio site for Patrick Cookson, deployed at **patrickcookson.com** on Vercel. The site exists to showcase professional projects as they are built and deployed over time. It presents career experience, a growing portfolio of projects, and contact information.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.7 (strict mode) |
| UI | React 18 |
| Styling | Tailwind CSS 3 + PostCSS |
| Linting | ESLint 9 + eslint-config-next |
| Deployment | Vercel |

## Key Conventions

- **App Router** — all pages live under `app/`. No `pages/` directory.
- **Hardcoded content** — projects, experience, and contact data are written directly in the page files. There is no CMS, database, or separate data layer.
- **Stateless components** — all components in `components/` are purely presentational. No client state, no `useState`, no `useEffect`.
- **TypeScript strict mode** — all props must be typed. Use interfaces for component props.
- **Tailwind only** — do not add CSS modules or external UI libraries. Keep styling in Tailwind utility classes.
- **Path alias** — `@/*` resolves to the project root (configured in `tsconfig.json`).

## Adding a New Project

Edit `app/projects/page.tsx`. Add a new object to the projects array with:
```ts
{ name: string, description: string, stack: string }
```
This renders a new `ProjectCard` automatically.

## Adding a New Experience Entry

Edit `app/experience/page.tsx`. Add a new `<RoleSection>` with props:
```ts
role, company, period, summary, highlights: string[]
```

## Development

```bash
npm run dev     # start local dev server
npm run build   # production build
npm run lint    # run ESLint
```

## Architecture Reference

See [docs/architecture.md](docs/architecture.md) for full directory structure, routing table, and deployment details.
