# TakeoffSEO

Marketing site for TakeoffSEO — Google and AI visibility for local businesses. First published vertical: SEQ pool builders and landscapers.

Stack: **Next.js App Router**, **TypeScript**, **Tailwind CSS**.

- Planned domain: `takeoffseo.com`
- Local / CI default site URL: `http://127.0.0.1:4477`
- Service area: South East Queensland (no street address, no invented city list)

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The dev server listens on [http://127.0.0.1:4477](http://127.0.0.1:4477).

```bash
npm run build
npm start
```

`NEXT_PUBLIC_SITE_URL` defaults to `http://127.0.0.1:4477` when unset so local and Hobby builds still produce valid canonicals, sitemap, and JSON-LD.

## Environment variables

| Name | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended in production | Production value: `https://takeoffseo.com`. Local default: `http://127.0.0.1:4477`. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | Formspree form id (the segment after `/f/`). When unset, Snapshot and Contact enquire forms open a prefilled mailto to `hello@takeoffseo.com`, with phone and email CTAs. |

Copy `.env.example` to `.env.local` for development. Do not commit secrets.

## Deploy on Vercel (Hobby)

This repo is meant to deploy from GitHub onto the **Vercel Hobby** plan.

1. Push this repository to GitHub (`rasoftwaredevelopment-ai/takeoffseo-web`).
2. In [Vercel](https://vercel.com), **Add New… → Project** and import that GitHub repo.
3. Framework preset: **Next.js**. Build command `npm run build`, output `.next`.
4. Add environment variables on the project (Production / Preview):
   - `NEXT_PUBLIC_SITE_URL` = `https://takeoffseo.com`
   - `NEXT_PUBLIC_FORMSPREE_ID` = your Formspree id, only if you want hosted form posts
5. Deploy. Hobby is enough for this static marketing site.

Until the custom domain is attached, Vercel will serve a `*.vercel.app` URL. Keep `NEXT_PUBLIC_SITE_URL` pointed at the public hostname you want in canonicals.

## Domain later: Cloudflare DNS for takeoffseo.com

When the domain is ready, point `takeoffseo.com` at Vercel **through Cloudflare DNS** (do not move the nameservers off Cloudflare if the domain already lives there).

Typical records:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| `CNAME` | `@` | `cname.vercel-dns.com` | DNS only (grey cloud) unless you have a specific Cloudflare-for-SaaS setup |
| `CNAME` | `www` | `cname.vercel-dns.com` | same |

Then in Vercel: **Project → Settings → Domains** → add `takeoffseo.com` and `www.takeoffseo.com`. Vercel will issue the certificate once DNS answers.

If Cloudflare proxy (orange cloud) is enabled, SSL mode should be **Full (strict)** and you still add the domain in Vercel. Grey-cloud CNAME is the simpler Hobby path.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — Google + AI visibility, then How Takeoff helps, then Free Snapshot |
| `/services/visibility-snapshot` | Visibility Snapshot for local businesses (free) |
| `/services/visibility-audit` | Visibility Audit for local businesses — get the fix map |
| `/services/90-day-foundation` | 90-Day Foundation — fix site + Google profile |
| `/services/ninety-day-foundation` | 301 → `/services/90-day-foundation` |
| `/services/monthly-retainer` | Monthly retainer — keep it moving |
| `/industries/pool-landscape` | Pool & landscape in SEQ — Clarity path for outdoor trades |
| `/about` | About TakeoffSEO \| Gold Coast, QLD |
| `/contact` | Contact |

## Offers

1. **Visibility Snapshot** — free
2. **Visibility Audit** — get the fix map (priced in proposal)
3. **90-Day Foundation** — scoped after Snapshot — fix site + Google profile
4. **Monthly retainer** — scoped in proposal — keep it moving

No ranking or AI-mention guarantees. No aggregate ratings in JSON-LD.

## Contact

- Phone: 0497 878 930
- Email: hello@takeoffseo.com
- Hours: By appointment
