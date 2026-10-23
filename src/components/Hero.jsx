import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { fest } from '../content'

export default function Hero({ onExplore }) {
  const heroRef = useRef(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.to('.hero__campus', {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: heroRef })

  return (
    <section className="hero" id="top" ref={heroRef}>
      <picture>
        <source media="(max-width: 768px)" srcSet="/images/genesis-campus-comic-events-portrait.webp" width="800" height="1024" />
        <source media="(min-width: 1400px)" srcSet="/images/genesis-campus-comic-events-2k.webp" width="2304" height="1536" />
        <img className="hero__campus" src="/images/genesis-campus-comic-events.webp" srcSet="/images/genesis-campus-comic-events.webp 1536w, /images/genesis-campus-comic-events-2k.webp 2304w" sizes="100vw" width="1536" height="1024" fetchPriority="high" alt="Comic-book illustration of students arriving at a red-brick campus with technical events, esports, competitions, and exhibitions banners" />
      </picture>
      <div className="hero__masthead">
        <p className="hero__host">Gateway <span>Education</span></p>
        <p className="hero__place">{fest.venue}</p>
        <p className="hero__presents">PRESENTS</p>
      </div>
      <div className="hero__copy">
        <h1 className="hero__title">
          <img className="hero__lockup" src="/images/genesis-hero-lockup.webp" srcSet="/images/genesis-hero-lockup-820.webp 820w, /images/genesis-hero-lockup.webp 1640w" sizes="min(100vw - 2rem, 820px)" width="1640" height="688" alt="GENESIS 2.0 — The annual tech fest, 30–31 October, 2026" />
        </h1>
        <div className="hero__actions">
          <a className="btn btn--primary" href={fest.registerUrl} target="_blank" rel="noreferrer">Register now <span aria-hidden="true">↗</span></a>
          <a className="btn btn--ghost" href="/?page=explore" onClick={onExplore}>Explore events <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
