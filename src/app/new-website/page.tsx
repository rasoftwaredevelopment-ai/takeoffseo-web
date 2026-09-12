import type { Metadata } from "next";
import { PackagePage } from "@/components/PackagePage";
import { packages, routes } from "@/lib/site";

const offer = packages.site;

export const metadata: Metadata = {
  title: "New Website, $3,900",
  description:
    "A new or rebuilt website, built to be found on Google. Up to 8 pages. $3,900 one-off.",
  alternates: { canonical: routes.newWebsite },
};

export default function NewWebsitePage() {
  return (
    <PackagePage
      offer={offer}
      title="New Website"
      lede="A new or rebuilt website, built from the start to be found on Google. Up to eight pages, written and built by me, with your Google profile done at the same time. For businesses with no site, or one too old or broken to be worth fixing."
      includesHeading="What you get for $3,900"
      includesIntro={
        <>
          Everything in the{" "}
          <a href={routes.tuneUp} className="underline">
            Profile Tune-Up
          </a>
          , plus this list. When every item is ticked and the site is live, the
          job is done.
        </>
      }
      includes={[
        "A short conversation about your jobs, and the searches that matter.",
        "A one-page site plan you sign off.",
        "Up to 8 pages, written and built. Usually home, about, contact, and five service pages.",
        "Written from your answers, so it sounds like you. You approve every page.",
        "Built for phones first. Fast. Big tap-to-call on every page.",
        "An enquiry form that emails you. Your real photos. No stock call-centre photos.",
        "Built on a platform you can edit (usually WordPress or Squarespace), with a 20-minute how-to video.",
        "Domain and hosting in your name. You pay the host directly.",
        "Old pages redirected so nothing you've built up is lost.",
        "Search Console and tracking set up. Google profile linked and matched.",
        "Launch report, and 30 days of free fixes after launch.",
      ]}
      faqs={[
        {
          id: "how-long",
          question: "How long does it take?",
          answer:
            "I give you a finish date in writing before you pay the first half. Most of the wait is usually on photos and answers from the owner.",
        },
        {
          id: "edit",
          question: "Can I update it myself afterwards?",
          answer:
            "Yes. That's why I build on a platform you can edit, and record a video showing you how.",
        },
        {
          id: "hosting",
          question: "What does hosting cost?",
          answer:
            "You pay the host directly so it's in your name. I'll recommend an option and tell you the price before we start.",
        },
      ]}
      enquiry={{
        heading: "Book a New Website",
        intro:
          "$3,900 plus GST. $1,950 to start, $1,950 when the site goes live. Bank transfer. I'll reply within one business day.",
        submitLabel: "Book the New Website",
        defaultOffer: "New Website",
        fields: ["business", "website", "area", "jobs", "name", "email", "phone"],
        required: ["business", "area", "jobs", "name", "email", "phone"],
        successTitle: "Thanks, {name}.",
        successLead:
          "I'll email {email} within one business day with a short agreement, the first invoice for $1,950 plus GST, a finish date, and a list of what I need from {business}.",
      }}
    />
  );
}
