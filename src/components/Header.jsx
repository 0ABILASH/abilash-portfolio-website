export default function Header() {
  return (
    <header>
      <a href="#home" className="logo">
        <span className="logo-text">PROFESSIONAL PROFILE</span>
      </a>
      <nav>
        <span className="nav-hidden-mobile">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </span>
      </nav>
    </header>
  )
}
