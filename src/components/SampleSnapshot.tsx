import { ButtonLink } from "@/components/ButtonLink";
import { routes, sampleSnapshot } from "@/lib/site";

export function SampleSnapshot() {
  return (
    <section className="artefact" aria-labelledby="sample-snapshot-heading">
      <p className="section-eyebrow">{sampleSnapshot.label}</p>
      <h3 id="sample-snapshot-heading" className="chapter-h3 mt-3">
        Sample Snapshot · {sampleSnapshot.business}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-ink-muted">
        {sampleSnapshot.note}
      </p>
      <table className="mt-6 w-full text-left text-base">
        <caption className="sr-only">
          Example Snapshot readout for {sampleSnapshot.business} —
          illustrative only
        </caption>
        <thead>
          <tr className="border-b border-line text-ink-soft">
            <th className="py-2.5 pr-3 font-medium">Buyer prompt</th>
            <th className="py-2.5 font-medium">Mention / cite / none</th>
          </tr>
        </thead>
        <tbody>
          {sampleSnapshot.prompts.map((row) => (
            <tr key={row.prompt} className="border-b border-line">
              <td className="py-3 pr-3 text-ink">{row.prompt}</td>
              <td className="py-3 font-semibold text-navy">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="chapter-list">
        <article className="chapter-row">
          <h3 className="chapter-h3">Maps</h3>
          <p>{sampleSnapshot.maps}</p>
        </article>
        <article className="chapter-row">
          <h3 className="chapter-h3">Readout</h3>
          <p>{sampleSnapshot.readout}</p>
        </article>
        <article className="chapter-row">
          <h3 className="chapter-h3">Next</h3>
          <p>{sampleSnapshot.next}</p>
        </article>
      </div>
      <div className="mt-8">
        <ButtonLink href={routes.snapshotEnquire}>
          {sampleSnapshot.nextCta}
        </ButtonLink>
      </div>
    </section>
  );
}
