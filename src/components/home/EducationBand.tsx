import { ParallaxPhoto } from "@/components/home/ParallaxPhoto";
import { Reveal } from "@/components/Reveal";
import { education } from "@/lib/home";
import type { PhotoKey } from "@/lib/home";

export function EducationBand() {
  return (
    <section className="bg-paper-100">
      <div className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            {education.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            {education.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {education.lede}
          </p>
        </Reveal>
      </div>

      {education.surfaces.map((surface, index) => {
        const photoLeft = index % 2 === 1;
        return (
          <article
            key={surface.id}
            className={`border-t border-line/70 ${
              index % 2 === 0 ? "bg-paper-50" : "bg-navy text-paper-50"
            }`}
          >
            <div
              className={`mx-auto grid max-w-site items-stretch lg:grid-cols-2 ${
                photoLeft ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
                <Reveal>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                      index % 2 === 0 ? "text-copper" : "text-copper"
                    }`}
                  >
                    {surface.kicker}
                  </p>
                  <h3
                    className={`mt-4 font-serif text-3xl leading-tight sm:text-4xl ${
                      index % 2 === 0 ? "text-navy" : "text-paper-50"
                    }`}
                  >
                    {surface.title}
                  </h3>
                  <p
                    className={`mt-5 max-w-xl text-lg leading-relaxed ${
                      index % 2 === 0 ? "text-ink-muted" : "text-paper-200"
                    }`}
                  >
                    {surface.body}
                  </p>
                </Reveal>
              </div>
              <ParallaxPhoto
                photo={surface.image as PhotoKey}
                alt={surface.imageAlt}
                className="min-h-[22rem] sm:min-h-[28rem] lg:min-h-full"
              />
            </div>
          </article>
        );
      })}
    </section>
  );
}
