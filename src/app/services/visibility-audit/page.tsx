import type { Metadata } from "next";
import { HowWeWorkDiagram } from "@/components/HowWeWorkDiagram";
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
            <HowWeWorkDiagram />
          </section>
          <SampleAuditPriorities />
        </>
      }
      faqs={auditFaqs}
    />
  );
}
