/* ==========================================================================
   Raheel Ahmed Khan - Portfolio Interactive Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log(
        '%c🔒 Raheel Ahmed Khan | CISM, SC-200, CCNA, Security+\n' +
        '%cIT & Information Security Professional (Dubai & Abu Dhabi, UAE)\n' +
        '%cRecruiter or Engineering Lead inspecting the source? Reach out directly at raheelkhan9@outlook.com',
        'color: #06b6d4; font-size: 14px; font-weight: bold;',
        'color: #10b981; font-size: 12px;',
        'color: #94a3b8; font-size: 11px;'
    );
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

    // 2. Filter domain cards
    const cards = document.querySelectorAll('.domain-card');
    cards.forEach(card => {
        const cardDomain = card.getAttribute('data-domain');
        if (domain === 'all' || cardDomain === domain) {
            card.classList.remove('hidden');
            card.style.opacity = '0';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 50);
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
