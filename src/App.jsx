import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Transmission from './components/Transmission'
import Events from './components/Events'
import ExploreEvents from './components/ExploreEvents'
import Countdown from './components/Countdown'
import Finale from './components/Finale'
import EventPage from './components/EventPage'
import { events } from './content'
import './App.css'

export default function App() {
  const [isExplorePage, setIsExplorePage] = useState(() => new URLSearchParams(window.location.search).get('page') === 'explore')
  const eventPath = window.location.pathname.match(/^\/events\/([^/]+)(?:\/([^/]+))?\/?$/)
  const selectedCategory = events.find((event) => event.id === eventPath?.[1])
  const selectedItem = selectedCategory?.items.find((item) => item.id === eventPath?.[2])
  const eventNumber = selectedItem
    ? selectedCategory.items.indexOf(selectedItem) + 1
    : events.indexOf(selectedCategory) + 1

  useEffect(() => {
    const syncExploreRoute = () => setIsExplorePage(new URLSearchParams(window.location.search).get('page') === 'explore')
    window.addEventListener('popstate', syncExploreRoute)
    return () => window.removeEventListener('popstate', syncExploreRoute)
  }, [])

  const showExplorePage = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', '/?page=explore')
    setIsExplorePage(true)
    window.scrollTo(0, 0)
  }

  const showHomePage = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', '/')
    setIsExplorePage(false)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav basePath={selectedCategory || isExplorePage ? '/' : ''} />
      {selectedCategory ? (
        <EventPage category={selectedCategory} item={selectedItem} eventNumber={eventNumber} />
      ) : isExplorePage ? (
        <main id="main" className="page">
          <ExploreEvents onBack={showHomePage} />
        </main>
      ) : (
        <main id="main" className="page">
          <Hero onExplore={showExplorePage} />
          <Transmission />
          <Events />
          <Countdown />
          <Finale />
        </main>
      )}
    </>
  )
}
