# Replace placeholder founders with the real producers

Currently `/about` and the founders section still show two invented people — "Martin Hruška" and "Tereza Malá" — with invented bios, placeholder e-mails (`martin@pozitiv-films.cz`) and AI-generated portraits. The real producers, already used in the contact section and in project credits, are Klára Bukovská and Ondřej Zach.

## What changes

In `src/content/site.ts`, the `founders` list is rewritten to two entries:

1. **Klára Bukovská** — Producentka / Producer, `klarabuk@gmail.com`
2. **Ondřej Zach** — Producent / Producer, `ondrej.zach@ozet.eu`

For each: role, e-mail, a short bio in Czech and English, a portrait, and a "Vybraná filmografie / Selected credits" list.

Filmography lists are drawn from the real slate already on the site: Mladá krev (2025), Náhradníci (2024), Marika (ve výrobě / in production), Mladá krev II (ve výrobě / in production), Čtyřhra (ve vývoji / in development).

The invented company backstory in `copy.aboutParagraphs` ("founded in 2019 after ten years…") is replaced with neutral wording that doesn't state facts we haven't confirmed — small team, two producers, Czech and English, development through delivery.

The placeholder portraits `founder-1.jpg` / `founder-2.jpg` stay in place as neutral stand-ins until you send real photos; then I swap them for CDN assets.

## What I need from you

- **Bios**: send a few sentences per producer (background, what each one leads in the company), or say the word and I'll draft neutral placeholder bios you can rewrite later using `CONTENT.md`.
- **Photos**: portrait images for each, if you have them.
- **Confirm the e-mails** shown above are the ones that should appear publicly on /about.

## Technical notes

Changes are limited to `src/content/site.ts` (`founders` and `copy.aboutParagraphs`). No component or route changes — `FounderCard`, `/about` and the homepage founders section already render whatever is in that list. Page titles and SEO descriptions on `/about` are generated from this content and update automatically.
