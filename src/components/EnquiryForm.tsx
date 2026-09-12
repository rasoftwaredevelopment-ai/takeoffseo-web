"use client";

import { FormEvent, useState } from "react";
import { brand, formspreeId, offerOrder, offers } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

type EnquiryFormProps = {
  id?: string;
  intent?: "snapshot" | "contact";
  heading?: string;
};

function field(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim();
}

function buildEnquiry(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = field(data, "name");
  const email = field(data, "email");
  const phone = field(data, "phone");
  const website = field(data, "website");
  const gbp = field(data, "gbp");
  const trade = field(data, "trade");
  const suburb = field(data, "suburb");
  const offer = field(data, "offer");
  const message = field(data, "message");

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Website: ${website || "Not provided"}`,
    `Google Business Profile: ${gbp || "Not provided"}`,
    `Trade: ${trade || "Not provided"}`,
    `Suburb / service area: ${suburb || "Not provided"}`,
    `Offer: ${offer || "Not specified"}`,
    "",
    message || "(No extra notes.)",
  ];

  return {
    name,
    email,
    phone,
    website,
    gbp,
    trade,
    suburb,
    offer,
    message,
    text: lines.join("\n"),
  };
}

export function EnquiryForm({
  id = "enquire",
  intent = "contact",
  heading,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const usingFormspree = Boolean(formspreeId);
  const title =
    heading ??
    (intent === "snapshot" ? "Enquire for a Snapshot" : "Send an enquiry");
  const submitLabel = usingFormspree ? "Send enquiry" : "Email this enquiry";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const enquiry = buildEnquiry(form);
    setError("");
    setStatus("sending");

    if (usingFormspree) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: new FormData(form),
        });
        if (!response.ok) {
          throw new Error("Formspree rejected the submission.");
        }
        form.reset();
        setStatus("sent");
        return;
      } catch {
        setStatus("error");
        setError(
          `We could not send that just now. Call ${brand.phoneDisplay} or write to ${brand.email}.`,
        );
        return;
      }
    }

    const subject = encodeURIComponent(
      intent === "snapshot"
        ? `Visibility Snapshot enquiry${enquiry.trade ? ` — ${enquiry.trade}` : ""}`
        : `TakeoffSEO enquiry${enquiry.offer ? ` — ${enquiry.offer}` : ""}`,
    );
    const body = encodeURIComponent(enquiry.text);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setStatus("mailto");
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="scroll-mt-28 rounded-md border border-line bg-paper-50 p-5 shadow-card sm:p-7"
    >
      <h2 className="font-serif text-2xl text-navy">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        We reply by email or phone. Hours {brand.hours.toLowerCase()}.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-navy">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-navy">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-navy">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-navy">Website</span>
          <input
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="https://"
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-navy">
            Google Business Profile
          </span>
          <input
            name="gbp"
            placeholder="Profile link or exact business name"
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-navy">Trade</span>
          <input
            name="trade"
            placeholder="Pool builder, landscaper, …"
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-navy">Suburb / service area</span>
          <input
            name="suburb"
            placeholder="Gold Coast, SEQ, …"
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-navy">What are you looking at?</span>
          <select
            name="offer"
            defaultValue={offers.snapshot.name}
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          >
            {offerOrder.map((offerId) => (
              <option key={offerId} value={offers[offerId].name}>
                {offers[offerId].name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-navy">Message</span>
          <textarea
            name="message"
            rows={4}
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            placeholder="Anything else we should know before we look."
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "sending"
            ? usingFormspree
              ? "Sending…"
              : "Opening…"
            : submitLabel}
        </button>
        <a href={`tel:${brand.phoneTel}`} className="btn-secondary">
          Call {brand.phoneDisplay}
        </a>
        <a href={`mailto:${brand.email}`} className="btn-secondary">
          {brand.email}
        </a>
      </div>

      {status === "sent" ? (
        <p className="mt-4 text-sm text-forest" role="status">
          Sent. We will reply by appointment hours.
        </p>
      ) : null}
      {status === "mailto" ? (
        <p className="mt-4 text-sm text-forest" role="status">
          Your email app should have opened with this enquiry. If not, call{" "}
          {brand.phoneDisplay} or write to {brand.email}.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-4 text-sm text-copper-600" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
