# Jak editovat texty na webu / How to edit the site texts

Všechny texty webu jsou ve dvou souborech. Nikde jinde texty needitujte.

| Soubor | Co obsahuje |
| --- | --- |
| `src/content/site.ts` | Menu, hero, úvod o společnosti, nadpisy sekcí, zakladatelé (jména, role, biografie), kontakty (lidé, e-maily, telefony, adresa, web, Instagram), popisky v patičce |
| `src/content/projects.ts` | Jeden záznam pro každý projekt: název, slug (URL), stav, rok, formát, délka, logline, synopse, štáb, obrázek, alt text, externí odkazy |

---

## 1. Dvojjazyčný zápis

Každý viditelný text je pár `{ cs: "…", en: "…" }`. Vždy upravte obě strany, jinak se při přepnutí jazyka objeví starý text.

Před:

```ts
logline: {
  cs: "Starý logline.",
  en: "Old logline.",
},
```

Po:

```ts
logline: {
  cs: "Nový logline.",
  en: "New logline.",
},
```

Texty, které nejsou dvojjazyčné (jména osob, e-maily, telefony, roky, `slug`), jsou jen prostý text v uvozovkách:

```ts
name: "Klára Bukovská",
year: "2027",
```

---

## 2. Časté úpravy

### Změna loglinu nebo synopse projektu

V `src/content/projects.ts` najděte projekt podle `title` a upravte `logline`, resp. odstavce v `synopsis`.

```ts
synopsis: [
  { cs: "První odstavec.", en: "First paragraph." },
  { cs: "Druhý odstavec.", en: "Second paragraph." },
],
```

### Přidání nebo odebrání odstavce synopse

Přidání = nový řádek `{ cs: "…", en: "…" },` do seznamu `synopsis`. Odebrání = smazání celého řádku včetně koncové čárky. Odstavce se zobrazí v tom pořadí, v jakém jsou napsané.

Poslední odstavec u projektů ve výrobě a ve vývoji obvykle obsahuje harmonogram (natáčení, premiéra) — je to normální odstavec synopse, dá se přepsat stejně jako ostatní.

### Štáb (credits)

Každý řádek štábu je `{ role: roles.xxx, name: "Jméno" }`. Pořadí řádků = pořadí na stránce.

```ts
credits: [
  { role: roles.writer, name: "Alice Nellis" },
  { role: roles.director, name: "Alice Nellis, Jiří Havelka" },
  { role: roles.dop, name: "Matěj Cibulka" },
],
```

Dostupné role (definované na začátku `projects.ts` v objektu `roles`):

`director` (Režie), `writer` (Scénář), `dop` (Kamera), `producer` (Produkce), `editor` (Střih), `designer` (Architekt), `costume` (Kostýmy), `sound` (Zvuk), `casting` (Casting), `cast` (Hrají), `broadcaster` (Premiéra), `award` (Ocenění).

Potřebujete-li roli, která v seznamu není, napište mi — přidám ji do `roles` v obou jazycích.

### Přesun projektu mezi sekcemi

Stačí změnit `status`:

```ts
status: "produced",     // Dokončené projekty
status: "production",   // Ve výrobě
status: "development",  // Ve vývoji
```

Pořadí projektů v rámci sekce odpovídá pořadí záznamů v souboru.

### Externí odkazy u projektu

Nepovinné pole `externalLinks` (Kinobox, ČSFD, festival, web projektu):

```ts
externalLinks: [
  { label: { cs: "ČSFD", en: "ČSFD" }, url: "https://www.csfd.cz/..." },
],
```

Když pole odstraníte celé, sekce s odkazy se u projektu nezobrazí.

### Kontakty, adresa, Instagram

V `src/content/site.ts`, objekt `company`: `legalName`, `email`, `phone`, `website`, `address`, `instagramHandle`, `instagramUrl` a seznam `contacts` (jméno, role, e-mail, telefon každého producenta). Přidání dalšího člověka = další blok v `contacts`.

### Hero, úvodní text, nadpisy

V `site.ts`, objekt `copy`: `heroLine1`, `heroLine2`, `heroText`, `aboutHeading`, `aboutParagraphs`, `contactHeading`, `contactText` a popisky jako `labelEmail`, `labelStudio`, `labelWeb`.

### Biografie zakladatelů (/about)

V `site.ts`, seznam `founders`: `name`, `role`, `email`, odstavce `bio` a `credits` (seznam filmů jako prostý text).

---

## 3. Pravidla, aby se nic nerozbilo

- Neměňte názvy polí vlevo od dvojtečky (`logline`, `cs`, `en`, `name`…). Měňte jen text v uvozovkách.
- Zachovejte uvozovky, čárky a složené závorky. Chybějící čárka nebo závorka rozbije build.
- Uvozovky uvnitř textu zapisujte česky („takto“) nebo je odescapujte (`\"`), aby nekolidovaly s uvozovkami kódu.
- `slug` je adresa podstránky. Když ho změníte, změní se URL a starší odkazy přestanou fungovat.
- Titulky stránek a SEO popisky se generují z těchto textů automaticky — nikde je nemusíte psát znovu.
- Obrázky jsou odkazy na CDN (`*.asset.json`). Soubory `.asset.json` neupravujte ručně — pošlete mi nový obrázek a vyměním ho. `stillAlt` (popis obrázku pro čtečky a SEO) editovat můžete.

---

## 5. Kde je který text (field map)

Zkratky souborů: **site** = `src/content/site.ts`, **projects** = `src/content/projects.ts`.
`[]` znamená seznam — pole se opakuje pro každou položku (každého producenta, projekt, odstavec).

### Úvodní stránka `/`

| Co vidíte na stránce | Soubor | Pole |
| --- | --- | --- |
| Odkazy v horním menu (Projekty, O nás, Kontakt) | site | `nav[].label` |
| Velký nadpis, první řádek | site | `copy.heroLine1` |
| Velký nadpis, druhý řádek | site | `copy.heroLine2` |
| Odstavec pod nadpisem | site | `copy.heroText` |
| Popis hero obrázku (alt) | site | `copy.heroAlt` |
| Štítek sekce „O nás“ | site | `copy.aboutTag` |
| Nadpis sekce „O nás“ | site | `copy.aboutHeading` |
| Odstavce sekce „O nás“ | site | `copy.aboutParagraphs[]` |
| Odkaz „Více o nás“ | site | `copy.aboutLink` |
| Štítek a nadpis sekce projektů | site | `copy.projectsTag`, `copy.projectsHeading` |
| Nadpisy skupin (Dokončené / Ve výrobě / Ve vývoji) | projects | `statusLabels` |
| Odkaz „Všechny projekty“ | site | `copy.allProjects` |
| Štítek a nadpis sekce zakladatelů | site | `copy.foundersTag`, `copy.foundersHeading` |
| Štítek a nadpis sekce kontaktů | site | `copy.contactTag`, `copy.contactHeading` |
| Odstavec v kontaktech | site | `copy.contactText` |
| Jméno producenta | site | `company.contacts[].name` |
| Role producenta | site | `company.contacts[].role` |
| E-mail producenta | site | `company.contacts[].email` |
| Telefon producenta | site | `company.contacts[].phone` |
| Adresa | site | `company.address` |
| Instagram (jméno / odkaz) | site | `company.instagramHandle`, `company.instagramUrl` |
| Web | site | `company.website` |
| Popisky E-mail / Telefon / Studio / Instagram / Web | site | `copy.labelEmail`, `copy.labelPhone`, `copy.labelStudio`, `copy.labelInstagram`, `copy.labelWeb` |
| Název firmy v patičce | site | `company.legalName` |
| E-mail a telefon v patičce | site | `company.email`, `company.phone` |

### Přehled projektů `/projects`

| Co vidíte na stránce | Soubor | Pole |
| --- | --- | --- |
| Štítek a nadpis stránky | site | `copy.projectsTag`, `copy.projectsHeading` |
| Nadpis skupiny projektů | projects | `statusLabels` |
| Název projektu na kartě | projects | `projects[].title` |
| Rok | projects | `projects[].year` |
| Formát (např. „Komediální série“) | projects | `projects[].format` |
| Krátký text na kartě | projects | `projects[].logline` |
| Obrázek karty | projects | `projects[].still` (soubor v `src/assets`) |
| Popis obrázku (alt) | projects | `projects[].stillAlt` |
| Do které skupiny projekt patří | projects | `projects[].status` |

### Podstránka projektu `/projects/<slug>`

| Co vidíte na stránce | Soubor | Pole |
| --- | --- | --- |
| Odkaz „Zpět na projekty“ | site | `copy.backToProjects` |
| Název projektu | projects | `projects[].title` |
| Řádek s údaji (rok, formát, délka) | projects | `projects[].year`, `projects[].format`, `projects[].length` |
| Nadpisy Logline / Synopse / Štáb / Údaje | site | `copy.logline`, `copy.synopsis`, `copy.creditsLabel`, `copy.detailsLabel` |
| Logline | projects | `projects[].logline` |
| Odstavce synopse | projects | `projects[].synopsis[]` |
| Řádky štábu (role + jméno) | projects | `projects[].credits[]` |
| Externí odkazy (ČSFD, Kinobox, festival) | projects | `projects[].externalLinks[]` |
| Adresa podstránky (URL) | projects | `projects[].slug` |
| Text „Projekt nenalezen“ | site | `copy.notFoundTitle`, `copy.notFoundText` |

### O nás `/about`

| Co vidíte na stránce | Soubor | Pole |
| --- | --- | --- |
| Štítek a nadpis stránky | site | `copy.aboutTag`, `copy.aboutHeading` |
| Úvodní odstavce | site | `copy.aboutParagraphs[]` |
| Štítek sekce zakladatelů | site | `copy.foundersTag` |
| Jméno zakladatele | site | `founders[].name` |
| Role zakladatele | site | `founders[].role` |
| Portrét | site | `founders[].photo` (soubor v `src/assets`) |
| E-mail | site | `founders[].email` |
| Odstavce biografie | site | `founders[].bio[]` |
| Nadpis „Vybraná filmografie“ | site | `copy.selectedCredits` |
| Seznam filmů u zakladatele | site | `founders[].credits[]` |
| Kontaktní blok dole (firma, e-mail, telefon) | site | `company.legalName`, `company.email`, `company.phone` |

---

## 6. English quick reference

Same two files, same rules: `src/content/site.ts` for company, navigation, homepage copy, contacts and founder bios; `src/content/projects.ts` for the project slate. Section 5 above is a field map: for every block you see on a page it names the file and the exact field (`copy.heroText`, `company.contacts[].phone`, `projects[].synopsis[]`), so you never have to search the code. Every visible string is a `{ cs, en }` pair — edit both. Keep field names, quotes, commas and braces intact. `status` controls which section a project appears in (`produced` / `production` / `development`), `slug` controls its URL, and page titles plus SEO metadata are generated from this content automatically.

