import React from 'react';
import { 
  CheckCircle, ArrowRight, Stethoscope, FileCheck, 
  Code, Send, RefreshCw, DollarSign, Building, FileText, 
  CreditCard, Award 
} from 'lucide-react';

export default function RevenueCycleWorkflow({ onOpenConsultation }) {
  const insuranceSteps = [
    { num: '01', title: 'Patient Visit', desc: 'Clinical encounter and encounter documentation captured.' },
    { num: '02', title: 'Eligibility & Authorization', desc: 'Real-time coverage verification & prior auth on file.' },
    { num: '03', title: 'Medical Coding', desc: 'Certified AAPC/AHIMA CPT, ICD-10, and modifier coding.' },
    { num: '04', title: 'Claim Submission', desc: 'Electronic scrubbing and EDI 837 dispatch within 24–48h.' },
    { num: '05', title: 'Denials & Appeals', desc: 'Fast root-cause investigation and aggressive clinical appeals.' },
    { num: '06', title: 'Payer Payment', desc: 'Automated ERA (835) electronic remittance and auto-posting.' },
    { num: '07', title: 'Practice Paid', desc: 'Funds deposited cleanly into practice bank accounts.' }
  ];

  const patientSteps = [
    { num: '01', title: 'Patient Visit', desc: 'Point-of-service intake and transparent Good Faith Estimate.' },
    { num: '02', title: 'Patient Statement', desc: 'Clear digital SMS & paperless statements generated.' },
    { num: '03', title: 'Payment Plan / Collection', desc: 'Customizable recurring payment schedules & balance counseling.' },
    { num: '04', title: 'Patient Payment', desc: 'Secure 1-click online payment and portal processing.' },
    { num: '05', title: 'Practice Paid', desc: 'Reconciled balances and maximized self-pay recovery.' }
  ];

  return (
    <section className="section" id="how-we-manage" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <Award size={14} className="text-teal" />
            <span>Proven Workflow Sequences</span>
          </div>
          <h2 className="section-title">
            How We Manage the <span className="text-teal">Revenue Cycle</span>
          </h2>
          <p className="section-desc">
            We operate two distinct, synchronized revenue workflows to guarantee maximum reimbursement from both insurance carriers and patients.
          </p>
        </div>

        {/* Workflow 1: Insurance / Payer Revenue Cycle */}
        <div style={{ marginBottom: '50px' }}>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              marginBottom: '20px',
              padding: '12px 18px',
              background: 'var(--bg-page)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--color-teal)'
            }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-teal)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
              +
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', margin: 0, fontWeight: 700 }}>
                Insurance / Payer Revenue Cycle
              </h3>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                7-Step Adjudication &amp; Payer Reimbursement Sequence
              </span>
            </div>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
              gap: '12px',
              position: 'relative'
            }}
          >
            {insuranceSteps.map((step, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#F8FBFC',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-teal)' }}>
                    STEP {step.num}
                  </span>
                  <CheckCircle size={14} style={{ color: 'var(--color-teal)' }} />
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '6px' }}>
                  {step.title}
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow 2: Patient Billing Revenue Cycle */}
        <div>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              marginBottom: '20px',
              padding: '12px 18px',
              background: 'var(--bg-page)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid #7C3AED'
            }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#7C3AED', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
              ★
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', margin: 0, fontWeight: 700 }}>
                Patient Billing Revenue Cycle
              </h3>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                5-Step Patient Financial Experience &amp; Self-Pay Recovery Sequence
              </span>
            </div>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '12px' 
            }}
          >
            {patientSteps.map((step, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FDFBFF',
                  border: '1px solid #E9D5FF',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED' }}>
                    STEP {step.num}
                  </span>
                  <CheckCircle size={14} style={{ color: '#7C3AED' }} />
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '6px' }}>
                  {step.title}
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.4', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
