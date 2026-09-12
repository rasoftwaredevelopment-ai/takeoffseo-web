# TakeoffSEO

Local SEO for service businesses anywhere in Australia. Gold Coast based. Solo: Alexander Nott.

This repo is the public site plus the operating docs.

- Site: Next.js App Router, TypeScript, Tailwind
- Domain: takeoffseo.com
- Admin preview (browser CRM): `/ops` — saves in the browser, not wired to production yet
- Operating docs: `docs/` (funnel, reporting, SOPs)

## The offer

| Package | Price (AUD + GST) |
| --- | --- |
| Free Local Search Check | $0 |
| Profile Tune-Up | $490 |
| Website Fix-Up | $1,900 |
| New Website | $3,900 |
| Monthly Steady / Growth | $690 / $1,190 |
| Extra work | $150/hr |

Paying is by bank transfer. Work is remote, Australia-wide.

Old URLs (`/services/visibility-snapshot` and the rest) 301 to the new pages.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Dev server: [http://127.0.0.1:4477](http://127.0.0.1:4477)

```bash
npm run build
npm start
```

## Environment variables

| Name | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended in production | `https://takeoffseo.com` |
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | Formspree form id. When unset, forms open a mailto to hello@takeoffseo.com. |

## Docs

- `docs/STAGE-1.md` — diagnosis, model, confirm list
- `docs/FUNNEL.md` — stages, automations, Stage 2 CRM stack
- `docs/REPORTING.md` — weekly metrics and Friday report software
- `docs/sops/` — 20 procedures and email templates
