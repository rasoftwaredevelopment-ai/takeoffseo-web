import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/schema";
import { aboutCopy, brand, offers, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About TakeoffSEO | Gold Coast, QLD" },
  description: `About ${brand.name}: general SEO and GEO delivery for local businesses, with vertical-targeted marketing. Founded by ${brand.founder} on the Gold Coast.`,
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
          eyebrow={`${brand.locationLabel} · Service area: ${brand.areaServed}`}
          title={aboutCopy.title}
          lede={aboutCopy.lede}
          tone="dark"
        />
      </PageBand>

      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="space-y-6 leading-relaxed text-ink-muted lg:col-span-2">
            <p>
              Delivery is general SEO and GEO: Google Search, Maps, and AI-style
              answers for local businesses. Marketing is vertical-targeted. The
              first published vertical is pool builders and landscapers in{" "}
              {brand.areaServed}. Other trades are considered case by case — we
              will not pretend we have a page for every suburb and industry.
            </p>
            <p>
              {brand.founder} founded {brand.name} on the Gold Coast to do that
              work without the usual agency theatre. The work is unglamorous on
              purpose: listings that match the business, pages that answer the
              jobs people search for, and measurement that does not pretend a
              ranking can be guaranteed.
            </p>
            <p>{aboutCopy.honesty}</p>
            <p>
              We are a service-area practice. There is no public street address
              and no invented list of suburbs. If you are a local business and
              the work is a fit, we will say so. If it is not, we will say that
              too.
            </p>
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
                  General SEO and GEO for local businesses
                </dd>
              </div>
              <div>
                <dt className="text-ink-soft">Marketing</dt>
                <dd className="font-medium text-navy">
                  Vertical-targeted — first: pool & landscape
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <CtaBand
          title="Start with a Snapshot"
          body="If you are a local business — including a pool builder or landscaper in SEQ — send the site and we will tell you whether an audit is useful."
          secondaryHref={offers.audit.href}
          secondaryLabel="See the A$1,500 audit"
        />
      </div>
    </div>
  );
}
