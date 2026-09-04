import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section reveal-section revealed">
      <div className="contact-card">
        <h2>Let's Connect & Work Together</h2>
        <p>
          Open to Information Security, GRC Compliance, Cloud SecOps, AI/ML Engineering, and Technical Solutions Architecture roles across Dubai, Abu Dhabi, and worldwide.
        </p>

        <div className="contact-methods">
          {/* 1. GitHub */}
          <a
            href="https://github.com/Raheel-Khan9"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="icon">🐙</span>
            <span className="label">github.com/Raheel-Khan9</span>
          </a>

          {/* 2. LinkedIn */}
          <a
            href="https://linkedin.com/in/raheelkhanofficial7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="icon">💼</span>
            <span className="label">linkedin.com/in/raheelkhanofficial7</span>
          </a>

          {/* 3. Instagram */}
          <a
            href="https://instagram.com/raheelkhanbuildz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item contact-insta"
          >
            <span className="icon">📷</span>
            <span className="label">instagram.com/raheelkhanbuildz</span>
          </a>

          {/* 4. Twitter / X */}
          <a
            href="https://x.com/Shaheen_4468"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="icon">𝕏</span>
            <span className="label">x.com/Shaheen_4468</span>
          </a>

          {/* 5. Emails */}
          <a href="mailto:raheelkhan17202@gmail.com" className="contact-item">
            <span className="icon">✉</span>
            <span className="label">raheelkhan17202@gmail.com</span>
          </a>
          <a href="mailto:raheelkhan9@outlook.com" className="contact-item">
            <span className="icon">✉</span>
            <span className="label">raheelkhan9@outlook.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
