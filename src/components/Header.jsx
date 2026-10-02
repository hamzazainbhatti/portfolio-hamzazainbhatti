import "./Header.css"

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a className="logo" href="#top">hamzazain.</a>
        <div className="navLinks">
<a href="#about">About</a>
        </div>
      </nav>
      <div className="ctaBox">
        <button type="button">Contact</button>
      </div>
    </header>
  )
}

export default Header