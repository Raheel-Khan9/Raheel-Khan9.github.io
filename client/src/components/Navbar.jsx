import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={closeMenu}>
          <span className="logo-accent">&lt;</span>RAHEEL.KHAN<span className="logo-accent">/&gt;</span>
          <span className="logo-badge">CISM</span>
        </a>

        <button
          className={`mobile-toggle ${isOpen ? 'active' : ''}`}
          id="mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links">
          <a href="#about" className="nav-link" onClick={closeMenu}>Overview</a>
          <a href="#competencies" className="nav-link" onClick={closeMenu}>What I Do</a>
          <a href="#certifications" className="nav-link" onClick={closeMenu}>Certifications</a>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="nav-btn" onClick={closeMenu}>Get In Touch</a>
        </div>
      </div>
    </nav>
  );
}
