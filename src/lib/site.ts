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
  snapshotEnquire: "/services/visibility-snapshot#enquire",
  contactEnquire: "/contact#enquire",
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
    summary: "See if buyers can find you.",
    outcome: "A gap check before you spend on the Audit.",
  },
  audit: {
    id: "audit",
    name: "Visibility Audit",
    href: routes.audit,
    eyebrow: "Diagnostic",
    priceLabel: "Get the fix map",
    priceNote: "Priced in proposal",
    summary: "Get the fix map — priced in proposal.",
    outcome: "Full Google + AI baseline and a clear priority list.",
  },
  foundation: {
    id: "foundation",
    name: "90-Day Foundation",
    href: routes.foundation,
    eyebrow: "Implementation",
    priceLabel: "Fix site + Google profile",
    priceNote: "Scoped after Snapshot",
    summary:
      "Find the gaps, fix them on your site and Google profile, and show what changed.",
    outcome: "Diagnose, implement, and show what moved.",
  },
  retainer: {
    id: "retainer",
    name: "Monthly retainer",
    href: routes.retainer,
    eyebrow: "Ongoing",
    priceLabel: "Keep it moving",
    priceNote: "Scoped in proposal",
    summary:
      "Keep it moving — scoped in proposal, with clear priorities and plain reporting.",
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
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Free Snapshot", href: routes.snapshot },
  { label: "Contact", href: routes.contact },
] as const;

export const homeCopy = {
  eyebrow: "Get found. Then take off.",
  h1: brand.h1,
  lede: [
    "Buyers already ask Google and AI who to hire.",
    "If you’re not in those answers, the next job goes to someone who is.",
  ].join(" "),
  whereJobsTitle: "Where jobs get decided",
  whereJobsBody:
    "Google search · Google Maps · AI answers (ChatGPT, Gemini, Perplexity, AI Overviews).",
  howEyebrow: "Clarity first. Takeoff next.",
  howTitle: "How Takeoff helps",
  takeoffHelp:
    "We show you the gaps, then help you get found — so more of the right jobs find you. Start with a free Visibility Snapshot on your business name. Everything else is case by case after that.",
  locationLine:
    "Based on the Gold Coast. Across South East Queensland.",
  primaryCta: "Free Visibility Snapshot",
  takeoffCta: "Start your takeoff — free Snapshot",
  secondaryCta: `Talk to us · ${brand.phoneDisplay}`,
  contactAlt: `${brand.phoneDisplay} · ${brand.email}`,
  takeoffHook: "Get found — then take off",
  websiteSeoNote:
    "Site’s the blocker? Website+SEO is a separate build — then Clarity on top.",
  closeTitle: "Clarity first. Takeoff next.",
  closeBody: "See if buyers can find you.",
  homeCloseTitle: "Ready for takeoff?",
  homeCloseBody:
    "See if buyers can find you. Free Visibility Snapshot — then the Audit and ninety-day build when you want the map and the work (priced in proposal).",
} as const;

export const homeDiagrams = {
  whereJobs: {
    src: "/images/owner-lens/where-buyers-look.png",
    title: "Where jobs get decided",
    caption:
      "If you’re missing here, the enquiry often never hits your site.",
    alt: "Where jobs get decided: Google Search versus Google Maps versus AI answers (ChatGPT, Gemini, Perplexity, AI Overviews).",
  },
  howTakeoff: {
    src: "/images/owner-lens/offer-path-diagram.png",
    title: "How Takeoff helps",
    caption: "Start free. Pay when you want the full map or the build.",
    alt: "Snapshot to Audit to Foundation path: Free Snapshot, then Audit (get the fix map, priced in proposal), 90-Day Foundation (fix site + Google profile), Monthly Retainer (keep it moving).",
  },
  snapshotDoor: {
    src: "/images/owner-lens/snapshot-door-diagram.png",
    title: "Free Visibility Snapshot",
    caption: "See if buyers can find you. Everything else after, case by case.",
    alt: "Free Visibility Snapshot door: business name checked against buyer prompts in AI search, a Google Maps note, and Visible, Weak, or Missing labels.",
  },
} as const;

export const afterSnapshot = {
  heading: "What happens after the Snapshot",
  body: "The Snapshot is free and tells you if buyers can find you. If a full fix map or ninety days of work on your site and Google profile would help, we quote that in a proposal — case by case. Not a public buy-now ladder.",
} as const;

export const whatYouGet = [
  "Presence gaps called out clearly",
  "A fix map you can act on",
  "Fixed 90-day deliverables on Foundation",
  "Plain reporting on what we did and what changed",
] as const;

export const howWeWork = [
  "Start with a free Snapshot on your name.",
  "Work happens on your website and Google profile.",
  "We show what moved versus the starting point.",
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
    title: "Google search",
    body: "Pages that answer the jobs people actually type — so the site can be found and understood.",
  },
  {
    title: "Google Maps",
    body: "A listing that matches the business: name, area, categories, and the details buyers check before they call.",
  },
  {
    title: "AI answers",
    body: "ChatGPT, Gemini, Perplexity, AI Overviews — whether models mention you for hire-intent questions.",
  },
] as const;

export const aboutCopy = {
  title: "About TakeoffSEO",
  pageTitle: "About TakeoffSEO | Gold Coast, QLD",
  lede: `I’m ${brand.founder} — founder of TakeoffSEO, based on the Gold Coast. I help local businesses across South East Queensland get found for the work they want on Google and in AI search.`,
  howIWork:
    "How I work: Clarity first. Takeoff next. Free Visibility Snapshot to see the gaps. Anything further — Audit, ninety-day fixes, monthly work — is discussed after, case by case, and priced in proposal. No public price list. No fake rankings.",
  whyThis:
    "Why this: Jobs get decided in search and AI before the phone rings. I keep the work practical: your pages, your Google profile, your buyer questions.",
  proof:
    "Honest proof: Sample Snapshot and sample Audit priorities on the site — marked example only, not client results.",
  photoNote: "Brand mark until a founder photo is supplied.",
  hoursCta: `Free Visibility Snapshot · Contact ${brand.phoneDisplay} · ${brand.email} · ${brand.hours}`,
  delivery: "Local SEO and GEO for local businesses.",
} as const;

export const contactCopy = {
  title: "Contact",
  lede: "Talk to TakeoffSEO about getting found for the work you want — on Google and in AI search. Most conversations start with a free Visibility Snapshot.",
  locationLine:
    "Based on the Gold Coast. Service-area across South East Queensland. Hours by appointment.",
} as const;

export const verticalTeaserCopy = {
  heading: "See how we help pool builders and landscapers in SEQ",
  cta: "Pool & landscape",
} as const;

export const poolLandscapeCopy = {
  eyebrow: "Pool & landscape · SEQ",
  h1: "Get found for the pool and landscape jobs buyers already ask for in SEQ",
  lede:
    "Pool builders and landscapers in SEQ win more of the right jobs when they show up in Google and AI answers. Start with a free Visibility Snapshot on your name. Further work is quoted in a proposal, case by case. Based on the Gold Coast. We work across South East Queensland.",
} as const;

export const seqSituations = [
  {
    title: "Gold Coast pool brief",
    body: "A buyer asks an AI tool who builds concrete pools on the Gold Coast. If your name is missing, the shortlist is already someone else’s.",
  },
  {
    title: "Brisbane landscape Maps check",
    body: "Someone types “landscaper near me” and scans Maps before they call. A thin listing or unclear service area means they never reach the site.",
  },
  {
    title: "SEQ outdoor compare",
    body: "A renovation customer compares two outdoor trades in Google and an AI overview. The trade with clearer pages and a matching profile gets the enquiry.",
  },
] as const;

export const clarityPathSteps = [
  {
    name: "Free Snapshot",
    line: "See if buyers can find you",
  },
  {
    name: "Audit",
    line: "Get the fix map (priced in proposal)",
  },
  {
    name: "90-Day Foundation",
    line: "Fix site + Google profile",
  },
  {
    name: "Monthly Retainer",
    line: "Keep it moving",
  },
] as const;

export const clarityPathCaption =
  "Start free. Pay when you want the full map or the build." as const;

export const howWeWorkSteps = [
  {
    name: "Audit",
    line: "Map the baseline on your website and Google Business Profile.",
  },
  {
    name: "Implement",
    line: "Fix the agreed work on your site and listing — not a page we host.",
  },
  {
    name: "Measure",
    line: "Show what moved versus the starting point.",
  },
] as const;

export const howWeWorkCaption =
  "How we work: audit the baseline, implement on your website and Google Business Profile, then measure what moved. Further work is quoted after the Snapshot." as const;

export const whereJobsCaption =
  "Where jobs get decided: Google search, Google Maps, and AI answers. If you’re missing here, the enquiry often never hits your site." as const;

export const sampleSnapshot = {
  label: "Example only · not a real client",
  business: "Coastal Pools SEQ",
  note: "Illustrative only. Mention / cite / none — not a ranking score and not a testimonial.",
  readout: "Invisible where buyers decide.",
  maps: "Weak — listing exists, categories are thin, service area is unclear.",
  prompts: [
    { prompt: "best pool builder Gold Coast", status: "Missing" },
    { prompt: "concrete pool company near me", status: "Weak" },
    { prompt: "who builds pools in SEQ", status: "Missing" },
  ],
} as const;

export const sampleAudit = {
  label: "Example / sample · fictional fix map · not a case study",
  intro:
    "A sample fix map so you can see the shape of an Audit. Not a real client, review, or testimonial.",
  nextStep: "Recommended next step: 90-Day Foundation, or hold if the site is not ready.",
  priorities: [
    { band: "Do first", item: "Service-area pages that match how buyers search." },
    { band: "Do first", item: "Google Business Profile categories and services list." },
    { band: "Next", item: "Answer-ready hire questions on the money pages." },
    { band: "Next", item: "Name, area, and phone consistency across the web." },
    { band: "Later", item: "Extra content once the baseline is readable." },
  ],
} as const;

export const snapshotPage = {
  title: "Free Visibility Snapshot for local businesses",
  lede: "We check your business name across key buyer prompts in AI search and a quick Google Maps note — enough to know if jobs are going elsewhere. Start here. Further work is quoted in a proposal if you want it.",
} as const;

export const auditPage = {
  title: "Visibility Audit for local businesses",
  lede: "A written fix map: full Google + AI baseline and a prioritised plan. Priced in a proposal after the free Snapshot — case by case, not a public buy-now step.",
} as const;

export const foundationPage = {
  title: "90-Day Foundation: find the gaps, fix them, show what changed",
  lede: "Ninety days on your website and Google Business Profile. We find the gaps, fix the agreed work, and show what moved. Scoped after the Snapshot; priced in the proposal.",
} as const;

export const retainerPage = {
  title: "Monthly retainer for local businesses",
  lede: "Keep it moving. Monthly Google and AI visibility work with clear priorities and plain reporting. Scoped in a proposal after the Snapshot — case by case.",
} as const;

/** FAQ hash IDs stay stable. Numbers in IDs are anchors only — answers never show paid dollars. */
export const snapshotFaqs: FaqItem[] = [
  {
    id: "whats-in-snapshot",
    question: "What is in the free Visibility Snapshot?",
    answer:
      "Free check: 5–8 AI prompts on your name plus a thin Maps note. Full baseline and fix map are the Audit — priced in proposal.",
  },
  {
    id: "vs-paid-audit",
    question: "How is the Snapshot different from the paid audit?",
    answer:
      "Snapshot is free and shows the gaps. Audit maps what to fix first — full baseline, prioritised plan, next step — priced in proposal.",
  },
  {
    id: "how-long",
    question: "How long does the Snapshot take?",
    answer:
      "About 30–45 minutes on our side. Turnaround confirmed when we take details.",
  },
];

export const auditFaqs: FaqItem[] = [
  {
    id: "what-includes",
    question: "What does the Visibility Audit include?",
    answer:
      "Full Google + AI baseline, service-area review, and a prioritised fix list.",
  },
  {
    id: "audit-cost",
    question: "What does the audit cost?",
    answer: "Priced in your proposal after we see scope.",
  },
  {
    id: "in-out-1500",
    question: "What is in and out of the Audit?",
    answer:
      "In: baseline, priorities, and next step. Out: live rebuilds, ongoing content, and ads. Free gap check is the Snapshot.",
  },
  {
    id: "audit-before-retainer",
    question: "Do I need an audit before a retainer?",
    answer: "Yes — Audit sets priorities. Many start Snapshot then Audit.",
  },
  {
    id: "audit-timeline",
    question: "How long does the audit take?",
    answer: "Confirmed at kickoff. Written priorities pack.",
  },
];

export const foundationFaqs: FaqItem[] = [
  {
    id: "what-is-90-day",
    question: "What is the 90-Day Foundation?",
    answer:
      "Ninety days to find the gaps, fix them on your site and Google profile, and show what changed. Not a ranking promise.",
  },
  {
    id: "audit-implement-measure",
    question: "How do audit, implement, and measure fit together?",
    answer: "Find gaps, fix agreed priorities, report what changed.",
  },
  {
    id: "whats-included-4500-6500",
    question: "What is included in the 90-Day Foundation?",
    answer:
      "The work on your website and Google profile: technical and on-page fixes, a clearer page structure, name-address-phone consistency, and pages that answer hire questions. Measurement at the end. Scoped after the Snapshot; priced in the proposal.",
  },
  {
    id: "90-days-realistic",
    question: "Is 90 days a realistic window?",
    answer:
      "Many sites move in 90 days; some need foundation first. Agreed work and clear measurement — not page-one promises.",
  },
  {
    id: "vs-retainer",
    question: "How is the Foundation different from a retainer?",
    answer:
      "Foundation is a fixed sprint. Retainer is ongoing monthly work, scoped in the proposal.",
  },
];

export const retainerFaqs: FaqItem[] = [
  {
    id: "monthly-what",
    question: "What happens on a monthly retainer?",
    answer: "Agreed priority Google + AI work plus a plain report.",
  },
  {
    id: "retainer-cost-au",
    question: "What does the retainer cost in Australia?",
    answer: "Scoped to your site in the proposal. No public price list.",
  },
  {
    id: "google-and-ai",
    question: "Do you work on both Google and AI visibility?",
    answer: "Both. Ads only if separate.",
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
      "In-house if you have capacity. We are a focused Google + AI partner. Unsure? Snapshot or Audit.",
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
