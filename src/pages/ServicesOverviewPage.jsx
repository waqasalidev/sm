import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileCheck, Users, Cpu, ArrowRight, CheckCircle2, 
  Stethoscope, ShieldCheck, BarChart3, Award, Calendar, HelpCircle 
} from 'lucide-react';
import service1Img from '../assets/service1.jpg';
import service2Img from '../assets/service2.jpg';
import service3Img from '../assets/service3.jpg';

export default function ServicesOverviewPage({ onOpenConsultation }) {
  const servicePillars = [
    {
      id: 'insurance-payer',
      title: 'Insurance & Payer Services',
      tagline: 'End-to-End Payer Adjudication & Maximum Legal Reimbursement',
      desc: 'We manage your entire payer relationship from initial eligibility checking to clean claim submission, aggressive denial appeals, and aging A/R recovery.',
      img: service1Img,
      link: '/services/insurance-payer',
      badge: 'Core Engine',
      stats: '98% Clean Claim Rate',
      bullets: [
        'Real-time 270/271 eligibility verification 48 hours prior to service',
        'Certified AAPC/AHIMA medical coding & modifier accuracy auditing',
        'Automated clearinghouse scrubbing with 3M+ dynamic rules',
        'Clinical appeals team that overturns 85%+ of disputed denials'
      ]
    },
    {
      id: 'patient-practice',
      title: 'Patient & Practice Services',
      tagline: 'Transparent Patient Financial Care & Practice Workflow Efficiency',
      desc: 'Protect patient relationships while increasing point-of-service collections. We deliver transparent estimates, empathetic call support, and front-desk coaching.',
      img: service2Img,
      link: '/services/patient-practice',
      badge: 'Patient Centric',
      stats: '+38% POS Collections',
      bullets: [
        'No Surprises Act compliant Good Faith Estimates (GFE)',
        'Compassionate bilingual patient billing helpline with 95% resolution',
        'Paperless digital statements via SMS text and encrypted email links',
        'Front-desk intake scripts & point-of-service collection training'
      ]
    },
    {
      id: 'technology-support',
      title: 'Technology & Support',
      tagline: 'Cloud Automation, Bi-Directional EHR Integration & 24/7 Dashboards',
      desc: 'Plug into modern revenue cycle technology without changing your EHR. Our bi-directional interfaces, automated ERA auto-posting, and real-time dashboards give you complete transparency.',
      img: service3Img,
      link: '/services/technology-support',
      badge: 'Cloud Infrastructure',
      stats: '99.9% Uptime SLA',
      bullets: [
        'StelleCloud™ rules engine with automated claim conflict scrubbing',
        'Direct bi-directional EHR sync with Epic, Athena, eCW, Kareo & Cerner',
        'Executive web & mobile dashboards for real-time days-in-A/R tracking',
        'AES-256 bank-grade encryption and strict SOC-2/HIPAA compliance'
      ]
    }
  ];

  const specialties = [
    { name: 'Internal & Family Medicine', desc: 'Complex multi-code visits, preventive wellness (AWV), chronic care management (CCM).' },
    { name: 'Cardiology & Vascular', desc: 'Cath lab interventions, echocardiography, nuclear imaging, and modifier 25/59 optimization.' },
    { name: 'Orthopedics & Sports Medicine', desc: 'Surgical bundles, implant billing, DME pre-authorizations, and physical therapy cross-overs.' },
    { name: 'Mental & Behavioral Health', desc: 'Psychotherapy, IOP, medication management, and specialized telehealth coding rules.' },
    { name: 'Pediatrics & Adolescent Care', desc: 'Vaccine administration bundles, developmental screenings, and Medicaid managed care plans.' },
    { name: 'General & Ambulatory Surgery', desc: 'ASC billing, anesthesia coordination, pre-op clearance, and high-dollar claim appeals.' },
    { name: 'Urgent Care Centers', desc: 'High-volume rapid charge capture, same-day verification, and occupational medicine billing.' },
    { name: 'Physical & Occupational Therapy', desc: 'Timed 8-minute rule calculations, functional progress reporting, and plan-of-care caps.' }
  ];

  return (
    <div className="services-overview-page">
      {/* 1. Page Hero Banner */}
      <section className="page-hero" aria-label="Services Header">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">Services Overview</span>
            </nav>

            <div className="section-eyebrow">
              <BarChart3 size={14} className="text-teal" />
              <span>Full-Spectrum Revenue Cycle Management</span>
            </div>

            <h1 className="page-hero-title">
              Specialized Solutions for <span className="text-teal">Modern Healthcare</span>
            </h1>

            <p className="page-hero-desc">
              Whether you need end-to-end medical billing, targeted insurance denial recovery, or practice workflow modernization, 
              StelleMed provides the certified expertise and technology to optimize your clinical cash flow.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onOpenConsultation('Services Overview Header')}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={18} />
                <span>Request Comprehensive Practice Audit</span>
              </button>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>Talk to a Billing Consultant</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Three Core Pillars In-Depth */}
      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '48px' }}>
            <span className="section-eyebrow">Our Core Service Pillars</span>
            <h2 className="section-title">
              Three Pillars of <span className="text-teal">Revenue Cycle Excellence</span>
            </h2>
            <p className="section-desc">
              Each pillar is designed to seamlessly integrate with your existing workflow, relieving clinical staff and maximizing collections.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {servicePillars.map((service, index) => (
              <div 
                key={service.id}
                className="card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '32px',
                  padding: '36px',
                  alignItems: 'center',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {/* Visual Image */}
                <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
                  <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                    <img 
                      src={service.img} 
                      alt={service.title}
                      style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        background: 'rgba(16, 44, 64, 0.85)',
                        backdropFilter: 'blur(8px)',
                        color: '#FFFFFF',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em'
                      }}
                    >
                      {service.badge}
                    </div>
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        right: '16px',
                        background: 'var(--color-teal)',
                        color: '#FFFFFF',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8125rem',
                        fontWeight: 800
                      }}
                    >
                      {service.stats}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ order: index % 2 === 1 ? 1 : 2 }}>
                  <span className="section-eyebrow">{service.tagline}</span>
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '14px' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                    {service.desc}
                  </p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={18} style={{ color: 'var(--color-teal)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link to={service.link} className="btn btn-primary">
                      <span>Explore Detailed Page</span>
                      <ArrowRight size={16} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(service.title)}
                      className="btn btn-secondary"
                    >
                      <span>Inquire Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Clinical Specialties Covered */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Medical Specialty Expertise</span>
            <h2 className="section-title">
              Tailored for Your <span className="text-teal">Clinical Specialty</span>
            </h2>
            <p className="section-desc">
              Every medical discipline operates under unique payer guidelines, documentation hurdles, and fee schedules. 
              Our certified billing teams have dedicated specialty pods.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginTop: '40px'
            }}
          >
            {specialties.map((spec, sIdx) => (
              <div 
                key={sIdx}
                className="card"
                style={{
                  padding: '24px',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', color: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Stethoscope size={22} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '8px' }}>
                  {spec.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section style={{ background: 'var(--color-navy)', color: '#FFFFFF', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '14px' }}>
            Need a Customized Revenue Cycle Plan for Your Clinic?
          </h2>
          <p style={{ color: '#A3B9CC', maxWidth: '640px', margin: '0 auto 28px', fontSize: '1.05rem' }}>
            We evaluate your existing billing staff, EHR software, and monthly claim volume to create a hybrid or fully managed RCM strategy.
          </p>
          <button
            type="button"
            onClick={() => onOpenConsultation('Custom Services Proposal')}
            className="btn btn-primary btn-lg"
          >
            <span>Request Custom Proposal</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
