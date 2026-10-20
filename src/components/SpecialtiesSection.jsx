import React, { useState } from 'react';
import { 
  Stethoscope, Heart, Baby, Brain, Eye, 
  Activity, Smile, Bone, Search, ArrowRight 
} from 'lucide-react';

export default function SpecialtiesSection({ onOpenConsultation }) {
  const [searchTerm, setSearchTerm] = useState('');

  const specialties = [
    { name: 'Primary Care', category: 'General Medicine' },
    { name: 'Family Medicine', category: 'General Medicine' },
    { name: 'Internal Medicine', category: 'General Medicine' },
    { name: 'Pediatrics', category: 'Pediatric Care' },
    { name: 'Cardiology', category: 'Cardiovascular' },
    { name: 'Vascular Surgery', category: 'Cardiovascular' },
    { name: 'Neurology', category: 'Neurosciences' },
    { name: 'Neurosurgery', category: 'Neurosciences' },
    { name: 'Psychiatry', category: 'Mental Health' },
    { name: 'Mental Health', category: 'Mental Health' },
    { name: 'OB/GYN', category: 'Women\'s Health' },
    { name: 'General Surgery', category: 'Surgical Care' },
    { name: 'Thoracic Surgery', category: 'Surgical Care' },
    { name: 'Orthopedics', category: 'Musculoskeletal' },
    { name: 'Chiropractic', category: 'Musculoskeletal' },
    { name: 'Physical Therapy', category: 'Rehabilitation' },
    { name: 'Podiatry', category: 'Specialized Care' },
    { name: 'Dental', category: 'Specialized Care' },
    { name: 'Vision', category: 'Specialized Care' },
    { name: 'ENT', category: 'Specialized Care' },
    { name: 'Urology', category: 'Specialized Care' },
    { name: 'Pulmonology', category: 'Pulmonary & Respiratory' },
    { name: 'Nephrology', category: 'Renal & Kidney' },
    { name: 'Digestive Health', category: 'Gastroenterology' },
    { name: 'Urgent Care', category: 'Acute Care' },
    { name: 'Emergency Room / Emergency Medicine', category: 'Acute Care' },
    { name: 'Home Health', category: 'Outreach & Home' },
    { name: 'DME', category: 'Equipment & Supplies' }
  ];

  const filtered = specialties.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section" id="specialties" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <Stethoscope size={14} className="text-teal" />
            <span>Clinical Breadth</span>
          </div>
          <h2 className="section-title">
            Specialties We <span className="text-teal">Serve</span>
          </h2>
          <p className="section-desc">
            Our certified medical billers and coders understand the nuanced clinical documentation and payer guidelines for 28 healthcare specialties.
          </p>

          {/* Search filter for ease of use */}
          <div style={{ maxWidth: '400px', margin: '20px auto 0', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input
              type="text"
              placeholder="Search your medical specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 42px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
          </div>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '14px',
            marginTop: '36px'
          }}
        >
          {filtered.map((item, idx) => (
            <div 
              key={idx}
              style={{
                padding: '16px 14px',
                borderRadius: 'var(--radius-md)',
                background: '#F8FBFC',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onClick={() => onOpenConsultation && onOpenConsultation(`Specialty Inquiry: ${item.name}`)}
            >
              <div style={{ fontSize: '0.7rem', color: 'var(--color-teal)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                {item.category}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)' }}>
                {item.name}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '14px' }}>
            Don't see your specific multi-disciplinary clinic listed? We support custom payer rule sets for any clinical setting.
          </p>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Specialties Consultation')}
            className="btn btn-secondary"
          >
            <span>Inquire About Your Specialty</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
