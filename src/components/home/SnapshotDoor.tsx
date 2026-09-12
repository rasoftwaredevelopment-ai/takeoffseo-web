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
      photo="lodge-pool"
      photoAlt="Still water at dusk — the work a Snapshot is written against"
      size="full"
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            What you get
          </p>
          <ul className="mt-6 space-y-5">
            {snapshotDoor.youGet.map((item) => (
              <li
                key={item}
                className="border-t border-white/15 pt-5 text-lg leading-relaxed text-paper-50 sm:text-xl"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={routes.snapshot} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
            <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
              {homeCopy.phoneCta}
            </a>
          </div>
          <p className="mt-6 text-sm text-paper-300">
            Or email{" "}
            <a
              className="font-medium text-paper-50 underline"
              href={`mailto:${brand.email}`}
            >
              {brand.email}
            </a>
            {" · "}
            <a
              className="font-medium text-paper-50 underline"
              href={routes.contact}
            >
              Enquire on the form
            </a>
            .
          </p>
        </div>

        <aside>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            {snapshotDoor.exampleLabel}
          </p>
          <h3 className="mt-4 font-serif text-4xl text-paper-50 sm:text-5xl">
            {snapshotDoor.exampleTitle}
          </h3>
          <p className="mt-4 text-lg text-paper-200">
            {snapshotDoor.exampleBusiness} · {snapshotDoor.exampleArea}
          </p>
          <dl className="mt-8 space-y-6">
            {snapshotDoor.exampleRows.map((row) => (
              <div key={row.surface} className="border-t border-white/15 pt-5">
                <dt className="font-serif text-2xl text-paper-50 sm:text-3xl">
                  {row.surface}
                </dt>
                <dd className="mt-2 text-lg leading-relaxed text-paper-100">
                  {row.note}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-base leading-relaxed text-paper-300">
            {snapshotDoor.exampleFoot}
          </p>
        </aside>
      </div>
    </CinematicBand>
  );
}
