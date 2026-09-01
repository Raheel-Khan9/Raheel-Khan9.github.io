import React from 'react';
import { Github } from 'lucide-react';

const projectsData = [
  {
    id: 'sentiovision-ai',
    number: '1.',
    emoji: '🤖',
    category: '🤖 ARTIFICIAL INTELLIGENCE',
    categoryClass: 'badge-purple',
    tech: 'Python • Deep Learning • OpenCV • Google Colab',
    title: 'SentioVision: Dual-Stage Emotion AI & 15 Facial Landmark Regression Pipeline',
    domain: 'Artificial Intelligence & Computer Vision',
    stack: 'Python, Deep Learning, OpenCV, Google Colab',
    whatItDoes: 'A real-time computer vision system built in Google Colab (inspired by Prof. Ryan Ahmed) that analyzes facial structure, detects 15 key landmark coordinates, and accurately predicts human emotional expressions (Joy, Anger, Sadness, Surprise, Neutral).',
    repoName: 'Raheel-Khan9/SentioVision-Emotion-AI',
    repoUrl: 'https://github.com/Raheel-Khan9/SentioVision-Emotion-AI',
    featured: true
  },
  {
    id: 'ai-soc-triage',
    number: '2.',
    emoji: '🚨',
    category: '🚨 THREAT DEFENSE & SOC',
    categoryClass: 'badge-emerald',
    tech: 'Microsoft SC-200 • CISM • Python • SIEM / SOAR',
    title: 'AI-Powered SOC Alert Triage & Threat Enrichment Engine',
    domain: 'Threat Defense & SOC Automation',
    stack: 'Microsoft SC-200, CISM, Python, Microsoft Sentinel / Wazuh SIEM, SOAR',
    whatItDoes: 'An automated security alert triage engine that connects to SIEM/Cloud logs, queries threat intelligence databases to score alert severity, filters out false alarms, and generates step-by-step containment playbooks.',
    repoName: 'Raheel-Khan9/AI-SOC-Triage-Engine',
    repoUrl: 'https://github.com/Raheel-Khan9/AI-SOC-Triage-Engine',
    featured: true
  },
  {
    id: 'powerbi-insurance',
    number: '3.',
    emoji: '📊',
    category: '📊 DATA & BUSINESS ANALYTICS',
    categoryClass: 'badge-cyan',
    tech: 'Power BI • SQL • DAX • Financial Modeling',
    title: 'Insurance Business Intelligence & Financial Operational Dashboards',
    domain: 'Data & Business Analytics',
    stack: 'Power BI, SQL, DAX, Financial Operational Modeling',
    whatItDoes: 'A suite of executive-ready Power BI reporting dashboards and automated SQL pipelines built for real-world insurance brokerage operations, tracking premium collections, broker commission payouts, and claim settlement turnaround times.',
    repoName: 'Raheel-Khan9/PowerBI_Reports',
    repoUrl: 'https://github.com/Raheel-Khan9/PowerBI_Reports',
    featured: false
  },
  {
    id: 'build-your-own-loadbalancer',
    number: '4.',
    emoji: '⚙️',
    category: '⚙️ SYSTEMS & NETWORKING',
    categoryClass: 'badge-blue',
    tech: 'Python • TCP/IP Sockets • HTTP • Load Balancing',
    title: 'Build-Your-Own Layer-7 Reverse Proxy & Load Balancer with Health Checks',
    domain: 'Systems & Networking Engineering (Inspired by CodeCrafters Build-Your-Own-X)',
    stack: 'Python, TCP/IP Sockets, HTTP/1.1 Protocol, Round-Robin / Least-Connections Algorithms',
    whatItDoes: 'A custom Layer-7 reverse proxy and network load balancer built from scratch that routes web traffic across backend servers with automatic health checks and failover routing.',
    repoName: 'Raheel-Khan9/build-your-own-loadbalancer',
    repoUrl: 'https://github.com/Raheel-Khan9/build-your-own-loadbalancer',
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
              <h3 className="project-title">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  {project.number} {project.emoji} {project.title}
                </a>
              </h3>

              <div className="project-spec-list">
                <div className="spec-item">
                  <span className="spec-icon">🌐</span>
                  <div className="spec-text">
                    <strong>Domain:</strong> {project.domain}
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">⚡</span>
                  <div className="spec-text">
                    <strong>Stack:</strong> {project.stack}
                  </div>
                </div>
                <div className="spec-item">
                  <span className="spec-icon">💡</span>
                  <div className="spec-text">
                    <strong>What it does (Plain English):</strong> {project.whatItDoes}
                  </div>
                </div>
              </div>
            </div>

            <div className="project-footer-action">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-repo-btn"
              >
                <Github size={15} />
                GitHub Repository: {project.repoName}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
