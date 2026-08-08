import { Link } from "@tanstack/react-router";
import { type Project } from "@/content/projects";
import { useContent } from "@/lib/content-store";
import { useLang } from "@/lib/language";

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLang();
  const { statusShort } = useContent();

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block"
    >
      <div className="overflow-hidden bg-secondary">
        <img
          src={project.still}
          alt={project.stillAlt[lang]}
          width={1400}
          height={900}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="min-w-0 truncate text-lg group-hover:text-primary-light">
          {project.title}
        </h3>
        <span className="shrink-0 text-xs text-muted-foreground">
          {statusShort[project.status][lang]}
        </span>
      </div>
      <p className="mt-1 font-[family-name:var(--font-display)] text-xs text-muted-foreground">
        {project.format[lang]} · {project.year}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.logline[lang]}
      </p>
    </Link>
  );
}
