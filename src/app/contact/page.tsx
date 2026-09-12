import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/schema";
import { brand, contactCopy, routes } from "@/lib/site";

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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
          <PageHero
            eyebrow={contactCopy.eyebrow}
            title={contactCopy.title}
            lede={contactCopy.lede}
            tone="dark"
          />
          <EnquiryForm intent="snapshot" id="enquire" />
        </div>
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
            <p className="mt-6 text-sm text-ink-muted">{contactCopy.locationLine}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
