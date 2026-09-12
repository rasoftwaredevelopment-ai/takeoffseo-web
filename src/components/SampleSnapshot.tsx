import { ButtonLink } from "@/components/ButtonLink";
import { homeCopy, routes, sampleSnapshot } from "@/lib/site";

type SampleSnapshotProps = {
  showCta?: boolean;
};

export function SampleSnapshot({ showCta = true }: SampleSnapshotProps) {
  return (
    <section className="card mt-12 overflow-hidden">
      <div className="border-b border-line bg-paper-200/60 px-5 py-3 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
          {sampleSnapshot.label}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-serif text-2xl text-navy">
          Sample Snapshot · {sampleSnapshot.business}
        </h3>
        <p className="mt-2 text-sm text-ink-muted">{sampleSnapshot.note}</p>
        <table className="mt-5 w-full text-left text-sm">
          <caption className="sr-only">
            Example Snapshot readout for {sampleSnapshot.business} —
            illustrative only
          </caption>
          <thead>
            <tr className="border-b border-line text-ink-soft">
              <th className="py-2 pr-3 font-medium">Buyer prompt</th>
              <th className="py-2 font-medium">Mention / cite / none</th>
            </tr>
          </thead>
          <tbody>
            {sampleSnapshot.prompts.map((row) => (
              <tr key={row.prompt} className="border-b border-line/70">
                <td className="py-2.5 pr-3 text-ink">{row.prompt}</td>
                <td className="py-2.5 font-medium text-navy">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-sm text-ink-muted">
          <span className="font-medium text-navy">Maps: </span>
          {sampleSnapshot.maps}
        </p>
        <p className="mt-4 font-serif text-xl text-navy">
          {sampleSnapshot.readout}
        </p>
        {showCta ? (
          <div className="mt-6">
            <ButtonLink href={routes.snapshotEnquire}>
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}
