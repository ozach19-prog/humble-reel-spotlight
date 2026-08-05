import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { founders } from "@/content/site";

export default defineTool({
  name: "list_founders",
  title: "List founders",
  description:
    "Get the public biographies of Pozitiv Films' founders, including role, bio, selected credits and contact email.",
  inputSchema: {
    language: z
      .enum(["cs", "en"])
      .optional()
      .describe("Language for descriptive fields. Defaults to en."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const lang = language ?? "en";
    const rows = founders.map((f) => ({
      name: f.name,
      role: f.role[lang],
      email: f.email,
      bio: f.bio.map((p) => p[lang]),
      selectedCredits: f.credits,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { founders: rows },
    };
  },
});
