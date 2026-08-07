import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

import { useContentEditor } from "@/lib/content-store";
import { useLang } from "@/lib/language";

const LABEL = {
  cs: "Aktualizováno",
  en: "Updated",
};

/**
 * Small transient badge shown whenever edits land in the preview — either a
 * sidebar override change or a hot-module update of the source content files.
 */
export function UpdatedIndicator() {
  const { overrides } = useContentEditor();
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const first = useRef(true);
  const signature = JSON.stringify(overrides);

  const ping = () => {
    setVisible(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 1600);
  };

  // Sidebar edits
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    ping();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  // Code Editor / file edits arriving over HMR
  useEffect(() => {
    if (!import.meta.hot) return;
    const onUpdate = () => ping();
    import.meta.hot.on("vite:afterUpdate", onUpdate);
    return () => import.meta.hot?.off("vite:afterUpdate", onUpdate);
  }, []);

  useEffect(() => () => timer.current && clearTimeout(timer.current), []);

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-ink px-3 py-2 font-[family-name:var(--font-display)] text-[11px] font-semibold tracking-wide text-ink-foreground uppercase shadow-lg transition-all duration-200 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <Check className="h-3.5 w-3.5 text-primary" />
      {LABEL[lang]}
    </div>
  );
}
