import { events } from '../content'

function EventIcon({ type }) {
  const common = { viewBox: '0 0 64 64', 'aria-hidden': true, focusable: 'false' }

  if (type === 'technical') return (
    <svg {...common}>
      <rect x="19" y="19" width="26" height="26" rx="2" />
      <path className="event-icon__pins" d="M25 11v8m7-8v8m7-8v8M25 45v8m7-8v8m7-8v8M11 25h8m-8 7h8m-8 7h8m26-14h8m-8 7h8m-8 7h8" />
      <path className="event-icon__code" d="m29 27-5 5 5 5m6-10 5 5-5 5m-1-12-4 14" />
    </svg>
  )

  if (type === 'esports') return (
    <svg {...common}>
      <path d="M17 22c-6 0-10 4-11 11L3 47c-1 6 5 10 10 6l8-6h22l8 6c5 4 11 0 10-6l-3-14c-1-7-5-11-11-11H17Z" />
      <path className="event-icon__dpad" d="M17 29v14M10 36h14" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" />
      <circle cx="46" cy="29.5" r="2.2" /><circle cx="52.5" cy="36" r="2.2" />
      <circle cx="39.5" cy="36" r="2.2" /><circle cx="46" cy="42.5" r="2.2" />
    </svg>
  )

  if (type === 'competitions') return (
    <svg {...common}>
      <path d="M19 8h26v12c0 9-5 16-13 19-8-3-13-10-13-19V8Z" />
      <path className="event-icon__handles" d="M19 14h-7v6c0 7 5 12 12 13M45 14h7v6c0 7-5 12-12 13" />
      <path className="event-icon__star" d="m32 13 2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2-3.8-3.7 5.2-.8z" />
      <path d="M29 39h6v9h-6zM23 49h18v7H23z" />
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
  return (
    <section className="events" id="events" aria-labelledby="events-heading">
      <header className="events__head">
        <div>
          <p className="section-kicker">PICK YOUR PLAYGROUND</p>
          <h2 id="events-heading">Find your <span>thing.</span></h2>
        </div>
        <p className="events__note">Four ways to make<br />your mark.</p>
      </header>
      <div className="events__grid">
        {events.map((event, index) => (
          <article className={`event event--${event.color}`} key={event.id}>
            <span className="event__index">0{index + 1}</span>
            <span className={`event__icon event__icon--${event.id}`}><EventIcon type={event.id} /></span>
            <div className="event__body">
              <h3 className="event__name">{event.name}</h3>
              <p className="event__blurb">{event.blurb}</p>
            </div>
            <span className="event__arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
      <p className="events__footnote">More event details coming soon.</p>
    </section>
  )
}
