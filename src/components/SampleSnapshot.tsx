import { ButtonLink } from "@/components/ButtonLink";
import { routes, sampleSnapshot } from "@/lib/site";

const statusClass: Record<string, string> = {
  Visible: "dash__chip dash__chip--visible",
  Mention: "dash__chip dash__chip--mention",
  Cite: "dash__chip dash__chip--cite",
  None: "dash__chip dash__chip--none",
  Weak: "dash__chip dash__chip--weak",
};

function mentionCounts() {
  const mention = sampleSnapshot.prompts.filter(
    (row) => row.status !== "None",
  ).length;
  const none = sampleSnapshot.prompts.length - mention;
  return { mention, none, total: sampleSnapshot.prompts.length };
}

export function SampleSnapshot() {
  const counts = mentionCounts();
  const mentionDeg = (counts.mention / counts.total) * 360;
  const mapsFill = 16;

  return (
    <section className="dash" aria-labelledby="sample-snapshot-heading">
      <p className="dash__label">{sampleSnapshot.label}</p>
      <h3 id="sample-snapshot-heading" className="dash__title">
        Sample Snapshot · {sampleSnapshot.business}
      </h3>
      <p className="dash__note">{sampleSnapshot.note}</p>

      <ul className="dash__legend" aria-label="Example status key">
        {sampleSnapshot.statusLegend.map((status) => (
          <li key={status}>
            <span className={statusClass[status]}>{status}</span>
          </li>
        ))}
      </ul>

      <div className="dash__grid">
        <article className="dash__panel">
          <p className="dash__chart-label">Example only · mention vs none</p>
          <div className="dash__donut-wrap">
            <div
              className="dash__donut"
              style={{
                background: `conic-gradient(#1a6a48 0deg ${mentionDeg}deg, rgba(255,253,248,0.16) ${mentionDeg}deg 360deg)`,
              }}
              aria-hidden
            >
              <span className="dash__donut-hole">
                <strong>{counts.mention}</strong>
                <em>mention</em>
              </span>
            </div>
            <ul className="dash__stat-list">
              <li>
                <span className="dash__swatch dash__swatch--mention" />
                Mention {counts.mention} of {counts.total}
              </li>
              <li>
                <span className="dash__swatch dash__swatch--none" />
                None {counts.none} of {counts.total}
              </li>
            </ul>
          </div>
        </article>

        <article className="dash__panel">
          <p className="dash__chart-label">Example only · Maps strength</p>
          <p className="dash__meter-label">
            <span>Google Maps / Business Profile</span>
            <span className="dash__chip dash__chip--none">None</span>
          </p>
          <div
            className="dash__meter"
            role="img"
            aria-label={`Example Maps strength: ${mapsFill} percent, status None`}
          >
            <span className="dash__meter-fill" style={{ width: `${mapsFill}%` }} />
          </div>
          <p className="dash__panel-copy">{sampleSnapshot.maps}</p>
        </article>

        <article className="dash__panel dash__panel--wide">
          <p className="dash__chart-label">Example only · buyer prompts</p>
          <table className="dash__table">
            <caption className="sr-only">
              Example Snapshot readout for {sampleSnapshot.business} —
              illustrative only
            </caption>
            <thead>
              <tr>
                <th>Buyer prompt</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleSnapshot.prompts.map((row) => (
                <tr key={row.prompt}>
                  <td>{row.prompt}</td>
                  <td>
                    <span className={statusClass[row.status]}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="dash__panel dash__panel--wide">
          <p className="dash__chart-label">
            Example only · AI surfaces a Snapshot checks
          </p>
          <ul className="dash__surfaces">
            {sampleSnapshot.surfaces.map((surface) => (
              <li key={surface}>
                <span>{surface}</span>
                <span className="dash__dots" aria-label="Example prompt statuses">
                  {sampleSnapshot.prompts.map((row) => (
                    <i
                      key={`${surface}-${row.prompt}`}
                      className={`dash__dot dash__dot--${row.status.toLowerCase()}`}
                      title={`${row.prompt}: ${row.status}`}
                    />
                  ))}
                </span>
              </li>
            ))}
          </ul>
          <p className="dash__panel-copy">
            Dots repeat the example prompt statuses — not separate per-surface
            rankings.
          </p>
        </article>
      </div>

      <div className="dash__readout">
        <p className="dash__readout-kicker">Example readout</p>
        <p className="dash__readout-lead">{sampleSnapshot.readout}</p>
        <p>{sampleSnapshot.poolNote}</p>
        <p>{sampleSnapshot.afterNote}</p>
      </div>

      <div className="dash__actions">
        <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
          {sampleSnapshot.nextCta}
        </ButtonLink>
      </div>
    </section>
  );
}
