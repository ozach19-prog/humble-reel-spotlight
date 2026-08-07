import klaraAsset from "@/assets/klara-bukovska.jpg.asset.json";
import founder2 from "@/assets/founder-2.jpg";


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
  instagramHandle: "@pozitivfilms",
  instagramUrl: "https://www.instagram.com/pozitivfilms/",
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
  heroLine1: { cs: "Máme rádi co děláme.", en: "We love what we do. " },
  heroLine2: { cs: "Děláme jen to co máme rádi.", en: "We only do what we love." },
  heroText: {
    cs: "Produkční společnost pro současný film a televizi",
    en: "A boutique production company for contemporary film and television.",
  },
  heroAlt: {
    cs: "Kameraman snímá rozhovor v přirozeném světle",
    en: "Cinematographer filming an interview in natural light",
  },
  aboutTag: { cs: "O nás", en: "About us" },
  aboutHeading: {
    cs: "",
    en: "We keep the team small on purpose.",
  },
  aboutParagraphs: [
    {
      cs: "Společnost Pozitiv Films s.r.o. vznikla v roce 2023 s cílem vytvořit nový prostor pro kvalitní autorskou televizní tvorbu.  Jako první projekt realizovala seriál Náhradníci (Alice Nellis, 2024),  uvedený na Prima +,. Seriál v roce 2025 získal na festivalu Finále Plzeň hlavní cenu mezinárodní poroty za nejlepší televizní projekt. Seriál spolurežíroval Jiří Havelka, který v Pozitiv Films získal příležitost rozvíjet svůj autorský projekt Kulturák (vývoj dokončen 2025). Jako svůj druhý projekt dokončila společnost Pozitiv Films v roce 2025 šestnáctidílný seriál Mladá krev (Scénář Alice Nellis, režie Alice Nellis, Jasmina Blaževič a další), který se stal v sobotním vysílání na TV Prima po většinu podzimní sezony 2026 nesledovanějším pořadem večera. V  současnosti připravuje Pozitiv Films  pro  FTV Prima jeho druhou řadu (Mladá Krev II, realizace v roce 2027) .",
      en: "Pozitiv Films s.r.o. was established in 2023 with the aim to create a new space for quality auteur TV production. As its first project, it brought to fruition Náhradníci (The Substitutes) series (Alice Nellis, 2024), presented at Prima+ and the winner of the International Jury Award for the Best TV Project at 2025 Finále Plzeň festival. The series was co-directed by Jiří Havelka, who got the opportunity to develop his auteur project Kulturák (The Community Hall) in Pozitiv Films (development finished in 2025). As its second project, Pozitiv Films company finished sixteen-episode crime series Mladá Krev (Young Blood) in 2025 (screenplay by Alice Nellis, directed by Alice Nellis, Jasmina Blaževič and others), which became the most watched saturday prime time TV programme for most of the 2026 autumn season. Pozitiv Films is currently preparing its second season (production in 2027), and developing the series ČtyřHra (Doubles) in co-production with Czech Television (production 2027-2028).",
    },
    {
      cs: "Děláme méně titulů a jsme u nich delší dobu — od prvního nápadu a vývoje látky až po postprodukci. ",
      en: "We make fewer titles and stay with them longer — from the first idea and script development all the way to delivery. ",
    },
    {
      cs: "",
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
    en: "Tell us what you have in mind — even if it's just one sentence. We usually reply within a day.",
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
        cs: "Klára Bukovská (nar. 1968 v Praze) vystudovala produkci na FAMU (1992–1997). Ještě během studií pracovala v produkci reklamní agentury Leo Burnett a od té doby působí jako nezávislá producentka a vedoucí výroby na celovečerních filmech, seriálech, dokumentech i reklamě.",
        en: "Klára Bukovská (b. 1968 in Prague) graduated in production from FAMU (1992–1997). While still studying she worked in production at the Leo Burnett advertising agency, and has since worked as an independent producer and production manager on features, series, documentaries and commercials.",
      },
      {
        cs: "Spolupracovala na filmech Jana Svěráka (Kolja, Tmavomodrý svět) a dlouhodobě na projektech Alice Nellis (Ene bene, Výlet, Sedmero krkavců, dokument o adopcích pro HBO Europe). Vedla produkci festivalu Febiofest a pracovala na mezinárodních projektech (Wanted, Anne Frank, Allmen).",
        en: "She has worked on Jan Svěrák's films (Kolya, Dark Blue World) and, over many years, on Alice Nellis's projects (Ene bene, The Trip, Seven Ravens, an observational documentary on adoption for HBO Europe). She was head of production of the Febiofest film festival and worked on international productions (Wanted, Anne Frank, Allmen).",
      },
      {
        cs: "V televizi stojí za dlouhými i minisériemi pro TV Nova a FTV Prima (Doktoři z Počátků, Kameňák, Zpověď, Pod hladinou, Poslední oběť) a od roku 2023 je producentkou Pozitiv Films — Náhradníci, Mladá krev, Mladá krev II, Marika a Čtyřhra.",
        en: "In television she is behind long-running and limited series for TV Nova and FTV Prima (Doctors from Počátky, Kameňák, Midnight Confession, Under Water, The Last Victim), and since 2023 she has been a producer at Pozitiv Films — Náhradníci, Mladá krev, Mladá krev II, Marika and Čtyřhra.",
      },
    ],
    credits: [
      "Mladá krev II (ve výrobě)",
      "Marika (ve výrobě)",
      "Čtyřhra (ve vývoji)",
      "Mladá krev (2025)",
      "Náhradníci (2024)",
      "Poslední oběť (2023)",
      "Pod hladinou (2022)",
      "Zpověď (2021)",
      "Láska na špičkách (2020)",
      "Kameňák (2018)",
      "Sedmero krkavců (2015)",
      "Doktoři z Počátků (2013–2015)",
      "Tmavomodrý svět (2000)",
      "Kolja (1997)",
    ],
  },

  {
    name: "Ondřej Zach",
    role: { cs: "Producent", en: "Producer" },
    photo: founder2,
    email: "ondrej.zach@pozitiv-films.cz",
    bio: [
      {
        cs: "Ondřej je spoluzakladatelem Pozitiv Films. Má na starosti výrobu a financování — rozpočty, harmonogramy, štáby a dodání projektů.",
        en: "Ondřej is a co-founder of Pozitiv Films. He is responsible for production and financing — budgets, schedules, crews and delivery.",
      },
      {
        cs: "(Placeholder text — pošlete prosím vlastní znění bio, rád ho vyměním.)",
        en: "(Placeholder text — send your own wording and I'll replace it.)",
      },
    ],
    credits: ["Mladá krev (2025)", "Mladá krev II (ve výrobě)", "Marika (ve výrobě)", "Čtyřhra (ve vývoji)"],
  },
];
