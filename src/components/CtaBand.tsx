import { brand, routes } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";

type CtaBandProps = {
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  body,
  primaryHref = routes.snapshot,
  primaryLabel = "Get a Free Visibility Snapshot",
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="mt-20 rounded-sm bg-navy px-6 py-12 text-paper-50 sm:px-10">
      <div className="max-w-3xl">
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-paper-200">{body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={primaryHref} variant="inverseSolid">
            {primaryLabel}
          </ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="inverse">
              {secondaryLabel}
            </ButtonLink>
          ) : (
            <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
              Call {brand.phoneDisplay}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
