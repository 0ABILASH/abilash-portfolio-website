import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  useScrollReveal()
  const milestones = [
    {
      id: 1,
      year: "2022 – 2023",
      role: "Software Intern",
      company: "Moonraft Innovation Labs",
      location: "Bangalore, Karnataka",
      desc: "Assisted in developing responsive web applications, implemented UI components, fixed bugs, and contributed to user-friendly digital solutions.",
      tags: ["HTML/CSS", "JavaScript", "Frameworks"],
    },
    {
      id: 2,
      year: "2023 – 2024",
      role: "Software Developer",
      company: "UST Global",
      location: "Bangalore, Karnataka",
      desc: "Developed and maintained web applications, wrote clean and efficient code, debugged issues, collaborated with cross-functional teams, and delivered high-quality software solutions.",
      tags: ["Polymer", "Lit", "JavaScript"],
      featured: true,
    },
    {
      id: 3,
      year: "2024 – Present",
      role: "Software Engineer",
      company: "Freelancing",
      location: "Remote",
      desc: "Create responsive web applications, develop custom features, solve technical challenges, and deliver scalable solutions tailored to client needs.",
      tags: ["React.js", "Node.js", "UI/UX Design"],
      current: true,
    },
  ];

  return (
    <section id="experience">
      <div className="sec-label">Experience</div>

      <div className="exp-grid">
        <div className="exp-intro rv">
          <span className="exp-intro-label">Career Path</span>
          <h2 className="exp-intro-title">
            From to <em>Where </em>
          </h2>
          <p className="exp-intro-desc">
            Computer Science Graduate with a strong foundation in programming,
            algorithms, and software engineering. Started as an intern, grew
            into a developer, and now freelancing as a software engineer —
            continuously learning and building impactful products.
          </p>
          <div className="about-metrics rv">
            <div className="about-metric">
              <span className="about-metric-value">3+</span>
              <span className="about-metric-label">Years Exp.</span>
            </div>
            <div className="about-metric">
              <span className="about-metric-value">20+</span>
              <span className="about-metric-label">Projects</span>
            </div>
            <div className="about-metric">
              <span className="about-metric-value">∞</span>
              <span className="about-metric-label">Tea Cups</span>
            </div>
          </div>
        </div>

        <div className="exp-timeline">
          <div className="exp-timeline-track" />
          {milestones.map((m, i) => (
            <div
              key={m.id}
              className={`exp-card rv ${m.current ? "exp-card--current" : ""}`}
            >
              <div className="exp-card-side">
                <div
                  className={`exp-card-dot ${m.current ? "exp-card-dot--now" : ""}`}
                >
                  {m.current && <span className="exp-card-pulse" />}
                </div>
                <div className="exp-card-line" />
              </div>
              <div className="exp-card-body">
                <div className="exp-card-head">
                  <span className="exp-card-year">{m.year}</span>
                  <span className="exp-card-num">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="exp-card-role">{m.role}</h3>
                <div className="exp-card-meta">
                  <span className="exp-card-company">{m.company}</span>
                  <span className="exp-card-sep">·</span>
                  <span className="exp-card-location">{m.location}</span>
                </div>
                <p className="exp-card-desc">{m.desc}</p>
                <div className="exp-card-tags">
                  {m.tags.map((tag) => (
                    <span key={tag} className="exp-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="exp-pivot rv">
        <div className="exp-pivot-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
        </div>
        <span className="exp-pivot-from">Schooling</span>
        <span className="exp-pivot-arrow">
          <svg viewBox="0 0 60 10" fill="none" width="60" height="10"><path d="M0 5h54M50 1l6 4-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span className="exp-pivot-from">University Graduate</span>
        <span className="exp-pivot-arrow">
          <svg viewBox="0 0 60 10" fill="none" width="60" height="10"><path d="M0 5h54M50 1l6 4-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span className="exp-pivot-from">Software Intern</span>
        <span className="exp-pivot-arrow">
          <svg viewBox="0 0 60 10" fill="none" width="60" height="10"><path d="M0 5h54M50 1l6 4-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <span className="exp-pivot-from">Software Engineer</span>
        <span className="exp-pivot-label">Career Progression</span>
      </div>
    </section>
  );
}
