import { willItems, wontItems } from "@/lib/site";

export function WillWont() {
  return (
    <section aria-labelledby="will-wont-heading" className="mt-20">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          Clarity
        </p>
        <h2
          id="will-wont-heading"
          className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
        >
          What we will and will not do
        </h2>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="rounded-sm border border-forest/25 bg-forest-800 p-7 text-paper-50 sm:p-8">
          <h3 className="font-serif text-3xl">Will</h3>
          <ul className="mt-6 space-y-4">
            {willItems.map((item) => (
              <li key={item} className="flex gap-3 text-paper-200">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 bg-copper"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-sm border border-line bg-paper-50 p-7 sm:p-8">
          <h3 className="font-serif text-3xl text-navy">Won’t</h3>
          <ul className="mt-6 space-y-4">
            {wontItems.map((item) => (
              <li key={item} className="flex gap-3 text-ink-muted">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 bg-copper"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
