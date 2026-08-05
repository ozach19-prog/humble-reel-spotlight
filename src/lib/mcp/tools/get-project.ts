import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getProject, projects, statusShort } from "@/content/projects";

export default defineTool({
  name: "get_project",
  title: "Get project",
  description:
    "Get the full public details of one Pozitiv Films project by slug: status, format, length, logline, synopsis and credits.",
  inputSchema: {
    slug: z
      .string()
      .trim()
      .describe(`Project slug. One of: ${projects.map((p) => p.slug).join(", ")}.`),
    language: z
      .enum(["cs", "en"])
      .optional()
      .describe("Language for descriptive fields. Defaults to en."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug, language }) => {
    const project = getProject(slug);
    if (!project) {
      throw new ToolError(
        `No project with slug "${slug}". Available slugs: ${projects.map((p) => p.slug).join(", ")}.`,
      );
    }

    const lang = language ?? "en";
    const detail = {
      slug: project.slug,
      title: project.title,
      status: project.status,
      statusLabel: statusShort[project.status][lang],
      year: project.year,
      format: project.format[lang],
      length: project.length[lang],
      logline: project.logline[lang],
      synopsis: project.synopsis.map((p) => p[lang]),
      credits: project.credits.map((c) => ({ role: c.role[lang], name: c.name })),
      url: `/projects/${project.slug}`,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(detail, null, 2) }],
      structuredContent: detail,
    };
  },
});
