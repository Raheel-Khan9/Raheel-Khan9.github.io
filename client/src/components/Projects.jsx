import React from 'react';
import { Github } from 'lucide-react';

const projectsData = [
  {
    id: 'sentiovision-ai',
    category: 'ARTIFICIAL INTELLIGENCE',
    categoryClass: 'badge-purple',
    tech: 'Python • Deep Learning • OpenCV • Colab',
    title: 'SentioVision: Dual-Stage Emotion AI & 15 Facial Landmark Regression Pipeline',
    desc: 'A real-time computer vision system built in Google Colab (inspired by Prof. Ryan Ahmed) that analyzes facial structure, detects 15 key landmark coordinates, and accurately predicts human emotional expressions.',
    specs: [
      { text: 'Stage 1 (Landmark Detection): Convolutional neural network that pinpoints 15 key coordinates across eyes, eyebrows, nose, and mouth.' },
      { text: 'Stage 2 (Emotion Classification): Deep classifier that analyzes geometric landmark movements to recognize core human emotions (Joy, Anger, Sadness, Surprise, Neutral).' },
      { text: 'Model Engineering: Applied custom image augmentation, normalization pipelines, and model tuning for fast, accurate inference.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/SentioVision-Emotion-AI',
    featured: true
  },
  {
    id: 'ai-soc-triage',
    category: 'THREAT DEFENSE & AI',
    categoryClass: 'badge-emerald',
    tech: 'Microsoft SC-200 • CISM • Python • SIEM / SOAR',
    title: 'AI-Powered SOC Alert Triage & Threat Enrichment Engine',
    desc: 'An automated security alert triage engine designed to help Security Operations (SOC) teams rapidly process security alerts, eliminate false alarms, and generate instant incident investigation playbooks.',
    specs: [
      { text: 'Automated Alert Ingestion: Connects to SIEM and cloud log sources (Microsoft Sentinel / Wazuh / Defender) to ingest raw security alerts in real time.' },
      { text: 'Threat Intelligence Enrichment: Automatically queries IP and domain threat databases to score risk levels and weed out benign false positives.' },
      { text: 'AI-Guided Remediation: Generates step-by-step containment instructions and incident reports aligned with CISM and SC-200 best practices.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/AI-SOC-Triage-Engine',
    featured: true
  },
  {
    id: 'powerbi-insurance',
    category: 'DATA & BUSINESS ANALYTICS',
    categoryClass: 'badge-cyan',
    tech: 'Power BI • SQL • DAX • Financial Modeling',
    title: 'Insurance Business Intelligence & Financial Operational Dashboards',
    desc: 'A suite of executive-ready Power BI reporting dashboards and automated SQL pipelines built for real-world insurance and financial brokerage operations.',
    specs: [
      { text: 'Executive Revenue Tracking: Real-time dashboards visualizing premium collections, broker commission payouts, and monthly sales targets.' },
      { text: 'Claims Operational KPIs: Tracks insurance claim settlement turnaround times and highlights operational bottlenecks across departments.' },
      { text: 'Automated SQL ETL: Replaces slow manual Excel sheets with automated data extraction models that cut monthly reporting time by 40%.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/PowerBI_Reports',
    featured: false
  },
  {
    id: 'build-your-own-loadbalancer',
    category: 'SYSTEMS & NETWORKING',
    categoryClass: 'badge-blue',
    tech: 'Python • TCP/IP Sockets • HTTP • Load Balancing',
    title: 'Build-Your-Own Layer-7 Reverse Proxy & Load Balancer with Health Checks',
    desc: 'A custom Layer-7 reverse proxy and network load balancer built from scratch (inspired by CodeCrafters Build Your Own X) that routes web traffic across backend servers with automatic failover.',
    specs: [
      { text: 'Traffic Balancing Algorithms: Implements Round-Robin and Least-Connections algorithms to balance incoming web requests evenly across server pools.' },
      { text: 'Self-Healing Health Probes: Continuously monitors backend server responsiveness and automatically routes traffic away from crashed or slow servers.' },
      { text: 'Socket-Level Engineering: Demonstrates deep understanding of TCP/IP networking, HTTP headers, concurrent socket handling, and high-availability architecture.' }
    ],
    repo: 'https://github.com/Raheel-Khan9/build-your-own-loadbalancer',
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section reveal-section revealed">
      <div className="section-header">
        <h2 className="section-title">Featured Technical Projects</h2>
        <p className="section-subtitle">
          Practical, high-impact implementations across computer vision, AI-driven SOC operations, insurance business analytics, and core systems engineering.
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
