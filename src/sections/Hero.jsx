import { useEffect, useState } from 'react'
import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import './Hero.css'

const NAME = 'hamzazainbhatti'
const NAME_PARTS = ['hamza', 'zain', 'bhatti']

function HeroTitleText() {
  return (
    <span className="heroTitleText">
      {NAME_PARTS.map((part) => (
        <span key={part} className="heroTitleWord">{part}</span>
      ))}
    </span>
  )
}

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hamzazainbhatti/', Icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/hamzazainbhatti/', Icon: FaGithub },
  { label: 'Behance', href: 'https://www.behance.net/hamzazainbhatti', Icon: FaBehance },
]

function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isPortraitViewport, setIsPortraitViewport] = useState(
    () => window.innerWidth < window.innerHeight,
  )

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 0)
    const onResize = () => {
      setIsPortraitViewport(window.innerWidth < window.innerHeight)
    }

    onScroll()
    onResize()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      className={`hero${isPortraitViewport ? ' is-portrait-viewport' : ''}`}
      id="top"
      data-header-theme="light"
    >
      <div className="heroFrame">
        <Navbar variant="hero" isHidden={hasScrolled} />

        <p className="heroStatement">
          <span className="heroStatementLead">A frontend developer</span>
          bringing style to the surface, precision to the codebase, and life to every
          micro-interaction.
        </p>
      </div>

      {/* Same name, 3 layers. Their z-index (see CSS) controls the stacking. */}
      <div className="heroTitle heroTitleMiddle" aria-hidden="true">
        <HeroTitleText />
      </div>
      <div className="heroTitle heroTitleBottom" aria-hidden="true">
        <HeroTitleText />
      </div>
      <img className="heroShape" src="/30.png" alt="" />
      <h1 className="heroTitle heroTitleTop" aria-label={NAME}>
        <HeroTitleText />
      </h1>

      <div className="scroll" aria-hidden="true">
        <svg className="scrollArrow" viewBox="0 0 40 40">
          <g className="arrowDrop">
            <path className="arrowCurve" d="M4 6 L17 19 Q20 22 23 19 L36 6" />
          </g>
        </svg>
      </div>

      <nav className="heroSocials" aria-label="Social links">
        {SOCIALS.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        ))}
      </nav>
    </section>
  )
}

export default Hero