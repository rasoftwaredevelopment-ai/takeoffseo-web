"use client";

import { useEffect, useRef } from "react";
import { MediaPhoto } from "@/components/MediaPhoto";
import type { PhotoKey } from "@/lib/home";

type ParallaxPhotoProps = {
  photo: PhotoKey;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ParallaxPhoto({
  photo,
  alt,
  className = "",
  priority = false,
}: ParallaxPhotoProps) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const node = inner.current;
    const box = frame.current;
    if (!node || !box) return;

    let frameId = 0;
    const update = () => {
      const rect = box.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.25;
      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={frame} className={`overflow-hidden ${className}`.trim()}>
      <div ref={inner} className="parallax-inner h-full w-full will-change-transform">
        <MediaPhoto photo={photo} alt={alt} priority={priority} />
      </div>
    </div>
  );
}
