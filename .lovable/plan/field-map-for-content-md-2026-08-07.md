# Field map for CONTENT.md

Add a new section to `CONTENT.md` that maps every visible block on the site to the exact file and field, so you can find any text without hunting through the code.

## What gets added

A new section **"5. Kde je který text (field map)"**, placed after the existing rules section, containing four tables — one per screen.

### Landing page (`/`)

Rows for: header navigation links, hero headline and paragraph, "O nás" heading and paragraphs, project section heading, founders heading, contact heading and text, producer blocks (name, role, e-mail, phone), address, Instagram, web, footer labels — each with its file, the object it lives in (`copy`, `company`, `contacts`), and the field name.

### Projects list (`/projects`)

Rows for: page heading, the three section headings (Dokončené / Ve výrobě / Ve vývoji), and per-card fields (`title`, `year`, `format`, `logline`, `still`, `stillAlt`).

### Project detail (`/projects/<slug>`)

Rows for: title, metadata line (year, format, length), `logline`, `synopsis` paragraphs, `credits` rows, `externalLinks`, back link label, and the section labels (Logline / Synopse / Štáb / Údaje).

### About (`/about`)

Rows for: page heading and intro paragraphs, and per founder: `name`, `role`, `photo`, `email`, `bio` paragraphs, `credits`.

## Table shape

Each table uses three columns so a row is directly actionable:

```text
| Co vidíte na stránce | Soubor | Pole |
| Nadpis sekce O nás   | site.ts | copy.aboutHeading |
```

Field paths are written as dotted paths (`copy.heroText`, `company.contacts[].phone`, `projects[].synopsis[]`) rather than line numbers, so the map stays correct as the files grow.

## Notes

- Czech first, matching the existing document; the English quick reference at the end gets one sentence pointing to the map.
- Only `CONTENT.md` changes — no site code, copy or layout is touched.
