import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PlatformMarks } from "@/components/PlatformMarks";
import { SampleSnapshot } from "@/components/SampleSnapshot";
import { StockPicture } from "@/components/StockPicture";
import { breadcrumbJsonLd } from "@/lib/schema";
import { aboutCopy, brand, homeCopy, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: aboutCopy.pageTitle },
  description: aboutCopy.lede,
  alternates: { canonical: routes.about },
};

function SnapshotCta() {
  return (
    <div className="mt-10">
      <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
        {homeCopy.primaryCta}
      </ButtonLink>
    </div>
  );
}

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
          <div className="hero-platforms">
            <p className="hero-platforms__label">{homeCopy.platformsLabel}</p>
            <PlatformMarks />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="who-i-am-heading"
        className="section-band section-band--navy"
      >
        <div className="section-inner about-who">
          <div className="about-who__copy">
            <h2 id="who-i-am-heading" className="section-h2">
              {aboutCopy.whoTitle}
            </h2>
            <p className="about-who__lead">{aboutCopy.whoLead}</p>
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
            <SnapshotCta />
          </div>
          <aside className="about-mark" aria-hidden>
            <span className="about-mark__disc">
              <svg viewBox="0 0 24 24" className="about-mark__icon" fill="none">
                <path
                  d="M4 16.5 12 5.5 20 16.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path d="M8 16.5h8" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <p className="about-mark__name">{brand.name}</p>
            <p className="about-mark__line">{aboutCopy.delivery}</p>
          </aside>
        </div>
      </section>

      <figure className="photo-band">
        <StockPicture name="night-city" className="photo-band__image" />
        <div className="photo-band__scrim" aria-hidden />
        <figcaption className="photo-band__copy">
          <p>{aboutCopy.locationLine}</p>
        </figcaption>
      </figure>

      <section
        aria-labelledby="focus-heading"
        className="media-split"
      >
        <div className="media-split__visual">
          <StockPicture
            name="office-desk"
            className="media-split__image"
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
        <div className="media-split__copy">
          <h2 id="focus-heading" className="section-h2">
            {aboutCopy.focusTitle}
          </h2>
          <p className="section-lede">{aboutCopy.focusBody}</p>
          <div className="scope-grid scope-grid--on-dark">
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
          <p className="about-punch about-punch--on-dark">{aboutCopy.punchOnce}</p>
          <SnapshotCta />
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
          <SnapshotCta />
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
          <SnapshotCta />
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
