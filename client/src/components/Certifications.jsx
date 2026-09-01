import React from 'react';

const certsData = [
  {
    id: 'cism',
    badgeClass: 'isaca',
    badgeText: 'ISACA',
    status: 'Active',
    name: 'CISM®',
    fullname: 'Certified Information Security Manager',
    date: 'Valid: July 2026',
    domain: 'Security Leadership & Risk',
    featured: true
  },
  {
    id: 'sc200',
    badgeClass: 'microsoft',
    badgeText: 'Microsoft',
    status: 'Active',
    name: 'SC-200',
    fullname: 'Security Operations Analyst Associate',
    date: 'Valid: July 2026',
    domain: 'Sentinel SIEM & Cloud Defense',
    featured: false
  },
  {
    id: 'secplus',
    badgeClass: 'comptia',
    badgeText: 'CompTIA',
    status: 'Active',
    name: 'Security+ (SY0-701)',
    fullname: 'Information Security Specialist',
    date: 'Valid: Sept 2025',
    domain: 'Threats & Infrastructure',
    featured: false
  },
  {
    id: 'ccna',
    badgeClass: 'cisco',
    badgeText: 'Cisco',
    status: 'Active',
    name: 'CCNA (200-301)',
    fullname: 'Cisco Certified Network Associate',
    date: 'Issued: April 2024',
    domain: 'Enterprise Routing & Switching',
    featured: false
  },
  {
    id: 'google',
    badgeClass: 'google',
    badgeText: 'Google',
    status: 'Active',
    name: 'Google Cloud Cyber',
    fullname: 'Professional Cybersecurity Certificate',
    date: 'Valid: March 2026',
    domain: 'Cloud Defense & Security',
    featured: false
  },
  {
    id: 'bsc',
    badgeClass: 'academic',
    badgeText: 'Academic Degree',
    status: 'Verified',
    name: 'B.Sc. Computer Science',
    fullname: 'Federal Urdu University (Honors)',
    date: 'CGPA: 3.79 / 4.0',
    domain: 'Algorithms & Applied AI',
    featured: false
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section reveal-section revealed">
      <div className="section-header">
        <h2 className="section-title">Verified Industry Certifications & Accreditations</h2>
        <p className="section-subtitle">
          Globally recognized industry certifications validating managerial, security, and technical expertise.
        </p>
      </div>

      <div className="cert-grid">
        {certsData.map((cert) => (
          <div className={`cert-card ${cert.featured ? 'featured' : ''}`} key={cert.id}>
            <div>
              <div className="cert-header">
                <span className={`cert-badge ${cert.badgeClass}`}>{cert.badgeText}</span>
                <span className="cert-status">{cert.status}</span>
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-fullname">{cert.fullname}</p>
            </div>

            <div className="cert-footer">
              <span className="cert-date">{cert.date}</span>
              <span className="cert-domain">{cert.domain}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
