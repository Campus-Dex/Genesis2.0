import { useEffect, useId, useState } from 'react'
import { eventInformation, fest, generalEventRules } from '../content'

function RuleAccordion({ title, items }) {
  const panelId = useId()
  const [open, setOpen] = useState(false)

  return (
    <section className={`event-detail__rule${open ? ' event-detail__rule--open' : ''}`}>
      <button
        className="event-detail__rule-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(value => !value)}
      >
        {title}
      </button>
      <div className="event-detail__rule-panel" id={panelId} aria-hidden={!open} inert={!open}>
        <div className="event-detail__rule-content">
          <ul>{items.map((entry, index) => <li key={`${title}-${index}`}>{entry}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}

export default function EventPage({ category, item, eventNumber }) {
  const pageName = item?.name ?? category.name
  const info = item ? eventInformation[item.id] : null
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
            <div className={`event-detail__heading${pageName.length > 16 ? ' event-detail__heading--long' : ''}${pageName.split(/\s+/).some(word => word.length >= 9) ? ' event-detail__heading--wide-word' : ''}`}>
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
        {item && (info ? <section className="event-detail__information" aria-label={`${item.name} event information`}>
          <div className="event-detail__facts event-detail__facts--rulebook">
            {info.facts.map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}
          </div>
          {info.notes?.length > 0 && <div className="event-detail__notes">
            {info.notes.map(([label, value]) => <article key={label}><small>{label}</small><p>{value}</p></article>)}
          </div>}
          {(info.coordinators || info.head || info.faculty) && <div className="event-detail__contacts">
            {info.coordinators && <p><small>EVENT COORDINATORS</small><strong>{info.coordinators}</strong></p>}
            {info.head && <p><small>HEAD COORDINATOR</small><strong>{info.head}</strong></p>}
            {info.faculty && <p><small>FACULTY COORDINATORS</small><strong>{info.faculty}</strong></p>}
          </div>}
          <div className="event-detail__rules">
            {info.sections.map(section => <RuleAccordion key={section.title} title={section.title} items={section.items} />)}
            <RuleAccordion title="General rules for all participants" items={generalEventRules} />
          </div>
        </section> : <div className="event-detail__facts event-detail__facts--single">
          <p>Schedule, fees and event-specific rules are not listed in the rulebook.</p>
        </div>)}
        {item && !info && <div className="event-detail__rules event-detail__rules--standalone">
          <RuleAccordion title="General rules for all participants" items={generalEventRules} />
        </div>}
        {!item && (
          <section className="event-detail__list" aria-label={`Events in ${category.name}`}>
            <h2>Pick your event</h2>
            <div className="event-detail__items">
              {category.items.map((categoryItem, index) => (
                <a className={`event-detail__item${categoryItem.poster ? ' event-detail__item--has-poster' : ''}`} href={`/events/${category.id}/${categoryItem.id}`} key={categoryItem.id} aria-label={`${categoryItem.name} event details`}>
                  <span className={`event-detail__item-poster${categoryItem.poster ? ' event-detail__item-poster--image' : ''}${category.id === 'school-track' && categoryItem.poster ? ' event-detail__item-poster--school-track' : ''}`} aria-hidden="true">
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
                  {categoryItem.poster && <strong className="event-detail__item-poster-title"><small className="event-detail__item-poster-number">{String(index + 1).padStart(2, '0')}</small><span className="event-detail__item-poster-name">{categoryItem.name}</span></strong>}
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
