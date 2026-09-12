import Link from "next/link";
import { offerOrder, offers } from "@/lib/site";

export function OfferPath() {
  return (
    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {offerOrder.map((id, index) => {
        const offer = offers[id];
        return (
          <li
            key={offer.id}
            className="flex flex-col rounded-sm border border-line bg-paper-50 p-5 shadow-card"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
              {String(index + 1).padStart(2, "0")} · {offer.eyebrow}
            </p>
            <h3 className="mt-3 font-serif text-2xl text-navy">{offer.name}</h3>
            <p className="mt-2 text-lg font-medium text-forest">
              {offer.priceLabel}
            </p>
            {offer.priceNote ? (
              <p className="mt-1 text-sm text-ink-soft">{offer.priceNote}</p>
            ) : null}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
              {offer.summary}
            </p>
            <Link
              href={offer.href}
              className="mt-5 text-sm font-semibold text-forest underline-offset-4 hover:underline"
            >
              {offer.name} details
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
