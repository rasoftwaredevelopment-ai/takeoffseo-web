import { ButtonLink } from "@/components/ButtonLink";
import { ParallaxPhoto } from "@/components/home/ParallaxPhoto";
import { Reveal } from "@/components/Reveal";
import { aboutTeaser } from "@/lib/home";
import { routes } from "@/lib/site";

export function AboutTeaser() {
  return (
    <section className="bg-paper-100">
      <div className="mx-auto grid max-w-site items-stretch lg:grid-cols-2">
        <ParallaxPhoto
          photo="coast-seq"
          alt="SEQ coastline at first light — Gold Coast based, South East Queensland served"
          className="min-h-[22rem] sm:min-h-[28rem]"
        />
        <div className="flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {aboutTeaser.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">
              {aboutTeaser.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {aboutTeaser.body}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutTeaser.points.map((point) => (
                <div key={point.label}>
                  <dt className="text-xs uppercase tracking-[0.16em] text-ink-soft">
                    {point.label}
                  </dt>
                  <dd className="mt-1 font-medium text-navy">{point.value}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href={routes.about} variant="secondary" className="mt-10">
              {aboutTeaser.cta}
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
