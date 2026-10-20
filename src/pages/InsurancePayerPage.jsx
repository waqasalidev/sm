import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileCheck2, ShieldCheck, CheckCircle2, ArrowRight, 
  Clock, TrendingUp, Award, Calendar, ChevronRight,
  UserCheck, FileKey, Stethoscope, Send, DollarSign,
  RefreshCw, AlertCircle, FileSearch, CheckCircle
} from 'lucide-react';
import service1Img from '../assets/service1.jpg';
import SixChecks from '../components/SixChecks';

export default function InsurancePayerPage({ onOpenConsultation }) {
  // All 10 Official Services from Page 3 of StelleMed Booklet
  const officialServices = [
    {
      title: 'Eligibility & Benefits Verification',
      desc: 'Verify patient active coverage, primary/secondary policy status, co-pays, deductibles, and pre-existing condition rules prior to scheduled visits to prevent claim rejections.',
      bullets: [
        'Real-time automated clearinghouse inquiries',
        'Detailed breakdown of copays, co-insurance, and out-of-pocket maximums',
        'Elimination of inactive insurance write-offs at the front desk'
      ]
    },
    {
      title: 'Prior Authorization',
      desc: 'Securing necessary clinical approvals and precertifications from insurance payers before diagnostics, specialty consultations, procedures, and surgeries take place.',
      bullets: [
        'Submission of clinical documentation and medical necessity justifications',
        'Payer follow-up and turnaround tracking to prevent treatment delays',
        'Direct tracking of approval numbers matched to billing claims'
      ]
    },
    {
      title: 'Provider Credentialing & Payer Enrollment',
      desc: 'Comprehensive enrollment and primary source verification with Medicare, Medicaid, and commercial health insurance networks to guarantee billing privileges.',
      bullets: [
        'CAQH profile setup, maintenance, and periodic re-attestation',
        'Commercial and government payer contract applications',
        'Continuous tracking of expiring licenses, DEA, and board certifications'
      ]
    },
    {
      title: 'Medical Coding',
      desc: 'Certified AAPC/AHIMA medical coders assign precise ICD-10-CM, CPT, and HCPCS Level II codes and appropriate modifiers directly from provider documentation.',
      bullets: [
        'Accurate code assignment reflecting clinical diagnosis and care provided',
        'Correct modifier utilization (e.g. 25, 59, 76) to prevent bundling denials',
        'Specialty-specific chart reviews and clinical compliance auditing'
      ]
    },
    {
      title: 'Charge Entry & Claim Creation',
      desc: 'Accurate and rapid entry of patient encounters, fee schedules, diagnostic pairings, and clinical billing charges into the practice management system.',
      bullets: [
        'Verification of dates of service, rendering provider, and facility NPI',
        'Validation of billed amounts against practice fee schedules',
        'Same-day encounter charge entry to reduce lag time'
      ]
    },
    {
      title: 'Claim Submission',
      desc: 'Electronic batch scrub and dispatch of 837P and 837I clearinghouse claim files within 24–48 hours of clinical care.',
      bullets: [
        'Direct clearinghouse transmission across 50+ payer connections',
        'Electronic validation against 3M+ dynamic payer rule edits',
        'Same-day resolution of clearinghouse front-end format errors'
      ]
    },
    {
      title: 'Payment Posting',
      desc: 'Daily posting of Electronic Remittance Advices (ERAs) and manual Explanation of Benefits (EOBs) payments, contractual adjustments, and copays.',
      bullets: [
        'Same-day reconciliation of electronic bank deposits against posted funds',
        'Line-item posting of allowable amounts, deductibles, and copayments',
        'Accurate secondary and tertiary payer claim balance rollover'
      ]
    },
    {
      title: 'Remittance Reconciliation',
      desc: 'Auditing payer remits against contracted fee schedules to catch underpayments, silent contractual recoupments, and incorrect allowable calculations.',
      bullets: [
        'Automated detection of payer payment discrepancies',
        'Audit of bundled line-item denials and contract violations',
        'Immediate escalation of incorrect payer fee reductions'
      ]
    },
    {
      title: 'Denial Management & Appeals',
      desc: 'Aggressive categorization, root-cause investigation, correction, and formal clinical appeal submission for all denied or rejected claims.',
      bullets: [
        'Never writing off legitimate clinical revenue',
        'Clinical appeal letters with medical record documentation',
        'Payer denial tracking and prevention of repetitive billing errors'
      ]
    },
    {
      title: 'Insurance A/R Follow-Up',
      desc: 'Systematic aging accounts receivable tracking at 30, 60, 90, and 120+ days to hold insurance carriers accountable until full reimbursement is recovered.',
      bullets: [
        'Dedicated work-queues prioritizing high-dollar and aged claims',
        'Direct phone escalations with payer supervisors and claims adjusters',
        'Resolution of unpaid, stalled, or lost insurance balances'
      ]
    }
  ];

  const workflowSteps = [
    'Patient Visit',
    'Eligibility & Authorization',
    'Medical Coding',
    'Claim Submission',
    'Denials & Appeals',
    'Payer Payment',
    'Practice Paid'
  ];

  return (
    <div className="service-page-wrapper">
      {/* 1. Page Hero Banner */}
      <section className="page-hero" aria-label="Insurance and Payer Services Header">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <Link to="/services">Services</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">Insurance &amp; Payer Services</span>
            </nav>

            <div className="section-eyebrow">
              <FileCheck2 size={14} className="text-teal" />
              <span>Official Booklet Services</span>
            </div>

            <h1 className="page-hero-title">
              Insurance &amp; <span className="text-teal">Payer Services</span>
            </h1>

            <p className="page-hero-desc">
              From upfront eligibility verification to clean claim submission, certified coding, aggressive appeals, and aged A/R recovery — we manage the complete payer revenue cycle.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onOpenConsultation('Insurance & Payer Services Audit')}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={18} />
                <span>Request Payer Billing Audit</span>
              </button>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>Let’s Find Your Missing Revenue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official Revenue Cycle Sequence Banner */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '40px 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-teal)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Official Booklet Workflow
            </span>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', margin: '4px 0 0 0' }}>
              Insurance / Payer Revenue Cycle Sequence
            </h2>
          </div>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '10px' 
            }}
          >
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div 
                  style={{
                    background: '#F8FBFC',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--color-navy)'
                  }}
                >
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--color-teal)', color: '#FFFFFF', fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <ChevronRight size={18} style={{ color: 'var(--color-teal)' }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Content: 10 Official Services Grid */}
      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          <div className="service-detail-grid">
            {/* Left: 10 Detailed Service Cards */}
            <div>
              <div style={{ marginBottom: '32px' }}>
                <span className="section-eyebrow">Comprehensive Payer Management</span>
                <h2 style={{ fontSize: '1.85rem', color: 'var(--color-navy)', marginBottom: '12px' }}>
                  The 10 Core Insurance &amp; Payer Offerings
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.65' }}>
                  StelleMed provides complete, end-to-end payer adjudication. We advocate for your practice at every step to secure timely reimbursement without leaving money on the table.
                </p>
              </div>

              <div className="service-module-list">
                {officialServices.map((mod, idx) => (
                  <article key={idx} className="service-module-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                      <span 
                        style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '50%', 
                          background: 'var(--color-teal-light)', 
                          color: 'var(--color-teal-dark)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          flexShrink: 0
                        }}
                      >
                        {idx + 1}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)' }}>
                        {mod.title}
                      </h3>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: '14px' }}>
                      {mod.desc}
                    </p>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {mod.bullets.map((b, bIdx) => (
                        <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--color-teal)', flexShrink: 0, marginTop: '2px' }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            {/* Right: Sidebar Visual & Commitments */}
            <aside className="service-sidebar">
              <div className="service-sidebar-card">
                <img
                  src={service1Img}
                  alt="Certified medical billing team reviewing insurance payer claims"
                  className="service-hero-img"
                />

                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '14px' }}>
                  Official Commitments
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#F8FBFC', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)' }}>Seconds</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Eligibility Verifications Within Seconds</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#F8FBFC', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', color: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Send size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)' }}>24–48 Hours</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Claims Submitted Promptly</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#F8FBFC', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: '#F1EDFF', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <DollarSign size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)' }}>Same-Day</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Payment &amp; Remittance Posting</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#F8FBFC', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)' }}>Monthly</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Executive Performance Review</div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#EAF8F8', border: '1px solid rgba(23, 154, 158, 0.25)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-teal-dark)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '4px' }}>
                    <ShieldCheck size={18} />
                    <span>Backed by Corvit &amp; StelleCloud</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                    Backed by 25+ years of technology experience, providing bank-grade security and advanced claims scrubbing.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenConsultation('Insurance & Payer Services Inquiry')}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. Six Checks Quality Gate Section */}
      <SixChecks />

      {/* 5. Bottom Call to Action */}
      <section style={{ background: 'var(--color-navy)', color: '#FFFFFF', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '14px' }}>
            Let’s Find Your Missing Revenue
          </h2>
          <p style={{ color: '#A3B9CC', maxWidth: '640px', margin: '0 auto 28px', fontSize: '1.05rem' }}>
            Request a comprehensive review of your payer claims, denials, and aging A/R. We will identify exact revenue leaks and provide a clear recovery plan.
          </p>
          <button
            type="button"
            onClick={() => onOpenConsultation('Payer Service Bottom Banner')}
            className="btn btn-primary btn-lg"
          >
            <span>Schedule Payer Audit</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
