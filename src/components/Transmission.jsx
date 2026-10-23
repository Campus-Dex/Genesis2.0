import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { description } from '../content'

export default function Transmission() {
  const introRef = useRef(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.from('.intro__heading', {
      y: 40,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: introRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.intro-panel', {
      y: 50,
      scale: 0.94,
      opacity: 0,
      stagger: 0.15,
      duration: 0.75,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.intro__panels',
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: introRef })

  return (
    <section className="intro" aria-labelledby="intro-heading" ref={introRef}>
      <div className="intro__heading">
        <p className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2 id="intro-heading">Make some<br /><span>noise.</span></h2>
      </div>
      <div className="intro__panels">
        {description.map((item, index) => (
          <article className={`intro-panel intro-panel--${index + 1}`} key={item.label} style={{ '--i': index }}>
            <span className="intro-panel__number">0{index + 1}</span>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
            <span className="intro-panel__burst" aria-hidden="true">✦</span>
          </article>
        ))}
      </div>
    </section>
  )
}
