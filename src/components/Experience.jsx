import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './Experience.css';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career Progression</span>
          </div>
          <h2 className="section-title">
            Work Experience & <span className="text-gradient">Impact</span>
          </h2>
          <p className="section-subtitle">
            A track record of engineering leadership, scalable product execution, and high-velocity delivery.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="timeline-container">
          {experience.map((item, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline Card */}
              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company-row">
                      <span className="timeline-company">{item.company}</span>
                      <span className="timeline-dot-sep">•</span>
                      <span className="timeline-location">
                        <MapPin size={13} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <span className="badge timeline-period-badge">
                    <Calendar size={13} />
                    {item.period}
                  </span>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <div className="timeline-achievements">
                  {item.achievements.map((achieve, i) => (
                    <div key={i} className="achievement-row">
                      <CheckCircle2 size={15} className="achieve-icon" />
                      <span>{achieve}</span>
                    </div>
                  ))}
                </div>

                <div className="timeline-tech-stack">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="badge badge-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
