"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li" | "article" | "section";
  id?: string;
  "aria-labelledby"?: string;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as: Tag = "div",
  id,
  "aria-labelledby": ariaLabelledBy,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "64px 0px 20% 0px" },
    );
    observer.observe(el);
    const failSafe = window.setTimeout(() => setVisible(true), 280);
    return () => {
      observer.disconnect();
      window.clearTimeout(failSafe);
    };
  }, []);

  const style: CSSProperties | undefined = delayMs
    ? { transitionDelay: `${delayMs}ms` }
    : undefined;

  return (
    <Tag
      ref={ref as never}
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
