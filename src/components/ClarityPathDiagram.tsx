import { ButtonLink } from "@/components/ButtonLink";
import {
  clarityPathCaption,
  clarityPathSteps,
  homeCopy,
  routes,
} from "@/lib/site";

type ClarityPathDiagramProps = {
  showCta?: boolean;
};

export function ClarityPathDiagram({
  showCta = true,
}: ClarityPathDiagramProps) {
  return (
    <figure className="mt-10">
      <p className="font-serif text-2xl text-navy">How we work</p>
      <div
        className="mt-4 grid gap-3 md:grid-cols-4"
        role="img"
        aria-label="How we work: Free Snapshot, then Audit after Snapshot priced in proposal, Foundation, and Retainer. Start free. Paid work quoted after Snapshot — case by case."
      >
        {clarityPathSteps.map((step) => (
          <div key={step.name} className="card p-5">
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
      {showCta ? (
        <div className="mt-6">
          <ButtonLink href={routes.snapshotEnquire}>
            {homeCopy.primaryCta}
          </ButtonLink>
        </div>
      ) : null}
    </figure>
  );
}
