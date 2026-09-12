import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { PageBand } from "@/components/PageBand";
import { PageHero } from "@/components/PageHero";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Questions",
  description: "Things people ask before they start with TakeoffSEO.",
  alternates: { canonical: routes.faq },
};

export default function FaqPage() {
  return (
    <div>
      <PageBand>
        <PageHero
          tone="dark"
          eyebrow="Questions"
          title="Things people ask before they start."
          lede="If yours isn't here, ask me."
        />
      </PageBand>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
      <FaqList
        title="The basics"
        items={[
          { id: "what-is-seo", question: "What is SEO, in plain words?", answer: "SEO stands for search engine optimisation. It means making changes to your website and Google profile so you show up at the top of Google when people search for what you do — without buying ads." },
          { id: "gbp", question: "What's a Google Business Profile?", answer: "The free listing Google gives every business. It's what people see on Google Maps and in the box on the right when they search your name. For most local businesses it's the difference between being in the Map pack or not." },
          { id: "top", question: "Can you get me to the top of Google?", answer: "That's the aim of every package. I work on the things that put local businesses into the Map pack and the organic results. I won't sell you a fake '#1 guaranteed' badge — Google still decides the exact order on a given day — but I don't do this work for any other outcome." },
          { id: "ai", question: "What does \"AI tools\" mean here?", answer: "ChatGPT, Google's Gemini, and the AI answers Google now shows at the top of some searches. I check them in the free check. Same work that helps Google also helps there. Google and Maps are still where most local jobs are decided." },
          { id: "ads", question: "How is this different from Google Ads?", answer: "Ads: you sit at the top because you paid, you pay every click, and the moment you stop you disappear. Search: it takes longer, you don't pay per click, and it keeps working. I only do the second one." },
        ]}
      />
      <FaqList
        title="Money"
        items={[
          { id: "fixed", question: "Are the prices really fixed?", answer: "Yes. The prices on the prices page are what you pay. Anything outside a package is $150 an hour and I quote it before I start." },
          { id: "gst", question: "Is GST included?", answer: "Prices are shown plus GST. Invoices will show the GST amount." },
          { id: "pay", question: "How do I pay?", answer: "Bank transfer, from an invoice I email you with the account details on it. Tune-Up is paid upfront. Fix-Up and New Website are half to start, half when done. Monthly is billed at the start of each month." },
          { id: "cancel", question: "Can I cancel?", answer: "One-off packages: yes, before work starts, for a full refund. Once started, we finish the list. Monthly: 30 days' notice by email, any time." },
        ]}
      />
      <CtaBand
        title="Still got a question?"
        body="Email or call. I reply within one business day."
        primaryHref={routes.contact}
        primaryLabel="Ask me"
      />
      </div>
    </div>
  );
}
