import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { brand, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Alexander Nott",
  description:
    "I'm Alexander Nott. TakeoffSEO is me. Gold Coast based, working with local businesses anywhere in Australia.",
  alternates: { canonical: routes.about },
};

export default function AboutPage() {
  return (
    <div>
      <PageBand>
        <PageHero
          tone="dark"
          eyebrow="About"
          title="I'm Alexander Nott. TakeoffSEO is me."
          lede="Based on the Gold Coast. Working with local businesses anywhere in Australia, online. When you hire TakeoffSEO, I'm the one who answers the phone and the one who does the work."
        />
      </PageBand>
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div
            className="flex aspect-[4/5] max-w-sm items-center justify-center rounded-sm border border-dashed border-line bg-paper-200 text-xs uppercase tracking-widest text-ink-soft"
            aria-hidden
          >
            [ FOUNDER PHOTO ]
          </div>
          <div>
            <h2 className="font-serif text-3xl text-navy sm:text-4xl">
              Why I run it this way
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Most SEO agencies work like this: a salesperson wins you over, an
              account manager keeps you calm, and someone you never meet does
              the work. Prices are hidden because they&apos;re set per client.
              Reports are long because they need to look like a lot happened.
            </p>
            <p className="mt-3 leading-relaxed text-ink-muted">
              I don&apos;t think that&apos;s a good deal for an owner who just
              wants the phone to ring more often with the right jobs.
            </p>
            <p className="mt-3 leading-relaxed text-ink-muted">
              So I run TakeoffSEO the other way. Every price is on the site.
              Every package is a checklist you can tick off. You talk to me, I
              do the work, and the report fits on one page.
            </p>
            <h2 className="mt-10 font-serif text-3xl text-navy">What I focus on</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              One thing: helping local businesses get found when someone nearby
              searches, on Google, on Google Maps, and increasingly in AI tools
              like ChatGPT. That means your Google profile, your website, and
              your reviews. I don&apos;t do ads, social media, logos or
              &quot;full-service marketing&quot;. When you need those, I&apos;ll
              say so.
            </p>
            <h2 className="mt-10 font-serif text-3xl text-navy">Proof</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Work is founder-led and TakeoffSEO is a young business. I&apos;ll
              add client names and what we did for them here as clients give
              permission. I won&apos;t make anything up in the meantime.
            </p>
            <div className="mt-8 rounded-sm border border-line bg-paper-50 p-5 text-sm">
              <p>
                <strong>{brand.founder}</strong>
                <br />
                Founder, TakeoffSEO
                <br />
                Gold Coast, Queensland
                <br />
                <a href={`tel:${brand.phoneTel}`}>{brand.phoneDisplay}</a>
                {" · "}
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
                <br />
                <span className="text-ink-soft">ABN {brand.abn}</span>
              </p>
            </div>
          </div>
        </div>
        <CtaBand
          title="See if we're a fit. It costs nothing."
          body="Start with the free check, or just say hello."
          primaryHref={routes.freeCheck}
          primaryLabel="Get your free check"
          secondaryHref={routes.contact}
          secondaryLabel="Or just say hello"
        />
      </div>
    </div>
  );
}
