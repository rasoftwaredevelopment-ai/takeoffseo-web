"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (motion.matches) {
        video.pause();
        video.removeAttribute("autoplay");
        video.setAttribute("data-reduced-motion", "true");
        return;
      }
      video.removeAttribute("data-reduced-motion");
      const play = () => {
        void video.play().catch(() => {
          /* Autoplay can be blocked; poster stays visible underneath. */
        });
      };
      if (video.readyState >= 2) play();
      else video.addEventListener("canplay", play, { once: true });
    };

    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, []);

  return (
    <div className="hero-media" aria-hidden>
      {/* Poster is the reduced-motion and loading surface. Video layers on top. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        className="hero-media__poster"
      />
      <video
        ref={videoRef}
        className="hero-media__video"
        poster="/videos/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
