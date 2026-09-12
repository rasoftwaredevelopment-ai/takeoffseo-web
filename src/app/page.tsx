import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { HeroVideo } from "@/components/HeroVideo";
import { PlatformMarks } from "@/components/PlatformMarks";
import { SampleSnapshot } from "@/components/SampleSnapshot";
import { brand, homeCopy, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} | ${brand.h1}` },
  description: brand.tagline,
  alternates: { canonical: routes.home },
};

export default function HomePage() {
  return (
    <div>
      <section
        aria-labelledby="visibility-heading"
        className="hero-cinematic"
      >
        <HeroVideo />
        <div className="hero-scrim" aria-hidden />
        <div className="hero-copy">
          <div className="hero-stagger max-w-4xl">
            <p className="hero-punch">{homeCopy.eyebrow}</p>
            <h1 id="visibility-heading" className="font-serif font-semibold text-display">
              {homeCopy.h1}
            </h1>
            <p className="hero-lede">{homeCopy.lede}</p>
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
          </div>
          <div className="hero-platforms">
            <p className="hero-platforms__label">{homeCopy.platformsLabel}</p>
            <PlatformMarks />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="visibility-what-heading"
        className="section-band section-band--paper"
      >
        <div className="section-inner">
          <h2 id="visibility-what-heading" className="section-h2">
            {homeCopy.visibilityTitle}
          </h2>
          <p className="section-lede">{homeCopy.visibilityBody}</p>
          <div className="chapter-list">
            {homeCopy.visibilityChapters.map((chapter) => (
              <article key={chapter.title} className="chapter-row">
                <h3 className="chapter-h3">{chapter.title}</h3>
                <p>{chapter.body}</p>
              </article>
            ))}
          </div>
          <p className="section-close">{homeCopy.visibilityClose}</p>
          <div className="mt-8">
            <ButtonLink href={routes.snapshotEnquire}>
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="visibility-why-heading"
        className="section-band section-band--navy"
      >
        <div className="section-inner">
          <h2 id="visibility-why-heading" className="section-h2">
            {homeCopy.whyTitle}
          </h2>
          <div className="chapter-list">
            {homeCopy.whyChapters.map((chapter) => (
              <article key={chapter.title} className="chapter-row">
                <h3 className="chapter-h3">{chapter.title}</h3>
                <p>{chapter.body}</p>
              </article>
            ))}
          </div>
          <p className="section-close">{homeCopy.whyClose}</p>
          <div className="mt-8">
            <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <figure className="photo-band">
        <picture>
          <source srcSet="/images/bands/night-city.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bands/night-city.jpg"
            alt=""
            className="photo-band__image"
          />
        </picture>
        <div className="photo-band__scrim" aria-hidden />
        <figcaption className="photo-band__copy">
          <p>{homeCopy.locationLine}</p>
        </figcaption>
      </figure>

      <section
        aria-labelledby="how-takeoff-heading"
        className="section-band section-band--paper"
      >
        <div className="section-inner">
          <p className="section-eyebrow">{homeCopy.howEyebrow}</p>
          <h2 id="how-takeoff-heading" className="section-h2">
            {homeCopy.howTitle}
          </h2>
          <p className="section-lede">{homeCopy.takeoffHelp}</p>
          <h3 className="chapter-h3 mt-12">{homeCopy.workTitle}</h3>
          <div className="chapter-list">
            {homeCopy.workChapters.map((chapter) => (
              <article key={chapter.title} className="chapter-row">
                <h3 className="chapter-h3">{chapter.title}</h3>
                <p>{chapter.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href={routes.snapshotEnquire}>
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
          <SampleSnapshot />
        </div>
      </section>

      <div className="section-band section-band--navy">
        <div className="section-inner section-inner--tight">
          <CtaBand
            title={homeCopy.closeTitle}
            body={homeCopy.closeBody}
            primaryLabel={homeCopy.foundCta}
            showLocation
            flush
          />
        </div>
      </div>
    </div>
  );
}
