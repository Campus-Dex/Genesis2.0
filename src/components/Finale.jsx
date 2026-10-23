import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { fest } from '../content'

export default function Finale() {
  const finaleRef = useRef(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.from('.finale__inner', {
      y: 45,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: finaleRef.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    })

    gsap.to('.finale__burst', {
      rotation: 90,
      ease: 'none',
      scrollTrigger: {
        trigger: finaleRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: finaleRef })

  return (
    <section className="finale" id="register" aria-labelledby="finale-heading" ref={finaleRef}>
      <div className="finale__burst" aria-hidden="true">✦</div>
      <div className="finale__inner">
        <p className="section-kicker">YOUR STORY STARTS HERE</p>
        <h2 id="finale-heading" className="finale__title">Compete.<br /><span>Create.</span><br />Grow.</h2>
        <p className="finale__text">Two days. A campus full of possibilities. Come be part of the story.</p>
        <a className="btn btn--primary btn--large" href={fest.registerUrl} target="_blank" rel="noreferrer">Register now <span aria-hidden="true">↗</span></a>
      </div>
      <footer className="footer">
        <a className="footer__mark" href="#top" aria-label={`${fest.name} ${fest.year}`}>
          <img src="/images/genesis-logo.webp" alt={`${fest.name} ${fest.year}`} />
        </a>
        <p>{fest.host} · {fest.venue}</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  )
}
