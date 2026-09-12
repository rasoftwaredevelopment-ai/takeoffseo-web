import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";
import {
  brand,
  homeCopy,
  poolLandscapeCopy,
  poolLandscapeFaqs,
  routes,
  seqSituations,
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
            <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
              {homeCopy.secondaryCta}
            </a>
          </div>
        </PageHero>
      </PageBand>

      <section className="section-band section-band--paper">
      <div className="section-inner">
        <section>
          <h2 className="section-h2">
            How SEQ buyers decide
          </h2>
          <p className="section-lede">
            Start with a free Snapshot on your name. Further work is quoted in a
            proposal if it is useful.
          </p>
          <div className="chapter-list">
            {seqSituations.map((item) => (
              <article key={item.title} className="chapter-row">
                <h3 className="chapter-h3">{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <FaqList items={poolLandscapeFaqs} title="Pool and landscape questions" />

        <CtaBand />
      </div>
      </section>
    </div>
  );
}
