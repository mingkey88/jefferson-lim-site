# Launch checklist

Run `npm run check:launch` at any time — it prints this list and exits non-zero while blockers remain.

---

## 1. Blockers — Jefferson must supply

Nothing below can be written by anyone else. On a Prudential-regulated site, inventing it is not an option.

| # | What's needed | Where it goes |
|---|---|---|
| 1 | **Advertising reference code + representative disclosure** for this site, and a "does not constitute personalised financial advice" line | `src/components/Footer.astro`, then set `PENDING.approvalCode = false` in `src/consts.ts` |
| 2 | **Testimonial quote + attribution** (name and role), compliance-reviewed | `src/pages/index.astro`, then `PENDING.testimonial = false` — or delete the section |
| 3 | **PDPA consent wording** — Prudential's approved template | `src/pages/contact.astro`, replacing the current placeholder |
| 4 | **Approval code for `/ad-personal`** — this is a new creative, so the old funnel's `AT27Sep24FF27` does not cover it | `src/pages/ad-personal.astro` |
| 5 | **Line-by-line check of the two Resources frameworks** against the approved chart artwork | `src/pages/resources.astro` |

### Two specific things to ask him about

**The office address conflicts.** The live ad funnel says *51 Scotts Road #02-09, Singapore 228241, DID (65) 9383 0563*. The design brief says *1 Pasir Panjang Road #05-01V Labrador Tower, Singapore 118497, Mobile 9298 8326*. The brief's details are used throughout. Confirm which is current — a wrong address on a regulated site is a real problem.

**Two Resources entries look wrong.** The "Wealth Creation" tier lists Lasting Power of Attorney, Trust and Advance Medical Directive — those are succession and incapacity instruments, not wealth creation. And several Six Areas entries read as US tax concepts that don't apply in Singapore: *filing status*, *cost basis analysis*, *effects of liquidations*. Both may be transcription errors in the source chart.

---

## 2. Before deploy — technical

| Item | Detail |
|---|---|
| **Contact form handler** | The form posts via Netlify Forms (`data-netlify`). On any other host, submissions are **silently lost**. Replace the action if not deploying to Netlify. |
| **Old funnel URLs** | The domain currently serves a GoHighLevel funnel with indexed URLs. Export them and map each to its nearest new page in `public/_redirects`. Without this, existing search traffic 404s on launch day. |
| **Facebook URL** | Named in the brief but no URL supplied, so the link is held out of the footer and out of the schema `sameAs`. Add it to `SOCIAL` in `src/consts.ts` once known. |
| **Success page** | Netlify's default confirmation would greet someone who has just written about a diagnosis. Worth a `/thank-you` page. |
| **Apex/www redirect** | Configure one-way to `https://jefferson-lim.com` before DNS cutover. |
| **Favicon fallbacks** | Only `favicon.svg` exists. Add `favicon.ico` (32×32) and `apple-touch-icon.png` (180×180). |
| **Schema `geo`** | Deliberately omitted — verify Labrador Tower coordinates before adding, or leave out. |

---

## 3. Already done

- Four pages built to the client brief, plus `/ad-personal` and a styled 404. `/about` 301s to `/`.
- Navy / gold / white theme, pill nav, circular monogram — as specified.
- Six Areas and Wealth Pyramid rebuilt as responsive, selectable, screen-readable HTML rather than flat images.
- `robots.txt`, `sitemap.xml`, `_redirects`, Person + FinancialService JSON-LD, OG/Twitter card image.
- `/ad-personal` and `/404` are `noindex, follow`; canonicals normalised to match internal links.
- Ad-page outcome claims removed ("attain early retirement", "bring your retirement forward by years") and the unevidenced "set up a government hospital and many healthcare institutions" line corrected to what PRODUCT.md supports.
- Portrait cut from its studio backdrop; gallery images graded as one set; 1.35 MB of JPEG → 268 KB of WebP, one unused 365 KB file deleted.
- Accessibility: skip link now moves focus, mobile menu closes on Escape and outside click, tap targets at 44px, the privacy-notice link moved out of the required-consent label, focus rings consistent.
- Contrast verified in-browser: 0 failures across 445 text elements.
- Internal build rationale and developer TODOs stripped from production HTML.
