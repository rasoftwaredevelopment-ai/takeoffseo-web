"use client";

import { useEffect } from "react";
import { CinematicBand } from "@/components/home/CinematicBand";
import { faqChapters, homeFaqs, media } from "@/lib/home";

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
    <div>
      {faqChapters.map((chapter) => {
        const items = chapter.ids
          .map((id) => homeFaqs.find((faq) => faq.id === id))
          .filter((item): item is (typeof homeFaqs)[number] => Boolean(item));

        return (
          <CinematicBand
            key={chapter.id}
            kicker={chapter.kicker}
            title={chapter.title}
            photo={chapter.photo}
            video={chapter.video}
            poster={chapter.video ? media.heroPoster : undefined}
            overlay="default"
            size="full"
          >
            <div className="max-w-4xl divide-y divide-white/15 border-y border-white/15">
              {items.map((item) => (
                <details
                  key={item.id}
                  id={item.id}
                  className="group scroll-mt-28 py-7"
                >
                  <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-6">
                      <span className="font-serif text-3xl leading-tight text-paper-50 sm:text-4xl lg:text-[2.35rem]">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className="mt-2 text-2xl text-copper transition motion-safe:group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-paper-100 sm:text-xl">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </CinematicBand>
        );
      })}
    </div>
  );
}
