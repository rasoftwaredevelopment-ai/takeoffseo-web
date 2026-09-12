import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { breadcrumbJsonLd } from "@/lib/schema";
import { brand, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${brand.name} in ${brand.locationLabel}. Phone ${brand.phoneDisplay}, email ${brand.email}. Hours ${brand.hours}. Service area: ${brand.areaServed}.`,
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
          title="Contact"
          lede={`Tell us the website and where you trade. We will reply on ${brand.email} or ${brand.phoneDisplay}. Hours are ${brand.hours.toLowerCase()}. Service area is ${brand.areaServed} — we do not publish a street address.`}
          tone="dark"
        />
      </PageBand>

      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <aside className="card h-fit p-6">
            <h2 className="font-serif text-2xl text-navy">Direct</h2>
            <dl className="mt-5 space-y-4 text-sm">
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
              <div>
                <dt className="text-ink-soft">ABN</dt>
                <dd className="font-medium text-navy">{brand.abn}</dd>
              </div>
            </dl>
          </aside>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
