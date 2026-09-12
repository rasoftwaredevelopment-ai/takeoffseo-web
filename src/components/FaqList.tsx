import type { FaqItem } from "@/lib/site";

type FaqListProps = {
  items: FaqItem[];
  title?: string;
};

export function FaqList({ items, title = "Questions" }: FaqListProps) {
  return (
    <section aria-labelledby="faq-heading" className="mt-16">
      <h2 id="faq-heading" className="font-serif text-3xl text-navy sm:text-4xl">
        {title}
      </h2>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details
            key={item.id}
            id={item.id}
            className="group scroll-mt-28 py-5"
          >
            <summary className="cursor-pointer list-none font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-6">
                <span className="text-lg leading-snug">{item.question}</span>
                <span
                  aria-hidden
                  className="mt-1 text-ink-soft transition group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-ink-muted leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
