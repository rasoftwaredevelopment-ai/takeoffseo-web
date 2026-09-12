import type { Metadata } from "next";
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
        "A quick Google Maps / Business Profile check.",
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
            <h2 className="section-h2">How we work</h2>
            <p className="section-lede">
              Start free. Anything further is quoted after — case by case, in a
              proposal.
            </p>
            <div className="chapter-list">
              <article className="chapter-row">
                <h3 className="chapter-h3">Snapshot</h3>
                <p>See if buyers can find you. Free, on your business name.</p>
              </article>
              <article className="chapter-row">
                <h3 className="chapter-h3">Then, if useful</h3>
                <p>
                  Audit, Foundation, or retainer — scoped after the Snapshot and
                  priced in the proposal.
                </p>
              </article>
            </div>
          </section>
          <SampleSnapshot />
        </>
      }
      faqs={snapshotFaqs}
    />
  );
}
