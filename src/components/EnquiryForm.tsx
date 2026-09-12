"use client";

import { FormEvent, useState } from "react";
import { brand, formspreeId, packages } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

type Field =
  | "name"
  | "email"
  | "phone"
  | "business"
  | "website"
  | "area"
  | "jobs"
  | "message"
  | "offer"
  | "start"
  | "plan"
  | "history";

type EnquiryFormProps = {
  heading?: string;
  intro?: string;
  submitLabel: string;
  defaultOffer?: string;
  fields: Field[];
  required?: Field[];
  successTitle: string;
  successLead: string;
};

function value(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

export function EnquiryForm({
  heading,
  intro,
  submitLabel,
  defaultOffer,
  fields,
  required = ["name", "email"],
  successTitle,
  successLead,
}: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [sentName, setSentName] = useState("");
  const [sentEmail, setSentEmail] = useState("");
  const [sentBusiness, setSentBusiness] = useState("");
  const usingFormspree = Boolean(formspreeId);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = value(data, "name");
    const email = value(data, "email");
    const business = value(data, "business");
    setError("");
    setStatus("sending");

    if (usingFormspree) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!response.ok) throw new Error("rejected");
        setSentName(name.split(" ")[0] || name);
        setSentEmail(email);
        setSentBusiness(business);
        form.reset();
        setStatus("sent");
        return;
      } catch {
        setStatus("error");
        setError(
          `I could not send the form. Email ${brand.email} or call ${brand.phoneDisplay}.`,
        );
        return;
      }
    }

    const lines = Array.from(data.entries())
      .filter(([key]) => key !== "_subject")
      .map(([key, val]) => `${key}: ${String(val).trim() || "—"}`);
    const subject = encodeURIComponent(
      `TakeoffSEO enquiry${defaultOffer ? ` — ${defaultOffer}` : ""}`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSentName(name.split(" ")[0] || name);
    setSentEmail(email);
    setSentBusiness(business);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-sm border border-forest/30 bg-forest/5 p-6 sm:p-7"
        role="status"
      >
        <h3 className="font-serif text-2xl text-forest">
          {successTitle.replace("{name}", sentName || "there")}
        </h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          {successLead
            .replace("{email}", sentEmail)
            .replace("{business}", sentBusiness || "your business")}
        </p>
        <p className="mt-4 text-sm text-ink-soft">
          — Alex, TakeoffSEO · {brand.phoneDisplay}
        </p>
      </div>
    );
  }

  const show = (field: Field) => fields.includes(field);
  const need = (field: Field) => required.includes(field);

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-line bg-paper-50 p-5 shadow-card sm:p-7"
    >
      {heading ? (
        <h3 className="font-serif text-2xl text-navy">{heading}</h3>
      ) : null}
      {intro ? (
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{intro}</p>
      ) : null}
      <input
        type="hidden"
        name="_subject"
        value={`TakeoffSEO enquiry${defaultOffer ? ` — ${defaultOffer}` : ""}`}
      />
      <div className={`grid gap-4 ${heading || intro ? "mt-5" : ""}`}>
        {show("business") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">Business name</span>
            <input
              name="business"
              required={need("business")}
              autoComplete="organization"
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            />
          </label>
        ) : null}
        {show("website") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">
              Website{" "}
              {!need("website") ? (
                <span className="font-normal text-ink-soft">(if you have one)</span>
              ) : null}
            </span>
            <input
              name="website"
              type="url"
              required={need("website")}
              placeholder="https://"
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            />
          </label>
        ) : null}
        {show("area") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">Main suburb or area</span>
            <input
              name="area"
              required={need("area")}
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            />
          </label>
        ) : null}
        {show("jobs") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">
              What jobs do you want more of?
            </span>
            <textarea
              name="jobs"
              required={need("jobs")}
              rows={3}
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            />
          </label>
        ) : null}
        {show("name") || show("email") ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {show("name") ? (
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium text-navy">Your name</span>
                <input
                  name="name"
                  required={need("name")}
                  autoComplete="name"
                  className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
                />
              </label>
            ) : null}
            {show("email") ? (
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium text-navy">Email</span>
                <input
                  name="email"
                  type="email"
                  required={need("email")}
                  autoComplete="email"
                  className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
                />
              </label>
            ) : null}
          </div>
        ) : null}
        {show("phone") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">
              Phone{" "}
              {!need("phone") ? (
                <span className="font-normal text-ink-soft">(optional)</span>
              ) : null}
            </span>
            <input
              name="phone"
              type="tel"
              required={need("phone")}
              autoComplete="tel"
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            />
          </label>
        ) : null}
        {show("offer") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">What are you looking at?</span>
            <select
              name="offer"
              defaultValue={defaultOffer ?? ""}
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            >
              <option value="Free check">{packages.free.name}</option>
              <option value="Profile Tune-Up">{packages.tune.name}</option>
              <option value="Website Fix-Up">{packages.fix.name}</option>
              <option value="New Website">{packages.site.name}</option>
              <option value="Monthly Plan">{packages.monthly.name}</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>
        ) : null}
        {show("plan") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">
              Which plan are you thinking about?
            </span>
            <select
              name="plan"
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            >
              <option>Steady, $690 a month</option>
              <option>Growth, $1,190 a month</option>
              <option>Not sure</option>
            </select>
          </label>
        ) : null}
        {show("start") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">
              When would you like to start?
            </span>
            <select
              name="start"
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            >
              <option>As soon as you can</option>
              <option>Within the next month</option>
              <option>Not sure, let&apos;s talk first</option>
            </select>
          </label>
        ) : null}
        {show("history") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">
              Have you had SEO work done before?
            </span>
            <textarea
              name="history"
              rows={3}
              placeholder="A sentence or two is plenty"
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            />
          </label>
        ) : null}
        {show("message") ? (
          <label className="grid gap-1.5 text-sm">
            <span className="font-medium text-navy">What can I help with?</span>
            <textarea
              name="message"
              required={need("message")}
              rows={4}
              className="rounded-sm border border-line bg-white px-3 py-2.5 text-ink"
            />
          </label>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-5 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
      <p className="mt-3 text-sm text-ink-soft">
        {usingFormspree
          ? "I'll only use this to reply to you."
          : `This opens an email to ${brand.email}.`}{" "}
        Bank transfer only, once we start.
      </p>
      {status === "error" ? (
        <p className="mt-3 text-sm text-copper-600" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
