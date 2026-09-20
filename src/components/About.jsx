import React from 'react';
import { User, GraduationCap, Server, Compass, Layers, ArrowRight } from 'lucide-react';
import './About.css';

export default function About({ personal }) {
  const backendTech = ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'];
  const fullstackTech = ['React.js', 'Tailwind CSS', 'Flutter', 'RESTful APIs'];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            A passionate developer crafting <span className="text-gradient">digital stories</span>
          </h2>
          <p className="section-subtitle">
            Building reliable REST APIs, database architectures, and scalable full-stack applications.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Bio Card */}
          <div className="about-story-card glass-card">
            <div className="about-student-badge">
              <span className="student-badge-dot" />
              <span>Software Development Student · Norton University</span>
            </div>

            <div className="about-paragraphs">
              <p className="story-p">
                I am a Software Development student at <strong>Norton University</strong> with a strong focus and genuine interest in <strong>Backend Development</strong>. I enjoy designing clean, reliable REST APIs and building scalable full-stack applications that solve real-world problems.
              </p>
              <p className="story-p">
                My primary backend technologies include <strong>Java, Spring Boot, Node.js, Express.js, PostgreSQL, and MongoDB</strong>. In addition to backend systems, I have practical experience building modern, responsive user interfaces using <strong>React.js, Tailwind CSS</strong>, and cross-platform mobile apps with <strong>Flutter</strong>.
              </p>
              <p className="story-p story-p-last">
                I am currently looking for a <strong>Backend Developer Internship</strong> where I can continue to sharpen my technical abilities, gain valuable industry experience, and contribute meaningfully as part of a development team.
              </p>
            </div>

            <div className="about-cta-row">
              <a href="#projects" className="btn btn-secondary about-btn">
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn btn-primary about-btn">
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Quick Highlights & Tech Focus */}
          <div className="about-side-column">
            {/* Quick Fact Cards */}
            <div className="fact-card glass-card">
              <div className="fact-icon-box box-cyan">
                <GraduationCap size={20} />
              </div>
              <div className="fact-details">
                <div className="fact-label">Education</div>
                <div className="fact-title">Norton University</div>
                <div className="fact-desc">Software Development (Year 4)</div>
              </div>
            </div>

            <div className="fact-card glass-card">
              <div className="fact-icon-box box-indigo">
                <Server size={20} />
              </div>
              <div className="fact-details">
                <div className="fact-label">Specialization</div>
                <div className="fact-title">Backend Development</div>
                <div className="fact-desc">REST APIs, DB Design & Architecture</div>
              </div>
            </div>

            <div className="fact-card glass-card">
              <div className="fact-icon-box box-emerald">
                <Compass size={20} />
              </div>
              <div className="fact-details">
                <div className="fact-label">Opportunity Target</div>
                <div className="fact-title">Backend Developer Internship</div>
                <div className="fact-desc">Available for immediate placement</div>
              </div>
            </div>

            {/* Core Tech Highlights Box */}
            <div className="about-tech-box glass-card">
              <div className="tech-box-header">
                <Layers size={16} className="tech-box-icon" />
                <span className="tech-box-title">Key Technologies</span>
              </div>
              <div className="tech-box-pills">
                {backendTech.map(tech => (
                  <span key={tech} className="badge badge-tech backend-badge">
                    {tech}
                  </span>
                ))}
                {fullstackTech.map(tech => (
                  <span key={tech} className="badge badge-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
