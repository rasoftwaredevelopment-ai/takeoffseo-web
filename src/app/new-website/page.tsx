import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Website, $3,900",
  description:
    "A new or rebuilt website, built to be found on Google. Up to 8 pages. $3,900 one-off.",
  alternates: { canonical: routes.newWebsite },
};

export default function NewWebsitePage() {
  return (
    <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
      <PageHero
        eyebrow="$3,900 one-off · fixed list of work"
        title="New Website"
        lede="A new or rebuilt website, built from the start to be found on Google. Up to eight pages, written and built by me, with your Google profile done at the same time. For businesses with no site, or one too old or broken to be worth fixing."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#book">Book a New Website</ButtonLink>
          <ButtonLink href={routes.freeCheck} variant="secondary">
            Not sure? Free check first
          </ButtonLink>
        </div>
      </PageHero>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-serif text-3xl text-navy">What you get for $3,900</h2>
          <p className="mt-3 text-ink-muted">
            Everything in the{" "}
            <a href={routes.tuneUp} className="underline">
              Profile Tune-Up
            </a>
            , plus this list. When every item is ticked and the site is live, the
            job is done.
          </p>
          <ul className="mt-4 space-y-2 text-ink-muted">
            <li>A short conversation about your jobs, and the searches that matter.</li>
            <li>A one-page site plan you sign off.</li>
            <li>Up to 8 pages, written and built. Usually home, about, contact, and five service pages.</li>
            <li>Written from your answers, so it sounds like you. You approve every page.</li>
            <li>Built for phones first. Fast. Big tap-to-call on every page.</li>
            <li>An enquiry form that emails you. Your real photos. No stock call-centre photos.</li>
            <li>Built on a platform you can edit (usually WordPress or Squarespace), with a 20-minute how-to video.</li>
            <li>Domain and hosting in your name. You pay the host directly.</li>
            <li>Old pages redirected so nothing you&apos;ve built up is lost.</li>
            <li>Search Console and tracking set up. Google profile linked and matched.</li>
            <li>Launch report, and 30 days of free fixes after launch.</li>
          </ul>
        </div>
        <div id="book">
          <EnquiryForm
            heading="Book a New Website"
            intro="$3,900 plus GST. $1,950 to start, $1,950 when the site goes live. Bank transfer. I'll reply within one business day."
            submitLabel="Book the New Website"
            defaultOffer="New Website"
            fields={["business", "website", "area", "jobs", "name", "email", "phone"]}
            required={["business", "area", "jobs", "name", "email", "phone"]}
            successTitle="Thanks, {name}."
            successLead="I'll email {email} within one business day with a short agreement, the first invoice for $1,950 plus GST, a finish date, and a list of what I need from {business}."
          />
        </div>
      </div>
      <FaqList
        items={[
          { id: "how-long", question: "How long does it take?", answer: "I give you a finish date in writing before you pay the first half. Most of the wait is usually on photos and answers from the owner." },
          { id: "edit", question: "Can I update it myself afterwards?", answer: "Yes. That's why I build on a platform you can edit, and record a video showing you how." },
          { id: "hosting", question: "What does hosting cost?", answer: "You pay the host directly so it's in your name. I'll recommend an option and tell you the price before we start." },
        ]}
      />
    </div>
  );
}
