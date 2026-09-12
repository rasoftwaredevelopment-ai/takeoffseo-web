import { brand, homeCopy, routes } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";

type CtaBandProps = {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CtaBand({
  title = homeCopy.closeTitle,
  body = homeCopy.closeBody,
  primaryHref = routes.snapshot,
  primaryLabel = homeCopy.primaryCta,
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
          <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
            {homeCopy.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
