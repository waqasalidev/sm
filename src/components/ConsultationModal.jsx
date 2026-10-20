import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, ShieldCheck, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConsultationModal({ isOpen, onClose, prefilledService, onShowToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    role: 'Practice Administrator',
    practiceName: '',
    email: '',
    phone: '',
    specialty: 'Internal Medicine',
    monthlyVolume: '$100k - $250k',
    notes: '',
    preferredDate: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        notes: `Interested in: ${prefilledService}`
      }));
    }
  }, [prefilledService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Trigger joyful celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore if canvas not supported
      }

      if (onShowToast) {
        onShowToast('Consultation request received! Our senior billing specialist will contact you within 24 hours.', 'success');
      }
    }, 900);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="consultation-modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="badge-pill badge-teal" style={{ marginBottom: '6px', alignSelf: 'flex-start' }}>
              Complimentary &bull; No Obligation
            </span>
            <h3 id="consultation-modal-title" className="modal-title">
              {submitted ? 'Consultation Booked!' : 'Book Your Free Practice Audit'}
            </h3>
            <span className="modal-subtitle">
              {submitted ? 'We have received your practice details' : 'Uncover hidden revenue leaks and optimize your billing workflows'}
            </span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close consultation modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ECFDF5', 
                  color: '#10B981', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 18px' 
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--color-navy)', marginBottom: '8px' }}>
                Thank You, {formData.fullName || 'Doctor'}!
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                Your confidential practice audit request for <strong>{formData.practiceName || 'your practice'}</strong> has been scheduled. A dedicated StelleMed billing director will review your specialty requirements and reach out via {formData.email || 'email'}.
              </p>
              
              <div style={{ background: '#F8FBFC', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', textAlign: 'left', fontSize: '0.875rem' }}>
                <div style={{ color: 'var(--color-navy)', fontWeight: 600, marginBottom: '4px' }}>What happens next?</div>
                <div style={{ color: 'var(--text-secondary)' }}>1. We run preliminary payer fee-schedule benchmarks for {formData.specialty}.</div>
                <div style={{ color: 'var(--text-secondary)' }}>2. We prepare an actionable denial prevention report for your practice.</div>
                <div style={{ color: 'var(--text-secondary)' }}>3. Direct 20-minute executive briefing with zero sales pressure.</div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
                style={{ width: '100%' }}
              >
                Close &amp; Return to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Dr. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="role" className="form-label">Professional Role</label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="form-select"
                  >
                    <option value="Physician / Practice Owner">Physician / Practice Owner</option>
                    <option value="Practice Administrator">Practice Administrator</option>
                    <option value="Billing Director">Billing Director</option>
                    <option value="Office Manager">Office Manager</option>
                    <option value="Chief Medical Officer">Chief Medical Officer</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="practiceName" className="form-label">Practice / Clinic Name *</label>
                  <input
                    id="practiceName"
                    type="text"
                    required
                    placeholder="Apex Health Associates"
                    value={formData.practiceName}
                    onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="specialty" className="form-label">Clinical Specialty</label>
                  <select
                    id="specialty"
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="form-select"
                  >
                    <option value="Internal Medicine">Internal Medicine / Primary Care</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Orthopedic Surgery">Orthopedic Surgery</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Mental & Behavioral Health">Mental &amp; Behavioral Health</option>
                    <option value="General Surgery / ASC">General Surgery / ASC</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Multi-Specialty">Multi-Specialty Clinic</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Work Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="sjenkins@apexhealth.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="monthlyVolume" className="form-label">Monthly Collections Volume</label>
                  <select
                    id="monthlyVolume"
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="form-select"
                  >
                    <option value="Under $50k">Under $50,000 / mo</option>
                    <option value="$50k - $100k">$50,000 - $100,000 / mo</option>
                    <option value="$100k - $250k">$100,000 - $250,000 / mo</option>
                    <option value="$250k - $500k">$250,000 - $500,000 / mo</option>
                    <option value="$500k+">$500,000+ / mo</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferredDate" className="form-label">Preferred Audit Date</label>
                  <input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes" className="form-label">Billing Challenges or Questions</label>
                <textarea
                  id="notes"
                  rows="2"
                  placeholder="Tell us about high denial rates, A/R backlogs, or specific payer bottlenecks..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-teal)' }} />
                <span>Your practice information is kept 100% confidential under HIPAA strict privacy guidelines.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px' }}
              >
                {loading ? (
                  <span>Processing Audit Request...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Confirm Free Consultation &amp; Audit</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
