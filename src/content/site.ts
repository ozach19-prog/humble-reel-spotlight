import klaraAsset from "@/assets/klara-bukovska.jpg.asset.json";
import ondrejAsset from "@/assets/ondrej-zach.jpg.asset.json";

type Bi = { cs: string; en: string };

export const company = {
  legalName: "Pozitiv Films s.r.o.",
  email: "info@pozitiv-films.cz",
  phone: "+420 603 252 565",
  website: "www.pozitiv-films.cz",
  address: {
    cs: "Olšanská 3, Praha 3, 130 00, Česká republika",
    en: "Olšanská 3, Prague 3, 130 00, Czech Republic",
  },
  instagramHandle: "@pozitiv_films",
  instagramUrl: "https://www.instagram.com/pozitiv_films/",
  contacts: [
    {
      name: "Klára Bukovská",
      role: { cs: "Producentka", en: "Producer" },
      email: "klara.bukovska@pozitiv-films.cz",
      phone: "+420 603 252 565",
    },
    {
      name: "Ondřej Zach",
      role: { cs: "Producent", en: "Producer" },
      email: "ondrej.zach@pozitiv-films.cz",
      phone: "+420 724 004 747",
    },
  ],
};

export const nav: { to: string; hash?: string; label: Bi }[] = [
  { to: "/projects", label: { cs: "Projekty", en: "Projects" } },
  { to: "/about", label: { cs: "O nás", en: "About" } },
  { to: "/", hash: "contact", label: { cs: "Kontakt", en: "Contact" } },
];

export const copy = {
  heroLine1: { cs: "Pozitiv Films", en: "We love what we do. " },
  heroLine2: {
    cs: "Produkční společnost pro současnout televizi a film",
    en: "We do only what we love.",
  },
  heroText: {
    cs: "Děláme jen to co máme rádi.",
    en: "A boutique production company for contemporary film and television.",
  },
  heroAlt: {
    cs: "Scéna ze seriálu — skupina postav v chodbě školy s digitálními hodinami",
    en: "Series scene — a group of characters in a school corridor with a digital clock",
  },
  aboutTag: { cs: "O nás", en: "About us" },
  aboutHeading: {
    cs: "",
    en: "",
  },
  aboutParagraphs: [
    {
      cs: "Po dvou dekádách práce ve filmu a televizi jsme se v roce  2023  rozhodli založit si vlastní produkci, kde bychom mohli nasbírané zkušenosti proměnit v nový prostor pro autorskou televizní a filmovou tvorbu.  \n\nJako první projekt jsme v Pozitiv Films realizovali seriál Náhradníci (Alice Nellis, 2024), uvedený na Prima+. Seriál v roce 2025 získal na festivalu Finále Plzeň hlavní cenu mezinárodní poroty",
      en: "After two decades in the film and television industry, we started Pozitiv Films in 2023 to turn the experience we'd gained into a new platform for original television and film productions.\n\nOur first project at Pozitiv Films was the series Náhradníci by Alice Nellis, which aired on Prima+ in 2024. In 2025, the series won the Main International Jury award at the Finále Plzeň festival.",
    },
    {
      cs: "Děláme jen takové projekty, na které bychom se sami chtěli dívat, a každému se věnujeme osobně a s láskou, od prvního nápadu až po poslední den postprodukce. ",
      en: "We believe in our authors,  carefully select projects to work on and nurture them hands-on, from the first idea to the final day of postproduction.  ",
    },
    {
      cs: "",
      en: "",
    },
  ],

  // Texts for the /about subpage — independent of the landing page block above.
  aboutPageTag: { cs: "O společnosti", en: "About the company" },
  aboutPageHeading: {
    cs: "",
    en: "",
  },
  aboutPageParagraphs: [
    {
      cs: "Společnost Pozitiv Films s.r.o. vznikla v roce 2023 s cílem vytvořit nový prostor pro kvalitní autorskou televizní tvorbu. Jako první projekt realizovala seriál Náhradníci (Alice Nellis, 2024), uvedený na Prima+. Seriál v roce 2025 získal na festivalu Finále Plzeň hlavní cenu mezinárodní poroty za nejlepší televizní projekt. Seriál spolurežíroval Jiří Havelka, který v Pozitiv Films získal příležitost rozvíjet svůj autorský projekt Kulturák (vývoj dokončen 2025). Jako svůj druhý projekt dokončila společnost Pozitiv Films v roce 2025 šestnáctidílný seriál Mladá krev , který se stal v sobotním vysílání na TV Prima po většinu podzimní sezony 2026 nejsledovanějším pořadem večera.  ",
      en: "Pozitiv Films s.r.o. was founded in 2023 with the goal of creating a new platform for high-quality, auteur-driven TV productions. Its first project, Náhradníci (The Substitutes), by prolific screenwriter Alice Nellis, was released at VOD service Prima+ in 2024 and won the International Jury Award for the Best TV Project at the 2025 Finále Plzeň festival. The series was co-directed by Jiří Havelka, who got the opportunity to develop his project Kulturák (The Community Hall) at Pozitiv Films (development finished in 2025). As its second project, Pozitiv Films finished the sixteen-episode crime series Mladá Krev (Young Blood), which became the most-watched Saturday prime-time TV program on FTV Prima for most of the 2026 autumn season. Pozitiv Films is currently developing its second season while starting the production of the 8-part limited thriller series Marika, by Alice Nellis (production 2026-2027). ",
    },
    {
      cs: "V současnosti připravuje Pozitiv Films pro FTV Prima jeho druhou řadu a od září 2027 začíná natáčení osmidílného dramatu Marika (scénář Alice Nellis, režie Alice Nellis, Michal Blaško), podpořeného výrobním grantem SFA. ",
      en: "",
    },
  ],

  aboutLink: { cs: "Více o nás", en: "More about us" },
  projectsTag: { cs: "Projekty", en: "Projects" },
  projectsHeading: { cs: "Na čem pracujeme", en: "What we're working on" },
  allProjects: { cs: "Všechny projekty", en: "All projects" },
  foundersTag: { cs: "Zakladatelé", en: "Founders" },
  foundersHeading: { cs: "Kdo jsme", en: "Who we are" },
  contactTag: { cs: "Kontakt", en: "Contact" },
  contactHeading: { cs: "Napište nám.", en: "Get in touch." },
  contactText: {
    cs: "",
    en: "",
  },
  labelEmail: { cs: "E-mail", en: "Email" },
  labelPhone: { cs: "Telefon", en: "Phone" },
  labelStudio: { cs: "Office:", en: "Office:" },
  labelInstagram: { cs: "Instagram", en: "Instagram" },
  labelWeb: { cs: "Web", en: "Web" },

  backToProjects: { cs: "Zpět na projekty", en: "Back to projects" },
  logline: { cs: "Logline", en: "Logline" },
  synopsis: { cs: "Synopse", en: "Synopsis" },
  creditsLabel: { cs: "Štáb", en: "Credits" },
  detailsLabel: { cs: "Údaje", en: "Details" },
  notFoundTitle: { cs: "Projekt nenalezen", en: "Project not found" },
  notFoundText: {
    cs: "Tento projekt neexistuje nebo byl přesunut.",
    en: "This project doesn't exist or has been moved.",
  },
  selectedCredits: { cs: "Vybraná filmografie", en: "Selected credits" },
};

export const founders = [
  {
    name: "Klára Bukovská",
    role: { cs: "Producentka", en: "Producer" },
    photo: klaraAsset.url,
    email: "klara.bukovska@pozitiv-films.cz",
    bio: [
      {
        cs: "Klára Bukovská (nar. 1968) vystudovala produkci na FAMU a od 90. let pracuje jako producentka a vedoucí výroby na celovečerních filmech, seriálech a dokumentech české i zahraniční výroby. Spolupracovala na filmech Jana Svěráka (Kolja, Tmavomodrý svět) a dlouhodobě na projektech Alice Nellis.",
        en: "Klára Bukovská (b. 1968) graduated in production from FAMU and has worked since the 1990s as a production manager, line producer and producer on features, series and documentaries. She collaborated on Jan Svěrák's films (Kolya, Dark Blue World) and, over many years, on several Alice Nellis's projects.",
      },
      {
        cs: "V televizi stojí za výrobou řady seriálů pro TV Nova a FTV Prima. ",
        en: "In television, she produced numerous series for TV Nova and FTV Prima. ",
      },
    ],
    credits: [] as string[],
  },

  {
    name: "Ondřej Zach",
    role: { cs: "Producent", en: "Producer" },
    photo: ondrejAsset.url,
    email: "ondrej.zach@pozitiv-films.cz",
    bio: [
      {
        cs: "Od začátku 90. let působil jako filmový kritik a  byl členem programového týmu MFF Karlovy Vary (1994–1998). Poté zastával vedoucí programové a manažerské pozice v TV Nova a HBO Europe (1996–2017), kde se mj. podílel na vývoji a výrobě oceňované minisérie Hořící keř (Agnieszka Holland, 2013). Byl proděkanem FAMU pro mezinárodní vztahy a vedoucím katedry FAMU International (2017–2021) a v současnosti vyučuje na Katedře divadelních a filmových studií Univerzity Palackého v Olomouci.",
        en: "Since the early 1990s he has worked as a critic and curator, publishing in the monthly Film a doba, the daily press and film magazines, and serving on the programming team of the Karlovy Vary International Film Festival (1994–1998). He then held senior programming and management positions at TV Nova and HBO Europe (1996–2017), where he participated at development and production of the acclaimed miniseries Burning Bush (Agnieszka Holland, 2013). He served as Vice Dean for International Relations at FAMU and Chair of FAMU International (2017–2021), and currently teaches at Palacký University in Olomouc.",
      },
      {
        cs: "V letech 2018–2022 byl členem Rady Státního fondu kinematografie. Je členem České filmové a televizní akademie. ",
        en: "From 2018 to 2022 he served on the Board of the Czech Film Fund. He is a member of the Czech Film and Television Academy. Since 2022 he has been co-owner and executive producer of Pozitiv Films.",
      },
    ],

    credits: [] as string[],
  },
];
