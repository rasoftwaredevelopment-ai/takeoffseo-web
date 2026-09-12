import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/schema";
import { brand, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About TakeoffSEO | Gold Coast, QLD" },
  description: `About ${brand.name}, a Gold Coast practice helping pool builders and landscapers across South East Queensland with Google and AI visibility.`,
  alternates: { canonical: routes.about },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "About", path: routes.about },
        ])}
      />
      <PageHero
        eyebrow={`${brand.locationLabel} · Service area: ${brand.areaServed}`}
        title="About TakeoffSEO"
        lede={`${brand.name} is a Gold Coast SEO practice founded by ${brand.founder}. We help pool builders and landscapers across South East Queensland show up in Google Search, Maps, and AI answers — and we take other local service businesses case by case.`}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <article className="lg:col-span-2 space-y-6 text-ink-muted leading-relaxed">
          <p>
            The work is unglamorous on purpose. Listings that match the
            business. Pages that answer the jobs people actually search for.
            Technical issues that stop Google (and the systems that read Google)
            from understanding the company. Measurement that does not pretend a
            ranking can be guaranteed.
          </p>
          <p>
            {brand.founder} started {brand.name} to do that work for SEQ
            outdoor-living trades first: pool builders and landscapers whose
            next job often starts with a map pack, a website, or an AI answer —
            not a national brand campaign.
          </p>
          <p>
            We are a service-area practice. There is no public street address
            and no invented list of suburbs. If you trade in South East
            Queensland and the work is a fit, we will say so. If it is not, we
            will say that too, without a theatrical “won’t serve” page.
          </p>
          <p>
            Hours are {brand.hours.toLowerCase()}. Call{" "}
            <a className="font-medium text-navy underline" href={`tel:${brand.phoneTel}`}>
              {brand.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a className="font-medium text-navy underline" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            . ABN {brand.abn} until the number is set.
          </p>
        </article>
        <aside className="h-fit rounded-sm border border-line bg-paper-50 p-6 shadow-card">
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
          </dl>
          <Link
            href={routes.contact}
            className="mt-6 inline-flex text-sm font-semibold text-forest underline-offset-4 hover:underline"
          >
            Contact {brand.name}
          </Link>
        </aside>
      </div>

      <CtaBand
        title="Start with a Snapshot"
        body="If you are a pool builder or landscaper in SEQ — or another local service business we should consider — send the site and we will tell you whether an audit is useful."
      />
    </div>
  );
}
