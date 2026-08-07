import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

type Bi = { cs: string; en: string };

export const company = {
  legalName: "Pozitiv Films s.r.o.",
  email: "klarabuk@gmail.com",
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
      email: "klarabuk@gmail.com",
      phone: "+420 603 252 565",
    },
    {
      name: "Ondřej Zach",
      role: { cs: "Producent", en: "Producer" },
      email: "ondrej.zach@ozet.eu",
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
    cs: "Držíme štáb malý. Záměrně.",
    en: "We keep the team small on purpose.",
  },
  aboutParagraphs: [
    {
      cs: "Pozitiv Films je butiková produkční společnost se sídlem v Praze. Vedou ji dva producenti a okruh spolupracovníků, se kterými se známe z předchozích projektů.",
      en: "Pozitiv Films is a boutique production company based in Prague. It is run by two producers and a circle of collaborators we know from previous projects.",
    },
    {
      cs: "Děláme méně titulů a jsme u nich delší dobu — od prvního nápadu a vývoje látky až po dodání. U každého projektu je jeden z producentů od začátku do konce.",
      en: "We make fewer titles and stay with them longer — from the first idea and script development all the way to delivery. On every project one of the producers is there from beginning to end.",
    },
    {
      cs: "Pracujeme v češtině i angličtině, na hraných sériích i celovečerních filmech, a nebráníme se tomu začít od hrubé myšlenky místo hotového zadání.",
      en: "We work in Czech and English, on scripted series as well as feature films, and we're happy to start from a rough idea rather than a finished brief.",
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
    cs: "Napište nám, co máte v hlavě — i když je to jen jedna věta. Odpovídáme obvykle do dne.",
    en: "Tell us what you have in mind — even if it's just one sentence. We usually reply within a day.",
  },
  labelEmail: { cs: "E-mail", en: "Email" },
  labelPhone: { cs: "Telefon", en: "Phone" },
  labelStudio: { cs: "Studio", en: "Studio" },
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
    photo: founder1,
    email: "klarabuk@gmail.com",
    bio: [
      {
        cs: "Klára je spoluzakladatelkou Pozitiv Films. Vede vývoj látek a spolupráci s autory a režiséry — od prvního nápadu přes scénář až po nastavení projektu s koprodukčními partnery a televizí.",
        en: "Klára is a co-founder of Pozitiv Films. She leads development and the work with writers and directors — from the first idea through the script to setting the project up with co-production partners and broadcasters.",
      },
      {
        cs: "(Placeholder text — pošlete prosím vlastní znění bio, rád ho vyměním.)",
        en: "(Placeholder text — send your own wording and I'll replace it.)",
      },
    ],
    credits: ["Mladá krev (2025)", "Náhradníci (2024)", "Marika (ve výrobě)", "Čtyřhra (ve vývoji)"],
  },
  {
    name: "Ondřej Zach",
    role: { cs: "Producent", en: "Producer" },
    photo: founder2,
    email: "ondrej.zach@ozet.eu",
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
