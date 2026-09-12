import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { ClarityPathDiagram } from "@/components/ClarityPathDiagram";
import { HowWeWorkDiagram } from "@/components/HowWeWorkDiagram";
import { Reveal } from "@/components/Reveal";
import { SampleSnapshot } from "@/components/SampleSnapshot";
import { WhereJobsDecided } from "@/components/WhereJobsDecided";
import { brand, homeCopy, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} | ${brand.h1}` },
  description: brand.tagline,
  alternates: { canonical: routes.home },
};

export default function HomePage() {
  return (
    <div>
      <section className="hero-grid bg-navy text-paper-50">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-24">
          <div className="hero-stagger max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {homeCopy.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-display">{homeCopy.h1}</h1>
            <p className="mt-6 text-lg leading-relaxed text-paper-200 sm:text-xl">
              {homeCopy.lede}
            </p>
            <p className="mt-4 text-base text-paper-300">
              {homeCopy.locationLine}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
                {homeCopy.primaryCta}
              </ButtonLink>
              <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
                {homeCopy.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <section aria-labelledby="what-visibility-heading">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              What this is
            </p>
            <h2
              id="what-visibility-heading"
              className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
            >
              What Google + AI visibility is
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {homeCopy.seoPlain}
            </p>
          </Reveal>
          <WhereJobsDecided />
          <div className="mt-8">
            <ButtonLink href={routes.snapshotEnquire}>
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
        </section>

        <section aria-labelledby="how-takeoff-heading" className="mt-20">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              How we work
            </p>
            <h2
              id="how-takeoff-heading"
              className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
            >
              How Takeoff helps businesses take off
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {homeCopy.takeoffHelp}
            </p>
          </Reveal>
          <ClarityPathDiagram />
          <HowWeWorkDiagram />
          <SampleSnapshot />
          <div className="mt-8">
            <ButtonLink href={routes.snapshotEnquire}>
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
        </section>

        <section aria-labelledby="who-heading" className="mt-20">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Who I am
            </p>
            <h2
              id="who-heading"
              className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
            >
              {brand.founder}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              {homeCopy.whoTeaser}
            </p>
            <p className="mt-6">
              <Link
                href={routes.about}
                className="font-medium text-navy underline underline-offset-4"
              >
                About TakeoffSEO
              </Link>
            </p>
          </Reveal>
        </section>

        <CtaBand />
      </div>
    </div>
  );
}
