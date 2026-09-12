import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { SampleSnapshot } from "@/components/SampleSnapshot";
import { StockPicture } from "@/components/StockPicture";
import { breadcrumbJsonLd } from "@/lib/schema";
import { aboutCopy, brand, homeCopy, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: aboutCopy.pageTitle },
  description: aboutCopy.lede,
  alternates: { canonical: routes.about },
};

export default function AboutPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "About", path: routes.about },
        ])}
      />

      <section aria-labelledby="about-heading" className="hero-cinematic">
        <div className="hero-media" aria-hidden>
          <StockPicture
            name="night-city"
            className="hero-media__poster hero-media__poster--still"
          />
        </div>
        <div className="hero-scrim" aria-hidden />
        <div className="hero-copy">
          <div className="hero-copy__main">
            <div className="hero-stagger max-w-4xl">
              <h1 id="about-heading" className="font-serif font-semibold text-display">
                {aboutCopy.h1}
              </h1>
              <p className="hero-sub">{aboutCopy.sub}</p>
              <p className="hero-lede">{aboutCopy.lede}</p>
              <div className="hero-actions">
                <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
                  {homeCopy.primaryCta}
                </ButtonLink>
                <p className="hero-nap">
                  <a href={`tel:${brand.phoneTel}`}>{brand.phoneDisplay}</a>
                  <span aria-hidden> · </span>
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                </p>
              </div>
              <p className="hero-support hero-support--late">
                {aboutCopy.locationLine}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="who-i-am-heading"
        className="section-band section-band--navy"
      >
        <div className="section-inner">
          <h2 id="who-i-am-heading" className="section-h2">
            {aboutCopy.whoTitle}
          </h2>
          <p className="section-lede">{aboutCopy.whoLead}</p>
          <p className="section-close">{aboutCopy.whoBody}</p>
          <p className="section-close">{aboutCopy.whoClose}</p>
          <dl className="about-facts">
            <div>
              <dt>Founder</dt>
              <dd>{brand.founder}</dd>
            </div>
            <div>
              <dt>Based</dt>
              <dd>{brand.locationLabel}</dd>
            </div>
            <div>
              <dt>Area served</dt>
              <dd>{brand.areaServed}</dd>
            </div>
            <div>
              <dt>Delivery</dt>
              <dd>{aboutCopy.delivery}</dd>
            </div>
          </dl>
          <div className="mt-10">
            <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="focus-heading"
        className="section-band section-band--paper"
      >
        <div className="section-inner">
          <h2 id="focus-heading" className="section-h2">
            {aboutCopy.focusTitle}
          </h2>
          <p className="section-lede">{aboutCopy.focusBody}</p>
          <div className="scope-grid">
            <article>
              <h3 className="chapter-h3">In scope</h3>
              <ul>
                {aboutCopy.inScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3 className="chapter-h3">Out of scope</h3>
              <ul>
                {aboutCopy.outOfScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="about-punch">{aboutCopy.punchOnce}</p>
        </div>
      </section>

      <section
        aria-labelledby="work-together-heading"
        className="section-band section-band--navy"
      >
        <div className="section-inner">
          <h2 id="work-together-heading" className="section-h2">
            {aboutCopy.workTitle}
          </h2>
          <ol className="chapter-list about-steps">
            {aboutCopy.workSteps.map((step, index) => (
              <li key={step.title} className="chapter-row">
                <h3 className="chapter-h3">
                  <span className="about-step-num">{index + 1}</span>
                  {step.title}
                </h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="section-close">{aboutCopy.workClose}</p>
        </div>
      </section>

      <section
        aria-labelledby="values-heading"
        className="section-band section-band--ink-deep"
      >
        <div className="section-inner">
          <h2 id="values-heading" className="section-h2">
            {aboutCopy.valuesTitle}
          </h2>
          <ul className="value-stack">
            {aboutCopy.values.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="about-snapshot-heading"
        className="section-band section-band--navy"
      >
        <div className="section-inner">
          <h2 id="about-snapshot-heading" className="section-h2">
            {aboutCopy.sampleTitle}
          </h2>
          <SampleSnapshot />
          <CtaBand
            title={aboutCopy.closeTitle}
            body={homeCopy.closeBody}
            primaryLabel={homeCopy.primaryCta}
            showLocation
          />
        </div>
      </section>
    </div>
  );
}
