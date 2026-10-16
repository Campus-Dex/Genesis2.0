import { fest } from '../content'

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav__mark" aria-label={`${fest.name} ${fest.year} home`}>
        <img className="nav__logo" src="/images/genesis-logo.webp" width="480" height="189" alt="" />
      </a>
      <nav aria-label="Primary navigation">
        <a href="#events">Events</a>
        <a href="#schedule">When & where</a>
        <a href={fest.registerUrl} className="nav__cta">Register <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
