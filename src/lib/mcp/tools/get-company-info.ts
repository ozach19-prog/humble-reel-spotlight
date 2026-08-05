import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { company, copy } from "@/content/site";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get Pozitiv Films' public company introduction and contact details (email, phone, address, Instagram).",
  inputSchema: {
    language: z
      .enum(["cs", "en"])
      .optional()
      .describe("Language for descriptive fields. Defaults to en."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const lang = language ?? "en";
    const info = {
      legalName: company.legalName,
      tagline: `${copy.heroLine1[lang]} ${copy.heroLine2[lang]}`,
      intro: copy.heroText[lang],
      about: copy.aboutParagraphs.map((p) => p[lang]),
      contact: {
        email: company.email,
        phone: company.phone,
        address: company.address[lang],
        instagram: company.instagramUrl,
      },
    };

    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
