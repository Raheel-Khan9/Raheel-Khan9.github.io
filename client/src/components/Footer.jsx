import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-social-links">
          <a
            href="https://instagram.com/raheelkhanbuildz"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="footer-social-link insta-link"
          >
            Instagram (@raheelkhanbuildz)
          </a>
          <span className="footer-sep">•</span>
          <a
            href="https://github.com/Raheel-Khan9"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="footer-social-link"
          >
            GitHub
          </a>
          <span className="footer-sep">•</span>
          <a
            href="https://linkedin.com/in/raheelkhanofficial7"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="footer-social-link"
          >
            LinkedIn
          </a>
          <span className="footer-sep">•</span>
          <a
            href="https://x.com/Shaheen_4468"
            target="_blank"
            rel="noopener noreferrer"
            title="X (Twitter)"
            className="footer-social-link"
          >
            X (Twitter)
          </a>
          <span className="footer-sep">•</span>
          <a href="mailto:raheelkhan9@outlook.com" title="Primary Email" className="footer-social-link">
            Primary Email
          </a>
          <span className="footer-sep">•</span>
          <a href="mailto:raheelkhan17202@gmail.com" title="Secondary Email" className="footer-social-link">
            Secondary Email
          </a>
        </div>
        <p>© 2026 Raheel Ahmed Khan (CISM, SC-200, CCNA) • Hosted on GitHub Pages</p>
        <p className="footer-sub">Dubai / Abu Dhabi, United Arab Emirates • Open to Global & Regional Roles</p>
      </div>
    </footer>
  );
}
