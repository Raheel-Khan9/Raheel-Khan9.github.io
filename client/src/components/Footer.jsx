import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-social-links">
          {/* 1. GitHub */}
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

          {/* 2. LinkedIn */}
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

          {/* 3. Instagram */}
          <a
            href="https://instagram.com/raheelkhanbuildz"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="footer-social-link"
          >
            Instagram
          </a>
          <span className="footer-sep">•</span>

          {/* 4. Twitter / X */}
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

          {/* 5. Emails */}
          <a href="mailto:raheelkhan17202@gmail.com" title="Email (Gmail)" className="footer-social-link">
            raheelkhan17202@gmail.com
          </a>
          <span className="footer-sep">•</span>
          <a href="mailto:raheelkhan9@outlook.com" title="Email (Outlook)" className="footer-social-link">
            raheelkhan9@outlook.com
          </a>
        </div>
        <p>© 2026 Raheel Ahmed Khan (CISM, SC-200, CCNA) • Hosted on GitHub Pages</p>
        <p className="footer-sub">Dubai / Abu Dhabi, United Arab Emirates • Open to Global & Regional Roles</p>
      </div>
    </footer>
  );
}
