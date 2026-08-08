# Apply "Blue on Ink" to the live site

Switch the site from the current light theme to the dark Blue on Ink palette you approved from the PDF mockup. Typography stays as it is (Chakra Petch headings, Arial body), so only color changes.

## The palette

| Role | Hex | Token |
|---|---|---|
| Page background | `#0e1116` | `--background` |
| Cards / panels | `#171c24` | `--card`, `--popover`, `--secondary`, `--muted` |
| Accent (brand blue) | `#2f6ab2` | `--primary`, `--ring` |
| Accent light | `#8fb6e6` | `--primary-light` (angled brand tag, links, section labels) |
| Text | `#e9edf3` | `--foreground` |
| Muted text | `#93a0b3` | `--muted-foreground` |
| Borders / hairlines | `#242c38` | `--border`, `--input` |

## What changes

- `src/styles.css`: the `:root` block gets the new values, converted to oklch as the design system requires. The `.dark` block is aligned to the same values so the theme is consistent either way.
- The `ink` token flips role: on a near-black page it becomes the light surface used for text on the blue tag, so the angled brand label stays readable.
- Logo: the header currently uses the blue/dark mark, which loses contrast on near-black. It switches to the light monochrome version of the logo, same as in the mockup.
- Images and stills are untouched.

## Not in scope

No layout, copy, or component structure changes. No typography change — say the word if you also want the Instrument Serif / Work Sans pairing on top of this.

## Technical notes

Colors are only edited as semantic tokens in `src/styles.css`; no component gets a hardcoded color utility, so the theme stays swappable. After the edit I check the homepage, projects overview, About and one project subpage in a headless browser to confirm contrast on cards, badges, footer and the brand tag, and that no element inherits a leftover light-theme value.
