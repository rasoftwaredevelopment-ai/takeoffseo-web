import type { Metadata } from "next";
import { PackagePage } from "@/components/PackagePage";
import { packages, routes } from "@/lib/site";

const offer = packages.monthly;

export const metadata: Metadata = {
  title: "Monthly Plan, from $690 a month",
  description:
    "Keep improving after a Fix-Up or New Website. Steady $690 or Growth $1,190 a month. Month to month.",
  alternates: { canonical: routes.monthly },
};

export default function MonthlyPage() {
  return (
    <PackagePage
      offer={offer}
      title="Monthly Plan"
      lede="For businesses that have had a Fix-Up or New Website, or are already in good shape, and want to keep climbing on Google. A set list of work each month, and a one-page report you can read in two minutes."
      priceDisplay="From $690"
      extras={
        <div className="mb-12 grid gap-5 md:grid-cols-2">
          <article className="card p-6">
            <h3 className="font-serif text-2xl text-navy">Steady</h3>
            <p className="mt-2 font-serif text-3xl text-navy">
              $690{" "}
              <span className="text-base font-sans text-ink-soft">a month</span>
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              {[
                "1 new or improved page, written by me and approved by you",
                "Google profile kept current: 2 posts, photos, questions, hours",
                "Every new review gets a reply drafted for you to approve",
                "Directories checked, anything wrong fixed",
                "Technical check of the site, small fixes done",
                "The 20 searches that matter checked and tracked",
                "One-page report by email",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-forest" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="card relative border-copper p-6">
            <span className="absolute -top-3 left-5 rounded-full bg-copper px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              Wider area
            </span>
            <h3 className="font-serif text-2xl text-navy">Growth</h3>
            <p className="mt-2 font-serif text-3xl text-navy">
              $1,190{" "}
              <span className="text-base font-sans text-ink-soft">a month</span>
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              {[
                "Everything in Steady",
                "3 new or improved pages a month",
                "Up to 3 Google profiles managed",
                "Competitor watch: who's moving, and why",
                "30-minute call each month with the report",
                "Priority when something breaks",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-forest" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      }
      includesHeading="How the month runs"
      includesIntro={
        <>
          Prices plus GST. Month to month. Stop any time with 30 days&apos;
          notice by email. Paid by bank transfer.
        </>
      }
      includes={[
        "On the 1st: the month's checklist is set and you get the list.",
        "Work happens through the month. You approve pages before they go live.",
        "Last business day: one-page report — calls, enquiries, and the searches that matter.",
        "You own every account, page and domain the whole time.",
      ]}
      faqs={[
        {
          id: "minimum",
          question: "Is there a minimum term?",
          answer:
            "No. Month to month, 30 days' notice. Website changes take a couple of months to show in Google, so I'll be honest if you're stopping before we could know whether it worked.",
        },
        {
          id: "without-fix",
          question: "Can I start monthly without doing a Fix-Up first?",
          answer:
            "If your site and profile are already in good shape, yes. If not, the first few months would just be a slower, more expensive Fix-Up.",
        },
        {
          id: "stop",
          question: "What if I want to stop?",
          answer: "Email me and give 30 days' notice. Everything stays with you.",
        },
      ]}
      enquiry={{
        heading: "Ask about the Monthly Plan",
        intro:
          "I'll reply within one business day and say honestly whether you're ready for a monthly plan or whether a Fix-Up should come first.",
        submitLabel: "Ask about Monthly",
        defaultOffer: "Monthly Plan",
        fields: [
          "business",
          "website",
          "plan",
          "history",
          "name",
          "email",
          "phone",
        ],
        required: ["business", "name", "email", "phone"],
        successTitle: "Thanks, {name}.",
        successLead:
          "I'll have a look at {business} and email {email} within one business day.",
      }}
    />
  );
}
