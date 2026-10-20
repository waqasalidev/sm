import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, ShieldCheck, CheckCircle2, ArrowRight, 
  Database, Activity, Lock, Calendar, Server, Network,
  Globe, Search, Share2, Palette, Headphones, HardDrive,
  BarChart3, MonitorSmartphone
} from 'lucide-react';
import service3Img from '../assets/service3.jpg';

export default function TechnologySupportPage({ onOpenConsultation }) {
  // All 11 Official Offerings from Page 5 of StelleMed Booklet organized into 3 Logical Groups
  const group1 = {
    category: 'Healthcare Technology & Infrastructure',
    icon: <Cpu size={22} className="text-teal" />,
    services: [
      {
        title: 'Secure Client Portal',
        desc: 'Encrypted, role-based cloud portal giving practice administrators and physicians 24/7 visibility into claim batches, denial queues, patient accounts, and daily cash deposits.',
        bullets: [
          'Live encounter tracking and claim adjudication status',
          'Bi-directional document sharing and HIPAA-compliant messaging',
          'Exportable financial ledgers and practice analytics'
        ]
      },
      {
        title: 'Real-Time Dashboards',
        desc: 'Intuitive executive business intelligence dashboards monitoring essential RCM key performance indicators (KPIs), Days in A/R, first-pass clean claim rates, and payer trends.',
        bullets: [
          'Visual graphs of aging receivables (30, 60, 90, 120+ days)',
          'Net collection percentage and carrier denial breakdown',
          'Physician-by-physician productivity and revenue benchmarking'
        ]
      },
      {
        title: 'EHR & Practice Management',
        desc: 'Direct integration and workflow optimization across your existing Electronic Health Record (EHR) and Practice Management (PM) software without changing systems.',
        bullets: [
          'Seamless bridge with Epic, AthenaHealth, eClinicalWorks, Kareo, NextGen, and Cerner',
          'Automated demographic and charge capture synchronization',
          'Zero data migration downtime or clinical routine disruption'
        ]
      },
      {
        title: 'HIPAA-Compliant Infrastructure',
        desc: 'Enterprise-grade hosting and data storage architecture adhering strictly to HIPAA, HITECH, and Omnibus regulatory security standards.',
        bullets: [
          'End-to-end data encryption at rest and in transit (AES-256 / TLS 1.3)',
          'Immutable audit logging for all patient health information (PHI) access',
          'Routine automated compliance audits and vulnerability scanning'
        ]
      }
    ]
  };

  const group2 = {
    category: 'Security, Backup & IT Support',
    icon: <Lock size={22} className="text-teal" />,
    services: [
      {
        title: 'Cybersecurity & Data Protection',
        desc: 'Multi-layered defense safeguards protecting clinical and financial assets against malware, ransomware, phishing, and unauthorized intrusion.',
        bullets: [
          'Endpoint detection, firewall monitoring, and zero-trust access control',
          'Multi-Factor Authentication (MFA) across all administrative tools',
          'Continuous threat monitoring powered by parent IT group standards'
        ]
      },
      {
        title: 'Backup & Disaster Recovery',
        desc: 'Automated, redundant cloud backup architecture ensuring immediate failover and zero data loss in the event of hardware failure, outage, or cyber emergency.',
        bullets: [
          'Geo-redundant encrypted cloud backup snapshots',
          'Strict Recovery Point Objective (RPO) and Recovery Time Objective (RTO)',
          'Regular disaster recovery restoration drills and validation'
        ]
      },
      {
        title: 'Managed IT & Helpdesk',
        desc: 'Prompt, specialized technical helpdesk support for medical practice hardware, network peripherals, EDI gateways, and practice software issues.',
        bullets: [
          'Dedicated support engineers familiar with clinical workflows',
          'Rapid resolution of clearinghouse EDI transmission errors',
          'Workstation, network, and scanner troubleshooting'
        ]
      }
    ]
  };

  const group3 = {
    category: 'Digital Marketing & Practice Growth',
    icon: <Globe size={22} className="text-teal" />,
    services: [
      {
        title: 'Social Media Management',
        desc: 'Professional management of practice social media profiles to educate patients, promote clinical services, and build patient community engagement.',
        bullets: [
          'Healthcare-compliant educational posts and patient updates',
          'Active reputation management and community interaction',
          'Multi-platform presence across LinkedIn, Facebook, and Instagram'
        ]
      },
      {
        title: 'SEO & Local Search',
        desc: 'Targeted medical search engine optimization and Google Business Profile management ensuring your clinic ranks at the top for local patients seeking specialized care.',
        bullets: [
          'Local map pack optimization and verified provider directories',
          'Specialty-specific keyword targeting and on-page medical SEO',
          'Patient review generation and positive reputation growth'
        ]
      },
      {
        title: 'Website Design & Development',
        desc: 'Modern, fast, mobile-responsive, and ADA/HIPAA-compliant healthcare websites built to convert prospective patients into scheduled appointments.',
        bullets: [
          'Clean, trustworthy healthcare UI design with 1-click appointment booking',
          'Mobile-first responsive architecture and rapid page load speeds',
          'Secure patient intake forms and telehealth integration'
        ]
      },
      {
        title: 'Branding & Content Creation',
        desc: 'Distinctive medical practice branding, logo design, patient education brochures, and authoritative clinical content that sets your practice apart.',
        bullets: [
          'Professional brand identity guides, color schemes, and logos',
          'Clear patient intake forms, fee transparency sheets, and brochures',
          'Physician bios, clinical service overviews, and healthcare articles'
        ]
      }
    ]
  };

  return (
    <div className="service-page-wrapper">
      {/* 1. Page Hero Banner */}
      <section className="page-hero" aria-label="Technology and Practice Growth Header">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <Link to="/services">Services</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">Technology &amp; Support</span>
            </nav>

            <div className="section-eyebrow">
              <Cpu size={14} className="text-teal" />
              <span>Technology &amp; IT Support / Practice Growth</span>
            </div>

            <h1 className="page-hero-title">
              Technology &amp; <span className="text-teal">Practice Growth</span>
            </h1>

            <p className="page-hero-desc">
              Backed by Corvit and StelleCloud with 25+ years of tech experience — providing secure client portals, real-time dashboards, cybersecurity, managed IT, and digital growth services.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onOpenConsultation('Technology & Practice Growth Audit')}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={18} />
                <span>Request Technology Demo</span>
              </button>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>Let’s Find Your Missing Revenue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Grouped Offerings Showcase */}
      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          {/* Group 1 */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {group1.icon}
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-teal)', textTransform: 'uppercase' }}>Group 01</span>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', margin: 0 }}>{group1.category}</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {group1.services.map((item, idx) => (
                <div key={idx} className="card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '14px' }}>{item.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: 0, margin: 0, listStyle: 'none' }}>
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--color-teal)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2 */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {group2.icon}
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-teal)', textTransform: 'uppercase' }}>Group 02</span>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', margin: 0 }}>{group2.category}</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              {group2.services.map((item, idx) => (
                <div key={idx} className="card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '14px' }}>{item.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: 0, margin: 0, listStyle: 'none' }}>
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--color-teal)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Group 3 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', background: 'var(--color-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {group3.icon}
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-teal)', textTransform: 'uppercase' }}>Group 03</span>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', margin: 0 }}>{group3.category}</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {group3.services.map((item, idx) => (
                <div key={idx} className="card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '14px' }}>{item.desc}</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: 0, margin: 0, listStyle: 'none' }}>
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--color-teal)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section style={{ background: 'var(--color-navy)', color: '#FFFFFF', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '14px' }}>
            Ready to Modernize Your Practice Technology?
          </h2>
          <p style={{ color: '#A3B9CC', maxWidth: '640px', margin: '0 auto 28px', fontSize: '1.05rem' }}>
            Experience the combined power of certified medical billing and enterprise IT infrastructure. Let’s find your missing revenue.
          </p>
          <button
            type="button"
            onClick={() => onOpenConsultation('Technology & Support Bottom Banner')}
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
