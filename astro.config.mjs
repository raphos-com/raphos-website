// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site deployed to GitHub Pages as a project site, served under the
// repository subpath. `site` + `base` make Astro emit correct asset URLs,
// canonical/OG tags and the sitemap for https://raphos-com.github.io/raphos-website/.
export default defineConfig({
  site: 'https://raphos-com.github.io',
  base: '/raphos-website',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
