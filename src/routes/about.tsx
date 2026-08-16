import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { FounderCard } from "@/components/FounderCard";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { useContent } from "@/lib/content-store";
import { useLang } from "@/lib/language";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "O nás — Pozitiv Films - Boutique production company for television and film, Prague" },
      {
        name: "description",
        content: "About us and our projects: past, current and future",
      },
      { property: "og:title", content: "O nás — Pozitiv Films - Boutique production company for television and film, Prague" },
      {
        property: "og:description",
        content: "About us and our projects: past, current and future",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: "Pozitiv Films" },
      { property: "og:locale", content: "cs_CZ" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "O nás — Pozitiv Films - Boutique production company for television and film, Prague" },
      {
        name: "twitter:description",
        content: "About us and our projects: past, current and future",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),

  component: AboutPage,
});

function AboutPage() {
  const { lang } = useLang();
  const { company, copy, founders } = useContent();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <SectionLabel>{copy.aboutPageTag[lang]}</SectionLabel>
        {copy.aboutPageHeading[lang].trim() ? (
          <h1 className="mt-6 max-w-2xl text-3xl sm:text-5xl">{copy.aboutPageHeading[lang]}</h1>
        ) : (
          <h1 className="mt-6 max-w-2xl text-3xl sm:text-5xl">{copy.aboutPageTag[lang]}</h1>
        )}
        <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
          {copy.aboutPageParagraphs
            .filter((p) => p[lang].trim().length > 1)
            .map((p, i) => (
              <p key={i}>{p[lang]}</p>
            ))}
        </div>

        <div className="mt-16">
          <SectionLabel>{copy.foundersTag[lang]}</SectionLabel>
          <h2 className="mt-6 text-2xl sm:text-3xl">
            {copy.foundersHeading[lang].trim() || copy.foundersTag[lang]}
          </h2>
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
              className="underline decoration-primary-light decoration-2 underline-offset-4"
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
