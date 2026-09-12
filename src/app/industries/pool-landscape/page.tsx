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
  homeCopy,
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
            <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
            <ButtonLink href={offers.audit.href} variant="inverse">
              {homeCopy.secondaryCta}
            </ButtonLink>
          </div>
        </PageHero>
      </PageBand>

      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <section className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Same Clarity path, written for this trade
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Free Snapshot on your name, then the Audit fix map. Then
            Foundation or Retainer when you’re ready to build.
          </p>
        </section>

        <div className="mt-12">
          <OfferPath
            heading="Snapshot to retainer"
            lede="Free Snapshot, then the Audit fix map, then Foundation or Retainer."
          />
        </div>

        <FaqList items={poolLandscapeFaqs} title="Pool and landscape questions" />

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
