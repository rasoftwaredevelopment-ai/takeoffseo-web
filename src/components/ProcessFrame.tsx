import { processSteps } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function ProcessFrame() {
  return (
    <section aria-labelledby="process-heading" className="mt-20">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          How the work runs
        </p>
        <h2
          id="process-heading"
          className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
        >
          Four steps. No surprises.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          You&apos;ll always know what I&apos;m doing and why.
        </p>
      </Reveal>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal
            as="li"
            key={step.title}
            delayMs={index * 90}
            className="process-step card-hover relative overflow-hidden p-7"
          >
            <p className="font-serif text-5xl leading-none text-copper/80">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-6 font-serif text-2xl text-navy sm:text-3xl">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
