import { useEffect, useRef, useState } from 'react'
import { fest } from '../content'

export default function Nav({ basePath = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <header className="nav">
      <a href={`${basePath}#top`} className="nav__mark" aria-label={`${fest.name} ${fest.year} home`}>
        <img className="nav__logo" src="/images/genesis-logo.webp" width="480" height="189" alt="" />
      </a>
      <nav aria-label="Primary navigation">
        <a href={`${basePath}#events`}>Events</a>
        <a href={`${basePath}#schedule`}>When & where</a>
        <a href={fest.registerUrl} target="_blank" rel="noreferrer" className="nav__cta">Register <span aria-hidden="true">↗</span></a>
      </nav>
      <div className={`nav__mobile${isOpen ? ' is-open' : ''}`} ref={menuRef}>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="nav__hamburger-icon" aria-hidden="true"></span>
        </button>
        {isOpen && (
          <>
            <div className="nav__backdrop" onClick={closeMenu} aria-hidden="true" />
            <nav aria-label="Mobile navigation" className="nav__mobile-drawer">
              <a href={`${basePath}#events`} onClick={closeMenu}>Events</a>
              <a href={`${basePath}#schedule`} onClick={closeMenu}>When & where</a>
              <a href={fest.registerUrl} target="_blank" rel="noreferrer" className="nav__mobile-cta" onClick={closeMenu}>
                Register now <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
