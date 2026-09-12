import { howWeWork, whatYouGet } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function WhatYouGet() {
  return (
    <section aria-labelledby="what-you-get-heading" className="mt-20">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          Clarity
        </p>
        <h2
          id="what-you-get-heading"
          className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
        >
          What you get
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Reveal
          as="article"
          className="rounded-sm border border-forest/25 bg-forest-800 p-7 text-paper-50 sm:p-8"
        >
          <h3 className="font-serif text-3xl">The work</h3>
          <ul className="mt-6 space-y-4">
            {whatYouGet.map((item) => (
              <li key={item} className="flex gap-3 text-paper-200">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-copper" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          as="article"
          delayMs={40}
          className="rounded-sm border border-line bg-paper-50 p-7 sm:p-8"
        >
          <h3 className="font-serif text-3xl text-navy">How we work</h3>
          <ul className="mt-6 space-y-4">
            {howWeWork.map((item) => (
              <li key={item} className="flex gap-3 text-ink-muted">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-copper" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
