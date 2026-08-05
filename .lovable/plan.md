# Pozitiv Films — website

A small multi-page site built on the brand manual: brand blue, near-black ink, white, the angled blue label device, and a Silom-like geometric display face (Chakra Petch) with Arial for body text. Bilingual Czech/English with a language switch in the header. Placeholder copy and generated imagery throughout, structured so real text and stills can be dropped in later.

## Pages

```text
/                     Landing: intro, project lineup by status, founders teaser, contact
/projects             All projects grouped: Produced (2), In production (2), In development (1)
/projects/:slug       One page per project (5 pages, same template)
/about                Company intro + bios of the two founders
```

## Landing page

- Header: logo, nav (Projects / About / Contact), CZ|EN switch.
- Hero: short positioning line + one sentence intro, generated film-set image.
- Who we are: two short paragraphs, link to About.
- Projects: three labelled groups (Produced, In production, In development) as cards with still, title, format/year, one-line logline, linking to each project page.
- Founders: two portraits with name and role, link to About.
- Contact: email, phone, city; simple footer with company legal name.

## Project subpage template

Title, status badge, format/length/year, logline, synopsis, key credits (director, DoP, producer), a still or two, and back-link to Projects. Each project has its own SEO title/description and og tags.

## About page

Company story (3 short paragraphs), then two founder blocks: portrait, name, role, bio, selected credits, contact line.

## Language switch

Client-side, no backend: all copy lives in one typed dictionary (`cs` / `en`) plus per-project content objects. A small context stores the chosen language in localStorage and defaults to Czech; the switch flips it instantly across all pages. Route paths stay the same in both languages.

## Technical notes

- TanStack Start file routes: `index.tsx`, `projects.index.tsx`, `projects.$slug.tsx`, `about.tsx`; project data in a single `src/content/projects.ts` module with `cs`/`en` fields and status enum, so adding a project is one object.
- Unknown slug renders a not-found state via `notFound()`.
- Design tokens extended in `src/styles.css` (brand blue, ink, angled-label utility, display/body fonts) — no hardcoded colors in components.
- Reusable components: `Header`, `Footer`, `ProjectCard`, `SectionLabel` (angled blue tag), `LanguageSwitch`, `FounderCard`.
- Logo asset already extracted from the manual; favicon derived from the mark. Placeholder stills and founder portraits generated to match a muted, natural-light look.
- Every route defines its own `head()` metadata in both languages' default (Czech text), including og tags.
