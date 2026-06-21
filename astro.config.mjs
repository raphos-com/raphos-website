// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site for raphos.com, deployed to GitHub Pages on the custom domain.
// Custom domain => served from the root, so no `base` prefix is needed.
export default defineConfig({
  site: 'https://raphos.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
