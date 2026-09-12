import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Monthly Plan, from $690 a month",
  description:
    "Keep improving after a Fix-Up or New Website. Steady $690 or Growth $1,190 a month. Month to month.",
  alternates: { canonical: routes.monthly },
};

export default function MonthlyPage() {
  return (
    <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
      <PageHero
        eyebrow="Steady $690 · Growth $1,190 · a month, month to month"
        title="Monthly Plan"
        lede="For businesses that have had a Fix-Up or New Website, or are already in good shape, and want to keep gaining ground. A set list of work each month, and a one-page report you can read in two minutes."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#book">Ask about the Monthly Plan</ButtonLink>
          <ButtonLink href={routes.freeCheck} variant="secondary">
            Not sure? Free check first
          </ButtonLink>
        </div>
      </PageHero>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <article className="card p-6">
          <h3 className="font-serif text-2xl text-navy">Steady</h3>
          <p className="mt-2 font-serif text-3xl text-navy">
            $690 <span className="text-base font-sans text-ink-soft">a month</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>1 new or improved page, written by me and approved by you</li>
            <li>Google profile kept current: 2 posts, photos, questions, hours</li>
            <li>Every new review gets a reply drafted for you to approve</li>
            <li>Directories checked, anything wrong fixed</li>
            <li>Technical check of the site, small fixes done</li>
            <li>The 20 searches that matter checked and tracked</li>
            <li>One-page report by email</li>
          </ul>
        </article>
        <article className="card relative border-copper p-6">
          <span className="absolute -top-3 left-5 rounded-full bg-copper px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            Wider area
          </span>
          <h3 className="font-serif text-2xl text-navy">Growth</h3>
          <p className="mt-2 font-serif text-3xl text-navy">
            $1,190 <span className="text-base font-sans text-ink-soft">a month</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>Everything in Steady</li>
            <li>3 new or improved pages a month</li>
            <li>Up to 3 Google profiles managed</li>
            <li>Competitor watch: who&apos;s moving, and why</li>
            <li>30-minute call each month with the report</li>
            <li>Priority when something breaks</li>
          </ul>
        </article>
      </div>
      <p className="mt-4 text-sm text-ink-soft">
        Prices plus GST. Month to month. Stop any time with 30 days&apos; notice
        by email. Paid by bank transfer.
      </p>
      <div id="book" className="mt-12 max-w-xl">
        <EnquiryForm
          heading="Ask about the Monthly Plan"
          intro="I'll reply within one business day and say honestly whether you're ready for a monthly plan or whether a Fix-Up should come first."
          submitLabel="Send"
          defaultOffer="Monthly Plan"
          fields={["business", "website", "plan", "history", "name", "email", "phone"]}
          required={["business", "name", "email", "phone"]}
          successTitle="Thanks, {name}."
          successLead="I'll have a look at {business} and email {email} within one business day."
        />
      </div>
      <FaqList
        items={[
          { id: "minimum", question: "Is there a minimum term?", answer: "No. Month to month, 30 days' notice. Website changes take a couple of months to show in Google, so I'll be honest if you're stopping before we could know whether it worked." },
          { id: "without-fix", question: "Can I start monthly without doing a Fix-Up first?", answer: "If your site and profile are already in good shape, yes. If not, the first few months would just be a slower, more expensive Fix-Up." },
          { id: "stop", question: "What if I want to stop?", answer: "Email me and give 30 days' notice. Everything stays with you." },
        ]}
      />
    </div>
  );
}
