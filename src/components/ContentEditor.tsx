import { useMemo, useState } from "react";
import { Pencil, RotateCcw, X, Download, Search } from "lucide-react";

import { useContentEditor } from "@/lib/content-store";
import { useLang } from "@/lib/language";

export function ContentEditorToggle() {
  const { editorOpen, setEditorOpen, overrides } = useContentEditor();
  const count = Object.keys(overrides).length;

  if (editorOpen) return null;

  return (
    <button
      type="button"
      onClick={() => setEditorOpen(true)}
      className="fixed right-4 bottom-4 z-40 flex items-center gap-2 bg-ink px-4 py-3 font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide text-ink-foreground uppercase shadow-lg transition-opacity hover:opacity-90"
    >
      <Pencil className="h-4 w-4" />
      Editor textů
      {count > 0 && (
        <span className="bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground">
          {count}
        </span>
      )}
    </button>
  );
}

export function ContentEditorSidebar() {
  const { editorOpen, setEditorOpen, groups, overrides, currentValue, baseValue, setValue, resetField, resetAll } =
    useContentEditor();
  const { lang, setLang } = useLang();
  const [query, setQuery] = useState("");
  const [openGroup, setOpenGroup] = useState<string | null>("copy");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groups
      .map((group) => ({
        ...group,
        fields: group.fields.filter((f) => {
          if (f.lang && f.lang !== lang) return false;
          if (!q) return true;
          return (
            f.label.toLowerCase().includes(q) || currentValue(f.path).toLowerCase().includes(q)
          );
        }),
      }))
      .filter((group) => group.fields.length > 0);
  }, [groups, query, lang, currentValue]);

  if (!editorOpen) return null;

  return (
    <aside className="fixed inset-y-0 right-0 z-40 flex w-full max-w-[380px] flex-col border-l border-border bg-card">
      <header className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold">
            Editor textů
          </p>
          <p className="text-[11px] text-muted-foreground">
            {Object.keys(overrides).length} upravených polí
          </p>
        </div>
        <button
          type="button"
          onClick={() => setEditorOpen(false)}
          aria-label="Zavřít editor"
          className="p-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </header>

      <div className="space-y-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-1 font-[family-name:var(--font-display)] text-xs">
          <span className="text-muted-foreground">Jazyk:</span>
          {(["cs", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              className={
                lang === code
                  ? "bg-primary px-2 py-1 font-semibold text-primary-foreground uppercase"
                  : "px-2 py-1 text-muted-foreground uppercase transition-colors hover:text-foreground"
              }
            >
              {code}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 border border-input px-2 py-1.5">
          <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Hledat text…"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filtered.map((group) => {
          const open = openGroup === group.id;
          return (
            <section key={group.id} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpenGroup(open ? null : group.id)}
                className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left font-[family-name:var(--font-display)] text-xs font-semibold tracking-wide uppercase transition-colors hover:text-primary-light"
              >
                <span>{group.title}</span>
                <span className="text-muted-foreground">{open ? "–" : "+"}</span>
              </button>
              {open && (
                <div className="space-y-4 px-4 pb-4">
                  {group.fields.map((field) => {
                    const value = currentValue(field.path);
                    const changed = field.path in overrides;
                    return (
                      <label key={field.path} className="block">
                        <span className="flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
                          <span className="truncate">{field.label || field.path}</span>
                          {changed && (
                            <button
                              type="button"
                              onClick={() => resetField(field.path)}
                              title="Vrátit původní text"
                              className="flex shrink-0 items-center gap-1 text-primary-light"
                            >
                              <RotateCcw className="h-3 w-3" />
                              zpět
                            </button>
                          )}
                        </span>
                        {field.multiline || value.length > 90 ? (
                          <textarea
                            value={value}
                            onChange={(e) => setValue(field.path, e.target.value)}
                            rows={Math.min(12, Math.ceil(value.length / 55) + 1)}
                            className="mt-1 w-full resize-y border border-input bg-background p-2 text-sm leading-relaxed outline-none focus:border-primary"
                          />
                        ) : (
                          <input
                            value={value}
                            onChange={(e) => setValue(field.path, e.target.value)}
                            className="mt-1 w-full border border-input bg-background p-2 text-sm outline-none focus:border-primary"
                          />
                        )}
                        {changed && (
                          <span className="mt-1 block text-[10px] text-muted-foreground">
                            Původně: {baseValue(field.path).slice(0, 120)}
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
        {filtered.length === 0 && (
          <p className="px-4 py-6 text-sm text-muted-foreground">Nic nenalezeno.</p>
        )}
      </div>

      <footer className="space-y-2 border-t border-border px-4 py-3">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Změny se ukládají do tohoto prohlížeče a hned se zobrazí v náhledu. Exportujte je a
          pošlete mi je, ať je zapíšu do zdrojových textů.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              const blob = new Blob([JSON.stringify(overrides, null, 2)], {
                type: "application/json",
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "pozitiv-content-edits.json";
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="flex flex-1 items-center justify-center gap-2 bg-primary px-3 py-2 font-[family-name:var(--font-display)] text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-3.5 w-3.5" />
            Export změn
          </button>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Vrátit všechny texty do původního stavu?")) resetAll();
            }}
            className="border border-input px-3 py-2 font-[family-name:var(--font-display)] text-xs font-semibold transition-colors hover:border-primary-light hover:text-primary-light"
          >
            Vše zpět
          </button>
        </div>
      </footer>
    </aside>
  );
}
