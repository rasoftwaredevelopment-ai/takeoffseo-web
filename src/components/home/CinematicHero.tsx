import { LoopVideo } from "@/components/home/LoopVideo";
import { ButtonLink } from "@/components/ButtonLink";
import { homeCopy, media } from "@/lib/home";
import { brand, routes } from "@/lib/site";

export function CinematicHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy text-paper-50">
      <LoopVideo
        src={media.heroVideo}
        poster={media.heroPoster}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-site flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:pb-24">
        <div className="hero-stagger max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {homeCopy.eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-display text-paper-50">
            {homeCopy.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-100 sm:text-xl">
            {homeCopy.subline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper-300 sm:text-base">
            {homeCopy.locationLine}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={routes.snapshot} variant="inverseSolid">
              {homeCopy.primaryCta}
            </ButtonLink>
            <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
              {homeCopy.phoneCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
