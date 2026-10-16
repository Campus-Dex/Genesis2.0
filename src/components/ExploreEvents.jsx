import { events } from '../content'

export default function ExploreEvents({ onBack }) {
  return (
    <section className="events events--overview" id="events" aria-labelledby="events-heading">
      <a className="explore-events__back" href="/" onClick={onBack}>← BACK TO HOME</a>
      <header className="events__head">
        <div>
          <p className="section-kicker">ALL TRACKS • ALL EVENTS</p>
          <h2 id="events-heading">Pick your <span>event.</span></h2>
        </div>
      </header>

      <div className="event-shelves">
        {events.map((category, categoryIndex) => (
          <section className={`event-shelf event-shelf--${category.color}`} key={category.id} aria-labelledby={`event-shelf-${category.id}`}>
            <header className="event-shelf__head">
              <div>
                <p className="event-shelf__index">TRACK {String(categoryIndex + 1).padStart(2, '0')}</p>
                <h3 id={`event-shelf-${category.id}`}>{category.name}</h3>
              </div>
              <span className="event-shelf__count">{category.items.length} EVENTS</span>
            </header>
            <div className="event-posters">
              {category.items.map((item, itemIndex) => (
                <a className="event-poster" href={`/events/${category.id}/${item.id}`} key={item.id}>
                  <span className="event-poster__visual">
                    {item.poster ? (
                      <img src={item.poster} alt={`${item.name} event poster`} loading="lazy" />
                    ) : (
                      <span className="event-poster__placeholder">
                        <span className="event-poster__number">{String(itemIndex + 1).padStart(2, '0')}</span>
                        <span className="event-poster__burst" aria-hidden="true">✦</span>
                        <span className="event-poster__label">EVENT POSTER</span>
                        <strong>{item.name}</strong>
                        <small>POSTER COMING SOON</small>
                      </span>
                    )}
                  </span>
                  <span className="event-poster__title">{item.name}<span aria-hidden="true">↗</span></span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
