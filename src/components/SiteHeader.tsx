"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand, nav, routes } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const overlay = isHome && !scrolled && !open;
  const homeChrome = isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-40 w-full border-b transition-[background,box-shadow,border-color,color] duration-300 ${
        overlay
          ? "border-transparent bg-transparent text-paper-50"
          : homeChrome
            ? "border-white/10 bg-navy/90 text-paper-50 shadow-[0_8px_24px_-16px_rgba(7,19,32,0.65)] backdrop-blur"
            : "border-line/80 bg-paper-100/95 text-navy shadow-[0_8px_24px_-16px_rgba(11,26,43,0.45)] backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={routes.home} className="flex items-center gap-2.5">
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-sm ${
              homeChrome ? "bg-paper-50 text-navy" : "bg-navy text-paper-50"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 16.5 12 5.5 20 16.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path d="M8 16.5h8" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span className="font-serif text-xl tracking-tight">{brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${
                homeChrome
                  ? "text-paper-50 hover:text-paper-200"
                  : "text-navy hover:text-forest"
              } ${pathname === item.href ? "underline decoration-copper underline-offset-8" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${brand.phoneTel}`}
            className={`text-sm font-medium ${
              homeChrome
                ? "text-paper-200 hover:text-paper-50"
                : "text-ink-muted hover:text-navy"
            }`}
          >
            {brand.phoneDisplay}
          </a>
          <ButtonLink
            href={routes.snapshot}
            variant={homeChrome ? "inverseSolid" : "primary"}
          >
            Free Snapshot
          </ButtonLink>
        </nav>

        <button
          type="button"
          className={`inline-flex items-center rounded-sm border px-3 py-2 text-sm font-medium lg:hidden ${
            homeChrome
              ? "border-white/30 text-paper-50"
              : "border-line text-navy"
          }`}
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
          className="border-t border-line bg-paper-50 px-4 py-4 text-navy motion-safe:animate-[rise_0.35s_ease] lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${brand.phoneTel}`} className="pt-2 text-navy">
              {brand.phoneDisplay}
            </a>
            <ButtonLink
              href={routes.snapshot}
              className="mt-1"
              onClick={() => setOpen(false)}
            >
              Get a Free Visibility Snapshot
            </ButtonLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
