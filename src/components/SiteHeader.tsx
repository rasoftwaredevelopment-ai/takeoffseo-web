"use client";

import Link from "next/link";
import { useState } from "react";
import { brand, nav, routes } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper-100/95 backdrop-blur">
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

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 py-2 text-sm font-medium text-navy"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  {item.label}
                  <span aria-hidden className="text-[10px] text-ink-soft">
                    ▾
                  </span>
                </button>
                <div
                  className={`absolute left-0 top-full z-50 min-w-64 pt-2 ${
                    servicesOpen ? "block" : "hidden group-hover:block group-focus-within:block"
                  }`}
                >
                  <div className="border border-line bg-paper-50 py-2 shadow-card">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-ink hover:bg-paper-200"
                        onClick={() => setServicesOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
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
          <Link
            href={routes.contact}
            className="rounded-sm bg-forest px-4 py-2 text-sm font-semibold text-paper-50 hover:bg-forest-600"
          >
            Free Snapshot
          </Link>
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
          className="border-t border-line bg-paper-50 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) =>
              "children" in item ? (
                <div key={item.label} className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-base text-navy"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <a href={`tel:${brand.phoneTel}`} className="pt-2 text-navy">
              {brand.phoneDisplay}
            </a>
            <Link
              href={routes.contact}
              className="mt-1 inline-flex items-center justify-center rounded-sm bg-forest px-4 py-3 text-sm font-semibold text-paper-50"
              onClick={() => setOpen(false)}
            >
              Book a Visibility Snapshot
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
