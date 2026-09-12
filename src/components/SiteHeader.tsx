"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand, homeCopy, nav, routes } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";
  const overHero = onHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`site-header ${overHero ? "site-header--over-hero" : "site-header--solid"} ${
        scrolled ? "site-header--scrolled" : ""
      }`}
    >
      <div className="site-header__bar">
        <Link href={routes.home} className="site-header__brand">
          <span className="site-header__mark" aria-hidden>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M4 16.5 12 5.5 20 16.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path d="M8 16.5h8" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span className="font-serif text-lg tracking-tight">{brand.name}</span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {nav.map((item) =>
            item.href === routes.snapshot ? (
              <ButtonLink key={item.href} href={routes.snapshotEnquire}>
                {homeCopy.primaryCta}
              </ButtonLink>
            ) : (
              <Link key={item.href} href={item.href} className="site-header__link">
                {item.label}
              </Link>
            ),
          )}
          <a href={`tel:${brand.phoneTel}`} className="site-header__phone">
            {brand.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="site-header__menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="site-header__mobile"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-paper-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${brand.phoneTel}`} className="pt-1 text-paper-200">
              {brand.phoneDisplay}
            </a>
            <ButtonLink
              href={routes.snapshotEnquire}
              className="mt-1"
              onClick={() => setOpen(false)}
            >
              {homeCopy.primaryCta}
            </ButtonLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
