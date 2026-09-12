import { ButtonLink } from "@/components/ButtonLink";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section-band section-band--paper">
      <div className="section-inner">
        <h1 className="font-serif text-display text-navy">Page not found</h1>
        <p className="section-lede">
          That URL is not part of this site. The 90-Day Foundation lives at
          /services/90-day-foundation — the older ninety-day path redirects there.
        </p>
        <ButtonLink href={routes.home} className="mt-8">
          Back to TakeoffSEO
        </ButtonLink>
      </div>
    </section>
  );
}
