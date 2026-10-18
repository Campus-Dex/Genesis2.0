import { useEffect } from 'react'
import { fest } from '../content'

export default function EventPage({ category, item, eventNumber }) {
  const pageName = item?.name ?? category.name
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${pageName} — GENESIS 2.0`
    return () => { document.title = previousTitle }
  }, [pageName])

  return (
    <main id="main" className={`event-detail event-detail--${category.color}${item ? ' event-detail--poster-slot' : ''}${item?.id === 'bgmi' ? ' event-detail--bgmi' : ''}`}>
      <div className="event-detail__wrap">
        <nav className="event-detail__navigation" aria-label="Event page navigation">
          <a className="event-detail__back" href={item ? `/events/${category.id}` : '/?page=explore'}>
            {item ? `← ${category.name.toUpperCase()}` : 'EXPLORE EVENTS ↗'}
          </a>
        </nav>
        <div className={`event-detail__layout${item ? '' : ' event-detail__layout--category'}`}>
          <div className="event-detail__copy">
            <div className="event-detail__heading">
              <p className="event-detail__kicker">{item ? category.name : 'GENESIS 2.0'} <span>•</span> {item ? `EVENT ${String(eventNumber).padStart(2, '0')}` : 'EVENT CATEGORY'}</p>
              <h1>{pageName}</h1>
            </div>
            <div className="event-detail__summary">
              {!item && <p className="event-detail__blurb">{category.blurb}</p>}
              {item && <div className="event-detail__actions">
                <a className="btn btn--primary" href={item.registrationUrl || fest.registerUrl}>Register now <span aria-hidden="true">↗</span></a>
              </div>}
            </div>
          </div>
          {item && <figure className="event-detail__art">
            {
              item.poster ? (
                <img src={item.poster} alt={`Poster for ${item.name}`} />
              ) : (
                <div className="event-detail__poster-placeholder" aria-label={`Poster for ${item.name} will be added soon`}>
                  <span className="event-detail__poster-kicker">GENESIS 2.0 <i>•</i> EVENT POSTER</span>
                  <h2>{item.name}</h2>
                  <div className="event-detail__poster-art">
                    <span aria-hidden="true">✦</span>
                    <strong>ARTWORK<br />PREVIEW</strong>
                  </div>
                  <strong className="event-detail__poster-date">{fest.dateLabel}</strong>
                  <small>{fest.venue.toUpperCase()}</small>
                </div>
              )
            }
          </figure>}
        </div>
        {item && <div className="event-detail__facts event-detail__facts--single">
          <p>Event rules and schedule will be announced soon.</p>
        </div>}
        {!item && (
          <section className="event-detail__list" aria-label={`Events in ${category.name}`}>
            <h2>Pick your event</h2>
            <div className="event-detail__items">
              {category.items.map((categoryItem, index) => (
                <a className={`event-detail__item${categoryItem.poster ? ' event-detail__item--has-poster' : ''}`} href={`/events/${category.id}/${categoryItem.id}`} key={categoryItem.id} aria-label={`${categoryItem.name} event details`}>
                  <span className={`event-detail__item-poster${categoryItem.poster ? ' event-detail__item-poster--image' : ''}`} aria-hidden="true">
                    {categoryItem.poster ? <img src={categoryItem.poster} alt="" /> : (
                      <>
                        <span className="event-detail__poster-kicker">GENESIS 2.0 <i>•</i> EVENT POSTER</span>
                        <strong className={`event-detail__item-title${categoryItem.id === 'bgmi' ? ' event-detail__item-title--bgmi' : ''}`}>{categoryItem.name}</strong>
                        <span className="event-detail__item-art"><i>✦</i><small>ARTWORK<br />PREVIEW</small></span>
                        <strong className="event-detail__poster-date">{fest.dateLabel}</strong>
                        <small className="event-detail__item-venue">{fest.venue.toUpperCase()}</small>
                      </>
                    )}
                  </span>
                  {!categoryItem.poster && <span className="event-detail__item-copy">
                    <small>{String(index + 1).padStart(2, '0')}</small>
                  </span>}
                  {categoryItem.poster && <strong className="event-detail__item-poster-title"><small className="event-detail__item-poster-number">{String(index + 1).padStart(2, '0')}</small>{categoryItem.name}</strong>}
                  {!categoryItem.poster && <span aria-hidden="true">↗</span>}
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
