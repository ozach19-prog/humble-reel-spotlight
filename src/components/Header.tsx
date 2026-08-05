import { Link } from "@tanstack/react-router";
import logo from "@/assets/pozitiv-logo.png.asset.json";
import { nav } from "@/content/site";
import { useLang } from "@/lib/language";

export function Header() {
  const { lang, setLang } = useLang();

  return (
    <header className="border-b border-border">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5">
        <Link to="/" className="flex min-w-0 items-center">
          <img
            src={logo.url}
            alt="Pozitiv Films"
            width={174}
            height={87}
            className="h-9 w-auto"
          />
        </Link>
        <div className="flex shrink-0 items-center gap-5 font-[family-name:var(--font-display)] text-sm">
          <nav className="flex items-center gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label[lang]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 border-l border-border pl-4 text-xs">
            {(["cs", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={
                  lang === code
                    ? "px-1 font-semibold text-primary uppercase"
                    : "px-1 text-muted-foreground uppercase transition-colors hover:text-foreground"
                }
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
