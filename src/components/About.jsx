import { useRef, useState, useCallback } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  useScrollReveal();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);
  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  return (
    <section id="about">
      <div className="sec-label">About</div>

      <div className="about-grid">
        <div className="about-info">
          {/* <span className="about-tagline">Hi, I'm Abilash</span> */}
          <h2 className="about-heading">
          Who<em> I Am</em>
          </h2>
          <p className="about-desc">
            Hello!, I'm a Software Developer with over three years of
            experience in building web applications and solving real-world
            problems through technology. I enjoy creating clean, efficient, and
            user-friendly digital solutions while continuously learning new
            tools and technologies.
          </p>

          <div className="about-location">
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
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Based in India · Open to Remote / Relocation</span>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-visual-frame">
            <video
              className="about-video-el"
              ref={videoRef}
              src="/pinterest-video.mp4"
              muted={muted}
              loop
              playsInline
              controls={false}
              onClick={togglePlay}
              onEnded={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
            <div className="about-visual-gradient" />
            <div className="about-visual-overlay" onClick={togglePlay}>
              <button
                className="about-visual-btn"
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                )}
              </button>
            </div>
            <div className="about-visual-controls">
              <div className="about-visual-progress">
                <div
                  className="about-visual-progress-bar"
                  style={{ width: playing ? "100%" : "0%" }}
                />
              </div>
              <div className="about-visual-actions">
                <button
                  className="about-visual-mute"
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="currentColor"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8.5v7a4.49 4.49 0 0 0 2.5-3.5zM14 3.23v2.06a7.01 7.01 0 0 1 0 13.42v2.06A9.01 9.01 0 0 0 14 3.23z" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="currentColor"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06a7.01 7.01 0 0 1 0 13.42v2.06A9.01 9.01 0 0 0 14 3.23z" />
                    </svg>
                  )}
                </button>
                <span className="about-visual-label">Pinterest Video</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-story">
          {/* <d className="about-story-body"></d> */}
            <h3 className="about-story-title">
              A Kutty Story about <em>Me</em>
            </h3>
            <p className="about-story-text">
              As a young boy, I aspired to be a professional software Engineer.
              Dr. A. P. J. Abdul Kalam stated,{" "}
              <q>A dream is something that prevents you from falling asleep</q>.
              I took that seriously and I lost my sleep debugging code,
              celebrated when <q>Hello, World!</q> finally worked, and realized
              that one missed semicolon could literally destroy my entire day.
              Thankfully, the issues faded faster than my dream, and today I'm a
              Software Engineer.
            </p>
      </div>


      <div className="about-banner rv">
        <div className="about-banner-card">
          <div className="about-banner-icon">
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
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <span>
            If you want to know more about me, check out my social accounts.
          </span>
        </div>
      </div>
    </section>
  );
}
