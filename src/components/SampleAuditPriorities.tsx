import { ButtonLink } from "@/components/ButtonLink";
import { homeCopy, routes, sampleAudit } from "@/lib/site";

export function SampleAuditPriorities() {
  return (
    <section className="card mt-12 overflow-hidden">
      <div className="border-b border-line bg-paper-200/60 px-5 py-3 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
          {sampleAudit.label}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-2xl text-navy">Sample Audit fix map</h3>
        <p className="mt-2 text-sm text-ink-muted">{sampleAudit.intro}</p>
        <ol className="mt-5 space-y-3">
          {sampleAudit.priorities.map((row, index) => (
            <li key={row.item} className="flex gap-3">
              <span className="font-serif text-xl text-copper">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {row.band}
                </span>
                <span className="mt-1 block text-ink">{row.item}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm font-medium text-navy">{sampleAudit.nextStep}</p>
        <div className="mt-6">
          <ButtonLink href={routes.snapshotEnquire}>
            {homeCopy.primaryCta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
