# SAIL Website — Design Profile

Living source of truth for the SAIL public marketing website visual foundation.

## Concept: Controlled Momentum

SAIL moves work forward, but under control. This concept influences composition, spacing, and motion — not literal nautical imagery.

The visitor should perceive SAIL as:

1. A serious software company
2. A mature, controlled product
3. Trustworthy for business processes
4. Only then: powered by advanced AI

## Brand feeling

- Serious, stable, controlled, capable
- Modern, premium, trustworthy, precise
- Established SaaS company first; AI company second

## Inspiration

**Raft.ai** informs visual rhythm, premium SaaS presentation, varied light surfaces, strong typography, whitespace, and product-led layouts.

SAIL must **not** clone Raft. This is an original implementation with its own identity.

## Light-first surface system

The site is primarily light. Avoid monotonous pure white. Use subtle surface variation for section transitions:

| Token | Value | Role |
|-------|-------|------|
| `--sail-warm` / `--surface-warm` | `#FCFCFA` | Default page background, navbar |
| `--surface-white` | `#FFFFFF` | Hero and card surfaces |
| `--sail-cloud` / `--surface-cloud` | `#F6F8FA` | Alternate section background |
| `--sail-soft` / `--surface-soft` | `#F7F7F3` | Nested card / accent surface |

Transitions between surfaces should feel intentional, not striped or arbitrary.

## Color palette

| Token | Value | Role |
|-------|-------|------|
| `--sail-ink` | `#0B1220` | Primary text, headings |
| `--sail-signal` | `#2864DC` | Primary CTA, interactive states, focus rings |
| `--sail-slate` | `#647184` | Secondary / muted text |
| `--sail-line` | `#E3E7ED` | Borders, dividers |

### Color behavior

- Neutral light surfaces dominate
- Near-black / dark navy typography
- Blue (`--sail-signal`) is a **signal**, not decoration — CTAs, interactive states, selected states
- Do not make every card or heading blue

Future semantic states (not yet implemented):

- Green → completed / safe
- Amber → attention
- Red → blocked / error
- Blue → system / action
- Grey → neutral

## Typography

- **Typeface**: Geist (sans), Geist Mono (mono) via `next/font/google`
- Headlines: large, concise, strong — not overly bold or gimmicky
- Body: restrained width, high readability, slightly muted vs headings
- Build a coherent type scale; avoid arbitrary font sizes

## Spacing and layout

- Max content width: ~1280px (`max-w-7xl` via `Container`)
- Responsive horizontal padding: `px-5 sm:px-6 lg:px-8`
- Generous vertical section spacing
- Whitespace is part of the design

## Shape language

- Base radius: `--radius: 0.625rem` (10px)
- Moderate corner radii for cards and surfaces (~10–14px)
- Prefer subtle borders and surface differences over heavy shadows
- Avoid excessive pill shapes and large 24–32px rounding

## Product-led design

Intelligence is demonstrated through product workflow presentation, not decorative AI visuals.

The hero product preview establishes:

- Card/surface hierarchy
- Status treatment (complete, active, pending)
- Controlled workflow progression

Real product UI will replace placeholders over time.

## Motion

- Subtle only; respect `prefers-reduced-motion`
- No heavy animation framework
- Future motion should communicate flow, progress, state, and direction — not entertainment

## AI aesthetic — avoid

- Purple neon gradients
- Glowing AI orbs, robot imagery, brains
- Excessive sparkles, futuristic HUD graphics
- Crypto aesthetics, particle backgrounds, decorative glassmorphism

## Nautical aesthetic — avoid

- Sailboats, ocean backgrounds, anchors
- Waves as decorative clichés
- Nautical iconography

The name SAIL carries the association subtly through the concept of controlled momentum.

## Component approach

- shadcn/ui (Base UI) provides accessible primitives
- SAIL owns tokens, spacing, typography, radius, button treatment, and surfaces
- Navigation CTAs use `Link` with `buttonVariants()` — not `Button` as anchor
- Install shadcn components only when needed

## Token location

All tokens are defined in [`src/app/globals.css`](../src/app/globals.css). Components reference semantic Tailwind classes (`text-foreground`, `bg-primary`, `bg-surface-cloud`, etc.) — never raw hex values.

## Site configuration

Centralized in [`src/config/site.ts`](../src/config/site.ts): name, description, navigation, CTA/login URLs.
