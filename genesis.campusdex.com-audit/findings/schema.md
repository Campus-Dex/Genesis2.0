# Schema findings

**Detected:** none (0 JSON-LD, microdata or RDFa blocks in raw or rendered HTML).

## Recommended: Event + Organization (paste into `index.html` `<head>`)

Fields marked `TODO` need organizer input. Google's Event rich result requires `name`, `startDate` and `location` (a Place with an address); a street address is strongly recommended. Don't publish until the TODOs are real. Placeholder values in schema can get rich results withheld.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://genesis.campusdex.com/#org",
      "name": "Gateway Education",
      "url": "TODO: organizer website",
      "sameAs": ["TODO: Instagram URL", "TODO: LinkedIn URL"]
    },
    {
      "@type": "Event",
      "name": "GENESIS 2.0: The Annual Tech Fest",
      "description": "GENESIS 2.0 by Gateway Education: two days of technical events, esports, competitions and exhibitions in Sonipat, Delhi-NCR.",
      "startDate": "2026-10-30T09:00:00+05:30",
      "endDate": "2026-10-31T18:00:00+05:30",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "TODO: campus name",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "TODO: street address",
          "addressLocality": "Sonipat",
          "addressRegion": "Haryana",
          "addressCountry": "IN"
        }
      },
      "image": ["https://genesis.campusdex.com/images/genesis-campus-comic-events.webp"],
      "organizer": { "@id": "https://genesis.campusdex.com/#org" },
      "offers": {
        "@type": "Offer",
        "url": "TODO: registration URL",
        "price": "TODO: 0 if free",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-10-01T00:00:00+05:30"
      }
    }
  ]
}
</script>
```

- `startDate` uses the 09:00 IST start already used by the countdown (`Countdown.jsx`). `endDate` 18:00 is an assumption; confirm it.
- After the event, change `eventStatus` only if it's cancelled or rescheduled. Past events drop out of event results on their own.
- Validate with Google's Rich Results Test after deploying.
- Not recommended: FAQPage (Google retired FAQ rich results in May 2026) and HowTo (deprecated).
