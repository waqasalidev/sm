import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, Layers, HelpCircle, FileText, CheckCircle2, 
  AlertTriangle, ShieldCheck, ArrowRight, Download, BookOpen, Sparkles
} from 'lucide-react';
import RoiCalculator from '../components/RoiCalculator';
import FAQ from '../components/FAQ';

export default function ResourcesPage({ onOpenConsultation }) {
  const referenceGuides = [
    {
      title: '8 Major Revenue Leaks Checklist',
      tag: 'Audit Tool',
      icon: <AlertTriangle size={22} style={{ color: '#EF4444' }} />,
      desc: 'Diagnose the 8 most expensive revenue leaks occurring across clinical documentation, coding, and aging A/R.',
      link: '/#revenue-leaks'
    },
    {
      title: '6-Checks Quality Gateways',
      tag: 'Clinical QA',
      icon: <CheckCircle2 size={22} style={{ color: 'var(--color-teal)' }} />,
      desc: 'The 6 quality verification gateways every claim must pass before submission to maintain a 98% clean claim rate.',
      link: '/#six-checks'
    },
    {
      title: 'Dual Workflows Blueprint',
      tag: 'Operations',
      icon: <Layers size={22} style={{ color: '#7C3AED' }} />,
      desc: 'Detailed 7-step Insurance cycle map paired with the 5-step Patient billing financial journey.',
      link: '/#how-we-manage'
    },
    {
      title: 'No Surprises Act & GFE Guide',
      tag: 'Compliance',
      icon: <ShieldCheck size={22} style={{ color: '#10B981' }} />,
      desc: 'Full regulatory compliance guide for delivering upfront Good Faith Estimates and avoiding patient balance dispute penalties.',
      action: () => onOpenConsultation('No Surprises Act Guide Request')
    }
  ];

  return (
    <div className="resources-page">
      {/* 1. Page Hero Banner */}
      <section className="page-hero" aria-label="Resources Header">
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">Resources &amp; Practice Tools</span>
            </nav>

            <div className="section-eyebrow">
              <Sparkles size={14} className="text-teal" />
              <span>Interactive Tools &amp; Knowledge Hub</span>
            </div>

            <h1 className="page-hero-title">
              Healthcare Provider <span className="text-teal">Resources &amp; Tools</span>
            </h1>

            <p className="page-hero-desc">
              Free operational checklists, real-time revenue recovery calculators, dual workflow maps, and provider knowledge base to help your clinic prevent claim denials and recapture lost cash.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#roi-calculator" className="btn btn-primary btn-lg">
                <Calculator size={18} />
                <span>Use ROI Calculator</span>
              </a>
              <a href="#faq" className="btn btn-secondary btn-lg">
                <span>Browse Knowledge Base</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Practice ROI Calculator */}
      <div id="roi-calculator">
        <RoiCalculator onOpenConsultation={onOpenConsultation} />
      </div>

      {/* 3. Reference Guides Grid */}
      <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">Clinical Toolkits &amp; Blueprints</span>
            <h2 className="section-title">
              Essential <span className="text-teal">Practice Reference Guides</span>
            </h2>
            <p className="section-desc">
              Official operational blueprints from the StelleMed Medical Billing Booklet.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {referenceGuides.map((guide, idx) => (
              <div key={idx} className="card" style={{ padding: '28px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', backgroundColor: '#FFFFFF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {guide.icon}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', borderRadius: '9999px', background: '#F1F5F9', color: 'var(--color-navy)' }}>
                    {guide.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '8px' }}>{guide.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                  {guide.desc}
                </p>
                {guide.link ? (
                  <Link to={guide.link} className="btn btn-secondary" style={{ width: '100%' }}>
                    <span>Explore Guide</span>
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <button type="button" onClick={guide.action} className="btn btn-secondary" style={{ width: '100%' }}>
                    <span>Request Document</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ Component */}
      <div id="faq">
        <FAQ onOpenConsultation={() => onOpenConsultation('Resources Page FAQ')} />
      </div>

      {/* 5. Bottom CTA */}
      <section style={{ background: 'var(--color-navy)', color: '#FFFFFF', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', fontSize: '2rem', marginBottom: '14px' }}>Need a Tailored Practice Revenue Audit?</h2>
          <p style={{ color: '#A3B9CC', maxWidth: '640px', margin: '0 auto 28px', fontSize: '1.05rem' }}>
            Speak with our senior billing directors to review your practice fee schedule, denial rate, and aging receivables.
          </p>
          <button 
            type="button" 
            onClick={() => onOpenConsultation('Resources Bottom Banner')} 
            className="btn btn-primary btn-lg"
          >
            <span>Request Practice Audit</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
