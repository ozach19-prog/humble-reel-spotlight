# Im now attaching a pdf presentation of one completed project. use information from it to fill in the first of the projects in "dokončené projekty" (instead of the placeholder "Mistrovi")

# Replace placeholder content with the Canva deck

Waiting on one upload: the Canva presentation exported as **PDF (Share → Download → PDF Print)**. English text only; images will be extracted from the PDF itself.

## What happens once the PDF arrives

1. **Parse the deck** — extract all slide text and pull out every embedded image at its highest available resolution.
2. **Map deck content to the site** — company intro and tagline, the 5 projects (2 produced, 2 in production, 1 in development) with logline/synopsis/credits, and the two founder bios.
3. **Fill the English copy** into the central content files, replacing today's placeholders.
4. **Draft the Czech versions** from the English text, so the language switch stays complete. These are my translations — flagged for you to review and correct.
5. **Swap the images** — replace the generated hero, project stills and founder portraits with the deck's real images wherever the deck provides a usable one. Anything the deck doesn't cover keeps its current placeholder image, and I'll list which those are.
6. **Refresh SEO metadata** — page titles, descriptions and Open Graph text derived from the real copy instead of placeholders.
7. **Visual check** — walk the landing page, projects gallery, each project sub-page and /about in both languages to confirm nothing overflows or breaks with real-length text.

## Notes on image quality

PDF-embedded images are often downsampled compared to the originals. If any hero or project still looks soft on screen, I'll flag it and you can send that single file separately at full size.

## Technical detail

- Deck text lands in `src/content/site.ts` (company, contact, founders) and `src/content/projects.ts` (per-project cs/en fields).
- Extracted images are written into `src/assets/` and referenced from the existing project/founder records — no component or routing changes needed.
- No new routes, no schema, no backend: this is a content and asset swap on the existing structure.