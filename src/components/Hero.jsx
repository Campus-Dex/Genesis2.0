import { fest } from '../content'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__campus" src="/images/genesis-campus-comic-events.png" alt="Comic-book illustration of students arriving at a red-brick campus with technical events, esports, competitions, and exhibitions banners" />
      <div className="hero__masthead">
        <p className="hero__host">Gateway <span>Education</span></p>
        <p className="hero__place">{fest.venue}</p>
        <p className="hero__presents">PRESENTS</p>
      </div>
      <div className="hero__copy">
        <h1 className="hero__title">
          <img className="hero__lockup" src="/images/genesis-hero-lockup.png" alt="GENESIS 2.0 — The annual tech fest, 30–31 October, 2026" />
        </h1>
        <div className="hero__actions">
          <a className="btn btn--primary" href={fest.registerUrl}>Register now <span aria-hidden="true">↗</span></a>
          <a className="btn btn--ghost" href="#events">Explore events <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  )
}
