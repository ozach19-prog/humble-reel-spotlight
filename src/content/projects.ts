import nahradniciStill from "@/assets/nahradnici-still.jpg.asset.json";
import mladaKrevStill from "@/assets/mlada-krev-still.webp.asset.json";
import project4 from "@/assets/project-4.jpg";
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
    slug: "mlada-krev",
    title: "Mladá krev",
    status: "produced",
    year: "2025",
    format: { cs: "Kriminální série", en: "Crime series" },
    length: { cs: "13 × 55 min", en: "13 × 55 min" },
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
        en: "Each episode brings a new case investigated by a pair made up of a young recruit and an experienced professional. The story unfolds in Hradec, where major cases mix with small-town crime.",
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
        name: "Klára Bukovská (Pozitiv Films), Ondřej Zach (Pozitiv Films), FTV Prima",
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
      { label: { cs: "ČSFD", en: "ČSFD" }, url: "https://www.csfd.cz/film/1714396-mlada-krev/prehled/" },
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
      en: "What do you do with a dead body in your garage when the neighbours are peering over the fence? And what do you do with your conscience?",
    },
    synopsis: [
      {
        cs: "Marika Vrbická (45) je běžná venkovská žena — má dům, zahradu, manžela, dospívající dceru, sousedy a kamarádky. A také žárlivý pocit, že by o to všechno mohla přijít, kdyby se její muž Hynek začal poohlížet po jiné. Aby znemožnila případnou nevěru, nadopuje ho před odjezdem na abiturientský večírek prášky na spaní. Tím spustí řetěz událostí, po nichž mají Vrbičtí v garáži v kufru auta mrtvolu manželky místního mafiána.",
        en: "Marika Vrbická (45) is an ordinary woman in an ordinary village — a house, a garden, a husband, a teenage daughter, neighbours and friends. And a jealous fear that she could lose it all if her husband Hynek starts looking elsewhere. To rule out any infidelity before he leaves for his school reunion, she doses him with sleeping pills. That sets off a chain of events which leaves the Vrbickýs with the body of the local mobster's wife in the boot of a car in their garage.",
      },
      {
        cs: "Hynek totiž vezme naordinovaný štrůdl na večírek s sebou a podělí se o něj s bývalou spolužačkou Romanou, dnes manželkou místního realitního šíbra. Když ji pak veze domů, ve sněhové vánici havaruje. Marika je najde v bezvědomí, Romanu považuje za mrtvou a ze strachu z odhalení svého triku přesvědčí omámeného Hynka, že nehodu zavinil v opilosti a nesmí ji hlásit policii. Tělo naloží do kufru a nabourané auto skryjí v garáži.",
        en: "Hynek takes the doctored apple strudel to the reunion and shares it with his former classmate Romana, now the wife of the local real-estate crook. Driving her home, he crashes in a snowstorm. Marika finds them unconscious, believes Romana is dead, and — terrified her trick will come to light — convinces the groggy Hynek that he caused the crash while drunk and must not call the police. Together they load the body into the boot and hide the wrecked car in the garage.",
      },
      {
        cs: "Romana se však v noci v kufru probere. Marika, sama pod vlivem prášků, se ji rozhodne odvézt do nemocnice, nastartuje — a usne. Výfukové plyny dokonají dílo. Ráno má Marika v garáži skutečnou mrtvolu a Hynka, který věří, že ji zabil on. Mezitím mafián hledá ženu u ruské konkurence, případ začíná vyšetřovat svérázná dvojice policistů, otec a syn Barošovi, domů na víkend přijíždí sedmnáctiletá dcera Julie a přes plot nakukuje zvídavá sousedka Hana.",
        en: "But Romana wakes up in the boot during the night. Marika, herself under the influence of the pills, decides to drive her to hospital, starts the engine — and falls asleep. The exhaust fumes finish the job. By morning she really does have a corpse in the garage, and a husband convinced he killed her. Meanwhile the mobster hunts for his wife among his Russian rivals, an eccentric father-and-son police duo, the Barošes, take on the case, seventeen-year-old daughter Julie arrives home for the weekend, and the inquisitive neighbour Hana keeps peering over the fence.",
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
      { role: roles.director, name: "Alice Nellis, Pavel Soukup / Michal Blaško" },
      { role: roles.dop, name: "Matěj Cibulka" },
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
