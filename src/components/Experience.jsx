export default function Experience() {
  const milestones = [
    {
      id: 1,
      year: 'Jan 2021 – Jun 2021',
      role: 'Front Office Assistant',
      company: 'RowanTree by Poppys',
      location: 'Kodaikanal, Tamil Nadu',
      desc: 'Managed front desk operations — guest check-ins, check-outs, and reservations at a boutique hill-station property.',
      tags: ['Hospitality', 'Guest Relations', 'Front Desk'],
    },
    {
      id: 2,
      year: 'Aug 2021 – Jul 2024',
      role: 'Front Office Executive',
      company: 'Germanus Springs',
      location: 'Kodaikanal, Tamil Nadu',
      desc: 'Led front office operations for a premium resort — end-to-end guest relations, team coordination, billing systems, and high service standards.',
      tags: ['Operations Lead', 'Team Management', 'Billing Systems'],
      featured: true,
    },
    {
      id: 3,
      year: '2024 – Present',
      role: 'Software Engineer',
      company: 'Full-Stack Developer',
      location: 'Remote',
      desc: 'Building web applications with modern frameworks. From front-end to back-end, crafting clean code and solving real-world problems.',
      tags: ['React', 'Node.js', 'Full-Stack'],
      current: true,
    },
  ]

  return (
    <section id="experience">
      <div className="sec-label">Experience</div>

      <div className="exp-grid">
        <div className="exp-intro">
          <span className="exp-intro-label">Career Path</span>
          <h2 className="exp-intro-title">
            Where I've <em>been &amp; grown</em>
          </h2>
          <p className="exp-intro-desc">
            From managing front desks at luxury hill-station resorts to building software —
            a journey driven by curiosity, grit, and a love for craft.
          </p>
          <div className="exp-stats">
            <div className="exp-stat">
              <span className="exp-stat-val">3</span>
              <span className="exp-stat-label">Milestones</span>
            </div>
            <div className="exp-stat">
              <span className="exp-stat-val">3.5+</span>
              <span className="exp-stat-label">Years</span>
            </div>
            <div className="exp-stat">
              <span className="exp-stat-val">1</span>
              <span className="exp-stat-label">Big Pivot</span>
            </div>
          </div>
        </div>

        <div className="exp-timeline">
          <div className="exp-timeline-line" />
          {milestones.map((m, i) => (
            <div key={m.id} className={`exp-milestone ${m.current ? 'exp-milestone--current' : ''}`}>
              <div className={`exp-milestone-dot ${m.current ? 'exp-milestone-dot--now' : ''}`}>
                {m.current && <span className="exp-milestone-dot-pulse" />}
              </div>
              <div className="exp-milestone-card">
                <div className="exp-milestone-head">
                  <span className="exp-milestone-year">{m.year}</span>
                  <span className="exp-milestone-num">{(i + 1).toString().padStart(2, '0')}</span>
                </div>
                <h3 className="exp-milestone-role">{m.role}</h3>
                <div className="exp-milestone-meta">
                  <span className="exp-milestone-company">{m.company}</span>
                  <span className="exp-milestone-sep">·</span>
                  <span className="exp-milestone-location">{m.location}</span>
                </div>
                <p className="exp-milestone-desc">{m.desc}</p>
                <div className="exp-milestone-tags">
                  {m.tags.map(tag => (
                    <span key={tag} className="exp-milestone-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="exp-pivot">
        <div className="exp-pivot-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </div>
        <span className="exp-pivot-from"></span>
        <span className="exp-pivot-arrow">
          <svg viewBox="0 0 60 10" fill="none" width="60" height="10"><path d="M0 5h54M50 1l6 4-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <span className="exp-pivot-to">Engineer</span>
        <span className="exp-pivot-label">Career</span>
      </div>
    </section>
  )
}
