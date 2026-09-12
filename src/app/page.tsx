import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { FaqList } from "@/components/FaqList";
import { brand, packages, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} | Local SEO, Gold Coast based, Australia-wide` },
  description: brand.tagline,
  alternates: { canonical: routes.home },
};

const trust = [
  "Every price is on this site",
  "Solo. You deal with me",
  "Plain one-page report each month",
  "You own every account and page",
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-paper-50">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            Local SEO · Gold Coast based · anywhere in Australia
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-display text-navy">
            {brand.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            When someone nearby searches for what you do, they call one of the
            first few businesses they see. I fix the things that decide who they
            see: your Google profile, your website, and your reviews. Fixed
            prices. One person doing the work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={routes.freeCheck}>Get your free check</ButtonLink>
            <ButtonLink href={routes.pricing} variant="secondary">
              See prices
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            The free check takes two business days. No call needed. No pitch.
          </p>
          <ul className="mt-10 grid gap-3 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <li key={item} className="text-sm text-ink-muted">
                <span className="mr-2 text-forest" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-100">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            Where the job gets decided
          </p>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Three places. Same three things behind them.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Most local jobs go to a business found in one of these places. All
            three read the same things about you.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Google search", '"emergency plumber Burleigh Heads"', "Someone types what they need and where. Google shows a few businesses. Your website decides whether you're one of them."],
              ["Google Maps", '"electrician near me"', "The map with three names at the top of Google. People look at the stars, the photos and the hours, then call. Your Google Business Profile decides this."],
              ["AI tools", '"Who\'s a good physio in Robina?"', "ChatGPT, Gemini and Google's own AI answers now name businesses. They pull from your website, your Google profile and what others say about you."],
            ].map(([title, example, body]) => (
              <article key={title} className="card p-6">
                <h3 className="font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{example}</p>
                <p className="mt-3 leading-relaxed text-ink-muted">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-ink-muted">
            So the work is the same: a complete Google profile, a website that
            clearly says what you do and where, and steady reviews. That&apos;s
            what I do. I check all three places in the free check so you can see
            where you stand.
          </p>
        </div>
      </section>

      <section className="bg-paper-50">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            What you can buy
          </p>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Start free. Then pick the job you need done.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Each package is a fixed list of work for a fixed price. Nothing is
            &quot;quoted after a call&quot;.
          </p>
          <div className="card mt-8 flex flex-col items-start justify-between gap-4 bg-paper-200/40 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-serif text-2xl text-navy">
                Free check <span className="ml-2 text-xl">{packages.free.priceLabel}</span>
              </h3>
              <p className="mt-1 max-w-xl text-ink-muted">
                Where you show up now on Google, Maps and one AI tool, what&apos;s
                missing, and which package fits. One-page email in two business
                days.
              </p>
            </div>
            <ButtonLink href={routes.freeCheck}>Get the free check</ButtonLink>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {([packages.tune, packages.fix, packages.site, packages.monthly] as const).map(
              (pkg) => (
                <article
                  key={pkg.id}
                  className={`card relative flex flex-col p-6 ${"featured" in pkg && pkg.featured ? "border-copper" : ""}`}
                >
                  {"featured" in pkg && pkg.featured ? (
                    <span className="absolute -top-3 left-5 rounded-full bg-copper px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Most common
                    </span>
                  ) : null}
                  <h3 className="font-serif text-2xl text-navy">{pkg.name}</h3>
                  <p className="mt-2 font-serif text-3xl text-navy">
                    {pkg.priceLabel}{" "}
                    <span className="text-base font-sans font-medium text-ink-soft">
                      {pkg.id === "monthly" ? "a month" : "one-off"}
                    </span>
                  </p>
                  <p className="mt-3 min-h-[3.5rem] text-sm text-ink-muted">
                    {pkg.summary}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-ink">
                    {pkg.items.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={pkg.href}
                    variant={"featured" in pkg && pkg.featured ? "primary" : "secondary"}
                    className="mt-6 w-full"
                  >
                    Details
                  </ButtonLink>
                </article>
              ),
            )}
          </div>
          <p className="mt-6 text-center text-sm text-ink-soft">
            Prices in Australian dollars, plus GST.{" "}
            <a href={routes.pricing} className="underline">
              Compare everything on one page.
            </a>
          </p>
        </div>
      </section>

      <section className="bg-paper-100">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            How it works
          </p>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Four steps. No surprises.
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["Free check", "Tell me your business and suburb. I email you what I found within two business days."],
              ["Pick a package", "The check tells you which one fits. Book it from the site, or call me if you'd rather talk first."],
              ["I do the work", "Not a team you never meet. Me. You get a short email each week saying what got done."],
              ["You see what changed", "A plain report: calls, enquiries, and how often you showed up. Then keep going or stop."],
            ].map(([title, body], i) => (
              <li key={title}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy font-serif text-paper-50">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <ButtonLink href={routes.howItWorks} variant="secondary">
              More on how I work
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-paper-50">
        <div className="mx-auto grid max-w-site gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Straight talk
            </p>
            <h2 className="mt-3 font-serif text-4xl text-navy">
              Nobody can promise you the top of Google.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Or that ChatGPT will name you. Anyone who does is guessing. Google
              decides, and it changes its mind.
            </p>
            <p className="mt-3 leading-relaxed text-ink-muted">
              What I can promise is the work. Every package has a written
              checklist. I do what&apos;s on it, on time, and I show you what
              changed in numbers you care about: calls, enquiries, bookings, and
              how often you appeared for the searches that matter.
            </p>
            <p className="mt-3 leading-relaxed text-ink-muted">
              If your business is a bad fit for this work, the free check will
              say so and I won&apos;t sell you anything.
            </p>
          </div>
          <div className="rounded-sm bg-paper-200/50 p-6">
            <h3 className="font-serif text-2xl text-navy">What I won&apos;t do</h3>
            <ul className="mt-4 space-y-2 text-ink-muted">
              <li>× Promise rankings or &quot;page one&quot;</li>
              <li>× Buy reviews or links</li>
              <li>× Build dozens of near-identical suburb pages</li>
              <li>× Lock you into a long contract</li>
              <li>× Hide the work behind a monthly &quot;package&quot;</li>
              <li>× Keep your accounts. You own everything, always.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper-100">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            Who it&apos;s for
          </p>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Local businesses that win work by phone or booking.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            If a customer searches, compares two or three options, and then
            calls or books, this is for you.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              "Plumbers", "Electricians", "Builders and renovators", "Pool builders",
              "Landscapers", "Pest control", "Air conditioning", "Roofers and painters",
              "Cleaners", "Arborists", "Physios and chiros", "Dentists", "Vets",
              "Podiatrists", "Accountants and brokers",
            ].map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-paper-50 px-3 py-1 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl leading-relaxed text-ink-muted">
            Based on the Gold Coast. Working with local businesses anywhere in
            Australia. The work is done online, so it doesn&apos;t matter where
            you are.{" "}
            <a href={routes.whoItsFor} className="underline">
              More on who this suits, and who it doesn&apos;t.
            </a>
          </p>
        </div>
      </section>

      <section className="bg-paper-50">
        <div className="mx-auto grid max-w-site items-start gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div
            className="flex aspect-[4/5] max-w-sm items-center justify-center rounded-sm border border-dashed border-line bg-paper-200 text-xs uppercase tracking-widest text-ink-soft"
            aria-hidden
          >
            [ FOUNDER PHOTO ]
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              About
            </p>
            <h2 className="mt-3 font-serif text-4xl text-navy">
              I&apos;m Alexander Nott. TakeoffSEO is me.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              I&apos;m based on the Gold Coast and I work with local businesses
              anywhere in Australia. When you hire TakeoffSEO, I&apos;m the one
              on the phone and the one doing the work. There&apos;s no account
              manager and no junior you&apos;ve never met.
            </p>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Being solo means I take on a small number of clients at a time, so
              each one gets done properly. It also means I can put every price
              on the website, because there&apos;s no sales team to feed.
            </p>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Work is founder-led. Client names will be added here with their
              permission.
            </p>
            <div className="mt-6">
              <ButtonLink href={routes.about} variant="secondary">
                More about me
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-100">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <FaqList
            title="Quick answers"
            items={[
              {
                id: "new-site",
                question: "Do I need a new website?",
                answer:
                  "Often not. If yours is basically sound, the Website Fix-Up is the cheaper answer. If it's old or broken, or you don't have one, I build sites too, made to be found rather than just to look nice. The free check tells you which.",
              },
              {
                id: "how-long",
                question: "How long until I see a difference?",
                answer:
                  "Google profile changes can show within weeks. Website changes take a couple of months to settle. I'll give you an honest read in the free check, because it depends on your area and your competition.",
              },
              {
                id: "ads",
                question: "Do you do Google Ads or social media?",
                answer:
                  "No. I do one thing: helping you show up when people search. If you need ads, I'll say so and you can hire an ads person. I won't sell you something I don't do.",
              },
              {
                id: "areas",
                question: "What areas do you cover?",
                answer:
                  "Anywhere in Australia. I'm on the Gold Coast, and all the work happens online: your Google profile, your website and the directories are the same from anywhere. If you're in South East Queensland and want to meet in person, happy to.",
              },
            ]}
          />
          <div className="mt-8">
            <ButtonLink href={routes.faq} variant="secondary">
              All questions
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-site px-4 pb-16 sm:px-6">
        <CtaBand
          title="Find out where you stand. Free."
          body="Business name and suburb. That's all I need to start. You'll have a one-page email in two business days."
          primaryHref={routes.freeCheck}
          primaryLabel="Get your free check"
        />
      </div>
    </div>
  );
}
