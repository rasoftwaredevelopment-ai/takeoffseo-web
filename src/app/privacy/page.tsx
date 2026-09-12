import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { brand, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How TakeoffSEO handles your information.",
  alternates: { canonical: routes.privacy },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        lede="Short version: I collect what I need to do the work, I don't sell it, and you can ask me to delete it."
      />
      <div className="prose-site mt-10 space-y-4 text-ink-muted">
        <p className="text-sm text-ink-soft">
          {brand.legalName}, ABN {brand.abn}. Last updated [DATE].
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">What I collect</h2>
        <p>
          When you fill in a form on this site, I collect what you type: usually
          your name, email, phone, business name, website and what you&apos;re
          after. If we work together, I&apos;ll also hold logins you give me for
          your Google profile, website and tracking accounts.
        </p>
        <p>
          This site uses basic analytics to count visits. It doesn&apos;t
          identify you personally. There&apos;s no chat widget, no advertising
          trackers, and no selling of data.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">Why I collect it</h2>
        <p>
          To reply to you, do the free check, do paid work you&apos;ve asked
          for, and send invoices. I&apos;ll send one follow-up after a free
          check. I don&apos;t run newsletters unless you ask.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-navy">Your choices</h2>
        <p>
          Ask me what I hold about you, ask me to correct it, or ask me to
          delete it. Email {brand.email} and I&apos;ll do it within a week. I
          handle personal information in line with the Australian Privacy
          Principles.
        </p>
      </div>
    </div>
  );
}
