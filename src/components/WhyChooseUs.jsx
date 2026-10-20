import React from 'react';
import { 
  GraduationCap, UserCheck, ShieldCheck, BarChart4, 
  ArrowUpRight, HeartPulse, CheckCircle2 
} from 'lucide-react';

export default function WhyChooseUs({ onOpenConsultation }) {
  const features = [
    {
      icon: <GraduationCap size={26} />,
      title: 'Industry Expertise',
      description: 'Certified AAPC & AHIMA billing specialists who master the nuances of CPT, ICD-10, and payer-specific modifier guidelines for your clinical specialty.'
    },
    {
      icon: <UserCheck size={26} />,
      title: 'Dedicated Support',
      description: 'One assigned account manager who knows your practice inside and out. Direct phone and email access — zero frustrating ticket queues.'
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'Advanced Technology',
      description: 'Powered by StelleCloud™: automated claim scrubbers, 256-bit HIPAA compliance, seamless EHR synchronization, and 24/7 client portal access.'
    },
    {
      icon: <BarChart4 size={26} />,
      title: 'Transparent Reporting',
      description: 'Comprehensive monthly financial dashboards and quarterly performance reviews. Track every billed dollar, denial reason, and recovery milestone.'
    }
  ];

  return (
    <section id="why-us" className="section why-section" aria-label="Why Choose StelleMed Section">
      {/* Background Decorative Pattern & Glow */}
      <div className="why-bg-pattern" aria-hidden="true" />
      <div className="why-glow" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header">
          <div className="section-eyebrow dark-theme">
            <HeartPulse size={14} aria-hidden="true" />
            <span>The StelleMed Advantage</span>
          </div>
          <h2 className="section-title dark-theme">
            Your Trusted Partner in <span className="text-teal" style={{ color: '#38D4D8' }}>Medical Billing</span>
          </h2>
          <p className="section-desc dark-theme">
            We bridge clinical dedication with financial excellence. Here is why independent 
            physicians, surgical centers, and multi-specialty clinics choose StelleMed as their growth partner.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card">
              <div className="why-icon-box" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div 
          style={{ 
            marginTop: '56px',
            background: 'rgba(23, 154, 158, 0.12)',
            border: '1px solid rgba(56, 212, 216, 0.25)',
            borderRadius: 'var(--radius-xl)',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div 
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '50%', 
                background: '#179A9E', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#FFFFFF',
                flexShrink: 0
              }}
            >
              <CheckCircle2 size={22} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.0625rem', fontFamily: 'var(--font-heading)', marginBottom: '2px' }}>
                Zero Risk, No Long-Term Contracts
              </h4>
              <p style={{ color: '#A3B9CC', fontSize: '0.875rem' }}>
                Start with a simple month-to-month agreement. If we don’t elevate your collections, you’re never locked in.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="btn btn-primary"
            style={{ padding: '10px 22px' }}
          >
            <span>Request Practice Audit</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
