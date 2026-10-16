import { fest } from '../content'

export default function Hero({ onExplore }) {
  return (
    <section className="hero" id="top">
      <picture>
        <source media="(max-aspect-ratio: 3/4)" srcSet="/images/genesis-campus-comic-events-portrait.webp" width="800" height="1024" />
        <img className="hero__campus" src="/images/genesis-campus-comic-events.webp" width="1536" height="1024" fetchPriority="high" alt="Comic-book illustration of students arriving at a red-brick campus with technical events, esports, competitions, and exhibitions banners" />
      </picture>
      <div className="hero__masthead">
        <p className="hero__host">Gateway <span>Education</span></p>
        <p className="hero__place">{fest.venue}</p>
        <p className="hero__presents">PRESENTS</p>
      </div>
      <div className="hero__copy">
        <h1 className="hero__title">
          <img className="hero__lockup" src="/images/genesis-hero-lockup.webp" srcSet="/images/genesis-hero-lockup-820.webp 820w, /images/genesis-hero-lockup.webp 1640w" sizes="min(100vw - 2rem, 820px)" width="1640" height="690" alt="GENESIS 2.0 — The annual tech fest, 30–31 October, 2026" />
        </h1>
        <div className="hero__actions">
          <a className="btn btn--primary" href={fest.registerUrl} onClick={onExplore}>Register now <span aria-hidden="true">↗</span></a>
          <a className="btn btn--ghost" href="/?page=explore" onClick={onExplore}>Explore events <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
