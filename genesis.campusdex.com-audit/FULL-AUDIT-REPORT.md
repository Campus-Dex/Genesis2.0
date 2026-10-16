# SEO Audit: genesis.campusdex.com

**Date:** 16 Oct 2026 · **Pages crawled:** 1 (single-page site; all internal links are `#` anchors) · **Renderer:** Playwright Chromium + local Lighthouse 12.8.2 (PageSpeed API quota was exhausted)

## Executive summary

**SEO Health Score: 45 / 100**

**Business type:** one-off event (college tech fest, 30–31 Oct 2026, Sonipat). Not a SaaS, store, publisher or standing local business, so the local and e-commerce modules were skipped. The event is **14 days away**, so anything that takes weeks to pay off (backlinks, content clusters) won't matter for this edition. What matters now is what Google and social apps show *this fortnight*.

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 55 |
| Content quality | 23% | 35 |
| On-page SEO | 20% | 55 |
| Schema / structured data | 10% | 0 |
| Performance (lab) | 10% | 66 |
| AI search readiness | 10% | 30 |
| Images | 5% | 75 |

### Top 5 issues
1. **Registration goes nowhere.** Every "Register" button links to `#register`, which is the finale section, whose button links to `#register` again. Searchers who land here can't register. This costs conversions more than any ranking factor.
2. **No Event structured data.** Google can show the fest as an event (dates, venue) in search, but only with `Event` schema. There is none.
3. **No social preview tags or favicon.** PRODUCT.md says students arrive from links shared on phones. WhatsApp and Instagram show a bare URL (no `og:image`, `og:title`), and Google's mobile results show a generic globe instead of an icon.
4. **Every URL returns the homepage with 200 OK.** `/robots.txt`, `/sitemap.xml`, `/favicon.ico` and `/any-made-up-path` all serve the homepage HTML. The cause is `not_found_handling = "single-page-application"` in `wrangler.toml`. The result is an invalid robots.txt (Lighthouse found 40 errors), no sitemap, and infinite soft-404 duplicates.
5. **Thin and placeholder content.** About 125 words in total. There's no venue address, schedule, fee, eligibility, contact or event details ("More event details coming soon"), so the page can't answer the questions students actually search.

### Top 5 quick wins (each under 30 minutes)
1. Add `Event` + `Organization` JSON-LD to `index.html` (draft in `findings/schema.md`).
2. Add Open Graph and Twitter tags, a canonical URL and a favicon to `index.html`.
3. Switch `not_found_handling` to `"404-page"` and add `public/404.html`, `public/robots.txt` and `public/sitemap.xml`.
4. Preload the hero image and serve a ~800px mobile version (mobile LCP 6.9s → est. ~3s).
5. Put the real registration URL in `src/content.js` (`registerUrl`).

---

## Technical SEO (55)

**What works:** HTTPS, HTTP→HTTPS 301, no redirect chains, no console errors, mobile viewport set, `lang="en"`, Lighthouse accessibility 100, Googlebot can render the page (Google renders JavaScript).

| Severity | Finding | Fix |
|---|---|---|
| High | Every path returns the homepage with 200 OK (SPA fallback). Tested `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/favicon.ico`, `/this-page-does-not-exist`: all `200 text/html`, homepage body. | The site has no client-side routes, so the SPA fallback isn't needed. Set `not_found_handling = "404-page"` and add `public/404.html`. |
| High | robots.txt is invalid (HTML). Lighthouse: "40 errors found". | Add `public/robots.txt` with `Sitemap:`. |
| Medium | No sitemap.xml. | Add a one-URL `public/sitemap.xml` and submit it in Search Console. |
| Medium | No canonical tag. | `<link rel="canonical" href="https://genesis.campusdex.com/">` |
| Medium | Content is client-rendered (SPA). Raw HTML holds only the loader; Google renders it, but non-JS crawlers (most AI bots, link previewers) see no body text. | Prerender the React page to static HTML at build time (see AI readiness). |
| Medium | Cloudflare bot JS challenge (`/cdn-cgi/challenge-platform/...`) runs on every page and challenges non-browser clients. Googlebot is a verified bot and passes, but AI crawlers may be blocked by Cloudflare's "Block AI bots" setting. | Check Security → Bots in the Cloudflare dashboard. Decide whether GPTBot, ClaudeBot and PerplexityBot should be allowed. |
| Low | No security headers (HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`). | Add `public/_headers` (Workers static assets support it) or enable HSTS in Cloudflare. |

## Content quality (35)

| Severity | Finding | Fix |
|---|---|---|
| Critical (conversion) | Register CTAs loop to `#register`; no real registration path. | Set `fest.registerUrl` to the live form. |
| High | About 125 words. No venue/campus name or address, schedule, fees, eligibility, team size, prizes or contact. | Add a short "Key info" block: venue + map link, timings, who can join, fee, how to register, contact email or phone. |
| High | Event cards have one line each and no detail ("More event details coming soon"). | Give each category 2–3 named events with a sentence each (e.g. a hackathon or a BGMI/Valorant tournament). Those are the terms students search. |
| Medium | Weak E-E-A-T (trust) signals: organizer appears only as "Gateway Education". No About, past-edition proof, sponsors, faculty coordinators or social links. | Add an organizer line + social links + "GENESIS 1.0" highlights if any exist. |
| Low | Display headings ("Make some noise.", "Find your thing.") carry no searchable meaning. | Keep them for voice; make sure body copy under each carries the keywords. |

## On-page SEO (55)

**What works:** Title `GENESIS 2.0 — Gateway Education Tech Fest` (42 chars), meta description (108 chars) names the brand, place and dates; one H1; heading order is sensible.

| Severity | Finding | Fix |
|---|---|---|
| High | No Open Graph / Twitter tags, so shared links have no preview image or title. | Add `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `twitter:card=summary_large_image`. |
| High | No favicon (link tag missing; `/favicon.ico` returns HTML). | Add `public/favicon.svg` or `.png` + `<link rel="icon">` and an `apple-touch-icon`. |
| Medium | H1 is only an image; its text comes from the `alt`. | Acceptable to Google, but add visually hidden text in the H1, e.g. "GENESIS 2.0: Tech Fest in Sonipat, 30–31 October 2026". |
| Low | Title omits location and year, which students search ("tech fest sonipat 2026"). | `GENESIS 2.0 · Tech Fest in Sonipat, Delhi-NCR · 30–31 Oct 2026` |

## Schema & structured data (0)

None found (`structured_data.block_count = 0`). A ready-to-paste `Event` + `Organization` block is in `findings/schema.md`. It needs the street address and registration URL from organizers. Put it in `index.html` (static HTML) so every crawler sees it without running JavaScript.

## Performance (66, lab only; no field data yet)

| Metric | Mobile | Desktop |
|---|---|---|
| Lighthouse performance | 68 | 64 |
| LCP | **6.9 s** (poor) | 3.8 s |
| FCP | 3.0 s | 2.6 s |
| TBT | 30 ms | 0 ms |
| CLS | 0 | 0.006 |

The LCP element is the hero campus image. Causes, in order:
1. **Late discovery:** the `<img>` only exists after React renders, so the browser can't start downloading it from the HTML ("Request is discoverable in initial document: false"). Fix: `<link rel="preload" as="image" fetchpriority="high">` in `index.html`.
2. **Render-blocking Google Fonts CSS:** about 1.0s mobile. Fix: self-host the two fonts, or load the stylesheet non-blocking.
3. **Oversized images on mobile:** the hero is 467 KB (162 KB wasted) and the lockup 193 KB (162 KB wasted). Fix: add 800w versions + `srcset`.

INP can't be measured in the lab; TBT 30ms suggests it's fine. Third parties are the Cloudflare beacon and bot challenge script (both small).

## Images (75)

**What works:** WebP, explicit width/height (CLS ≈ 0), descriptive alt text on content images, the decorative logo correctly uses `alt=""`.
**Gaps:** no responsive `srcset`, so mobile downloads desktop-sized files (about 350 KB wasted). There's no `og:image` share card.

## AI search readiness (30)

- Body content isn't in the raw HTML. AI crawlers that don't run JavaScript see only the title and meta description.
- There are no answer-ready facts (venue address, dates in text, fee, eligibility, how to register) for an AI answer to quote.
- `/llms.txt` returns the homepage HTML. It's optional and Google ignores it, so this is low priority.
- AI crawler access depends on Cloudflare bot settings (see Technical).
- Agent usability: an agent asked to "register me for GENESIS" can't, because the registration link is a placeholder.

## Search experience (SXO)

Likely queries: "genesis 2.0 sonipat", "gateway education tech fest", "tech fest sonipat/delhi ncr october 2026", "genesis registration". The page type (event landing page) matches the intent. It fails those searchers on registration, venue, schedule and event details, so they bounce back to the results. Persona check: a student deciding whether to go needs *what events, when, where, cost, how to sign up*. Only *when* is answered.

## Visual

Screenshots are in `screenshots/` (desktop 1366×768, mobile 390×844, after the loader). Above the fold on both: logo, dates and two clear CTAs. Good. The 1.2s minimum loader adds to perceived load time. Lighthouse doesn't count it toward LCP, but impatient users notice it.

## Not run / limitations
- No Google Search Console, CrUX field data or GA4 (no credentials configured). After launch, check indexing in Search Console.
- No backlink data (no API keys); for a 2-week-old event site, it's not decision-relevant.
- Local SEO module skipped: a one-off event isn't a local business, and Event schema covers the location signal.
