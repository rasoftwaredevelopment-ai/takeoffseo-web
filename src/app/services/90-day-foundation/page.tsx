import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { foundationFaqs, foundationPage, offers } from "@/lib/site";

const offer = offers.foundation;

export const metadata: Metadata = {
  title: foundationPage.title,
  description: foundationPage.lede,
  alternates: { canonical: offer.href },
};

export default function FoundationPage() {
  return (
    <ServicePage
      offer={offer}
      title={foundationPage.title}
      lede={foundationPage.lede}
      extras={
        <section className="card mt-12 p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-navy sm:text-3xl">
            Fix site + Google profile
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">
            On the website: technical and on-page fixes, a clearer page
            structure, and pages that answer hire questions. On Google Business
            Profile: categories, services, and service-area clarity. At the end:
            what changed versus the start. Scoped after the Snapshot and quoted
            in the proposal.
          </p>
        </section>
      }
      includes={[
        "Diagnose the gaps from the Audit or an equivalent brief.",
        "Implement the agreed priority fixes on your site and Google profile.",
        "Show what moved over the 90 days.",
        "A recommendation at day 90: retainer, in-house, or pause.",
      ]}
      process={[
        {
          title: "Diagnose",
          body: "Start from a Visibility Audit, or from a recent diagnostic we can stand behind.",
        },
        {
          title: "Implement",
          body: "The agreed work on your website and Google Business Profile.",
        },
        {
          title: "Measure",
          body: "Report what changed versus the starting point.",
        },
      ]}
      faqs={foundationFaqs}
    />
  );
}
