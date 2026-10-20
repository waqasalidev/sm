import React from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';

export default function PolicyModal({ type, onClose }) {
  if (!type) return null;

  const getPolicyContent = () => {
    switch (type) {
      case 'hipaa':
        return {
          title: 'HIPAA Compliance & Data Security Commitment',
          icon: <ShieldCheck size={24} style={{ color: 'var(--color-teal)' }} />,
          sections: [
            {
              heading: 'Business Associate Agreements (BAA)',
              text: 'StelleMed signs formal Business Associate Agreements with all covered healthcare entities prior to initiating any revenue cycle or credentialing services, adhering strictly to 45 CFR § 164.502(e) and § 164.504(e).'
            },
            {
              heading: 'Technical Safeguards & Infrastructure',
              text: 'Our StelleCloud™ environment utilizes NIST-recommended AES-256 bit encryption at rest and TLS 1.3 encryption in transit. Role-based access controls, automatic session timeouts, and granular audit trail logs monitor all Protected Health Information (PHI).'
            },
            {
              heading: 'Physical & Administrative Protocols',
              text: 'All billing personnel undergo annual mandatory HIPAA training, background checks, and non-disclosure compliance. Workstations operate on secure, isolated networks with hardware MFA enforcement.'
            }
          ]
        };
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <Lock size={24} style={{ color: 'var(--color-teal)' }} />,
          sections: [
            {
              heading: 'Information We Collect',
              text: 'We collect information provided directly by healthcare providers and practice managers when scheduling consultations, requesting practice billing audits, or contacting our support team.'
            },
            {
              heading: 'Use of Information',
              text: 'Collected practice information is strictly used to deliver medical billing analysis, perform credentialing assessments, and communicate service updates. We never sell, rent, or trade healthcare provider data.'
            },
            {
              heading: 'Data Retention & Safeguards',
              text: 'We retain practice audit records only as long as necessary to fulfill business advisory purposes or comply with statutory US medical record retention regulations.'
            }
          ]
        };
      case 'terms':
      default:
        return {
          title: 'Terms & Conditions of Service',
          icon: <FileText size={24} style={{ color: 'var(--color-teal)' }} />,
          sections: [
            {
              heading: 'Engagement Scope',
              text: 'StelleMed provides medical billing, revenue cycle management, provider credentialing, and healthcare technology integration services based on agreed service level metrics and client engagement scopes.'
            },
            {
              heading: 'Practice Obligations',
              text: 'Client practices are responsible for providing complete clinical encounter records, accurate patient demographic details, and appropriate physician sign-offs required for lawful claim adjudication.'
            },
            {
              heading: 'No Long-Term Penalty Cancellation',
              text: 'Unless otherwise stipulated in a customized enterprise engagement, StelleMed standard services operate on month-to-month agreements cancellable with standard 30-day written notification.'
            }
          ]
        };
    }
  };

  const content = getPolicyContent();

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="policy-modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {content.icon}
            <div>
              <h3 id="policy-modal-title" className="modal-title" style={{ fontSize: '1.25rem' }}>
                {content.title}
              </h3>
              <span className="modal-subtitle">StelleMed Healthcare Legal &amp; Compliance</span>
            </div>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Policy Modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {content.sections.map((sec, idx) => (
            <div key={idx}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--color-navy)', marginBottom: '6px' }}>
                {sec.heading}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {sec.text}
              </p>
            </div>
          ))}

          <div style={{ marginTop: '12px', borderTop: '1px solid var(--border-light)', paddingTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
