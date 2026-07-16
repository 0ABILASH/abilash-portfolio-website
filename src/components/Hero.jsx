import { useEffect, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const roles = ["Software Engineer", "Front-End Developer"];

export default function Hero() {
  useScrollReveal();
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [rolePhase, setRolePhase] = useState("typing");
  const [showContent, setShowContent] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

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
      <div className="hero-ambient" />

      <div className="hero-inner">
        <div className={`hero-main ${showContent ? "hero-main--show" : ""}`}>
          <div className="hero-greeting"></div>

          <h1 className="hero-name">
            <span className="hero-name-line hero-name-line--first">
              ABILASH
            </span>
          </h1>

          <div className="hero-role-track">
            <span className="hero-role-text">{roleText}</span>
            {/* <span className="hero-role-caret">|</span> */}
          </div>

          <p className="hero-bio rv">
            I'm passionate about software and design, and I enjoy building
            useful digital experiences. I'm always open to learning,
            and exploring new opportunities. If you'd like to
            connect or discuss a project, feel free to get in touch. I'd love to
            hear from you.
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
              <span>For Contact</span>
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

        <div
          className={`hero-visual ${showContent ? "hero-visual--show" : ""}`}
        >
          <div className="hero-visual-frame">
            <img src="vecteezy_confident-3d-cartoon-character-wit-business-casual_51866112.png" alt="Abilash" loading="eager" />
          </div>

          <div
            className="hero-badge hero-badge--code rv"
            style={{
              "--dx": `${(mousePos.x / window.innerWidth - 0.5) * 20}px`,
              "--dy": `${(mousePos.y / window.innerHeight - 0.5) * 20}px`,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span>Front-End</span>
          </div>
          <div
            className="hero-badge hero-badge--react rv"
            style={{
              "--dx": `${(mousePos.x / window.innerWidth - 0.5) * -16}px`,
              "--dy": `${(mousePos.y / window.innerHeight - 0.5) * -16}px`,
            }}
          >
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
              <circle cx="12" cy="12" r="2" />
              <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
              <path d="M12 2c-2 0-4 4.5-4 10s2 10 4 10 4-4.5 4-10-2-10-4-10z" />
              <path d="M2 12h20" />
            </svg>
            <span>React</span>
          </div>
          <div
            className="hero-badge hero-badge--node rv"
            style={{
              "--dx": `${(mousePos.x / window.innerWidth - 0.5) * 14}px`,
              "--dy": `${(mousePos.y / window.innerHeight - 0.5) * 14}px`,
            }}
          >
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
              <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" />
              <path d="M2 7l10 5 10-5" />
              <path d="M12 22V12" />
            </svg>
            <span>UI/UX</span>
          </div>

          <div className="hero-visual-indicator rv">
            <span className="hero-visual-indicator-dot" />
            <span>Available for work</span>
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
