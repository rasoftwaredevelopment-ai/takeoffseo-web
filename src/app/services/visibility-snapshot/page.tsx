import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { offers, snapshotFaqs } from "@/lib/site";

const offer = offers.snapshot;

export const metadata: Metadata = {
  title: "Visibility Snapshot for local businesses",
  description: offer.summary,
  alternates: { canonical: offer.href },
};

export default function VisibilitySnapshotPage() {
  return (
    <ServicePage
      offer={offer}
      title="Visibility Snapshot for local businesses"
      lede="A short, no-obligation look at how a local business appears in Google and AI-style answers. Enough to decide whether the A$1,500 audit is worth it — not a substitute for one, and not a fake full audit."
      price="0"
      includes={[
        "A written snapshot of how you appear in Google Search and Maps today.",
        "A plain-English note on whether AI-style answers are likely to mention you.",
        "A recommendation: stop here, book the Visibility Audit, or wait.",
        "What this is not: a full baseline, a prioritised fix pack, or implementation.",
      ]}
      process={[
        {
          title: "Send the basics",
          body: "Website, Google Business Profile, and the work you want found for. Hours are by appointment.",
        },
        {
          title: "We look, then write",
          body: "A short review, not a deep diagnostic. Most Snapshots come back within a few business days.",
        },
        {
          title: "You decide",
          body: "If the gaps are clear and you want a baseline plus a prioritised fix pack, that is the paid audit.",
        },
      ]}
      faqs={snapshotFaqs}
    />
  );
}
