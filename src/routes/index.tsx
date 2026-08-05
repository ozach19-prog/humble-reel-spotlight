import { createFileRoute, Link } from "@tanstack/react-router";
import heroSet from "@/assets/hero-set.jpg";
import { Footer } from "@/components/Footer";
import { FounderCard } from "@/components/FounderCard";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { projects, statusLabels, statusOrder } from "@/content/projects";
import { company, copy, founders } from "@/content/site";
import { useLang } from "@/lib/language";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pozitiv Films — butiková filmová produkce, Praha" },
      {
        name: "description",
        content:
          "Butiková produkční společnost z Prahy. Dokumentární a hrané filmy — dokončené projekty, projekty ve výrobě a ve vývoji.",
      },
      { property: "og:title", content: "Pozitiv Films — butiková filmová produkce" },
      {
        property: "og:description",
        content: "Dokumentární a hrané filmy z Prahy. Malý štáb, skutečné příběhy.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Pozitiv Films" },
      { property: "og:locale", content: "cs_CZ" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pozitiv Films — butiková filmová produkce" },
      {
        name: "twitter:description",
        content: "Dokumentární a hrané filmy z Prahy. Malý štáb, skutečné příběhy.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),

  component: Home,
});

function Home() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-24">
          <h1 className="max-w-2xl text-4xl leading-[1.1] sm:text-6xl">
            {copy.heroLine1[lang]}
            <br />
            <span className="text-primary">{copy.heroLine2[lang]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {copy.heroText[lang]}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              to="/projects"
              className="bg-primary px-6 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {copy.allProjects[lang]}
            </Link>
            <a
              href="#contact"
              className="font-[family-name:var(--font-display)] text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4"
            >
              {copy.contactTag[lang]}
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6">
          <img
            src={heroSet}
            alt={copy.heroAlt[lang]}
            width={1600}
            height={1008}
            className="w-full object-cover"
          />
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <SectionLabel>{copy.aboutTag[lang]}</SectionLabel>
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <h2 className="text-2xl sm:text-3xl">{copy.aboutHeading[lang]}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {copy.aboutParagraphs.slice(0, 2).map((p) => (
                <p key={p.en}>{p[lang]}</p>
              ))}
              <Link
                to="/about"
                className="inline-block font-[family-name:var(--font-display)] text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4"
              >
                {copy.aboutLink[lang]}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <SectionLabel>{copy.projectsTag[lang]}</SectionLabel>
            <h2 className="mt-6 text-2xl sm:text-3xl">{copy.projectsHeading[lang]}</h2>
            <div className="mt-10 space-y-12">
              {statusOrder.map((status) => (
                <div key={status}>
                  <h3 className="border-t-2 border-primary pt-3 font-[family-name:var(--font-display)] text-sm tracking-wide uppercase">
                    {statusLabels[status][lang]}
                  </h3>
                  <div className="mt-6 grid gap-8 sm:grid-cols-2">
                    {projects
                      .filter((p) => p.status === status)
                      .map((p) => (
                        <ProjectCard key={p.slug} project={p} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <SectionLabel>{copy.foundersTag[lang]}</SectionLabel>
          <h2 className="mt-6 text-2xl sm:text-3xl">{copy.foundersHeading[lang]}</h2>
          <div className="mt-8 grid max-w-lg gap-8 sm:grid-cols-2">
            {founders.map((f) => (
              <FounderCard key={f.name} founder={f} />
            ))}
          </div>
          <Link
            to="/about"
            className="mt-8 inline-block font-[family-name:var(--font-display)] text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4"
          >
            {copy.aboutLink[lang]}
          </Link>
        </section>

        <section id="contact" className="bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl">{copy.contactHeading[lang]}</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">
                {copy.contactText[lang]}
              </p>
            </div>
            <dl className="space-y-4 font-[family-name:var(--font-display)] text-sm">
              <div>
                <dt className="opacity-60">{copy.labelEmail[lang]}</dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="underline decoration-primary-light decoration-2 underline-offset-4"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="opacity-60">{copy.labelPhone[lang]}</dt>
                <dd>
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="opacity-60">{copy.labelInstagram[lang]}</dt>
                <dd>
                  <a
                    href={company.instagramUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline decoration-primary-light decoration-2 underline-offset-4"
                  >
                    {company.instagramHandle}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="opacity-60">{copy.labelStudio[lang]}</dt>
                <dd className="opacity-90">{company.address[lang]}</dd>
              </div>
            </dl>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
