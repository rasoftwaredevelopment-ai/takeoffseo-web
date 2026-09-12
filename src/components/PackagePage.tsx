import type { ReactNode } from "react";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { EnquiryForm, type EnquiryFormProps } from "@/components/EnquiryForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { FaqItem, SitePackage } from "@/lib/site";
import { routes } from "@/lib/site";

type PackagePageProps = {
  offer: SitePackage;
  title: string;
  lede: string;
  includesHeading: string;
  includesIntro?: ReactNode;
  includes: string[];
  faqs: FaqItem[];
  enquiry: EnquiryFormProps;
  extras?: ReactNode;
  afterIncludes?: ReactNode;
  priceDisplay?: string;
};

export function PackagePage({
  offer,
  title,
  lede,
  includesHeading,
  includesIntro,
  includes,
  faqs,
  enquiry,
  extras,
  afterIncludes,
  priceDisplay,
}: PackagePageProps) {
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
            price: String(offer.price),
          }),
          faqJsonLd(faqs),
        ]}
      />
      <PageBand>
        <PageHero eyebrow={offer.eyebrow} title={title} lede={lede} tone="dark">
          <p className="mt-6 text-2xl font-semibold text-copper">
            {priceDisplay ?? offer.priceLabel}
            <span className="ml-2 text-base font-normal text-paper-200">
              {offer.priceNote}
            </span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#book" variant="inverseSolid">
              {enquiry.submitLabel}
            </ButtonLink>
            <ButtonLink href={routes.freeCheck} variant="inverse">
              Not sure? Free check first
            </ButtonLink>
          </div>
        </PageHero>
      </PageBand>

      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        {extras}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <section>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              {includesHeading}
            </h2>
            {includesIntro ? (
              <div className="mt-3 leading-relaxed text-ink-muted">
                {includesIntro}
              </div>
            ) : null}
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
            {afterIncludes}
          </section>
          <div id="book">
            <EnquiryForm {...enquiry} />
          </div>
        </div>

        <FaqList items={faqs} />

        <p className="mt-10 text-sm text-ink-soft">
          Looking for another offer?{" "}
          <Link href={routes.pricing} className="font-medium text-navy underline">
            Compare prices
          </Link>
          {" · "}
          <Link href={routes.home} className="font-medium text-navy underline">
            Back to the path
          </Link>
          .
        </p>

        <CtaBand
          title="Start with the free check if you're unsure."
          body="Two business days. One page. Then you pick a package — or I tell you to do nothing."
          primaryHref={routes.freeCheck}
          primaryLabel="Get your free check"
          secondaryHref={routes.pricing}
          secondaryLabel="See all prices"
        />
      </div>
    </div>
  );
}
