# raphos.com

[https://raphos-com.github.io/raphos-website/](https://raphos-com.github.io/raphos-website/)

The Raphos website — a fast, static marketing site built with [Astro](https://astro.build).
Raphos is a London consultancy at the intersection of **engineering, machine
learning and data science**.

This replaces the previous WordPress build.

## Stack

- **Astro** (static output, zero client JS for core content)
- Hand-rolled CSS design system (`src/styles/global.css`) — no UI framework
- `@astrojs/sitemap` for `sitemap-index.xml`
- Deployed to **GitHub Pages** on the custom domain `raphos.com`

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static build into ./dist
npm run preview  # preview the production build
```

Requires Node 22+ (see `.nvmrc`).

## Project structure

```
public/            static assets (CNAME, favicon, og image, robots.txt)
src/
  layouts/         BaseLayout.astro — <head>, SEO/OG, header + footer
  components/      Header, Footer, CapabilityCard, ProjectCard
  pages/           index, capabilities, work, contact
  styles/          global.css — design tokens + base styles
.github/workflows/ deploy.yml — build & deploy to GitHub Pages
```

Content lives directly in the page front-matter as typed arrays — edit the
`capabilities`, `products`, `tools` and `research` arrays in
`src/pages/*.astro` to update copy.

## Deployment (GitHub Pages)

Deploys automatically via `.github/workflows/deploy.yml` on push to the working
branch / `main`.

**One-time setup (required):**

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Point DNS for `raphos.com` at GitHub Pages
   (`A`/`AAAA` records to GitHub's IPs, or a `CNAME` for `www`). The
   `public/CNAME` file keeps the custom domain bound across deploys.

## Notes

- The site is image-light by design (type-driven with geometric CSS/SVG accents).
  Drop a logo / project imagery in `public/` and reference it when ready.
- The previous site's WordPress export is **not** included — it contained
  personal data (contact-form submissions). `.gitignore` excludes `*.xml`
  exports as a safety net.
