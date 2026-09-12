import { ButtonLink } from "@/components/ButtonLink";
import { homeCopy } from "@/lib/home";
import { brand, routes } from "@/lib/site";

type SnapshotCtaProps = {
  title: string;
  body: string;
  tone?: "dark" | "forest";
};

export function SnapshotCta({
  title,
  body,
  tone = "dark",
}: SnapshotCtaProps) {
  const band = tone === "forest" ? "bg-forest-800" : "bg-navy";

  return (
    <section className={`${band} text-paper-50`}>
      <div className="mx-auto flex max-w-site flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            Free Visibility Snapshot
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper-200">
            {body}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <ButtonLink href={routes.snapshot} variant="inverseSolid">
            {homeCopy.primaryCta}
          </ButtonLink>
          <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
            {homeCopy.phoneCta}
          </a>
        </div>
      </div>
    </section>
  );
}
