import type { Metadata } from "next";
import { SampleAuditPriorities } from "@/components/SampleAuditPriorities";
import { ServicePage } from "@/components/ServicePage";
import { auditFaqs, auditPage, offers } from "@/lib/site";

const offer = offers.audit;

export const metadata: Metadata = {
  title: auditPage.title,
  description: auditPage.lede,
  alternates: { canonical: offer.href },
};

export default function VisibilityAuditPage() {
  return (
    <ServicePage
      offer={offer}
      title={auditPage.title}
      lede={auditPage.lede}
      includes={[
        "Full Google + AI baseline.",
        "Service-area review.",
        "Prioritised fix list and next step.",
        "Out of scope: live rebuilds, ongoing content, ads, and the 90-day Foundation.",
      ]}
      process={[
        {
          title: "Brief",
          body: "Site, Google Business Profile, service area, and who you compete with.",
        },
        {
          title: "Diagnosis",
          body: "We map the baseline and the fix list. Timing confirmed at kickoff.",
        },
        {
          title: "Priorities pack",
          body: "You leave with the written plan — before Foundation or Retainer.",
        },
      ]}
      extras={
        <>
          <section className="mt-12">
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              How we work
            </h2>
            <p className="mt-3 max-w-3xl text-ink-muted">
              The Audit is the map. Implementation happens on your site and
              Google profile.
            </p>
            <div className="chapter-list">
              <article className="chapter-row">
                <h3 className="chapter-h3">Audit</h3>
                <p>Map the baseline on your website and Google Business Profile.</p>
              </article>
              <article className="chapter-row">
                <h3 className="chapter-h3">Implement</h3>
                <p>
                  Fix the agreed work on your site and listing — not a page we
                  host.
                </p>
              </article>
              <article className="chapter-row">
                <h3 className="chapter-h3">Measure</h3>
                <p>Show what moved versus the starting point.</p>
              </article>
            </div>
          </section>
          <SampleAuditPriorities />
        </>
      }
      faqs={auditFaqs}
    />
  );
}
