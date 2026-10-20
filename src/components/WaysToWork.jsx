import React from 'react';
import { Layers, CheckCircle2, ArrowRight, Sparkles, Users, UserCheck, Wrench } from 'lucide-react';

export default function WaysToWork({ onOpenConsultation }) {
  const plans = [
    {
      id: 'full-rcm',
      title: 'Full Revenue Cycle Management',
      badge: 'Comprehensive',
      icon: <Sparkles size={22} style={{ color: 'var(--color-teal)' }} />,
      bestFor: 'Practices that want to hand off billing completely',
      whatYouGet: 'Everything from eligibility to patient payments, with a dedicated account manager.',
      features: [
        'End-to-end payer claim adjudication',
        'Patient invoicing & billing customer care',
        'Dedicated senior account manager',
        'Continuous denial management & appeals',
        'Monthly executive performance review'
      ],
      popular: true
    },
    {
      id: 'individual',
      title: 'Individual Services',
      badge: 'Modular & Flexible',
      icon: <Layers size={22} style={{ color: 'var(--color-teal)' }} />,
      bestFor: 'Practices with in-house billing that need help in one area',
      whatYouGet: 'Pick any service: credentialing, coding, denials, A/R follow-up and more.',
      features: [
        'Pay only for the exact service you need',
        'Provider credentialing & payer enrollment',
        'Certified medical coding audits',
        'Clearinghouse submission & scrubbing',
        'Aging A/R recovery project teams'
      ],
      popular: false
    },
    {
      id: 'dedicated-team',
      title: 'Dedicated Billing Team',
      badge: 'Enterprise Extension',
      icon: <Users size={22} style={{ color: 'var(--color-teal)' }} />,
      bestFor: 'Larger practices and groups',
      whatYouGet: 'A StelleMed team working in your systems as an extension of your staff during your business hours.',
      features: [
        'Operates directly inside your current EHR/PM',
        'Aligned seamlessly to your clinic time zones',
        'Dedicated team leader & daily productivity reports',
        'Eliminates staffing turnover and overhead',
        'Scalable capacity as your group expands'
      ],
      popular: false
    },
    {
      id: 'one-time',
      title: 'One-Time Projects',
      badge: 'Targeted Remediation',
      icon: <Wrench size={22} style={{ color: 'var(--color-teal)' }} />,
      bestFor: 'A specific problem to solve',
      whatYouGet: 'Old A/R clean-up, credentialing new providers, coding review, new-practice setup.',
      features: [
        'Legacy aging A/R balance recovery',
        'New provider on-boarding credentialing',
        'Comprehensive clinical coding documentation review',
        'Billing system setup & fee schedule auditing',
        'No long-term contract lock-in'
      ],
      popular: false
    }
  ];

  return (
    <section className="section" id="ways-to-work" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <Layers size={14} className="text-teal" />
            <span>Engagement Models</span>
          </div>
          <h2 className="section-title">
            Ways to <span className="text-teal">Work With Us</span>
          </h2>
          <p className="section-desc">
            Care for every practice, at every scale. Choose how you want to partner with StelleMed.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '36px'
          }}
        >
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className="card"
              style={{
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#FFFFFF',
                border: plan.popular ? '2px solid var(--color-teal)' : '1px solid var(--border-color)',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: plan.popular ? 'var(--shadow-md)' : 'var(--shadow-sm)'
              }}
            >
              {plan.popular && (
                <span 
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '24px',
                    background: 'var(--color-teal)',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  Most Popular
                </span>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {plan.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal)', textTransform: 'uppercase' }}>
                    {plan.badge}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', margin: 0, fontWeight: 700, lineHeight: '1.3' }}>
                    {plan.title}
                  </h3>
                </div>
              </div>

              <div style={{ background: '#F8FBFC', padding: '12px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-navy)', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Best For:
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {plan.bestFor}
                </div>
              </div>

              <div style={{ marginBottom: '20px', flexGrow: 1 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-navy)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  What You Get:
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.5', margin: '0 0 16px 0', fontWeight: 500 }}>
                  {plan.whatYouGet}
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0, listStyle: 'none' }}>
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--color-teal)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultation && onOpenConsultation(`Engagement Plan: ${plan.title}`)}
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', marginTop: 'auto' }}
              >
                <span>Select Engagement</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
