import { offerOrder, offers } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";

type OfferPathProps = {
  heading?: string;
  lede?: string;
};

export function OfferPath({
  heading = "The offer path",
  lede = "Start with the free Snapshot unless you already know you need a diagnostic. The audit does not include implementation.",
}: OfferPathProps) {
  return (
    <section aria-labelledby="offer-path-heading">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          01–04
        </p>
        <h2
          id="offer-path-heading"
          className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
        >
          {heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lede}</p>
      </div>
      <ol className="stagger mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {offerOrder.map((id, index) => {
          const offer = offers[id];
          return (
            <li key={offer.id} className="card-hover flex flex-col p-6">
              <p className="font-serif text-4xl leading-none text-copper">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                {offer.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-snug text-navy">
                {offer.name}
              </h3>
              <p className="mt-3 text-xl font-semibold text-forest">
                {offer.priceLabel}
              </p>
              {offer.priceNote ? (
                <p className="mt-1 text-sm text-ink-soft">{offer.priceNote}</p>
              ) : null}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                {offer.summary}
              </p>
              <ButtonLink
                href={offer.href}
                variant={id === "snapshot" ? "primary" : "secondary"}
                className="mt-6 w-full"
              >
                {offer.name}
              </ButtonLink>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
