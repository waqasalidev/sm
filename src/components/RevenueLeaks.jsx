import React from 'react';
import { 
  AlertTriangle, DollarSign, Clock, FileX, 
  HelpCircle, ShieldCheck, ArrowRight, Ban, CheckCircle2 
} from 'lucide-react';

export default function RevenueLeaks({ onOpenConsultation }) {
  const leaks = [
    {
      id: 'unbilled',
      title: 'Unbilled Visits',
      desc: 'Patient encounters that take place but are never coded, billed, or submitted, leading to silent, permanent revenue loss.'
    },
    {
      id: 'denials',
      title: 'Denials Not Appealed',
      desc: 'Legitimate clinical claims rejected by payers that staff simply write off instead of preparing clinical appeals.'
    },
    {
      id: 'underpayments',
      title: 'Underpayments',
      desc: 'Insurers reimbursing below contracted fee schedule rates without being audited or challenged by the practice.'
    },
    {
      id: 'patient-balances',
      title: 'Patient Balances Unpaid',
      desc: 'High deductibles and co-pays left uncollected due to lack of upfront estimates and convenient digital payment options.'
    },
    {
      id: 'deadlines',
      title: 'Missed Filing Deadlines',
      desc: 'Claims delayed past payer timely filing limits, resulting in unappealable, total forfeiture of reimbursement.'
    },
    {
      id: 'payments-unposted',
      title: 'Payments Not Posted',
      desc: 'Checks and ERAs sitting unposted, distorting financial balances and preventing accurate secondary billing.'
    },
    {
      id: 'claims-rejected',
      title: 'Claims Rejected',
      desc: 'Clearinghouse front-end format and demographic rejections that stall before reaching the payer adjudicator.'
    },
    {
      id: 'no-response',
      title: 'No Response on Claims',
      desc: 'Claims lost in payer black holes where no follow-up is initiated, allowing carrier statutory hold periods to lapse.'
    }
  ];

  return (
    <section className="section" id="revenue-leaks" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header text-center">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <AlertTriangle size={14} className="text-teal" />
            <span>Revenue Leak Prevention</span>
          </div>
          <h2 className="section-title">
            Where Practices <span className="text-teal">Lose Money</span>
          </h2>
          <p className="section-desc">
            Revenue leaks happen at many points across the care cycle. StelleMed checks for every one of these, so no revenue is left behind.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginTop: '36px',
            marginBottom: '36px'
          }}
        >
          {leaks.map((item, idx) => (
            <div 
              key={item.id}
              className="card"
              style={{
                padding: '24px 20px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                borderTop: '3px solid var(--color-teal)',
                backgroundColor: '#FFFFFF',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span 
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#FEE2E2',
                    color: '#DC2626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    flexShrink: 0
                  }}
                >
                  {idx + 1}
                </span>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', margin: 0, fontWeight: 700 }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.55', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div 
          style={{
            background: 'linear-gradient(135deg, var(--color-navy) 0%, #103456 100%)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '28px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-teal)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
              <ShieldCheck size={20} />
              <span>Full-Spectrum Financial Protection</span>
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 600, color: '#FFFFFF', lineHeight: '1.4' }}>
              StelleMed checks for every one of these 8 points, so no revenue is left behind.
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Revenue Leak Audit')}
            className="btn btn-primary"
            style={{ flexShrink: 0 }}
          >
            <span>Let’s Find Your Missing Revenue</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
