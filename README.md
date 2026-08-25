# Jefferson Lim — practice website

A site for **Jefferson Lim**, a financial consultant with Lee Jue Rong & Associates, an agency unit of Prudential Assurance Company Singapore. Astro + Tailwind, static output, no runtime JavaScript framework.

> **This is not launched yet.** It is a regulated financial-services site with outstanding compliance copy. Run `npm run check:launch` — it lists what is still blocking and exits non-zero while anything remains. See [LAUNCH.md](LAUNCH.md).

## Run it

```
npm install
npm run dev            # http://localhost:4321
npm run build          # static output in ./dist
npm run check:launch   # what still blocks going live
```

Node 22 (see `.github/workflows/deploy-pages.yml`).

## Pages

Four visible pages. **About Me is the landing page** — there is no separate home route, per the client's brief.

| Route | Nav label |
|---|---|
| `/` | About Me |
| `/services` | My Services — the five planning pillars |
| `/resources` | My Resources — Six Areas of Financial Planning, and the Wealth Pyramid |
| `/contact` | Contact Me |
| `/ad-personal` | *(unlinked, noindex)* — landing page for paid traffic |

`/about` redirects to `/`.

## Structure

- `src/pages/` — the routes above, plus `404.astro`
- `src/layouts/Base.astro` — head, metadata, schema, nav, footer, scroll-reveal
- `src/components/` — `Nav`, `Footer`, `Guilloche`, `Monogram`, `Icon`, `Pending`, `Schema`
- `src/consts.ts` — site name, navigation, contact details, pending-copy flags
- `src/styles/global.css` — the whole design system: tokens and components
- `src/lib/url.ts` — base-path helper (see *Deploy*)
- `scripts/check-launch.mjs` — the launch gate

Design decisions are recorded in [DESIGN.md](DESIGN.md); product truth and constraints in [PRODUCT.md](PRODUCT.md).

## Design

Deep navy ground, gold headings, white body text — pinned by the client's brief. Rendered as **engraved security printing**: gold hairline rules, lozenge dividers, Bodoni Moda didone display against Archivo text, and guilloché rosettes computed as real hypotrochoid geometry at build time.

Contrast is verified in-browser against actual painted backgrounds: 0 failures across 445 text elements.

## Compliance placeholders

Copy still awaiting Prudential sign-off renders through `<Pending>`, which is **development-only** — it never reaches a production build. That means a production build can look finished while the real copy is still missing, so `npm run check:launch` exists to catch exactly that. Do not remove it.

## Contact form

Wired for **Netlify Forms** (`data-netlify`). On any other host the attribute is inert and submissions are **silently discarded** — point the form at a real handler before deploying elsewhere.

On the GitHub Pages staging preview the form is deliberately replaced with direct contact details, because Pages cannot process submissions at all.

## Deploy

**Production** — `npm run build`, publish `dist`. Serves from the root of `jefferson-lim.com`. Netlify picks up `public/_redirects` for the `/about` 301.

**Staging preview** — pushed to `main` triggers `.github/workflows/deploy-pages.yml`, which builds with:

| Variable | Value | Why |
|---|---|---|
| `PUBLIC_SITE_URL` | `https://mingkey88.github.io` | Correct absolute URLs |
| `PUBLIC_BASE_PATH` | `/jefferson-lim-site/` | Project pages serve from a subpath |
| `PUBLIC_STAGING` | `true` | Site-wide noindex, and the form notice |

Internal links go through `u()` in `src/lib/url.ts` so they pick up the base path. **Any hand-written internal `href` or `src` must use it** or it will 404 on the preview.
