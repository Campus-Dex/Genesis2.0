# Action plan: genesis.campusdex.com

The event is on 30–31 Oct 2026, so everything worth doing fits in the next few days. Items marked **[needs info]** require details from the organizers.

## Phase 1: this week (critical / high)

| # | Action | Where | Depends on | How we'd know it failed | Leading indicator |
|---|---|---|---|---|---|
| 1 | Set the real registration URL **[needs info]** | `src/content.js` → `registerUrl` | — | Clicking any Register button doesn't open the form | Form submissions per day |
| 2 | Add Event + Organization JSON-LD (draft in `findings/schema.md`) **[needs info: street address]** | `index.html` | #1 for `offers.url` | Rich Results Test shows errors or no "Event" detected | Search Console → Enhancements → Events |
| 3 | Add OG/Twitter tags + a 1200×630 share image + canonical | `index.html`, `public/images/og.jpg` | — | WhatsApp/LinkedIn preview shows a bare URL | Preview in the Facebook Sharing Debugger |
| 4 | Add favicon + apple-touch-icon | `public/`, `index.html` | — | `/favicon.ico` still returns HTML | Icon visible in browser tab and Google mobile results |
| 5 | Stop the SPA fallback: `not_found_handling = "404-page"`, add `public/404.html`, `robots.txt`, `sitemap.xml` | `wrangler.toml`, `public/` | — | `/made-up-path` still returns 200 | Lighthouse robots-txt audit passes |
| 6 | Preload the hero image + 800w mobile versions of the hero and lockup images | `index.html`, `Hero.jsx`, `public/images/` | — | Mobile LCP still > 4s in Lighthouse | Lighthouse mobile LCP |
| 7 | Submit the site + sitemap in Google Search Console and request indexing | Search Console | #5 | URL Inspection says "not indexed" after 3 days | Coverage status |

## Phase 2: before the event (content)

| # | Action | Depends on |
|---|---|---|
| 8 | "Key info" block: venue/campus name + map link, timings, eligibility, fee, contact **[needs info]** | — |
| 9 | Name 2–3 real events per category with one line each **[needs info]** | — |
| 10 | Visible-text H1 + title with location/year (`GENESIS 2.0 · Tech Fest in Sonipat, Delhi-NCR · 30–31 Oct 2026`) | — |
| 11 | Self-host the two Google fonts (removes ~1s render-blocking on mobile) | — |
| 12 | Organizer/About line + Instagram/LinkedIn links | — |

## Phase 3: if the site lives on after the event

| # | Action |
|---|---|
| 13 | Prerender the page to static HTML at build time so non-JS and AI crawlers see the content |
| 14 | Review Cloudflare bot settings for AI crawlers (GPTBot, ClaudeBot, PerplexityBot) |
| 15 | Security headers via `public/_headers` |
| 16 | After the event: switch Event `eventStatus`, add a highlights/gallery section and keep the URL for GENESIS 3.0 (keeps the ranking history) |

## Phase 4: monitoring
- Search Console: indexing, "genesis 2.0" impressions, Events enhancement report.
- Lighthouse mobile LCP after each deploy.
- Registration count vs. visits (Cloudflare Web Analytics is already on).
