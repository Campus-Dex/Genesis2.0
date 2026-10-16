import Nav from './components/Nav'
import Hero from './components/Hero'
import Transmission from './components/Transmission'
import Events from './components/Events'
import Countdown from './components/Countdown'
import Finale from './components/Finale'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main" className="page">
        <Hero />
        <Transmission />
        <Events />
        <Countdown />
        <Finale />
      </main>
    </>
  )
}
