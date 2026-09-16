import React from 'react';
import { MessageSquareQuote, Star, Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials({ testimonials }) {
  return (
    <section className="section testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquareQuote size={14} />
            <span>Endorsements</span>
          </div>
          <h2 className="section-title">
            Trusted by <span className="text-gradient">Engineers & Leaders</span>
          </h2>
          <p className="section-subtitle">
            What leaders and cross-functional partners say about collaborating on high-stakes products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <div className="quote-icon-bubble">
                <Quote size={20} className="quote-icon" />
              </div>

              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="star-filled" />
                ))}
              </div>

              <p className="testimonial-quote">
                "{t.quote}"
              </p>

              <div className="testimonial-author-block">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="author-avatar"
                  loading="lazy"
                />
                <div>
                  <div className="author-name">{t.author}</div>
                  <div className="author-role-company">
                    {t.role} · <span className="company-highlight">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
