import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MapPin, Clock, Phone } from 'lucide-react';
import { GithubIcon, TelegramIcon, PhoneIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import './Contact.css';

export default function Contact({ personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Developer Internship',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      {/* Background glow */}
      <div className="glow-orb glow-orb-purple contact-glow" />

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Initiate Contact</span>
          </div>
          <h2 className="section-title">
            Let's Connect & <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship or junior developer opportunity, a project to build, or want to discuss backend development — my inbox is open!
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left info column */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title">Contact Channels</h3>
              <p className="contact-card-desc">
                Feel free to reach out directly via email, Telegram, phone, or connect with me on GitHub.
              </p>

              {/* Copy Email Box */}
              <div className="copy-email-box">
                <div className="email-text-wrap">
                  <span className="email-label">Direct Email</span>
                  <span className="email-address">{personal.email}</span>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={18} className="copy-success-icon" /> : <Copy size={18} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Status & Timezone Info */}
              <div className="contact-meta-list">
                <div className="contact-meta-item">
                  <div className="meta-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="meta-label">Location</div>
                    <div className="meta-val">{personal.location}</div>
                  </div>
                </div>

                <div className="contact-meta-item">
                  <div className="meta-icon-box">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="meta-label">Phone Call / WhatsApp</div>
                    <div className="meta-val">
                      <a href={`tel:${personal.phone?.replace(/\s+/g, '')}`} style={{ color: 'inherit' }}>
                        {personal.phone || '+855 16 568 335'}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-meta-item">
                  <div className="meta-icon-box">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="meta-label">Timezone & Response</div>
                    <div className="meta-val">Indochina Time (ICT, UTC+7) · Fast Reply</div>
                  </div>
                </div>
              </div>

              {/* Social Connect buttons */}
              <div className="contact-socials-row">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="social-badge-link"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="social-badge-link"
                >
                  <TelegramIcon size={18} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              {submitSuccess ? (
                <div className="form-success-state">
                  <div className="success-icon-box">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="success-title">Message Dispatched!</h3>
                  <p className="success-p">
                    Thank you for reaching out. I've received your note and will get back to you within 24 hours.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <h3 className="form-header-title">Send a Direct Message</h3>

                  {errorMessage && (
                    <div className="form-error-banner">
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-row-dual">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Sarah Connor"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Inquiry Type</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input form-select"
                    >
                      <option value="Software Developer Internship">Software Developer Internship</option>
                      <option value="Junior Software Developer Role">Junior Software Developer Full-time Role</option>
                      <option value="Web & Mobile Collaboration">Web & Mobile Project Collaboration</option>
                      <option value="General Tech Chat">General Tech Discussion / Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project, timeline, and goals..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
