# DESIGN.md — Jefferson Lim

Recorded from the built site, not from intention. If code and this file disagree, the code is right and this file is stale.

## The world

**Engraved security printing.** The bond certificate, not the insurance brochure. Jefferson raised roughly USD 500 million in bonds through the Singapore market, so gold-on-navy engine-turning is his own material, not a decorative borrowing.

The client's brief pinned three things and they are not open to redesign: **dark blue ground, golden headings, white wordings**; **pill-shaped gold navigation** with a circular monogram; and the four nav labels in order — About Me, My Services, My Resources, Contact Me.

## Colour

Defined in `src/styles/global.css` under `@theme`.

| Token | Value | Use |
|---|---|---|
| `--color-ink-950` | `#061223` | Deepest ground — footer, CTA bands, form fields |
| `--color-ink-900` | `#0a1e33` | Page ground |
| `--color-ink-850` | `#0d2740` | Raised section band, plates |
| `--color-ink-800` | `#11304e` | — |
| `--color-ink-700` | `#1a4066` | Field borders |
| `--color-ink-600` | `#27547f` | Field border hover |
| `--color-gold` | `#c9a55c` | **Every heading**, every rule, every icon |
| `--color-gold-bright` | `#e8d19a` | Hover, focus ring |
| `--color-gold-deep` | `#8a6d33` | — |
| `--color-gold-ink` | `#3a2c0f` | Text on gold fills |
| `--color-paper` | `#f5f2ec` | Body wordings |
| `--color-paper-dim` | `#bfc9d6` | Secondary text (`.dim`) — tinted from the navy, never grey |
| `--color-paper-mut` | `#8c9bad` | Meta and captions (`.mut`) |

Contrast is verified in-browser against actual painted ancestors: **0 failures across 445 text elements** site-wide.

## Type

Chosen for legibility on a dark ground. An earlier didone (Bodoni Moda) was replaced because its hairline strokes disappeared at heading sizes on navy — light text on dark also optically blooms, which eats thin strokes further.

- **Display — Source Serif 4** (`--font-display`). Every `h1`–`h4`, in gold. Sturdy transitional serif with enough stroke weight to hold against the navy. Weight *rises* as size falls (`h1` 600 → `h3` 650), because small gold headings need more body than large ones.
- **Text — Source Sans 3** (`--font-sans`). Body at `1.075rem` / `1.72`, tracking `+0.006em`. Slightly larger, looser and more open than a light-background equivalent would be. Measure held to `68ch` via `.prose-measure`.

The two are a designed-together superfamily, so they share proportions and metrics.

- `.flourish` — display italic inside a gold heading, for a single emphasised word.
- `.denom` — display numerals as certificate denominations, proportional lining figures.
- `.meta` — small tracked uppercase, for legends, captions and panel labels. **Never above a heading.**

There are no eyebrows or kickers anywhere. Headings carry their own weight.

## Structure

Carried by **gold hairlines, not boxes**.

- `.rule-orn` — a hairline broken by a rotated 7px outlined lozenge. The only section divider.
- `.hairline` — a rule that fades at both ends.
- `.plate` / `.plate-deep` — a raised panel bounded by a gold hairline. Used sparingly; **never nested**.
- `.shell` (76rem) and `.shell-tight` (58rem) are the only containers.

Same-size icon-heading-text cards are not the page structure anywhere. The Six Areas grid is a ruled table (`gap-px` over a gold ground); the Wealth Pyramid and the five pillars are hairline-separated schedules.

## The monogram

Jefferson's own JL mark, supplied as artwork. It carries a gold gradient, so it ships as a transparent raster (`public/jl-monogram.webp`, 384px) rather than being redrawn as flat SVG, which would lose the gradient.

It appears in the navigation, the footer, the closing seal on each page, the ad landing page, the share card, and as the favicon. `src/components/Monogram.astro` wraps it; give the `title` prop only when the mark is the sole content of a link.

Favicons are generated from the same artwork: `favicon.ico` (16/32/48) and `apple-touch-icon.png` (180). The gold reads on both light and dark browser chrome.

## Guilloché

`src/components/Guilloche.astro` computes real hypotrochoid geometry at build time — a rolling circle of 7 against fixed radii coprime to it, giving each ring a different petal count and the moiré depth real engine-turning has. No runtime JS, crisp at any size.

Sampled at 520 points and 1-decimal precision: enough for smooth arcs, and it keeps the landing page at ~42 KB gzipped instead of ~64.

## Motion

One authored moment: content **rises and un-blurs as its engraving prints** (`.reveal` / `.enter`, `cubic-bezier(.16,.84,.28,1)`). Reserved for content that genuinely staggers — lists, images, plates. The closing CTA on every page is present on arrival rather than repeating an identical entrance four times.

The guilloché turns once every 240 seconds, like a watermark catching light.

Everything is inside `@media (prefers-reduced-motion: no-preference)`, including `scroll-behavior`. A `<noscript>` block force-shows all revealed content.

## Icons

`src/components/Icon.astro` — authored SVG on one 24 grid at stroke 1.4, round caps, no fills. Brand marks are the only filled paths. No unicode or emoji stands in for an icon anywhere.

## Rules that hold

1. Gold is for headings, rules and icons. It is never body copy.
2. Structure comes from hairlines. Reach for a box only when a panel is genuinely a separate object, and never put one inside another.
3. No eyebrow above a heading, ever.
4. Numerals only where the sequence carries information the reader needs — the pillars are an order of operations, the pyramid is built bottom-up.
5. Decorative SVG is `aria-hidden` and lives inside `overflow-hidden`.
6. Compliance placeholders render through `<Pending>`, which is **dev-only**. `npm run check:launch` is what stops a build shipping with the real copy still missing.
