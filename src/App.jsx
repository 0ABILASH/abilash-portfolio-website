import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useDisableCopy } from './hooks/useDisableCopy'

import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
// import PhotoGrid from './components/PhotoGrid'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { isLight, toggle } = useTheme()
  useScrollReveal()
  useDisableCopy()

  // Nav active state
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('nav a')
    function onScroll() {
      const scrollY = window.scrollY
      let current = ''
      sections.forEach(sec => { if (scrollY >= sec.offsetTop - 120) current = sec.id })
      if (window.innerHeight + scrollY >= document.body.scrollHeight - 60)
        current = sections[sections.length - 1]?.id || ''
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Loader />
      <div id="sp"></div>
      <ScrollProgress />
      <Header isLight={isLight} toggleTheme={toggle} />
      <Hero />
      <About />
      {/* <PhotoGrid /> */}
      <Skills />
      <Experience />
      <Contact />
      <Marquee />
      <Footer />
    </>
  )
}
