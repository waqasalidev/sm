import React from 'react';
import { 
  CheckCircle2, UserCheck, FileKey, FileCheck2, 
  Cpu, Sliders, CalendarCheck, ShieldCheck 
} from 'lucide-react';

export default function SixChecks() {
  const checks = [
    {
      icon: <UserCheck size={24} style={{ color: 'var(--color-teal)' }} />,
      title: 'Patient Details Complete & Correct',
      desc: 'Demographic fields, subscriber IDs, relationship codes, and group numbers verified 100% error-free.'
    },
    {
      icon: <CalendarCheck size={24} style={{ color: 'var(--color-teal)' }} />,
      title: 'Coverage Confirmed for Date of Service',
      desc: 'Active policy status, effective date windows, co-pays, and deductibles verified before batch generation.'
    },
    {
      icon: <FileKey size={24} style={{ color: 'var(--color-teal)' }} />,
      title: 'Prior Authorization on File Where Required',
      desc: 'Auth reference numbers logged and attached directly to billing lines for required clinical encounters.'
    },
    {
      icon: <FileCheck2 size={24} style={{ color: 'var(--color-teal)' }} />,
      title: 'Codes Match the Documentation',
      desc: 'CPT, ICD-10-CM, and HCPCS modifiers aligned accurately with clinical notes to justify medical necessity.'
    },
    {
      icon: <Cpu size={24} style={{ color: 'var(--color-teal)' }} />,
      title: 'Claim Scrubber Edits Passed',
      desc: 'Evaluated through StelleCloud™ rules engine to catch NCCI bundle conflicts and modifier errors.'
    },
    {
      icon: <Sliders size={24} style={{ color: 'var(--color-teal)' }} />,
      title: 'Payer-Specific Rules Applied',
      desc: 'Carrier-specific billing guidelines applied so claims meet local clearinghouse requirements first pass.'
    }
  ];

  return (
    <section className="section" id="six-checks" style={{ backgroundColor: '#F8FBFC' }}>
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <ShieldCheck size={14} className="text-teal" />
            <span>Pre-Submission Quality Assurance</span>
          </div>
          <h2 className="section-title">
            Six Checks Before <span className="text-teal">Every Claim Goes Out</span>
          </h2>
          <p className="section-desc">
            To protect your revenue and prevent delays, every single claim is evaluated against six vital quality gates before clearinghouse dispatch.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginTop: '36px'
          }}
        >
          {checks.map((check, idx) => (
            <div 
              key={idx}
              className="card"
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-color)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-teal-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {check.icon}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-teal)', letterSpacing: '0.5px' }}>
                    CHECK 0{idx + 1}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--color-navy)', fontWeight: 700, margin: '0 0 6px 0' }}>
                  {check.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                  {check.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
