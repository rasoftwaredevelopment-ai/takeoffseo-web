import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lede: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-muted">{lede}</p>
      {children}
    </header>
  );
}
