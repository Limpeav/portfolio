import React from 'react';
import { Award, Zap, Code, ShieldCheck, MapPin, Briefcase, Mail, CheckCircle2 } from 'lucide-react';
import './About.css';

export default function About({ personal }) {
  const pillars = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Backend & REST APIs",
      desc: "Architecting clean, reliable RESTful services using Java Spring Boot and Node.js with secure JWT authentication.",
      color: "cyan"
    },
    {
      icon: <Code size={22} />,
      title: "Database Architectures",
      desc: "Designing normalized, high-performance relational and NoSQL schemas with PostgreSQL, Spring Data JPA, and MongoDB.",
      color: "indigo"
    },
    {
      icon: <Zap size={22} />,
      title: "Multiplatform Clients",
      desc: "Developing cross-platform mobile apps in Flutter/Dart and responsive modern web apps in React.js with Tailwind CSS.",
      color: "emerald"
    },
    {
      icon: <Award size={22} />,
      title: "Payments & Integrations",
      desc: "Experienced with real-world integrations including Bakong KHQR national payments and Google Maps location services.",
      color: "purple"
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Background & Ethos</span>
          </div>
          <h2 className="section-title">
            Engineering with <span className="text-gradient">Reliability & Scalability</span>
          </h2>
          <p className="section-subtitle">
            Specializing in web, mobile, and backend system architecture, API services, and robust data persistence.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Card */}
          <div className="about-story-card glass-card">
            <h3 className="story-title">Backend Developer</h3>
            <p className="story-p">
              {personal.bio}
            </p>
            <p className="story-p">
              Currently in Semester II of my 4th year at <strong>Norton University</strong>, I am actively seeking a Software Developer Internship / Junior Developer role where I can learn from experienced engineers and contribute to high-availability production applications.
            </p>

            <div className="story-details-list">
              <div className="story-detail-item">
                <MapPin size={18} className="detail-icon" />
                <div>
                  <div className="detail-label">Location</div>
                  <div className="detail-value">{personal.location}</div>
                </div>
              </div>

              <div className="story-detail-item">
                <Briefcase size={18} className="detail-icon" />
                <div>
                  <div className="detail-label">Opportunity Focus</div>
                  <div className="detail-value">Backend Developer Internship</div>
                </div>
              </div>

              <div className="story-detail-item">
                <Mail size={18} className="detail-icon" />
                <div>
                  <div className="detail-label">Direct Contact</div>
                  <div className="detail-value">{personal.email}</div>
                </div>
              </div>
            </div>

            <div className="about-highlights-checklist">
              <div className="check-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Fourth-Year Software Development Student at Norton University</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Hands-on experience with Spring Boot, Node.js, PostgreSQL & MongoDB</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Multiplatform skills bridging backends to Flutter mobile & React web</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Academic Reference: Prof. Sek Socheat (Lecturer at Norton University)</span>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="about-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className={`pillar-card glass-card pillar-${pillar.color}`}>
                <div className={`pillar-icon-box box-${pillar.color}`}>
                  {pillar.icon}
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
