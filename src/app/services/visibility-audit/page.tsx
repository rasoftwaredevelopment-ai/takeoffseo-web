import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { auditFaqs, brand, offers } from "@/lib/site";

const offer = offers.audit;

export const metadata: Metadata = {
  title: "Visibility Audit",
  description: offer.summary,
  alternates: { canonical: offer.href },
};

export default function VisibilityAuditPage() {
  return (
    <ServicePage
      offer={offer}
      title="Visibility Audit"
      lede={`A$1,500 for a documented baseline of your Google and AI visibility, a prioritised fix pack, and one recommended next step. That is the whole deliverable. Implementation is separate. ${brand.name} does not sell ranking guarantees.`}
      price="1500"
      includes={[
        "Baseline: where you stand in Google Search, Maps, and AI-style answers, written down.",
        "Prioritised fix pack: what to change first, and why those items sit above the rest.",
        "Next step: Foundation, retainer, or hold — one recommendation, not a menu of upsells.",
        "Out of scope: making the changes, content production, ads, or ongoing monthly management.",
      ]}
      process={[
        {
          title: "Brief",
          body: "Site access or screenshots, Google Business Profile, service area, and who you compete with.",
        },
        {
          title: "Diagnostic",
          body: "We document the baseline and build the fix pack. Typical turnaround is one to two weeks.",
        },
        {
          title: "Walkthrough",
          body: "A call or written pack. You leave with the three deliverables — nothing else is assumed.",
        },
      ]}
      faqs={auditFaqs}
    />
  );
}
