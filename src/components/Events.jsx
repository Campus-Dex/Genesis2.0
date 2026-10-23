import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { events } from '../content'

function EventIcon({ type }) {
  const common = { viewBox: '0 0 64 64', 'aria-hidden': true, focusable: 'false' }

  if (type === 'technical') return (
    <svg {...common}>
      <g transform="translate(32 32) scale(1.24) translate(-32 -32)">
        <rect x="19" y="19" width="26" height="26" rx="2" />
        <path className="event-icon__pins" d="M25 11v8m7-8v8m7-8v8M25 45v8m7-8v8m7-8v8M11 25h8m-8 7h8m-8 7h8m26-14h8m-8 7h8m-8 7h8" />
        <path className="event-icon__code" d="m29 27-5 5 5 5m6-10 5 5-5 5m-1-12-4 14" />
      </g>
    </svg>
  )

  if (type === 'esports' || type === 'battle-arena') return (
    <svg {...common}>
      <g transform="translate(32 32) scale(1.12) translate(-32 -32)">
        <path d="M17 22c-6 0-10 4-11 11L3 47c-1 6 5 10 10 6l8-6h22l8 6c5 4 11 0 10-6l-3-14c-1-7-5-11-11-11H17Z" />
        <path className="event-icon__dpad" d="M17 29v14M10 36h14" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" />
        <circle cx="46" cy="29.5" r="2.2" /><circle cx="52.5" cy="36" r="2.2" />
        <circle cx="39.5" cy="36" r="2.2" /><circle cx="46" cy="42.5" r="2.2" />
      </g>
    </svg>
  )

  if (type === 'competitions') return (
    <svg {...common}>
      <g transform="translate(32 32) scale(1.18) translate(-32 -32)">
        <path d="M19 8h26v12c0 9-5 16-13 19-8-3-13-10-13-19V8Z" />
        <path className="event-icon__handles" d="M19 14h-7v6c0 7 5 12 12 13M45 14h7v6c0 7-5 12-12 13" />
        <path className="event-icon__star" d="m32 13 2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2-3.8-3.7 5.2-.8z" />
        <path d="M29 39h6v9h-6zM23 49h18v7H23z" />
      </g>
    </svg>
  )

  if (type === 'school-track') return (
    <svg {...common}>
      <g transform="translate(32 32) scale(1.16) translate(-32 -32)">
        <path className="event-icon__cap" d="m4 25 28-15 28 15-28 15L4 25Z" />
        <path d="M15 31v12c9 8 25 8 34 0V31L32 40 15 31Z" />
        <path className="event-icon__tassel" d="M58 26v18" fill="none" />
        <circle cx="58" cy="47" r="3" />
      </g>
    </svg>
  )

  if (type === 'design-architecture') return (
    <svg {...common}>
      <g transform="translate(32 32) scale(1.1) translate(-32 -32)">
        <polygon points="10,54 10,12 52,54" fill="#ffd51d" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="18,46 18,26 38,46" fill="#fff" stroke="#111" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="10" y1="18" x2="15" y2="18" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="24" x2="17" y2="24" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="30" x2="15" y2="30" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="36" x2="17" y2="36" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="42" x2="15" y2="42" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="54" x2="24" y2="49" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="54" x2="30" y2="47" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="54" x2="36" y2="49" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <line x1="42" y1="54" x2="42" y2="47" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        <g transform="rotate(35 38 22)">
          <rect x="34" y="6" width="9" height="32" rx="1.5" fill="#63ddf5" stroke="#111" strokeWidth="2.5" />
          <polygon points="34,38 43,38 38.5,48" fill="#ffd51d" stroke="#111" strokeWidth="2.5" strokeLinejoin="round" />
          <polygon points="37,44 40,44 38.5,48" fill="#111" />
          <rect x="34" y="6" width="9" height="6" rx="1" fill="#ed492a" stroke="#111" strokeWidth="2" />
        </g>
      </g>
    </svg>
  )

  if (type === 'business-entrepreneurship') return (
    <svg {...common}>
      <g transform="translate(32 32) scale(1.04) translate(-32 -32)">
        <path d="M24 16v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="9" y="16" width="46" height="34" rx="3.5" fill="#ffd51d" stroke="#111" strokeWidth="3" />
        <line x1="9" y1="26" x2="55" y2="26" stroke="#111" strokeWidth="3" />
        <rect x="17" y="16" width="6" height="34" fill="#fff" stroke="#111" strokeWidth="2.5" />
        <rect x="41" y="16" width="6" height="34" fill="#fff" stroke="#111" strokeWidth="2.5" />
        <rect x="27" y="22" width="10" height="9" rx="1.5" fill="#ed492a" stroke="#111" strokeWidth="2.5" />
        <circle cx="32" cy="26.5" r="1.5" fill="#ffd51d" />
        <path className="event-icon__growth" d="m42 6 9 1-1 9" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M33 20 50 8" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
      </g>
    </svg>
  )

  return (
    <svg {...common}>
      <rect x="8" y="7" width="48" height="36" rx="2" />
      <rect className="event-icon__screen" x="14" y="13" width="36" height="25" rx="1" />
      <path className="event-icon__exhibit" d="M18 31h5v4h-5zM26 26h5v9h-5zM34 21h5v14h-5z" />
      <path className="event-icon__spark" d="m44 14 1.7 4.1 4.3 1.9-4.3 1.8L44 26l-1.8-4.2-4.2-1.8 4.2-1.9z" />
      <path className="event-icon__stand" d="M27 42v7m10-7v7M20 55h24" />
    </svg>
  )
}

export default function Events() {
  const eventsRef = useRef(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.from('.events__head', {
      y: 40,
      opacity: 0,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: eventsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.event', {
      y: 60,
      scale: 0.94,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.events__grid',
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: eventsRef })

  const handleMouseMove = (e) => {
    if (window.matchMedia('(hover: none)').matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotX = -(y / (rect.height / 2)) * 6
    const rotY = (x / (rect.width / 2)) * 6
    gsap.to(e.currentTarget, {
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.25,
      ease: 'power2.out',
      transformPerspective: 800,
    })
  }

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.45,
      ease: 'power2.out',
    })
  }

  return (
    <section className="events" id="events" aria-labelledby="events-heading" ref={eventsRef}>
      <header className="events__head">
        <div>
          <p className="section-kicker">PICK YOUR PLAYGROUND</p>
          <h2 id="events-heading">Find your <span>thing.</span></h2>
        </div>
        <p className="events__note">Six tracks to make<br />your mark.</p>
      </header>
      <div className="events__grid">
        {events.map((event, index) => (
          <a
            className={`event event--${event.color}`}
            href={`/events/${event.id}`}
            key={event.id}
            style={{ '--i': index }}
            aria-label={`Explore ${event.name}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <span className="event__index">0{index + 1}</span>
            <span className={`event__icon event__icon--${event.id}`}><EventIcon type={event.id} /></span>
            <div className="event__body">
              <h3 className="event__name">{event.name}</h3>
              <p className="event__blurb">{event.blurb}</p>
            </div>
            <span className="event__arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
