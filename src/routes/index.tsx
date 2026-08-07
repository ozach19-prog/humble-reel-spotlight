import { createFileRoute, Link } from "@tanstack/react-router";
import foundersAsset from "@/assets/founders.jpg.asset.json";
import heroAsset from "@/assets/hero-adepti.png.asset.json";
import monitorsAsset from "@/assets/monitors.jpg.asset.json";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { statusOrder } from "@/content/projects";
import { useContent } from "@/lib/content-store";
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
  const { projects, statusLabels, company, copy, founders } = useContent();

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
            src={heroAsset.url}
            alt={copy.heroAlt[lang]}
            width={1280}
            height={720}
            className="w-full object-cover"
          />
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <SectionLabel>{copy.aboutTag[lang]}</SectionLabel>
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <h2 className="text-2xl sm:text-3xl">{copy.aboutHeading[lang]}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {copy.aboutParagraphs
                .slice(0, 2)
                .filter((p) => p[lang].trim().length > 1)
                .map((p, i) => (
                  <p key={i}>{p[lang]}</p>
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <figure>
              <img
                src={foundersAsset.url}
                alt={founders.map((f) => f.name).join(" & ")}
                width={1440}
                height={1920}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="mt-3 font-[family-name:var(--font-display)] text-xs text-primary">
                {founders.map((f) => f.name).join(" & ")}
              </figcaption>
            </figure>
            <figure>
              <img
                src={monitorsAsset.url}
                alt={
                  lang === "cs"
                    ? "Režijní monitory na natáčení"
                    : "Director's monitors on set"
                }
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
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
            <div className="space-y-8 font-[family-name:var(--font-display)] text-sm">
              <div className="grid gap-8 sm:grid-cols-2">
                {company.contacts.map((person) => (
                  <div key={person.email}>
                    <p className="font-semibold">{person.name}</p>
                    <p className="opacity-60">{person.role[lang]}</p>
                    <p className="mt-2">
                      <a
                        href={`mailto:${person.email}`}
                        className="underline decoration-primary-light decoration-2 underline-offset-4"
                      >
                        {person.email}
                      </a>
                    </p>
                    <p className="mt-1">
                      <a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a>
                    </p>
                  </div>
                ))}
              </div>
              <dl className="space-y-4">
                <div>
                  <dt className="opacity-60">{copy.labelStudio[lang]}</dt>
                  <dd className="opacity-90">
                    {company.legalName}, {company.address[lang]}
                  </dd>
                </div>
                <div>
                  <dt className="opacity-60">{copy.labelWeb[lang]}</dt>
                  <dd>
                    <a
                      href={`https://${company.website}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline decoration-primary-light decoration-2 underline-offset-4"
                    >
                      {company.website}
                    </a>
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
              </dl>
            </div>


          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
