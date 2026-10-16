import { useEffect, useState } from 'react'
import { fest } from '../content'

const target = new Date('2026-10-30T09:00:00+05:30').getTime()
function remaining() {
  const diff = Math.max(0, target - Date.now())
  const seconds = Math.floor(diff / 1000)
  return { live: diff === 0, d: Math.floor(seconds / 86400), h: Math.floor((seconds % 86400) / 3600), m: Math.floor((seconds % 3600) / 60) }
}
const pad = (n) => String(n).padStart(2, '0')

export default function Countdown() {
  const [time, setTime] = useState(remaining)
  useEffect(() => {
    const timer = window.setInterval(() => setTime(remaining()), 60000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="countdown" id="schedule" aria-labelledby="countdown-heading">
      <div className="countdown__stamp" aria-hidden="true">MARK<br />YOUR<br />CALENDAR!</div>
      <div className="countdown__inner">
        <p className="section-kicker">IT'S A DATE</p>
        <h2 id="countdown-heading">See you<br /><span>there!</span></h2>
        <p className="countdown__date">{fest.dateLabel}</p>
        <p className="countdown__venue">{fest.venue} <span>·</span> Hosted by {fest.host}</p>
        {time.live ? (
          <p className="countdown__live">HAPPENING NOW!</p>
        ) : (
          <div className="countdown__clock" aria-label={`${time.d} days, ${time.h} hours until Genesis`}>
            <span><b>{pad(time.d)}</b><small>DAYS</small></span>
            <i aria-hidden="true">:</i>
            <span><b>{pad(time.h)}</b><small>HRS</small></span>
            <i aria-hidden="true">:</i>
            <span><b>{pad(time.m)}</b><small>MIN</small></span>
          </div>
        )}
      </div>
    </section>
  )
}
