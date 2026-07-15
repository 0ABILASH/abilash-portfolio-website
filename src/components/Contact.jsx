import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const igGradient = (
  <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
    <defs>
      <radialGradient id="ig2" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="5%" stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
  </svg>
)

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
        <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.8"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
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
      {igGradient}
      <style>{`
        .cb-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          grid-template-rows: auto auto auto;
          gap: 14px;
          max-width: 900px;
          margin: 40px auto 0;
          padding: 0 var(--gutter, 24px);
        }
        .cb-tile {
          background: rgba(var(--a-rgb),.04);
          border: 1px solid rgba(var(--a-rgb),.12);
          border-radius: 16px;
          padding: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .6s ease, transform .6s ease, border-color .3s ease, background .3s ease;
        }
        .cb-tile.visible { opacity: 1; transform: translateY(0); }
        .cb-tile:hover {
          border-color: var(--a);
          background: rgba(var(--a-rgb),.08);
        }
        .cb-hero {
          grid-row: span 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 280px;
        }
        .cb-hero-eyebrow {
          font-size: .85rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          opacity: .55;
          margin: 0 0 10px;
          text-align: center;
        }
        .cb-hero-title {
          font-family: "Alan Sans", sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          line-height: 1.35;
          margin: 0;
          text-align: center;
        }
        .cb-hero-cta {
          align-self: center;
          margin-top: 28px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border: 1px solid var(--a);
          border-radius: 999px;
          text-decoration: none;
          color: var(--fg);
          font-size: .78rem;
          letter-spacing: .05em;
          transition: background .3s ease, color .3s ease;
        }
        .cb-hero-cta:hover {
          background: var(--a);
          color: #111;
        }
        .cb-social {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: var(--fg);
        }
        .cb-social-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(var(--a-rgb),.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cb-social-label { font-size: .85rem; font-weight: 600; margin: 0; }
        .cb-social-value { font-size: .72rem; opacity: .55; margin: 2px 0 0; }
        @media (max-width: 640px) {
          .cb-grid { grid-template-columns: 1fr; }
          .cb-hero { grid-row: auto; min-height: auto; }
        }
      `}</style>

      <div className="sec-label">Let's Connect</div>
      <h2 className="rv"> <br />Social Handles.</h2>

      <div className="cb-grid" ref={gridRef}>
        <div className="cb-tile cb-hero">
          <div>
            <p className="cb-hero-eyebrow">Say hello</p>
            {/* <p className="cb-hero-title">Feel-Free to get in touch.</p> */}
          </div>
          <a href="mailto:mailtoabilashy@gmail.com" className="cb-hero-cta">
            Email me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
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
    </section>
  )
}