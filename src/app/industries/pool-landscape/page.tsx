import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { OfferPath } from "@/components/OfferPath";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import {
  brand,
  offers,
  poolLandscapeCopy,
  poolLandscapeFaqs,
  routes,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Pool builders and landscapers",
  description: poolLandscapeCopy.lede,
  alternates: { canonical: routes.poolLandscape },
};

export default function PoolLandscapePage() {
  return (
    <div>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: routes.home },
            { name: "Industries", path: routes.poolLandscape },
            { name: "Pool & landscape", path: routes.poolLandscape },
          ]),
          faqJsonLd(poolLandscapeFaqs),
        ]}
      />
      <PageBand>
        <PageHero
          eyebrow={poolLandscapeCopy.eyebrow}
          title={poolLandscapeCopy.h1}
          lede={poolLandscapeCopy.lede}
          tone="dark"
        >
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={routes.contact} variant="inverseSolid">
              Book a free Visibility Snapshot
            </ButtonLink>
            <ButtonLink href={offers.audit.href} variant="inverse">
              See the A$1,500 audit
            </ButtonLink>
          </div>
        </PageHero>
      </PageBand>

      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <section className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Same offer path, written for this trade
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Delivery is the same Google and AI visibility work as the rest of{" "}
            {brand.name}. This page exists because marketing is
            vertical-targeted, starting here. Other local businesses stay on the
            general offer and are considered case by case.
          </p>
        </section>

        <div className="mt-12">
          <OfferPath
            heading="Snapshot to retainer"
            lede="The path does not change for pool and landscape companies. Start free. Pay for the audit when the gap is clear."
          />
        </div>

        <FaqList items={poolLandscapeFaqs} title="Pool and landscape questions" />

        <CtaBand
          title="Start with a Snapshot"
          body="Send the website and Google Business Profile. We will come back with a short written look and whether the A$1,500 audit is the useful next step."
          secondaryHref={offers.audit.href}
          secondaryLabel="See the A$1,500 audit"
        />
      </div>
    </div>
  );
}
