import { brand, homeCopy, routes } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";

type CtaBandProps = {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showLocation?: boolean;
  showTalk?: boolean;
  flush?: boolean;
};

export function CtaBand({
  title = homeCopy.closeTitle,
  body = homeCopy.closeBody,
  primaryHref = routes.snapshotEnquire,
  primaryLabel = homeCopy.primaryCta,
  showLocation = false,
  showTalk = false,
  flush = false,
}: CtaBandProps) {
  return (
    <section
      className={flush ? "" : "mt-16"}
      aria-labelledby="snapshot-close-heading"
    >
      <div className={flush ? "" : "cta-band"}>
        <div className="max-w-3xl">
          <h2
            id="snapshot-close-heading"
            className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-paper-200">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryHref} variant="inverseSolid">
              {primaryLabel}
            </ButtonLink>
            {showTalk ? (
              <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
                {homeCopy.secondaryCta}
              </a>
            ) : (
              <p className="text-sm text-paper-200 sm:text-base">
                <a href={`tel:${brand.phoneTel}`} className="hover:text-paper-50">
                  {brand.phoneDisplay}
                </a>
                {" · "}
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-paper-50"
                >
                  {brand.email}
                </a>
              </p>
            )}
          </div>
          {showTalk ? (
            <p className="mt-4 text-sm text-paper-300">
              <a href={`mailto:${brand.email}`} className="hover:text-paper-50">
                {brand.email}
              </a>
            </p>
          ) : null}
          {showLocation ? (
            <p className="mt-5 text-sm text-paper-300">{homeCopy.locationLine}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
