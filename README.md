# SAIL Website

Public marketing website for **SAIL**, a SaaS company focused on AI-powered operations.

This project is **separate from the SAIL customer application**. The marketing site will eventually live at `sail.<domain>` / `www.sail.<domain>`, while the product app will live at `app.sail.<domain>`.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) with Base UI primitives
- [Geist](https://vercel.com/font) typography via `next/font/google`
- ESLint

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
├── app/              # Next.js App Router (layout, pages, globals.css)
├── components/
│   ├── ui/           # shadcn/ui primitives (button, sheet)
│   ├── layout/       # Shared layout components (Container)
│   └── shared/       # Reusable shared components (Wordmark)
├── sections/         # Page sections (navbar, hero)
├── lib/              # Utilities (cn helper)
└── config/           # Site configuration (nav, metadata values)
docs/
└── design-profile.md # Visual design source of truth
```

## Design tokens

Design tokens live in [`src/app/globals.css`](src/app/globals.css):

- **Brand palette**: `--sail-ink`, `--sail-signal`, `--sail-slate`, `--sail-line`, `--sail-cloud`, `--sail-soft`, `--sail-warm`
- **Surface system**: `--surface-warm`, `--surface-white`, `--surface-cloud`, `--surface-soft`
- **Semantic tokens**: shadcn/ui variables (`--primary`, `--foreground`, `--muted`, etc.) mapped from brand tokens

See [`docs/design-profile.md`](docs/design-profile.md) for the full visual foundation.

## Current scope

This foundation includes:

- Project scaffolding and architecture
- SAIL design token system
- Responsive navbar with mobile sheet navigation
- Hero section with product workflow preview placeholder
- Minimal surface variation demo section
- SEO metadata baseline

Not yet included: additional marketing pages, CMS, authentication, analytics, or backend integrations.

## Navigation placeholders

Nav links, login, and CTA URLs are temporary (`#` or hash anchors) until real routes and the app domain are configured. See [`src/config/site.ts`](src/config/site.ts).
