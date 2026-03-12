# Architecture

## Overview

This is a statically rendered personal portfolio site built with Next.js (App Router). It has no backend, no database, and no API routes. All content is hardcoded directly in component and page files.

## Directory Structure

```
professionalpersonalsite/
├── app/                    # Next.js App Router root
│   ├── layout.tsx          # Root layout: header nav + footer
│   ├── page.tsx            # Home page (Hero + FocusAreas)
│   ├── globals.css         # Tailwind directives + base body styles
│   ├── projects/
│   │   └── page.tsx        # Projects showcase page
│   ├── experience/
│   │   └── page.tsx        # Career history page
│   └── contact/
│       └── page.tsx        # Contact information page
├── components/             # Shared React components
│   ├── Hero.tsx            # Landing headline and tagline
│   ├── FocusAreas.tsx      # Skills/focus areas grid
│   ├── ProjectCard.tsx     # Individual project display card
│   ├── RoleSection.tsx     # Career role display block
│   └── ContactLinks.tsx    # Contact links (email, LinkedIn, GitHub)
├── docs/                   # Project documentation
│   └── architecture.md     # This file
├── next.config.mjs         # Minimal Next.js config (defaults only)
├── tailwind.config.ts      # Tailwind content paths
├── tsconfig.json           # TypeScript config (strict mode, bundler resolution)
├── postcss.config.js       # PostCSS config for Tailwind
└── package.json            # Dependencies and scripts
```

## Routing

Uses the Next.js App Router (`app/` directory). Four routes exist:

| Route         | File                        | Description               |
|---------------|-----------------------------|---------------------------|
| `/`           | `app/page.tsx`              | Home / landing            |
| `/projects`   | `app/projects/page.tsx`     | Project portfolio showcase |
| `/experience` | `app/experience/page.tsx`   | Career history            |
| `/contact`    | `app/contact/page.tsx`      | Contact information        |

Navigation is rendered in `app/layout.tsx` which wraps all pages.

## Data Model

There is no external data source. All content lives in the source files:

- **Projects** — hardcoded in `app/projects/page.tsx` as an array of objects passed to `ProjectCard` components. Each project has a `name`, `description`, and `stack` string.
- **Experience** — hardcoded in `app/experience/page.tsx` as props to `RoleSection` components. Each role includes `role`, `company`, `period`, `summary`, and a `highlights` string array.
- **Contact links** — hardcoded in `components/ContactLinks.tsx`.

When adding new projects or experience entries, edit the respective page file directly.

## Component Architecture

Components are stateless and purely presentational. They accept typed props and return JSX.

```
layout.tsx
  └── Header (nav links)
  └── {page content}
      ├── Hero
      ├── FocusAreas
      ├── ProjectCard (repeated)
      ├── RoleSection (repeated)
      └── ContactLinks
  └── Footer
```

No state management library is used. No client-side interactivity beyond link navigation.

## Styling

- **Tailwind CSS 3** with PostCSS — utility-first, no custom component classes
- **Color scheme**: light (`bg-slate-50`, `text-slate-900`)
- **Responsive**: mobile-first with `sm:` and `lg:` breakpoints used in grid layouts
- No CSS modules, no styled-components, no design tokens file

## Deployment

Deployed to **Vercel** at [patrickcookson.com](https://patrickcookson.com). No `vercel.json` is present; the deployment uses Next.js framework defaults automatically detected by Vercel.

Build commands (run by Vercel on deploy):
- `next build` — production build
- `next start` — production server (managed by Vercel)

## Key Constraints

- No API routes
- No database or CMS
- No authentication
- No client-side state
- All content changes require a code edit and redeploy
