import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { OfferPath } from "@/components/OfferPath";
import { brand, offers, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} | ${brand.h1}` },
  description: brand.tagline,
  alternates: { canonical: routes.home },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-16">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            {brand.locationLabel} · {brand.areaServed}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.12] text-navy sm:text-5xl lg:text-6xl">
            {brand.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {brand.name} helps {brand.icpPrimary.toLowerCase()} get found in
            Google Search, Maps, and AI answers. {brand.icpSecondary} Published
            prices. No ranking guarantees. Hours by appointment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={routes.contact}
              className="inline-flex items-center justify-center rounded-sm bg-forest px-5 py-3 text-sm font-semibold text-paper-50 hover:bg-forest-600"
            >
              Book a free Visibility Snapshot
            </Link>
            <Link
              href={offers.audit.href}
              className="inline-flex items-center justify-center rounded-sm border border-line bg-paper-50 px-5 py-3 text-sm font-semibold text-navy hover:bg-paper-200"
            >
              See the A$1,500 audit
            </Link>
          </div>
        </div>
        <aside className="rounded-sm border border-line bg-paper-50 p-6 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
            The path
          </p>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
            <li>
              <span className="font-semibold text-navy">Snapshot, free.</span>{" "}
              A short look at how you appear today.
            </li>
            <li>
              <span className="font-semibold text-navy">
                Audit, A$1,500.
              </span>{" "}
              Baseline, prioritised fix pack, next step.
            </li>
            <li>
              <span className="font-semibold text-navy">
                90-Day Foundation, typical A$6,500.
              </span>{" "}
              From A$4,500. Implement and measure.
            </li>
            <li>
              <span className="font-semibold text-navy">
                Retainer, from A$2,000–2,500/mo.
              </span>{" "}
              Ongoing work after the foundation.
            </li>
          </ol>
        </aside>
      </section>

      <div className="hairline my-14" />

      <section>
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">
          Who this is for
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-line bg-paper-50 p-6">
            <h3 className="font-serif text-2xl text-navy">Primary</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Pool builders and landscapers trading across South East
              Queensland who want Google and AI visibility treated as
              operations, not a ranking promise. If your jobs come from local
              search and referrals, this is the work.
            </p>
          </div>
          <div className="rounded-sm border border-line bg-paper-50 p-6">
            <h3 className="font-serif text-2xl text-navy">Case by case</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Other local service businesses in SEQ are considered when the
              work is a fit. We will say if it is not. We do not publish a
              harsh “won’t serve” list, and we do not invent a city-by-city
              coverage map.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">
          Offers, in order
        </h2>
        <p className="mt-4 max-w-2xl text-ink-muted leading-relaxed">
          Start with the free Snapshot unless you already know you need a
          diagnostic. The audit does not include implementation. The Foundation
          is the 90-day implementation. The retainer is ongoing.
        </p>
        <div className="mt-8">
          <OfferPath />
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "No fake proof",
            body: "This site does not invent reviews, case studies, or star ratings. When we have named, permitted results, they will go here.",
          },
          {
            title: "No ranking guarantees",
            body: "Google and AI answers are not sold as positions. We do the work, measure what we can observe, and tell you what we cannot control.",
          },
          {
            title: "SEQ only",
            body: `Service area is ${brand.areaServed}. Contact is ${brand.phoneDisplay} and ${brand.email}. Hours are ${brand.hours.toLowerCase()}.`,
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-sm border border-line bg-paper-50 p-6"
          >
            <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {item.body}
            </p>
          </article>
        ))}
      </section>

      <CtaBand
        title="Request a Visibility Snapshot"
        body="Send the website and Google Business Profile. We will come back with a short written look and whether an audit is the useful next step."
      />
    </div>
  );
}
