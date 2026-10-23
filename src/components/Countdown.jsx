import { useEffect, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { fest } from '../content'

const target = new Date('2026-10-30T09:00:00+05:30').getTime()
function remaining() {
  const diff = Math.max(0, target - Date.now())
  const seconds = Math.floor(diff / 1000)
  return { live: diff === 0, d: Math.floor(seconds / 86400), h: Math.floor((seconds % 86400) / 3600), m: Math.floor((seconds % 3600) / 60), s: seconds % 60 }
}
const pad = (n) => String(n).padStart(2, '0')

export default function Countdown() {
  const [time, setTime] = useState(remaining)
  const countdownRef = useRef(null)

  useEffect(() => {
    const timer = window.setInterval(() => setTime(remaining()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.from('.countdown__stamp', {
      scale: 1.8,
      rotation: -25,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: countdownRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.countdown__clock span', {
      y: -35,
      scale: 0.88,
      opacity: 0,
      stagger: 0.1,
      duration: 0.65,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.countdown__clock',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: countdownRef })

  return (
    <section className="countdown" id="schedule" aria-labelledby="countdown-heading" ref={countdownRef}>
      <div className="countdown__stamp" aria-hidden="true">MARK<br />YOUR<br />CALENDAR!</div>
      <div className="countdown__inner">
        <p className="section-kicker">IT'S A DATE</p>
        <h2 id="countdown-heading">See you<br /><span>there!</span></h2>
        <p className="countdown__date">{fest.dateLabel}</p>
        <p className="countdown__venue">{fest.venue} <span>·</span> Hosted by {fest.host}</p>
        {time.live ? (
          <p className="countdown__live">HAPPENING NOW!</p>
        ) : (
          <div className="countdown__clock" aria-label={`${time.d} days, ${time.h} hours until Genesis`}>
            <span><b key={time.d}>{pad(time.d)}</b><small>DAYS</small></span>
            <i aria-hidden="true">:</i>
            <span><b key={time.h}>{pad(time.h)}</b><small>HRS</small></span>
            <i aria-hidden="true">:</i>
            <span><b key={time.m}>{pad(time.m)}</b><small>MIN</small></span>
            <i aria-hidden="true">:</i>
            <span><b key={time.s}>{pad(time.s)}</b><small>SEC</small></span>
          </div>
        )}
      </div>
    </section>
  )
}
