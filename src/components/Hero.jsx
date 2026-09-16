import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Terminal, Layers, Zap } from 'lucide-react';
import './Hero.css';

function useTypewriter(words, speed = 80, delay = 1500) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;
    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? currentWord.slice(0, displayText.length - 1)
        : currentWord.slice(0, displayText.length + 1);

      timeout = setTimeout(() => {
        setDisplayText(nextText);
      }, isDeleting ? Math.round(speed / 2) : speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, delay]);

  return displayText;
}

export default function Hero({ personal }) {
  const typedRole = useTypewriter(['Backend Developer', 'Flutter Developer'], 80, 1500);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/Hour_Limpeav_CV.pdf');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Hour_Limpeav_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('CV download failed:', err);
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Ambient background glows */}
      <div className="glow-orb glow-orb-primary hero-glow-1" />
      <div className="glow-orb glow-orb-cyan hero-glow-2" />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="status-pill">
            <span className="status-dot" />
            <span className="status-text">{personal.status}</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            <span className="hero-title-greeting">
              Hi, I'm <span className="text-gradient">{personal.name}</span>.
            </span>
            <span className="hero-typewriter-row">
              <span className="hero-typewriter-prefix">I'm a</span>
              <span className="hero-typewriter-dynamic">
                <span className="hero-typewriter-text">{typedRole}</span>
                <span className="hero-typewriter-cursor" aria-hidden="true" />
              </span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="hero-description">
            {personal.tagline} Specializing in high-performance web systems, responsive interactive UI, and robust cloud architectures.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary hero-btn-main">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
            </a>
            <button
              onClick={handleDownloadCV}
              className="btn btn-secondary resume-btn"
              title="Download Hour Limpeav CV (PDF)"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>

          {/* Tech Badges Row */}
          <div className="hero-tech-stack">
            <span className="tech-stack-label">Core Focus:</span>
            <div className="tech-chips">
              <span className="badge badge-tech"><Zap size={13} className="text-cyan" /> Spring Boot & Java</span>
              <span className="badge badge-tech"><Layers size={13} className="text-purple" /> Node.js & Express</span>
              <span className="badge badge-tech"><Terminal size={13} className="text-emerald" /> PostgreSQL & Mongo</span>
              <span className="badge badge-tech"><Sparkles size={13} className="text-indigo" /> Flutter & React</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="hero-visual">
          <div className="avatar-frame-wrapper">
            <div className="avatar-glow-ring" />
            <div className="avatar-card glass-card">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="avatar-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Counter Bar */}
      <div className="container">
        <div className="hero-stats-grid glass-card">
          {personal.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value text-gradient">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
