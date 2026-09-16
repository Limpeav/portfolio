import React, { useState } from 'react';
import { Cpu, Layout, Server, Cloud, Boxes, Check } from 'lucide-react';
import './Skills.css';

export default function Skills({ skills }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Cpu size={16} /> },
    { id: 'backend', label: 'Backend & APIs', icon: <Server size={16} /> },
    { id: 'databases', label: 'Databases', icon: <Boxes size={16} /> },
    { id: 'frontendMobile', label: 'Mobile & Frontend', icon: <Layout size={16} /> },
    { id: 'toolsWorkflow', label: 'Tools & Workflow', icon: <Cloud size={16} /> }
  ];

  // Get skills to display based on active tab
  const getDisplaySkills = () => {
    if (activeTab === 'all') {
      return [
        ...(skills.backend || []).map(s => ({ ...s, category: 'Backend' })),
        ...(skills.databases || []).map(s => ({ ...s, category: 'Databases' })),
        ...(skills.frontendMobile || []).map(s => ({ ...s, category: 'Mobile & Frontend' })),
        ...(skills.toolsWorkflow || []).map(s => ({ ...s, category: 'Tools' }))
      ];
    }
    const catSkills = skills[activeTab] || [];
    const catLabel = categories.find(c => c.id === activeTab)?.label || '';
    return catSkills.map(s => ({ ...s, category: catLabel }));
  };

  const displayedSkills = getDisplaySkills();

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Technical Stack & <span className="text-gradient">Core Skills</span>
          </h2>
          <p className="section-subtitle">
            Honed through 4 years of software development studies, enterprise school projects, and hands-on system building.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-tabs-wrapper">
          <div className="skills-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`skill-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, idx) => (
            <div key={`${skill.name}-${idx}`} className="skill-card glass-card">
              <div className="skill-header">
                <div className="skill-name-wrap">
                  <span className="skill-name">{skill.name}</span>
                  {skill.popular && (
                    <span className="skill-badge-star">Focus</span>
                  )}
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>

              {/* Progress Track */}
              <div className="skill-progress-track">
                <div
                  className="skill-progress-bar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="skill-category-label">
                {skill.category}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stack Highlights */}
        <div className="stack-overview-footer glass-card">
          <div className="stack-item">
            <span className="stack-bullet"><Check size={14} /></span>
            <span>Spring Boot, Spring Data JPA & Hibernate ORM</span>
          </div>
          <div className="stack-item">
            <span className="stack-bullet"><Check size={14} /></span>
            <span>RESTful API Architecture & Postman Test Suites</span>
          </div>
          <div className="stack-item">
            <span className="stack-bullet"><Check size={14} /></span>
            <span>PostgreSQL Relational & MongoDB Document Stores</span>
          </div>
          <div className="stack-item">
            <span className="stack-bullet"><Check size={14} /></span>
            <span>Multiplatform Clients with Flutter (Mobile) and React.js (Web)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
