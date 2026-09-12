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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
            <p className="text-sm text-paper-200 sm:text-base">
              <a href={`tel:${brand.phoneTel}`} className="hover:text-paper-50">
                {brand.phoneDisplay}
              </a>
              {" · "}
              <a href={`mailto:${brand.email}`} className="hover:text-paper-50">
                {brand.email}
              </a>
            </p>
          </div>
        </PageHero>
      </PageBand>

      <section className="section-band section-band--paper">
        <div className="section-inner">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="section-h2">Who Alexander is</h2>
              <div className="chapter-list">
                <article className="chapter-row">
                  <h3 className="chapter-h3">How I work</h3>
                  <p>{aboutCopy.howIWork}</p>
                </article>
                <article className="chapter-row">
                  <h3 className="chapter-h3">Why this</h3>
                  <p>{aboutCopy.whyThis}</p>
                </article>
                <article className="chapter-row">
                  <h3 className="chapter-h3">Honest proof</h3>
                  <p>{aboutCopy.proof}</p>
                </article>
              </div>
              <p className="section-close">
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
              <div className="mt-8">
                <ButtonLink href={routes.snapshotEnquire}>
                  {homeCopy.primaryCta}
                </ButtonLink>
              </div>
            </div>
            <aside className="h-fit rounded-md bg-navy p-6 text-paper-50 lg:mt-16">
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                  <path
                    d="M4 16.5 12 5.5 20 16.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path d="M8 16.5h8" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl leading-tight">Who I am</h2>
              <p className="mt-2 text-sm text-paper-200">{aboutCopy.photoNote}</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-paper-300">Founder</dt>
                  <dd className="font-medium">{brand.founder}</dd>
                </div>
                <div>
                  <dt className="text-paper-300">Based</dt>
                  <dd className="font-medium">{brand.locationLabel}</dd>
                </div>
                <div>
                  <dt className="text-paper-300">Area served</dt>
                  <dd className="font-medium">{brand.areaServed}</dd>
                </div>
                <div>
                  <dt className="text-paper-300">Hours</dt>
                  <dd className="font-medium">{brand.hours}</dd>
                </div>
                <div>
                  <dt className="text-paper-300">Delivery</dt>
                  <dd className="font-medium">{aboutCopy.delivery}</dd>
                </div>
              </dl>
            </aside>
          </div>

          <SampleSnapshot />
          <SampleAuditPriorities />

          <CtaBand />
        </div>
      </section>
    </div>
  );
}
