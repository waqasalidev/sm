import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, 
  Send, Calendar, ArrowRight, Building2, Headphones, Lock 
} from 'lucide-react';

export default function ContactPage({ onOpenConsultation, onOpenLogin, onShowToast }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Practice Administrator',
    email: '',
    phone: '',
    practice: '',
    specialty: 'Internal Medicine / Primary Care',
    service: 'Full Revenue Cycle Management',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Thank you! Your message and audit request have been received.', 'success');
    }
  };

  return (
    <div className="contact-page">
      {/* 1. Page Hero Banner */}
      <section className="page-hero" aria-label="Contact Us Header">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">Contact Us</span>
            </nav>

            <div className="section-eyebrow">
              <Phone size={14} className="text-teal" />
              <span>Get in Touch With Our Billing Specialists</span>
            </div>

            <h1 className="page-hero-title">
              Contact <span className="text-teal">StelleMed</span>
            </h1>

            <p className="page-hero-desc">
              Have questions about your claim denials, payer contracts, or credentialing? 
              Our medical billing consultants and tech engineers are ready to evaluate your clinical cash flow.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Contact Information Cards */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '40px 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', background: '#F8FBFC', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', color: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Direct Phone Line</div>
                <a href="tel:+15169797418" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', display: 'block', marginTop: '2px' }}>+1 (516) 979-7418</a>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Mon - Fri: 8:00 AM - 6:00 PM EST</div>
              </div>
            </div>

            <div style={{ padding: '20px', background: '#F8FBFC', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', color: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Email Helpdesk</div>
                <a href="mailto:info@stellemed.com" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', display: 'block', marginTop: '2px' }}>info@stellemed.com</a>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>24-hour response turnaround</div>
              </div>
            </div>

            <div style={{ padding: '20px', background: '#F8FBFC', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', color: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Nationwide Reach</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: '2px' }}>All 50 States</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Backed by StelleCloud &amp; Corvit</div>
              </div>
            </div>

            <div style={{ padding: '20px', background: '#F8FBFC', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', color: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Lock size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Provider Gateway</div>
                <button type="button" onClick={onOpenLogin} style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-teal)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'block', marginTop: '2px' }}>Client Portal &rarr;</button>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>24/7 EHR &amp; A/R Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Form & Why Us Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '40px', alignItems: 'flex-start' }}>
            {/* Form */}
            <div className="card" style={{ padding: '36px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '6px' }}>Send Us a Message</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                  Fill out the form below and our senior medical billing director will prepare a complimentary practice audit for your review.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Dr. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Role in Practice *</label>
                      <select 
                        className="form-select"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      >
                        <option>Practice Administrator</option>
                        <option>Physician / Practice Owner</option>
                        <option>Office Manager</option>
                        <option>Billing Manager</option>
                        <option>Other Executive</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Work Email *</label>
                      <input 
                        type="email" 
                        required 
                        className="form-input" 
                        placeholder="s.jenkins@apexhealth.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        className="form-input" 
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '14px' }}>
                    <div className="form-group">
                      <label className="form-label">Practice Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Apex Medical Group"
                        value={formData.practice}
                        onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Primary Specialty</label>
                      <select 
                        className="form-select"
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      >
                        <option>Internal Medicine / Primary Care</option>
                        <option>Cardiology &amp; Vascular</option>
                        <option>Orthopedics &amp; Sports Medicine</option>
                        <option>Behavioral &amp; Mental Health</option>
                        <option>Pediatrics</option>
                        <option>Surgery / ASC</option>
                        <option>Urgent Care</option>
                        <option>Other Specialty</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '14px' }}>
                    <label className="form-label">Service Interested In</label>
                    <select 
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option>Full Revenue Cycle Management (End-to-End)</option>
                      <option>Insurance &amp; Payer Services (Denials, Claims, Credentialing)</option>
                      <option>Patient &amp; Practice Services (Statements, Helpdesk, Self-Pay)</option>
                      <option>Technology &amp; Support (EHR Sync, StelleCloud™ Portal)</option>
                      <option>Comprehensive Practice Revenue Audit</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginTop: '14px' }}>
                    <label className="form-label">Practice Notes or Current Challenges</label>
                    <textarea 
                      className="form-textarea" 
                      rows={4} 
                      placeholder="Tell us about your biggest revenue challenges (e.g. claim denials, prior authorization delays, aging A/R balances)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <ShieldCheck size={14} className="text-teal" />
                      <span>HIPAA Compliant &amp; 100% Confidential</span>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">
                      <span>Send Message &amp; Request Audit</span>
                      <Send size={18} />
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '8px' }}>Message Sent Successfully!</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 20px' }}>
                    Thank you for contacting StelleMed. A senior medical billing specialist has received your inquiry and will reach out to schedule your discovery call within 24 hours.
                  </p>
                  <button type="button" onClick={() => setSubmitted(false)} className="btn btn-secondary">
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="card" style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-xl)', backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-sm)', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '16px' }}>What Happens Next?</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-teal)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8125rem', flexShrink: 0 }}>
                      1
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-navy)' }}>Initial Discovery Call</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '2px' }}>A 15-minute conversation with our billing architect to review your practice volume and specialties.</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-teal)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8125rem', flexShrink: 0 }}>
                      2
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-navy)' }}>Practice Revenue Audit</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '2px' }}>We analyze your recent claim denials, coding accuracy, and aging A/R to highlight exact lost dollars.</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-teal)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8125rem', flexShrink: 0 }}>
                      3
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-navy)' }}>Customized RCM Roadmap</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '2px' }}>Receive a tailored proposal with zero EHR migration downtime and transparent performance guarantees.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credentials Card */}
              <div style={{ padding: '24px', background: 'linear-gradient(135deg, #102C40 0%, #0A1B28 100%)', borderRadius: 'var(--radius-xl)', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38D4D8', fontWeight: 700, fontSize: '0.875rem', marginBottom: '8px' }}>
                  <ShieldCheck size={18} />
                  <span>Corvit &amp; StelleCloud Heritage</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#CBD5E1', lineHeight: '1.5', margin: 0 }}>
                  Over 25+ years delivering enterprise healthcare IT and cybersecurity nationwide. Certified AAPC/AHIMA medical billing coders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
