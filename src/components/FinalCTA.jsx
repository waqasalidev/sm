import React from 'react';
import { Calendar, Phone, CheckCircle, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export default function FinalCTA({ onOpenConsultation, onContactClick }) {
  return (
    <section className="final-cta-section" aria-label="Call to Action Section">
      {/* Background Radial Glow */}
      <div className="cta-bg-glow" aria-hidden="true" />

      <div className="container">
        <div className="cta-content-wrapper">
          <div className="section-eyebrow dark-theme" style={{ display: 'inline-flex', marginBottom: '18px' }}>
            <Sparkles size={14} aria-hidden="true" />
            <span>Take Control of Your Revenue Cycle</span>
          </div>

          <h2 className="cta-heading">
            Let’s Find Your <br />
            <span style={{ color: '#38D4D8' }}>Missing Revenue</span>
          </h2>

          <p className="cta-desc">
            Discuss your billing challenges with our experienced healthcare specialists. 
            We will conduct a 100% free, confidential audit of your current billing performance, 
            uncover hidden revenue leaks, and deliver an actionable revenue acceleration roadmap.
          </p>

          <div className="cta-buttons">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn btn-primary btn-lg"
              id="final-cta-book"
            >
              <Calendar size={18} aria-hidden="true" />
              <span>Book a Free Consultation</span>
            </button>

            <button
              type="button"
              onClick={onContactClick}
              className="btn btn-outline-white btn-lg"
              id="final-cta-contact"
            >
              <Phone size={18} aria-hidden="true" />
              <span>Contact Our Team</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="cta-guarantees" aria-label="Commitments">
            <div className="cta-guarantee-item">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>100% HIPAA Compliant &amp; Secure</span>
            </div>

            <div className="cta-guarantee-item">
              <CheckCircle size={18} aria-hidden="true" />
              <span>No Long-Term Lock-In Contracts</span>
            </div>

            <div className="cta-guarantee-item">
              <Clock size={18} aria-hidden="true" />
              <span>Completely Free Practice Audit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
