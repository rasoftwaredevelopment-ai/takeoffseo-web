"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand, homeCopy, nav, routes } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper-100/95 backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? "border-line shadow-[0_8px_24px_-16px_rgba(11,26,43,0.45)]"
          : "border-line/80"
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={routes.home} className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-navy text-paper-50">
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
          <span className="font-serif text-xl tracking-tight text-navy">
            {brand.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            item.href === routes.snapshot ? (
              <ButtonLink key={item.href} href={item.href}>
                {item.label}
              </ButtonLink>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy hover:text-forest"
              >
                {item.label}
              </Link>
            ),
          )}
          <a
            href={`tel:${brand.phoneTel}`}
            className="text-sm font-medium text-ink-muted hover:text-navy"
          >
            {brand.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-sm border border-line px-3 py-2 text-sm font-medium text-navy lg:hidden"
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
          className="border-t border-line bg-paper-50 px-4 py-4 motion-safe:animate-[rise_0.35s_ease] lg:hidden"
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
