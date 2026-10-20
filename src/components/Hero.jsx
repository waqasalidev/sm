import React from 'react';
import { 
  ArrowRight, Calendar, TrendingUp, CheckCircle2, 
  Clock, ShieldAlert, Headphones, Sparkles, Award, ShieldCheck, HeartPulse
} from 'lucide-react';

export default function Hero({ onOpenConsultation, onExploreServices }) {
  return (
    <section id="home" className="hero-section" aria-label="Hero Section">
      {/* Background Decorative Blur Orbs */}
      <div className="hero-bg-accent" aria-hidden="true" />
      <div className="hero-bg-accent-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Content */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="section-eyebrow">
                <HeartPulse size={14} className="text-teal" aria-hidden="true" />
                <span>Keep Your Revenue's Heartbeat Strong</span>
              </span>
            </div>

            <h1 className="hero-heading">
              Medical Billing &amp; <br />
              <span className="gradient-text">Revenue Cycle Management</span>
            </h1>

            <p className="hero-description">
              StelleMed simplifies the revenue cycle for healthcare providers across the United States — from insurance claims to patient payments, so you can focus on patient care. One trusted partner for both billing and technology.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(23, 154, 158, 0.1)', borderRadius: '20px', color: 'var(--color-teal-dark)', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '24px' }}>
              <ShieldCheck size={16} />
              <span>Backed by Corvit &amp; StelleCloud (25+ years of tech experience)</span>
            </div>

            <div className="hero-actions">
              <button
                type="button"
                onClick={() => onOpenConsultation && onOpenConsultation('Hero Section')}
                className="btn btn-primary btn-lg"
                id="hero-find-revenue-cta"
              >
                <span>Let’s Find Your Missing Revenue</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="btn btn-secondary btn-lg"
                id="hero-explore-cta"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Three Trust Indicators: Derived from Official Booklet Commitments */}
            <div className="hero-trust-bar" aria-label="Commitment highlights">
              <div className="trust-item">
                <div className="trust-icon-box">
                  <Clock size={16} aria-hidden="true" />
                </div>
                <div className="trust-text">
                  <span className="trust-label">Instant Verifications</span>
                  <span className="trust-sublabel">Within seconds</span>
                </div>
              </div>

              <div className="trust-item">
                <div className="trust-icon-box">
                  <Award size={16} aria-hidden="true" />
                </div>
                <div className="trust-text">
                  <span className="trust-label">Rapid Claim Dispatch</span>
                  <span className="trust-sublabel">Within 24–48 hours</span>
                </div>
              </div>

              <div className="trust-item">
                <div className="trust-icon-box">
                  <TrendingUp size={16} aria-hidden="true" />
                </div>
                <div className="trust-text">
                  <span className="trust-label">Same-Day Posting</span>
                  <span className="trust-sublabel">Accurate ERA reconciliation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual with Layered Shapes & Floating Data Card */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-backdrop-shape" aria-hidden="true" />

              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt="Female physician smiling warmly in a modern healthcare clinic"
                className="hero-img"
                loading="eager"
                width="480"
                height="480"
              />

              {/* Floating Top Badge */}
              <div className="floating-badge-clean" aria-label="Clean Claim Rate Highlight">
                <Award size={16} aria-hidden="true" />
                <span>98% Clean Claim Rate</span>
              </div>

              {/* Floating Revenue Improvement Card */}
              <div className="floating-card-revenue" role="complementary" aria-label="Revenue improvement metric">
                <div className="revenue-badge-icon" aria-hidden="true">
                  <TrendingUp size={24} />
                </div>
                <div className="revenue-content">
                  <div className="revenue-rate">
                    25+ Years <span>Tech Heritage</span>
                  </div>
                  <span className="revenue-subtext">Backed by Corvit &amp; StelleCloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
