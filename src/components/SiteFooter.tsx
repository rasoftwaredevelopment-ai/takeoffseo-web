import Link from "next/link";
import { brand, offerOrder, offers, routes } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-0 border-t border-navy/20 bg-navy text-paper-200">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl text-paper-50">{brand.name}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            Google and AI visibility for local businesses. {brand.icpSecondary}
          </p>
          <p className="mt-4 text-sm">
            Gold Coast based · South East Queensland · By appointment
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
            <li>
              <Link href={routes.poolLandscape} className="hover:text-paper-50">
                Pool & landscape
              </Link>
            </li>
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
            © {new Date().getFullYear()} {brand.name}. Gold Coast based.
          </p>
          <p>South East Queensland · By appointment</p>
        </div>
      </div>
    </footer>
  );
}
