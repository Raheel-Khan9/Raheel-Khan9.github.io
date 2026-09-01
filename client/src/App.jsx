import React from 'react';
import CustomCursor from './components/CustomCursor';
import SciencyCanvas from './components/SciencyCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domains from './components/Domains';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Sciency Custom Pointer (Desktop) */}
      <CustomCursor />

      {/* Sciency Background Particle Network */}
      <SciencyCanvas />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="container">
        <Hero />
        <Domains />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
