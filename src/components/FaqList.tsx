"use client";

import { useEffect } from "react";
import type { FaqItem } from "@/lib/site";

type FaqListProps = {
  items: FaqItem[];
  title?: string;
};

export function FaqList({ items, title = "Questions" }: FaqListProps) {
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
    <section aria-labelledby="faq-heading" className="mt-16">
      <h2
        id="faq-heading"
        className="font-serif text-4xl leading-tight text-navy sm:text-5xl"
      >
        {title}
      </h2>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details
            key={item.id}
            id={item.id}
            className="group scroll-mt-28 py-5"
          >
            <summary className="cursor-pointer list-none font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-6">
                <span className="text-lg leading-snug">{item.question}</span>
                <span
                  aria-hidden
                  className="mt-1 text-ink-soft transition motion-safe:group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-3xl leading-relaxed text-ink-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
