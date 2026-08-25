#!/usr/bin/env node
/**
 * Launch gate.
 *
 * The "Awaiting compliance" blocks are dev-only, so a production build looks
 * finished even when the copy behind them is still missing. This script is what
 * stops that shipping silently: run it before deploying.
 *
 *   npm run check:launch
 *
 * Exits non-zero and prints what is still outstanding.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (p) => (existsSync(join(root, p)) ? readFileSync(join(root, p), "utf8") : "");

const consts = read("src/consts.ts");
const blockers = [];
const warnings = [];

if (/approvalCode:\s*true/.test(consts)) {
  blockers.push(
    "Prudential advertising reference code + representative disclosure not supplied.\n" +
      "     The old funnel's code (AT27Sep24FF27) covers that creative only.\n" +
      "     Fix: add the real copy to src/components/Footer.astro, then set\n" +
      "     PENDING.approvalCode = false in src/consts.ts"
  );
}

if (/testimonial:\s*true/.test(consts)) {
  blockers.push(
    "Testimonial quote + attribution not supplied or not compliance-reviewed.\n" +
      "     Fix: add the quote to src/pages/index.astro, then set\n" +
      "     PENDING.testimonial = false in src/consts.ts — or delete the section."
  );
}

if (read("src/pages/contact.astro").includes("approved PDPA template")) {
  blockers.push(
    "Contact form still uses placeholder PDPA consent wording.\n" +
      "     Fix: replace it with Prudential's approved template in src/pages/contact.astro"
  );
}

if (read("src/pages/ad-personal.astro").includes("needs its own Prudential approval code")) {
  blockers.push("/ad-personal has no approval code of its own (it is a new creative).");
}

// PhotoSlot deliberately renders in production so Jefferson can review the
// layout on the staging preview, which is a production build. Nothing else
// stops those grey boxes reaching a live site, so the gate lives here.
// Counted from the built output, because one <PhotoSlot> inside a loop
// renders many.
const builtPages = [
  "dist/index.html",
  "dist/services/index.html",
  "dist/contact/index.html",
];
const renderedSlots = builtPages.reduce(
  (n, f) => n + (read(f).match(/Photo to come/g) ?? []).length,
  0
);
const sourceSlots = ["src/pages/index.astro", "src/pages/services.astro", "src/pages/contact.astro"]
  .reduce((n, f) => n + (read(f).match(/<PhotoSlot/g) ?? []).length, 0);

if (sourceSlots > 0) {
  const count = renderedSlots || sourceSlots;
  const how = renderedSlots ? `${count} photo placeholders` : `${count} PhotoSlot usages`;
  blockers.push(
    `${how} still unfilled.\n` +
      "     They render in production, so launching now puts grey \"Photo to come\"\n" +
      "     boxes on a regulated site. Replace each <PhotoSlot> with a real image,\n" +
      "     or delete the ones Jefferson decides against."
  );
}

if (read("src/pages/resources.astro").includes("line-by-line check")) {
  blockers.push(
    "Six Areas + Wealth Pyramid not yet verified against the approved chart artwork."
  );
}

if (read("public/_redirects").includes("TODO before DNS cutover")) {
  warnings.push(
    "Old GoHighLevel funnel URLs are not mapped in public/_redirects.\n" +
      "     Visitors on indexed old URLs will hit a 404 on launch day."
  );
}

if (read("src/pages/contact.astro").includes("data-netlify")) {
  warnings.push(
    "Contact form posts via Netlify Forms. If this deploys anywhere else,\n" +
      "     submissions are silently lost — replace the action with a real handler."
  );
}

if (!/SOCIAL_PENDING\s*=\s*\[\s*\]/.test(consts) && consts.includes("SOCIAL_PENDING")) {
  warnings.push("Facebook profile URL still missing (src/consts.ts SOCIAL_PENDING).");
}

const bullet = (s, i) => `  ${i + 1}. ${s}`;

if (blockers.length) {
  console.error("\n\x1b[31m✖ NOT READY TO LAUNCH\x1b[0m — compliance copy outstanding:\n");
  blockers.forEach((b, i) => console.error(bullet(b, i)));
}
if (warnings.length) {
  console.error(`\n\x1b[33m⚠ Check before going live\x1b[0m:\n`);
  warnings.forEach((w, i) => console.error(bullet(w, i)));
}

if (!blockers.length && !warnings.length) {
  console.log("\n\x1b[32m✔ No launch blockers found.\x1b[0m\n");
  process.exit(0);
}

console.error("");
process.exit(blockers.length ? 1 : 0);
