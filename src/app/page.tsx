import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { HeroVideo } from "@/components/HeroVideo";
import { PlatformMarks } from "@/components/PlatformMarks";
import { SampleSnapshot } from "@/components/SampleSnapshot";
import { StockPicture } from "@/components/StockPicture";
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
          <div className="hero-copy__main">
            <div className="hero-stagger max-w-4xl">
              <p className="hero-punch">{homeCopy.eyebrow}</p>
              <h1 id="visibility-heading" className="font-serif font-semibold text-display">
                {homeCopy.h1}
              </h1>
              <p className="hero-support">{homeCopy.support}</p>
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
          </div>
          <div className="hero-platforms">
            <p className="hero-platforms__label">{homeCopy.platformsLabel}</p>
            <PlatformMarks />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="where-jobs-heading"
        className="section-band section-band--navy"
      >
        <div className="section-inner">
          <h2 id="where-jobs-heading" className="section-h2">
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
          <div className="mt-10">
            <p className="hero-platforms__label">{homeCopy.platformsLabel}</p>
            <PlatformMarks />
          </div>
          <div className="mt-10">
            <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="sample-look-heading"
        className="section-band section-band--ink-deep"
      >
        <div className="section-inner">
          <h2 id="sample-look-heading" className="section-h2">
            {homeCopy.sampleTitle}
          </h2>
          <SampleSnapshot />
        </div>
      </section>

      <figure className="photo-band">
        <StockPicture name="night-city" className="photo-band__image" />
        <div className="photo-band__scrim" aria-hidden />
        <figcaption className="photo-band__copy">
          <p>{homeCopy.locationLine}</p>
        </figcaption>
      </figure>

      <section
        aria-labelledby="how-takeoff-heading"
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
          <h2 id="how-takeoff-heading" className="section-h2">
            {homeCopy.howTitle}
          </h2>
          <p className="section-lede">{homeCopy.takeoffHelp}</p>
          <div className="mt-10">
            <ButtonLink href={routes.snapshotEnquire} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="section-band section-band--navy">
        <div className="section-inner section-inner--tight">
          <CtaBand
            title={homeCopy.closeTitle}
            body={homeCopy.closeBody}
            primaryLabel={homeCopy.primaryCta}
            showLocation
            flush
          />
        </div>
      </div>
    </div>
  );
}
