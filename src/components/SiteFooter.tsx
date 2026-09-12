import Link from "next/link";
import { brand, offerOrder, offers, routes } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-navy text-paper-200">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-paper-50">{brand.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed">
            Google and AI visibility for pool builders and landscapers across{" "}
            {brand.areaServed}. Other local service businesses considered case
            by case.
          </p>
          <p className="mt-4 text-sm">
            Service area only — no street address published.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-300">
            Offers
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {offerOrder.map((id) => (
              <li key={id}>
                <Link href={offers[id].href} className="hover:text-paper-50">
                  {offers[id].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-300">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${brand.phoneTel}`} className="hover:text-paper-50">
                {brand.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-paper-50">
                {brand.email}
              </a>
            </li>
            <li>Hours: {brand.hours}</li>
            <li>
              <Link href={routes.about} className="hover:text-paper-50">
                About
              </Link>
              {" · "}
              <Link href={routes.contact} className="hover:text-paper-50">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-4 py-5 text-xs text-paper-300 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {brand.name}. {brand.locationLabel}.
          </p>
          <p>ABN {brand.abn}</p>
          <p>No ranking or AI-mention guarantees.</p>
        </div>
      </div>
    </footer>
  );
}
