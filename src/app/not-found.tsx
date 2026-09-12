import Link from "next/link";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-site px-4 py-24 sm:px-6">
      <h1 className="font-serif text-4xl text-navy">Page not found</h1>
      <p className="mt-4 max-w-xl text-ink-muted">
        That URL is not part of this site. The 90-Day Foundation lives at
        /services/90-day-foundation — the older ninety-day path redirects there.
      </p>
      <Link
        href={routes.home}
        className="mt-8 inline-flex rounded-sm bg-forest px-5 py-3 text-sm font-semibold text-paper-50"
      >
        Back to TakeoffSEO
      </Link>
    </div>
  );
}
