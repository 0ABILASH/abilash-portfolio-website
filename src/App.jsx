import { useEffect } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useDisableCopy } from './hooks/useDisableCopy'

import Loader from './components/Loader'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  useScrollReveal()
  useDisableCopy()

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

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
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  )
}
