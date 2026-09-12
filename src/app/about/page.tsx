import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/schema";
import { aboutCopy, brand, homeCopy, offers, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About TakeoffSEO | Gold Coast, QLD" },
  description: aboutCopy.lede,
  alternates: { canonical: routes.about },
};

export default function AboutPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "About", path: routes.about },
        ])}
      />
      <PageBand>
        <PageHero
          eyebrow={`${brand.locationLabel} · ${brand.areaServed}`}
          title={aboutCopy.title}
          lede={aboutCopy.lede}
          tone="dark"
        />
      </PageBand>

      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="space-y-6 leading-relaxed text-ink-muted lg:col-span-2">
            <p>{aboutCopy.founderLine}</p>
            <p>{aboutCopy.path}</p>
            <p>{aboutCopy.marketing}</p>
            <p>{aboutCopy.websiteSeo}</p>
            <p>
              Hours are {brand.hours.toLowerCase()}. Call{" "}
              <a
                className="font-medium text-navy underline"
                href={`tel:${brand.phoneTel}`}
              >
                {brand.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a
                className="font-medium text-navy underline"
                href={`mailto:${brand.email}`}
              >
                {brand.email}
              </a>
              . ABN {brand.abn} until the number is set.
            </p>
          </article>
          <aside className="card h-fit p-6">
            <h2 className="font-serif text-2xl text-navy">At a glance</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-ink-soft">Founder</dt>
                <dd className="font-medium text-navy">{brand.founder}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">Based</dt>
                <dd className="font-medium text-navy">{brand.locationLabel}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">Area served</dt>
                <dd className="font-medium text-navy">{brand.areaServed}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">Hours</dt>
                <dd className="font-medium text-navy">{brand.hours}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">Delivery</dt>
                <dd className="font-medium text-navy">
                  Local SEO and GEO where it’s a fit
                </dd>
              </div>
              <div>
                <dt className="text-ink-soft">Marketing</dt>
                <dd className="font-medium text-navy">
                  Pool & landscape first
                </dd>
              </div>
            </dl>
          </aside>
        </div>

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
