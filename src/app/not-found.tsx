import { ButtonLink } from "@/components/ButtonLink";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-site px-4 py-24 sm:px-6">
      <h1 className="font-serif text-display text-navy">Page not found</h1>
      <p className="mt-5 max-w-xl text-lg text-ink-muted">
        That URL is not part of this site. The 90-Day Foundation lives at
        /services/90-day-foundation — the older ninety-day path redirects there.
      </p>
      <ButtonLink href={routes.home} className="mt-8">
        Back to TakeoffSEO
      </ButtonLink>
    </div>
  );
}
