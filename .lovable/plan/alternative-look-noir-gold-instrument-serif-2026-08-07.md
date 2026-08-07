# Alternative look: Noir & Gold + Instrument Serif

Goal: see a second visual direction for the site side by side with the current one, as a PDF you can circulate — without changing the live site yet.

## The direction

- **Palette:** near-black page (#0d0d0d), slightly lifted surfaces (#1a1a1a), muted gold accent (#c9a84c) with a lighter gold for hover/links (#f0d78c), warm off-white text.
- **Typography:** Instrument Serif for headlines, project titles and section headings; Work Sans for body text, labels, credits and navigation. Replaces Chakra Petch + Arial.
- **Feel:** screening room rather than office — dark canvas, generous space, gold hairlines instead of blue rules, stills carrying the colour.
- **Logo:** the manual's blue logo does not read on near-black, so the mockup shows it in a single-colour off-white/gold treatment. That is a real brand decision, so the PDF shows it clearly for discussion.

## What you get

A PDF in two parts:

1. **Side-by-side comparison** — current and alternative versions of the same four views (homepage top, about/founders block, projects overview, one project subpage), one pair per page.
2. **Full alternative walkthrough** — the alternative direction alone across homepage, `/projects`, `/about` and each project subpage, so the type and contrast can be judged at reading size.

Czech version, since that is the primary audience; texts are unchanged.

## How it is produced

The live site is not modified. The alternative look is applied as a throwaway stylesheet injected into the preview at capture time (token overrides for background, foreground, primary, border, card, plus the two Google fonts), and screenshots are captured from the running preview. Nothing is written to `src/`.

The PDF is assembled from those captures and delivered to your documents folder for download.

## After you decide

If you like the direction, the follow-up step is small and mechanical: move the token values into `src/styles.css` (`:root`), swap the two `--font-*` tokens, add the Instrument Serif and Work Sans `<link>` tags in the root route, and supply a light logo variant. If you prefer a mix (for example the new typography on the existing light/blue palette), that variant can be rendered the same way before committing.
