import type { Metadata } from "next";
import { PackagePage } from "@/components/PackagePage";
import { packages, routes } from "@/lib/site";

const offer = packages.fix;

export const metadata: Metadata = {
  title: "Website Fix-Up, $1,900",
  description:
    "Your existing website and Google profile, fixed together. $1,900 one-off. Fixed list of work.",
  alternates: { canonical: routes.fixUp },
};

export default function FixUpPage() {
  return (
    <PackagePage
      offer={offer}
      title="Website Fix-Up"
      lede="Your existing website and your Google profile, fixed together. For businesses whose site is basically sound but isn't bringing in work. You get a fixed list of work for a fixed price, and a before-and-after report when it's done."
      includesHeading="What you get for $1,900"
      includesIntro={
        <>
          Everything in the{" "}
          <a href={routes.tuneUp} className="underline">
            Profile Tune-Up
          </a>
          , plus this list. When every item is ticked, the job is done.
        </>
      }
      includes={[
        "A proper look at your site, profile, and two or three competitors.",
        "The 20 or so searches that bring in jobs, written in plain words.",
        "A one-page plan you sign off before I change anything.",
        "Technical fixes: speed, mobile, broken links, pages Google can't find.",
        "5 service pages written or rewritten. You approve each one.",
        "2 area pages, only where they'd genuinely help.",
        "Homepage tidied so it says in one line what you do and where.",
        "Tap-to-call and a short form on every page.",
        "Call and form tracking, so we count enquiries, not just visitors.",
        "Google profile matched to the website.",
        "Before-and-after report and a short “what next” note.",
        "30-minute handover call.",
      ]}
      afterIncludes={
        <p className="mt-6 text-ink-muted">
          If your site is old, broken, or you&apos;d be embarrassed to send
          someone to it, the{" "}
          <a href={routes.newWebsite} className="underline">
            New Website
          </a>{" "}
          package is better value than patching it.
        </p>
      }
      faqs={[
        {
          id: "how-long",
          question: "How long does it take?",
          answer:
            "I give you a finish date in writing before you pay the first half. If I miss my date, the second half isn't due until the list is done.",
        },
        {
          id: "after",
          question: "What will I see when it's done?",
          answer:
            "Google profile changes usually show within weeks. Website changes take a couple of months to settle. The report shows the early movement and gives you a clear before to measure against.",
        },
        {
          id: "monthly-after",
          question: "Do I have to go onto the Monthly Plan afterwards?",
          answer:
            "No. Some businesses do the Fix-Up and that's enough. You decide.",
        },
        {
          id: "unfixable",
          question: "What if my site turns out to be unfixable?",
          answer:
            "I'll tell you at the plan stage. You'd pay $490 for the plan and the Profile Tune-Up, keep both, and the rest is cancelled. If you then go ahead with a New Website, that $490 comes off the price.",
        },
      ]}
      enquiry={{
        heading: "Book a Website Fix-Up",
        intro:
          "$1,900 plus GST. $950 to start, $950 when the list is done. Bank transfer. I'll reply within one business day.",
        submitLabel: "Book the Fix-Up",
        defaultOffer: "Website Fix-Up",
        fields: ["business", "website", "area", "jobs", "name", "email", "phone"],
        required: [
          "business",
          "website",
          "area",
          "jobs",
          "name",
          "email",
          "phone",
        ],
        successTitle: "Thanks, {name}.",
        successLead:
          "I'll look at your site today and email {email} within one business day. You'll get a short agreement, the first invoice for $950 plus GST, and a finish date.",
      }}
    />
  );
}
