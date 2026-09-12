export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:4477"
).replace(/\/$/, "");

export const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim() || "";

export const brand = {
  name: "TakeoffSEO",
  legalName: "Alexander Nott trading as TakeoffSEO",
  domain: "takeoffseo.com",
  h1: "Get more calls from people already looking for you.",
  tagline:
    "Get more calls from people already searching for what you do. Local SEO with fixed prices. Gold Coast based, working anywhere in Australia.",
  founder: "Alexander Nott",
  phoneDisplay: "0497 878 930",
  phoneTel: "+61497878930",
  email: "hello@takeoffseo.com",
  hours: "By appointment",
  abn: "[ABN]",
  areaServed: "Australia",
  locationLabel: "Gold Coast, QLD",
  footerLine: "Get found. Then take off.",
} as const;

export const routes = {
  home: "/",
  freeCheck: "/free-check",
  pricing: "/pricing",
  tuneUp: "/tune-up",
  fixUp: "/fix-up",
  newWebsite: "/new-website",
  monthly: "/monthly",
  howItWorks: "/how-it-works",
  whoItsFor: "/who-its-for",
  about: "/about",
  faq: "/faq",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  // old URLs kept for redirects
  snapshot: "/services/visibility-snapshot",
  audit: "/services/visibility-audit",
  foundation: "/services/90-day-foundation",
  foundationAlias: "/services/ninety-day-foundation",
  retainer: "/services/monthly-retainer",
  poolLandscape: "/industries/pool-landscape",
} as const;

export type PackageId = "free" | "tune" | "fix" | "site" | "monthly";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const packages = {
  free: {
    id: "free" as const,
    name: "Free check",
    href: routes.freeCheck,
    price: 0,
    priceLabel: "$0",
    priceNote: "Email in 2 business days",
    summary: "See where you show up now and what I'd fix first.",
    items: [
      "One-page email in 2 business days",
      "Google, Maps and one AI tool",
      "Tells you which package fits, or none",
    ],
  },
  tune: {
    id: "tune" as const,
    name: "Profile Tune-Up",
    href: routes.tuneUp,
    price: 490,
    priceLabel: "$490",
    priceNote: "one-off · paid upfront",
    summary: "Your Google Business Profile done properly.",
    items: [
      "Full profile rebuild",
      "Details matched on 10 directories",
      "Review-request system",
    ],
  },
  fix: {
    id: "fix" as const,
    name: "Website Fix-Up",
    href: routes.fixUp,
    price: 1900,
    priceLabel: "$1,900",
    priceNote: "one-off · half to start, half when done",
    featured: true,
    summary: "Your existing site and Google profile fixed together.",
    items: [
      "Everything in the Tune-Up",
      "Technical fixes, 5 service pages, 2 area pages",
      "Before-and-after report",
    ],
  },
  site: {
    id: "site" as const,
    name: "New Website",
    href: routes.newWebsite,
    price: 3900,
    priceLabel: "$3,900",
    priceNote: "one-off · half to start, half at launch",
    summary: "A new or rebuilt site, built to be found.",
    items: [
      "Up to 8 pages, written and built",
      "Fast, mobile-first, you can edit it",
      "Google profile done too",
    ],
  },
  monthly: {
    id: "monthly" as const,
    name: "Monthly Plan",
    href: routes.monthly,
    price: 690,
    priceLabel: "$690",
    priceNote: "a month · Growth $1,190 · month to month",
    summary: "Keep improving after the fix. Month to month.",
    items: [
      "Steady $690 or Growth $1,190",
      "Set list of work each month",
      "One-page report: calls and enquiries",
    ],
  },
} as const;

export const packageOrder: PackageId[] = [
  "free",
  "tune",
  "fix",
  "site",
  "monthly",
];

export const nav = [
  { label: "Prices", href: routes.pricing },
  { label: "How it works", href: routes.howItWorks },
  { label: "Who it's for", href: routes.whoItsFor },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
] as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
