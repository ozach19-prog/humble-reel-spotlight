import nahradniciStill from "@/assets/nahradnici-still.jpg.asset.json";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import ctyrhraStill from "@/assets/ctyrhra-still.png.asset.json";

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
  externalLinks?: { label: Bi; url: string }[];
};

const roles = {
  director: { cs: "Režie", en: "Director" },
  dop: { cs: "Kamera", en: "Cinematographer" },
  producer: { cs: "Produkce", en: "Producer" },
  editor: { cs: "Střih", en: "Editor" },
  writer: { cs: "Scénář", en: "Written by" },
  broadcaster: { cs: "Premiéra", en: "Premiere" },
  award: { cs: "Ocenění", en: "Award" },
  cast: { cs: "Hrají", en: "Cast" },
  designer: { cs: "Architekt", en: "Production designer" },
  costume: { cs: "Kostýmy", en: "Costume designer" },
  sound: { cs: "Zvuk", en: "Sound" },
} as const;

export const projects: Project[] = [
  {
    slug: "nahradnici",
    title: "Náhradníci",
    status: "produced",
    year: "2024",
    format: { cs: "Komediální série", en: "Comedy series" },
    length: { cs: "8 × 55 min", en: "8 × 55 min" },
    logline: {
      cs: "Manželé, kteří touží po dítěti, zinscenují fingovaný rozvod a svatbu s gruzínskou náhradní matkou — a absurdní komplikace začnou, když se k nim nastěhuje i se svými dětmi a násilnickým ex-partnerem.",
      en: "Desperate to conceive, a Czech couple orchestrates a sham divorce and marriage with a Georgian surrogate mother, leading to a series of absurd logistical and legal complications when she moves into their home with her children and an abusive ex-partner.",
    },
    synopsis: [
      {
        cs: "Po deseti letech neúspěšných pokusů o početí se Eva a Otakar Krásovi rozhodnou pro náhradní mateřství jako poslední možnost, jak založit rodinu. Kvůli právní nejasnosti náhradního mateřství v Česku hledají pomoc u agentury v Gruzii. Tam najdou Mariam — mladou, inteligentní matku dvou dcer, pro kterou je náhradní mateřství šancí uniknout tíživým podmínkám.",
        en: "After a decade of unsuccessful attempts at natural and assisted conception, Eva and Otakar Krása turn to surrogacy as their last resort to start a family. Due to the legal ambiguity of surrogate motherhood in the Czech Republic, they seek the help of an agency in Georgia. There, they discover Mariam, a young, intelligent single mother of two beautiful daughters for whom surrogacy represents a chance to escape her dire living conditions.",
      },
      {
        cs: "Aby se vyhnuli rostoucím poplatkům agentury, dohodnou se s Mariam přímo a vymyslí neortodoxní právní obchvat: Otakar se rozvede s Evou a vezme si Mariam, takže dítě automaticky získá české občanství. Přivezou Mariam do Prahy, sehrají fingovanou svatbu a inseminaci provedou doma. Mariam se vrátí do Gruzie a zakrátko posílá ultrazvuk. Eva začne před přáteli a konzervativní tchyní Olgou předstírat vlastní těhotenství — a vše se zdá jít podle plánu.",
        en: "To avoid escalating agency costs that threaten to deplete their life savings, the couple strikes a deal directly with Mariam, devising an unconventional legal workaround: Otakar will divorce Eva and marry Mariam, ensuring that the child automatically receives Czech citizenship. They bring Mariam to Prague, stage a fake marriage, and, to avoid official medical scrutiny, perform artificial insemination at home. Mariam returns to Georgia and soon sends back an ultrasound image proving the success of the entire operation. To keep the arrangement hidden from friends and Otakar's conservative mother, Olga, Eva begins to fake her own pregnancy, and everything seems to be going as planned.",
      },
      {
        cs: "Pečlivá konstrukce se zhroutí, když Mariam uteče před násilnickým partnerem Levanem a bez ohlášení se objeví u Krásových — s bříškem, velkým kufrem a oběma dcerami. Tichá domácnost se mění v přetlakový hrnec kultur, skrytých identit a praktického chaosu. A když Levan Mariam v Praze vypátrá a začne Krásovy vydírat, vyjde najevo další tajemství o otcovství nenarozeného dítěte. Eva mezitím s překvapením zjistí, že je sama těhotná.",
        en: "The meticulous arrangement shatters when Mariam flees Tbilisi and her abusive partner Levan, and suddenly arrives unannounced at the Krásas' home with a baby bump, a large suitcase and both her biological children in tow. The once-quiet household quickly transforms into a pressure cooker of conflicting cultures, concealed identities and practical chaos. The situation escalates when Levan tracks Mariam to Prague and begins blackmailing the couple, threatening to expose their surrogacy solution — and Mariam reveals another secret that casts doubt on the unborn child's paternity. Meanwhile, Eva is astonished to discover that she is pregnant herself.",
      },
      {
        cs: "„Zlatého ledňáčka jsme dali sérii, která mistrovsky pracuje s tvůrčím jazykem a svěžestí i humorem svých postav a vyprávěcím řemeslem obstojí v jakémkoli mezinárodním srovnání.“ — porota Finále Plzeň 2025",
        en: "\u201cWe gave the Golden Kingfisher to a show which uses the creative vocabulary masterfully and stands up to any international comparison in the freshness and humour of its characters and the skillfulness of its storytelling.\u201d — Finále Plzeň 2025 jury",
      },
    ],
    credits: [
      { role: roles.writer, name: "Alice Nellis" },
      { role: roles.director, name: "Alice Nellis, Jiří Havelka" },
      {
        role: roles.producer,
        name: "Lucia Kršáková (FTV Prima), Klára Bukovská (Pozitiv Films), Ondřej Zach (Pozitiv Films)",
      },
      { role: roles.broadcaster, name: "FTV Prima, 2024" },
      {
        role: roles.award,
        name: "Zlatý ledňáček — nejlepší TV projekt a internetová produkce, Finále Plzeň 2025",
      },
      {
        role: roles.cast,
        name: "Jana Plodková, Kryštof Hádek, Iva Janžurová, Mariam Khundadze, Zuzana Stivínová, Adam Ernest, Vica Kerekeš, Sára Arnsteinová, Julia Issa, Zuzana Čapková, Jitka Smutná, Jiří Bábek, Melania Melekishvili, Anastasia Alavidze, Lizi Liklikadze, Anastasia Lomtadze",
      },
    ],
    still: nahradniciStill.url,
    stillAlt: {
      cs: "Klíčová grafika série Náhradníci — Eva, Otakar a náhradní matka Mariam",
      en: "Key art for the series Substitutes — Eva, Otakar and surrogate mother Mariam",
    },
    externalLinks: [
      { label: { cs: "Finále Plzeň", en: "Finále Plzeň" }, url: "https://www.festivalfinale.cz/eng/" },
      { label: { cs: "ČSFD", en: "ČSFD" }, url: "https://www.csfd.cz/en/film/1565912-surrogates/overview/" },
    ],
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
    slug: "ctyrhra",
    title: "Čtyřhra",
    status: "development",
    year: "2028",
    format: { cs: "Dramedy série", en: "Dramedy series" },
    length: { cs: "8 × 52 min", en: "8 × 52 min" },
    logline: {
      cs: "Slavní manželští terapeuti se ocitnou na hraně rozvodu, když se jim na prahu objeví nemanželská dcera jednoho z nich. Neochotně se o ni začnou starat, aby udrželi svou úspěšnou praxi — a nakonec je to právě problémová puberťačka, kdo jim pomůže zachránit vlastní vztah.",
      en: "A pair of celebrity marriage therapists find themselves on the verge of divorce when the illegitimate daughter of one of them suddenly appears on their doorstep. Reluctantly, they resolve to take care of her in order to keep their successful practice afloat — only to discover that it is the troubled teenager who ultimately helps them save their own relationship.",
    },
    synopsis: [
      {
        cs: "Elitní manželští terapeuti Klára a David Holubovi vedou úspěšnou poradnu specializovanou na terapii „čtyřhrou“, v níž jako pár přehrávají toxické chování svých klientů. Neortodoxní metoda a prestižní klientela z nich udělaly mediální hvězdy — s dokonalou dcerou Laurou (14) pravidelně pózují v lifestylových magazínech jako vzorová rodina 21. století.",
        en: "The elite marriage therapists Klára and David Holub run a successful counseling center specializing in \u201cdoubles\u201d therapy, in which they, as partners, act out their clients' toxic behavior to fix broken relationships. The unorthodox method and prestigious clientele made them media darlings, and the Holubs, with their neat daughter Laura (14), regularly appear in lifestyle magazines as ultimate 21st-century family role models.",
      },
      {
        cs: "Obraz se rozpadá, když se v Davidově ordinaci objeví zahradnice Marie se čtrnáctiletou Niki. Davidovou dcerou Niki. Marie mu tehdy nikdy neřekla, že je také těhotná, a vychovala dceru sama. Teď ji čeká dlouhá hospitalizace a nevidí jinou možnost než ji Davidovi na čas svěřit. Klára, zraněná zjištěním o dávné nevěře, uvažuje o rozvodu — ale co by to udělalo s jejich dcerou a se společnou praxí? Kdo by si kupoval rady o vztazích od rozvádějícího se páru? Vzniká křehké smíření: Niki se může přistěhovat, pokud její pravá identita zůstane před Laurou tajemstvím.",
        en: "This image cracks when the working-class gardener Marie appears in David Holub's office, with her fourteen-year-old daughter Niki in tow. His daughter Niki. Marie never told him she was pregnant too, and raised Niki as a hard-working single mother. Now, facing urgent long-term hospitalization, she sees no other option than to entrust her temporarily to David's care. Deeply hurt by David's past infidelity, Klára ponders kicking him out — but then considers how divorce could traumatize their own daughter and damage the practice they both invested all their money and time into: who would buy relationship advice from a divorcing couple? Eventually, a precarious truce is brokered: Niki can move in on the condition that her true identity remains secret from Laura.",
      },
      {
        cs: "Holubova poradna se mění v kolbiště — terapii „čtyřhrou“ začnou manželé používat jako zbraň proti sobě, což paradoxně vede k nevídaným terapeutickým průlomům. Doma se z konfliktu dvou nesourodých světů postupně rodí spojenectví: Niki odhalí, že „perfektní“ Laura vede nebezpečný druhý život online, a začne jí pomáhat nést jeho následky.",
        en: "Holub's clinic becomes a battleground: Klára and David begin weaponizing the Doubles therapy to covertly attack each other during sessions, which ironically leads to unprecedented therapeutic breakthroughs. At home, what begins as a clash of incompatible worlds slowly morphs into a reluctant alliance as Niki discovers that the \u201cperfect\u201d Laura hides a dangerous online double life, and helps her navigate the fallout of her digital transgressions.",
      },
      {
        cs: "Když Laura náhodou zjistí pravdu o Nikiině otcovství, mina v domě Holubů vybuchne a Niki se emočně blíží k destruktivnímu bodu zlomu. Aby ji zachránila, musí Laura rodičům přiznat svůj vlastní druhý život. Klára a David konečně vidí, že jim posedlost bezchybnou značkou zaslepila oči před skutečnou krizí rodiny. Zbaveni dokonalého obrazu začnou svůj vztah budovat znovu — a z trosek té fasády vzejde mezi Laurou a Niki trvalé sesterství.",
        en: "The minefield in the Holubs' household finally explodes when Laura uncovers the truth about Niki's paternity, and Niki emotionally slips toward a destructive breaking point. To pull her back from the brink, Laura must reveal the truth about her own second life to her parents. Klára and David finally face reality: their obsession with a marketable, flawless brand blinded them to the actual crises tearing their family apart. Stripped of their pristine image, they start rebuilding their relationship — and in the wreckage of that false facade, Laura and Niki forge a permanent bond, each discovering the sister they never knew they were missing.",
      },
      {
        cs: "Ve vývoji: leden 2026 – prosinec 2026. Přípravy 2027, natáčení 2027–2028 (68 natáčecích dní), premiéra na České televizi na podzim 2028.",
        en: "In development: January 2026 – December 2026. Preproduction 2027, shooting 2027–2028 (68 shooting days), Czech Television premiere in autumn 2028.",
      },
    ],
    credits: [
      { role: roles.writer, name: "Alice Nellis" },
      { role: roles.director, name: "Alice Nellis, Jiří Havelka" },
      { role: roles.dop, name: "Matěj Cibulka, Ferdinand Mazurek" },
      { role: roles.designer, name: "Adam Pitra" },
      { role: roles.costume, name: "Katarína Hollá" },
      { role: roles.sound, name: "Jiří Klenka" },
      { role: roles.broadcaster, name: "Česká televize, ČT1 prime time, podzim 2028" },
    ],
    still: ctyrhraStill.url,
    stillAlt: {
      cs: "Terapeutická ordinace se dvěma prázdnými židlemi a klientem v křesle",
      en: "A therapy room with two empty chairs and a client in an armchair",
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
