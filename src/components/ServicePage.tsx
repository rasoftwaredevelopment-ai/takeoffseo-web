import type { ReactNode } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { FaqItem, Offer } from "@/lib/site";
import { brand, offers, routes } from "@/lib/site";

type ServicePageProps = {
  offer: Offer;
  title: string;
  lede: string;
  includes: string[];
  process: { title: string; body: string }[];
  faqs: FaqItem[];
  extras?: ReactNode;
};

export function ServicePage({
  offer,
  title,
  lede,
  includes,
  process,
  faqs,
  extras,
}: ServicePageProps) {
  const isSnapshot = offer.id === "snapshot";

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: routes.home },
            { name: offer.name, path: offer.href },
          ]),
          serviceJsonLd({
            name: offer.name,
            description: offer.summary,
            path: offer.href,
          }),
          faqJsonLd(faqs),
        ]}
      />
      <PageBand>
        {isSnapshot ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
            <PageHero eyebrow={offer.eyebrow} title={title} lede={lede} tone="dark">
              <p className="mt-6 text-2xl font-semibold text-copper">
                {offer.priceLabel}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#enquire" variant="inverseSolid">
                  Enquire for a Snapshot
                </ButtonLink>
                <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
                  Call {brand.phoneDisplay}
                </a>
              </div>
            </PageHero>
            <EnquiryForm intent="snapshot" id="enquire" />
          </div>
        ) : (
          <PageHero eyebrow={offer.eyebrow} title={title} lede={lede} tone="dark">
            <p className="mt-6 text-2xl font-semibold text-copper">
              {offer.priceLabel}
              {offer.priceNote ? (
                <span className="ml-2 text-base font-normal text-paper-200">
                  {offer.priceNote}
                </span>
              ) : null}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
                Get a free Snapshot
              </ButtonLink>
              <ButtonLink href={routes.contactEnquire} variant="inverse">
                Enquire
              </ButtonLink>
            </div>
          </PageHero>
        )}
      </PageBand>

      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              What you get
            </h2>
            <ul className="mt-6 space-y-4 leading-relaxed text-ink-muted">
              {includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-2 w-2 shrink-0 bg-forest"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              How it runs
            </h2>
            <ol className="mt-6 space-y-5">
              {process.map((step, index) => (
                <li key={step.title}>
                  <p className="font-serif text-2xl text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-medium text-navy">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {extras}

        <FaqList items={faqs} />

        <p className="mt-10 text-sm text-ink-soft">
          Looking for another offer?{" "}
          <Link href={routes.home} className="font-medium text-navy underline">
            Back to the path
          </Link>
          {" · "}
          <Link
            href={offers.audit.href}
            className="font-medium text-navy underline"
          >
            Visibility Audit
          </Link>
          .
        </p>

        <CtaBand
          title={`Enquire about the ${offer.name}`}
          body="Send the website and Google Business Profile. We confirm scope and timing by appointment."
          secondaryHref={isSnapshot ? offers.audit.href : routes.contactEnquire}
          secondaryLabel={isSnapshot ? "See the Visibility Audit" : "Contact"}
        />
      </div>
    </div>
  );
}
