import { brand, routes } from "@/lib/site";

export const homeNav = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Free Snapshot", href: routes.snapshot },
  { label: "Contact", href: routes.contact },
] as const;

export const homeCopy = {
  eyebrow: "Gold Coast · South East Queensland",
  h1: "If they can’t find you, they hire someone else.",
  subline:
    "TakeoffSEO gets SEQ pool builders, landscapers, and other local businesses found — in Google Search, Maps, and AI answers.",
  locationLine:
    "Based on the Gold Coast. We work across South East Queensland. Other local service businesses, case by case.",
  primaryCta: "Get a Free Visibility Snapshot",
  phoneCta: `Call ${brand.phoneDisplay}`,
} as const;

export const education = {
  eyebrow: "What visibility actually is",
  title: "Google. Maps. AI. Same buyer. Three places you can be missing.",
  lede: "Hire decisions in SEQ start before the phone rings. Someone asks Google, checks the map, or prompts an AI. If you are not in those answers, the job is already moving.",
  surfaces: [
    {
      id: "google",
      kicker: "Google Search",
      title: "The page has to answer the job they typed.",
      body: "Pool builders and landscapers get hired for specific work in a specific area. Google can only show you when the site makes that obvious: the service, the place, the proof that you do this. Thin brochure copy is why good yards stay invisible.",
      image: "laptop-search",
      imageAlt:
        "Hands typing a search on a laptop — how local hire questions start",
    },
    {
      id: "maps",
      kicker: "Google Maps",
      title: "The map pack is where local jobs start.",
      body: "A Google Business Profile that matches the yard — name, categories, service area, photos — is how you appear when someone is ready to call. If the listing is thin or the area is wrong, Maps has no reason to put you in front of the next job.",
      image: "phone-search",
      imageAlt:
        "Phone home screen showing Google Maps among the apps people actually open",
    },
    {
      id: "ai",
      kicker: "AI answers",
      title: "People now ask who to hire. The model needs something to cite.",
      body: "ChatGPT, Gemini, Perplexity, and Google AI Overviews answer hire questions from pages they can trust and extract. Clear services, local signals, and answers written for the job — not a separate “AI hack.” If you are not mentioned, you are not on the shortlist.",
      image: "desk-work",
      imageAlt: "Planning notes beside a laptop — how hire answers get built",
    },
  ],
} as const;

export const howTakeoff = {
  eyebrow: "How Takeoff helps",
  title: "Invisible. Found. Takeoff.",
  lede: "We do not sell rankings. We make it possible for the right local jobs to find you — then we implement the work and show what moved.",
  steps: [
    {
      id: "invisible",
      numeral: "01",
      title: "Invisible",
      body: "The listing is thin. The pages describe the company, not the job. AI answers skip you on the hire prompts buyers actually ask.",
      image: "pool-dusk",
      imageAlt: "A finished pool and garden that still have to be found online",
    },
    {
      id: "found",
      numeral: "02",
      title: "Found",
      body: "Google Search, Maps, and AI answers can name you for the work you want. The site, the profile, and the local signals finally agree.",
      image: "pool-backyard",
      imageAlt:
        "Queensland backyard pool and palms — the jobs SEQ buyers search for",
    },
    {
      id: "takeoff",
      numeral: "03",
      title: "Takeoff",
      body: "The right jobs can find you. We diagnose, implement on your site and listing, and report what changed against the starting point.",
      image: "outdoor-living",
      imageAlt: "Australian outdoor-living house at dusk — the work, found",
    },
  ],
} as const;

export const snapshotDoor = {
  eyebrow: "The door",
  title: "Free Visibility Snapshot",
  lede: "A short written look at how you appear today. Enough to see the gaps. Enough to decide what happens next.",
  youGet: [
    "How you show up in Google Search and Maps right now",
    "Whether AI-style answers mention, cite, or skip you on hire prompts",
    "The obvious gaps, in writing — not a slide deck",
    "A clear next step. Hours by appointment.",
  ],
  exampleLabel: "Example",
  exampleTitle: "Sample Snapshot shape — not a real client",
  exampleBusiness: "Harbourline Pools (example)",
  exampleArea: "Gold Coast hinterland (example)",
  exampleRows: [
    {
      surface: "Google Search",
      note: "Service pages exist for “concrete pools,” but not for the hire questions buyers actually type.",
    },
    {
      surface: "Maps",
      note: "Profile is open. Categories and service area are thin. Photos do not match the work.",
    },
    {
      surface: "AI answers",
      note: "Mention / cite / none — none on six of eight hire prompts we checked.",
    },
  ],
  exampleFoot:
    "This is an example of the shape. Yours is written for your name, your area, and the work you want found.",
} as const;

export const aboutTeaser = {
  eyebrow: "Who this is",
  title: "Alexander Nott. Gold Coast. SEQ.",
  body: "Alexander founded TakeoffSEO to do Google and AI visibility for SEQ outdoor trades first — pool builders and landscapers — because that is where the hire starts on a map, a search, or an AI answer. Other local service businesses are taken case by case. We say if it is a fit.",
  points: [
    { label: "Founder", value: brand.founder },
    { label: "Based", value: brand.locationLabel },
    { label: "Area", value: brand.areaServed },
    { label: "Hours", value: brand.hours },
  ],
  cta: "About TakeoffSEO",
} as const;

export const snapshotCtas = [
  {
    id: "after-hero",
    title: "See how you appear today.",
    body: "The Snapshot is free, written, and specific to your name. Phone or enquire — we confirm timing by appointment.",
  },
  {
    id: "after-education",
    title: "Missing in one of those three? Start here.",
    body: "A Visibility Snapshot shows the gaps in Search, Maps, and AI answers before you spend on a deeper diagnostic.",
  },
  {
    id: "after-about",
    title: "Ready to see the gaps?",
    body: "Send the website and Google Business Profile. We come back with a short written look.",
  },
  {
    id: "final",
    title: "Get a Free Visibility Snapshot.",
    body: `Call ${brand.phoneDisplay} or write to ${brand.email}. South East Queensland. By appointment.`,
  },
] as const;

export const homeFaqs = [
  {
    id: "what-is-visibility",
    question: "What is Google and AI visibility?",
    answer:
      "It is whether a buyer can find you when they ask who to hire — in Google Search, on Maps, and in AI answers. Visibility is being present in those answers for the work you want. It is not a promised position.",
  },
  {
    id: "why-maps",
    question: "Why does Google Maps matter for local jobs?",
    answer:
      "A lot of SEQ hire starts on the map. The Business Profile has to match the business: name, categories, service area, photos of the actual work. When the listing is thin or inconsistent, Maps has no reason to put you in front of the next call.",
  },
  {
    id: "what-is-ai-visibility",
    question: "What is AI visibility?",
    answer:
      "AI visibility is whether tools such as ChatGPT, Gemini, Perplexity, and Google AI Overviews mention you when someone asks who to hire. We look at mention, cite, or none against real buyer prompts — then build the pages and signals those systems can use.",
  },
  {
    id: "who-for",
    question: "Who is TakeoffSEO for?",
    answer:
      "Marketing focus is SEQ pool builders and landscapers. Delivery is open: other local service businesses across South East Queensland are considered case by case. If the work is not a fit, we say so.",
  },
  {
    id: "only-pool-landscape",
    question: "Do you only work with pool and landscape companies?",
    answer:
      "No. That is the published marketing focus because those trades live on local search. We take other local service businesses case by case. We do not publish a locked “won’t serve” list.",
  },
  {
    id: "whats-in-snapshot",
    question: "What is in the free Visibility Snapshot?",
    answer:
      "A short written look at how you appear in Google Search and Maps, plus a plain note on whether AI-style answers are likely to mention you. It is a screening snapshot — enough to see the obvious gaps and decide the next step. It is not a full diagnostic.",
  },
  {
    id: "how-long",
    question: "How long does a Snapshot take?",
    answer:
      "Most Snapshots come back within a few business days once we have the website, Google Business Profile, and the work you want found for. Hours are by appointment. We confirm timing when you enquire.",
  },
  {
    id: "after-snapshot",
    question: "What happens after the Snapshot?",
    answer:
      "You get the written look and a recommendation. Some businesses stop there. Some go on to a deeper diagnostic and implementation. The Snapshot does not lock you into paid work.",
  },
  {
    id: "no-guarantees",
    question: "Do you guarantee rankings or AI mentions?",
    answer:
      "No. Nobody honest can guarantee a Google ranking, a Maps pack position, or a mention in an AI answer. We do the work that improves your odds and we report what we can observe.",
  },
  {
    id: "vs-ads",
    question: "How is this different from ads?",
    answer:
      "Ads buy attention while the campaign runs. Search and AI visibility is about being findable when someone asks who to hire. They can run together. We start with the Snapshot, not a media spend.",
  },
  {
    id: "website-first",
    question: "Do I need a new website first?",
    answer:
      "Only if the site itself is the blocker — pages Google cannot read, or no pages for the jobs you sell. If that is the case, we say so. Website work is scoped separately. The Snapshot still tells you where you stand today.",
  },
  {
    id: "where-work",
    question: "Where do you work?",
    answer:
      "South East Queensland. Gold Coast based. No public street address and no invented suburb list. If you trade in SEQ and the work is a fit, we will say so.",
  },
  {
    id: "who-alexander",
    question: "Who is Alexander Nott?",
    answer:
      "Alexander Nott founded TakeoffSEO on the Gold Coast. The practice is built around Google and AI visibility for local businesses, with a marketing focus on SEQ pool and landscape companies and delivery open case by case.",
  },
  {
    id: "how-enquire",
    question: "How do I enquire?",
    answer: `Call ${brand.phoneDisplay}, email ${brand.email}, or use the contact form. Ask for a Free Visibility Snapshot. Hours are by appointment.`,
  },
];

export const media = {
  heroVideo: "/media/hero.mp4",
  heroPoster: "/media/hero-poster.webp",
  motionPool: "/media/motion-pool.mp4",
  motionCoast: "/media/motion-coast.mp4",
  photos: {
    "pool-backyard": {
      src: "/media/pool-backyard.webp",
      src800: "/media/pool-backyard-800.webp",
    },
    "pool-dusk": {
      src: "/media/pool-dusk.webp",
      src800: "/media/pool-dusk-800.webp",
    },
    "outdoor-living": {
      src: "/media/outdoor-living.webp",
      src800: "/media/outdoor-living-800.webp",
    },
    "garden-path": {
      src: "/media/garden-path.webp",
      src800: "/media/garden-path-800.webp",
    },
    "coast-seq": {
      src: "/media/coast-seq.webp",
      src800: "/media/coast-seq-800.webp",
    },
    "laptop-search": {
      src: "/media/laptop-search.webp",
      src800: "/media/laptop-search-800.webp",
    },
    "phone-search": {
      src: "/media/phone-search.webp",
      src800: "/media/phone-search-800.webp",
    },
    workspace: {
      src: "/media/workspace.webp",
      src800: "/media/workspace-800.webp",
    },
    "desk-work": {
      src: "/media/desk-work.webp",
      src800: "/media/desk-work-800.webp",
    },
    "modern-house": {
      src: "/media/modern-house.webp",
      src800: "/media/modern-house-800.webp",
    },
    "house-pool": {
      src: "/media/house-pool.webp",
      src800: "/media/house-pool-800.webp",
    },
    "coastal-pool": {
      src: "/media/coastal-pool.webp",
      src800: "/media/coastal-pool-800.webp",
    },
    "lawn-work": {
      src: "/media/lawn-work.webp",
      src800: "/media/lawn-work-800.webp",
    },
  },
} as const;

export type PhotoKey = keyof typeof media.photos;
