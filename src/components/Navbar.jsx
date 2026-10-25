import { LOGO, NAV_LINKS } from '../data/navigation'
import './Navbar.css'

function Navbar({ variant, isHidden = false }) {
  const primaryLinks = NAV_LINKS.filter(
    ({ placement }) => placement === 'navigation',
  )
  const contactLink = NAV_LINKS.find(({ placement }) => placement === 'action')

  if (variant === 'hero') {
    return (
      <nav
        className={`heroNav${isHidden ? ' is-hidden' : ''}`}
        aria-label="Hero navigation"
      >
        <div className="heroNavLinks">
          {primaryLinks.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
        <a className="heroNavBrand" href="#top">{LOGO}</a>
        <a href={contactLink.href}>{contactLink.label}</a>
      </nav>
    )
  }

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <a className="logo" href="#top">{LOGO}</a>
        <div className="navLinks">
          {primaryLinks.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
      </nav>
      <div className="ctaBox">
        <a className="ctaButton" href={contactLink.href}>{contactLink.label}</a>
        <a
          className="ctaExtension"
          href={contactLink.href}
          aria-label={contactLink.label}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </>
  )
}

export default Navbar
