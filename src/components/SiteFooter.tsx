import Link from "next/link";
import { brand, nav, routes } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-0 border-t border-navy/20 bg-navy text-paper-200">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-20 sm:px-6 md:grid-cols-4 lg:py-24">
        <div className="md:col-span-2">
          <p className="font-serif text-4xl text-paper-50">{brand.name}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            Google, Maps, and AI visibility for SEQ pool builders and
            landscapers. Other local service businesses considered case by case.
          </p>
          <p className="mt-4 text-sm">
            Gold Coast based · South East Queensland · By appointment
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper-300">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-paper-50">
                  {item.label}
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
              <Link href={routes.snapshot} className="hover:text-paper-50">
                Free Visibility Snapshot
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
          <p>ABN {brand.abn}</p>
          <p>
            Google, Maps, and AI platform names used nominatively. No ranking
            guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
}
