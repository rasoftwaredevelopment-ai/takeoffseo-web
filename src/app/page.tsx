import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { OfferPath } from "@/components/OfferPath";
import { ProcessFrame } from "@/components/ProcessFrame";
import { ServiceCards } from "@/components/ServiceCards";
import { VerticalTeaser } from "@/components/VerticalTeaser";
import { WillWont } from "@/components/WillWont";
import { brand, homeCopy, offers, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} | ${brand.h1}` },
  description: brand.tagline,
  alternates: { canonical: routes.home },
};

export default function HomePage() {
  return (
    <div>
      <section className="hero-grid bg-navy text-paper-50">
        <div className="mx-auto grid max-w-site gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {homeCopy.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-display">{homeCopy.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-200 sm:text-xl">
              {homeCopy.lede}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routes.contact} variant="inverseSolid">
                Book a free Visibility Snapshot
              </ButtonLink>
              <ButtonLink href={offers.audit.href} variant="inverse">
                See the A$1,500 audit
              </ButtonLink>
            </div>
          </div>
          <aside className="rounded-sm border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
              The path
            </p>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-paper-200">
              <li>
                <span className="font-serif text-xl text-paper-50">01</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  Snapshot, free.
                </span>
                A short look at how you appear today.
              </li>
              <li>
                <span className="font-serif text-xl text-paper-50">02</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  Audit, A$1,500.
                </span>
                Baseline, prioritised fix pack, next step.
              </li>
              <li>
                <span className="font-serif text-xl text-paper-50">03</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  90-Day Foundation, typical A$6,500.
                </span>
                From A$4,500. Implement and measure.
              </li>
              <li>
                <span className="font-serif text-xl text-paper-50">04</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  Retainer, from A$2,000–2,500/mo.
                </span>
                Ongoing work after the foundation.
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <OfferPath />
        <WillWont />
        <ProcessFrame />
        <ServiceCards />
        <VerticalTeaser />
        <CtaBand
          title="Request a Visibility Snapshot"
          body="Send the website and Google Business Profile. We will come back with a short written look and whether an audit is the useful next step."
          secondaryHref={offers.audit.href}
          secondaryLabel="See the A$1,500 audit"
        />
      </div>
    </div>
  );
}
