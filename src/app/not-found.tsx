import { ButtonLink } from "@/components/ButtonLink";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
        404
      </p>
      <h1 className="mt-4 font-serif text-display text-navy">
        That page isn&apos;t here.
      </h1>
      <p className="mt-4 text-lg text-ink-muted">
        It may have moved when the site changed. Try one of these.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href={routes.home}>Home</ButtonLink>
        <ButtonLink href={routes.pricing} variant="secondary">
          Prices
        </ButtonLink>
        <ButtonLink href={routes.freeCheck} variant="secondary">
          Free check
        </ButtonLink>
      </div>
    </div>
  );
}
