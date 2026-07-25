import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const socials = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/0abilash",
    icon: (
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
      />
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abilashy",
    icon: (
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.behance.net/abilashy",
    icon: (
      <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z" />
    ),
  },
  {
    key: "devto",
    label: "Dev.to",
    href: "https://dev.to/0abilash",
    icon: (
      <path
        fill="currentColor"
        d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"
      />
    ),
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    document.querySelectorAll(".c-social, .cf-card").forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("rv");
        requestAnimationFrame(() => el.classList.add("on"));
      }, i * 100);
    });
  }, [inView]);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" />
      <div className="contact-content">
        <div className="contact-header rv">
          <span className="sec-label">Contact</span>
          <h2>
            Let&apos;s <em>Connect</em>
          </h2>
          <p className="contact-intro">
            Have a project in mind or just want to chat? I&apos;m always open to
            new ideas and opportunities.
          </p>
        </div>

        <div className="contact-grid" ref={ref}>
          <div className="contact-left">
            <div className="contact-socials">
              {socials.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="c-social"
                >
                  <span className="c-social-icon">
                    <svg viewBox="0 0 24 24" width="100%" height="100%">
                      {s.icon}
                    </svg>
                  </span>
                  <span className="c-social-label">{s.label}</span>
                  <span className="c-social-arrow">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
            <div className="c-note rv">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>
                Best way to reach out is{" "}
                <strong>mailtoabilashy@gmail.com</strong> or just fill the form.
              </span>
            </div>
          </div>

          <div className="cf-card rv">
            <form
              action="https://formsubmit.co/abilashy@gmail.com"
              method="POST"
              className="cf"
            >
              <input type="hidden" name="_subject" value="Portfolio Contact" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <div className="cf-row">
                <div className="cf-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="cf-input"
                    required
                  />
                </div>
                <div className="cf-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="cf-input"
                    required
                  />
                </div>
              </div>
              <div className="cf-field">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  className="cf-input cf-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="cf-btn">
                Send Message
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="cb-credit rv">
          <div className="cb-main">
            <a
              href="https://github.com/0abilash"
              target="_blank"
              rel="noopener"
              className="cb-item"
            >
              <span className="cb-item-label">Developed by</span>
              <span className="cb-item-value">Abilash</span>
            </a>
            <span className="cb-divider" />
            <a
              href="https://render.com"
              target="_blank"
              rel="noopener"
              className="cb-item"
            >
              <span className="cb-item-label">Hosted</span>
              <span className="cb-item-value">render</span>
            </a>
          </div>
          <p className="cb-license">
            Licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              rel="noopener"
            >
              CC BY-NC-ND 4.0
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
