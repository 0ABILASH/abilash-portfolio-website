import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  const metrics = [
    { value: "3+", label: "Years Exp." },
    { value: "20+", label: "Projects" },
    { value: "∞", label: "Tea Cups" },
  ];

  return (
    <section id="about">
      <div className="about-glow" />
      <div className="about-content">
        <div className="sec-label">About</div>

        <div className="about-grid ">
          <div className="about-visual">
            <div className="about-frame">
              <img src="profile.png" alt="Abilash" loading="lazy" />
            </div>
            <div className="about-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Bangalore, India</span>
            </div>
          </div>

          <div className="about-info">
            <h2 className="about-heading">
              Who<em> I Am</em>
            </h2>
            <p className="about-desc">
              Hello! I&apos;m a Software Developer with over three years of
              experience building web applications and solving real-world
              problems. I enjoy creating clean, efficient, and user-friendly
              digital solutions.
            </p>
            <div className="about-stats">
              {metrics.map((m) => (
                <div key={m.label} className="about-stat">
                  <span className="about-stat-value">{m.value}</span>
                  <span className="about-stat-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-story rv">
          <div className="about-story-card">
            <span className="about-quote-mark" aria-hidden="true">&ldquo;</span>
            <div className="about-story-body">
              <h3 className="about-story-title">
                A Kutty Story about <em>Me</em>
              </h3>
              <p className="about-story-text">
                As a young boy, I aspired to be a professional software engineer.
                Dr. A. P. J. Abdul Kalam stated,{" "}
                <q>A dream is something that prevents you from falling asleep</q>.
                I took that seriously &mdash; I lost sleep debugging code,
                celebrated when <q>Hello, World!</q> finally worked, and realized
                that one missed semicolon could literally destroy my entire day.
                Thankfully, the bugs faded faster than my dream, and today I&apos;m a
                Software Engineer.
              </p>
            </div>
          </div>
        </div>

        <div className="about-banner rv">
          <div className="about-banner-card">
            <div className="about-banner-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <p className="about-banner-text">
              <span>Want to know more? I&apos;m active on socials &mdash; let&apos;s connect!</span>
            </p>
            <svg className="about-banner-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
