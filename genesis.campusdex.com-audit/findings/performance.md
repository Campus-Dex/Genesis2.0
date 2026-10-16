# Performance findings (Lighthouse 12.8.2, local, live site)

PageSpeed Insights API quota was exhausted, so these are local lab runs; there's no CrUX field data for this origin yet.

| | Mobile | Desktop |
|---|---|---|
| Performance | 68 | 64 |
| Accessibility | 100 | 100 |
| Best practices | 82 | 81 |
| SEO | 92 | 92 |
| LCP | 6.9 s | 3.8 s |
| FCP | 3.0 s | 2.6 s |
| Speed Index | 5.0 s | 2.8 s |
| TBT | 30 ms | 0 ms |
| CLS | 0 | 0.006 |

**LCP element:** `img.hero__campus` (`genesis-campus-comic-events.webp`, 467 KB).

| Audit | Savings | Fix |
|---|---|---|
| LCP request discovery: not discoverable in the initial document | — | `<link rel="preload" as="image" href="/images/genesis-campus-comic-events.webp" fetchpriority="high">` in `index.html` (with `imagesrcset` once mobile versions exist) |
| Render-blocking: Google Fonts CSS | ~1,020 ms mobile / 540 ms desktop | Self-host Bowlby One SC + Barlow Condensed (only the weights used) with `font-display: swap` |
| Properly size images | 344 KB mobile | Hero 162 KB, lockup 162 KB, logo 28 KB wasted → add 800w (and ~240w logo) versions via `srcset`/`sizes` |
| Unused JavaScript | 28 KB | Mostly React itself; not worth chasing |
| Legacy JavaScript | 5–7 KB | Ignore |
| Long cache TTL | 1 resource | Cloudflare's own beacon; not fixable by you |
| Best-practices "deprecations" | — | From the Cloudflare bot challenge script, not the site |

Expected after the first three fixes: mobile LCP ≈ 2.5–3.5 s (estimate; re-run Lighthouse to confirm).
