# Content editing guide

Goal: a short, practical guide so you can change any text on the site yourself, without asking me.

## What gets added

A single new file, `CONTENT.md`, in the project root. It explains:

1. **Where each text lives**
   - `src/content/site.ts` — nav labels, hero headline and subline, company intro, section headings, founder names/roles/bios, contact block (people, emails, phones, address, web, Instagram), footer.
   - `src/content/projects.ts` — one entry per project: title, slug (URL), status, year, format, length, logline, synopsis paragraphs, credits list, image, image alt text, external links.

2. **The bilingual pattern**
   Every visible text is a `{ cs: "…", en: "…" }` pair. Edit both sides so the language switch stays consistent. A short before/after example is included.

3. **Common tasks, each with a copy-paste example**
   - Change a project's logline or synopsis
   - Add or remove a synopsis paragraph
   - Add, reorder or remove a credit line, and the list of available role labels
   - Move a project between "Dokončené projekty" / "Ve výrobě" / "Ve vývoji"
   - Add an external link (Kinobox, ČSFD, festival)
   - Change contact details, address, Instagram handle
   - Change founder bios on /about

4. **Rules that prevent breakage**
   - Keep quotes, commas and braces intact; don't rename field keys.
   - Changing a `slug` changes the page URL and breaks old links.
   - Page titles and SEO descriptions come from the same content, so they update automatically.
   - Images are CDN asset pointers — send me a new file rather than editing the `.asset.json`.

## Technical notes

The guide is documentation only; no application code or content changes. Wording is in Czech and English section headings kept simple, examples taken verbatim from the current `projects.ts` entries (Náhradníci, Mladá krev, Marika) so they match what you see in the files.
