import type { Metadata } from "next";
import { OfferPath } from "@/components/OfferPath";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { PriceHelper } from "@/components/PriceHelper";
import { brand, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prices",
  description:
    "Every price on the page. Free check, Profile Tune-Up $490, Website Fix-Up $1,900, New Website $3,900, Monthly from $690.",
  alternates: { canonical: routes.pricing },
};

export default function PricingPage() {
  return (
    <div>
      <PageBand>
        <PageHero
          tone="dark"
          eyebrow="Prices"
          title="Every price, on the page."
          lede='No "from". No quote after a call. Each package is a fixed list of work for a fixed price. When the list is done, the job is done.'
        />
      </PageBand>
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <OfferPath
          heading="The five things you can buy"
          lede="Prices in Australian dollars, plus GST. Work outside a package is $150 an hour, always quoted before I start. Paying is by bank transfer."
        />

        <h2 className="mt-20 font-serif text-4xl text-navy sm:text-5xl">
          Not sure which one?
        </h2>
        <p className="mt-3 text-lg text-ink-muted">Two questions.</p>
        <div className="mt-6">
          <PriceHelper />
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          Still unsure? The{" "}
          <a href={routes.freeCheck} className="underline">
            free check
          </a>{" "}
          gives you a proper answer for your business.
        </p>

        <h2 className="mt-20 font-serif text-4xl text-navy sm:text-5xl">
          How paying works
        </h2>
        <ul className="mt-6 max-w-3xl space-y-4 text-ink-muted">
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-forest" />
            <span>
              <strong className="text-navy">Profile Tune-Up:</strong> $490 paid
              before I start.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-forest" />
            <span>
              <strong className="text-navy">Website Fix-Up:</strong> $950 to
              start, $950 when every item on the list is done. If I miss the
              finish date I gave you, the second half isn&apos;t due until the
              list is finished.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-forest" />
            <span>
              <strong className="text-navy">New Website:</strong> $1,950 to
              start, $1,950 when the site goes live. Same rule on the finish
              date.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-forest" />
            <span>
              <strong className="text-navy">Monthly Plan:</strong> billed at the
              start of each month. Month to month. Stop any time with 30
              days&apos; notice by email.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-forest" />
            <span>
              <strong className="text-navy">Paying is by bank transfer.</strong>{" "}
              Every invoice has the account details on it. Due in seven days.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-forest" />
            <span>
              <strong className="text-navy">You own everything.</strong> Your
              Google profile, your website, your domain, your tracking
              accounts, every page I write.
            </span>
          </li>
        </ul>
        <p className="mt-6 text-sm text-ink-soft">
          Invoices come from {brand.legalName}, ABN {brand.abn}. Full terms are{" "}
          <a href={routes.terms} className="underline">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
