import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <span className="brand-tag text-xs tracking-wide uppercase">{children}</span>;
}
