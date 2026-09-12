import type { Metadata } from "next";
import { AdsVsSearch } from "@/components/AdsVsSearch";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { OfferPath } from "@/components/OfferPath";
import { ProcessFrame } from "@/components/ProcessFrame";
import { ServiceCards } from "@/components/ServiceCards";
import { VerticalTeaser } from "@/components/VerticalTeaser";
import { WhatYouGet } from "@/components/WhatYouGet";
import { brand, homeCopy, packages, routes, trust } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} | ${brand.h1} ${brand.h1Sub}` },
  description: brand.tagline,
  alternates: { canonical: routes.home },
};

export default function HomePage() {
  return (
    <div>
      <section className="hero-grid bg-navy text-paper-50">
        <div className="mx-auto grid max-w-site gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)] lg:items-end">
          <div className="hero-stagger">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {homeCopy.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-display">{homeCopy.h1}</h1>
            <p className="mt-3 font-serif text-3xl leading-tight text-copper sm:text-4xl">
              {homeCopy.h1Sub}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-200 sm:text-xl">
              {homeCopy.lede}
            </p>
            <p className="mt-4 max-w-2xl text-base text-paper-300">
              {homeCopy.locationLine}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={routes.freeCheck} variant="inverseSolid">
                {homeCopy.primaryCta}
              </ButtonLink>
              <ButtonLink href={routes.pricing} variant="inverse">
                {homeCopy.secondaryCta}
              </ButtonLink>
            </div>
          </div>
          <aside className="rounded-sm border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
              The path
            </p>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-paper-200">
              <li>
                <span className="font-serif text-xl text-paper-50">01</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  Free check, $0.
                </span>
                Where you stand on Google now, and which package fits.
              </li>
              <li>
                <span className="font-serif text-xl text-paper-50">02</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  Tune-Up {packages.tune.priceLabel} or Fix-Up {packages.fix.priceLabel}.
                </span>
                Profile done properly — or site and profile fixed together.
              </li>
              <li>
                <span className="font-serif text-xl text-paper-50">03</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  New Website {packages.site.priceLabel}, if the old one can&apos;t be saved.
                </span>
                Built to be found. You own it.
              </li>
              <li>
                <span className="font-serif text-xl text-paper-50">04</span>
                <span className="mt-1 block font-semibold text-paper-50">
                  Monthly, from {packages.monthly.priceLabel}/mo.
                </span>
                Keep gaining ground on Google. Month to month.
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <div className="border-b border-line bg-paper-50">
        <ul className="mx-auto grid max-w-site gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {trust.map((item) => (
            <li key={item} className="text-sm text-ink-muted">
              <span className="mr-2 text-forest" aria-hidden>
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
        <OfferPath />
        <AdsVsSearch />
        <WhatYouGet />
        <ProcessFrame />
        <ServiceCards />
        <VerticalTeaser />
        <FaqList
          title="Quick answers"
          items={[
            {
              id: "new-site",
              question: "Do I need a new website?",
              answer:
                "Often not. If yours is basically sound, the Website Fix-Up is the cheaper answer. If it's old or broken, or you don't have one, I build sites too — made to be found rather than just to look nice. The free check tells you which.",
            },
            {
              id: "how-long",
              question: "How long until I see a difference?",
              answer:
                "Google profile changes can show within weeks. Website changes take a couple of months to settle. I'll give you an honest read in the free check, because it depends on your area and your competition.",
            },
            {
              id: "ads",
              question: "Do you do Google Ads or social media?",
              answer:
                "No. The whole point is to be at the top of Google without paying for the ads. If you need a burst of paid clicks, I'll say so and you can hire an ads person. I won't sell you something I don't do.",
            },
            {
              id: "top-of-google",
              question: "Can you get me to the top of Google?",
              answer:
                "That's the job. I work on the Google profile, website and reviews that put local businesses into the Map pack and the organic results. I won't sell you a fake '#1 guaranteed' badge — competition and Google still decide the exact order on a given day — but I don't do this work for any other outcome.",
            },
            {
              id: "areas",
              question: "What areas do you cover?",
              answer:
                "Anywhere in Australia. I'm on the Gold Coast, and all the work happens online. If you're in South East Queensland and want to meet in person, happy to.",
            },
          ]}
        />
        <CtaBand
          title={homeCopy.closeTitle}
          body={homeCopy.closeBody}
          primaryHref={routes.freeCheck}
          primaryLabel={homeCopy.primaryCta}
          secondaryHref={routes.pricing}
          secondaryLabel={homeCopy.secondaryCta}
        />
      </div>
    </div>
  );
}
