const skills = [
  { title: "Front-End Development", desc: "Responsive interfaces with modern frameworks.", path: "M4 6h16M4 12h16M4 18h7", langs: ["HTML", "CSS", "JavaScript", "React"], size: "a" },
  { title: "AI & Vibe Coding", desc: "Accelerating development with AI tools.", path: "M4 5h16v14H4zM4 9h16M9 9v10", langs: ["Python", "TensorFlow", "OpenAI"], size: "b" },
  { title: "UI/UX Design", desc: "Intuitive interfaces with visual detail.", path: "M12 3v4M6 8l3 2M18 8l-3 2M6 16l3-2M18 16l-3-2M12 17v4M9 10h6v4H9z", langs: ["Figma", "Wireframing", "Prototyping"], size: "c" },
  { title: "Database", desc: "Efficient schemas for data-driven apps.", path: "M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2zM4 6v12c0 1.1 3.6 2 8 2s8-.9 8-2V6M4 12c0 1.1 3.6 2 8 2s8-.9 8-2", langs: ["MySQL", "MongoDB", "PostgreSQL"], size: "d" },
  { title: "Cloud & DevOps", desc: "CI/CD pipelines and container orchestration.", path: "M7 18a4 4 0 0 1-1-7.9A5 5 0 0 1 16 8a4.5 4.5 0 0 1 1 8.9", langs: ["AWS", "Docker", "CI/CD"], size: "e" },
  { title: "Problem Solving", desc: "DSA, algorithms, and optimization.", path: "M11 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5v1h6v-1c0-1.1.4-1.9 1-2.5A6 6 0 0 0 11 2zM9 20h4", langs: ["DSA", "Algorithms", "Optimization"], size: "f" },
  { title: "Testing & QA", desc: "Reliability through comprehensive testing.", path: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 14l2 2 4-4", langs: ["Jest", "Cypress", "Playwright"], size: "g" },
  { title: "Backend Development", desc: "Server-side logic, APIs, and integrations.", path: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zM4 10h16M10 14h4", langs: ["Node.js", "Express", "REST API"], size: "h" },
  { title: "System Design", desc: "Scalable distributed system architecture.", path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", langs: ["Microservices", "REST API", "Architecture"], size: "i" },
]

import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Skills() {
  useScrollReveal()
  return (
    <section id="skills" className="skills-section">
      <div className="sec-label">Skills</div>
      <div className="sk-mosaic">
        {skills.map(s => (
          <div key={s.title} className={`sk-mosaic-card size-${s.size} rv`}>
            <span className="sk-mosaic-iw">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={s.path} />
              </svg>
            </span>
            <h3 className="sk-mosaic-title">{s.title}</h3>
            <p className="sk-mosaic-desc">{s.desc}</p>
            <div className="sk-mosaic-langs">
              {s.langs.map(l => <span key={l} className="sk-mosaic-lang">{l}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}