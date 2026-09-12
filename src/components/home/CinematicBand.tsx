import type { ReactNode } from "react";
import { LoopVideo } from "@/components/home/LoopVideo";
import { ParallaxPhoto } from "@/components/home/ParallaxPhoto";
import { Reveal } from "@/components/Reveal";
import type { PhotoKey } from "@/lib/home";

type CinematicBandProps = {
  id?: string;
  kicker?: string;
  title: string;
  titleAs?: "h2" | "h3";
  body?: string;
  photo?: PhotoKey;
  photoAlt?: string;
  video?: string;
  poster?: string;
  size?: "full" | "chapter" | "cta";
  children?: ReactNode;
  priority?: boolean;
  overlay?: "default" | "heavy";
};

const minHeights = {
  full: "min-h-[100svh]",
  chapter: "min-h-[92svh]",
  cta: "min-h-[88svh]",
} as const;

export function CinematicBand({
  id,
  kicker,
  title,
  titleAs = "h2",
  body,
  photo,
  photoAlt = "",
  video,
  poster,
  size = "chapter",
  children,
  priority = false,
  overlay = "heavy",
}: CinematicBandProps) {
  const TitleTag = titleAs;

  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden bg-navy text-paper-50 ${minHeights[size]}`}
    >
      {video ? (
        <LoopVideo
          src={video}
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      {photo && !video ? (
        <ParallaxPhoto
          photo={photo}
          alt={photoAlt}
          priority={priority}
          className="absolute inset-0 h-full w-full"
        />
      ) : null}
      <div
        className={`absolute inset-0 ${
          overlay === "heavy" ? "chapter-scrim-heavy" : "chapter-scrim"
        }`}
      />

      <div
        className={`relative z-10 mx-auto flex ${minHeights[size]} max-w-site flex-col justify-end px-4 py-20 sm:px-6 sm:py-24 lg:py-28`}
      >
        <Reveal className="max-w-4xl">
          {kicker ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              {kicker}
            </p>
          ) : null}
          <TitleTag className="mt-5 font-serif text-display text-paper-50">
            {title}
          </TitleTag>
          {body ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-100 sm:text-xl">
              {body}
            </p>
          ) : null}
        </Reveal>
        {children ? (
          <Reveal className="mt-10" delayMs={80}>
            {children}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
