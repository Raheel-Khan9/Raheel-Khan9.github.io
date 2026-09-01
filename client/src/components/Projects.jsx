import React from 'react';
import { Github } from 'lucide-react';

const projectsData = [
  {
    id: 'ai-emotion',
    category: 'ARTIFICIAL INTELLIGENCE',
    categoryClass: 'badge-purple',
    tech: 'Python • Deep Learning • OpenCV • Google Colab',
    title: 'Two-Stage Deep Learning Human Emotion & Facial Expression Recognition Engine',
    desc: "An AI computer vision program built in Google Colab that identifies a person's face, extracts 68 facial landmark coordinates, and accurately predicts emotional states (Joy, Anger, Surprise, Sadness, Neutral).",
    specs: [
      { text: 'Stage 1 (Landmark Detection): AI model locates 68 key points across eyes, brows, nose, and lips.' },
      { text: 'Stage 2 (Emotion Prediction): Neural network analyzes landmark movements to recognize human feelings.' },
      { text: 'Research & Development: Built through hands-on technical research, image preprocessing, and model tuning.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/emotion-recognition-deeplearning',
    featured: true
  },
  {
    id: 'devops-k8s',
    category: 'DEVOPS & CLOUD ARCHITECTURE',
    categoryClass: 'badge-blue',
    tech: 'Azure • Kubernetes (AKS) • Docker • GitLab CI/CD',
    title: 'Enterprise Cloud Deployment & Kubernetes Solution Pipeline',
    desc: 'An automated cloud deployment system on Microsoft Azure that packages business software into lightweight Docker containers and deploys them to Kubernetes with zero downtime.',
    specs: [
      { text: 'Automated Deployment: Continuous integration (CI/CD) pipeline running automated tests and rolling updates.' },
      { text: 'Self-Healing Infrastructure: Configured automatic health monitors that restart failing services instantly.' },
      { text: 'High Reliability: Balances network traffic across multiple servers so applications never crash during high traffic.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/azure-k8s-cicd-pipeline',
    featured: true
  },
  {
    id: 'grc-matrix',
    category: 'SECURITY & AUDIT',
    categoryClass: 'badge-cyan',
    tech: 'CBUAE • ADHICS • ISO 27001',
    title: 'UAE Government & Banking Security Compliance Framework',
    desc: 'A structured system mapping company security controls to UAE Central Bank (CBUAE), Abu Dhabi Health (ADHICS), and ISO 27001 standards, ensuring full audit readiness.',
    specs: [
      { text: '150+ Security Controls Mapped: Unified password policies, data encryption, and vendor risk checks.' },
      { text: 'Audit Time Saved: Reduced audit preparation time by 40% with pre-formatted evidence reports.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/uae-grc-compliance-matrix',
    featured: false
  },
  {
    id: 'threat-detection',
    category: 'THREAT MONITORING',
    categoryClass: 'badge-emerald',
    tech: 'Microsoft Sentinel (SC-200) • CrowdStrike',
    title: 'Real-Time Threat Detection & Automated Incident Playbooks',
    desc: 'Custom threat detection queries and automated alert systems in Microsoft Sentinel and CrowdStrike that spot cyber attacks and trigger instant security responses.',
    specs: [
      { text: 'Smart Detection Rules: Spots impossible travel logins, repeated password guessing, and privilege misuse.' },
      { text: 'Automated Response: Blocks suspicious IP addresses and isolates infected computers automatically.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/sentinel-threat-detection-playbooks',
    featured: false
  },
  {
    id: 'bcp-drp',
    category: 'DISASTER RECOVERY',
    categoryClass: 'badge-blue',
    tech: 'Emergency Backup • CBUAE 3-2-1 Directive',
    title: 'Disaster Recovery & Business Continuity Framework',
    desc: 'Step-by-step emergency disaster recovery plans ensuring critical banking and medical databases can be restored in under 15 minutes with zero lost data.',
    specs: [
      { text: 'Fast Recovery: Restores mission-critical systems in < 15 minutes using automated cloud replication.' },
      { text: '3-2-1 Backup Rule: 3 copies of data on 2 different media types, with 1 copy stored in a secure offsite cloud.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/bcp-drp-bia-framework',
    featured: false
  },
  {
    id: 'aml-analytics',
    category: 'DATA ANALYTICS',
    categoryClass: 'badge-emerald',
    tech: 'Power BI • SQL • Financial Risk',
    title: 'Financial Anti-Money Laundering (AML) & Risk Analytics',
    desc: 'Automated data models and Power BI reports that evaluate customer transactions, identify suspicious financial behavior, and cut reporting time by 40%.',
    specs: [
      { text: 'Smart Risk Scoring: Automatically groups customer transactions into clear low, medium, and high-risk tiers.' },
      { text: 'Automated Reports: Replaced slow manual spreadsheets with instant, auto-refreshing Power BI dashboards.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/aml-cft-risk-analytics',
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section reveal-section revealed">
      <div className="section-header">
        <h2 className="section-title">Technical Projects & Key Work</h2>
        <p className="section-subtitle">
          Real-world AI models, cloud automation pipelines, and security solutions with direct links to their GitHub repositories.
        </p>
      </div>

      <div className="project-grid">
        {projectsData.map((project) => (
          <div
            className={`project-card ${project.featured ? 'featured-project' : ''}`}
            key={project.id}
          >
            <div>
              <div className="project-top">
                <div className="project-badges">
                  <span className={`badge ${project.categoryClass}`}>{project.category}</span>
                  <span className="badge badge-dark">{project.tech}</span>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.desc}</p>

              <div className="project-spec-list">
                {project.specs.map((spec, idx) => (
                  <div className="spec-item" key={idx}>
                    <span className="spec-icon">🔹</span>
                    <div className="spec-text">{spec.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-footer-action">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-repo-btn"
              >
                <Github size={15} />
                View GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
