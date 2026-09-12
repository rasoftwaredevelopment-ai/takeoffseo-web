import type { ReactNode } from "react";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/schema";
import type { FaqItem, Offer } from "@/lib/site";
import { routes } from "@/lib/site";

type ServicePageProps = {
  offer: Offer;
  title: string;
  lede: string;
  includes: string[];
  process: { title: string; body: string }[];
  faqs: FaqItem[];
  price?: string;
  extras?: ReactNode;
};

export function ServicePage({
  offer,
  title,
  lede,
  includes,
  process,
  faqs,
  price,
  extras,
}: ServicePageProps) {
  return (
    <div className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-16">
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
            price,
          }),
          faqJsonLd(faqs),
        ]}
      />
      <PageHero eyebrow={offer.eyebrow} title={title} lede={lede}>
        <p className="mt-5 text-xl font-medium text-forest">
          {offer.priceLabel}
          {offer.priceNote ? (
            <span className="ml-2 text-base font-normal text-ink-soft">
              {offer.priceNote}
            </span>
          ) : null}
        </p>
      </PageHero>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="font-serif text-3xl text-navy">What you get</h2>
          <ul className="mt-5 space-y-3 text-ink-muted leading-relaxed">
            {includes.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-forest" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-serif text-3xl text-navy">How it runs</h2>
          <ol className="mt-5 space-y-4">
            {process.map((step, index) => (
              <li key={step.title}>
                <p className="text-sm font-semibold text-copper">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-medium text-navy">{step.title}</h3>
                <p className="mt-1 text-ink-muted leading-relaxed">{step.body}</p>
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
        .
      </p>

      <CtaBand
        title={`Enquire about the ${offer.name}`}
        body="Send the website and Google Business Profile. We confirm scope and timing by appointment."
      />
    </div>
  );
}
