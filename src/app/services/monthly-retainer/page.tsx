import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { offers, retainerFaqs, retainerPage } from "@/lib/site";

const offer = offers.retainer;

export const metadata: Metadata = {
  title: retainerPage.title,
  description: retainerPage.lede,
  alternates: { canonical: offer.href },
};

export default function MonthlyRetainerPage() {
  return (
    <ServicePage
      offer={offer}
      title={retainerPage.title}
      lede={retainerPage.lede}
      extras={
        <section className="card mt-12 p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-navy sm:text-3xl">
            Diagnosis, implementation, measurement
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">
            We sell agreed work and clear reporting — not ranking or lead
            promises.
          </p>
        </section>
      }
      includes={[
        "Agreed priority Google and AI work each month.",
        "Clear priorities drawn from the Audit or Foundation.",
        "A plain report on what we did and what changed.",
        "Ads only if scoped separately.",
      ]}
      process={[
        {
          title: "Confirm the monthly figure",
          body: "From A$2,000–2,500 depending on the site. Terms sit in the proposal.",
        },
        {
          title: "Work the priorities",
          body: "The jobs you want found for come first.",
        },
        {
          title: "Report",
          body: "A short written update each month.",
        },
      ]}
      faqs={retainerFaqs}
    />
  );
}
