import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { OfferPath } from "@/components/OfferPath";
import { ProcessFrame } from "@/components/ProcessFrame";
import { ServiceCards } from "@/components/ServiceCards";
import { VerticalTeaser } from "@/components/VerticalTeaser";
import { WhatYouGet } from "@/components/WhatYouGet";
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
          <div className="hero-stagger">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {homeCopy.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-display">{homeCopy.h1}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-200 sm:text-xl">
              {homeCopy.lede}
            </p>
            <p className="mt-4 max-w-2xl text-base text-paper-300">
              {homeCopy.locationLine}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routes.contact} variant="inverseSolid">
                {homeCopy.primaryCta}
              </ButtonLink>
              <ButtonLink href={offers.audit.href} variant="inverse">
                {homeCopy.secondaryCta}
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
                Snapshot shows the gaps.
              </li>
              <li>
                <span className="font-serif text-xl text-paper-50">02</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  Audit, A$1,500.
                </span>
                Audit maps what to fix first.
              </li>
              <li>
                <span className="font-serif text-xl text-paper-50">03</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  90-Day Foundation, typical A$6,500.
                </span>
                {offers.foundation.summary} {offers.foundation.priceNote}.
              </li>
              <li>
                <span className="font-serif text-xl text-paper-50">04</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  Retainer, from A$2,000–2,500/mo.
                </span>
                {offers.retainer.summary}
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <OfferPath
          heading="The offer path"
          lede="Snapshot shows the gaps. Audit maps what to fix first. Then Foundation or Retainer when you’re ready to build."
        />
        <p className="mt-6 max-w-3xl text-ink-muted">{homeCopy.websiteSeoNote}</p>
        <WhatYouGet />
        <ProcessFrame />
        <ServiceCards />
        <VerticalTeaser />
        <CtaBand
          title={homeCopy.closeTitle}
          body={homeCopy.closeBody}
          primaryLabel={homeCopy.primaryCta}
          secondaryHref={offers.audit.href}
          secondaryLabel={homeCopy.secondaryCta}
        />
      </div>
    </div>
  );
}
