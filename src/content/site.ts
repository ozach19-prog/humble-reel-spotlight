import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

type Bi = { cs: string; en: string };

export const company = {
  legalName: "Pozitiv Films s.r.o.",
  email: "info@pozitiv-films.cz",
  phone: "+420 000 000 000",
  address: { cs: "Praha 3, Česká republika", en: "Prague 3, Czech Republic" },
  instagramHandle: "@pozitivfilms",
  instagramUrl: "https://www.instagram.com/pozitivfilms/",
};


export const nav: { to: string; label: Bi }[] = [
  { to: "/projects", label: { cs: "Projekty", en: "Projects" } },
  { to: "/about", label: { cs: "O nás", en: "About" } },
];

export const copy = {
  heroLine1: { cs: "Malý štáb.", en: "Small crew." },
  heroLine2: { cs: "Skutečné příběhy.", en: "Real stories." },
  heroText: {
    cs: "Pozitiv Films je butiková produkční společnost z Prahy. Děláme dokumentární i hrané filmy — v počtu lidí, který nám dovolí zůstat u každého projektu až do konce.",
    en: "Pozitiv Films is a boutique production company based in Prague. We make documentary and fiction films — with a team small enough to stay with every project to the end.",
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
      cs: "Společnost jsme založili v roce 2019 po deseti letech práce na cizích projektech. Chtěli jsme dělat méně filmů a být u nich déle.",
      en: "We founded the company in 2019 after ten years of working on other people's projects. We wanted to make fewer films and stay with them longer.",
    },
    {
      cs: "Jsme dva zakladatelé a okruh spolupracovníků, které známe roky. U každého projektu je jeden z nás od prvního telefonátu po dodání.",
      en: "There are two of us, plus a circle of collaborators we have known for years. On every project one of us is there from the first phone call to delivery.",
    },
    {
      cs: "Pracujeme v češtině i angličtině, většinu času v reálných lokacích, a nebráníme se tomu začít od hrubé myšlenky místo hotového zadání.",
      en: "We work in Czech and English, mostly on real locations, and we're happy to start from a rough idea rather than a finished brief.",
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
    name: "Martin Hruška",
    role: { cs: "Producent, režisér", en: "Producer, director" },
    photo: founder1,
    email: "martin@pozitiv-films.cz",
    bio: [
      {
        cs: "Martin začínal jako asistent produkce u televizních dokumentů a od roku 2012 produkuje samostatně. Vede u nás výrobu, financování a koprodukční jednání.",
        en: "Martin started as a production assistant on television documentaries and has been producing independently since 2012. He runs production, financing and co-production talks.",
      },
      {
        cs: "Zajímá ho hraný film s dokumentární metodou — malý štáb, reálné lokace, dlouhá příprava.",
        en: "He is drawn to fiction made with documentary methods — a small crew, real locations, long preparation.",
      },
    ],
    credits: ["Ranní směna (2024)", "Tichá voda (ve výrobě)", "Náhradníci (2024)"],
  },
  {
    name: "Tereza Malá",
    role: { cs: "Režisérka, dramaturgyně", en: "Director, script editor" },
    photo: founder2,
    email: "tereza@pozitiv-films.cz",
    bio: [
      {
        cs: "Tereza vystudovala dokumentární tvorbu a natočila několik krátkých filmů, které běžely na domácích i zahraničních festivalech. U nás vede vývoj látek a dramaturgii.",
        en: "Tereza studied documentary filmmaking and has directed several shorts that played at domestic and international festivals. She leads development and script editing.",
      },
      {
        cs: "Pracuje pozorovací metodou: než se rozsvítí kamera, tráví s lidmi měsíce.",
        en: "She works observationally: months with people before the camera is switched on.",
      },
    ],
    credits: ["Náhradníci (2024)", "Kolotoč (ve výrobě)", "Pole (ve vývoji)"],
  },
];
