import { ButtonLink } from "@/components/ButtonLink";
import { CinematicBand } from "@/components/home/CinematicBand";
import { aboutTeaser } from "@/lib/home";
import { routes } from "@/lib/site";

export function AboutTeaser() {
  return (
    <CinematicBand
      kicker={aboutTeaser.eyebrow}
      title={aboutTeaser.title}
      body={aboutTeaser.body}
      photo={aboutTeaser.photo}
      photoAlt="Coastal house at last light — Gold Coast based, South East Queensland served"
      size="full"
    >
      <dl className="mt-2 grid max-w-3xl gap-8 sm:grid-cols-2">
        {aboutTeaser.points.map((point) => (
          <div key={point.label} className="border-t border-white/20 pt-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              {point.label}
            </dt>
            <dd className="mt-2 font-serif text-3xl text-paper-50 sm:text-4xl">
              {point.value}
            </dd>
          </div>
        ))}
      </dl>
      <ButtonLink href={routes.about} variant="inverse" className="mt-12">
        {aboutTeaser.cta}
      </ButtonLink>
    </CinematicBand>
  );
}
