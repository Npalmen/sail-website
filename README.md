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

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage overview |
| `/product` | Product deep-dive |
| `/solutions` | Solutions & scenarios |
| `/pricing` | Commercial model |
| `/security` | Security & control |
| `/about` | About SAIL |
| `/contact` | Contact / demo request |
| `/privacy` | Privacy (placeholder) |
| `/terms` | Terms (placeholder) |

## Project structure

```text
src/
├── app/                  # App Router pages
├── components/
│   ├── brand/            # SailBrandCanvas, relief lighting
│   ├── layout/           # ContentSurface, SiteShell
│   └── shared/           # CtaLink, DeepLink, NavLink, optical shell
├── sections/             # Homepage sections + contact form
├── config/               # site.ts, homepage.ts, footer.ts
└── lib/                  # optical-cta-manager, utils
docs/
└── design-profile.md     # Visual design source of truth
```

## Configuration

- [`src/config/site.ts`](src/config/site.ts) — routes, nav, metadata, CTA URLs
- [`src/config/homepage.ts`](src/config/homepage.ts) — homepage section content
- [`src/config/footer.ts`](src/config/footer.ts) — footer link columns

## Design

See [`docs/design-profile.md`](docs/design-profile.md) for material principles, fixed brand canvas architecture, CTA proximity lighting, and module hierarchy.

## Placeholders

- **Login** — `#` until app URL is configured
- **Contact submission** — form UI only; no backend
- **Privacy / Terms** — draft placeholders pending lawyer-reviewed copy
- **Pricing** — no fabricated prices or plan names
