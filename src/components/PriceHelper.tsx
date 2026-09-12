"use client";

import { useState } from "react";
import { routes } from "@/lib/site";

const q1 = [
  ["yes", "Good. I'm happy with it"],
  ["no", "Okay, but tired or not bringing in work"],
  ["broken", "Old, broken or embarrassing"],
  ["none", "I don't have one"],
] as const;

const q2 = [
  ["once", "One job"],
  ["ongoing", "Ongoing"],
] as const;

function result(a: string, b: string) {
  if (a === "yes" && b === "once")
    return {
      html: "Profile Tune-Up, $490.",
      rest: " Your site is fine, so the biggest win is a properly finished Google profile.",
      href: routes.tuneUp,
      label: "See the Tune-Up",
    };
  if (a === "yes" && b === "ongoing")
    return {
      html: "Monthly Plan, from $690 a month.",
      rest: " If your site and profile are already in shape, monthly work keeps you moving. If the profile has never been done properly, start with the Tune-Up, then go monthly.",
      href: routes.monthly,
      label: "See the Monthly Plan",
    };
  if (a === "no" && b === "once")
    return {
      html: "Website Fix-Up, $1,900.",
      rest: " Site and profile fixed together, with a report at the end.",
      href: routes.fixUp,
      label: "See the Fix-Up",
    };
  if (a === "no" && b === "ongoing")
    return {
      html: "Website Fix-Up first, then the Monthly Plan.",
      rest: " Fix the foundations, then keep building. Starting monthly on a site that needs work is a slower, dearer way to do the same thing.",
      href: routes.fixUp,
      label: "See the Fix-Up",
    };
  if (a === "broken")
    return {
      html: "New Website, $3,900.",
      rest:
        " Patching a site that's old or broken usually costs nearly as much as replacing it, and you still end up with the old site. Build one that's made to be found" +
        (b === "ongoing" ? ", then keep it moving with the Monthly Plan" : "") +
        ".",
      href: routes.newWebsite,
      label: "See New Website",
    };
  return {
    html: "Start with the Profile Tune-Up, $490.",
    rest: " Without a website, your Google profile is your website. Then, if you want a site, New Website is $3,900 and includes the Tune-Up, so you're not paying twice.",
    href: routes.tuneUp,
    label: "See the Tune-Up",
  };
}

export function PriceHelper() {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const ready = one && two;
  const rec = ready ? result(one, two) : null;

  return (
    <div className="card p-6 sm:p-8">
      <p>
        <strong>1. What&apos;s your website like?</strong>
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {q1.map(([v, label]) => (
          <button
            key={v}
            type="button"
            onClick={() => setOne(v)}
            className={`rounded-sm border px-4 py-3 text-left text-sm ${
              one === v
                ? "border-copper bg-copper/10"
                : "border-line bg-paper-50 hover:border-navy"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="mt-8">
        <strong>2. Do you want one job done, or ongoing help?</strong>
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {q2.map(([v, label]) => (
          <button
            key={v}
            type="button"
            onClick={() => setTwo(v)}
            className={`rounded-sm border px-4 py-3 text-left text-sm ${
              two === v
                ? "border-copper bg-copper/10"
                : "border-line bg-paper-50 hover:border-navy"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {rec ? (
        <p className="mt-6 rounded-sm bg-copper/10 p-4 leading-relaxed">
          <strong>{rec.html}</strong>
          {rec.rest}{" "}
          <a href={rec.href} className="underline">
            {rec.label}
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}
