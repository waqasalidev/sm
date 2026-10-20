import React, { useState } from 'react';
import { 
  ClipboardCheck, Settings2, PlayCircle, BarChart3, 
  ArrowRight, ShieldCheck, Sparkles 
} from 'lucide-react';

export default function HowItWorks({ onOpenConsultation }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Consultation & Practice Audit',
      subtitle: 'Understand practice needs & goals',
      desc: 'We conduct a comprehensive 360-degree review of your current billing workflows, historical denial reasons, and aging accounts receivable — with zero cost or obligation.',
      icon: <ClipboardCheck size={20} />,
      detail: 'Identify hidden revenue leaks and uncover immediate collection improvement opportunities within 48 hours.'
    },
    {
      number: '02',
      title: 'Seamless Onboarding & Integration',
      subtitle: 'Complete setup & EHR integration',
      desc: 'Our technical team integrates with your existing EHR/practice management system without disrupting patient scheduling or billing operations.',
      icon: <Settings2 size={20} />,
      detail: 'Direct clearinghouse enrollment, fee schedule alignment, and front-desk team coordination handled entirely by us.'
    },
    {
      number: '03',
      title: 'Precision Execution & Daily Scrubbing',
      subtitle: 'Manage billing & claims workflows',
      desc: 'Certified medical coders review encounters daily, applying specialty-specific scrubbing rules to submit clean claims within 24 to 48 hours of service.',
      icon: <PlayCircle size={20} />,
      detail: 'Aggressive denial management, underpayment audits, and immediate appeals written by clinical coding specialists.'
    },
    {
      number: '04',
      title: 'Measurable Results & Total Transparency',
      subtitle: 'Track payments & revenue performance',
      desc: 'Monitor real-time cash flow, collection ratios, and A/R aging through your 24/7 client portal. Review executive monthly KPI reports with your dedicated manager.',
      icon: <BarChart3 size={20} />,
      detail: 'Practices see an average 24% revenue improvement and a reduction in A/R days from 52 down to under 28 days.'
    }
  ];

  return (
    <section id="how-it-works" className="section how-section" aria-label="How It Works Process Section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} className="text-teal" aria-hidden="true" />
            <span>Proven 4-Step Methodology</span>
          </div>
          <h2 className="section-title">
            A Simple Process for <span className="text-teal">Better Revenue</span>
          </h2>
          <p className="section-desc">
            Transitioning your medical billing should never be complicated. Our structured 
            onboarding gets your practice up, running, and collecting faster without operational disruption.
          </p>
        </div>

        <div className="how-layout">
          {/* Left Column: Visual with Doctor and Live Badge */}
          <div className="how-visual-wrapper">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
              alt="Medical team reviewing clinical billing charts on digital tablets"
              className="how-image"
              loading="lazy"
            />

            {/* Floating Live Badge */}
            <div className="how-floating-badge" role="complementary" aria-label="Quick onboarding timeline">
              <div className="how-badge-number">7-10</div>
              <div className="how-badge-text">
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9375rem' }}>
                  Days Rapid Onboarding
                </strong>
                Smooth EHR transition with zero downtime for your clinic
              </div>
            </div>
          </div>

          {/* Right Column: 4 Connected Steps */}
          <div className="how-steps-list">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="how-step-item"
                onMouseEnter={() => setActiveStep(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div 
                  className="step-circle" 
                  aria-hidden="true"
                  style={{
                    backgroundColor: activeStep === idx ? 'var(--color-teal)' : 'var(--color-white)',
                    color: activeStep === idx ? 'var(--color-white)' : 'var(--color-teal)'
                  }}
                >
                  {step.number}
                </div>

                <div 
                  className="step-content"
                  style={{
                    borderColor: activeStep === idx ? 'var(--color-teal)' : 'var(--border-light)',
                    boxShadow: activeStep === idx ? 'var(--shadow-md)' : 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <h3 className="step-title">{step.title}</h3>
                    <span 
                      style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        color: 'var(--color-teal)',
                        backgroundColor: 'var(--color-teal-light)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="step-desc">{step.desc}</p>
                  
                  <div 
                    style={{ 
                      marginTop: '10px', 
                      fontSize: '0.8125rem', 
                      color: 'var(--color-navy)', 
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <ShieldCheck size={14} style={{ color: 'var(--color-teal)' }} />
                    <span>{step.detail}</span>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ paddingLeft: '76px', marginTop: '12px' }}>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn btn-primary"
              >
                <span>Start Step 1: Free Practice Audit</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
