import React from 'react';
import { User, GraduationCap, Smartphone, Compass, Layers, ArrowRight } from 'lucide-react';
import './About.css';

export default function About({ personal }) {
  const primaryTech = ['Flutter', 'Dart', 'BLoC', 'REST APIs', 'Firebase'];
  const supportingTech = ['Java', 'Spring Boot', 'Node.js', 'MongoDB', 'PostgreSQL'];

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
            A passionate developer crafting <span className="text-gradient">mobile experiences</span>
          </h2>
          <p className="section-subtitle">
            Building beautiful, responsive, and user-friendly mobile applications with Flutter and Dart.
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
                I am a Software Development student at <strong>Norton University</strong> with a strong focus and genuine interest in <strong>Flutter Development</strong>. I enjoy building beautiful, responsive, and user-friendly mobile applications that solve real-world problems.
              </p>
              <p className="story-p">
                My primary mobile development technologies include <strong>Flutter and Dart</strong>, with experience building cross-platform mobile applications. I also have experience integrating <strong>REST APIs, BLoC, authentication, and backend services</strong> to create functional and user-friendly applications.
              </p>
              <p className="story-p story-p-last">
                I am currently looking for a <strong>Flutter Developer Internship</strong> where I can strengthen my mobile development skills, gain valuable industry experience, and contribute meaningfully as part of a development team.
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
                <Smartphone size={20} />
              </div>
              <div className="fact-details">
                <div className="fact-label">Specialization</div>
                <div className="fact-title">Flutter Development</div>
                <div className="fact-desc">Cross-Platform Mobile Applications</div>
              </div>
            </div>

            <div className="fact-card glass-card">
              <div className="fact-icon-box box-emerald">
                <Compass size={20} />
              </div>
              <div className="fact-details">
                <div className="fact-label">Opportunity Target</div>
                <div className="fact-title">Flutter Developer Internship</div>
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
                {primaryTech.map(tech => (
                  <span key={tech} className="badge badge-tech backend-badge">
                    {tech}
                  </span>
                ))}
                {supportingTech.map(tech => (
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
