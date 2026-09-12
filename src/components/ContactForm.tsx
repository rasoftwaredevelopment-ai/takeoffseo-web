"use client";

import { FormEvent, useMemo, useState } from "react";
import { brand, formspreeId, offers, offerOrder } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "copied" | "mailto" | "error";

function buildEnquiry(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const business = String(data.get("business") ?? "").trim();
  const offer = String(data.get("offer") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Business: ${business || "Not provided"}`,
    `Offer: ${offer || "Not specified"}`,
    "",
    message || "(No extra notes.)",
  ];

  return { name, email, phone, business, offer, message, text: lines.join("\n") };
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const usingFormspree = Boolean(formspreeId);

  const helper = useMemo(() => {
    if (usingFormspree) {
      return "This form posts to Formspree. We reply by email or phone.";
    }
    return `No form provider is configured on this build. Submit opens an email to ${brand.email}, or copy the enquiry to your clipboard.`;
  }, [usingFormspree]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const enquiry = buildEnquiry(form);
    setError("");
    setStatus("sending");

    if (usingFormspree) {
      try {
        const response = await fetch(
          `https://formspree.io/f/${formspreeId}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            body: new FormData(form),
          },
        );
        if (!response.ok) {
          throw new Error("Formspree rejected the submission.");
        }
        form.reset();
        setStatus("sent");
        return;
      } catch {
        setStatus("error");
        setError(
          `We could not send the form. Email ${brand.email} or call ${brand.phoneDisplay}.`,
        );
        return;
      }
    }

    const subject = encodeURIComponent(
      `TakeoffSEO enquiry${enquiry.offer ? ` — ${enquiry.offer}` : ""}`,
    );
    const body = encodeURIComponent(enquiry.text);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setStatus("mailto");
  }

  async function copyEnquiry(form: HTMLFormElement) {
    const enquiry = buildEnquiry(form);
    try {
      await navigator.clipboard.writeText(
        `To: ${brand.email}\n\n${enquiry.text}`,
      );
      setStatus("copied");
    } catch {
      setStatus("error");
      setError(
        `Could not copy. Email ${brand.email} directly or call ${brand.phoneDisplay}.`,
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-line bg-paper-50 p-5 shadow-card sm:p-7"
    >
      <div className="grid gap-4">
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
          <span className="font-medium text-navy">Business</span>
          <input
            name="business"
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-navy">What are you looking at?</span>
          <select
            name="offer"
            defaultValue="Visibility Snapshot"
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
          >
            {offerOrder.map((id) => (
              <option key={id} value={offers[id].name}>
                {offers[id].name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium text-navy">Notes</span>
          <textarea
            name="message"
            rows={5}
            className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            placeholder="Website, Google Business Profile, and the work you want found for."
          />
        </label>
      </div>

      <p className="mt-4 text-sm text-ink-muted">{helper}</p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {!usingFormspree ? (
          <button
            type="button"
            className="btn-secondary"
            onClick={(event) => {
              const form = event.currentTarget.form;
              if (form) void copyEnquiry(form);
            }}
          >
            Copy enquiry
          </button>
        ) : null}
      </div>

      {status === "sent" ? (
        <p className="mt-4 text-sm text-forest" role="status">
          Sent. We will reply by appointment hours.
        </p>
      ) : null}
      {status === "mailto" ? (
        <p className="mt-4 text-sm text-forest" role="status">
          Your email app should have opened. If it did not, copy the enquiry or
          write to {brand.email}.
        </p>
      ) : null}
      {status === "copied" ? (
        <p className="mt-4 text-sm text-forest" role="status">
          Enquiry copied. Paste it into an email to {brand.email}.
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
