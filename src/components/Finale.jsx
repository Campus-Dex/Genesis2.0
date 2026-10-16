import { fest } from '../content'

export default function Finale({ onRegister }) {
  return (
    <section className="finale" id="register" aria-labelledby="finale-heading">
      <div className="finale__burst" aria-hidden="true">✦</div>
      <div className="finale__inner">
        <p className="section-kicker">YOUR STORY STARTS HERE</p>
        <h2 id="finale-heading" className="finale__title">Compete.<br /><span>Create.</span><br />Grow.</h2>
        <p className="finale__text">Two days. A campus full of possibilities. Come be part of the story.</p>
        <a className="btn btn--primary btn--large" href={fest.registerUrl} onClick={onRegister}>Register now <span aria-hidden="true">↗</span></a>
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
