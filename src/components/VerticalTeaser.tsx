import { routes } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";

export function VerticalTeaser() {
  return (
    <section
      aria-labelledby="vertical-heading"
      className="mt-20 overflow-hidden rounded-sm bg-navy px-6 py-10 text-paper-50 sm:px-10 sm:py-12"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            First vertical
          </p>
          <h2
            id="vertical-heading"
            className="mt-3 font-serif text-4xl leading-tight sm:text-5xl"
          >
            Built for SEQ trades winning work through Google and AI answers
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper-200">
            Starting with pool and landscape. Other local businesses when it’s a
            fit.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <ButtonLink href={routes.poolLandscape} variant="inverseSolid">
            See pool & landscape
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
