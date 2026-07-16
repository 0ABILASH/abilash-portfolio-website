import { useEffect, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const roles = ["Web Application", "Designs"];

export default function Hero() {
  useScrollReveal();
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [rolePhase, setRolePhase] = useState("typing");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  useEffect(() => {
    if (!showContent) return;
    const current = roles[roleIndex];
    if (rolePhase === "typing") {
      if (roleText.length < current.length) {
        const t = setTimeout(
          () => setRoleText(current.slice(0, roleText.length + 1)),
          5,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setRolePhase("deleting"), 5000);
        return () => clearTimeout(t);
      }
    } else {
      if (roleText.length > 0) {
        const t = setTimeout(() => setRoleText(roleText.slice(0, -1)), 5);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRolePhase("typing");
          setRoleIndex((i) => (i + 1) % roles.length);
        }, 5);
        return () => clearTimeout(t);
      }
    }
  }, [roleText, rolePhase, roleIndex, showContent]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-layer" />
      <div className="hero-grid" />

      <div className="hero-inner">
        <div className={`hero-main ${showContent ? "hero-main--show" : ""}`}>
          {/* <div className="hero-label">Home</div> */}

          <div className="hero-status rv">
            <span className="hero-status-dot" />
            <span>Available for work</span>
          </div>

          <div className="hero-intro">Hi, I&apos;m</div>
          <h1 className="hero-name">
            <span className="hero-name-line">ABILASH</span>
          </h1>

          <div className="hero-role-track">
            <span className="hero-role-prefix">I build </span>
            <span className="hero-role-text">{roleText}</span>
          </div>

          <p className="hero-bio rv">
            I&apos;m passionate about software and design, and I enjoy building
            useful digital experiences. I&apos;m always open to learning and
            exploring new opportunities.
          </p>

          <div className="hero-actions rv">
            <a
              href="mailto:mailtoabilashy@gmail.com"
              className="hero-btn hero-btn--primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Get in Touch</span>
            </a>
            <a href="#about" className="hero-btn hero-btn--ghost">
              <span>Explore</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      <div className="hero-scroll rv">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
