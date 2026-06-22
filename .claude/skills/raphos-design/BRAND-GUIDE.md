# Raphos Design System

A brand & UI design system for **Raphos** — a London consultancy at the
intersection of **engineering, machine learning and data science**. Raphos
builds computational tools, models and software for hard engineering problems:
Synera platform add-ins, Grasshopper/Rhino plugins (Dodo, Capybara), and its
own data-science web products (Babelotheca, CityDataLab, Ariadne's Gallery).

This project is the single source of truth for designing anything that wears
the Raphos brand — marketing pages, decks, product UI, mocks and prototypes.

> Aesthetic in one line: **type-driven, technical, image-light. Dark ink on
> near-white paper, one restrained blue accent, mono labels, and a recurring
> engineering-graph (nodes + edges) motif.**

## Sources

Everything here was derived from material the Raphos team provided. The reader
won't necessarily have access, but for the record:

- **Website repo** — [`raphos-com/raphos-website`](https://github.com/raphos-com/raphos-website)
  (Astro, hand-rolled CSS design system in `src/styles/global.css`). The token
  values, base styles, page layouts, copy and imagery in this system are lifted
  from there — primarily `src/pages/*.astro`, `src/components/*.astro`,
  `src/data/work.ts` and `public/img/**`. **Explore this repo to design more
  faithfully against the real product.**
- **Uploaded logo** — `uploads/raphos.svg`, a stylised **Dodo** (the bird that
  also names the Grasshopper plugin). Preserved at `assets/brand/raphos-dodo.svg`.
- Other Raphos repos exist (Synera connectors, Babel, chess, etc.) but were not
  needed for the brand foundations.

---

## CONTENT FUNDAMENTALS — how Raphos writes

**Voice:** confident, precise, understated. Engineer-to-engineer. Raphos sells
hard technical capability without hype — *"We don't chase hype — we build
models that hold up under engineering constraints."*

- **Person:** first-person plural **"we"** for Raphos; **"you"** for the
  reader/client. Warm but professional.
- **Tone:** plain, declarative, technically literate. Comfortable with domain
  terms (dynamic relaxation, hedonic models, conjugated vector fields, Pareto
  front) but always explains the *why* in human terms.
- **Spelling:** **British English** — "optimisation", "rationalised",
  "behaviour", "modelling". (Product names keep their own spelling, e.g.
  "Optimizer".)
- **Casing:** sentence case for headings and buttons ("What we do", "See our
  work"). UPPERCASE reserved for mono eyebrows/labels with wide tracking.
- **Punctuation:** en-dashes for asides, Oxford-free lists, occasional
  rhetorical contrast ("fast-but-fragile or accurate-but-slow").
- **Numbers as proof:** specific figures used sparingly as credibility
  ("660M+ data points", "116,000+ works", "2018", "IASS 2018 @ MIT") — never
  invented filler stats.
- **No emoji.** Ever. The only glyphs used decoratively are the arrow **→**
  (on CTAs) and the em/en dash.
- **Headlines** make a claim or promise: *"Providing engineers with tools that
  didn't exist yesterday."*, *"Let's build something that didn't exist
  before."* Often slightly aspirational, always grounded by the body copy.
- **Eyebrows** are mono, uppercase, dotted-separated taxonomies:
  *"Engineering · Machine Learning · Data Science"*.

Examples to imitate:
- Hero: *"Sophisticated computational tools for hard engineering problems."*
- Capability: *"Meshing, reparameterization and vector-field methods that make
  free-form geometry buildable and efficient."*
- CTA: *"Have a problem worth solving? We love unconventional challenges.
  Let's talk."*

---

## VISUAL FOUNDATIONS

**Palette.** Near-white paper (`#fbfbf9`) with a sunken alt (`#f2f2ee`); text
is a near-black ink (`#14161a`) softened to `#3c4149` for body and `#6b7079`
for captions. A **single brand accent — Raphos blue `#2f5fd0`** — carries
links, primary buttons and eyebrows, darkening to `#2750b4` on hover and
brightening to `#5b8def` on dark surfaces. Borders are hairline warm greys
(`#e2e2dc` / `#cfcfc7`). Three **technical node colors** (lime `#b7d43a`, amber
`#e8b53a`, coral `#e06848`), pulled straight from the 3D structural/field
imagery, are reserved for data accents — never UI chrome. A dark surface
(`#0e1014`) backs footers, CTA cards and code.

**Type.** **Inter** for everything visible; **JetBrains Mono** for eyebrows,
indices, data labels and code. Display headings are heavy (620–680), tightly
tracked (`-0.02em`), `text-wrap: balance`, on a 1.08 line-height. Body is
1.05rem at a generous **1.65 line-height**, `text-wrap: pretty`. Display sizes
are fluid (`clamp()`); body/meta sizes are fixed. Mono labels are uppercase
with wide tracking (eyebrows `0.18em`, data labels `0.1em`).

**Spacing & layout.** A rem space scale (4 → 112px). Two container widths
(72rem reading, 80rem marketing), centred with `--space-5` gutters. Section
rhythm leans on the large end (`--space-9` = 112px). Generous whitespace; the
design breathes.

**Backgrounds.** Mostly flat paper — **image-light by intent**. The signature
texture is a faint **CSS grid** (`2.75rem` cells) radially masked behind the
hero. Accents are geometric: node-edge graphs, vector/direction-field curves
with dots at the vertices. The only "gradients" are subtle radial accent-washes
in CTA/contact cards (`radial-gradient(... var(--accent-wash) ...)`) — no
heavy, saturated, or bluish-purple gradients anywhere.

**Imagery.** Technical and cool: 3D structural renders (white geometry, grey
members, bright lime/amber/coral nodes against a blue sky), Rhino/Grasshopper
screenshots, CFD/field plots, product UI shots. Photos and screenshots fill
with `object-fit: cover`, pinned `center top`; diagrams/logos use `contain`
with padding. Every image sits in a **framed figure**: hairline border, 10px
radius, paper-alt backing, mono caption beneath.

**Corner radii.** Soft and consistent — **10px** for cards/panels/images,
**6px** for buttons/inputs/chips, **100px** pills for tags. Nothing sharp,
nothing very round.

**Borders.** Hairline 1px everywhere (`--rf-line`), strengthening to
`--rf-line-strong` on hover/emphasis. A **2px ink top-rule** marks stat
ledgers and work-category headers — a deliberate "engineering drawing" accent.

**Shadows.** Minimal and cool. No resting shadow on cards; on **hover** they
lift (`translateY(-3px)`) and gain a soft, low-spread shadow
(`0 14px 40px -24px`). Menus/popovers use a slightly deeper one. Inputs show a
3px accent-wash focus ring, never a glow.

**Motion.** Quiet and quick. One shared easing — `cubic-bezier(0.22,0.61,
0.36,1)` (ease-out) — at 150–180ms. Hover = 1–3px lift + color shift; CTA
arrows nudge `translateX(3px)`; the caret in the nav rotates. No bounces, no
infinite loops, no parallax. `prefers-reduced-motion` collapses all of it.

**Hover / press states.** Hover: subtle lift, border strengthens, background
picks up an accent wash, primary buttons darken. Press: the lift settles back
to 0 (no shrink). Links underline on hover with a `0.18em` offset.

**Transparency & blur.** Sparingly. The sticky header is
`color-mix(paper 88%, transparent)` + `blur(10px)`. Accent washes are
8–30% blue. No frosted-glass everywhere.

---

## ICONOGRAPHY

Raphos is **icon-light**. The website ships **no icon font and no icon set** —
it leans on type and a few hand-built geometric SVG accents instead. Follow
that restraint:

- **The brand mark itself is the primary "icon":** the **Raphos dodo** — the
  heritage character that also names the Dodo plugin. It lives in
  `assets/brand/dodo-*.svg` and as the `Logo` React component. Its expressive
  `node-dodo` variant traces the silhouette with interpolated dots, nodding to
  the engineering graphs, meshes and vector fields that *are* the product.
- **Glyphs used as icons:** essentially just the arrow **→** (CTAs, "learn
  more"), the em/en dash as a list bullet, and a small chevron caret for menus.
  No emoji, no Unicode symbol soup.
- **Decorative SVG motifs:** masked grids, node-graphs and direction-field
  curves (see `cards/brand-motif.html`, `assets/brand/og.svg`). These are
  brand texture, not a UI icon system.
- **If you need a UI icon set** (settings gears, chevrons, etc. for product
  work), there is no in-house set to copy. Use **Lucide** (CDN,
  `https://unpkg.com/lucide-static`) — its thin, geometric 2px-stroke,
  round-cap style matches the brand's thin geometric line-weight.
  **Flagged substitution:** Lucide is *not* an existing Raphos asset; it's the
  closest-matching stand-in. Confirm before shipping production UI.

Assets in `assets/brand/`: `dodo-solid.svg` (currentColor), `dodo-accent.svg`,
`dodo-tile.svg` (dark app tile), `dodo-node.svg` (outline + interpolated dots),
`dodo-lockup.svg` (horizontal wordmark), the original `raphos-dodo.svg`, plus
`favicon.svg` (dodo tile) and `og.svg`.

---

## Brand identity — the Dodo (decided)

The brand mark is the **Raphos dodo** — the heritage character, cleaned of its
original gradient and put on-brand. The node-graph "R" explorations were
retired in favour of one coherent mark. The dodo set lives in
`cards/brand-dodo.html`, `assets/brand/dodo-*.svg`, and the `Logo` component
(`symbol="solid" | "node-dodo"`):

1. **Solid · ink** and **Solid · accent** — flat fills; holds down to ~22px.
   *This is the primary mark + wordmark.*
2. **App tile** — accent-soft dodo on the dark `#0e1014` tile (also the favicon).
3. **Node-dodo** — the silhouette as an *outline with interpolated accent
   dots on its contour* — the expressive variant that folds the engineering
   node-graph motif into the dodo. Use for hero moments, loaders, app icons.
4. **Horizontal lockup** — dodo + "Raphos" wordmark.

The blue **`#2f5fd0` is confirmed** as the accent across all of these.

**Suggested usage:** solid dodo as the everyday logo/wordmark; node-dodo as the
expressive/app-icon treatment.

---

## Index — what's in here

| Path | What |
|------|------|
| `styles.css` | **Entry point.** `@import` manifest only — link this one file. |
| `tokens/fonts.css` | Google-Fonts `@import` for Inter + JetBrains Mono |
| `tokens/colors.css` | Palette + semantic color aliases |
| `tokens/typography.css` | Families, fluid type scale, weights, tracking |
| `tokens/spacing.css` | Space scale, containers, section rhythm |
| `tokens/effects.css` | Radius, border, shadow, motion tokens |
| `tokens/base.css` | Reset + base element styles + text/layout utilities |
| `assets/brand/` | Logos, marks, favicon, og image |
| `COMPONENTS.md` | React component sources |
| `SKILL.md` | Agent-Skill manifest for using this system |

**Components** are React and style themselves from the CSS custom properties,
so just link `styles.css` and use them.

---

## CAVEATS & OPEN QUESTIONS

- **Fonts load from Google Fonts CDN, not self-hosted binaries.** The live
  site shipped *no* webfont (it falls back to a system "Inter" stack). The real
  Inter + JetBrains Mono are loaded via `tokens/fonts.css`. If you want
  self-hosted/offline fonts, upload the Inter + JetBrains Mono `.woff2` files
  and wire proper `@font-face` rules. (Inter is genuinely the brand face, so
  this is a hosting choice, not a substitution.)
- **Iconography substitution:** no in-house icon set exists; **Lucide** is
  suggested as the closest stand-in for product UI. Confirm before production.
- The **node colors** (lime/amber/coral) are extracted from imagery, not a
  documented brand palette — treat as data-viz accents until confirmed.
