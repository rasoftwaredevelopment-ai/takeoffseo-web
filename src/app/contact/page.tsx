import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { JsonLd } from "@/components/JsonLd";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/schema";
import { brand, contactCopy, homeCopy, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactCopy.lede,
  alternates: { canonical: routes.contact },
};

export default function ContactPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Contact", path: routes.contact },
        ])}
      />
      <PageBand>
        <PageHero
          eyebrow="By appointment"
          title={contactCopy.title}
          lede={`${contactCopy.lede} ${contactCopy.locationLine}`}
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
        <div className="max-w-xl rounded-md border border-line bg-paper-50 p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-navy">Direct</h2>
          <dl className="mt-5 space-y-5 text-sm">
            <div>
              <dt className="text-ink-soft">Phone</dt>
              <dd>
                <a
                  className="text-lg font-medium text-navy"
                  href={`tel:${brand.phoneTel}`}
                >
                  {brand.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-soft">Email</dt>
              <dd>
                <a
                  className="text-lg font-medium text-navy"
                  href={`mailto:${brand.email}`}
                >
                  {brand.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-soft">Hours</dt>
              <dd className="font-medium text-navy">{brand.hours}</dd>
            </div>
            <div>
              <dt className="text-ink-soft">Area served</dt>
              <dd className="font-medium text-navy">{brand.areaServed}</dd>
            </div>
          </dl>
        </div>
      </div>
      </section>
    </div>
  );
}
