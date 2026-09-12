import type { Metadata } from "next";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { brand, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "The plain-English rules for working with TakeoffSEO.",
  alternates: { canonical: routes.terms },
};

export default function TermsPage() {
  return (
    <div>
      <PageBand>
        <PageHero
          tone="dark"
          eyebrow="Terms"
          title="Terms of service"
          lede="The plain-English rules for working with TakeoffSEO. Each paid package also comes with a one-page agreement that repeats the important bits."
        />
      </PageBand>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="mt-10 space-y-4 text-ink-muted">
        <p className="text-sm text-ink-soft">
          {brand.legalName}, ABN {brand.abn}. Last updated [DATE].
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">1. Who you&apos;re dealing with</h2>
        <p>
          TakeoffSEO is a sole trader business run by Alexander Nott in
          Queensland.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">2. What I&apos;ll do</h2>
        <p>
          The work for each package is the checklist on its page on this site,
          plus the written plan I send you before starting. Extra work is $150
          an hour plus GST, quoted first.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">3. Finish dates</h2>
        <p>
          Before a one-off package starts, I give you a finish date in writing.
          If I miss it for reasons on my side, the final payment is not due
          until the list is complete. If the delay is because I&apos;m waiting
          on you, the date moves by the same amount.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">4. What I can&apos;t promise</h2>
        <p>
          I can&apos;t promise a position in Google, Google Maps, or any AI
          tool, or a number of calls. I promise the agreed work, done with care
          and on time, and an honest report.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">5. Prices and paying</h2>
        <p>
          Prices are in Australian dollars plus GST. Invoices are paid by bank
          transfer and are due within seven days. Profile Tune-Up is paid in
          full before work starts. Website Fix-Up and New Website are paid half
          before work starts and half when the list is complete. Monthly Plans
          are billed at the start of each month, month to month, 30 days&apos;
          notice by email.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">6. Ownership</h2>
        <p>
          Everything I create for you belongs to you once the related invoice
          is paid. Accounts stay in your name.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">7. Cancelling</h2>
        <p>
          One-off packages: cancel before work starts for a full refund. Once
          work starts, the list gets finished. If a Website Fix-Up turns out
          unfixable at plan stage, you pay $490 plus GST for the plan and
          Profile Tune-Up, keep both, and the rest is refunded.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">8. Law</h2>
        <p>
          These terms are governed by the laws of Queensland, Australia. Nothing
          here removes your rights under the Australian Consumer Law.
        </p>
      </div>
      </div>
    </div>
  );
}
