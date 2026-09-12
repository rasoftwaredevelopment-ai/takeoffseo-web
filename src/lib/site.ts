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
    "Get found for the work you want on Google and AI search. Free Visibility Snapshot. Gold Coast · SEQ.",
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
    "Industry pages go deeper where we publish them — starting with pool builders and landscapers in South East Queensland.",
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
    summary: "Snapshot shows the gaps.",
    outcome: "A gap check before you spend on the Audit.",
  },
  audit: {
    id: "audit",
    name: "Visibility Audit",
    href: routes.audit,
    eyebrow: "Paid diagnostic",
    priceLabel: "A$1,500",
    summary: "Audit maps what to fix first.",
    outcome: "Full Google + AI baseline and a clear priority list.",
  },
  foundation: {
    id: "foundation",
    name: "90-Day Foundation",
    href: routes.foundation,
    eyebrow: "Implementation",
    priceLabel: "Typical A$6,500",
    priceNote: "From A$4,500 for simpler sites",
    summary:
      "Foundation: fixed 90-day Clarity build so the right local jobs find you.",
    outcome: "Diagnose, implement, and show what moved.",
  },
  retainer: {
    id: "retainer",
    name: "Monthly retainer",
    href: routes.retainer,
    eyebrow: "Ongoing",
    priceLabel: "From A$2,000–2,500/mo",
    summary:
      "Keep Google and AI visibility moving with clear priorities and plain reporting.",
    outcome: "Steady monthly work aimed at the jobs you want.",
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
  eyebrow: "Gold Coast · South East Queensland",
  h1: brand.h1,
  lede: [
    "Buyers already ask Google and AI who to hire.",
    "If you’re not in those answers, the next job goes to someone who is.",
    "TakeoffSEO gets local businesses found for the work they want — on Google and in AI search.",
    "Then we implement the fixes and show what moved.",
  ].join(" "),
  locationLine:
    "Based on the Gold Coast. We work with local businesses across South East Queensland.",
  primaryCta: "Get a free Visibility Snapshot",
  secondaryCta: "Book a Visibility Audit — A$1,500",
  websiteSeoNote:
    "Site’s the blocker? Website+SEO is a separate build — then Clarity on top.",
  closeTitle: "Want to see the gaps?",
  closeBody:
    "Get the free Snapshot. Ready for the fix map? Book the Audit.",
} as const;

export const whatYouGet = [
  "Presence gaps called out clearly",
  "A fix map you can act on",
  "Fixed 90-day deliverables on Foundation",
  "Plain reporting on what we did and what changed",
] as const;

export const howWeWork = [
  "Snapshot shows the gaps.",
  "Audit maps what to fix first.",
  "We diagnose, implement, and show what moved.",
] as const;

export const processSteps = [
  {
    title: "Audit",
    body: "Map the baseline on your website and Google Business Profile.",
  },
  {
    title: "Implement",
    body: "Fix the agreed priorities on your site and listing — not a hosted page we own.",
  },
  {
    title: "Measure",
    body: "Show what moved versus the starting point.",
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
    body: "Whether models mention you for hire-intent questions. We track mention, cite, or none.",
  },
] as const;

export const aboutCopy = {
  title: "About TakeoffSEO",
  lede: "TakeoffSEO helps local businesses get found on Google and in AI answers. We’re based on the Gold Coast and work across South East Queensland.",
  founderLine: `Founder: ${brand.founder}.`,
  path: "Path: free Visibility Snapshot → Visibility Audit → Foundation or Retainer.",
  marketing:
    "We publish industry pages where we go deeper — starting with pool and landscape in SEQ — so buyers in those trades see how the Clarity path applies to them.",
  websiteSeo:
    "Site’s the blocker? Website+SEO is a separate build — then Clarity on top.",
} as const;

export const contactCopy = {
  title: "Contact",
  lede: "Talk to TakeoffSEO about getting found for the work you want — on Google and in AI search. Most conversations start with a free Visibility Snapshot. The Visibility Audit (A$1,500) is next when you want the full fix map.",
  locationLine:
    "Based on the Gold Coast. Service-area across South East Queensland. Hours by appointment.",
} as const;

export const poolLandscapeCopy = {
  eyebrow: "South East Queensland · Outdoor trades",
  h1: "Google + AI visibility for SEQ pool builders and landscapers",
  lede:
    "Pool builders and landscapers in SEQ win more of the right jobs when they show up in Google and AI answers. Here’s how TakeoffSEO’s Clarity path works for outdoor trades: free Visibility Snapshot on your name, Audit for the fix map, Foundation or Retainer when you’re ready to build. Based on the Gold Coast. We work across South East Queensland.",
} as const;

export const snapshotPage = {
  title: "Free Visibility Snapshot for local businesses",
  lede: "Snapshot shows the gaps. We check your business name across key buyer prompts in AI search and a quick Google Maps note — enough to know if jobs are going elsewhere. Want the full baseline and fix map? That’s the Visibility Audit.",
} as const;

export const auditPage = {
  title: "Visibility Audit for local businesses",
  lede: "Audit maps what to fix first. Fixed A$1,500. Full Google + AI baseline and prioritised plan — before Foundation or Retainer. Start with the free Snapshot if you only need the gap check.",
} as const;

export const foundationPage = {
  title: "90-Day Foundation for local businesses",
  lede: "Foundation: fixed 90-day Clarity build so the right local jobs find you. We diagnose the gaps, implement the priority fixes on your site and Google profile, then show what moved. Typically A$6,500; from A$4,500 for simpler sites.",
} as const;

export const retainerPage = {
  title: "Monthly retainer for local businesses",
  lede: "Keep Google and AI visibility moving month to month. From A$2,000–2,500 — clear priorities, plain reporting, work aimed at the jobs you want.",
} as const;

export const snapshotFaqs: FaqItem[] = [
  {
    id: "whats-in-snapshot",
    question: "What is in the free Visibility Snapshot?",
    answer:
      "Snapshot shows the gaps: 5–8 AI prompts on your name plus a thin Maps note. The full baseline and fix map are the paid Audit.",
  },
  {
    id: "vs-paid-audit",
    question: "How is the Snapshot different from the paid audit?",
    answer:
      "Snapshot shows the gaps. Audit maps what to fix first — full baseline, prioritised plan, and next step (A$1,500).",
  },
  {
    id: "how-long",
    question: "How long does the Snapshot take?",
    answer:
      "About 30–45 minutes on our side. Turnaround is confirmed when we take your details.",
  },
];

export const auditFaqs: FaqItem[] = [
  {
    id: "what-includes",
    question: "What does the Visibility Audit include?",
    answer:
      "A full Google + AI baseline, a service-area review, and a prioritised fix list.",
  },
  {
    id: "audit-cost",
    question: "What does the audit cost?",
    answer: "A$1,500 fixed. That is the diagnosis and the fix map.",
  },
  {
    id: "in-out-1500",
    question: "What is in and out of the A$1,500?",
    answer:
      "In: baseline, priorities, and next step. Out: live rebuilds, ongoing content, and ads. The free gap check is the Snapshot.",
  },
  {
    id: "audit-before-retainer",
    question: "Do I need an audit before a retainer?",
    answer:
      "Yes — the Audit sets priorities. Many people start with the Snapshot, then the Audit.",
  },
  {
    id: "audit-timeline",
    question: "How long does the audit take?",
    answer: "Confirmed at kickoff. You leave with a written priorities pack.",
  },
];

export const foundationFaqs: FaqItem[] = [
  {
    id: "what-is-90-day",
    question: "What is the 90-Day Foundation?",
    answer: "A fixed 90-day Clarity build for local business sites.",
  },
  {
    id: "audit-implement-measure",
    question: "How do audit, implement, and measure fit together?",
    answer: "Find the gaps, fix the agreed priorities, and report what changed.",
  },
  {
    id: "whats-included-4500-6500",
    question: "What is included between A$4,500 and A$6,500?",
    answer:
      "Tech and on-page work, information architecture, NAP and Google Business Profile, answer-ready pages, and measurement. Typically A$6,500; from A$4,500 for simpler sites.",
  },
  {
    id: "90-days-realistic",
    question: "Is 90 days a realistic window?",
    answer:
      "Many sites move in 90 days; some need foundation first. You get the agreed work and clear measurement — not page-one promises.",
  },
  {
    id: "vs-retainer",
    question: "How is the Foundation different from a retainer?",
    answer:
      "Foundation is a fixed sprint. Retainer is ongoing from A$2,000–2,500 a month.",
  },
];

export const retainerFaqs: FaqItem[] = [
  {
    id: "monthly-what",
    question: "What happens on a monthly retainer?",
    answer: "Agreed priority Google + AI work, plus a plain report.",
  },
  {
    id: "retainer-cost-au",
    question: "What does the retainer cost in Australia?",
    answer: "From A$2,000–2,500 a month, scoped to the site.",
  },
  {
    id: "google-and-ai",
    question: "Do you work on both Google and AI visibility?",
    answer: "Both. Ads only if scoped separately.",
  },
  {
    id: "no-guarantees",
    question: "Do you guarantee rankings or AI mentions?",
    answer:
      "We sell diagnosis, implementation, and measurement — not ranking or lead promises. Agreed work. Clear reporting.",
  },
  {
    id: "vs-in-house",
    question: "How is this different from hiring in-house?",
    answer:
      "Go in-house if you have the capacity. We are a focused Google + AI partner. Unsure? Start with a Snapshot or Audit.",
  },
];

export const poolLandscapeFaqs: FaqItem[] = [
  {
    id: "pool-found-on-google",
    question: "How do pool builders get found on Google?",
    answer:
      "Get found for the pool work buyers search — clear service pages, a strong Google Business Profile / service-area setup, and a site Google can read. Start with a free Visibility Snapshot on your name. Audit when you want the fix map.",
  },
  {
    id: "landscape-enquiry-search",
    question: "How do landscapers win enquiry from search?",
    answer:
      "Win more landscaping enquiry from search by matching how buyers look: service-area clarity, local consistency, and pages that answer what they ask. Snapshot shows the gaps. Audit maps what to fix first.",
  },
  {
    id: "what-is-ai-visibility",
    question: "What is AI visibility?",
    answer:
      "AI visibility is whether tools like ChatGPT, Gemini, Perplexity, and Google AI Overviews mention you when someone asks who to hire. We check mention / cite / none against real buyer prompts — then build the pages and signals that help you show up.",
  },
  {
    id: "why-invisible-in-ai",
    question: "Why would a trade be invisible in AI answers?",
    answer:
      "Most invisible trades have thin sites, unclear service-area signals, or pages that don’t answer hire questions. A free Snapshot on your name shows where you stand today. Audit maps the fix list.",
  },
  {
    id: "seo-vs-ads",
    question: "How is this different from ads?",
    answer:
      "Ads buy attention while the campaign runs. SEO and GEO build lasting findability in Google and AI answers. Our path: Snapshot → Audit → Foundation or Retainer. Ads only if you want that scoped separately.",
  },
  {
    id: "who-helps-seq-pool",
    question: "Who helps SEQ pool builders with this work?",
    answer:
      "You want a partner who knows outdoor trades and local findability — or solid in-house capacity. TakeoffSEO’s Clarity path for SEQ pool builders and landscapers starts with a free Visibility Snapshot.",
  },
  {
    id: "seo-for-landscapers-seq",
    question: "What should landscapers in SEQ look for in SEO?",
    answer:
      "Look for diagnose → implement → measure, a clear fix map, and plain reporting. That’s our path: Snapshot shows the gaps, Audit maps what to fix first, Foundation builds it in 90 days.",
  },
  {
    id: "geo-outdoor-trades-qld",
    question: "What does GEO mean for outdoor trades in Queensland?",
    answer:
      "GEO for outdoor trades means showing up in AI answers for hire-intent prompts, alongside Google SEO — clear services, local signals, and extractable answers on money pages so the right jobs can find you.",
  },
  {
    id: "agency-vs-generalist",
    question: "When do I need a specialist instead of a generalist?",
    answer:
      "A generalist fits broad brand and ads. Choose SEO/GEO when the gap is getting found in Google and AI. Unsure which you need? Run a free Snapshot, then decide on Audit or hold.",
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
