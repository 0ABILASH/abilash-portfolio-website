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
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
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

      <div className="about-lead-row">
        <div className="about-lead">
          <span className="about-lead-num">01</span>
          <h2 className="about-lead-title">
            A Kutty Story<br></br> about <em>Me</em>
          </h2>
          <p className="about-lead-text">
            As a young boy, I aspired to be a professional software Engineer. Dr.
            A. P. J. Abdul Kalam stated, "A dream is something that prevents you
            from falling asleep". I took that seriously and I lost my sleep
            debugging code, celebrated when "Hello, World!" finally worked, and
            realized that one missed semicolon could literally destroy my entire
            day. Thankfully, the issues faded faster than my dream, and today I'm a Software Engineer.
          </p>
        </div>

        <div className="about-video rv">
          <video className="about-video-el" ref={videoRef} src="/pinterest-video.mp4" muted={muted} loop playsInline controls={false} onClick={togglePlay} onEnded={() => setPlaying(false)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
          <div className="about-video-overlay" onClick={togglePlay}>
            <button className="about-video-btn" aria-label={playing ? "Pause" : "Play"}>
              {playing ? (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
              ) : (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><polygon points="8,5 19,12 8,19"/></svg>
              )}
            </button>
          </div>
          <button className="about-video-mute" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}>
            {muted ? (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8.5v7a4.49 4.49 0 0 0 2.5-3.5zM14 3.23v2.06a7.01 7.01 0 0 1 0 13.42v2.06A9.01 9.01 0 0 0 14 3.23z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06a7.01 7.01 0 0 1 0 13.42v2.06A9.01 9.01 0 0 0 14 3.23z"/></svg>
            )}
          </button>
          <div className="about-video-glow" />
        </div>
      </div>

      <div className="about-split">
        <div className="about-split-left">
          <div className="about-stat-block">
            <div className="about-stat-item">
              <span className="about-stat-num">3+</span>
              <span className="about-stat-label">Year Exp.</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-num">20+</span>
              <span className="about-stat-label">Projects</span>
            </div>
            <div className="about-stat-item">
              <span className="about-stat-num">∞</span>
              <span className="about-stat-label">Tea Cups</span>
            </div>
          </div>

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

        <div className="about-split-right">
          <div className="about-story">
            <span className="about-story-num">02</span>
            <h3 className="about-story-title">
              From School Boy to<br></br>
              <em>Software Engineer</em>
            </h3>
            <p className="about-story-text">
              Actually, my childhood dream was to become a professional software
              programmer. According to the Kalam Dream Form, "A dream is
              something that prevents you from falling asleep, not something you
              see while sleeping." I have just put a lot of effort into making
              my dream a reality.
            </p>
          </div>
        </div>
      </div>

      <div className="about-games rv">
        <div className="about-games-head">
          <span className="about-games-head-label">Playground</span>
          <span className="about-games-head-count">Two Games Show My Personalty.</span>
        </div>
        <div className="about-games-tray">
          <a href="https://play.google.com/store/apps/details?id=com.chess" target="_blank" rel="noopener noreferrer" className="about-game-tile">
            <div className="about-game-tile-accent" data-color="green" />
            <div className="about-game-tile-content">
              <div className="about-game-tile-meta">
                <span className="about-game-tile-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> Puzzle</span>
                <span className="about-game-tile-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg> Strategy</span>
              </div>
              <h4 className="about-game-tile-name" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
                  <rect x="4" y="4" width="56" height="56" rx="12" fill="#7fa650"/>
                  <path d="M22 42c4-6 6-10 6-14s-2-8-6-12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M42 42c-4-6-6-10-6-14s2-8 6-12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <circle cx="32" cy="18" r="3" fill="#fff"/>
                  <path d="M32 22v12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M26 38h12l-3 8H29l-3-8z" fill="#fff"/>
                </svg>
                Chess
              </h4>
              <p className="about-game-tile-desc">Classic chess game with AI opponent, online multiplayer, and daily puzzles to sharpen your strategy.</p>
              <div className="about-game-tile-action">
                <span className="about-game-tile-btn">Play</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
            </div>
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.supercell.clashofclans" target="_blank" rel="noopener noreferrer" className="about-game-tile">
            <div className="about-game-tile-accent" data-color="red" />
            <div className="about-game-tile-content">
              <div className="about-game-tile-meta">
                <span className="about-game-tile-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Strategy</span>
                <span className="about-game-tile-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> Multiplayer</span>
              </div>
              <h4 className="about-game-tile-name" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
                  <rect x="4" y="4" width="56" height="56" rx="12" fill="#e8453c"/>
                  <path d="M32 12l6 12h-4v4l-2 2-2-2v-4h-4l6-12z" fill="#fff"/>
                  <path d="M22 32h20l-4 8H26l-4-8z" fill="#fff"/>
                  <circle cx="32" cy="28" r="3" fill="#e8453c"/>
                  <path d="M28 40l-2 6h12l-2-6" fill="#fff"/>
                </svg>
                Clash of Clans
              </h4>
              <p className="about-game-tile-desc">Build your village, train your troops, and battle clans worldwide in this epic strategy game.</p>
              <div className="about-game-tile-action">
                <span className="about-game-tile-btn">Play</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="about-banner rv">
        <div className="about-banner-toast">
          <div className="about-banner-toast-accent" />
          <div className="about-banner-toast-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <span className="about-banner-toast-msg">Currently learning further into Back-end development.</span>
          <div className="about-banner-toast-close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" /><path d="M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>

      
    </section>
  );
}
