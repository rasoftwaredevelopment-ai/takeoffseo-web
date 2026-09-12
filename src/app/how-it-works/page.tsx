import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "You'll always know what I'm doing and why. Free check, pick a package, I do the work, you see what changed.",
  alternates: { canonical: routes.howItWorks },
};

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
      <PageHero
        eyebrow="How it works"
        title="You'll always know what I'm doing and why."
        lede="Here's the whole process, what I measure, the tools I use, and the things I refuse to do."
      />
      <ol className="mt-12 grid gap-6 md:grid-cols-5">
        {[
          ["Free check", "You fill in a short form. In two business days you get a one-page email saying where you stand."],
          ["Pick a package", "Tune-Up, Fix-Up, New Website or Monthly. The check tells you which. Book it from the site or call me."],
          ["Access and plan", "You give me access to your Google profile and website. I write down exactly what I'll do and a finish date. You sign it off."],
          ["The work", "I do it. Short email every Friday. You approve every page before it's live."],
          ["Report", "What changed, in calls and enquiries. Then you keep going, do it yourself, or stop."],
        ].map(([title, body], i) => (
          <li key={title}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy font-serif text-paper-50">
              {i + 1}
            </span>
            <h3 className="mt-3 font-semibold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-navy">What I measure</h2>
          <p className="mt-3 text-ink-muted">
            Rankings move around every day and don&apos;t pay the bills. I track
            the things that do: calls from your Google profile and website;
            enquiries; direction requests; how often you appear for the 20
            searches that bring you work; and reviews.
          </p>
          <p className="mt-3 text-ink-muted">
            I set this up in the first week of any paid package, so we have a
            &quot;before&quot; to compare against. The Friday email and the
            monthly report use the same numbers.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-navy">What I won&apos;t do</h2>
          <ul className="mt-4 space-y-2 text-ink-muted">
            <li>× Promise rankings, &quot;page one&quot; or an AI mention.</li>
            <li>× Buy or fake reviews. Against Google&apos;s rules and against the law in Australia.</li>
            <li>× Buy links or use tricks that work for a month and then get you penalised.</li>
            <li>× Make dozens of near-identical suburb pages.</li>
            <li>× Lock you in. Monthly plans are month to month. 30 days&apos; notice.</li>
            <li>× Keep your accounts. If we part ways, everything stays with you.</li>
          </ul>
        </div>
      </div>
      <CtaBand
        title="Start with the free check."
        body="Two business days. One page. Then you decide."
        primaryHref={routes.freeCheck}
        primaryLabel="Get your free check"
        secondaryHref={routes.pricing}
        secondaryLabel="See prices"
      />
    </div>
  );
}
