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
import { brand, homeCopy, routes } from "@/lib/site";

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
                  {homeCopy.primaryCta}
                </ButtonLink>
                <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
                  {homeCopy.secondaryCta}
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
                {homeCopy.primaryCta}
              </ButtonLink>
              <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
                {homeCopy.secondaryCta}
              </a>
            </div>
          </PageHero>
        )}
      </PageBand>

      <section className="section-band section-band--paper">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-2">
          <section>
            <h2 className="section-h2">
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
            <h2 className="section-h2">
              How it runs
            </h2>
            <div className="chapter-list">
              {process.map((step) => (
                <article key={step.title} className="chapter-row">
                  <h3 className="chapter-h3">{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        {extras}

        <FaqList items={faqs} />

        <p className="mt-10 text-sm text-ink-soft">
          Start with the free Snapshot.{" "}
          <Link
            href={routes.snapshotEnquire}
            className="font-medium text-navy underline"
          >
            Enquire here
          </Link>
          {" · "}
          <Link href={routes.home} className="font-medium text-navy underline">
            Back home
          </Link>
          .
        </p>

        <CtaBand title={homeCopy.closeTitle} body={homeCopy.closeBody} />
      </div>
      </section>
    </div>
  );
}
