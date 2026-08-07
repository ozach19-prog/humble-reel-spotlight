import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  projects as baseProjects,
  statusLabels as baseStatusLabels,
  statusShort as baseStatusShort,
  statusOrder,
  type Project,
} from "@/content/projects";
import {
  company as baseCompany,
  copy as baseCopy,
  founders as baseFounders,
  nav as baseNav,
} from "@/content/site";

export const OVERRIDES_KEY = "pozitiv-content-overrides";

/** Flat map of dot-paths (e.g. "copy.heroLine1.cs") to edited strings. */
export type Overrides = Record<string, string>;

type ContentShape = {
  copy: typeof baseCopy;
  company: typeof baseCompany;
  founders: typeof baseFounders;
  nav: typeof baseNav;
  projects: Project[];
  statusLabels: typeof baseStatusLabels;
  statusShort: typeof baseStatusShort;
};

const baseContent: ContentShape = {
  copy: baseCopy,
  company: baseCompany,
  founders: baseFounders,
  nav: baseNav,
  projects: baseProjects,
  statusLabels: baseStatusLabels,
  statusShort: baseStatusShort,
};

/** Keys that are not editable copy (assets, routing, identifiers, urls). */
const SKIP_KEYS = new Set([
  "still",
  "photo",
  "slug",
  "to",
  "hash",
  "status",
  "url",
  "instagramUrl",
]);

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function setPath(target: unknown, path: string, value: string) {
  const parts = path.split(".");
  let node: any = target;
  for (const part of parts.slice(0, -1)) {
    if (node == null) return;
    node = node[part];
  }
  const last = parts[parts.length - 1]!;
  if (node && typeof node[last] === "string") node[last] = value;
}

function getPath(source: unknown, path: string): string | undefined {
  let node: any = source;
  for (const part of path.split(".")) {
    if (node == null) return undefined;
    node = node[part];
  }
  return typeof node === "string" ? node : undefined;
}

export type EditableField = {
  path: string;
  label: string;
  /** "cs" | "en" | null for language-neutral fields such as names. */
  lang: "cs" | "en" | null;
  multiline: boolean;
};

export type EditableGroup = { id: string; title: string; fields: EditableField[] };

function humanize(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function collect(value: unknown, path: string, label: string, out: EditableField[]) {
  if (typeof value === "string") {
    const key = path.split(".").pop()!;
    const lang = key === "cs" || key === "en" ? (key as "cs" | "en") : null;
    out.push({ path, label, lang, multiline: value.length > 90 });
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => collect(item, `${path}.${i}`, `${label} ${i + 1}`, out));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (SKIP_KEYS.has(key)) continue;
      const childLabel =
        key === "cs" || key === "en" ? label : label ? `${label} · ${humanize(key)}` : humanize(key);
      collect(child, `${path}.${key}`, childLabel, out);
    }
  }
}

function buildGroups(content: ContentShape): EditableGroup[] {
  const groups: EditableGroup[] = [];

  const push = (id: string, title: string, value: unknown, path: string) => {
    const fields: EditableField[] = [];
    collect(value, path, "", fields);
    if (fields.length) groups.push({ id, title, fields });
  };

  push("copy", "Texty stránek / Page copy", content.copy, "copy");
  push("company", "Firma a kontakty / Company & contacts", content.company, "company");
  push("nav", "Navigace / Navigation", content.nav, "nav");
  push("statuses", "Popisky stavů / Status labels", content.statusLabels, "statusLabels");
  content.founders.forEach((founder, i) => {
    push(`founder-${i}`, `Zakladatel / Founder — ${founder.name}`, founder, `founders.${i}`);
  });
  content.projects.forEach((project, i) => {
    push(`project-${project.slug}`, `Projekt / Project — ${project.title}`, project, `projects.${i}`);
  });

  return groups;
}

type ContentContextValue = {
  content: ContentShape;
  overrides: Overrides;
  groups: EditableGroup[];
  baseValue: (path: string) => string;
  currentValue: (path: string) => string;
  setValue: (path: string, value: string) => void;
  resetField: (path: string) => void;
  resetAll: () => void;
  editorOpen: boolean;
  setEditorOpen: (open: boolean) => void;
};

const ContentContext = createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<Overrides>({});
  const [editorOpen, setEditorOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(OVERRIDES_KEY);
      if (stored) setOverrides(JSON.parse(stored) as Overrides);
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  const persist = useCallback((next: Overrides) => {
    setOverrides(next);
    try {
      window.localStorage.setItem(OVERRIDES_KEY, JSON.stringify(next));
    } catch {
      /* ignore quota errors */
    }
  }, []);

  const content = useMemo(() => {
    if (!Object.keys(overrides).length) return baseContent;
    const next = clone(baseContent);
    for (const [path, value] of Object.entries(overrides)) setPath(next, path, value);
    return next;
  }, [overrides]);

  const groups = useMemo(() => buildGroups(baseContent), []);

  const value = useMemo<ContentContextValue>(
    () => ({
      content,
      overrides,
      groups,
      baseValue: (path) => getPath(baseContent, path) ?? "",
      currentValue: (path) => overrides[path] ?? getPath(baseContent, path) ?? "",
      setValue: (path, next) => persist({ ...overrides, [path]: next }),
      resetField: (path) => {
        const next = { ...overrides };
        delete next[path];
        persist(next);
      },
      resetAll: () => persist({}),
      editorOpen,
      setEditorOpen,
    }),
    [content, overrides, groups, persist, editorOpen],
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

function useContentContext() {
  return useContext(ContentContext);
}

/** Live (override-aware) site content for rendering. Falls back to source content. */
export function useContent() {
  const ctx = useContentContext();
  return ctx?.content ?? baseContent;
}

const noopEditor = {
  overrides: {} as Overrides,
  groups: buildGroups(baseContent),
  baseValue: (path: string) => getPath(baseContent, path) ?? "",
  currentValue: (path: string) => getPath(baseContent, path) ?? "",
  setValue: () => {},
  resetField: () => {},
  resetAll: () => {},
  editorOpen: false,
  setEditorOpen: () => {},
};

/** Editor state and mutations for the content sidebar. */
export function useContentEditor() {
  const ctx = useContentContext();
  if (!ctx) return noopEditor;
  const { content: _content, ...rest } = ctx;
  return rest;
}


export { statusOrder };
