import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lede: string;
  children?: ReactNode;
  tone?: "light" | "dark";
};

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  tone = "light",
}: PageHeroProps) {
  const titleClass =
    tone === "dark"
      ? "text-paper-50"
      : "text-navy";
  const ledeClass =
    tone === "dark" ? "text-paper-200" : "text-ink-muted";
  const eyeClass = tone === "dark" ? "text-copper" : "text-copper";

  return (
    <header className="max-w-4xl">
      {eyebrow ? (
        <p
          className={`text-lg font-semibold uppercase tracking-[0.18em] ${eyeClass}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h1
        className={`mt-4 font-serif font-semibold text-display text-balance ${titleClass}`}
      >
        {title}
      </h1>
      <p className={`mt-6 max-w-3xl text-lg leading-relaxed text-pretty sm:text-xl ${ledeClass}`}>
        {lede}
      </p>
      {children}
    </header>
  );
}
