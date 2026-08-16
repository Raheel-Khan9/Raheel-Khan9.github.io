/* ==========================================================================
   Raheel Ahmed Khan - Portfolio Interactive Logic & Lightweight Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Console Welcome Banner for Technical Recruiters & CISOs
    console.log(
        '%c🔒 Raheel Ahmed Khan | CISM, SC-200, CCNA, Security+\n' +
        '%cIT & Information Security Professional (Dubai & Abu Dhabi, UAE)\n' +
        '%cRecruiter or Engineering Lead inspecting the source? Reach out directly at raheelkhan9@outlook.com',
        'color: #06b6d4; font-size: 14px; font-weight: bold;',
        'color: #10b981; font-size: 12px;',
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

        // Auto-close menu when clicking on any nav link (Mobile/iOS/Android UX)
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
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.reveal-section').forEach(section => {
            revealObserver.observe(section);
        });
    } else {
        // Fallback for older browsers
        document.querySelectorAll('.reveal-section').forEach(section => {
            section.classList.add('revealed');
        });
    }
});

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

// Copy KQL Query to Clipboard
function copyKQL(button) {
    const kqlCode = document.getElementById('kql-code').innerText;
    navigator.clipboard.writeText(kqlCode).then(() => {
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
        console.error('Failed to copy: ', err);
    });
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
