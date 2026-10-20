import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileCheck2, Users, Cpu, ArrowRight, Check, 
  Sparkles, ExternalLink, ShieldCheck, Stethoscope, ChevronRight
} from 'lucide-react';
import ServiceModal from './ServiceModal';

export default function Services({ onOpenConsultation }) {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 'insurance-payer',
      routePath: '/services/insurance-payer',
      badge: 'Core Insurance Engine',
      themeClass: 'theme-teal',
      icon: <FileCheck2 size={28} />,
      title: 'Insurance & Payer Services',
      description: 'End-to-end payer management, insurance eligibility verifications, coding audits, credentialing, and fast-track claim submission with aggressive denial appeals.',
      detailedDescription: 'Our insurance & payer engine ensures your practice never leaks revenue due to coding discrepancies or payer bottlenecks. We take full responsibility for credentialing maintenance, pre-authorizations, electronic claim submission, clearinghouse scrubs, and proactive A/R follow-ups.',
      features: [
        { title: 'Insurance Verification', detail: 'Real-time 270/271 eligibility verification prior to patient visits to avoid unbillable encounters.' },
        { title: 'Provider Credentialing', detail: 'Complete enrollment and re-attestation across Medicare, Medicaid, and 50+ commercial payers.' },
        { title: 'Payer Enrollment & Contracting', detail: 'Fee-schedule optimization and provider network contract negotiations.' },
        { title: 'Claims & Reimbursement Support', detail: 'Aggressive denial tracking, underpayment recovery, and clinical appeal writing.' }
      ]
    },
    {
      id: 'patient-practice',
      routePath: '/services/patient-practice',
      badge: 'Front-to-Back Office',
      themeClass: 'theme-blue',
      icon: <Users size={28} />,
      title: 'Patient & Practice Services',
      description: 'Transparent patient billing, front-desk verification workflows, friendly self-pay recovery, flexible payment plans, and practice administrative support.',
      detailedDescription: 'Patient financial responsibility now makes up over 30% of total practice collections. StelleMed bridges the gap between patient care and patient billing with empathetic, compliant, and prompt patient communication that preserves doctor-patient trust.',
      features: [
        { title: 'Patient Billing & Statements', detail: 'Clean, digital and print statements with simple one-click online payment options.' },
        { title: 'Eligibility Verification', detail: 'Detailed co-pay, deductible, and out-of-pocket estimations prior to treatment.' },
        { title: 'Practice Administration', detail: 'Front-desk staff billing training, appointment check-in billing guidance, and intake review.' },
        { title: 'Revenue Cycle Support', detail: 'Dedicated patient balance follow-up, payment installment plans, and dispute resolution.' }
      ]
    },
    {
      id: 'technology-support',
      routePath: '/services/technology-support',
      badge: 'Powered by StelleCloud™',
      themeClass: 'theme-lavender',
      icon: <Cpu size={28} />,
      title: 'Technology & Support',
      description: 'State-of-the-art healthcare technology, automated claim scrubbing engines, real-time executive financial dashboards, EHR integrations, and dedicated technical support.',
      detailedDescription: 'StelleMed is built on StelleCloud™ infrastructure — a dedicated, 100% HIPAA-compliant ecosystem that interfaces seamlessly with major EHRs like Epic, Athenahealth, eClinicalWorks, Kareo, NextGen, and AdvancedMD without disrupting your staff’s workflow.',
      features: [
        { title: 'Healthcare Technology Solutions', detail: 'Bi-directional EHR/PM API integrations and cloud billing synchronization.' },
        { title: 'Workflow Automation', detail: 'AI-assisted claim rule verification that catches billing errors before payer dispatch.' },
        { title: 'Reporting & Analytics', detail: 'Executive monthly KPI decks, denial heatmaps, and quarterly financial reviews.' },
        { title: 'Dedicated Technical Support', detail: 'Direct access to your assigned account manager and IT support engineers.' }
      ]
    }
  ];

  return (
    <section id="services" className="section services-section" aria-label="Services Section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Stethoscope size={14} className="text-teal" aria-hidden="true" />
            <span>Healthcare Billing Expertise</span>
          </div>
          <h2 className="section-title">
            Comprehensive Healthcare <span className="text-teal">Billing Solutions</span>
          </h2>
          <p className="section-desc">
            We deliver the full spectrum of revenue cycle management — combining certified billing 
            specialists, payer relationships, and modern software to maximize your practice’s financial health.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${service.themeClass}`}
              id={`service-card-${service.id}`}
            >
              <div className="service-header">
                <div className="service-icon-wrapper" aria-hidden="true">
                  {service.icon}
                </div>
                <span className="service-badge">{service.badge}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              <div className="service-feature-list">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="service-feature-item">
                    <span className="feature-check-icon" aria-hidden="true">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 'auto', paddingTop: '16px' }}>
                <button
                  type="button"
                  className="service-btn-learn"
                  style={{ flex: 1 }}
                  onClick={() => setSelectedService(service)}
                  aria-label={`Preview details of ${service.title}`}
                >
                  <span>Quick View</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </button>

                <Link
                  to={service.routePath}
                  className="btn btn-secondary"
                  style={{ 
                    padding: '10px 14px', 
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-md)',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  aria-label={`Explore full dedicated page for ${service.title}`}
                >
                  <span>Full Page</span>
                  <ChevronRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner linking to all services */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            to="/services"
            className="btn btn-secondary btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <Sparkles size={18} className="text-teal" />
            <span>View All Services &amp; Specializations</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectServiceForConsultation={(serviceTitle) => {
            setSelectedService(null);
            onOpenConsultation(serviceTitle);
          }}
        />
      )}
    </section>
  );
}
