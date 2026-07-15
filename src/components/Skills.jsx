import { useState } from "react";

const skills = [
  {
    n: "01",
    title: "Front-End development",
    desc: "Building robust, scalable server-side systems and APIs that power modern applications.",
    path: "M4 6h16M4 12h16M4 18h7",
    langs: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    n: "02",
    title: "Ai Vibe Coding",
    desc: "Crafting responsive, performant interfaces with attention to every pixel and interaction.",
    path: "M4 5h16v14H4zM4 9h16M9 9v10",
    langs: ["Python", "TensorFlow", "OpenAI"],
  },
  {
    n: "03",
    title: "UI/UX Design",
    desc: "Architecting distributed systems that scale with thoughtful design and engineering principles.",
    path: "M12 3v4M6 8l3 2M18 8l-3 2M6 16l3-2M18 16l-3-2M12 17v4M9 10h6v4H9z",
    langs: ["Figma", "Adobe XD", "Wireframing"],
  },
  {
    n: "04",
    title: "Database",
    desc: "Designing efficient database schemas and query optimization for high-performance applications.",
    path: "M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2zM4 6v12c0 1.1 3.6 2 8 2s8-.9 8-2V6M4 12c0 1.1 3.6 2 8 2s8-.9 8-2",
    langs: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    n: "05",
    title: "Cloud and DevOps",
    desc: "Deploying and managing cloud infrastructure with CI/CD pipelines and containerization.",
    path: "M7 18a4 4 0 0 1-1-7.9A5 5 0 0 1 16 8a4.5 4.5 0 0 1 1 8.9",
    langs: ["AWS", "Docker", "CI/CD"],
  },
  {
    n: "06",
    title: "Problem solving",
    desc: "Breaking down complex challenges into elegant solutions with analytical thinking and creativity.",
    path: "M11 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5v1h6v-1c0-1.1.4-1.9 1-2.5A6 6 0 0 0 11 2zM9 20h4",
    langs: ["DSA", "Algorithms", "Optimization"],
  },
  {
    n: "07",
    title: "System design",
    desc: "Breaking down complex challenges into elegant solutions with analytical thinking and creativity.",
    path: "M11 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5v1h6v-1c0-1.1.4-1.9 1-2.5A6 6 0 0 0 11 2zM9 20h4",
    langs: ["Microservices", "REST API", "Architecture"],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const current = skills[active];

  return (
    <section id="skills" className="skills-section">
      <div className="sec-label">Skills</div>

      <div className="skills-split">
        <div className="skills-tabs">
          {skills.map((s, i) => (
            <button
              key={s.n}
              className={`skills-tab${i === active ? " active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        <div className="skills-panel">
          <div className="skills-panel-iw">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={current.path} />
            </svg>
          </div>
          <h3 className="skills-panel-title">{current.title}</h3>
          <p className="skills-panel-desc">{current.desc}</p>
          <div className="skills-panel-langs">
            {current.langs.map(l => <span key={l} className="skills-panel-lang">{l}</span>)}
          </div>
          <span className="skills-panel-count">
            {current.n} / {String(skills.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}