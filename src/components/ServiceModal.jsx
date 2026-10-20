import React from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

export default function ServiceModal({ service, onClose, onSelectServiceForConsultation }) {
  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="badge-pill badge-teal" style={{ marginBottom: '6px', alignSelf: 'flex-start' }}>
              {service.badge}
            </span>
            <h3 id="service-modal-title" className="modal-title">{service.title}</h3>
            <span className="modal-subtitle">Service Overview &amp; Practice Deliverables</span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Service Details"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '24px' }}>
            {service.detailedDescription || service.description}
          </p>

          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.0625rem', color: 'var(--color-navy)', marginBottom: '16px' }}>
            What’s Included in this Solution:
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            {service.features.map((feature, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px',
                  background: '#F8FBFC',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ color: 'var(--color-teal)', flexShrink: 0, marginTop: '2px' }}>
                  <CheckCircle size={18} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9375rem', color: 'var(--color-navy)', marginBottom: '2px' }}>
                    {feature.title || feature}
                  </strong>
                  {feature.detail && (
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                      {feature.detail}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div 
            style={{ 
              background: 'linear-gradient(135deg, #EAF8F8 0%, #F1F6F9 100%)', 
              padding: '16px 18px', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(23, 154, 158, 0.2)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}
          >
            <ShieldCheck size={28} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-navy)', lineHeight: 1.5 }}>
              <strong>StelleMed Quality Assurance:</strong> Every claim and submission is cross-checked through multi-tier rule engines and certified AAPC/AHIMA billing specialists before electronic dispatch.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {service.routePath && (
              <Link
                to={service.routePath}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '12px', justifyContent: 'center', textDecoration: 'none' }}
                onClick={onClose}
              >
                <span>View Full Page</span>
                <ExternalLink size={16} />
              </Link>
            )}

            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px', justifyContent: 'center' }}
              onClick={() => {
                onClose();
                onSelectServiceForConsultation(service.title);
              }}
            >
              <span>Book Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
