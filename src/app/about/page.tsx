import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { SampleAuditPriorities } from "@/components/SampleAuditPriorities";
import { SampleSnapshot } from "@/components/SampleSnapshot";
import { breadcrumbJsonLd } from "@/lib/schema";
import { aboutCopy, brand, homeCopy, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: aboutCopy.pageTitle },
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
          eyebrow={homeCopy.eyebrow}
          title={aboutCopy.title}
          lede={aboutCopy.lede}
          tone="dark"
        >
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
            <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
              {brand.phoneDisplay}
            </a>
          </div>
        </PageHero>
      </PageBand>

      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="space-y-6 leading-relaxed text-ink-muted lg:col-span-2">
            <p>{aboutCopy.howIWork}</p>
            <p>{aboutCopy.whyThis}</p>
            <p>{aboutCopy.proof}</p>
            <p>
              Call{" "}
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
              . Hours are {brand.hours.toLowerCase()}.
            </p>
          </article>
          <aside className="card h-fit p-6">
            <div
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-sm bg-navy text-paper-50"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
                <path
                  d="M4 16.5 12 5.5 20 16.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path d="M8 16.5h8" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-navy">Who I am</h2>
            <p className="mt-2 text-sm text-ink-muted">{aboutCopy.photoNote}</p>
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
                <dd className="font-medium text-navy">{aboutCopy.delivery}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <SampleSnapshot />
        <SampleAuditPriorities />

        <CtaBand />
      </div>
    </div>
  );
}
