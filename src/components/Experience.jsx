import React from 'react';
import { Briefcase, GraduationCap, Circle } from 'lucide-react';
import './Experience.css';

export default function Experience({ experience }) {
  const workItems = experience.filter((e) => e.type === 'experience');
  const eduItems  = experience.filter((e) => e.type === 'education');

  const labelColorClass = (label) => {
    if (!label) return 'tl-label-default';
    const l = label.toLowerCase();
    if (l.includes('currently') || l.includes('internship')) return 'tl-label-active';
    return 'tl-label-default';
  };

  const renderColumn = (title, items, icon) => (
    <div className="tl-column">
      <h3 className="tl-col-title">{title}</h3>
      <div className="tl-col-body">
        {/* Vertical spine */}
        <div className="tl-spine" />

        {items.map((item, idx) => (
          <div key={idx} className="tl-entry">
            {/* Icon node */}
            <div className="tl-node">
              <div className="tl-node-icon">
                {icon === 'work'
                  ? <Briefcase size={16} />
                  : <GraduationCap size={16} />}
              </div>
            </div>

            {/* Card */}
            <div className="tl-card glass-card">
              {/* Title row */}
              <div className="tl-card-top">
                <h4 className="tl-role">{item.role}</h4>
                <span className="tl-period-badge">{item.period}</span>
              </div>

              {/* Label */}
              {item.label && (
                <span className={`tl-label ${labelColorClass(item.label)}`}>
                  {item.label}
                </span>
              )}

              {/* Description */}
              <p className="tl-desc">{item.description}</p>

              {/* Bullet points */}
              <ul className="tl-bullets">
                {item.achievements.map((point, i) => (
                  <li key={i} className="tl-bullet">
                    <Circle size={7} className="tl-dot" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags — only if present */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="tl-tech-stack">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="badge badge-tech">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>JOURNEY</span>
          </div>
          <h2 className="section-title">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">
            Hands-on experience building mobile and web applications through academic and personal projects.
          </p>
        </div>

        {/* Two-column timeline */}
        <div className="tl-two-col">
          {renderColumn('Work Experience', workItems, 'work')}
          {renderColumn('Education', eduItems, 'edu')}
        </div>
      </div>
    </section>
  );
}
