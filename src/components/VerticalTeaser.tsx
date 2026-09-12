import { routes, whoItsForChips } from "@/lib/site";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";

export function VerticalTeaser() {
  return (
    <Reveal
      as="section"
      className="mt-20 overflow-hidden rounded-sm bg-navy px-6 py-10 text-paper-50 sm:px-10 sm:py-12"
      aria-labelledby="vertical-heading"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            Who it&apos;s for
          </p>
          <h2
            id="vertical-heading"
            className="mt-3 font-serif text-4xl leading-tight sm:text-5xl"
          >
            Local businesses that win work by phone or booking.
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {whoItsForChips.slice(0, 8).map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/20 px-3 py-1 text-sm text-paper-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <ButtonLink href={routes.whoItsFor} variant="inverseSolid">
            See who this suits
          </ButtonLink>
        </div>
      </div>
    </Reveal>
  );
}
