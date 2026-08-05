import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/pozitiv-logo.png.asset.json";
import heroSet from "@/assets/hero-set.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pozitiv Films — Boutique Film Production in Prague" },
      {
        name: "description",
        content:
          "A small Prague-based film crew making documentaries, commercials and brand films. Honest stories, told simply.",
      },
      { property: "og:title", content: "Pozitiv Films — Boutique Film Production" },
      {
        property: "og:description",
        content:
          "A small Prague-based film crew making documentaries, commercials and brand films.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Documentary",
    text: "Long-form and short documentary work. We spend time with people before the camera comes out.",
  },
  {
    title: "Commercial",
    text: "Brand films, product spots and campaign content — from concept and script to final grade.",
  },
  {
    title: "Production service",
    text: "Local crew, locations and logistics in Prague and across the Czech Republic for visiting teams.",
  },
];

const work = [
  { title: "Mistrovi", meta: "Documentary short · 2025" },
  { title: "Ranní směna", meta: "Brand film · 2025" },
  { title: "Kolotoč", meta: "Commercial · 2024" },
  { title: "Tichá voda", meta: "Documentary · 2024" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 sm:flex sm:justify-between">
          <a href="#top" className="flex min-w-0 items-center">
            <img
              src={logo.url}
              alt="Pozitiv Films"
              width={182}
              height={93}
              className="h-10 w-auto"
            />
          </a>
          <nav className="flex shrink-0 items-center gap-6 font-[family-name:var(--font-display)] text-sm">
            <a href="#work" className="transition-colors hover:text-primary">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-12 sm:pt-24">
          <h1 className="max-w-2xl text-4xl leading-[1.1] sm:text-6xl">
            Small crew.
            <br />
            <span className="text-primary">Real stories.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Pozitiv Films is a boutique production company based in Prague. We make
            documentaries, brand films and commercials — with a crew small enough to keep
            things human and experienced enough to get it done.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-primary px-6 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4"
            >
              See our work
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6">
          <img
            src={heroSet}
            alt="Cinematographer filming an interview in natural window light"
            width={1600}
            height={1008}
            className="w-full object-cover"
          />
        </section>

        <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <span className="brand-tag text-xs tracking-wide uppercase">About us</span>
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <h2 className="text-2xl sm:text-3xl">
              We keep the team small on purpose.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Two producers, a cinematographer and an editor — plus the people we trust
                and have worked with for years. That means fewer meetings, direct answers
                and one person who knows your project from the first call to delivery.
              </p>
              <p>
                We shoot on location most of the time, work in Czech and English, and are
                happy to start from a rough idea rather than a finished brief.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
            <span className="brand-tag text-xs tracking-wide uppercase">What we do</span>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="border-t-2 border-primary pt-4">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <span className="brand-tag text-xs tracking-wide uppercase">Selected work</span>
          <ul className="mt-8 divide-y divide-border border-t border-border">
            {work.map((w) => (
              <li
                key={w.title}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-5"
              >
                <span className="truncate font-[family-name:var(--font-display)] text-lg font-semibold">
                  {w.title}
                </span>
                <span className="shrink-0 text-xs text-muted-foreground sm:text-sm">
                  {w.meta}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Full reel available on request.
          </p>
        </section>

        <section id="contact" className="bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl">Let's talk about it.</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">
                Tell us roughly what you have in mind — budget range and timing help. We
                usually reply within a day.
              </p>
            </div>
            <dl className="space-y-4 font-[family-name:var(--font-display)] text-sm">
              <div>
                <dt className="opacity-60">Email</dt>
                <dd>
                  <a className="underline decoration-primary-light decoration-2 underline-offset-4" href="mailto:info@pozitiv-films.cz">
                    info@pozitiv-films.cz
                  </a>
                </dd>
              </div>
              <div>
                <dt className="opacity-60">Phone</dt>
                <dd>
                  <a className="hover:opacity-80" href="tel:+420000000000">
                    +420 000 000 000
                  </a>
                </dd>
              </div>
              <div>
                <dt className="opacity-60">Studio</dt>
                <dd className="opacity-90">Praha 3, Czech Republic</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pozitiv Films s.r.o.
      </footer>
    </div>
  );
}
