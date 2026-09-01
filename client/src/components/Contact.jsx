import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section reveal-section revealed">
      <div className="contact-card">
        <h2>Let's Connect & Work Together</h2>
        <p>
          Open to Information Security, GRC Compliance, Cloud SecOps, AI/ML Engineering, and Technical Solutions Architecture roles across Dubai, Abu Dhabi, and worldwide.
        </p>

        <div className="contact-methods">
          <a
            href="https://instagram.com/raheelkhanbuildz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item contact-insta"
          >
            <span className="icon">📷</span>
            <span className="label">instagram.com/raheelkhanbuildz</span>
          </a>
          <a href="mailto:raheelkhan9@outlook.com" className="contact-item">
            <span className="icon">✉</span>
            <span className="label">raheelkhan9@outlook.com</span>
          </a>
          <a href="mailto:raheelkhan17202@gmail.com" className="contact-item">
            <span className="icon">✉</span>
            <span className="label">raheelkhan17202@gmail.com</span>
          </a>
          <a
            href="https://github.com/Raheel-Khan9"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="icon">🐙</span>
            <span className="label">github.com/Raheel-Khan9</span>
          </a>
          <a
            href="https://linkedin.com/in/raheelkhanofficial7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="icon">💼</span>
            <span className="label">linkedin.com/in/raheelkhanofficial7</span>
          </a>
          <a
            href="https://x.com/Shaheen_4468"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="icon">𝕏</span>
            <span className="label">x.com/Shaheen_4468</span>
          </a>
          <a href="tel:+971554133764" className="contact-item">
            <span className="icon">📞</span>
            <span className="label">+971 55 413 3764</span>
          </a>
        </div>
      </div>
    </section>
  );
}
