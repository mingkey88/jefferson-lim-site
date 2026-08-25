/**
 * Prefix an internal path with the deploy's base path.
 *
 * Production (jefferson-lim.com) serves from the root, so this is a no-op.
 * The GitHub Pages staging preview serves from /jefferson-lim-site/, where
 * every internal link and asset must carry that prefix or 404.
 *
 * Astro rewrites its own bundled CSS/JS URLs automatically; hand-written
 * hrefs and src attributes are ours to handle, which is what this is for.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const u = (path: string): string =>
  path.startsWith("/") ? `${BASE}${path}` || "/" : path;
