# Mockup PDF for circulation

Goal: a single PDF showing the whole site as it looks today, so coworkers can review without opening the app.

## What the PDF will contain

One full page screenshot per page, in this order:

1. Landing page (`/`)
2. Projects overview (`/projects`)
3. Mladá krev (produced)
4. Náhradníci (produced)
5. Marika (in production)
6. Mladá krev II (in production)
7. Čtyřhra (in development)
8. About / founders (`/about`)

Each PDF page gets a small caption strip with the page name and its URL path, so feedback can be pinned to a specific screen.

## Language

Czech version by default. If you want both languages, I can render the same eight screens twice (Czech section, then English section) in one file.

## Format

- Landscape A4, desktop-width screenshots (1440px wide), so layout matches what people see on a laptop.
- Also produce a mobile-width appendix (390px) only if you want it — off by default.

## Technical notes

- Screenshots captured with headless Chromium against the running dev preview, waiting for fonts and images to settle.
- Pages assembled into the PDF with Python (Pillow + reportlab).
- Output written to the documents area as `pozitiv-films-mockup.pdf`, downloadable straight from chat.
- Every rendered page inspected as an image before delivery to catch clipping, missing images, or broken layout.
- No changes to the site itself — this is export only.
