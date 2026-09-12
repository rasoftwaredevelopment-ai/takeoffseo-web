import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PriceHelper } from "@/components/PriceHelper";
import { PageHero } from "@/components/PageHero";
import { brand, packages, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prices",
  description:
    "Every price on the page. Free check, Profile Tune-Up $490, Website Fix-Up $1,900, New Website $3,900, Monthly from $690.",
  alternates: { canonical: routes.pricing },
};

export default function PricingPage() {
  const cards = [packages.tune, packages.fix, packages.site, packages.monthly];
  return (
    <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
      <PageHero
        eyebrow="Prices"
        title="Every price, on the page."
        lede='No "from". No quote after a call. Each package is a fixed list of work for a fixed price. When the list is done, the job is done.'
      />
      <div className="card mt-10 flex flex-col items-start justify-between gap-4 bg-paper-200/40 p-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-serif text-2xl text-navy">
            Free check <span className="ml-2 text-xl">$0</span>
          </h3>
          <p className="mt-1 max-w-xl text-ink-muted">
            Start here. I look at where you show up on Google, Maps and one AI
            tool, and email you one page: what&apos;s missing, the three things
            I&apos;d fix first, and which package fits. Or &quot;you&apos;re
            fine, do nothing&quot;.
          </p>
        </div>
        <ButtonLink href={routes.freeCheck}>Get the free check</ButtonLink>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((pkg) => (
          <article
            key={pkg.id}
            className={`card relative flex flex-col p-6 ${"featured" in pkg && pkg.featured ? "border-copper" : ""}`}
          >
            {"featured" in pkg && pkg.featured ? (
              <span className="absolute -top-3 left-5 rounded-full bg-copper px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                Most common
              </span>
            ) : null}
            <h3 className="font-serif text-2xl text-navy">{pkg.name}</h3>
            <p className="mt-2 font-serif text-3xl text-navy">{pkg.priceLabel}</p>
            <p className="text-sm text-ink-soft">{pkg.priceNote}</p>
            <p className="mt-3 min-h-[4rem] text-sm text-ink-muted">{pkg.summary}</p>
            <ul className="mt-4 flex-1 space-y-2 text-sm">
              {pkg.items.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
            <ButtonLink
              href={pkg.href}
              variant={"featured" in pkg && pkg.featured ? "primary" : "secondary"}
              className="mt-6 w-full"
            >
              Details and booking
            </ButtonLink>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-soft">
        Prices in Australian dollars, plus GST. Work outside a package is $150
        an hour, always quoted before I start. I give you a finish date in
        writing before any package begins. Paying is by bank transfer.
      </p>

      <h2 className="mt-16 font-serif text-4xl text-navy">Not sure which one?</h2>
      <p className="mt-3 text-lg text-ink-muted">Two questions.</p>
      <div className="mt-6">
        <PriceHelper />
      </div>
      <p className="mt-4 text-sm text-ink-soft">
        Still unsure? The <a href={routes.freeCheck} className="underline">free check</a>{" "}
        gives you a proper answer for your business.
      </p>

      <h2 className="mt-16 font-serif text-4xl text-navy">How paying works</h2>
      <ul className="mt-6 max-w-3xl space-y-3 text-ink-muted">
        <li>
          <strong className="text-navy">Profile Tune-Up:</strong> $490 paid
          before I start.
        </li>
        <li>
          <strong className="text-navy">Website Fix-Up:</strong> $950 to start,
          $950 when every item on the list is done. If I miss the finish date I
          gave you, the second half isn&apos;t due until the list is finished.
        </li>
        <li>
          <strong className="text-navy">New Website:</strong> $1,950 to start,
          $1,950 when the site goes live. Same rule on the finish date.
        </li>
        <li>
          <strong className="text-navy">Monthly Plan:</strong> billed at the
          start of each month. Month to month. Stop any time with 30 days&apos;
          notice by email.
        </li>
        <li>
          <strong className="text-navy">Paying is by bank transfer.</strong>{" "}
          Every invoice has the account details on it. Due in seven days.
        </li>
        <li>
          <strong className="text-navy">You own everything.</strong> Your Google
          profile, your website, your domain, your tracking accounts, every
          page I write.
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
  );
}
