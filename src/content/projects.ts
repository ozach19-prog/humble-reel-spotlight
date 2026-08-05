import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

export type ProjectStatus = "produced" | "production" | "development";

type Bi = { cs: string; en: string };

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  year: string;
  format: Bi;
  length: Bi;
  logline: Bi;
  synopsis: Bi[];
  credits: { role: Bi; name: string }[];
  still: string;
  stillAlt: Bi;
};

const roles = {
  director: { cs: "Režie", en: "Director" },
  dop: { cs: "Kamera", en: "Cinematographer" },
  producer: { cs: "Produkce", en: "Producer" },
  editor: { cs: "Střih", en: "Editor" },
} as const;

export const projects: Project[] = [
  {
    slug: "mistrovi",
    title: "Mistrovi",
    status: "produced",
    year: "2025",
    format: { cs: "Dokument", en: "Documentary" },
    length: { cs: "72 min", en: "72 min" },
    logline: {
      cs: "Poslední dva výrobci dřevěných forem v zemi předávají řemeslo, které už nikdo nechce.",
      en: "The last two wooden mould makers in the country pass on a craft nobody wants anymore.",
    },
    synopsis: [
      {
        cs: "Ve workshopu na okraji města pracují dva muži na formách, které se dnes vyrábějí strojově za pár minut. Film je s nimi rok — od zimní zakázky, která má dílnu zachránit, po rozhodnutí, co bude dál.",
        en: "In a workshop on the edge of town, two men make moulds that machines now produce in minutes. The film stays with them for a year — from the winter order meant to save the workshop to the decision about what comes next.",
      },
      {
        cs: "Pozorovací dokument bez komentáře, snímaný převážně v přirozeném světle jedním kameramanem.",
        en: "An observational documentary without narration, shot mostly in available light by a single cinematographer.",
      },
    ],
    credits: [
      { role: roles.director, name: "Tereza Malá" },
      { role: roles.dop, name: "Jan Beneš" },
      { role: roles.producer, name: "Martin Hruška" },
      { role: roles.editor, name: "Adam Vrba" },
    ],
    still: project1,
    stillAlt: {
      cs: "Řemeslník pracující v dílně v přirozeném světle",
      en: "Craftsman working in a workshop in natural light",
    },
  },
  {
    slug: "rani-smena",
    title: "Ranní směna",
    status: "produced",
    year: "2024",
    format: { cs: "Krátký film", en: "Short film" },
    length: { cs: "18 min", en: "18 min" },
    logline: {
      cs: "Noční řidič tramvaje veze na poslední jízdě cestujícího, kterého zná lépe, než by chtěl.",
      en: "On his last run of the night, a tram driver carries a passenger he knows better than he would like.",
    },
    synopsis: [
      {
        cs: "Komorní hraný film odehrávající se v jedné jízdě přes město. Dva lidé, kteří se dvacet let neviděli, mají čtvrt hodiny na to, aby si něco řekli.",
        en: "A chamber fiction piece set over a single ride across the city. Two people who haven't met in twenty years have fifteen minutes to say something.",
      },
      {
        cs: "Natočeno během tří nocí v provozní tramvaji, kompletně v exteriérovém světle města.",
        en: "Shot over three nights in a working tram, entirely in the city's own light.",
      },
    ],
    credits: [
      { role: roles.director, name: "Martin Hruška" },
      { role: roles.dop, name: "Jan Beneš" },
      { role: roles.producer, name: "Tereza Malá" },
    ],
    still: project2,
    stillAlt: {
      cs: "Noční tramvaj na mokré ulici",
      en: "A night tram on a wet street",
    },
  },
  {
    slug: "kolotoc",
    title: "Kolotoč",
    status: "production",
    year: "2026",
    format: { cs: "Dokument", en: "Documentary" },
    length: { cs: "cca 85 min", en: "approx. 85 min" },
    logline: {
      cs: "Dvě sedmnáctileté kamarádky se rozhodují, jestli po prázdninách zůstanou v pohraničním městě.",
      en: "Two seventeen-year-old friends decide whether to stay in their border town after the summer.",
    },
    synopsis: [
      {
        cs: "Sledujeme jedno léto, poslední před rozhodnutím. Film vzniká metodou dlouhého pozorování — natáčíme od jara 2025.",
        en: "One summer, the last one before the decision. Made through long observation — we have been filming since spring 2025.",
      },
      {
        cs: "Ve výrobě. Hrubý střih plánujeme na podzim, dokončení v roce 2026.",
        en: "In production. Rough cut planned for autumn, delivery in 2026.",
      },
    ],
    credits: [
      { role: roles.director, name: "Tereza Malá" },
      { role: roles.dop, name: "Klára Šimková" },
      { role: roles.producer, name: "Martin Hruška" },
    ],
    still: project3,
    stillAlt: {
      cs: "Dva mladí lidé sedící na nábřeží za soumraku",
      en: "Two young people sitting on a riverbank at dusk",
    },
  },
  {
    slug: "ticha-voda",
    title: "Tichá voda",
    status: "production",
    year: "2026",
    format: { cs: "Hraný film", en: "Fiction feature" },
    length: { cs: "cca 95 min", en: "approx. 95 min" },
    logline: {
      cs: "Plavčice na malém městském bazénu se stane nechtěným svědkem něčeho, co by radši neviděla.",
      en: "A lifeguard at a small municipal pool becomes the unwilling witness to something she would rather not have seen.",
    },
    synopsis: [
      {
        cs: "První celovečerní hraný film společnosti. Komorní drama o mlčení a odpovědnosti, odehrávající se téměř výhradně v jedné budově.",
        en: "The company's first fiction feature. A chamber drama about silence and responsibility, set almost entirely inside one building.",
      },
      {
        cs: "Natáčení probíhá, dokončení plánováno na rok 2026.",
        en: "Currently shooting, with delivery planned for 2026.",
      },
    ],
    credits: [
      { role: roles.director, name: "Martin Hruška" },
      { role: roles.dop, name: "Jan Beneš" },
      { role: roles.producer, name: "Tereza Malá" },
    ],
    still: project4,
    stillAlt: {
      cs: "Žena v bazénové hale za ranního světla",
      en: "A woman in a swimming pool hall in morning light",
    },
  },
  {
    slug: "pole",
    title: "Pole",
    status: "development",
    year: "2027",
    format: { cs: "Dokument", en: "Documentary" },
    length: { cs: "délka bude určena", en: "length TBC" },
    logline: {
      cs: "Vesnice, která každý rok o pár metrů ustupuje vodě, a lidé, kteří se rozhodli neodejít.",
      en: "A village losing a few metres to the water every year, and the people who decided not to leave.",
    },
    synopsis: [
      {
        cs: "Ve vývoji. Máme první natočený materiál, treatment a rozpracovanou koprodukční strukturu.",
        en: "In development. We have first footage, a treatment and a co-production structure in progress.",
      },
      {
        cs: "Hledáme koproducenta a partnery pro vývoj. Materiály posíláme na vyžádání.",
        en: "Looking for a co-producer and development partners. Materials available on request.",
      },
    ],
    credits: [
      { role: roles.director, name: "Tereza Malá" },
      { role: roles.producer, name: "Martin Hruška" },
    ],
    still: project5,
    stillAlt: {
      cs: "Osamělá postava na cestě v ranní mlze",
      en: "A lone figure on a path in morning fog",
    },
  },
];

export const statusOrder: ProjectStatus[] = ["produced", "production", "development"];

export const statusLabels: Record<ProjectStatus, Bi> = {
  produced: { cs: "Dokončené projekty", en: "Produced" },
  production: { cs: "Ve výrobě", en: "In production" },
  development: { cs: "Ve vývoji", en: "In development" },
};

export const statusShort: Record<ProjectStatus, Bi> = {
  produced: { cs: "Dokončeno", en: "Produced" },
  production: { cs: "Ve výrobě", en: "In production" },
  development: { cs: "Ve vývoji", en: "In development" },
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
