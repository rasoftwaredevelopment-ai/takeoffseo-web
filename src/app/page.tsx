import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SampleSnapshot } from "@/components/SampleSnapshot";
import { TeachingDiagram } from "@/components/TeachingDiagram";
import { brand, homeCopy, homeDiagrams, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} | ${brand.h1}` },
  description: brand.tagline,
  alternates: { canonical: routes.home },
};

export default function HomePage() {
  return (
    <div>
      <section
        aria-labelledby="visibility-heading"
        className="hero-grid bg-navy text-paper-50"
      >
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-24">
          <div className="hero-stagger max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {homeCopy.takeoffHook}
            </p>
            <h1
              id="visibility-heading"
              className="mt-5 font-serif text-display"
            >
              {homeCopy.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-paper-200 sm:text-xl">
              {homeCopy.lede}
            </p>
            <div className="mt-9">
              <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
                {homeCopy.takeoffCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <section aria-labelledby="visibility-heading">
          <Reveal className="max-w-3xl">
            <p className="text-lg leading-relaxed text-ink-muted">
              {homeCopy.whereJobsBody}
            </p>
          </Reveal>
          <TeachingDiagram
            src={homeDiagrams.whereJobs.src}
            alt={homeDiagrams.whereJobs.alt}
            title={homeDiagrams.whereJobs.title}
            caption={homeDiagrams.whereJobs.caption}
            priority
          />
        </section>

        <section aria-labelledby="how-takeoff-heading" className="mt-20">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {homeCopy.howEyebrow}
            </p>
            <h2
              id="how-takeoff-heading"
              className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
            >
              {homeCopy.howTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {homeCopy.takeoffHelp}
            </p>
          </Reveal>
          <TeachingDiagram
            src={homeDiagrams.howTakeoff.src}
            alt={homeDiagrams.howTakeoff.alt}
            title={homeDiagrams.howTakeoff.title}
            caption={homeDiagrams.howTakeoff.caption}
          />
          <div className="mt-8">
            <ButtonLink href={routes.snapshotEnquire}>
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
          <SampleSnapshot showCta={false} />
        </section>

        <CtaBand
          showDoor
          showLocation
          showTalk
          title={homeCopy.homeCloseTitle}
          body={homeCopy.homeCloseBody}
          primaryLabel={homeCopy.takeoffCta}
        />
      </div>
    </div>
  );
}
