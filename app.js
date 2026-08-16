/* ==========================================================================
   Raheel Ahmed Khan - Portfolio Interactive Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log(
        '%c🔒 Raheel Ahmed Khan | CISM, SC-200, Security+, CCNA\n' +
        '%cSecurity Operations & UAE GRC Compliance (CBUAE / ADHICS / ISO 27001)\n' +
        '%cRecruiter or Security Engineer inspecting the source? Feel free to reach out at raheelkhan9@outlook.com',
        'color: #06b6d4; font-size: 14px; font-weight: bold;',
        'color: #10b981; font-size: 12px;',
        'color: #94a3b8; font-size: 11px;'
    );
});

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
