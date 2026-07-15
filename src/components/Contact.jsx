import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const socials = [
  {
    key: 'github',
    label: 'GitHub',
    value: '0abilash',
    href: 'https://github.com/0abilash',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26">
        <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    )
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: 'ABILASH',
    href: 'https://www.linkedin.com/in/abilashy',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26">
        <path fill="var(--a)" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    key: 'instagram',
    label: 'Instagram',
    value: '@0abilash',
    href: 'https://instagram.com/0abilash',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig2)"/>
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="var(--fg)" strokeWidth="1.8"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="var(--fg)"/>
      </svg>
    )
  }
]

export default function Contact() {
  const { ref: gridRef, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    document.querySelectorAll('.cb-tile').forEach((t, i) => {
      setTimeout(() => t.classList.add('visible'), i * 110)
    })
  }, [inView])

  return (
    <section className="contact-section" id="contact">
      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
        <defs>
          <radialGradient id="ig2" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="var(--a)"/>
            <stop offset="5%" stopColor="var(--a)"/>
            <stop offset="45%" stopColor="var(--a)"/>
            <stop offset="60%" stopColor="var(--a)"/>
            <stop offset="90%" stopColor="var(--a)"/>
          </radialGradient>
        </defs>
      </svg>

      <div className="sec-label">Get in Touch</div>
      <h2 className="rv"><br />Let&apos;s Connect.</h2>

      <div className="cb-grid" ref={gridRef}>
        <div className="cb-tile cb-form">
          <form action="https://formsubmit.co/mailtoabilashy@gmail.com" method="POST" className="cf">
            <input type="hidden" name="_subject" value="Portfolio Contact" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <div className="cf-row">
              <input type="text" name="name" placeholder="Your Name" className="cf-input" required />
            </div>
            <div className="cf-row">
              <input type="email" name="email" placeholder="Your Email" className="cf-input" required />
            </div>
            <div className="cf-row">
              <textarea name="message" placeholder="Your Message" className="cf-input cf-textarea" rows="4" required></textarea>
            </div>
            <button type="submit" className="cf-btn">
              Send Message
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </form>
        </div>

        {socials.map(s => (
          <a key={s.key} href={s.href} target="_blank" rel="noopener" className="cb-tile cb-social">
            <span className="cb-social-icon">{s.icon}</span>
            <span>
              <p className="cb-social-label">{s.label}</p>
              <p className="cb-social-value">{s.value}</p>
            </span>
          </a>
        ))}
      </div>
      <p className="cb-license">This site and all its content is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener">CC BY-NC-ND 4.0</a></p>
    </section>
  )
}
