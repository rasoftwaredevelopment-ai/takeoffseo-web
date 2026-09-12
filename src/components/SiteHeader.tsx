"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand, nav, routes } from "@/lib/site";

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
      className={`sticky top-0 z-40 border-b bg-navy text-paper-50 ${
        scrolled ? "shadow-[0_8px_24px_-16px_rgba(11,26,43,0.45)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={routes.home} className="flex items-center gap-2.5 text-paper-50">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-navy-700">
            <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
              <path
                d="M8 22 L22 8 M14 8 h8 v8"
                stroke="#c9843a"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-serif text-xl tracking-tight">
            Takeoff<span className="text-copper">SEO</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm font-medium text-paper-200 hover:bg-navy-700 hover:text-paper-50"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${brand.phoneTel}`}
            className="ml-2 hidden text-sm font-semibold text-paper-200 hover:text-paper-50 xl:inline"
          >
            {brand.phoneDisplay}
          </a>
          <ButtonLink href={routes.freeCheck} className="ml-3">
            Free check
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-sm border border-white/20 px-3 py-2 text-sm font-medium text-paper-50 lg:hidden"
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
          className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/10 py-3 text-base font-medium text-paper-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={routes.faq}
              className="border-b border-white/10 py-3 text-base font-medium text-paper-50"
              onClick={() => setOpen(false)}
            >
              Questions
            </Link>
            <div className="mt-4 grid gap-2">
              <ButtonLink href={routes.freeCheck} onClick={() => setOpen(false)}>
                Get your free check
              </ButtonLink>
              <a href={`tel:${brand.phoneTel}`} className="btn-inverse">
                Call {brand.phoneDisplay}
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
