# Blue on Ink — mockup for review

Produce a second PDF mockup showing the site in the "Blue on Ink" palette, so you can compare it against the current light version and the Noir & Gold version you already have. No changes to the live site until you pick a direction.

## The palette

| Role | Value | Use |
|---|---|---|
| Page background | `#0e1116` | Deep blue-black surround |
| Cards / panels | `#171c24` | Project cards, sections |
| Accent | `#2f6ab2` | The actual brand blue from the logo bible (rgb 47,106,178) |
| Accent light | `#8fb6e6` | Hover, links, section labels |
| Text | `#e9edf3` | Body, on-dark headings |
| Muted text | `#93a0b3` | Metadata, captions |
| Borders | `#242c38` | Hairlines, dividers |

Typography stays as-is for this round: Chakra Petch headings, Arial body — so the comparison isolates the color change. Say the word if you also want the Instrument Serif / Work Sans pairing tried on top of it.

The logo renders in its light monochrome form on the dark background, since the blue mark loses contrast against near-black.

## What the PDF contains

1. Title page with the palette swatches.
2. Three-way comparison spreads: current light version, Noir & Gold, Blue on Ink — for the homepage (top and projects), the projects overview, About, and one project subpage.
3. Full Blue on Ink walkthrough: homepage, projects, about, and all four project subpages (Náhradníci, Mladá krev, Marika, Mladá krev II, Čtyřhra).

Delivered as `pozitiv-films-blue-on-ink.pdf` in your files, ready to circulate.

## Technical notes

The mockup is captured by loading the running preview in a headless browser and injecting the alternative tokens as an override stylesheet at capture time, then assembling the screenshots into the PDF. Project source files are untouched — `src/styles.css` is only edited if you approve the theme afterwards, at which point the `:root` color tokens are converted to oklch and replaced in place, with the dark-mode block kept consistent.
