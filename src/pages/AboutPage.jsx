import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Users, CheckCircle2, HeartPulse, 
  Target, Eye, Compass, ArrowRight, Calendar, Building2, Lock,
  Clock, Send, DollarSign, TrendingUp, CheckCircle, Network, Server, Sparkles
} from 'lucide-react';
import service1Img from '../assets/service1.jpg';

export default function AboutPage({ onOpenConsultation }) {
  const commitments = [
    {
      icon: <Clock size={24} style={{ color: 'var(--color-teal)' }} />,
      stat: 'Within Seconds',
      title: 'Eligibility Verifications',
      desc: 'Real-time 270/271 electronic checks confirm patient coverage and copays before service delivery.'
    },
    {
      icon: <Send size={24} style={{ color: 'var(--color-teal)' }} />,
      stat: '24–48 Hours',
      title: 'Claims Submitted',
      desc: 'Rapid clean-claim scrubbing and EDI clearinghouse dispatch to shorten days in accounts receivable.'
    },
    {
      icon: <DollarSign size={24} style={{ color: 'var(--color-teal)' }} />,
      stat: 'Same-Day',
      title: 'Payment Posting',
      desc: 'Immediate reconciliation and posting of electronic remittance advices (ERAs) and patient copays.'
    },
    {
      icon: <TrendingUp size={24} style={{ color: 'var(--color-teal)' }} />,
      stat: 'Monthly',
      title: 'Performance Review',
      desc: 'Comprehensive executive meetings with your dedicated account manager analyzing financial KPIs.'
    }
  ];

  const credentials = [
    'Cisco', 'Microsoft', 'AWS', 'VMware', 'Fortinet', 'Palo Alto Networks', 
    'CompTIA', 'PECB', 'EC-Council', 'ISC2', 'SAP', 'IBM', 'Dell EMC', 'CrowdStrike'
  ];

  return (
    <div className="about-page">
      {/* 1. Page Hero Banner */}
      <section className="page-hero" aria-label="About Us Header">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">About Us</span>
            </nav>

            <div className="section-eyebrow">
              <Building2 size={14} className="text-teal" />
              <span>Official Company Profile</span>
            </div>

            <h1 className="page-hero-title">
              About <span className="text-teal">StelleMed</span>
            </h1>

            <p className="page-hero-desc">
              A medical billing and revenue cycle management company serving healthcare providers across the U.S. 
              One partner for both billing and technology, backed by Corvit and StelleCloud.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => onOpenConsultation('About Us Page')}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={18} />
                <span>Schedule a Consultation</span>
              </button>
              <Link to="/services" className="btn btn-secondary btn-lg">
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are & Mission Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '48px', 
              alignItems: 'center' 
            }}
          >
            <div>
              <span className="section-eyebrow">Who We Are</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '18px' }}>
                One Partner for Both Billing &amp; Technology
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '16px' }}>
                StelleMed provides medical billing and revenue cycle management services to healthcare providers across the United States. 
                As one trusted partner for both billing operations and technology infrastructure, we are backed by the engineering excellence of Corvit and StelleCloud.
              </p>

              <div style={{ background: '#F8FBFC', borderLeft: '4px solid var(--color-teal)', padding: '20px', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-teal)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Our Mission
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-navy)', lineHeight: '1.5' }}>
                  "To simplify the revenue cycle for healthcare providers, from insurance claims to patient payments, so they can focus on patient care."
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ padding: '16px', background: '#F8FBFC', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-navy)' }}>
                  <div style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--color-navy)' }}>25+ Years</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Technology Experience Backed by Corvit &amp; StelleCloud</div>
                </div>
                <div style={{ padding: '16px', background: '#F8FBFC', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-teal)' }}>
                  <div style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--color-teal)' }}>350,000+</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Professionals Trained by Parent Group</div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img 
                  src={service1Img} 
                  alt="StelleMed certified medical billing team meeting" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '20px',
                  background: 'var(--color-navy)',
                  color: '#FFFFFF',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-md)',
                  maxWidth: '280px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-teal)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '4px' }}>
                  <ShieldCheck size={18} />
                  <span>StelleCloud &amp; Corvit</span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#CBD5E1', lineHeight: '1.4' }}>
                  Parent group founded in 2000, delivering enterprise technology, cybersecurity, and solutions nationwide.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Official Commitments Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Accountability in Action</span>
            <h2 className="section-title">
              Our <span className="text-teal">Commitments</span>
            </h2>
            <p className="section-desc">
              The four foundational operational promises that guide every client partnership at StelleMed.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '24px', 
              marginTop: '40px' 
            }}
          >
            {commitments.map((item, idx) => (
              <div 
                key={idx}
                className="card"
                style={{
                  padding: '30px 24px',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div style={{ marginBottom: '14px' }}>{item.icon}</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-teal)', marginBottom: '4px' }}>
                  {item.stat}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '8px', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Company Credentials & Ecosystem (Page 10) */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Enterprise Strength</span>
            <h2 className="section-title">
              Backed by <span className="text-teal">Corvit &amp; StelleCloud</span>
            </h2>
            <p className="section-desc" style={{ maxWidth: '780px', margin: '0 auto' }}>
              StelleMed is backed by StelleCloud and Corvit, an IT training and solutions company founded in 2000 that has trained more than 350,000 professionals. Through them, our group works with leading technology and business organizations.
            </p>
          </div>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '12px', 
              marginTop: '36px',
              maxWidth: '900px',
              margin: '36px auto 0'
            }}
          >
            {credentials.map((name, idx) => (
              <span 
                key={idx}
                style={{
                  padding: '8px 18px',
                  background: '#F8FBFC',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-navy)'
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section style={{ background: 'var(--color-navy)', color: '#FFFFFF', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '14px' }}>
            Let’s Find Your Missing Revenue
          </h2>
          <p style={{ color: '#A3B9CC', maxWidth: '640px', margin: '0 auto 28px', fontSize: '1.05rem' }}>
            Schedule an initial consultation to meet your dedicated billing team and learn how we can simplify your revenue cycle.
          </p>
          <button
            type="button"
            onClick={() => onOpenConsultation('About Us Bottom Banner')}
            className="btn btn-primary btn-lg"
          >
            <span>Partner With StelleMed</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
