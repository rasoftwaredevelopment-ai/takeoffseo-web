import {
  clarityPathCaption,
  clarityPathSteps,
} from "@/lib/site";

export function ClarityPathDiagram() {
  return (
    <figure className="mt-10">
      <h3 className="font-serif text-2xl text-navy">How we work</h3>
      <div
        className="mt-4 grid gap-3 md:grid-cols-4"
        role="img"
        aria-label="How Takeoff helps: free Visibility Snapshot first, then Audit, Foundation, or Retainer quoted after Snapshot — case by case"
      >
        {clarityPathSteps.map((step, index) => (
          <div key={step.name} className="card relative p-5">
            {index > 0 ? (
              <span
                aria-hidden
                className="absolute -left-2 top-6 hidden text-copper md:block"
              >
                →
              </span>
            ) : null}
            <p className="font-serif text-xl text-navy">{step.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {step.line}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-ink-muted">
        {clarityPathCaption}
      </figcaption>
    </figure>
  );
}
