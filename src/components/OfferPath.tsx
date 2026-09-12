import { packageOrder, packages } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";

type OfferPathProps = {
  heading?: string;
  lede?: string;
};

export function OfferPath({
  heading = "What you can buy",
  lede = "Start free. Then pick the job you need done. Each package is a fixed list of work for a fixed price.",
}: OfferPathProps) {
  return (
    <section aria-labelledby="offer-path-heading">
      <Reveal className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
          01–05
        </p>
        <h2
          id="offer-path-heading"
          className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl"
        >
          {heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lede}</p>
      </Reveal>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {packageOrder.map((id, index) => {
          const offer = packages[id];
          return (
            <Reveal
              as="li"
              key={offer.id}
              delayMs={index * 70}
              className={`card-hover relative flex flex-col p-6 ${
                offer.featured ? "border-copper" : ""
              }`}
            >
              {offer.featured ? (
                <span className="absolute -top-3 left-5 rounded-full bg-copper px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                  Most common
                </span>
              ) : null}
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
                {offer.id === "monthly" ? (
                  <span className="ml-1 text-sm font-medium text-ink-soft">
                    / mo
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{offer.priceNote}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                {offer.summary}
              </p>
              <ButtonLink
                href={offer.href}
                variant={
                  offer.id === "free" || offer.featured ? "primary" : "secondary"
                }
                className="mt-6 w-full"
              >
                {offer.id === "free" ? "Get the free check" : offer.name}
              </ButtonLink>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
