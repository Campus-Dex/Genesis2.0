import { description } from '../content'

export default function Transmission() {
  return (
    <section className="intro" aria-labelledby="intro-heading">
      <div className="intro__heading">
        <p className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2 id="intro-heading">Make some<br /><span>noise.</span></h2>
      </div>
      <div className="intro__panels">
        {description.map((item, index) => (
          <article className={`intro-panel intro-panel--${index + 1}`} key={item.label}>
            <span className="intro-panel__number">0{index + 1}</span>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
            <span className="intro-panel__burst" aria-hidden="true">✦</span>
          </article>
        ))}
      </div>
    </section>
  )
}
