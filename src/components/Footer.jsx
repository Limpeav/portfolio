import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { GithubIcon, TelegramIcon } from './SocialIcons';
import './Footer.css';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        {/* Top footer row */}
        <div className="footer-main-row">
          <div className="footer-brand-col">
            <a href="#hero" className="footer-logo">
              <div className="logo-icon-box">
                <span className="logo-initials">HL</span>
              </div>
              <span className="logo-text">
                {personal.name}
              </span>
            </a>
            <p className="footer-tagline">
              Fourth-year Software Development student at Norton University building high-performance web applications, mobile apps, and robust backend systems.
            </p>
          </div>

          <div className="footer-nav-col">
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-col">
            <div className="footer-col-title">Connect</div>
            <div className="footer-social-links">
              <a href={personal.github} target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="GitHub" title="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href={personal.telegram} target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Telegram" title="Telegram">
                <TelegramIcon size={18} />
              </a>
            </div>
            <button className="back-to-top-btn" onClick={scrollToTop}>
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personal.name}. Built with React, Vite & Modern CSS.
          </p>
          <div className="footer-crafted-text">
            <span>Crafted with precision</span>
            <Heart size={14} className="heart-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}
