import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="hero-section fade-in-up">
      <div className="hero-grid">
        {/* Left: Profile Portrait Card */}
        <div className="hero-portrait-col">
          <div className="portrait-card">
            <div className="portrait-image-wrapper">
              <img
                src="/profile.jpg"
                alt="Raheel Ahmed Khan (CISM)"
                className="portrait-img"
                id="profile-photo"
                loading="eager"
              />
            </div>
            <div className="portrait-caption">
              <div className="portrait-name">Raheel Ahmed Khan</div>
              <div className="portrait-title">CISM • SC-200 • CCNA</div>
              <div className="portrait-status">
                <span className="pulse-dot"></span>
                <span>Dubai / Abu Dhabi, UAE</span>
              </div>
            </div>

            {/* Quick Socials Bar in Exact Order */}
            <div className="portrait-socials">
              <a
                href="https://github.com/Raheel-Khan9"
                target="_blank"
                rel="noopener noreferrer"
                className="portrait-social-icon"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="https://linkedin.com/in/raheelkhanofficial7"
                target="_blank"
                rel="noopener noreferrer"
                className="portrait-social-icon"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://instagram.com/raheelkhanbuildz"
                target="_blank"
                rel="noopener noreferrer"
                className="portrait-social-icon insta-hover"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://x.com/Shaheen_4468"
                target="_blank"
                rel="noopener noreferrer"
                className="portrait-social-icon"
                title="Twitter / X"
                aria-label="X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                href="mailto:raheelkhan17202@gmail.com"
                className="portrait-social-icon"
                title="Email"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Value Proposition */}
        <div className="hero-content-col">
          <div className="hero-status-bar">
            <div className="status-pill">
              <span className="pulse-dot"></span>
              <span>Cybersecurity, Cloud & Solutions Engineering</span>
            </div>
            <div className="meta-tag">⚡ 5 Yrs Experience (4 Yrs in UAE)</div>
          </div>

          <h1 className="hero-title">
            IT & Information Security <span className="text-gradient">Professional</span>
          </h1>
          <div className="hero-tagline">
            Cybersecurity • Cloud Systems • Applied AI • Solutions Engineering
          </div>

          <p className="hero-bio">
            I help organizations <strong>protect their systems from cyber threats</strong>, pass strict government security audits (like UAE Central Bank and Healthcare regulations), build smart <strong>AI tools</strong>, and keep cloud infrastructure running 24/7 without interruptions. Holding top credentials including <strong>ISACA CISM</strong>, <strong>Microsoft SC-200</strong>, and <strong>Cisco CCNA</strong>.
          </p>

          {/* Unified Action & Social Hub */}
          <div className="hero-cta-container">
            <div className="hero-actions-row">
              <a href="mailto:raheelkhan17202@gmail.com" className="btn btn-primary">
                <Mail size={17} />
                Email Me
              </a>
              <a href="https://linkedin.com/in/raheelkhanofficial7" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Linkedin size={17} />
                Connect on LinkedIn
              </a>
            </div>

            <div className="hero-social-strip">
              <a
                href="https://github.com/Raheel-Khan9"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
                title="GitHub"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/raheelkhanofficial7"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
                title="LinkedIn"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/raheelkhanbuildz"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip social-chip-insta"
                title="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://x.com/Shaheen_4468"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
                title="Twitter / X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span>X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="hero-metrics">
        <div className="metric-card">
          <div className="metric-num">5 Years</div>
          <div className="metric-label">Total Tech Experience (4 Yrs UAE)</div>
        </div>
        <div className="metric-card">
          <div className="metric-num">100%</div>
          <div className="metric-label">Audit Pass Rate (CBUAE & ADHICS)</div>
        </div>
        <div className="metric-card">
          <div className="metric-num">99.9%</div>
          <div className="metric-label">Network & Cloud System Uptime</div>
        </div>
        <div className="metric-card">
          <div className="metric-num">3.79</div>
          <div className="metric-label">Bachelors in Computer Science / 4.0</div>
        </div>
      </div>
    </section>
  );
}
