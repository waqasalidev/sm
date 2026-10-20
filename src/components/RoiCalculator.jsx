import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Clock, CheckCircle, ShieldCheck } from 'lucide-react';

export default function RoiCalculator({ onOpenConsultation }) {
  const [monthlyBilling, setMonthlyBilling] = useState(120000);
  const [specialty, setSpecialty] = useState('internal-medicine');
  const [providerCount, setProviderCount] = useState(3);

  // Dynamic calculation logic based on industry benchmark averages
  const recoveryRate = specialty === 'orthopedics' || specialty === 'surgery' ? 0.22 : 0.18;
  const estimatedAnnualRecovery = Math.round(monthlyBilling * 12 * recoveryRate);
  const currentArDays = 48 + Math.round(providerCount * 1.5);
  const projectedArDays = 26;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="roi-calculator" className="roi-section" aria-label="Practice ROI Calculator">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow dark-theme">
            <Calculator size={14} aria-hidden="true" />
            <span>Practice Revenue Recovery Estimator</span>
          </div>
          <h2 className="section-title dark-theme">
            Calculate Your Practice’s <span className="text-teal" style={{ color: '#38D4D8' }}>Lost Revenue Recovery</span>
          </h2>
          <p className="section-desc dark-theme">
            Average US practices lose 15% to 25% of legitimate billings to unresolved claim denials, 
            coding inaccuracies, and delayed payer follow-ups. See how much StelleMed can recapture.
          </p>
        </div>

        <div className="roi-container-card">
          <div className="roi-grid">
            {/* Left Column: Interactive Sliders & Selectors */}
            <div className="roi-controls">
              {/* Monthly Collections Slider */}
              <div className="roi-control-group">
                <div className="roi-label-row">
                  <span className="roi-label">Current Monthly Practice Billings</span>
                  <span className="roi-value-display">{formatCurrency(monthlyBilling)} / mo</span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="1000000"
                  step="10000"
                  value={monthlyBilling}
                  onChange={(e) => setMonthlyBilling(Number(e.target.value))}
                  className="roi-slider"
                  aria-label="Monthly Billing Volume"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#A3B9CC' }}>
                  <span>$30k/mo</span>
                  <span>$500k/mo</span>
                  <span>$1M+/mo</span>
                </div>
              </div>

              {/* Specialty Selector */}
              <div className="roi-control-group">
                <label htmlFor="roi-specialty-select" className="roi-label">
                  Primary Medical Specialty
                </label>
                <select
                  id="roi-specialty-select"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="roi-specialty-select"
                >
                  <option value="internal-medicine">Internal Medicine / Primary Care</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="orthopedics">Orthopedics &amp; Sports Medicine</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="mental-health">Behavioral &amp; Mental Health</option>
                  <option value="surgery">General Surgery / ASC</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="multi-specialty">Multi-Specialty Clinic</option>
                </select>
              </div>

              {/* Number of Providers */}
              <div className="roi-control-group">
                <div className="roi-label-row">
                  <span className="roi-label">Number of Billing Providers</span>
                  <span className="roi-value-display">{providerCount} {providerCount === 1 ? 'Provider' : 'Providers'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={providerCount}
                  onChange={(e) => setProviderCount(Number(e.target.value))}
                  className="roi-slider"
                  aria-label="Number of billing providers"
                />
              </div>
            </div>

            {/* Right Column: Calculated Results Card */}
            <div className="roi-results-box" role="region" aria-label="Estimated Recovery Results">
              <div className="roi-stat-highlight">
                <span className="roi-stat-title">Estimated Annual Revenue Recaptured</span>
                <div className="roi-recovered-amount">
                  {formatCurrency(estimatedAnnualRecovery)}
                </div>
                <span style={{ fontSize: '0.8125rem', color: '#EAF8F8' }}>
                  *Based on average 18% - 22% denial recovery &amp; underpayment audits
                </span>
              </div>

              <div className="roi-breakdown-row">
                <div className="roi-metric-item">
                  <span className="roi-metric-label">A/R Days Reduction</span>
                  <div className="roi-metric-val">
                    {currentArDays}d &rarr; <span style={{ color: '#38D4D8' }}>{projectedArDays} days</span>
                  </div>
                </div>

                <div className="roi-metric-item">
                  <span className="roi-metric-label">Target Clean Claims</span>
                  <div className="roi-metric-val" style={{ color: '#38D4D8' }}>
                    98.5%
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8125rem', color: '#D2E3EF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={15} style={{ color: '#38D4D8', flexShrink: 0 }} />
                  <span>Elimination of payer denial backlogs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={15} style={{ color: '#38D4D8', flexShrink: 0 }} />
                  <span>Real-time EHR clearinghouse claim validation</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '6px' }}
                onClick={() => onOpenConsultation(`Estimated Annual Recovery: ${formatCurrency(estimatedAnnualRecovery)}`)}
              >
                <span>Claim Your Detailed Practice Audit</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
