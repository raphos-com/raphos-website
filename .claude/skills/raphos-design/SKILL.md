---
name: raphos-design
description: Use this skill to generate well-branded interfaces and assets for Raphos, either for production code or throwaway prototypes/mocks. Contains the brand guidelines, colors, type, fonts, logo assets, design tokens and UI component sources for the Raphos design system.
user-invocable: true
---

You are designing for **Raphos** — a London consultancy at the intersection of
engineering, machine learning and data science. This skill is the source of
truth for the brand.

**Always start by reading `BRAND-GUIDE.md`** in this folder — it covers the
content voice, visual foundations, iconography and the dodo logo system. Then
use the files here:

- `styles.css` + `tokens/` — the design tokens (`--rf-*` custom properties) and
  base styles. In production code, link/import `styles.css` (or copy the
  `tokens/` values into the project's stylesheet). All colors, type, spacing,
  radii, shadows and motion live here.
- `assets/brand/` — the dodo logos (`dodo-solid.svg`, `dodo-accent.svg`,
  `dodo-tile.svg`, `dodo-node.svg`, `dodo-lockup.svg`, `favicon.svg`).
- `COMPONENTS.md` — React component sources (`Button`, `Tag`, `Eyebrow`,
  `Card`, `CapabilityCard`, `Stat`/`StatList`, `Figure`, `Field`/`Input`/
  `Textarea`, `Logo`) with a one-line "what & when" + usage for each. Lift them
  into the project as needed.

## Rules of thumb
- **Color:** dark ink `#14161a` on near-white paper `#fbfbf9`; one accent —
  **Raphos blue `#2f5fd0`**. Reference tokens, never hardcode hex.
- **Type:** Inter for everything; JetBrains Mono for eyebrows / data labels.
  British spelling, sentence case, no emoji.
- **Mark:** the **dodo**. `dodo-solid` for the everyday logo; `dodo-node` for
  expressive/app-icon moments.
- **Feel:** type-driven, technical, image-light. Hairline borders, soft 10px
  radii, quiet ease-out motion, hover-only shadows.

## When invoked without specifics
Ask what the user wants to build, ask a few focused questions, then act as an
expert Raphos designer — output production code *or* static HTML artifacts as
appropriate. For mocks/prototypes, copy assets out and produce self-contained
HTML for review.
