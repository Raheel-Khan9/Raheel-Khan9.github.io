import React, { useState } from 'react';

const domainsData = [
  {
    id: 'grc',
    icon: '🏛️',
    title: 'Cybersecurity & Regulatory Compliance (GRC)',
    badge: 'Audit Readiness & Legal Security Standards',
    desc: 'Ensuring company systems meet strict government and banking security laws (like UAE Central Bank and Healthcare mandates) with zero non-compliance penalties.',
    skills: [
      { label: 'Regulatory Frameworks', detail: 'UAE Central Bank (CBUAE), Abu Dhabi Health (ADHICS), Dubai Health (DHA), ISO 27001, NIST, UAE Privacy Law.' },
      { label: 'Emergency Preparedness', detail: 'Business Continuity Plans (BCP), Disaster Recovery (DRP), Emergency Backup Strategies, Vendor Risk Assessments.' }
    ]
  },
  {
    id: 'soc',
    icon: '🚨',
    title: 'Threat Monitoring & Incident Response (SOC)',
    badge: '24/7 Threat Detection & Fast Containment',
    desc: 'Monitoring network and cloud activity around the clock to detect, investigate, and stop hacker attacks, phishing, or malware before any damage happens.',
    skills: [
      { label: 'Security Tools', detail: 'Microsoft Sentinel SIEM (SC-200 Certified), CrowdStrike Falcon Antivirus/EDR, Wazuh SIEM, Microsoft Defender.' },
      { label: 'Investigation & Hunting', detail: 'KQL Query Language, Suspicious Behavior Detection (UEBA), Root-Cause Analysis, Automated Blocking.' }
    ]
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'Artificial Intelligence & Computer Vision',
    badge: 'Deep Neural Networks & Visual Modeling',
    desc: 'Designing smart AI models that process visual data and predict patterns—such as deep learning models that identify facial geometry and human emotions.',
    skills: [
      { label: 'AI Capabilities', detail: 'Facial Landmark Tracking, Emotion Detection Classifiers, Convolutional Neural Networks (CNNs), Data Preprocessing.' },
      { label: 'Core AI Tools', detail: 'Python, TensorFlow, PyTorch, OpenCV, Google Colab Notebooks, Scikit-Learn, Pandas & NumPy.' }
    ]
  },
  {
    id: 'devops',
    icon: '⚡',
    title: 'Cloud Infrastructure & DevOps Solutions',
    badge: 'Azure • Kubernetes • Docker • Automated Pipelines',
    desc: 'Setting up reliable cloud systems on Microsoft Azure using Docker and Kubernetes so company applications run fast and stay online 24/7 without crashing.',
    skills: [
      { label: 'Cloud & Containers', detail: 'Microsoft Azure, Docker Containers, Kubernetes (AKS/K8s), YAML Deployments, Terraform.' },
      { label: 'Automation & Security', detail: 'GitLab CI/CD Automated Pipelines, Microservices Architecture, Automated Health Checks, Secure Cloud Logins (Entra ID).' }
    ]
  },
  {
    id: 'data',
    icon: '📊',
    title: 'Business Intelligence & Data Analytics',
    badge: 'Power BI • SQL • Financial Risk Reports',
    desc: 'Transforming complex business data into visual Power BI dashboards and executive reports that help company leaders make informed financial decisions.',
    skills: [
      { label: 'Dashboards & Reports', detail: 'Microsoft Power BI, PowerQuery, Advanced Excel Models (Formulas, Pivot Tables, Macros), Jira Analytics.' },
      { label: 'Data Automation', detail: 'SQL Database Queries, Python Data Extraction, Anti-Money Laundering (AML/CFT) Risk Models.' }
    ]
  },
  {
    id: 'systems',
    icon: '⚙️',
    title: 'IT Infrastructure & Enterprise Networks',
    badge: 'Cisco CCNA • High Reliability • User Support',
    desc: 'Managing company computers, fast Cisco internet networks, secure user logins, and daily offsite backups to ensure smooth, uninterrupted business operations.',
    skills: [
      { label: 'Networks & Servers', detail: 'Cisco Routers & Switches (CCNA), FortiGate Firewalls, Windows Server, Active Directory, 3-2-1 Automated Backups.' },
      { label: 'Workplace Technology', detail: 'Microsoft 365, Multi-Factor Authentication (MFA), ManageEngine Device Security, Operational CRM Support (250+ Users).' }
    ]
  }
];

export default function Domains() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredDomains = activeTab === 'all'
    ? domainsData
    : domainsData.filter((d) => d.id === activeTab);

  return (
    <section id="competencies" className="section reveal-section revealed">
      <div className="section-header">
        <h2 className="section-title">Core Capabilities & Technical Skills</h2>
        <p className="section-subtitle">
          A clear breakdown of what I do across cybersecurity, AI, cloud solutions, and business analytics.
        </p>
      </div>

      {/* Tabs */}
      <div className="domain-tabs-scroll-wrapper">
        <div className="domain-tabs-wrapper">
          <button
            className={`domain-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            View All Skills
          </button>
          <button
            className={`domain-tab ${activeTab === 'grc' ? 'active' : ''}`}
            onClick={() => setActiveTab('grc')}
          >
            🏛️ Security & Compliance
          </button>
          <button
            className={`domain-tab ${activeTab === 'soc' ? 'active' : ''}`}
            onClick={() => setActiveTab('soc')}
          >
            🚨 Threat Monitoring
          </button>
          <button
            className={`domain-tab ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            🤖 Artificial Intelligence
          </button>
          <button
            className={`domain-tab ${activeTab === 'devops' ? 'active' : ''}`}
            onClick={() => setActiveTab('devops')}
          >
            ⚡ Cloud & DevOps
          </button>
          <button
            className={`domain-tab ${activeTab === 'data' ? 'active' : ''}`}
            onClick={() => setActiveTab('data')}
          >
            📊 Data & Analytics
          </button>
          <button
            className={`domain-tab ${activeTab === 'systems' ? 'active' : ''}`}
            onClick={() => setActiveTab('systems')}
          >
            ⚙️ IT Infrastructure
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="domain-grid" id="domain-cards-container">
        {filteredDomains.map((domain) => (
          <div className="domain-card" key={domain.id} data-domain={domain.id}>
            <div>
              <div className="domain-card-header">
                <span className="domain-icon">{domain.icon}</span>
                <div>
                  <h3 className="domain-title">{domain.title}</h3>
                  <span className="domain-badge">{domain.badge}</span>
                </div>
              </div>
              <p className="domain-desc">{domain.desc}</p>
            </div>

            <div className="domain-skills-group">
              {domain.skills.map((s, idx) => (
                <div className="skill-row" key={idx}>
                  <strong>{s.label}:</strong> {s.detail}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
