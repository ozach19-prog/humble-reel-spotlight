import { defineMcp, type McpDefinitionInput } from "@lovable.dev/mcp-js";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import getCompanyInfoTool from "./tools/get-company-info";
import listFoundersTool from "./tools/list-founders";

export default defineMcp({
  name: "boutique-film-landing",
  title: "Boutique Film Landing",
  version: "0.1.0",
  instructions:
    "Read-only tools for the public website of Pozitiv Films, a boutique film production company in Prague. Use `get_company_info` for the company introduction and contact details, `list_projects` (optionally filtered by status: produced, production, development) and `get_project` for the film slate, and `list_founders` for founder biographies. All text is available in Czech (cs) and English (en).",
  tools: [
    getCompanyInfoTool,
    listProjectsTool,
    getProjectTool,
    listFoundersTool,
  ] as unknown as McpDefinitionInput["tools"],
});
