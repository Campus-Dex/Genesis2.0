# Technical findings: raw evidence

Probed with headless Chrome (plain HTTP clients get a Cloudflare challenge), 16 Oct 2026.

| Path | Status | Content-Type | Body |
|---|---|---|---|
| `/` | 200 | text/html | homepage |
| `/robots.txt` | 200 | text/html | homepage HTML ← should be text/plain |
| `/sitemap.xml` | 200 | text/html | homepage HTML ← should be XML or 404 |
| `/llms.txt` | 200 | text/html | homepage HTML |
| `/favicon.ico` | 200 | text/html | homepage HTML ← no favicon |
| `/this-page-does-not-exist` | 200 | text/html | homepage HTML ← soft 404 |
| `/images/genesis-logo.webp` | 200 | image/webp | 33,802 B |
| `/images/genesis-campus-comic-events.webp` | 200 | image/webp | 467,370 B |

- `http://` → `301 https://` ✔. No redirect chain. No console errors.
- Root cause of the soft 404s: `wrangler.toml` has `not_found_handling = "single-page-application"`. The app has no client-side routes (only `#` anchors), so `"404-page"` plus a `public/404.html` is correct.
- Headers on `/`: `cache-control: public, max-age=0, must-revalidate` (fine for HTML). Missing: `strict-transport-security`, `x-content-type-options`, `referrer-policy`, `x-frame-options`, `content-security-policy`, `permissions-policy`.
- Head tags: no `rel=canonical`, `rel=icon`, `og:*`, `twitter:*`, `meta robots`, or JSON-LD (raw or rendered).
- Rendering: `is_spa: true`. The raw HTML body is only the loader; about 125 words of content appear after JavaScript runs.
- Cloudflare challenge script `/cdn-cgi/challenge-platform/scripts/jsd/main.js` is injected on every page (Lighthouse "deprecations" warnings come from it, not from the site's code).
