import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { projects, statusLabels, statusOrder } from "@/content/projects";
import { copy } from "@/content/site";
import { useLang } from "@/lib/language";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projekty — Pozitiv Films" },
      {
        name: "description",
        content:
          "Dokončené filmy, projekty ve výrobě a látky ve vývoji produkční společnosti Pozitiv Films.",
      },
      { property: "og:title", content: "Projekty — Pozitiv Films" },
      {
        property: "og:description",
        content: "Dokončené filmy, projekty ve výrobě a látky ve vývoji.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <SectionLabel>{copy.projectsTag[lang]}</SectionLabel>
        <h1 className="mt-6 text-3xl sm:text-5xl">{copy.projectsHeading[lang]}</h1>
        <div className="mt-12 space-y-14">
          {statusOrder.map((status) => (
            <section key={status}>
              <h2 className="border-t-2 border-primary pt-3 font-[family-name:var(--font-display)] text-sm tracking-wide uppercase">
                {statusLabels[status][lang]}
              </h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                {projects
                  .filter((p) => p.status === status)
                  .map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
