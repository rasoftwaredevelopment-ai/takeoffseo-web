import { CinematicBand } from "@/components/home/CinematicBand";
import { howTakeoff } from "@/lib/home";
import type { PhotoKey } from "@/lib/home";

export function HowTakeoffHelps() {
  return (
    <div>
      {howTakeoff.steps.map((step, index) => (
        <CinematicBand
          key={step.id}
          kicker={
            index === 0
              ? howTakeoff.eyebrow
              : `${step.numeral} · ${step.title}`
          }
          title={index === 0 ? howTakeoff.title : step.title}
          titleAs={index === 0 ? "h2" : "h3"}
          body={index === 0 ? howTakeoff.lede : step.body}
          photo={step.image as PhotoKey}
          photoAlt={step.imageAlt}
          video={"video" in step ? step.video : undefined}
          poster={"video" in step ? "/media/hero-poster.webp" : undefined}
          overlay={step.id === "found" ? "heavy" : "default"}
        >
          {index === 0 ? (
            <div className="max-w-2xl border-t border-white/15 pt-8">
              <p className="font-serif text-4xl text-copper">{step.numeral}</p>
              <h3 className="mt-2 font-serif text-4xl text-paper-50 sm:text-5xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper-200">
                {step.body}
              </p>
            </div>
          ) : null}
        </CinematicBand>
      ))}
    </div>
  );
}
