import { processSteps } from "@/lib/site";

export function ProcessFrame() {
  return (
    <section aria-labelledby="process-heading" className="mt-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          How the work runs
        </p>
        <h2
          id="process-heading"
          className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
        >
          Audit, implement, measure
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          The work happens on your website and Google Business Profile — not a
          hosted AI page we own.
        </p>
      </div>
      <ol className="stagger mt-10 grid gap-4 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <li
            key={step.title}
            className="card-hover relative overflow-hidden p-7"
          >
            <p className="font-serif text-5xl leading-none text-copper/80">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-6 font-serif text-3xl text-navy">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
