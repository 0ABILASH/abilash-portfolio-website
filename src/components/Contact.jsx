import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const socials = [
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/0abilash',
    icon: <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abilashy',
    icon:<path fill-rule="evenodd" d="M20.3292112,2 C21.2519624,2 22,2.74752185 22,3.67078882 L22,20.3292112 C22,21.2519624 21.2524781,22 20.3292112,22 L3.67078882,22 C2.74803764,22 2,21.2524781 2,20.3292112 L2,3.67078882 C2,2.74803764 2.74752185,2 3.67078882,2 L20.3292112,2 Z M15.51875,9.5 C14.0993287,9.5 13.128125,10.127356 12.6956992,10.8562567 L12.625,10.9858333 L12.625,9.625 L9.91666667,9.625 L9.91666667,19.2083333 L12.8333333,19.2083333 L12.8333333,14.56625 C12.8333333,13.0104167 13.40625,12.0208333 14.7833333,12.0208333 C15.7330797,12.0208333 16.1315784,12.8606664 16.1644352,14.3580086 L16.1666667,14.56625 L16.1666667,19.2083333 L19.0833333,19.2083333 L19.0833333,13.9154167 C19.0833333,11.0575 18.3995833,9.5 15.51875,9.5 Z M7.83333333,9.5 L4.91666667,9.5 L4.91666667,19.0833333 L7.83333333,19.0833333 L7.83333333,9.5 Z M6.375,4.5 C5.33958333,4.5 4.5,5.33958333 4.5,6.375 C4.5,7.41041667 5.33958333,8.25 6.375,8.25 C7.41041667,8.25 8.25,7.41041667 8.25,6.375 C8.25,5.33958333 7.41041667,4.5 6.375,4.5 Z" fill="#ffffff"/>
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/0abilash',
    icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig2)"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></>
  },
  {
    key: 'devto',
    label: 'Dev.to',
    href: 'https://dev.to/0abilash',
    icon: <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" fill="#FFFFFF"></path>
  }
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    document.querySelectorAll('.cf-card, .c-social').forEach((el, i) => {
      setTimeout(() => el.classList.add('rv','on'), i * 100)
    })
  }, [inView])

  return (
    <section className="contact-section" id="contact">
      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
        <defs>
          <radialGradient id="ig2" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="var(--a)"/><stop offset="5%" stopColor="var(--a)"/>
            <stop offset="45%" stopColor="var(--a)"/><stop offset="60%" stopColor="var(--a)"/>
            <stop offset="90%" stopColor="var(--a)"/>
          </radialGradient>
        </defs>
      </svg>

      <div className="sec-label">Contact</div>
      <h2 className="rv">Let&apos;s Connect.</h2>
      <p className="contact-intro rv">Have a question, project, or just want to say hi? Drop a message.</p>

      <div className="contact-inner" ref={ref}>
        <div className="cf-card">
          <form action="https://formsubmit.co/mailtoabilashy@gmail.com" method="POST" className="cf">
            <input type="hidden" name="_subject" value="Portfolio Contact" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <p className="cf-head">Send a message</p>
            <div className="cf-row">
              <div className="cf-field">
                <input type="text" name="name" placeholder="Name" className="cf-input" required />
              </div>
              <div className="cf-field">
                <input type="email" name="email" placeholder="Email" className="cf-input" required />
              </div>
            </div>
            <div className="cf-field">
              <textarea name="message" placeholder="Your message&hellip;" className="cf-input cf-textarea" rows="4" required></textarea>
            </div>
            <div className="cf-actions">
              <button type="submit" className="cf-btn">
                Send
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="contact-socials">
          {socials.map(s => (
            <a key={s.key} href={s.href} target="_blank" rel="noopener" className="c-social">
              <span className="c-social-icon">
                <svg viewBox="0 0 24 24" width="100%" height="100%">{s.icon}</svg>
              </span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <p className="cb-license">This site and all its content is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener">CC BY-NC-ND 4.0</a></p>
    </section>
  )
}