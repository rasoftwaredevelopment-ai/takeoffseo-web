import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { brand, foundationFaqs, offers } from "@/lib/site";

const offer = offers.foundation;

export const metadata: Metadata = {
  title: "90-Day Foundation",
  description: offer.summary,
  alternates: { canonical: offer.href },
};

export default function FoundationPage() {
  return (
    <ServicePage
      offer={offer}
      title="90-Day Foundation"
      lede={`Ninety days to implement the priority work from an audit (or an equivalent brief), then measure what changed. Typical fee A$6,500, from A$4,500, scoped to the starting point. For ${brand.icpPrimary.toLowerCase()}, and other local service businesses case by case.`}
      extras={
        <section className="mt-12 rounded-sm border border-line bg-paper-50 p-6">
          <h2 className="font-serif text-2xl text-navy">
            Typical A$6,500, from A$4,500
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">
            The typical engagement is A$6,500. Leaner scopes start from A$4,500
            when the site and listings are already in decent shape. The quote
            lists pages, listings, and content before we start. Search movement
            is measured; it is not guaranteed.
          </p>
        </section>
      }
      includes={[
        "Implementation of the agreed priority items from the audit or brief.",
        "Listing and on-site fixes that most affect Google and AI visibility.",
        "A written record of what changed, and a comparison to the starting baseline.",
        "A recommendation at day 90: continue on retainer, run in-house, or pause.",
      ]}
      process={[
        {
          title: "Audit or equivalent brief",
          body: "We start from a Visibility Audit, or from a recent diagnostic we can stand behind.",
        },
        {
          title: "Implement",
          body: "The agreed work only. Scope is written. Extra work is quoted, not assumed.",
        },
        {
          title: "Measure",
          body: "We compare the starting baseline with what we can observe at the end of the 90 days.",
        },
      ]}
      faqs={foundationFaqs}
    />
  );
}
