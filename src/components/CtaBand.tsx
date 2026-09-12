import Link from "next/link";
import { brand, routes } from "@/lib/site";

type CtaBandProps = {
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CtaBand({
  title,
  body,
  primaryHref = routes.contact,
  primaryLabel = "Book a Visibility Snapshot",
}: CtaBandProps) {
  return (
    <section className="mt-20 rounded-sm bg-navy px-6 py-10 text-paper-50 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-4 text-paper-200 leading-relaxed">{body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-sm bg-forest px-5 py-3 text-sm font-semibold text-paper-50 hover:bg-forest-600"
          >
            {primaryLabel}
          </Link>
          <a
            href={`tel:${brand.phoneTel}`}
            className="inline-flex items-center justify-center rounded-sm border border-white/20 px-5 py-3 text-sm font-semibold text-paper-50 hover:bg-white/5"
          >
            Call {brand.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
