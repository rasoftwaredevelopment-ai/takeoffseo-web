import { workSurfaces } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function ServiceCards() {
  return (
    <section aria-labelledby="surfaces-heading" className="mt-20">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          The work
        </p>
        <h2
          id="surfaces-heading"
          className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
        >
          Google, Maps, and AI answers
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Same fundamentals across Search, Maps, and AI answers.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {workSurfaces.map((surface, index) => (
          <Reveal
            as="article"
            key={surface.title}
            delayMs={index * 40}
            className="card-hover p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-serif text-2xl text-navy">
              {surface.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">{surface.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
