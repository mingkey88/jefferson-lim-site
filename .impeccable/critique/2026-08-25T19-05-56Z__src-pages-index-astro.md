---
target: Jefferson Lim site (all routes)
total_score: 22
max_score: 40
na_heuristics: 
p0_count: 2
p1_count: 2
timestamp: 2026-08-25T19-05-56Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review, playwright · B: detector + chrome-devtools evidence)

Caveat on run conditions: a third session (`perfaudit`, port 4331) was optimising this repo during the critique. `Base.astro`, `Monogram.astro`, `resources.astro`, `global.css`, `Guilloche.astro` and several `public/*.webp` changed on disk mid-run, and that session briefly hijacked the shared browser. Every measurement below carries a validated port/path/viewport stamp. Neither assessor edited project files.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | Submitting the enquiry form produces nothing. Verified: POSTs to `/contact` (no `action`), HTTP 200, blank form re-renders, no confirmation, no pending state, no `aria-live` region anywhere. |
| 2 | Match System / Real World | 3 | Copy is plain and first-person. But "Star Club Elite, first year" is unexplained sales jargon in the hero, and the Six Areas chart ships US tax concepts ("Filing status", "Cost basis analysis") to a Singapore audience. |
| 3 | User Control and Freedom | 2 | A blocked submit wipes nothing yet offers no recovery path; a successful one loses the message. Mobile menu closes on Escape and outside click (good). |
| 4 | Consistency and Standards | 3 | Strong system discipline: one type scale, one rule system, one icon set, one CTA label everywhere. Broken where it matters most — the required consent control is the only labelled control whose visible text is not part of its target. |
| 5 | Error Prevention | 2 | Native `required` + `type=email` only. Email field missing `inputmode="email"`. The required `*` for consent is stranded at the end of a seven-line paragraph, right after a link. |
| 6 | Recognition Rather Than Recall | 2 | "Book one" needs the heading two elements above to parse. `/services` shows the five pillars twice with no anchor. `/resources` asks the reader to hold ~73 unranked line items. |
| 7 | Flexibility and Efficiency | 2 | vCard and QR e-card are genuinely thoughtful. But zero WhatsApp anywhere (grepped `src/` and `public/`), no booking link, no persistent contact control on mobile. |
| 8 | Aesthetic and Minimalist Design | 3 | The strongest axis: committed world, hairlines not boxes, 0 contrast failures across 445+ text nodes, no horizontal overflow at any breakpoint. Undercut by ten empty photo wells and 75 lines of dead `.video-modal` CSS. |
| 9 | Error Recovery | 1 | Native Chrome bubbles only. Measured: 0 inline error elements, 0 live regions. Nothing in the product's voice names the problem or the recovery. |
| 10 | Help and Documentation | 3 | `/resources`, "A simple, unhurried process" and "What a first meeting is like" genuinely explain the engagement. Missing: cost/obligation, and any designed home for a licence or MAS representative number. |
| **Total** | | **22/40** | **Acceptable — significant improvements needed before launch** |

No heuristic scored `n/a`. 7 has real accelerators to judge (vCard, QR, `tel:`/`mailto:`, sticky nav) and 10 has a real documentation surface (`/resources`, the process section), so forcing them to `n/a` would have flattered the score.

## Design Specificity Verdict

**LLM assessment: specific in its type, rules and ornament — increasingly generic in its composition, and the recent direction of travel points at the category default.**

Genuinely authored, and not liftable onto another advisor's site: the `.rule-orn` lozenge-broken hairline as the *only* section divider; `Guilloche.astro` computing real hypotrochoid geometry at build time, tied to Jefferson's own bond-market history rather than borrowed as texture; the career schedule on `/` as a hairline-ruled `<ol>` of place / role / one specific sentence; the Six Areas ruled table using `gap-px` over a gold ground so it reads as an engraved table rather than a card grid.

Gone category-interchangeable: **`/services` is now five stock-photo bands stacked down a column** — five identical 459×344 PhotoSlots alternating left/right, 36–45 words each. That is the exact composition every insurance agency template uses. `src/direction-contract.ts:11` states the thesis "refuses the category default of stock-photo bands stacked down a builder column"; the page now *is* that. `DESIGN.md:57` ("the five pillars are hairline-separated schedules") is factually stale. And the photo briefs are concept directions — *"A family together. Warm, ordinary, nothing staged."*, *"Kitchen table, laptop, bills."* — which is stock-library language on a site whose whole argument is specificity over adjectives.

**Deterministic scan: 0 findings from the static CLI detector** (`detect.mjs --json src` → `[]`, exit 0; same against `dist/`). That result was verified as real, not a silent no-op — the detector correctly returned exit 2 with `side-tab` and `overused-font` on a synthetic bad file, and `.astro` is in the scannable extensions list. The static engine only supports regex/element/page rules and cannot evaluate computed style, so everything real came from the browser engine.

**Browser detector: 27 findings across five routes.** `dark-glow` 13, `all-caps-body` 6, `line-length` 6, `nested-cards` 1, `undersized-ui-text` 1.

False positives, with reasoning:
- **`dark-glow` ×13 — false positive.** The glow is `--color-gold` `#c9a55c` on navy, on CTAs and the focus ring. Navy ground with gold is pinned by the client's written brief. The rule exists to catch neon AI-slop; 3 of the 13 are just the page-level `body` restatement of the same shadow.
- **`all-caps-body` ×6 — false positive.** All six are `.meta`, which DESIGN.md defines as small tracked uppercase for legends, captions and panel labels. One is literally a `<legend>`. The rule counts uppercase characters without distinguishing label from prose.
- **`nested-cards` ×1 — soft false positive that still earned attention.** It is `PhotoSlot.astro`'s own dashed inner border inside its bordered box — placeholder chrome, not two content cards. But chasing it surfaced a real defect (see P1-4): unlike `Pending.astro`, PhotoSlot has **no `import.meta.env.DEV` gate and ships to production**.
- **`line-length` ×6 and `undersized-ui-text` ×1 — not false positives.** No pinned constraint covers them, and both reproduce independently: the `/resources` disclaimer runs 195.8ch, four `/ad-personal` body paragraphs run 102.9ch, and `/ad-personal`'s footer disclaimer renders at 10.88px.

**Visual overlays: injection succeeded, but no overlay is live for you now.** Mutation preflight passed, the overlay server ran on port 8400, and 15 overlay elements were confirmed in the DOM on `/` with findings read from the `impeccable` console channel across all five routes. The server was then stopped as required (verified three ways: `ps`, `lsof`, `pgrep`) and the browser pages were closed by the concurrent perf session. So there is **no persistent user-visible overlay tab** — the console findings above are the record.

Where the two assessments converged independently: both found the consent checkbox undersized (A measured the label at 17×34, B measured the input at 16.8×16.8), and both found the form's missing success state. Where the detector caught what the design review did not: the `/ad-personal` measure and 10.88px footer text, and the PhotoSlot production-gate. Where the design review caught what no detector could: that the photo trade converted the site's most differentiated page into the category's most recognisable template.

## Overall Impression

The visual world is genuinely good and genuinely his. Engraved security printing is the right metaphor for a man who raised half a billion dollars in bonds, the guilloché is real geometry rather than a texture pack, and structure carried by gold hairlines instead of boxes is why this does not look like a Wix template even where the content is thin. Contrast is clean at every breakpoint, heading order is correct on every route, focus indicators are present on 29 of 29 focusable elements, and there is no horizontal overflow anywhere. That is a level of craft most launch-ready sites do not reach.

The problem is that the conversion path — the entire reason the site exists — is the least finished part of it. A person types the hardest sentence they have written all week into the message field, presses "Send my enquiry", and the page silently reloads blank. That is the ending, and under the peak-end rule the ending is the memory.

The single biggest opportunity: **the client's "more pictures" instruction was applied to the wrong pages and pointed at the wrong subject.** Photographs of *Jefferson working* build trust in regulated advice. Photographs of *concepts* — a family, a kitchen table, a skyline — are stock filler that undercuts a world built on specificity. Eight of the ten current briefs ask for concepts.

## What's Working

**The career schedule (`/Users/tanmingjie/Downloads/jefferson-lim-site/src/pages/index.astro`, career section).** Place, role, one specific sentence, hairline-separated, no cards, no icons. *"I raised around USD 500 million in bonds through the Singapore market to fund it."* Specific, verifiable, unboastful — and the form matches the world exactly. This section alone carries the trust argument, in the site's own grammar rather than the category's.

**The guilloché and hairline system (`/Users/tanmingjie/Downloads/jefferson-lim-site/src/components/Guilloche.astro`).** Real hypotrochoid geometry computed at build time — no runtime JS, crisp at any size, and derived from his actual career rather than picked as decoration. Paired with `.rule-orn`, it means structure comes from ruled lines instead of boxes, which is exactly why the site reads as authored.

**The contact page's escape routes (`/Users/tanmingjie/Downloads/jefferson-lim-site/src/pages/contact.astro`).** Phone, email and address appear in the hero above the form, again in the aside card, and again in the footer — all live `tel:`/`mailto:` links — plus a vCard download and a QR e-card. Someone who does not want to type has three working exits. That is rare and well judged.

## Priority Issues

**[P0] 1. The enquiry form has no success state, and in this build no delivery either.**
`src/pages/contact.astro` sets `method="POST"` and `data-netlify="true"` with **no `action`**, and there is no `thank-you` route in `src/pages/`. Submitted as a real user: POSTs to `/contact`, HTTP 200, the contact page re-renders with a blank form, message gone, no acknowledgement of any kind. On Netlify it would land on a stock Netlify success page instead — which, as LAUNCH.md itself notes, would greet someone who has just written about a diagnosis.
*Why it matters:* this is the exact moment the whole site exists to produce, for a person in a vulnerable state who has just disclosed something private. Peak-end says the ending defines the memory, and the ending is currently "nothing happened."
*Fix:* add `action="/thank-you"` and build `src/pages/thank-you.astro` in the site's own voice — name what happens next and when ("I read these myself. You'll hear from me within one working day"), repeat the mobile number as a `tel:` link, offer the vCard. Add a disabled/pending state on the "Send my enquiry" button, and an `aria-live` region for validation.
*Suggested command:* `/impeccable harden`

**[P0] 2. The one mandatory gate in the funnel is a 16.8px tap target.**
Measured at 390px: `#consent` renders **16.8 × 16.8**, and its `label.choice[for="consent"]` is **17 × 34** — because the visible sentence lives in a sibling `<p id="consent-text">` rather than inside the label. The *optional* marketing checkbox beside it has a 269 × 78 target. The optional control is 36× larger than the required one. The required `*` sits at the end of the paragraph immediately after the "Prudential Data Privacy Notice" link, where it reads as part of the link. This is not isolated: 17 elements on `/contact` and 9 on `/` measure under 44×44, including footer nav links at 32px tall and every `.link-underline` at 23px tall — which contradicts LAUNCH.md's "tap targets at 44px" claim.
*Why it matters:* a 52-year-old on a phone in bed will miss it, get a native bubble pointing at a control they cannot see, and leave. The source comment explains the un-nesting decision correctly, but the remedy created a worse problem than the one it solved.
*Fix:* put the sentence back inside the `<label>` and neutralise the link with `stopPropagation()`, or lay the label out as `display: grid; grid-template-columns: auto 1fr` so the whole paragraph is the target. Move the `*` beside the checkbox. Then sweep the 44px floor across footer nav and `.link-underline` site-wide.
*Suggested command:* `/impeccable harden`

*Update during this run:* the concurrent session has since given the consent label `min-width:44px;min-height:44px`, wrapped the footer nav in a `<nav>` with `py-2.5`, and moved the nav pill breakpoint from `lg` to `md`. Re-measure before closing this out; the sweep across `.link-underline` (23px) is still open.

**[P1] 3. There is no way to make contact across 5.8 mobile viewports, and no WhatsApp anywhere.**
At 390×844, `/` carries contact affordances at y≈600 and y≈2,400, then **nothing until y≈7,307** — a 4,900px gap. The sticky header below 1024px is monogram plus MENU only; the four pills are `hidden lg:flex`. Opening MENU gives four identically-weighted pills with "Contact Me" fourth. A grep of `src/` and `public/` for `whatsapp|wa.me` returns zero hits.
*Why it matters:* conversion decisions happen where they happen, not where you put the CTA. For Singapore 35–60, WhatsApp is the default channel; its absence removes the lowest-friction path that exists. The site is optimised for typing, which is the thing the 1am reader is least likely to do.
*Fix:* add a gold `Contact` pill or phone-icon button to the mobile header beside MENU. Add `https://wa.me/6592988326` next to phone and email on `/contact`, in the footer, and in every CTA band. Give "Contact Me" visual priority in the mobile menu.
*Suggested command:* `/impeccable shape`

**[P1] 4. The photo trade landed on the wrong pages, and the placeholders ship to production.**
Ten slots: 4 on `/` (one 16:9 "at work" band, three in the hobby grid), 5 on `/services` (one per pillar, 459×344 each), 1 on `/contact`. Zero on `/resources` and `/ad-personal`. Two structural problems. First, `PhotoSlot.astro` has **no dev gate** — unlike `Pending.astro`, which is `import.meta.env.DEV`-gated — so if launch happens before Jefferson supplies pictures, a regulated financial site goes live with ten grey boxes reading "Photo to come", and that label measures 3.88:1 contrast, below AA. Second, `/services` was converted from the hairline schedule DESIGN.md still describes into five alternating photo bands with 36–45 words each, taking the estate-planning specialism down with it: PRODUCT.md names trusts, cross-border and business succession as his deep specialism, and on `/services` they survive only as a four-item plate inside pillar 03.
*Why it matters:* the client's reasoning ("real photographs draw people in") is correct, but it was applied to the page that was most differentiated rather than the page that is genuinely a wall of text (`/resources`, 73 unranked line items, zero slots), and it was pointed at concepts rather than at Jefferson. Meanwhile there is **no photograph in the first viewport of any page at either breakpoint** — including `/ad-personal`, which buys its traffic.
*Fix:* cut 10 → 4. Keep the 16:9 "at work" slot on `/` and brief it as evidence, not concept. Fill the `/contact` slot **today** with the portrait that already exists at `public/jefferson-portrait.webp`. Add one hero photograph on `/`. Keep exactly one photograph for the whole pillar section and restore the pillars to a hairline schedule. Cut the three hobby placeholders. Then either dev-gate `PhotoSlot` or add it to `check:launch` as a blocker.
*Suggested command:* `/impeccable layout`

**[P2] 5. The hierarchy is inverted: verified credentials are the smallest type, hobbies are the largest section.**
The three trust facts in the hero render at **12px `.mut` (#8c9bad)** — the smallest and dimmest type on the page — and at 390px they wrap into three ragged lines with orphaned `border-r` dividers dangling at line ends. "Built a public hospital's finance function" *is* the unique mechanism named in PRODUCT.md, and it is fine print. Meanwhile "A life, not just a practice" measures **2,196px** on mobile against **1,502px** for the entire career section, and sits immediately before the CTA — so a reader who came here after a parent's diagnosis scrolls 2.6 screens of holiday photographs, including a "Prudential Agency Awards Night, 2025" sales banner, in a section arguing this is a life rather than a sales practice. On `/resources`, 73 unranked items are presented with no ranking, no progressive disclosure and **no CTA attached to any of them**, and the disclaimer runs 195.8ch.
*Why it matters:* the eye goes to the guilloché, then the headline, then the gold button, and never lands on the one fact that separates him from every other advisor.
*Fix:* promote the hospital line into the hero as a real sized statement. Drop "Star Club Elite" or explain it in four words. Replace the `border-r` divider with a wrapping-safe separator. Cut the hobby gallery to three items and consider dropping the awards photo. Give `/resources` a "start here" and a CTA, and constrain the disclaimer measure.
*Suggested command:* `/impeccable typeset`

## Persona Red Flags

**Jordan (first-timer, arrives from the QR code on a name card).** The first viewport of `/` shows a claim, a name buried in body copy, two buttons and three lines of 12px fine print — no face, no firm name, no "financial consultant" as a heading. Jordan can answer "what does this person believe?" in five seconds but not "who is this?". "Star Club Elite, first year" is unexplained jargon in the most credential-bearing position on the page. Clicking "See how I help" lands on five empty grey boxes with camera icons reading "PHOTO TO COME" — and Jordan cannot distinguish an unfinished site from an unfinished practice. There is no licence number, no MAS representative reference, and no regulatory line anywhere in production content, which is the single credential a first-timer to a regulated financial site is trained to look for.

**Casey (distracted, phone, one hand).** `/` is 10.8 viewports at 390px; Casey never reaches the CTA at y=7,307. Between y≈2,400 and y≈7,307 there is no contact affordance at all, and the sticky header offers only a monogram and MENU. No WhatsApp, so the one gesture Casey reliably completes — screenshot the number, message it later — is unsupported. 25 `.reveal` elements on `/` all run the same 0.85s rise plus `blur(6px)→0`; fast-scrolling on a phone, Casey meets headings that are still blurred.

**Bernice, 52, reading at 1am after her father's stroke (derived from PRODUCT.md's stated scene).** The peak lands correctly and early: "I saw what a serious illness does to a family with nothing in place" is the right sentence, one screen down, beside his face. Then she scrolls 2.6 screens of holiday and hobby photographs plus an insurance sales-awards banner before being asked to make contact — the worst tonal whiplash on the site. If she clicks to `/resources` looking for "what do I do first", she gets 73 unranked items enumerating everything her family does not have, with no CTA on any of them. At the form, the one genuinely kind line — *"Even a rough sense of it is enough to start."* — is followed by seven lines of legalese naming an insurance company and a 16.8px mandatory checkbox. She types the hardest sentence she has written all week, presses send, and the page reloads with nothing to show for it.

## Minor Observations

- **75 lines of dead CSS.** `.video-modal` / `.video-trigger` in `src/styles/global.css` has no consumer anywhere in `src/`. PRODUCT.md lists the intro video as *optional*, so this is speculative CSS shipping to every visitor.
- **`DESIGN.md` is stale on the pillars** — "the five pillars are hairline-separated schedules" no longer describes the built page. DESIGN.md's own preamble says the code wins, so either the file or the page needs to change.
- **The portrait breaks the palette.** `public/jefferson-portrait.webp` is a white-seamless studio headshot — the brightest rectangle on the site, and the only place the engraved world gives way to a passport photo. A knocked-out background, a navy re-shoot, or a duotone would let it sit *in* the world instead of on top of it.
- **Motion is a default, not an authored moment.** 25 `.reveal` elements on `/` all run the same transition, including the `h2` of every section and both columns of every two-column grid. DESIGN.md's defence ("reserved for content that genuinely staggers") does not match 25 instances across 11 screens. Motion gating itself is correct, though: exactly 2 rules in the whole stylesheet set `opacity: 0` and both sit inside `@media (prefers-reduced-motion: no-preference)`, with a `<noscript>` force-show as backup. Nothing can be stuck invisible.
- **`scroll-behavior: smooth` is global on `html`** — on a 9,135px page any anchor jump becomes a long animated scroll the user cannot skip.
- **Career list order on mobile** uses `order-2`, so the place ("SINGAPORE") renders below the role and reads as a trailing footnote rather than a column heading.
- **`/ad-personal` is the weakest page and it buys its traffic.** Its only above-fold action is an in-page anchor (`#how-i-help`) rather than a contact action; its lede is a sentence fragment ("Without sacrificing more family time."); four body paragraphs run 102.9ch; the footer disclaimer renders at 10.88px; and it has zero photographs at 390px.
- **Email field is missing `inputmode="email"`**, and `.field-label` renders at 11.84px, below a 12px floor.
- **Fonts load from two external hosts** (`fonts.googleapis.com` + `fonts.gstatic.com`, 3 woff2) — a third-party render-blocking path in an otherwise self-contained static site.
- **Weight is genuinely good.** Production gzip: `/` 42.4 KB, `/services` 17.5 KB, `/resources` 30.2 KB, `/contact` 27.0 KB, CSS 7.9 KB. No console errors and no failed requests on any route.
- **`npm run check:launch` currently fails with 5 blockers and 3 warnings** — all compliance copy Jefferson must supply, plus the unmapped old funnel URLs and the Netlify-only form handler. That gate is doing its job.

## Questions to Consider

- If every photo slot were filled tomorrow with exactly what the labels ask for, would this site be more distinctive or less? My read: less. Ten concept photographs turn an engraved certificate into a photo-band site with gold accents. What would it look like to commission *two* photographs of Jefferson working and win the argument with those?
- Why is the one fact that makes him unrepeatable — he built a public hospital's finance department and watched what medical crises do to families — rendered at 12 pixels in the weakest grey on the site, while "Muay Thai, cycling or trekking" gets a 268px-tall photo well?
- What is a visitor supposed to *do* with `/resources`? Seventy-three line items, no ranking, no CTA. Is it a reference chart for existing clients or a lead surface for strangers? It is currently designed as neither.
- The site promises "Pace, not pressure" and "Products come after that." What is a Prudential sales-awards banner doing in the section titled "A life, not just a practice"?
- What happens in the two seconds after someone presses "Send my enquiry"? Nobody has designed that yet, and it is the only moment on the site that actually matters.
- If a 52-year-old could do exactly one thing on her phone at 1am — call, WhatsApp, or type — which is this site optimised for? It is optimised for typing, which is the one she is least likely to do at that hour.
