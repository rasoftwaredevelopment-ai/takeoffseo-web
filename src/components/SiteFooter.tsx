import Link from "next/link";
import { brand, packageOrder, packages, routes } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-0 border-t border-navy/20 bg-navy text-paper-200">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-serif text-3xl text-paper-50">
            Takeoff<span className="text-copper">SEO</span>
          </p>
          <p className="mt-3 font-serif text-lg text-paper-50">
            {brand.footerLine}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
          Local SEO for service businesses anywhere in Australia. Aimed at the
          top of Google and Maps — without buying ads. Fixed prices. One person
          doing the work.
          </p>
          <p className="mt-3 text-xs text-paper-300">
            Work is founder-led. Client names will be added with permission.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-300">
            Offers
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {packageOrder.map((id) => (
              <li key={id}>
                <Link href={packages[id].href} className="hover:text-paper-50">
                  {packages[id].name}
                  {id === "free"
                    ? ""
                    : `, ${packages[id].priceLabel}${id === "monthly" ? "/mo" : ""}`}
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.pricing} className="hover:text-paper-50">
                All prices
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-300">
            TakeoffSEO
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={routes.howItWorks} className="hover:text-paper-50">
                How it works
              </Link>
            </li>
            <li>
              <Link href={routes.whoItsFor} className="hover:text-paper-50">
                Who it&apos;s for
              </Link>
            </li>
            <li>
              <Link href={routes.about} className="hover:text-paper-50">
                About Alexander
              </Link>
            </li>
            <li>
              <Link href={routes.faq} className="hover:text-paper-50">
                Questions
              </Link>
            </li>
            <li>
              <Link href={routes.contact} className="hover:text-paper-50">
                Contact
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
            <li>Gold Coast, Queensland</li>
            <li>Working Australia-wide, online</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-4 py-5 text-xs text-paper-300 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {brand.legalName} · ABN {brand.abn}
          </p>
          <p>
            <Link href={routes.privacy} className="hover:text-paper-50">
              Privacy
            </Link>
            {" · "}
            <Link href={routes.terms} className="hover:text-paper-50">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
