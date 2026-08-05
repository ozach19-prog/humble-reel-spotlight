import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { getProject, statusShort } from "@/content/projects";
import { copy } from "@/content/site";
import { useLang } from "@/lib/language";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project ? `${project.title} — Pozitiv Films` : "Projekt — Pozitiv Films";
    const description = project ? project.logline.cs : copy.notFoundText.cs;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { property: "og:site_name", content: "Pozitiv Films" },
        { property: "og:locale", content: "cs_CZ" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        ...(project ? [] : [{ name: "robots", content: "noindex" }]),
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },

  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="mx-auto max-w-5xl px-6 py-24">
          <h1 className="text-3xl">{copy.notFoundTitle[lang]}</h1>
          <p className="mt-3 text-muted-foreground">{copy.notFoundText[lang]}</p>
          <Link
            to="/projects"
            className="mt-6 inline-block font-[family-name:var(--font-display)] text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4"
          >
            {copy.backToProjects[lang]}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="mx-auto max-w-5xl px-6 pt-12 pb-8">
          <Link
            to="/projects"
            className="font-[family-name:var(--font-display)] text-xs tracking-wide text-muted-foreground uppercase transition-colors hover:text-primary"
          >
            ← {copy.backToProjects[lang]}
          </Link>
          <div className="mt-6">
            <SectionLabel>{statusShort[project.status][lang]}</SectionLabel>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.logline[lang]}
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <img
            src={project.still}
            alt={project.stillAlt[lang]}
            width={1400}
            height={900}
            className="w-full object-cover"
          />
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-14 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-sm tracking-wide uppercase">
              {copy.synopsis[lang]}
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              {project.synopsis.map((p) => (
                <p key={p.en}>{p[lang]}</p>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-sm tracking-wide uppercase">
                {copy.detailsLabel[lang]}
              </h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4 border-b border-border pb-2">
                  <dt className="text-muted-foreground">
                    {lang === "cs" ? "Formát" : "Format"}
                  </dt>
                  <dd>{project.format[lang]}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-border pb-2">
                  <dt className="text-muted-foreground">
                    {lang === "cs" ? "Délka" : "Length"}
                  </dt>
                  <dd>{project.length[lang]}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-border pb-2">
                  <dt className="text-muted-foreground">
                    {lang === "cs" ? "Rok" : "Year"}
                  </dt>
                  <dd>{project.year}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-sm tracking-wide uppercase">
                {copy.creditsLabel[lang]}
              </h2>
              <dl className="mt-4 space-y-2 text-sm">
                {project.credits.map((c) => (
                  <div
                    key={c.role.en + c.name}
                    className="flex justify-between gap-4 border-b border-border pb-2"
                  >
                    <dt className="shrink-0 text-muted-foreground">{c.role[lang]}</dt>
                    <dd className="text-right">{c.name}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {project.externalLinks && project.externalLinks.length > 0 && (
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-sm tracking-wide uppercase">
                  {lang === "cs" ? "Odkazy" : "Links"}
                </h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {project.externalLinks.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
                      >
                        {l.label[lang]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
