import { ButtonLink } from "@/components/ButtonLink";
import { homeCopy, routes, sampleAudit } from "@/lib/site";

export function SampleAuditPriorities() {
  return (
    <section className="artefact" aria-labelledby="sample-audit-heading">
      <p className="section-eyebrow">{sampleAudit.label}</p>
      <h3 id="sample-audit-heading" className="chapter-h3 mt-3">
        Sample Audit fix map
      </h3>
      <p className="mt-2 text-base leading-relaxed text-ink-muted">
        {sampleAudit.intro}
      </p>
      <div className="chapter-list">
        {sampleAudit.priorities.map((row) => (
          <article key={row.item} className="chapter-row">
            <h3 className="chapter-h3">{row.band}</h3>
            <p>{row.item}</p>
          </article>
        ))}
        <article className="chapter-row">
          <h3 className="chapter-h3">Next</h3>
          <p>{sampleAudit.nextStep}</p>
        </article>
      </div>
      <div className="mt-8">
        <ButtonLink href={routes.snapshotEnquire}>
          {homeCopy.primaryCta}
        </ButtonLink>
      </div>
    </section>
  );
}
