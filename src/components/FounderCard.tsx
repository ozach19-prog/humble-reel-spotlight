import { founders } from "@/content/site";
import { useContent } from "@/lib/content-store";
import { useLang } from "@/lib/language";

type Founder = (typeof founders)[number];

export function FounderCard({ founder, full }: { founder: Founder; full?: boolean }) {
  const { lang } = useLang();
  const { copy } = useContent();

  return (
    <div className={full ? "grid gap-6 sm:grid-cols-[220px_1fr]" : ""}>
      <img
        src={founder.photo}
        alt={founder.name}
        width={1000}
        height={1000}
        loading="lazy"
        className={
          full
            ? "aspect-square w-full max-w-[220px] object-cover"
            : "aspect-square w-full object-cover"
        }
      />
      <div className={full ? "" : "mt-3"}>
        <h3 className="text-lg">{founder.name}</h3>
        <p className="font-[family-name:var(--font-display)] text-xs text-primary">
          {founder.role[lang]}
        </p>
        {full && (
          <>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {founder.bio.map((p) => (
                <p key={p.en}>{p[lang]}</p>
              ))}
            </div>
            <p className="mt-4 font-[family-name:var(--font-display)] text-xs tracking-wide text-muted-foreground uppercase">
              {copy.selectedCredits[lang]}
            </p>
            <ul className="mt-1 text-sm text-muted-foreground">
              {founder.credits.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <a
              href={`mailto:${founder.email}`}
              className="mt-4 inline-block text-sm underline decoration-primary decoration-2 underline-offset-4"
            >
              {founder.email}
            </a>
          </>
        )}
      </div>
    </div>
  );
}
