import { company, copy } from "@/content/site";
import { useLang } from "@/lib/language";

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-3 px-6 py-8 text-xs text-muted-foreground sm:grid-cols-2">
        <p>
          © {new Date().getFullYear()} {company.legalName}
        </p>
        <p className="sm:text-right">
          <a href={`mailto:${company.email}`} className="hover:text-primary">
            {company.email}
          </a>
          {" · "}
          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-primary"
          >
            Instagram
          </a>
          {" · "}
          {company.address[lang]}
          {" · "}
          {copy.labelPhone[lang]}: {company.phone}
        </p>

      </div>
    </footer>
  );
}
