import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FaqList } from "@/components/FaqList";
import { PageHero } from "@/components/PageHero";
import { brand, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Local Search Check",
  description:
    "I search for your business the way a customer would. One-page email in two business days. Free.",
  alternates: { canonical: routes.freeCheck },
};

export default function FreeCheckPage() {
  return (
    <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
      <PageHero
        eyebrow="Free · two business days · no call needed"
        title="Free Local Search Check"
        lede="I search for your business the way a customer would. Then I email you a page that says where you show up, what's missing, and the three things I'd fix first."
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-serif text-3xl text-navy">What you get</h2>
          <p className="mt-3 text-ink-muted">
            One email, about a page long, written by me. Not an automated report.
          </p>
          <ul className="mt-6 space-y-3 text-ink-muted">
            <li>
              <strong className="text-navy">Where you show up now</strong> for
              five searches your customers actually use, on Google, Google Maps,
              and one AI tool.
            </li>
            <li>
              <strong className="text-navy">What your Google Business Profile is missing.</strong>{" "}
              That&apos;s the listing that appears on Maps and on the right of
              Google. It matters more than most owners think.
            </li>
            <li>
              <strong className="text-navy">The three things I&apos;d fix first</strong>,
              in plain words, and roughly what each one does for you.
            </li>
            <li>
              <strong className="text-navy">Which package fits</strong>, or
              &quot;you&apos;re in good shape, do nothing.&quot; I&apos;ll say
              that when it&apos;s true.
            </li>
          </ul>
          <h3 className="mt-10 font-serif text-2xl text-navy">What happens after</h3>
          <p className="mt-3 text-ink-muted">
            You&apos;ll get the email. A week later I&apos;ll send one follow-up
            to ask if it made sense. That&apos;s it. No calls unless you ask for
            one.
          </p>
          <h3 className="mt-8 font-serif text-2xl text-navy">What it isn&apos;t</h3>
          <p className="mt-3 text-ink-muted">
            It isn&apos;t a full audit of your website, and it isn&apos;t a
            ranking report. It&apos;s enough to know whether jobs are going
            elsewhere and what to do about it. It takes me about half an hour,
            which is why I can do it for free.
          </p>
          <h3 className="mt-8 font-serif text-2xl text-navy">Why free?</h3>
          <p className="mt-3 text-ink-muted">
            Because it&apos;s the fastest way for you to see whether I know what
            I&apos;m talking about, and for me to see whether I can help. If I
            can&apos;t, we&apos;ve both saved time.
          </p>
        </div>
        <EnquiryForm
          heading="Request your free check"
          submitLabel="Send me the free check"
          defaultOffer="Free check"
          fields={["business", "website", "area", "jobs", "name", "email", "phone"]}
          required={["business", "area", "jobs", "name", "email"]}
          successTitle="Got it, {name}."
          successLead={`I'll email your check to {email} within two business days. If I have a question about {business} first, I'll email or call.`}
        />
      </div>
      <FaqList
        title="Questions about the free check"
        items={[
          {
            id: "really-free",
            question: "Is it really free?",
            answer: `Yes. No card, no "free trial", no invoice later. If you want more after reading it, the prices are on the prices page.`,
          },
          {
            id: "hassle",
            question: "Will you hassle me afterwards?",
            answer:
              "No. One email with the check, one follow-up a week later. If you don't reply, I leave you alone.",
          },
          {
            id: "no-site",
            question: "I don't have a website. Can you still check?",
            answer:
              "Yes. Many trades run on a Google profile and word of mouth. I'll check Google Maps and the AI tools, and tell you honestly whether a simple site would help.",
          },
          {
            id: "not-gc",
            question: "I'm not on the Gold Coast. Does that matter?",
            answer: `No. The check, and all the work after it, is done online. I work with local businesses anywhere in Australia. If you're outside Australia, ask; I'll be honest about whether I know your market well enough.`,
          },
        ]}
      />
      <p className="mt-10 text-sm text-ink-soft">
        {brand.phoneDisplay} · {brand.email}
      </p>
    </div>
  );
}
