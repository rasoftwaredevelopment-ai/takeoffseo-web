import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { routes, whoItsForGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who it's for",
  description:
    "Local businesses that win work by phone or booking. Gold Coast based, working anywhere in Australia.",
  alternates: { canonical: routes.whoItsFor },
};

export default function WhoItsForPage() {
  return (
    <div>
      <PageBand>
        <PageHero
          tone="dark"
          eyebrow="Who it's for"
          title="Local businesses that win work by phone or booking."
          lede="The test is simple. Does a customer search for what you do, compare two or three options, then call or book? If yes, this is for you."
        />
      </PageBand>
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {whoItsForGroups.map((group) => (
            <article key={group.title} className="card-hover p-6">
              <h3 className="font-serif text-2xl text-navy">{group.title}</h3>
              <p className="mt-3 text-ink-muted">{group.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-sm border border-line bg-paper-50 p-7">
            <h2 className="font-serif text-3xl text-navy">Who it&apos;s not for</h2>
            <ul className="mt-4 space-y-3 text-ink-muted">
              <li>× Online shops shipping Australia-wide. Different game.</li>
              <li>× National brands or franchises with head-office marketing.</li>
              <li>× Anyone wanting ads, social media, or branding.</li>
              <li>× Businesses that need results this month. Ads can do that. Search takes longer and lasts longer.</li>
              <li>× Anyone who wants a guarantee of rankings.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">Where</h2>
            <p className="mt-3 text-ink-muted">
              I&apos;m based on the Gold Coast. I work with local businesses
              anywhere in Australia.
            </p>
            <p className="mt-3 text-ink-muted">
              Every part of the job happens online: your Google profile, your
              website, the directories, the tracking. So it makes no difference
              whether you&apos;re in Burleigh Heads, Ballarat or Broome. We talk
              by phone or video, and you get a short email every Friday either
              way.
            </p>
            <p className="mt-3 text-ink-muted">
              Home turf is South East Queensland. If you&apos;re there and would
              rather meet in person, happy to.
            </p>
          </div>
        </div>
        <CtaBand
          title="Sound like you?"
          body="The free check will tell you where you stand and whether I can help."
          primaryHref={routes.freeCheck}
          primaryLabel="Get your free check"
        />
      </div>
    </div>
  );
}
