import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Two deploy targets:
 *
 *  - Production (default): jefferson-lim.com, served from the root.
 *  - Staging preview: GitHub Pages at mingkey88.github.io/jefferson-lim-site/,
 *    which needs a base path and is marked noindex so an unfinished,
 *    compliance-pending financial-services site is never crawled.
 *
 * The staging build is driven by env vars set in the Actions workflow, so
 * nothing about the production config has to change to publish a preview.
 */
const SITE = process.env.PUBLIC_SITE_URL ?? 'https://jefferson-lim.com';
const BASE = process.env.PUBLIC_BASE_PATH ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  // About Me became the landing page; keep old inbound links working.
  // Note: on a static host this emits a meta-refresh shim. Netlify gets a real
  // 301 from public/_redirects; GitHub Pages ignores that file.
  redirects: {
    '/about': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
