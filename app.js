/* ==========================================================================
   Raheel Ahmed Khan - Portfolio Interactive Logic & Sciency Neural Animation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Console Welcome Banner
    console.log(
        '%c🔒 Raheel Ahmed Khan | CISM, SC-200, CCNA, Security+\n' +
        '%cIT & Information Security Professional • Applied AI & Solutions Engineering\n' +
        '%cRecruiter or Engineering Lead inspecting the source? Reach out directly at raheelkhan9@outlook.com',
        'color: #06b6d4; font-size: 14px; font-weight: bold;',
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

        // Auto-close menu when clicking on any nav link
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
});

// Sciency Blueish Particle / Neural Canvas Animation
function initNeuralCanvas() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height;
    let particles = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 28 : 55;
    const maxDistance = isMobile ? 90 : 130;

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
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
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
            ctx.fillStyle = '#06b6d4';
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    let animationFrameId;
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
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

// Interactive Domain Filter Switcher
function switchDomain(domain) {
    // 1. Update tab active states
    const tabs = document.querySelectorAll('.domain-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Find clicked tab and activate
    const activeTab = Array.from(tabs).find(t => {
        const onclickAttr = t.getAttribute('onclick');
        return onclickAttr && onclickAttr.includes(`'${domain}'`);
    });
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // 2. Filter domain cards with subtle micro-fade
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

// Generic Copy to Clipboard Helper
function copySnippet(elementId, button) {
    const codeElem = document.getElementById(elementId);
    if (!codeElem) return;

    const textToCopy = codeElem.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        button.style.background = '#10b981';
        button.style.color = '#000';

        setTimeout(() => {
            button.innerText = originalText;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code: ', err);
    });
}

// Backward Compatibility KQL Copy
function copyKQL(button) {
    copySnippet('kql-code', button);
}

// BIA Disaster Recovery Estimator
function calculateRTO() {
    const level = document.getElementById('crit-level').value;
    const rtoElem = document.getElementById('rto-val');
    const rpoElem = document.getElementById('rpo-val');

    switch (level) {
        case 'tier1':
            rtoElem.innerText = '< 15 Minutes';
            rpoElem.innerText = 'Zero (Continuous Sync / 3-2-1 Mirror)';
            break;
        case 'tier2':
            rtoElem.innerText = '< 1 Hour';
            rpoElem.innerText = '< 15 Minutes (Snapshot Replication)';
            break;
        case 'tier3':
            rtoElem.innerText = '< 4 Hours';
            rpoElem.innerText = '< 24 Hours (Daily Immutable Offsite Backup)';
            break;
        default:
            rtoElem.innerText = '< 15 Minutes';
            rpoElem.innerText = 'Zero (Continuous Sync)';
    }
}
