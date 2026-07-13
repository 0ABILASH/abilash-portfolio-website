export default function Header({ isLight, toggleTheme }) {
  return (
    <header>
      <a href="#home" className="logo">
        <span className="logo-text" id="logoText">PORTFOLIO</span>
      </a>
      <nav>
        <span className="nav-hidden-mobile">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </span>
        <div className="theme-switch" role="group" aria-label="Theme">
          <button
            className={`theme-switch-btn${!isLight ? ' active' : ''}`}
            onClick={() => isLight && toggleTheme()}
            aria-pressed={!isLight}
          >
            Light
          </button>
          <button
            className={`theme-switch-btn${isLight ? ' active' : ''}`}
            onClick={() => !isLight && toggleTheme()}
            aria-pressed={isLight}
          >
            Dark
          </button>
        </div>
      </nav>
    </header>
  )
}
