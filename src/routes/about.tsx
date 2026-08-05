import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { FounderCard } from "@/components/FounderCard";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { company, copy, founders } from "@/content/site";
import { useLang } from "@/lib/language";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "O nás — Pozitiv Films" },
      {
        name: "description",
        content:
          "Kdo jsme: dva zakladatelé butikové produkční společnosti Pozitiv Films, jejich cesta a filmografie.",
      },
      { property: "og:title", content: "O nás — Pozitiv Films" },
      {
        property: "og:description",
        content: "Dva zakladatelé, malý štáb a filmy, u kterých zůstáváme do konce.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <SectionLabel>{copy.aboutTag[lang]}</SectionLabel>
        <h1 className="mt-6 max-w-2xl text-3xl sm:text-5xl">{copy.aboutHeading[lang]}</h1>
        <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
          {copy.aboutParagraphs.map((p) => (
            <p key={p.en}>{p[lang]}</p>
          ))}
        </div>

        <div className="mt-16">
          <SectionLabel>{copy.foundersTag[lang]}</SectionLabel>
          <div className="mt-10 space-y-14">
            {founders.map((f) => (
              <FounderCard key={f.name} founder={f} full />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 font-[family-name:var(--font-display)] text-sm">
          <p className="text-muted-foreground">{company.legalName}</p>
          <p className="mt-1">
            <a
              href={`mailto:${company.email}`}
              className="underline decoration-primary decoration-2 underline-offset-4"
            >
              {company.email}
            </a>
            {" · "}
            {company.phone}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
