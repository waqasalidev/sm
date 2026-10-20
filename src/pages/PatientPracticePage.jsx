import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, HeartHandshake, CheckCircle2, ArrowRight, 
  Smile, CreditCard, ShieldCheck, Calendar, PhoneCall, FileText,
  Clock, TrendingUp, ChevronRight, BarChart3, GraduationCap, 
  Building2, Receipt, FileSpreadsheet, Headphones
} from 'lucide-react';
import service2Img from '../assets/service2.jpg';

export default function PatientPracticePage({ onOpenConsultation }) {
  // All 10 Official Services from Page 4 of StelleMed Booklet
  const officialServices = [
    {
      title: 'Patient Medical Record',
      desc: 'Accurate demographic and medical record capture, ensuring clean clinical histories, compliant chart access, and seamless insurance cross-referencing.',
      bullets: [
        'Precise patient intake data auditing to prevent front-end billing discrepancies',
        'Secure electronic health record indexing and HIPAA-compliant archiving',
        'Streamlined chart retrieval for payer medical necessity reviews'
      ]
    },
    {
      title: 'Payment Plans & Self-Pay Collections',
      desc: 'Flexible, customized monthly installment plans and recurring card-on-file schedules that empower patients to pay balances without creating bad debt.',
      bullets: [
        'Budget-friendly recurring auto-debit arrangements',
        'PCI-DSS compliant encrypted card-on-file tokenization',
        'Compassionate self-pay recovery protocols that preserve doctor-patient trust'
      ]
    },
    {
      title: 'Cost Estimates',
      desc: 'Transparent Good Faith Estimates (GFE) provided prior to scheduled clinical services, giving patients upfront clarity and maintaining full compliance with the No Surprises Act.',
      bullets: [
        'Pre-service deductible, copay, and coinsurance calculation',
        'Itemized cost estimates for planned diagnostics and procedures',
        'Reduction of post-treatment billing confusion and disputed charges'
      ]
    },
    {
      title: 'Patient Billing Support',
      desc: 'Dedicated, empathetic billing customer service answering patient questions regarding invoices, insurance balances, and Explanation of Benefits (EOB).',
      bullets: [
        'Toll-free patient support line answered by trained medical billing representatives',
        'Bilingual communication support for diverse patient communities',
        'Rapid first-contact resolution for billing and balance inquiries'
      ]
    },
    {
      title: 'Legacy A/R Recovery',
      desc: 'Targeted recovery projects for aged self-pay and delinquent practice receivables that have lingered over 60, 90, or 120+ days.',
      bullets: [
        'Audit and cleanup of stale or unresolved patient balances',
        'Ethical outreach campaigns via SMS, email, and clear paper statements',
        'Substantial cash recovery from written-off or forgotten receivables'
      ]
    },
    {
      title: 'Front-Office & Scheduling Assistance',
      desc: 'Administrative workflow guidance and scheduling coordination to eliminate bottlenecks, reduce no-shows, and collect copayments at the front desk.',
      bullets: [
        'Intake scheduling optimization and appointment confirmation workflows',
        'Point-of-service (POS) copay and deductible collection protocols',
        'Daily schedule balancing against clinic encounter records'
      ]
    },
    {
      title: 'Financial Reporting & KPI Dashboards',
      desc: 'Clear, comprehensive executive financial reports and real-time KPI dashboards tracking gross collections, net collection rate, and days in A/R.',
      bullets: [
        '24/7 access to live financial metrics across all practice locations',
        'Monthly reconciliation reports detailing cash flow and aging categories',
        'Actionable practice health trends and physician productivity metrics'
      ]
    },
    {
      title: 'Revenue Cycle Benchmarking',
      desc: 'Measuring your practice’s financial performance against national specialty benchmarks (MGMA and HFMA standards) to identify untapped revenue opportunities.',
      bullets: [
        'Specialty-specific fee schedule comparison against market percentiles',
        'Clean claim rate and denial rate benchmarking against national averages',
        'Strategic recommendations to enhance practice profitability'
      ]
    },
    {
      title: 'Staff Training',
      desc: 'Comprehensive training for front-desk, administrative, and clinical staff on insurance verification, documentation guidelines, and POS collections.',
      bullets: [
        'Standardized intake checklists to eliminate front-end demographic errors',
        'Patient financial counseling communication scripts',
        'Periodic refresher courses on evolving payer guidelines and billing rules'
      ]
    },
    {
      title: 'New-Practice Start-Up Support',
      desc: 'Turnkey operational setup for new healthcare practices, encompassing provider enrollment, EHR/PM configuration, fee schedule design, and billing workflows.',
      bullets: [
        'Initial Medicare, Medicaid, and commercial payer credentialing fast-track',
        'Clearinghouse gateway setup and practice management configuration',
        'End-to-end revenue cycle launch support from Day One'
      ]
    }
  ];

  const workflowSteps = [
    'Patient Visit',
    'Patient Statement',
    'Payment Plan / Collection',
    'Patient Payment',
    'Practice Paid'
  ];

  return (
    <div className="service-page-wrapper">
      {/* 1. Page Hero Banner */}
      <section className="page-hero" aria-label="Patient and Practice Services Header">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <Link to="/services">Services</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">Patient &amp; Practice Services</span>
            </nav>

            <div className="section-eyebrow">
              <Users size={14} className="text-teal" />
              <span>Official Booklet Services</span>
            </div>

            <h1 className="page-hero-title">
              Patient &amp; <span className="text-teal">Practice Services</span>
            </h1>

            <p className="page-hero-desc">
              Empower your practice with clear cost estimates, patient billing customer care, flexible payment plans, staff training, KPI reporting, and start-up support.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onOpenConsultation('Patient & Practice Services Consultation')}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={18} />
                <span>Request Practice Workflow Audit</span>
              </button>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>Let’s Find Your Missing Revenue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official Patient Billing Workflow Sequence */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '40px 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Official Booklet Workflow
            </span>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy)', margin: '4px 0 0 0' }}>
              Patient Billing Revenue Cycle Sequence
            </h2>
          </div>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '12px' 
            }}
          >
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div 
                  style={{
                    background: '#FDFBFF',
                    border: '1px solid #E9D5FF',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: 'var(--color-navy)'
                  }}
                >
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#7C3AED', color: '#FFFFFF', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <ChevronRight size={18} style={{ color: '#7C3AED' }} />
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
                <span className="section-eyebrow">Patient Financial Experience</span>
                <h2 style={{ fontSize: '1.85rem', color: 'var(--color-navy)', marginBottom: '12px' }}>
                  The 10 Patient &amp; Practice Offerings
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.65' }}>
                  Protecting patient trust while improving point-of-service collections. StelleMed bridges clinical care and financial transparency for sustainable practice growth.
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
                          background: '#F1EDFF', 
                          color: '#7C3AED', 
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
                          <CheckCircle2 size={16} style={{ color: '#7C3AED', flexShrink: 0, marginTop: '2px' }} />
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
                  src={service2Img}
                  alt="Doctor and medical practice team providing patient care and practice coordination"
                  className="service-hero-img"
                />

                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '14px' }}>
                  Practice Commitments
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#F8FBFC', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: '#ECFDF5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Smile size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)' }}>Empathetic</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Respectful Patient Financial Care</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#F8FBFC', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', color: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CreditCard size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)' }}>Flexible</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Automated Payment Plan Schedules</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#F8FBFC', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: '#F1EDFF', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <HeartHandshake size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)' }}>Compliant</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Good Faith Estimates (No Surprises Act)</div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#EAF8F8', border: '1px solid rgba(23, 154, 158, 0.25)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-teal-dark)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '4px' }}>
                    <ShieldCheck size={18} />
                    <span>Backed by Corvit &amp; StelleCloud</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                    Empowering healthcare providers across the United States with 25+ years of technology and training experience.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenConsultation('Patient & Practice Services Inquiry')}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <span>Inquire About Practice Solutions</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section style={{ background: 'var(--color-navy)', color: '#FFFFFF', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '14px' }}>
            Elevate Your Practice Revenue and Patient Loyalty
          </h2>
          <p style={{ color: '#A3B9CC', maxWidth: '640px', margin: '0 auto 28px', fontSize: '1.05rem' }}>
            Discover how transparent patient financial workflows and front-office coaching can reduce administrative burnout while maximizing collections.
          </p>
          <button
            type="button"
            onClick={() => onOpenConsultation('Patient & Practice Bottom Banner')}
            className="btn btn-primary btn-lg"
          >
            <span>Let’s Find Your Missing Revenue</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
