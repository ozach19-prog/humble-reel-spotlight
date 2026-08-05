import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects, statusShort } from "@/content/projects";

const statusEnum = z.enum(["produced", "production", "development"]);

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Pozitiv Films' film projects with slug, title, status, year, format and logline. Optionally filter by production status.",
  inputSchema: {
    status: statusEnum
      .optional()
      .describe("Optional filter: produced, production (in production) or development."),
    language: z
      .enum(["cs", "en"])
      .optional()
      .describe("Language for descriptive fields. Defaults to en."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ status, language }) => {
    const lang = language ?? "en";
    const rows = projects
      .filter((p) => !status || p.status === status)
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        status: p.status,
        statusLabel: statusShort[p.status][lang],
        year: p.year,
        format: p.format[lang],
        length: p.length[lang],
        logline: p.logline[lang],
      }));

    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { projects: rows },
    };
  },
});
