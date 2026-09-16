import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon, TelegramIcon } from './SocialIcons';
import './Navbar.css';

export default function Navbar({ personal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll-spy to detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-logo" onClick={handleNavClick}>
          <div className="logo-icon-box">
            <span className="logo-initials">HL</span>
          </div>
          <span className="logo-text">
            {personal.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                    {isActive && <span className="active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <div className="social-quick-links">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.telegram}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Telegram"
              title="Telegram"
            >
              <TelegramIcon size={18} />
            </a>
          </div>

          <a href="#contact" className="btn btn-primary nav-cta">
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-socials">
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <GithubIcon size={18} /> GitHub
              </a>
              <a href={personal.telegram} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <TelegramIcon size={18} /> Telegram
              </a>
            </div>
            <a href="#contact" className="btn btn-primary" onClick={handleNavClick} style={{ width: '100%' }}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
