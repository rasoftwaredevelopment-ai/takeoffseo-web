import type { Metadata } from "next";
import { ClarityPathDiagram } from "@/components/ClarityPathDiagram";
import { SampleSnapshot } from "@/components/SampleSnapshot";
import { ServicePage } from "@/components/ServicePage";
import { offers, snapshotFaqs, snapshotPage } from "@/lib/site";

const offer = offers.snapshot;

export const metadata: Metadata = {
  title: snapshotPage.title,
  description: snapshotPage.lede,
  alternates: { canonical: offer.href },
};

export default function VisibilitySnapshotPage() {
  return (
    <ServicePage
      offer={offer}
      title={snapshotPage.title}
      lede={snapshotPage.lede}
      includes={[
        "5–8 AI prompts on your business name.",
        "A thin Google Maps note.",
        "A clear read on whether jobs are going elsewhere.",
        "What this is not: the full baseline or the fix map. That is the Audit.",
      ]}
      process={[
        {
          title: "Send the basics",
          body: "Website, Google Business Profile, and the work you want found for.",
        },
        {
          title: "We check the gaps",
          body: "About 30–45 minutes on our side. Turnaround confirmed when we take details.",
        },
        {
          title: "You decide",
          body: "Want the full baseline and fix map? That’s the Visibility Audit.",
        },
      ]}
      extras={
        <>
          <section className="mt-12">
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              How we work
            </h2>
            <p className="mt-3 max-w-3xl text-ink-muted">
              The Snapshot is the start. Further work is quoted after, if you
              want it.
            </p>
            <ClarityPathDiagram />
          </section>
          <SampleSnapshot />
        </>
      }
      faqs={snapshotFaqs}
    />
  );
}
