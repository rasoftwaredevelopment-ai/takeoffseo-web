import { ButtonLink } from "@/components/ButtonLink";
import { MediaPhoto } from "@/components/MediaPhoto";
import { Reveal } from "@/components/Reveal";
import { homeCopy, snapshotDoor } from "@/lib/home";
import { brand, routes } from "@/lib/site";

export function SnapshotDoor() {
  return (
    <section id="snapshot" className="bg-paper-50">
      <div className="mx-auto grid max-w-site items-stretch lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="px-4 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {snapshotDoor.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
              {snapshotDoor.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              {snapshotDoor.lede}
            </p>
            <ul className="mt-10 space-y-4">
              {snapshotDoor.youGet.map((item) => (
                <li key={item} className="flex gap-3 text-ink-muted">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-forest" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routes.snapshot}>
                {homeCopy.primaryCta}
              </ButtonLink>
              <a href={`tel:${brand.phoneTel}`} className="btn-secondary">
                {homeCopy.phoneCta}
              </a>
            </div>
            <p className="mt-5 text-sm text-ink-soft">
              Or email{" "}
              <a className="font-medium text-navy underline" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
              {" · "}
              <a className="font-medium text-navy underline" href={routes.contact}>
                Enquire on the form
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="relative min-h-[22rem] bg-navy lg:min-h-full">
          <MediaPhoto
            photo="house-pool"
            alt="Finished pool and outdoor living — the work a Snapshot is written against"
            className="absolute inset-0"
            imgClassName="h-full w-full object-cover opacity-50"
          />
          <div className="relative z-10 flex h-full items-center px-4 py-12 sm:px-8">
            <Reveal className="w-full rounded-sm border border-white/15 bg-navy/80 p-6 text-paper-50 backdrop-blur-sm sm:p-8">
              <p className="inline-block bg-copper px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                {snapshotDoor.exampleLabel}
              </p>
              <h3 className="mt-4 font-serif text-2xl sm:text-3xl">
                {snapshotDoor.exampleTitle}
              </h3>
              <p className="mt-3 text-sm text-paper-200">
                {snapshotDoor.exampleBusiness} · {snapshotDoor.exampleArea}
              </p>
              <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                {snapshotDoor.exampleRows.map((row) => (
                  <div key={row.surface}>
                    <dt className="font-semibold text-paper-50">{row.surface}</dt>
                    <dd className="mt-1 text-paper-200">{row.note}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-paper-300">
                {snapshotDoor.exampleFoot}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
