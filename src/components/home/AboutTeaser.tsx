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
      photo="coast-seq"
      photoAlt="SEQ coastline at first light — Gold Coast based, South East Queensland served"
    >
      <dl className="grid max-w-xl gap-5 sm:grid-cols-2">
        {aboutTeaser.points.map((point) => (
          <div key={point.label}>
            <dt className="text-xs uppercase tracking-[0.16em] text-paper-300">
              {point.label}
            </dt>
            <dd className="mt-1 text-lg font-medium text-paper-50">
              {point.value}
            </dd>
          </div>
        ))}
      </dl>
      <ButtonLink href={routes.about} variant="inverse" className="mt-10">
        {aboutTeaser.cta}
      </ButtonLink>
    </CinematicBand>
  );
}
