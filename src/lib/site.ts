export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:4477"
).replace(/\/$/, "");

export const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim() || "";

export const brand = {
  name: "TakeoffSEO",
  legalName: "TakeoffSEO",
  domain: "takeoffseo.com",
  h1: "Google + AI visibility for local businesses",
  tagline:
    "Google and AI visibility for local businesses — published prices, no ranking guarantees. First vertical: SEQ pool builders and landscapers.",
  founder: "Alexander Nott",
  phoneDisplay: "0497 878 930",
  phoneTel: "+61497878930",
  email: "hello@takeoffseo.com",
  hours: "By appointment",
  abn: "[ABN if any]",
  areaServed: "South East Queensland",
  locationLabel: "Gold Coast, QLD",
  icpPrimary: "Local businesses",
  icpSecondary:
    "Pool builders and landscapers in South East Queensland are the first published vertical. Other local service businesses are considered case by case.",
} as const;

export const routes = {
  home: "/",
  snapshot: "/services/visibility-snapshot",
  audit: "/services/visibility-audit",
  foundation: "/services/90-day-foundation",
  foundationAlias: "/services/ninety-day-foundation",
  retainer: "/services/monthly-retainer",
  about: "/about",
  contact: "/contact",
  industries: "/industries/pool-landscape",
  poolLandscape: "/industries/pool-landscape",
} as const;

export type OfferId = "snapshot" | "audit" | "foundation" | "retainer";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Offer = {
  id: OfferId;
  name: string;
  href: string;
  eyebrow: string;
  priceLabel: string;
  priceNote?: string;
  summary: string;
  outcome: string;
};

export const offers: Record<OfferId, Offer> = {
  snapshot: {
    id: "snapshot",
    name: "Visibility Snapshot",
    href: routes.snapshot,
    eyebrow: "Start here",
    priceLabel: "Free",
    summary:
      "A short, no-obligation look at how your business appears in Google and AI-style answers — so you know whether a paid audit is worth it.",
    outcome: "A written snapshot and a clear recommendation on the next step.",
  },
  audit: {
    id: "audit",
    name: "Visibility Audit",
    href: routes.audit,
    eyebrow: "Paid diagnostic",
    priceLabel: "A$1,500",
    summary:
      "A baseline of current Google and AI visibility, a prioritised fix pack, and one recommended next step. No implementation.",
    outcome: "Baseline + prioritised fix pack + next step.",
  },
  foundation: {
    id: "foundation",
    name: "90-Day Foundation",
    href: routes.foundation,
    eyebrow: "Implementation",
    priceLabel: "Typical A$6,500",
    priceNote: "From A$4,500, scoped to the starting point",
    summary:
      "Ninety days to implement the priority work, measure what changed, and leave a foundation you can keep or hand to a retainer.",
    outcome: "Audit, implement, and measure over 90 days.",
  },
  retainer: {
    id: "retainer",
    name: "Monthly retainer",
    href: routes.retainer,
    eyebrow: "Ongoing",
    priceLabel: "From A$2,000–2,500/mo",
    summary:
      "Ongoing Google and AI visibility work for businesses that already have a foundation and want steady iteration — without ranking guarantees.",
    outcome: "Monthly work, reporting, and a clear backlog.",
  },
};

export const offerOrder: OfferId[] = [
  "snapshot",
  "audit",
  "foundation",
  "retainer",
];

export const nav = [
  {
    label: "Services",
    children: offerOrder.map((id) => ({
      label: offers[id].name,
      href: offers[id].href,
    })),
  },
  {
    label: "Industries",
    children: [
      {
        label: "Pool & landscape",
        href: routes.poolLandscape,
      },
    ],
  },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
] as const;

export const homeCopy = {
  eyebrow: `${brand.locationLabel} · Local businesses`,
  h1: brand.h1,
  lede:
    "Buyers already ask Google and AI who to hire. If your business is invisible in those answers, the enquiry goes to someone else. Start with a free Visibility Snapshot — a short, honest look at how you appear today — then book the paid Visibility Audit when the gap is clear enough to spend on.",
} as const;

export const willItems = [
  "Diagnose Google and AI visibility in plain language.",
  "Prioritise the work most likely to move enquiries.",
  "Report what we did and what we measured.",
  "Keep the Snapshot a free teaser — not a fake full audit.",
] as const;

export const wontItems = [
  "Guarantee rankings, citations, or leads.",
  "Invent case studies, awards, or “#1” claims.",
  "Build suburb doorway spam.",
  "Race cheapest-mill pricing.",
] as const;

export const processSteps = [
  {
    title: "Audit",
    body: "A documented baseline of how you appear in Google and AI-style answers — on your site and Google Business Profile.",
  },
  {
    title: "Implement",
    body: "The priority work, done on your assets. We do not park you on a hosted AI page we own.",
  },
  {
    title: "Measure",
    body: "What changed versus the starting baseline. A progress report — not a ranking guarantee.",
  },
] as const;

export const workSurfaces = [
  {
    title: "Google Search",
    body: "Pages that answer the jobs people actually type — so the site can be found and understood.",
  },
  {
    title: "Maps and Business Profile",
    body: "A listing that matches the business: name, area, categories, and the details buyers check before they call.",
  },
  {
    title: "AI answers",
    body: "The same fundamentals help models cite you. We do not sell a separate “AI hack” or a hosted answer page.",
  },
] as const;

export const aboutCopy = {
  title: "About TakeoffSEO",
  lede: `Delivery is general SEO and GEO for local businesses. Marketing is vertical-targeted, starting with pool builders and landscapers in ${brand.areaServed}. Founded by ${brand.founder} on the Gold Coast. We will not invent proof to look bigger than we are.`,
  honesty:
    "We would rather say we do not have a named case study yet than write one that did not happen. No awards wall. No rankings graphic. No “#1” line.",
} as const;

export const poolLandscapeCopy = {
  eyebrow: `First vertical · ${brand.areaServed}`,
  h1: "Google + AI visibility for SEQ pool builders and landscapers",
  lede:
    "When someone in South East Queensland wants a pool or a landscape job, they ask Google and, increasingly, an AI assistant. If your company is not in those answers, the enquiry goes to a competitor who is. This is TakeoffSEO’s first published vertical — the same Snapshot-to-Audit path as the rest of the site, written for outdoor-living trades. No ranking promises. No invented case studies.",
} as const;

export const snapshotFaqs: FaqItem[] = [
  {
    id: "whats-in-snapshot",
    question: "What is in the free Visibility Snapshot?",
    answer:
      "A short written look at how your business currently appears in Google Search and Maps, plus a plain-English note on whether AI-style answers are likely to mention you. It is a screening snapshot, not a full audit: enough to see the obvious gaps and decide if a paid Visibility Audit is the right next step.",
  },
  {
    id: "vs-paid-audit",
    question: "How is the Snapshot different from the paid audit?",
    answer:
      "The Snapshot is free, brief, and directional. The Visibility Audit (A$1,500) is a paid diagnostic: a documented baseline, a prioritised fix pack, and one recommended next step. The Snapshot does not include a fix pack or implementation.",
  },
  {
    id: "how-long",
    question: "How long does the Snapshot take?",
    answer:
      "Most Snapshots are returned within a few business days once we have your website, Google Business Profile, and service area. Bookings are by appointment — we will confirm timing when you enquire.",
  },
];

export const auditFaqs: FaqItem[] = [
  {
    id: "what-includes",
    question: "What does the Visibility Audit include?",
    answer:
      "Three things only: a baseline of your current Google and AI visibility, a prioritised fix pack (what to change first, and why), and a recommended next step. It does not include implementation, ongoing management, or a programme of work.",
  },
  {
    id: "audit-cost",
    question: "What does the audit cost?",
    answer:
      "A$1,500 (AUD), fixed. That fee covers the diagnostic described above. Implementation is scoped separately if you choose the 90-Day Foundation or a retainer.",
  },
  {
    id: "in-out-1500",
    question: "What is in and out of the A$1,500?",
    answer:
      "In: research, a written baseline, a prioritised fix pack, and a recommended next step, delivered in a call or written pack. Out: making the changes, content production, ads management, reputation campaigns, and any ongoing monthly work.",
  },
  {
    id: "audit-before-retainer",
    question: "Do I need an audit before a retainer?",
    answer:
      "Usually yes. A retainer without a baseline tends to become busy work. The audit gives both of us a shared list of priorities. If you already have a recent, comparable diagnostic, we can review it and say whether we can start from there.",
  },
  {
    id: "audit-timeline",
    question: "How long does the audit take?",
    answer:
      "Typically one to two weeks from a complete brief (website, Google Business Profile access or screenshots, service area, and who you compete with). We confirm dates when we book — hours are by appointment.",
  },
];

export const foundationFaqs: FaqItem[] = [
  {
    id: "what-is-90-day",
    question: "What is the 90-Day Foundation?",
    answer:
      "A fixed-term implementation engagement. We take the audit priorities (or an equivalent brief), do the work that most affects Google and AI visibility, and measure what changed over about 90 days. Typical fee is A$6,500, from A$4,500 depending on starting point.",
  },
  {
    id: "audit-implement-measure",
    question: "How do audit, implement, and measure fit together?",
    answer:
      "The audit sets the baseline and the priority list. The Foundation implements the agreed items and records what was done. Measurement compares the starting baseline with what we can observe at the end of the 90 days — listings, site health, and how you appear in search and AI-style answers. It is a progress report, not a ranking guarantee.",
  },
  {
    id: "whats-included-4500-6500",
    question: "What is included between A$4,500 and A$6,500?",
    answer:
      "The typical engagement is A$6,500. Leaner scopes start from A$4,500 when the starting point is already tidy (for example a recent audit and a site that needs fewer technical fixes). The quote states pages, listings, and content in scope before we start. Work outside that quote is not assumed.",
  },
  {
    id: "90-days-realistic",
    question: "Is 90 days a realistic window?",
    answer:
      "Ninety days is enough to fix the foundations and see early movement — listings, on-site issues, and the first pieces of useful content. It is not enough to “finish SEO”. Search and AI answers move on their own timelines. We say so up front.",
  },
  {
    id: "vs-retainer",
    question: "How is the Foundation different from a retainer?",
    answer:
      "The Foundation is a 90-day project with a start and an end. A retainer is ongoing monthly work after the foundations are in place. Some clients stop after the Foundation and run things in-house; others continue. Neither includes ranking guarantees.",
  },
];

export const retainerFaqs: FaqItem[] = [
  {
    id: "monthly-what",
    question: "What happens on a monthly retainer?",
    answer:
      "A agreed block of work each month: technical and listing upkeep, content or page improvements, and a short report on what was done and what we recommend next. The backlog comes from the audit or Foundation, then from what we observe in Search Console and on the site.",
  },
  {
    id: "retainer-cost-au",
    question: "What does the retainer cost in Australia?",
    answer:
      "From A$2,000–2,500 per month (AUD), depending on the size of the site and how much content or listing work is in play. We confirm the monthly figure before you start. There is no long lock-in advertised here — terms are in the proposal.",
  },
  {
    id: "google-and-ai",
    question: "Do you work on both Google and AI visibility?",
    answer:
      "Yes. The same fundamentals help both: a clear Google Business Profile, pages that answer real local-service questions, and content other sites and models can cite. We do not sell a separate “AI hack” product.",
  },
  {
    id: "no-guarantees",
    question: "Do you guarantee rankings or AI mentions?",
    answer:
      "No. Nobody honest can guarantee a Google ranking, a Maps pack position, or a mention in an AI answer. We do the work that improves your odds and we report what we can observe. If a proposal promises positions, it is not from us.",
  },
  {
    id: "vs-in-house",
    question: "How is this different from hiring in-house?",
    answer:
      "An in-house hire is a salary plus tools and management time. A retainer is a specialist block of hours aimed at Google and AI visibility for a local service business. We are a fit when you want that work done without standing up a marketing seat. We are not a fit if you need a full-time marketer on ads, social, and sales ops.",
  },
];

export const poolLandscapeFaqs: FaqItem[] = [
  {
    id: "pl-who-for",
    question: "Who is this page for?",
    answer:
      "Pool builders and landscapers trading in South East Queensland who want Google and AI visibility treated as operations, not a ranking promise. Other outdoor-living trades can enquire — we will say if the work is a fit.",
  },
  {
    id: "pl-vs-general",
    question: "How is this different from the general local-business offer?",
    answer:
      "Delivery is the same SEO and GEO work. This page is the first vertical-targeted marketing page — the language and FAQ are written for pool and landscape companies. Snapshot, Audit, Foundation, and retainer prices do not change.",
  },
  {
    id: "pl-snapshot",
    question: "What does the Snapshot look like for a pool or landscape company?",
    answer:
      "The same free teaser as the rest of the site: a short written look at how you appear in Google and AI-style answers, and whether a paid audit is the useful next step. It is not a full audit. We will not dress it up as a case study.",
  },
  {
    id: "pl-google-maps",
    question: "Do you work on Google Business Profile and Maps?",
    answer:
      "Yes. For local outdoor-living trades, Maps and the Business Profile are usually part of how jobs start. We work on your listing and your site — we do not replace them with a hosted page we own.",
  },
  {
    id: "pl-ai-answers",
    question: "What about ChatGPT and other AI answers?",
    answer:
      "The same fundamentals help: a clear Business Profile, pages that answer real pool and landscape jobs, and content other sites and models can cite. We do not sell a separate AI-hack product or guarantee a mention.",
  },
  {
    id: "pl-area",
    question: "What area do you cover?",
    answer:
      "South East Queensland. We do not publish a suburb-by-suburb doorway list. If you trade outside SEQ, ask — we will say whether it is in scope.",
  },
  {
    id: "pl-guarantees",
    question: "Do you guarantee more pool or landscape jobs?",
    answer:
      "No. We do not guarantee rankings, AI citations, or leads. Anyone who does is selling certainty they cannot deliver.",
  },
  {
    id: "pl-prices",
    question: "What does the work cost?",
    answer:
      "Visibility Snapshot is free. Visibility Audit is A$1,500. 90-Day Foundation is typically A$6,500, from A$4,500. Monthly retainer is from A$2,000–2,500. Those figures are the same as the rest of the site.",
  },
  {
    id: "pl-doorway",
    question: "Will you build a page for every suburb we service?",
    answer:
      "No. We do not build suburb doorway spam. If a location page has a real reason to exist, that is a scoping conversation — not a default deliverable.",
  },
  {
    id: "pl-next-step",
    question: "What is the first step?",
    answer:
      "Book a free Visibility Snapshot. If the gap is clear, the next paid step is the A$1,500 Visibility Audit. Implementation is a separate Foundation or retainer — it is not bundled into the audit.",
  },
];

export const faqsByOffer: Record<OfferId, FaqItem[]> = {
  snapshot: snapshotFaqs,
  audit: auditFaqs,
  foundation: foundationFaqs,
  retainer: retainerFaqs,
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
