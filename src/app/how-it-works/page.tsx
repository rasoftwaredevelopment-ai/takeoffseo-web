import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "You'll always know what I'm doing and why. The work is aimed at the top of Google without ads.",
  alternates: { canonical: routes.howItWorks },
};

export default function HowItWorksPage() {
  return (
    <div>
      <PageBand>
        <PageHero
          tone="dark"
          eyebrow="How it works"
          title="You'll always know what I'm doing and why."
          lede="The aim is the top of Google and Maps — without buying ads. Here's the process, what I measure, and the things I refuse to do."
        />
      </PageBand>
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {(
            [
              [
                "Free check",
                "You fill in a short form. In two business days you get a one-page email saying where you stand.",
              ],
              [
                "Pick a package",
                "Tune-Up, Fix-Up, New Website or Monthly. The check tells you which. Book it from the site or call me.",
              ],
              [
                "Access and plan",
                "You give me access to your Google profile and website. I write down exactly what I'll do and a finish date. You sign it off.",
              ],
              [
                "The work",
                "I do it. Short email every Friday. You approve every page before it's live.",
              ],
              [
                "Report",
                "What changed, in calls and enquiries. Then you keep going, do it yourself, or stop.",
              ],
            ] as const
          ).map(([title, body], i) => (
            <li key={title} className="card-hover p-6">
              <p className="font-serif text-4xl leading-none text-copper">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              What I measure
            </h2>
            <p className="mt-3 text-ink-muted">
              The job is to put you at the top of Google and Maps for the
              searches that bring work — without buying the ads. I track those
              searches, plus the things that pay the bills: calls from your
              Google profile and website, enquiries, direction requests, and
              reviews.
            </p>
            <p className="mt-3 text-ink-muted">
              Rankings move around a bit every day. That&apos;s why the report
              isn&apos;t just a screenshot of position one. I set tracking up in
              the first week of any paid package, so we have a &quot;before&quot;
              to compare against. The Friday email and the monthly report use
              the same numbers.
            </p>
          </div>
          <div className="rounded-sm border border-line bg-paper-50 p-7">
            <h2 className="font-serif text-3xl text-navy">What I won&apos;t do</h2>
            <ul className="mt-4 space-y-3 text-ink-muted">
              <li>× Sell you Google Ads, or a fake &quot;#1 guaranteed&quot; badge. The work is aimed at the top. Google still decides the exact order on a given day.</li>
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
    </div>
  );
}
