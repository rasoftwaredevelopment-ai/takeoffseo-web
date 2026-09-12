import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Profile Tune-Up, $490",
  description:
    "Your Google Business Profile done properly. $490 one-off, paid by bank transfer. Fixed list of work.",
  alternates: { canonical: routes.tuneUp },
};

export default function TuneUpPage() {
  return (
    <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
      <PageHero
        eyebrow="$490 one-off · fixed list of work"
        title="Profile Tune-Up"
        lede="Your Google Business Profile, done properly. That's the listing people see on Google Maps and beside the search results, with your stars, photos, hours and phone number. For most local businesses it brings in more calls than the website does."
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#book">Book a Tune-Up</ButtonLink>
          <ButtonLink href={routes.freeCheck} variant="secondary">
            Not sure? Free check first
          </ButtonLink>
        </div>
      </PageHero>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-serif text-3xl text-navy">Who it&apos;s for</h2>
          <ul className="mt-4 space-y-2 text-ink-muted">
            <li>Your website is fine, but your Google profile is half-finished, wrong, or you&apos;ve never really touched it.</li>
            <li>You don&apos;t have a website yet. Your Google profile is your website, so get it right first.</li>
            <li>You&apos;ve changed name, address or phone and things are inconsistent online.</li>
            <li>You want a small, low-risk first job before anything bigger.</li>
          </ul>
          <h2 className="mt-10 font-serif text-3xl text-navy">What you get for $490</h2>
          <p className="mt-3 text-ink-muted">This is the whole list. When every item is ticked, the job is done.</p>
          <ul className="mt-4 space-y-2 text-ink-muted">
            <li>Categories set correctly, including the one that matches your most profitable job.</li>
            <li>Every service listed and described, using the words customers actually type.</li>
            <li>Service area set to where you actually work.</li>
            <li>Description, hours, phone, website and quote or booking link filled in and checked.</li>
            <li>Your real photos chosen, named and uploaded. No stock images.</li>
            <li>Common questions answered on the profile.</li>
            <li>Duplicate listings found and removed or merged.</li>
            <li>Name, address and phone made identical on the ten directories that matter.</li>
            <li>Review-request link and a text-message template for after every job.</li>
            <li>Call and click tracking switched on.</li>
            <li>One-page &quot;what next&quot; note and a 20-minute handover call.</li>
          </ul>
          <h2 className="mt-10 font-serif text-3xl text-navy">What I need from you</h2>
          <ul className="mt-4 space-y-2 text-ink-muted">
            <li>Access to your Google Business Profile. If you don&apos;t have it, I&apos;ll show you how to claim it.</li>
            <li>A list of your services and the areas you cover.</li>
            <li>Ten or more real photos.</li>
            <li>About an hour of your time, mostly answering questions.</li>
          </ul>
          <p className="mt-6 text-ink-muted">
            Website work is not included. That&apos;s the{" "}
            <a href={routes.fixUp} className="underline">Website Fix-Up</a>. If you
            don&apos;t have a site and want one, see{" "}
            <a href={routes.newWebsite} className="underline">New Website</a>.
          </p>
        </div>
        <div id="book">
          <EnquiryForm
            heading="Book a Profile Tune-Up"
            intro="$490 plus GST, paid by bank transfer before I start. I'll reply within one business day with an invoice and a finish date."
            submitLabel="Book the Tune-Up"
            defaultOffer="Profile Tune-Up"
            fields={["business", "area", "name", "email", "phone", "start"]}
            required={["business", "area", "name", "email", "phone"]}
            successTitle="Thanks, {name}."
            successLead="I'll email {email} within one business day with an invoice for $490 plus GST and a finish date for {business}. Once the invoice is paid, I start."
          />
        </div>
      </div>
      <FaqList
        items={[
          { id: "maps-top", question: "Will this get me to the top of Google Maps?", answer: "I can't promise where you'll appear. Nobody can. A complete, accurate profile with steady reviews is the biggest factor you control." },
          { id: "myself", question: "Can't I just do this myself?", answer: "You can, and I'll happily tell you how in the free check. Most owners start, get busy, and leave it half done." },
          { id: "locations", question: "What if I have more than one location?", answer: "Each location has its own profile. Two or more locations: $390 each after the first." },
          { id: "fake", question: "Do you write fake reviews?", answer: "No. Never. I set up an easy way for real customers to leave real reviews." },
        ]}
      />
    </div>
  );
}
