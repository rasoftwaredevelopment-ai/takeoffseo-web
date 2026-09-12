import { brand, homeCopy, homeDiagrams, routes } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";
import { TeachingDiagram } from "@/components/TeachingDiagram";

type CtaBandProps = {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showDoor?: boolean;
  showLocation?: boolean;
  showTalk?: boolean;
};

export function CtaBand({
  title = homeCopy.closeTitle,
  body = homeCopy.closeBody,
  primaryHref = routes.snapshotEnquire,
  primaryLabel = homeCopy.primaryCta,
  showDoor = false,
  showLocation = false,
  showTalk = false,
}: CtaBandProps) {
  return (
    <section className="mt-20" aria-labelledby="snapshot-close-heading">
      {showDoor ? (
        <TeachingDiagram
          src={homeDiagrams.snapshotDoor.src}
          alt={homeDiagrams.snapshotDoor.alt}
          title={homeDiagrams.snapshotDoor.title}
          caption={homeDiagrams.snapshotDoor.caption}
        />
      ) : null}
      <div className="hero-grid overflow-hidden rounded-sm bg-navy px-6 py-12 text-paper-50 sm:px-10">
        <div className="max-w-3xl">
          <h2
            id="snapshot-close-heading"
            className="font-serif text-4xl leading-tight sm:text-5xl"
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
