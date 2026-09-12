# TakeoffSEO — Funnel and CRM design

Preview: open `crm/index.html`. It's a working single-file app (saves in your browser) that runs every stage below. Sample data is clearly labelled and can be cleared.

## 1. The funnel in one line

Someone finds TakeoffSEO → asks for the free check → gets it in two business days → picks a package → pays → gets the list done → gets a report → goes monthly or refers someone.

Every step has: a trigger, an action, an owner (you, or the system), a deadline, and a template. Nothing relies on remembering.

## 2. Stages

| # | Stage | Enters when | Leaves when | System does | You do (SOP) |
|---|---|---|---|---|---|
| 0 | Visitor | Lands on site | Fills a form | Tracks source (GA4 + UTM) | — |
| 1 | New lead | Any site form submitted | Free check sent, or package booked | Creates contact and lead, logs source, sends instant auto-reply, creates task "Free check due" (2 business days) | SOP-01 |
| 2 | Check sent | Free check emailed | Reply, booking, or 7 days pass | Creates task "Follow up" (+7 days) | SOP-02 |
| 3 | Following up | 7-day follow-up sent | Reply, booking, or 30 days pass | Creates task "30-day nudge" | SOP-03 |
| 4 | Booked | Package form submitted or agreed by phone | Deposit paid | Sends agreement + invoice, creates job with checklist, creates task "Confirm finish date" | SOP-04 |
| 5 | Active | Deposit (or full) paid | Every checklist item ticked | Creates onboarding task list, Friday update reminders | SOP-05 to SOP-08 |
| 6 | Delivered | Final report sent | 14 days pass | Creates tasks: final invoice, review ask (+7d), "what next" (+14d) | SOP-11, SOP-12, SOP-14 |
| 7 | Monthly | Monthly plan starts | Notice given | On the 1st: creates the month's cycle checklist and report task | SOP-09 |
| 8 | Dormant | No reply after 30-day nudge, or job finished with no next step | Re-engages | Quarterly light check-in task | SOP-03 |
| 9 | Lost | Said no, or wrong fit | — | Records reason | SOP-01 |

Two rules that keep the funnel honest:
- A lead can only sit in "New lead" for 2 business days. The dashboard turns red after that.
- Nobody is chased more than three times (check, 7-day, 30-day). After that they go Dormant and hear from you once a quarter, briefly.

## 3. Entry points (where leads come from)

Ranked by what a solo Gold Coast SEO can realistically do this quarter:

1. **TakeoffSEO's own Google Business Profile.** You sell profile tune-ups; yours must be perfect. Weekly post. Every review asked for. (SOP-18)
2. **The website's free check.** The one call to action everywhere on the site.
3. **Referrals from finished clients.** Asked at delivery, every time, with a script. (SOP-14)
4. **Referral partners.** Web designers who don't do SEO, bookkeepers, accountants, trade suppliers, business coaches. One coffee a fortnight. (SOP-18)
5. **Local business groups.** Gold Coast and Brisbane Facebook groups, chamber events, trade nights. Answer questions plainly, never pitch.
6. **Direct, warm outreach.** Businesses you've noticed with a broken profile. A short, specific email: "your Google profile lists you as closed on Saturdays but your site says open". Free check offered. No mass mail.

Every entry point gets a UTM tag or a source field so the CRM shows what's working.

## 4. Automations (what happens without you)

| Trigger | Action | Timing |
|---|---|---|
| Any site form submitted | Contact + lead created, source recorded, auto-reply email sent, task created | Instant |
| Free check marked sent | Stage → Check sent, task "Follow up" | +7 days |
| Follow-up sent, no reply | Task "30-day nudge" | +30 days |
| Nudge sent, no reply | Stage → Dormant, task "Quarterly check-in" | +90 days |
| Package booked | Agreement + invoice email, job created from checklist template, stage → Booked | Instant |
| Invoice marked paid (bank transfer seen) | Stage → Active, onboarding email with access steps, Friday reminders start | Instant |
| Friday, active job | Reminder "Send Friday update to [client]" | Weekly |
| Finish date within 5 days, list < 80% done | Warning on dashboard | Daily |
| Last checklist item ticked | Task "Send report", task "Final invoice" | Instant |
| Report sent | Stage → Delivered, task "Ask for review" (+7d), task "What next" (+14d) | Instant |
| Monthly plan active, 1st of month | Month's cycle checklist created, task "Send month's list" | Monthly |
| Monthly plan active, last business day | Task "Send monthly report" | Monthly |
| Invoice 7 days overdue | Reminder email, dashboard flag | Daily |

Emails go from hello@takeoffseo.com. Everything is plain text and signed "Alex". No HTML newsletters.

## 5. Email templates (all in the CRM)

Auto-reply · Free check email · 7-day follow-up · 30-day nudge · Quarterly check-in · Booking confirmation + invoice · Onboarding (access steps) · Friday update · Delivered + report · Review and permission ask · What next (monthly offer) · Monthly list · Monthly report · Late invoice · Not a fit (polite no).

Full text in `sops/07-templates.md`.

## 6. Metrics (the numbers on the dashboard)

- Leads this month, by source
- Free checks sent within 2 business days (%)
- Check → booked conversion (%)
- Booked → paid (%)
- Average first sale ($)
- Active jobs and hours committed vs weekly capacity
- Jobs finished by the promised date (%)
- Monthly clients, and how many months they've stayed
- Revenue this month: one-off + monthly
- Reviews and referrals received

Reviewed every Friday afternoon (SOP-20). Fifteen minutes.

## 7. Build or buy

**Recommendation: build it into the existing website in Stage 2, small.** The current site is Next.js. Add:

- **Database:** Supabase (Postgres, free tier is plenty for years at this size). Tables: `contacts`, `businesses`, `leads`, `free_checks`, `jobs`, `job_items`, `monthly_cycles`, `tasks`, `activities`, `invoices`, `templates`.
- **API:** Next.js route handlers. Site forms POST to `/api/leads`. Cron route on Vercel for the scheduled automations.
- **Email:** Resend (transactional, plain text, from hello@takeoffseo.com).
- **Payments:** bank transfer only. Invoices from the accounting tool (Xero or MYOB) with BSB and account number. Mark paid in the admin when it lands (or via the accounting tool's bank feed and a webhook later, if the manual step gets tedious). Paid → stage Active.
- **Calendar:** Cal.com free for the 20-minute call link.
- **Admin:** `/admin`, Supabase Auth, one user. The screens are exactly the ones in the CRM preview.
- **SMS (optional, later):** Twilio, for the "your free check is in your inbox" text.

Rough size: ~10 tables, ~8 API routes, ~9 admin screens, 15 email templates. All small.

**Why not HubSpot / Pipedrive / Notion?** They'd work for the pipeline, but none of them knows what a "Profile Tune-Up checklist" or a "Friday update" is. You'd be rebuilding your SOPs inside someone else's fields, paying monthly, and still gluing forms to email with Zapier. A small custom admin means the site, the CRM and the SOPs are one system, and the checklists on the public site are the same checklists you tick off.

**If you'd rather not build yet:** the CRM preview exports JSON. Use it as-is in a browser for the first few clients (it works offline), and build the real one when it's earning.

## 8. What's fixed and what's yours to decide

Decided in the preview: stage names, the 2-day / 7-day / 30-day / 90-day rhythm, the three-touch limit, plain-text email, Friday updates, one-page reports.

Yours to decide (in the confirm list): referral incentive, SMS yes/no, weekly capacity hours, whether to build in Stage 2 or run the preview first.
