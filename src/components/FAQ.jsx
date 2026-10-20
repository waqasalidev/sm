import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ({ onOpenConsultation }) {
  const [openItems, setOpenItems] = useState([0]); // First item open by default
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'billing', label: 'Billing & Claims' },
    { id: 'compliance', label: 'HIPAA & Compliance' },
    { id: 'pricing', label: 'Pricing & Onboarding' }
  ];

  const faqs = [
    {
      category: 'billing',
      question: 'What types of healthcare providers do you work with?',
      answer: 'We partner with independent physician practices, ambulatory surgery centers (ASCs), urgent care clinics, mental and behavioral health practices, dental and oral surgery clinics, and multi-specialty medical groups across all 50 US states. Our certified billers adapt specifically to each clinical specialty’s coding requirements.'
    },
    {
      category: 'billing',
      question: 'How do you help reduce claim denials?',
      answer: 'We deploy a rigorous multi-tier prevention protocol: 1) Real-time insurance eligibility checks prior to patient appointments, 2) Specialty-specific automated clearinghouse claim scrubbing rules, 3) Certified AAPC/AHIMA coder charge audits, and 4) Immediate clinical appeals with supporting documentation for any unexpected rejections within 24 to 48 hours.'
    },
    {
      category: 'compliance',
      question: 'How do you maintain HIPAA compliance?',
      answer: 'All client interactions and data exchange operate on StelleCloud™ infrastructure, featuring AES-256 bit encryption at rest and in transit, multi-factor authentication (MFA), role-based access restrictions, and 24/7 security auditing. We execute comprehensive Business Associate Agreements (BAAs) with every provider partner.'
    },
    {
      category: 'billing',
      question: 'What is the typical claims processing turnaround time?',
      answer: 'Charges received from your clinical practice are reviewed, scrubbed, and electronically submitted within 24 to 48 hours of service. Average reimbursement cycles for clean electronic claims typically range from 12 to 18 days, depending on payer adjudication timelines.'
    },
    {
      category: 'pricing',
      question: 'Do you offer customized pricing?',
      answer: 'Yes. We offer transparent, percentage-of-collections pricing starting as low as 3.5% to 6%, meaning we only get paid when you get paid. For specialty surgical clinics or administrative credentialing projects, flat monthly retainer packages are also available. We never charge hidden software or setup fees.'
    },
    {
      category: 'pricing',
      question: 'Do you require long-term contracts?',
      answer: 'No. StelleMed believes our performance should earn your business every month. We operate primarily on flexible month-to-month service agreements with standard 30-day notice terms, so you never feel trapped in a rigid multi-year commitment.'
    },
    {
      category: 'compliance',
      question: 'Do we need to switch our existing Electronic Health Record (EHR)?',
      answer: 'Not at all. StelleMed connects directly with your existing EHR and Practice Management system (such as Athenahealth, Epic, eClinicalWorks, Kareo, AdvancedMD, NextGen, and others). Your clinical staff continues using the software they already know.'
    }
  ];

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="section faq-section" aria-label="Frequently Asked Questions Section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <HelpCircle size={14} className="text-teal" aria-hidden="true" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="text-teal">Questions</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about our billing workflows, HIPAA security, 
            EHR integrations, and pricing model.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="faq-categories" role="tablist" aria-label="FAQ categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`faq-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list" role="region" aria-label="Questions list">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon-toggle" aria-hidden="true">
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${index}`} 
                    className="faq-content"
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div 
          style={{ 
            maxWidth: '680px', 
            margin: '48px auto 0', 
            textAlign: 'center', 
            padding: '28px',
            backgroundColor: '#F8FBFC',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)'
          }}
        >
          <div style={{ display: 'inline-flex', padding: '10px', background: 'var(--color-teal-light)', borderRadius: '50%', color: 'var(--color-teal)', marginBottom: '12px' }}>
            <MessageSquare size={22} />
          </div>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '6px' }}>
            Have a Question Not Listed Here?
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
            Our healthcare billing specialists are available to review your practice’s unique requirements.
          </p>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="btn btn-secondary"
          >
            <span>Speak With a Billing Specialist</span>
          </button>
        </div>
      </div>
    </section>
  );
}
