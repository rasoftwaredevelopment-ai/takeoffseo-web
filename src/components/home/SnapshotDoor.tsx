import { ButtonLink } from "@/components/ButtonLink";
import { CinematicBand } from "@/components/home/CinematicBand";
import { homeCopy, snapshotDoor } from "@/lib/home";
import { brand, routes } from "@/lib/site";

export function SnapshotDoor() {
  return (
    <CinematicBand
      id="snapshot"
      kicker={snapshotDoor.eyebrow}
      title={snapshotDoor.title}
      body={snapshotDoor.lede}
      photo="house-pool"
      photoAlt="Finished pool and outdoor living — the work a Snapshot is written against"
      size="full"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-end">
        <div>
          <ul className="space-y-4">
            {snapshotDoor.youGet.map((item) => (
              <li key={item} className="flex gap-3 text-paper-100">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-copper" />
                <span className="text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={routes.snapshot} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
            <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
              {homeCopy.phoneCta}
            </a>
          </div>
          <p className="mt-5 text-sm text-paper-300">
            Or email{" "}
            <a className="font-medium text-paper-50 underline" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            {" · "}
            <a className="font-medium text-paper-50 underline" href={routes.contact}>
              Enquire on the form
            </a>
            .
          </p>
        </div>

        <aside className="rounded-sm border border-white/15 bg-navy/70 p-6 backdrop-blur-sm sm:p-8">
          <p className="inline-block bg-copper px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
            {snapshotDoor.exampleLabel}
          </p>
          <h3 className="mt-4 font-serif text-3xl text-paper-50 sm:text-4xl">
            {snapshotDoor.exampleTitle}
          </h3>
          <p className="mt-3 text-sm text-paper-200">
            {snapshotDoor.exampleBusiness} · {snapshotDoor.exampleArea}
          </p>
          <dl className="mt-6 space-y-5 text-base leading-relaxed">
            {snapshotDoor.exampleRows.map((row) => (
              <div key={row.surface}>
                <dt className="font-semibold text-paper-50">{row.surface}</dt>
                <dd className="mt-1 text-paper-200">{row.note}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-paper-300">
            {snapshotDoor.exampleFoot}
          </p>
        </aside>
      </div>
    </CinematicBand>
  );
}
