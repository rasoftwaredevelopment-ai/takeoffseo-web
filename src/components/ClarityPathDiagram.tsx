import {
  clarityPathCaption,
  clarityPathSteps,
} from "@/lib/site";

const liftOffset = ["md:mt-10", "md:mt-6", "md:mt-3", "md:mt-0"] as const;

export function ClarityPathDiagram() {
  return (
    <figure className="mt-10">
      <h3 className="font-serif text-2xl text-navy">How we work</h3>
      <div
        className="stagger mt-4 grid gap-3 md:grid-cols-4 md:items-end"
        role="img"
        aria-label="Snapshot to Audit to Foundation path: Free Snapshot — see if buyers can find you; Audit — get the fix map (priced in proposal); 90-Day Foundation — fix site + Google profile; Monthly Retainer — keep it moving (scoped in proposal)"
      >
        {clarityPathSteps.map((step, index) => (
          <div
            key={step.name}
            className={`card-hover relative p-5 ${liftOffset[index]}`}
          >
            {index > 0 ? (
              <span
                aria-hidden
                className="absolute -left-2.5 top-6 hidden text-copper md:block"
              >
                ↗
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
