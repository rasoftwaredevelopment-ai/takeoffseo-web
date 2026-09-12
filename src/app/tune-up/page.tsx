import type { Metadata } from "next";
import { PackagePage } from "@/components/PackagePage";
import { packages, routes } from "@/lib/site";

const offer = packages.tune;

export const metadata: Metadata = {
  title: "Profile Tune-Up, $490",
  description:
    "Your Google Business Profile done properly. $490 one-off, paid by bank transfer. Fixed list of work.",
  alternates: { canonical: routes.tuneUp },
};

export default function TuneUpPage() {
  return (
    <PackagePage
      offer={offer}
      title="Profile Tune-Up"
      lede="Your Google Business Profile, done properly. That's the listing people see on Google Maps and beside the search results, with your stars, photos, hours and phone number. For most local businesses it brings in more calls than the website does."
      includesHeading="What you get for $490"
      includesIntro={
        <>This is the whole list. When every item is ticked, the job is done.</>
      }
      includes={[
        "Categories set correctly, including the one that matches your most profitable job.",
        "Every service listed and described, using the words customers actually type.",
        "Service area set to where you actually work.",
        "Description, hours, phone, website and quote or booking link filled in and checked.",
        "Your real photos chosen, named and uploaded. No stock images.",
        "Common questions answered on the profile.",
        "Duplicate listings found and removed or merged.",
        "Name, address and phone made identical on the ten directories that matter.",
        "Review-request link and a text-message template for after every job.",
        "Call and click tracking switched on.",
        "One-page “what next” note and a 20-minute handover call.",
      ]}
      afterIncludes={
        <div className="mt-10">
          <h3 className="font-serif text-2xl text-navy">Who it&apos;s for</h3>
          <ul className="mt-4 space-y-3 text-ink-muted">
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-copper" />
              <span>Your website is fine, but your Google profile is half-finished, wrong, or you&apos;ve never really touched it.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-copper" />
              <span>You don&apos;t have a website yet. Your Google profile is your website, so get it right first.</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-copper" />
              <span>You&apos;ve changed name, address or phone and things are inconsistent online.</span>
            </li>
          </ul>
          <p className="mt-6 text-ink-muted">
            Website work is not included. That&apos;s the{" "}
            <a href={routes.fixUp} className="underline">
              Website Fix-Up
            </a>
            . If you don&apos;t have a site and want one, see{" "}
            <a href={routes.newWebsite} className="underline">
              New Website
            </a>
            .
          </p>
        </div>
      }
      faqs={[
        {
          id: "maps-top",
          question: "Will this get me to the top of Google Maps?",
          answer:
            "That's the aim. A complete, accurate profile with real reviews is the biggest thing you control for the Map pack. I can't lock a specific pin on a specific day — nobody honest can — but this is the work that gets local businesses into those top three spots.",
        },
        {
          id: "myself",
          question: "Can't I just do this myself?",
          answer:
            "You can, and I'll happily tell you how in the free check. Most owners start, get busy, and leave it half done.",
        },
        {
          id: "locations",
          question: "What if I have more than one location?",
          answer:
            "Each location has its own profile. Two or more locations: $390 each after the first.",
        },
        {
          id: "fake",
          question: "Do you write fake reviews?",
          answer:
            "No. Never. I set up an easy way for real customers to leave real reviews.",
        },
      ]}
      enquiry={{
        heading: "Book a Profile Tune-Up",
        intro:
          "$490 plus GST, paid by bank transfer before I start. I'll reply within one business day with an invoice and a finish date.",
        submitLabel: "Book the Tune-Up",
        defaultOffer: "Profile Tune-Up",
        fields: ["business", "area", "name", "email", "phone", "start"],
        required: ["business", "area", "name", "email", "phone"],
        successTitle: "Thanks, {name}.",
        successLead:
          "I'll email {email} within one business day with an invoice for $490 plus GST and a finish date for {business}. Once the invoice is paid, I start.",
      }}
    />
  );
}
