import { ButtonLink } from "@/components/ButtonLink";
import {
  clarityPathCaption,
  clarityPathSteps,
  homeCopy,
  routes,
} from "@/lib/site";

export function ClarityPathDiagram() {
  return (
    <figure className="mt-10">
      <div
        className="grid gap-3 md:grid-cols-4"
        role="img"
        aria-label="Snapshot to Audit to Foundation path: free Snapshot, then Audit, Foundation, or Retainer quoted after Snapshot"
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
      <div className="mt-6">
        <ButtonLink href={routes.snapshotEnquire}>
          {homeCopy.primaryCta}
        </ButtonLink>
      </div>
    </figure>
  );
}
