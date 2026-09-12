import { LoopVideo } from "@/components/home/LoopVideo";
import { ParallaxPhoto } from "@/components/home/ParallaxPhoto";
import { Reveal } from "@/components/Reveal";
import { howTakeoff, media } from "@/lib/home";
import type { PhotoKey } from "@/lib/home";

export function HowTakeoffHelps() {
  return (
    <section className="bg-paper-100">
      <div className="relative isolate overflow-hidden">
        <LoopVideo
          src={media.motionPool}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-navy/78" />
        <div className="relative mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-28">
          <Reveal className="max-w-4xl text-paper-50">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              {howTakeoff.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              {howTakeoff.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper-200 sm:text-xl">
              {howTakeoff.lede}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="divide-y divide-line/70">
        {howTakeoff.steps.map((step) => (
          <article
            key={step.id}
            className="mx-auto grid max-w-site items-stretch lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
              <Reveal>
                <p className="font-serif text-4xl text-copper">{step.numeral}</p>
                <h3 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </Reveal>
            </div>
            <ParallaxPhoto
              photo={step.image as PhotoKey}
              alt={step.imageAlt}
              className="min-h-[22rem] sm:min-h-[30rem]"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
