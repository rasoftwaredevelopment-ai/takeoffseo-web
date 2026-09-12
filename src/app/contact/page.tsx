import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { brand, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Say hello. Most people start with the free check.",
  alternates: { canonical: routes.contact },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
      <PageHero
        eyebrow="Contact"
        title="Say hello."
        lede="Most people start with the free check. If you'd rather just ask something, use the form or call."
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <EnquiryForm
          heading="Send a message"
          submitLabel="Send message"
          defaultOffer="Contact"
          fields={["name", "email", "phone", "business", "offer", "message"]}
          required={["name", "email", "message"]}
          successTitle="Sent. Thanks, {name}."
          successLead={`I'll reply to {email} within one business day. If it's urgent, call ${brand.phoneDisplay}.`}
        />
        <div>
          <h2 className="font-serif text-3xl text-navy">Direct</h2>
          <div className="mt-6 space-y-4">
            <div className="card p-5">
              <p className="text-sm font-semibold text-navy">Phone</p>
              <a href={`tel:${brand.phoneTel}`} className="mt-1 block font-serif text-2xl">
                {brand.phoneDisplay}
              </a>
              <p className="mt-2 text-sm text-ink-soft">
                If I&apos;m with a client, leave a message and I&apos;ll call
                back the same day.
              </p>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-navy">Email</p>
              <a href={`mailto:${brand.email}`} className="mt-1 block">
                {brand.email}
              </a>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-navy">Hours</p>
              <p className="mt-1 text-ink-muted">
                By appointment. I reply to email within one business day.
              </p>
            </div>
            <div className="card p-5">
              <p className="text-sm font-semibold text-navy">Where</p>
              <p className="mt-1 text-ink-muted">
                Gold Coast, Queensland. No shopfront. We talk by phone or video,
                and I work with businesses anywhere in Australia. Around the
                Gold Coast and Brisbane I can come to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
