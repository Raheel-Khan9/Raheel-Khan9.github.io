import React from 'react';

const experiences = [
  {
    role: 'IT Systems Administrator',
    company: 'Doo Group (Doo ME Insurance Broker LLC) — Dubai, UAE',
    subtitle: 'Regulated Financial Services & Enterprise Brokerage • 250+ Users',
    period: 'Aug 2024 – Present',
    bullets: [
      { bold: 'User Technical Support', text: 'Provided L2/L3 support to over 250+ staff for company operational CRM software, ensuring smooth brokerage operations.' },
      { bold: 'Government Audit Success', text: 'Completed comprehensive UAE Central Bank (CBUAE) and Dubai Health Authority security reviews, ensuring 100% compliance with zero penalties.' },
      { bold: 'Disaster Recovery & Backups', text: 'Built a comprehensive Disaster Recovery Plan with strict 3-2-1 backups, eliminating single points of failure.' },
      { bold: 'Cloud & User Security', text: 'Hardened Microsoft 365 and Entra ID for 250+ users with Multi-Factor Authentication (MFA) and Just-In-Time access (PIM).' },
      { bold: 'Threat Defense', text: 'Managed Microsoft Sentinel SIEM and CrowdStrike Antivirus/EDR to monitor, investigate, and stop security alerts.' },
      { bold: 'Automated Reporting', text: 'Automated recurring company reports using Python, SQL, and Power BI, cutting report turnaround time by 40%.' },
      { bold: 'Vendor Risk Management', text: 'Established security assessments for third-party software and vendors to safeguard company data.' }
    ]
  },
  {
    role: 'System Administrator (Operations & Security)',
    company: 'Smile Link Dental Laboratory — Abu Dhabi, UAE',
    subtitle: 'Healthcare & Clinical Technology Provider • 50+ Specialized CAD/CAM Users',
    period: 'Apr 2023 – May 2024',
    bullets: [
      { bold: 'Healthcare Compliance', text: 'Closed 100% of compliance requirements for Abu Dhabi Healthcare Information & Cyber Security (ADHICS) audits.' },
      { bold: 'Workplace Infrastructure', text: 'Maintained office computers, user permissions, and Group Policy Objects (GPOs); enforced device security using ManageEngine Mobile Device Manager.' },
      { bold: 'Data Protection', text: 'Managed daily and weekly offsite cloud backups using Veeam Cloud Backup, ensuring zero data loss for clinical records.' },
      { bold: 'Performance Reports', text: 'Created Excel tracking reports for technical support requests, reducing average ticket resolution time by 25%.' }
    ]
  },
  {
    role: 'IT Infrastructure & Network Engineer',
    company: 'Wi-Tribe — Telecommunications & Enterprise Internet Service Provider',
    subtitle: '',
    period: 'Feb 2022 – Apr 2023',
    bullets: [
      { bold: 'Network Uptime', text: 'Maintained 99.9% network reliability across Cisco routers, switches, FortiGate firewalls, and secure VPN connections.' },
      { bold: 'Data Center Relocation', text: 'Co-managed the physical and logical migration of data center servers and network equipment with zero unplanned downtime.' },
      { bold: 'Technical Support', text: 'Resolved high-priority network and system tickets via Jira Service Management and documented troubleshooting guides.' }
    ]
  },
  {
    role: 'Cybersecurity Analyst',
    company: 'Halool Pvt Ltd — Enterprise Technology & Security Services',
    subtitle: '',
    period: 'Sep 2021 – Feb 2022',
    bullets: [
      { bold: 'Security Monitoring', text: 'Monitored real-time security events across company log sources using Wazuh SIEM.' },
      { bold: 'Incident Analysis', text: 'Assisted in security log investigations and incident documentation to identify attack methods and apply fixes.' }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section reveal-section revealed">
      <div className="section-header">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          A proven track record of securing systems, managing IT infrastructure, and supporting over 250+ users in the UAE.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-card" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-header">
              <div>
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">{exp.company}</div>
                {exp.subtitle && <div className="timeline-subtitle">{exp.subtitle}</div>}
              </div>
              <div className="timeline-period">{exp.period}</div>
            </div>
            <ul className="timeline-list">
              {exp.bullets.map((b, bIdx) => (
                <li key={bIdx}>
                  <strong>{b.bold}:</strong> {b.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
