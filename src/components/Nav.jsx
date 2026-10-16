import { fest } from '../content'

export default function Nav({ basePath = '', onRegister }) {
  return (
    <header className="nav">
      <a href={`${basePath}#top`} className="nav__mark" aria-label={`${fest.name} ${fest.year} home`}>
        <img className="nav__logo" src="/images/genesis-logo.webp" width="480" height="189" alt="" />
      </a>
      <nav aria-label="Primary navigation">
        <a href={`${basePath}#events`}>Events</a>
        <a href={`${basePath}#schedule`}>When & where</a>
        <a href={fest.registerUrl} onClick={onRegister} className="nav__cta">Register <span aria-hidden="true">↗</span></a>
      </nav>
      <details className="nav__mobile">
        <summary aria-label="Toggle navigation menu"><span className="nav__hamburger-icon" aria-hidden="true"></span></summary>
        <nav aria-label="Mobile navigation">
          <a href={`${basePath}#events`}>Events</a>
          <a href={`${basePath}#schedule`}>When & where</a>
        </nav>
      </details>
    </header>
  )
}
