"use client";

import { useEffect, useState } from "react";

type LoopVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export function LoopVideo({ src, poster, className = "" }: LoopVideoProps) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduce && poster) {
    return (
      // Poster fallback for prefers-reduced-motion; next/image fill needs a sized parent.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={poster} alt="" className={className} decoding="async" />
    );
  }

  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      preload="metadata"
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
