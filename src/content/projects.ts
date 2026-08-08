import nahradniciStill from "@/assets/nahradnici-still.jpg.asset.json";
import mladaKrevStill from "@/assets/mlada-krev-still.webp.asset.json";
import mladaKrev2Still from "@/assets/mlada-krev-2-still.jpeg.asset.json";
import ctyrhraStill from "@/assets/ctyrhra-still.png.asset.json";
import marikaStill from "@/assets/marika-still.jpg.asset.json";

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
  casting: { cs: "Casting", en: "Casting" },
  production: { cs: "Výroba", en: "Produced by" },
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
      cs: "Bezdětný pár se v touze po rodině uchýlí k náhradnímu mateřství, které tají před rodinou i přáteli. Jejich plán se zkomplikuje, když se jednoho dne těhotná náhradní matka Mariam z Gruzie objeví u jejich dveří, s dvěma vlastními dětmi a na útěku před svým násilným partnerem. ",
      en: "Desperate to conceive, a Czech couple orchestrates a sham divorce and marriage with a Georgian surrogate mother, leading to a series of absurd logistical and legal complications when she moves into their home with her children and an abusive ex-partner.",
    },
    synopsis: [
      {
        cs: "Po deseti letech neúspěšných pokusů o početí se Eva a Otakar Krásovi rozhodnou pro náhradní mateřství. Specializovaná agentura v Gruzii jim najde Mariam — mladou, inteligentní matku dvou dcer, pro kterou je tato \"zakázka\" šancí uniknout z tíživé životní situace.",
        en: "After a decade of unsuccessful attempts at natural and assisted conception, Eva and Otakar Krása turn to surrogacy as their last resort to start a family. Due to the legal ambiguity of surrogate motherhood in the Czech Republic, they seek the help of an agency in Georgia. There, they discover Mariam, a young, intelligent single mother of two beautiful daughters for whom surrogacy represents a chance to escape her dire living conditions.",
      },
      {
        cs: "Aby se vyhnuli právní neukotvenosti náhradního mateřství v Česku, vymyslí Krásovi neortodoxní právní kličku: Otakar se rozvede s Evou a vezme si Mariam, takže dítě automaticky získá české občanství. V Praze sehrají fingovanou svatbu, Mariam se vrátí do Gruzie a zakrátko jim emailem pošle ultrazvuk budoucího potomka. Eva začne před přáteli a konzervativní tchyní Olgou předstírat těhotenství a vše se zdá jít podle plánu.",
        en: "To avoid escalating agency costs that threaten to deplete their life savings, the couple strikes a deal directly with Mariam, devising an unconventional legal workaround: Otakar will divorce Eva and marry Mariam, ensuring that the child automatically receives Czech citizenship. They stage a fake marriage in Prague, Mariam returns to Georgia and soon sends back an ultrasound image proving the success of the entire operation. To keep the arrangement hidden from friends and Otakar's conservative mother, Olga, Eva begins to fake her own pregnancy, and everything seems to be going as planned.",
      },
      {
        cs: "Ten se ale zhroutí, když se Mariam náhle na útěku před násilným partnerem bez ohlášení objeví u Krásových doma — s bříškem, velkým kufrem a oběma dcerami. Dosud klidná domácnost se mění v přetlakový hrnec lží, kulturních střetů a skrytých identit. Když  Mariam v Praze její gruzínský partner vypátrá a začne Krásovy vydírat, vyjde najevo další tajemství o otcovství nenarozeného dítěte a  Eva mezitím s překvapením zjistí, že je sama těhotná...",
        en: "The meticulous arrangement shatters when Mariam flees Tbilisi and her abusive partner Levan, and suddenly arrives unannounced at the Krásas' home with a baby bump, a large suitcase and both her biological children in tow. The once-quiet household quickly transforms into a pressure cooker of conflicting cultures, concealed identities and practical chaos. The situation escalates when Levan tracks Mariam to Prague and begins blackmailing the couple, threatening to expose their surrogacy solution — and Mariam reveals another secret that casts doubt on the unborn child's paternity. Meanwhile, Eva is astonished to discover that she is pregnant herself.",
      },
      {
        cs: "„ Zlatého ledňáčka jsme udělili seriálu, který mistrně využívá kreativní slovní zásobu a ve svěžesti a humoru svých postav i v dovednosti vyprávění obstojí v mezinárodním srovnání.“ — Mezinárodní porota Finále Plzeň, 2025",
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
        name: "Jana Plodková, Kryštof Hádek, Iva Janžurová, Mariam Khundadze, Zuzana Stivínová, Adam Ernest, Vica Kerekeš, Sára Arnsteinová, Julia Issa, Zuzana Čapková. ",
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
    slug: "mlada-krev",
    title: "Young Blood (Mladá krev)",
    status: "produced",
    year: "2025",
    format: { cs: "Kriminální série", en: "Crime series" },
    length: { cs: "16 × 55 min", en: "16 × 55 min" },
    logline: {
      cs: "Na krajském oddělení vražd se energie a nové metody mladých adeptů střetávají s rutinou ostřílených kriminalistů — a všechny případy spojuje jedna nevyřešená vražda.",
      en: "At a regional homicide unit, the energy and fresh methods of young recruits collide with the routine of seasoned detectives — and every case is tied together by one unsolved murder.",
    },
    synopsis: [
      {
        cs: "Kriminální seriál Mladá krev propojuje zkušenosti ostřílených policistů s energií a inovativním přístupem mladých kriminalistů. Seriál zasazený do prostředí krajského oddělení vražd nabízí napínavé případy, generační střety, humor i vztahové zvraty.",
        en: "Mladá krev (Young Blood) brings together the experience of veteran police officers and the energy and innovative thinking of a new generation of detectives. Set in a regional homicide unit, the series offers gripping cases, generational clashes, humour and shifting relationships.",
      },
      {
        cs: "Každá epizoda přináší nový případ, na jehož vyšetřování spolupracuje dvojice složená z mladého adepta a zkušeného profesionála. Děj se odehrává v Hradci, kde se velké kauzy mísí s lokální kriminalitou.",
        en: "Each episode brings a new case investigated by a pair made up of a young recruit and an experienced professional. The story is set in Hradec, where major cases mix with local crime.",
      },
      {
        cs: "Epizodické případy propojuje větší ústřední záhada — nevyřešená vražda ženy zastřelené na břehu rybníka. Tato linka postupně odhaluje, že pachatel může být blíž, než si kdokoli myslí.",
        en: "The episodic cases are threaded through a larger central mystery — the unsolved shooting of a woman on the bank of a pond. That storyline gradually reveals that the perpetrator may be closer than anyone thinks.",
      },
    ],
    credits: [
      { role: roles.writer, name: "Alice Nellis, Jan Dvořáček, Lucia Kajánková, Martina Kinská, Hana Cielová" },
      { role: roles.director, name: "Alice Nellis, Jasmina Blaževič, Jaroslav Fuit, Jakub Machala" },
      {
        role: roles.producer,
        name: "Klára Bukovská (Pozitiv Films), Ondřej Zach (Pozitiv Films), Lucia Kršáková (FTV Prima), Lenka Hornová (FTV Prima).",
      },
      { role: roles.broadcaster, name: "FTV Prima, 2025" },
      {
        role: roles.cast,
        name: "Igor Bareš, Kryštof Hádek, Lucie Žáčková, Natálie Drabiščáková, Simona Lewandowská, Julia Issa, Adam Ernest, Samuel Toman, Jan Jankovský, Martin Kubačák, Pavlína Štorková, Jan Révai, Filip Čapka",
      },
    ],
    still: mladaKrevStill.url,
    stillAlt: {
      cs: "Klíčová grafika série Mladá krev — vyšetřovatelé krajského oddělení vražd",
      en: "Key art for the series Mladá krev — detectives of the regional homicide unit",
    },
    externalLinks: [
      { label: { cs: "Kinobox", en: "Kinobox" }, url: "https://www.kinobox.cz/film/4871764-mlada-krev" },
      { label: { cs: "ČSFD", en: "ČSFD" }, url: "https://www.csfd.cz/en/film/1714396-mlada-krev/overview/" },
    ],
  },

  {
    slug: "marika",
    title: "Marika",
    status: "production",
    year: "2027",
    format: { cs: "Venkovský thriller", en: "Rural thriller" },
    length: { cs: "8 × 55 min", en: "8 × 55 min" },
    logline: {
      cs: "Co uděláte s mrtvolou v garáži, když k vám přes plot koukají sousedi? A co uděláte se svým svědomím?",
      en: "What will you do with a dead body in your garage when the neighbors are peering over the fence? And what do you do with your conscience?",
    },
    synopsis: [
      {
        cs: "",
        en: "",
      },
      {
        cs: "",
        en: "",
      },
      {
        cs: "",
        en: "",
      },
      {
        cs: "Kombinace kriminální zápletky s lehce komickým tónem připomíná Fargo, téma rodiny, jíž se vnější ohrožení stane katalyzátorem domácích vztahů, zase Ozark. Původní zločin, spáchaný vlastně z malichernosti, zatahuje obyčejný manželský pár do stále spletitější sítě lží, manipulací a dalších trestných činů — a boží mlýny melou pomalu, ale najisto.",
        en: "The crime plot with its lightly comic tone recalls Fargo, while the theme of a family for whom an outside threat becomes the catalyst of its own domestic reckoning echoes Ozark. An original crime, committed out of sheer pettiness, pulls an ordinary married couple into an ever more tangled web of lies, manipulation and further offences — and the mills of God grind slowly, but they grind sure.",
      },
      {
        cs: "Preprodukce jaro–léto 2026, natáčení září–prosinec 2026, postprodukce a zimní dotáčky leden–březen 2027, televizní premiéra na jaře 2027.",
        en: "Preproduction spring–summer 2026, shooting September–December 2026, postproduction and winter pick-ups January–March 2027, TV premiere in spring 2027.",
      },
    ],
    credits: [
      { role: roles.writer, name: "Alice Nellis" },
      { role: roles.director, name: "Alice Nellis, Michal Blaško" },
      { role: roles.dop, name: "Matěj Cibulka, Oliver Záhlava" },
      { role: roles.designer, name: "Jan Vlasák" },
      { role: roles.costume, name: "Katarína Hollá" },
      { role: roles.editor, name: "Filip Issa" },
      { role: roles.casting, name: "Madla Zachariášová, Jam Casting" },
      {
        role: roles.producer,
        name: "Klára Bukovská, Ondřej Zach (Pozitiv Films s.r.o.)",
      },
    ],
    still: marikaStill.url,
    stillAlt: {
      cs: "Osvětlená garáž venkovského domu v zimní noci",
      en: "A lit garage of a village house on a winter night",
    },
  },
  {
    slug: "mlada-krev-ii",
    title: "Mladá krev II",
    status: "production",
    year: "2027",
    format: { cs: "Kriminální série", en: "Crime series" },
    length: { cs: "8 × 55 min", en: "8 × 55 min" },
    logline: {
      cs: "Druhá řada Mladé krve. Mladí kriminalisté už nejsou nováčci — a případy, které přicházejí, jsou osobnější než kdy dřív.",
      en: "The second season of Young Blood. The young detectives are no longer rookies — and the cases coming their way are more personal than ever.",
    },
    synopsis: [
      {
        cs: "Pokračování kriminální série o generačním střetu na regionálním oddělení vražd. Vyšetřovatelé, kteří v první řadě teprve hledali své místo, teď nesou vlastní odpovědnost — a s ní i chyby, které se nedají svést na někoho jiného.",
        en: "The continuation of the crime series about a generational clash inside a regional homicide unit. The investigators who were still finding their place in season one now carry responsibility of their own — and with it, mistakes they cannot pin on anyone else.",
      },
      {
        cs: "Natáčení jaro 2027, TV premiéra TBA.",
        en: "Shooting in spring 2027, TV premiere TBA.",
      },
    ],
    credits: [
      { role: roles.writer, name: "Alice Nellis" },
      { role: roles.director, name: "Alice Nellis" },
      {
        role: roles.producer,
        name: "Klára Bukovská, Ondřej Zach (Pozitiv Films s.r.o.)",
      },
    ],
    still: mladaKrev2Still.url,
    stillAlt: {
      cs: "Kriminalista míří zbraní v průmyslové hale",
      en: "A detective aims his gun inside an industrial hall",
    },
  },

  {
    slug: "ctyrhra",
    title: "Čtyřhra",
    status: "development",
    year: "2028",
    format: { cs: "Dramedy ", en: "Dramedy series" },
    length: { cs: "8 × 52 min", en: "8 × 52 min" },
    logline: {
      cs: "Pár populárních manželských terapeutů na pokraji rozvodu se při snaze o udržení úspěšné praxe musí postarat o problémovou nemanželskou dceru jednoho z nich – aby nakonec zjistili, že je to ona, kdo se vztahy pomáhá jim.",
      en: "A pair of celebrity marriage therapists find themselves on the verge of divorce when the illegitimate daughter of one of them suddenly appears on their doorstep. Reluctantly, they resolve to take care of her in order to keep their successful practice afloat — only to discover that it is the troubled teenager who ultimately helps them save their own relationship.",
    },
    synopsis: [
      {
        cs: "",
        en: "",
      },
      {
        cs: "",
        en: "",
      },
      {
        cs: "",
        en: "",
      },
      {
        cs: "",
        en: "",
      },
      {
        cs: "Ve vývoji: leden 2026 – prosinec 2026. ",
        en: "In development: January 2026 – December 2026.",
      },
    ],
    credits: [
      { role: roles.writer, name: "Alice Nellis" },
      { role: roles.director, name: "Alice Nellis, Jiří Havelka" },
      { role: roles.production, name: "2027" },
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
