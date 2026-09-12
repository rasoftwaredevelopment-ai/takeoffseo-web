import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { brand, offers, retainerFaqs } from "@/lib/site";

const offer = offers.retainer;

export const metadata: Metadata = {
  title: "Monthly retainer",
  description: offer.summary,
  alternates: { canonical: offer.href },
};

export default function MonthlyRetainerPage() {
  return (
    <ServicePage
      offer={offer}
      title="Monthly retainer"
      lede={`Ongoing Google and AI visibility work from A$2,000–2,500 per month. Built for ${brand.icpPrimary.toLowerCase()} who already have a foundation and want steady iteration — not a ranking promise.`}
      extras={
        <section className="mt-12 rounded-sm border border-line bg-paper-50 p-6">
          <h2 className="font-serif text-2xl text-navy">No guarantees</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">
            A retainer buys a block of specialist work and a short monthly
            report. It does not buy a Maps pack position, a number-one ranking,
            or a mention inside an AI answer. If that is what you need in
            writing, we are not the right firm.
          </p>
        </section>
      }
      includes={[
        "A monthly block of work drawn from the audit or Foundation backlog.",
        "Listing, technical, and page improvements that support Google and AI visibility.",
        "A short report: what was done, what we observed, what we recommend next.",
        "No ads management, no social calendar, and no ranking guarantees.",
      ]}
      process={[
        {
          title: "Confirm the monthly figure",
          body: "From A$2,000–2,500 depending on site size and content load. Terms sit in the proposal.",
        },
        {
          title: "Work the backlog",
          body: "Priority items first. New items come from Search Console, the site, and what customers actually ask.",
        },
        {
          title: "Report and reset",
          body: "A short written update each month. You can continue, pause, or take the work in-house.",
        },
      ]}
      faqs={retainerFaqs}
    />
  );
}
