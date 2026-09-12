export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:4477"
).replace(/\/$/, "");

export const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim() || "";

export const brand = {
  name: "TakeoffSEO",
  legalName: "Alexander Nott trading as TakeoffSEO",
  domain: "takeoffseo.com",
  h1: "Be at the top of Google.",
  h1Sub: "Without paying for the ads.",
  tagline:
    "Show up at the top of Google and Maps for the jobs people already search — without buying ads. Local SEO with fixed prices. Gold Coast based, Australia-wide.",
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

export type SitePackage = {
  id: PackageId;
  name: string;
  href: string;
  eyebrow: string;
  price: number;
  priceLabel: string;
  priceNote: string;
  summary: string;
  items: readonly string[];
  featured?: boolean;
};

export const packages: Record<PackageId, SitePackage> = {
  free: {
    id: "free",
    name: "Free check",
    href: routes.freeCheck,
    eyebrow: "Start here",
    price: 0,
    priceLabel: "$0",
    priceNote: "Email in 2 business days",
    summary: "See where you stand on Google now, and what I'd fix first.",
    items: [
      "One-page email in 2 business days",
      "Google, Maps and one AI tool",
      "Tells you which package fits, or none",
    ],
  },
  tune: {
    id: "tune",
    name: "Profile Tune-Up",
    href: routes.tuneUp,
    eyebrow: "One-off",
    price: 490,
    priceLabel: "$490",
    priceNote: "paid upfront · bank transfer",
    summary: "The Google listing that puts you in the Map pack, done properly.",
    items: [
      "Full profile rebuild",
      "Details matched on 10 directories",
      "Review-request system",
    ],
  },
  fix: {
    id: "fix",
    name: "Website Fix-Up",
    href: routes.fixUp,
    eyebrow: "Most common",
    price: 1900,
    priceLabel: "$1,900",
    priceNote: "half to start, half when done",
    featured: true,
    summary:
      "Fix the site and Google profile that decide who sits at the top.",
    items: [
      "Everything in the Tune-Up",
      "Technical fixes, 5 service pages, 2 area pages",
      "Before-and-after report",
    ],
  },
  site: {
    id: "site",
    name: "New Website",
    href: routes.newWebsite,
    eyebrow: "Build or rebuild",
    price: 3900,
    priceLabel: "$3,900",
    priceNote: "half to start, half at launch",
    summary: "A new or rebuilt site, built to be found on Google — not just to look nice.",
    items: [
      "Up to 8 pages, written and built",
      "Fast, mobile-first, you can edit it",
      "Google profile done too",
    ],
  },
  monthly: {
    id: "monthly",
    name: "Monthly Plan",
    href: routes.monthly,
    eyebrow: "Ongoing",
    price: 690,
    priceLabel: "$690",
    priceNote: "a month · Growth $1,190 · month to month",
    summary: "Keep climbing on Google and stay there. Month to month.",
    items: [
      "Steady $690 or Growth $1,190",
      "Set list of work each month",
      "One-page report: calls and enquiries",
    ],
  },
};

export const packageOrder: PackageId[] = [
  "free",
  "tune",
  "fix",
  "site",
  "monthly",
];

export const paidOrder: PackageId[] = ["tune", "fix", "site", "monthly"];

export const nav = [
  {
    label: "Services",
    children: [
      { label: `${packages.free.name} — ${packages.free.priceLabel}`, href: packages.free.href },
      { label: `${packages.tune.name} — ${packages.tune.priceLabel}`, href: packages.tune.href },
      { label: `${packages.fix.name} — ${packages.fix.priceLabel}`, href: packages.fix.href },
      { label: `${packages.site.name} — ${packages.site.priceLabel}`, href: packages.site.href },
      { label: `${packages.monthly.name} — from ${packages.monthly.priceLabel}`, href: packages.monthly.href },
      { label: "All prices", href: routes.pricing },
    ],
  },
  { label: "How it works", href: routes.howItWorks },
  { label: "Who it's for", href: routes.whoItsFor },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
] as const;

export const homeCopy = {
  eyebrow: "Local SEO · Gold Coast based · Australia-wide",
  h1: brand.h1,
  h1Sub: brand.h1Sub,
  lede: "When someone nearby searches for a plumber, electrician, physio — they call one of the first few names they see. Those top spots can be rented with Google Ads, or earned with your Google profile, website and reviews. I do the second one. Fixed prices. One person doing the work.",
  locationLine:
    "Based on the Gold Coast. Working with local businesses anywhere in Australia — the work is done online.",
  primaryCta: "Get a free check",
  secondaryCta: "See prices",
  closeTitle: "See where you stand on Google. Free.",
  closeBody:
    "Business name and suburb. That's all I need to start. You'll have a one-page email in two business days.",
} as const;

export const trust = [
  "Top of Google — without ads",
  "Every price is on this site",
  "Solo. You deal with me",
  "You own every account and page",
] as const;

export const whatYouGet = [
  "Work aimed at the top of Google and the Map pack — not a rented ad slot",
  "A written checklist for every package — when it's ticked, the job is done",
  "Google profile, website and reviews treated as one system",
  "A one-page report: where you showed up, plus calls and enquiries",
] as const;

export const howWeWork = [
  "Free check first. See where you stand on Google now.",
  "You pick a priced package. Nothing is quoted after a call.",
  "I do the work. Short email every Friday.",
  "You see what moved, then keep going or stop.",
] as const;

export const adsVsSearch = {
  eyebrow: "Ads vs search",
  title: "Rent the top of Google, or earn it.",
  lede: "Google will happily take your money every time someone searches. Or you can do the work that puts you in the organic results and the Map pack — the spots that keep working after you stop paying.",
  ads: {
    eyebrow: "Google Ads",
    title: "Pay every click",
    points: [
      "You sit at the top because you paid, not because Google thinks you're the best answer.",
      "The moment you pause the ads, you disappear.",
      "Every enquiry costs you again. Competitors can outbid you overnight.",
      "Useful for a burst. A poor way to own your local market.",
    ],
  },
  search: {
    eyebrow: "What I do",
    title: "Earn the top spots",
    points: [
      "Your Google profile, website and reviews — the three things that decide who shows up.",
      "Aimed at the Map pack and the organic results, not the ad row above them.",
      "Takes longer than ads. Lasts longer than ads.",
      "Same work also helps AI answers. Google is still where most local jobs are decided.",
    ],
  },
} as const;

export const processSteps = [
  {
    title: "Free check",
    body: "Tell me your business and suburb. I email you where you show up on Google now, within two business days.",
  },
  {
    title: "Pick a package",
    body: "The check tells you which one fits. Book it from the site, or call if you'd rather talk first.",
  },
  {
    title: "I do the list",
    body: "Not a team you never meet. Me. You approve every page before it goes live.",
  },
  {
    title: "You see what moved",
    body: "A plain report: where you showed up, plus calls and enquiries. Then keep going or stop.",
  },
] as const;

export const workSurfaces = [
  {
    title: "Google search",
    example: '"emergency plumber Burleigh Heads"',
    body: "Someone types what they need and where. The ads sit above the results because someone paid. The organic results underneath are the ones you can earn — and those are the ones I work on.",
  },
  {
    title: "Google Maps",
    example: '"electrician near me"',
    body: "The map pack: three names at the top of Google. People look at the stars, the photos and the hours, then call. Your Google Business Profile decides whether you're one of those three.",
  },
  {
    title: "AI answers",
    example: '"Who\'s a good physio in Robina?"',
    body: "ChatGPT, Gemini and Google's own AI answers now name businesses. They pull from your website, your Google profile and what others say about you. Same work helps here too — Google and Maps are still the main event.",
  },
] as const;

export const whoItsForGroups = [
  {
    title: "Trades and home services",
    body: "Plumbers, electricians, builders, pool and landscape, pest, air con, roofers, painters, cleaners, arborists, removalists.",
  },
  {
    title: "Clinics and practices",
    body: "Physios, chiros, dentists, vets, podiatrists, psychologists, massage.",
  },
  {
    title: "Local professional services",
    body: "Accountants, brokers, conveyancers, mechanics, driving schools, locksmiths.",
  },
] as const;

export const whoItsForChips = [
  "Plumbers",
  "Electricians",
  "Builders and renovators",
  "Pool builders",
  "Landscapers",
  "Pest control",
  "Air conditioning",
  "Roofers and painters",
  "Cleaners",
  "Arborists",
  "Physios and chiros",
  "Dentists",
  "Vets",
  "Podiatrists",
  "Accountants and brokers",
] as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
