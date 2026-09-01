import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const renderRing = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      animId = requestAnimationFrame(renderRing);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(renderRing);

    // Interactive targets hover effect
    const addHover = () => ring.classList.add('cursor-hover');
    const removeHover = () => ring.classList.remove('cursor-hover');

    const updateListeners = () => {
      const targets = document.querySelectorAll('a, button, select, input, .domain-tab, .cert-card, .project-card, .timeline-card, .contact-item');
      targets.forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    updateListeners();
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Universal Splash trigger
    const triggerSplash = (x, y) => {
      if (x === undefined || y === undefined) return;
      const splash = document.createElement('div');
      splash.className = 'quantum-splash';
      splash.style.left = `${x}px`;
      splash.style.top = `${y}px`;
      document.body.appendChild(splash);

      for (let i = 0; i < 4; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'quantum-sparkle';
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        const angle = (Math.PI * 2 / 4) * i + Math.random() * 0.5;
        const distance = Math.random() * 32 + 20;
        sparkle.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
        sparkle.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 500);
      }
      setTimeout(() => splash.remove(), 650);
    };

    const handleMouseDown = (e) => triggerSplash(e.clientX, e.clientY);
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) triggerSplash(e.touches[0].clientX, e.touches[0].clientY);
    };

    document.addEventListener('mousedown', handleMouseDown, true);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Blue smoke emitter on scroll/touch
    let lastEmitTime = 0;
    const emitSmoke = (x, y) => {
      const now = Date.now();
      if (now - lastEmitTime < 45) return;
      lastEmitTime = now;
      const puff = document.createElement('div');
      puff.className = 'smoke-puff';
      const size = Math.random() * 24 + 30;
      puff.style.width = `${size}px`;
      puff.style.height = `${size}px`;
      puff.style.left = `${x}px`;
      puff.style.top = `${y}px`;
      document.body.appendChild(puff);
      setTimeout(() => puff.remove(), 550);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) emitSmoke(e.touches[0].clientX, e.touches[0].clientY);
    };

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY) > 8) {
        lastScrollY = currentY;
        const posX = window.innerWidth * (0.3 + Math.random() * 0.4);
        const posY = window.innerHeight * 0.5 + (Math.random() * 100 - 50);
        emitSmoke(posX, posY);
      }
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleMouseDown, true);
      document.removeEventListener('touchstart', handleTouchStart);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} id="cursor-dot" />
      <div className="cursor-ring" ref={ringRef} id="cursor-ring" />
    </>
  );
}
