"use client";

import { useEffect } from "react";
import { CinematicBand } from "@/components/home/CinematicBand";
import { homeFaqs, media } from "@/lib/home";

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
    <CinematicBand
      kicker="Questions"
      title="Straight answers before you enquire."
      video={media.motionCoast}
      size="full"
    >
      <div className="divide-y divide-white/15 border-y border-white/15">
        {homeFaqs.map((item) => (
          <details
            key={item.id}
            id={item.id}
            className="group scroll-mt-28 py-6"
          >
            <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-6">
                <span className="font-serif text-2xl leading-snug text-paper-50 sm:text-3xl">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className="mt-2 text-paper-300 transition motion-safe:group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-paper-200">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </CinematicBand>
  );
}
