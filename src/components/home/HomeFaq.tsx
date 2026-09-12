"use client";

import { useEffect } from "react";
import { homeFaqs } from "@/lib/home";

export function HomeFaq() {
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      const el = document.getElementById(id);
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        el.scrollIntoView({
          block: "start",
          behavior: reduce ? "auto" : "smooth",
        });
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <section className="bg-paper-50" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-site px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          Questions
        </p>
        <h2
          id="faq-heading"
          className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-navy sm:text-5xl"
        >
          Straight answers before you enquire.
        </h2>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {homeFaqs.map((item) => (
            <details
              key={item.id}
              id={item.id}
              className="group scroll-mt-28 py-6"
            >
              <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-6">
                  <span className="text-lg font-medium leading-snug text-navy sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 text-ink-soft transition motion-safe:group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
