import { fest } from '../content'

export default function Finale() {
  return (
    <section className="finale" id="register" aria-labelledby="finale-heading">
      <div className="finale__burst" aria-hidden="true">✦</div>
      <div className="finale__inner">
        <p className="section-kicker">YOUR STORY STARTS HERE</p>
        <h2 id="finale-heading" className="finale__title">Compete.<br /><span>Create.</span><br />Grow.</h2>
        <p className="finale__text">Two days. A campus full of possibilities. Come be part of the story.</p>
        <a className="btn btn--primary btn--large" href={fest.registerUrl}>Register now <span aria-hidden="true">↗</span></a>
      </div>
      <footer className="footer">
        <p className="footer__mark">{fest.name} <span>{fest.year}</span></p>
        <p>{fest.host} · {fest.venue}</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  )
}
