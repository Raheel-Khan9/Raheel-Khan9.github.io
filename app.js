/* ==========================================================================
   Raheel Ahmed Khan - Portfolio Interactive Logic & Sciency Motion Engine
   - Electric Blue Sciency Cursor & Reticle
   - Universal Click & Touch Quantum Splash (Laptops & Mobile)
   - Ambient Blue Smoke Vapor Trail on Touch & Scroll
   - Sciency Neural Canvas Background
   - Domain Switcher
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Console Welcome Banner
    console.log(
        '%c🔒 Raheel Ahmed Khan | CISM, SC-200, CCNA, Security+\n' +
        '%cIT & Information Security Professional • Applied AI & Solutions Engineering\n' +
        '%cRecruiter or Engineering Lead inspecting the source? Reach out directly at raheelkhan9@outlook.com',
        'color: #00d2ff; font-size: 14px; font-weight: bold;',
        'color: #38bdf8; font-size: 12px;',
        'color: #94a3b8; font-size: 11px;'
    );

    // 2. Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            });
        });
    }

    // 3. Scroll Reveal Lightweight Micro-Animations
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });

        document.querySelectorAll('.reveal-section').forEach(section => {
            revealObserver.observe(section);
        });
    } else {
        document.querySelectorAll('.reveal-section').forEach(section => {
            section.classList.add('revealed');
        });
    }

    // 4. Sciency Interactive Neural Network Background Animation
    initNeuralCanvas();

    // 5. Electric Blue Sciency Cursor (Desktop / Laptops)
    initCustomCursor();

    // 6. Universal Quantum Splash Effect (Laptop Clicks + Mobile Taps)
    initUniversalSplash();

    // 7. Ambient Blue Smoke Vapor Trail (Touch, Scroll & Move)
    initSmokeTrail();
});

/* ==========================================================================
   Electric Blue Sciency Cyber Pointer
   ========================================================================== */
function initCustomCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }, { passive: true });

    function renderRing() {
        ringX += (mouseX - ringX) * 0.22;
        ringY += (mouseY - ringY) * 0.22;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        requestAnimationFrame(renderRing);
    }
    renderRing();

    const interactiveTargets = 'a, button, select, .domain-tab, .cert-card, .project-card, .timeline-card, .contact-item, input, textarea';
    document.querySelectorAll(interactiveTargets).forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'));
    });
}

/* ==========================================================================
   Universal Quantum Splash Effect (Reliable on Laptops & Mobile)
   ========================================================================== */
function initUniversalSplash() {
    function triggerSplash(x, y) {
        if (x === undefined || y === undefined || x === null || y === null) return;

        // 1. Quantum Splash Wave
        const splash = document.createElement('div');
        splash.className = 'quantum-splash';
        splash.style.left = `${x}px`;
        splash.style.top = `${y}px`;
        document.body.appendChild(splash);

        // 2. Micro Sparkles Burst (4 lightweight particles)
        for (let i = 0; i < 4; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'quantum-sparkle';
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            
            const angle = (Math.PI * 2 / 4) * i + (Math.random() * 0.5);
            const distance = Math.random() * 32 + 20;
            const dx = `${Math.cos(angle) * distance}px`;
            const dy = `${Math.sin(angle) * distance}px`;
            
            sparkle.style.setProperty('--dx', dx);
            sparkle.style.setProperty('--dy', dy);
            document.body.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 500);
        }

        setTimeout(() => splash.remove(), 650);
    }

    // Capture phase listener ensures clicks on buttons/links/cards always trigger splash on laptop
    document.addEventListener('mousedown', (e) => {
        if (e.target && e.target.tagName === 'SELECT') return;
        triggerSplash(e.clientX, e.clientY);
    }, true);

    // Touch support for phones & tablets
    document.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
            triggerSplash(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });
}

/* ==========================================================================
   Ambient Blue Smoke Vapor Trail (Touch & Scroll)
   ========================================================================== */
function initSmokeTrail() {
    let lastEmitTime = 0;
    const emitInterval = 45; // Emit max once every 45ms (smooth 60fps)

    function emitSmoke(x, y) {
        const now = Date.now();
        if (now - lastEmitTime < emitInterval) return;
        lastEmitTime = now;

        const puff = document.createElement('div');
        puff.className = 'smoke-puff';
        const size = Math.random() * 24 + 30; // 30px to 54px diameter
        puff.style.width = `${size}px`;
        puff.style.height = `${size}px`;
        puff.style.left = `${x}px`;
        puff.style.top = `${y}px`;

        document.body.appendChild(puff);
        setTimeout(() => puff.remove(), 550);
    }

    // Touch drag / move on phone
    window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) {
            emitSmoke(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    // Scroll motion smoke emitter
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        if (Math.abs(currentY - lastScrollY) > 8) {
            lastScrollY = currentY;
            // Emit gentle ambient smoke near center/touch area
            const posX = window.innerWidth * (0.3 + Math.random() * 0.4);
            const posY = window.innerHeight * 0.5 + (Math.random() * 100 - 50);
            emitSmoke(posX, posY);
        }
    }, { passive: true });
}

/* ==========================================================================
   Sciency Neural Particle Canvas
   ========================================================================== */
function initNeuralCanvas() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height;
    let particles = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 24 : 50;
    const maxDistance = isMobile ? 85 : 125;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.38;
            this.vy = (Math.random() - 0.5) * 0.38;
            this.radius = Math.random() * 1.5 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            else if (this.x > width) this.x = 0;

            if (this.y < 0) this.y = height;
            else if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#00d2ff';
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const opacity = (1 - dist / maxDistance) * 0.35;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 210, 255, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================================================
   Domain Filter Switcher
   ========================================================================== */
function switchDomain(domain) {
    const tabs = document.querySelectorAll('.domain-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const activeTab = Array.from(tabs).find(t => {
        const onclickAttr = t.getAttribute('onclick');
        return onclickAttr && onclickAttr.includes(`'${domain}'`);
    });
    if (activeTab) {
        activeTab.classList.add('active');
    }

    const cards = document.querySelectorAll('.domain-card');
    cards.forEach(card => {
        const cardDomain = card.getAttribute('data-domain');
        if (domain === 'all' || cardDomain === domain) {
            card.classList.remove('hidden');
            card.style.opacity = '0';
            card.style.transform = 'translateY(8px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 30);
        } else {
            card.classList.add('hidden');
        }
    });
}
