import { offerOrder, offers, routes } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";

type OfferPathProps = {
  heading?: string;
  lede?: string;
};

export function OfferPath({
  heading = "The offer path",
  lede = "Free Snapshot, then the Audit fix map.",
}: OfferPathProps) {
  return (
    <section aria-labelledby="offer-path-heading">
      <Reveal className="max-w-3xl">
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
      </Reveal>
      <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {offerOrder.map((id, index) => {
          const offer = offers[id];
          return (
            <Reveal
              as="li"
              key={offer.id}
              delayMs={index * 40}
              className="card-hover flex flex-col p-6"
            >
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
                href={id === "snapshot" ? routes.snapshotEnquire : offer.href}
                variant={id === "snapshot" ? "primary" : "secondary"}
                className="mt-6 w-full"
              >
                {id === "snapshot" ? "Enquire" : `${offer.name} — enquire`}
              </ButtonLink>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
