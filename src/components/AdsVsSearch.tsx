import { adsVsSearch } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function AdsVsSearch() {
  return (
    <section aria-labelledby="ads-vs-search-heading" className="mt-20">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          {adsVsSearch.eyebrow}
        </p>
        <h2
          id="ads-vs-search-heading"
          className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
        >
          {adsVsSearch.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          {adsVsSearch.lede}
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Reveal
          as="article"
          className="rounded-sm border border-line bg-paper-50 p-7 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
            {adsVsSearch.ads.eyebrow}
          </p>
          <h3 className="mt-3 font-serif text-3xl text-navy">
            {adsVsSearch.ads.title}
          </h3>
          <ul className="mt-6 space-y-4">
            {adsVsSearch.ads.points.map((item) => (
              <li key={item} className="flex gap-3 text-ink-muted">
                <span aria-hidden className="mt-1.5 text-ink-soft">
                  ×
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          as="article"
          delayMs={90}
          className="rounded-sm border border-forest/25 bg-forest-800 p-7 text-paper-50 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
            {adsVsSearch.search.eyebrow}
          </p>
          <h3 className="mt-3 font-serif text-3xl">
            {adsVsSearch.search.title}
          </h3>
          <ul className="mt-6 space-y-4">
            {adsVsSearch.search.points.map((item) => (
              <li key={item} className="flex gap-3 text-paper-200">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-copper" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
