# TakeoffSEO — Client metrics and reporting

Preview: open `crm/index.html` → Reports. Sample clients have 12 weeks of clearly labelled sample numbers so you can see the charts, the Friday email and the printable monthly report.

## 1. What it does

Every week, for every client, the system pulls the numbers an owner cares about, stores them, and writes:

- **The Friday email (T8)** with this week's numbers beside last week's, plus what got done and what's next from the job checklist. You read it, adjust a line if needed, send.
- **The monthly report (T12)** as a one-page document: this month beside last month, the main thing in one sentence, what was done, what's next. Printable to PDF.
- **The before-and-after report** at the end of a Fix-Up or New Website: the week the job started beside the week it finished.

Nothing is typed twice. If a source isn't connected yet, the field is entered by hand once a week and the reports still work.

## 2. The metrics (and where each comes from)

| Metric | What the owner hears | Source | API | Cost |
|---|---|---|---|---|
| Calls from Google profile | "12 people tapped call on your Google listing" | Google Business Profile | Business Profile Performance API (`CALL_CLICKS`) | Free |
| Website clicks from profile | "9 went to your site from Maps" | GBP | Performance API (`WEBSITE_CLICKS`) | Free |
| Direction requests | "7 asked for directions" | GBP | Performance API (`BUSINESS_DIRECTION_REQUESTS`) | Free |
| Profile views (search + maps) | "your listing was seen 340 times" | GBP | Performance API (impressions) | Free |
| Website enquiries | "4 people filled in your form or tapped quote" | Website | GA4 Data API, events `form_submit`, `quote_click`, `call_click` | Free |
| Search clicks and impressions | "your site came up 1,200 times and got 48 clicks" | Google Search | Search Console API | Free |
| Appeared for X of the 20 searches | "you show up for 11 of the 20 searches that matter, was 8" | Rank tracker checked from the client's suburb | DataForSEO / Local Falcon / BrightLocal API (pick one) | Paid, roughly $10–20 a client a month at weekly checks |
| New reviews and rating | "2 new reviews, you're at 4.8" | GBP | Business Profile API (reviews) | Free |
| Named by AI tools | "ChatGPT named you for 2 of the 5 questions" | Manual, monthly | Checked by hand, 10 minutes, logged in the tool | Time |

Rules on the numbers:
- Always show last period beside this period. Never a number on its own.
- Weekly numbers are the last 7 days ending Thursday, pulled Friday morning. Monthly numbers are calendar months.
- "Appeared for X of 20" means in the top results or the map pack for that search, checked from the client's main suburb. It replaces "rankings", which move daily and mean nothing to an owner.
- AI mentions are a manual monthly check because no API does it honestly yet. Say "manual check" in the report.
- If a number went down, it goes first, with your best one-line reason.

## 3. Cadence

| When | System does | You do |
|---|---|---|
| Daily, 6am | Pulls yesterday from every connected source; stores it | Nothing |
| Friday, 8am | Builds the week (Fri–Thu), compares to last week, drafts T8 for every active job and monthly client | Read, adjust, send. 30 minutes total (SOP-10) |
| 1st of month, 6am | Closes last month, compares to the month before, drafts T12 and the one-page report for every monthly client | Add the AI manual check (10 min per client), write the one-sentence "main thing" if the suggested one isn't right, send with the month's list (SOP-09) |
| Job start | Snapshots "before" | Nothing |
| Job delivered | Builds the before-and-after page | Add two honest lines on what to expect (SOP-11) |
| Any source fails or disconnects | Red flag on the dashboard | Fix the access (SOP-05) |

## 4. Connecting a client (once, at onboarding)

Adds two steps to SOP-05:

1. **Google:** the client adds hello@takeoffseo.com as Manager on the Business Profile, user on Search Console, and Viewer on GA4. One Google login for TakeoffSEO then pulls all three through the APIs. Nothing more from the client.
2. **The 20 searches:** you enter them (from the free check and the plan) with the client's main suburb. The tracker checks them weekly from that location.

Until a source is connected, the Reports screen shows a grey "by hand" badge and a small form. You type the numbers from the GBP Insights page and Search Console once a week. Same reports come out.

## 5. How the reports are composed

**Friday email.** Four lines from the job (done, next, need, finish date) as now, then a numbers block:

```
Numbers this week (last week in brackets)
Calls from your Google profile: 12 (9)
Website enquiries: 4 (3)
Direction requests: 7 (7)
Appeared for 11 of the 20 searches (10)
New reviews: 1 (0)
```

For the first three weeks of a Fix-Up or New Website the numbers block is headed "Baseline, too early to read" so nobody reads noise as progress.

**Monthly report.** One page, printable. Header with business name and month. One sentence: the main thing. Then the table of this month vs last month for every metric. Then what I did, what's next, need from you. The system suggests the "main thing" as the biggest movement among calls, enquiries and visibility; you can overwrite it.

**Before-and-after.** Same table, columns "week we started" and "week we finished", plus the ticked list.

## 6. Stage 2 build

Adds to the admin described in `FUNNEL.md`:

- **Tables:** `connections` (client, source, credentials reference, status, last pulled), `metric_days` (client, date, metric, value), `tracked_searches` (client, query, suburb), `search_results` (client, query, date, appeared, position), `report_snapshots` (client, period, json).
- **Jobs:** a daily cron pulling GBP Performance, Search Console and GA4 via the Google APIs with one TakeoffSEO service login; a weekly cron for the rank tracker; Friday and 1st-of-month crons that build the drafts.
- **Rank tracker:** DataForSEO is the cheapest per check and has a straightforward API; Local Falcon is better for map-pack grids but dearer. Pick one; the tool only needs "appeared / didn't" per search per week.
- **Reports:** HTML pages with a print stylesheet, saved as PDF with a headless browser on demand. No third-party report builder.
- **Client access (later, optional):** a read-only link per client to their own numbers. Not needed to start; the email is the report.

Rough size: 5 tables, 4 cron jobs, 3 API integrations, 2 report layouts. The screens are the ones in the preview.

## 7. Honest limits

- GBP Performance data lags by 2–3 days and Google occasionally revises it. Say "as of Thursday" and don't sweat a ±2 change.
- Search Console data lags similarly and is sampled for small sites.
- Call tracking counts taps on the call button, not answered calls. If you want true call counts, a call-tracking number (paid, and it complicates the profile) is a separate decision. The SOPs don't recommend it to start.
- Rank trackers check from a simulated location. Good enough for "appeared or didn't", not for "you are exactly 3rd".
- AI tools give different answers to different people on different days. The manual check is a sanity read, not a metric to promise on.
