import React, { useState } from 'react';
import { X, Lock, Eye, EyeOff, ShieldCheck, CheckCircle2, ArrowRight, UserCheck, KeyRound } from 'lucide-react';

export default function ClientLoginModal({ isOpen, onClose, onShowToast }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [demoLoggedIn, setDemoLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDemoLoggedIn(true);
      if (onShowToast) {
        onShowToast('Welcome to StelleCloud Provider Portal (Demo Mode)!', 'success');
      }
    }, 700);
  };

  const handleFillDemo = () => {
    setEmail('dr.jenkins@apexhealth.com');
    setPassword('DemoStelleMed2026!');
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="badge-pill badge-teal" style={{ marginBottom: '6px', alignSelf: 'flex-start' }}>
              StelleCloud™ Secure Gateway
            </span>
            <h3 id="login-modal-title" className="modal-title">
              {demoLoggedIn ? 'Provider Portal Preview' : 'Client Login Portal'}
            </h3>
            <span className="modal-subtitle">
              {demoLoggedIn ? 'Connected to Sandbox Practice Database' : 'Authorized Healthcare Provider & Billing Staff Access'}
            </span>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={() => {
              setDemoLoggedIn(false);
              onClose();
            }}
            aria-label="Close Login Modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {demoLoggedIn ? (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ECFDF5', 
                  color: '#10B981', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px' 
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '6px' }}>
                Welcome, Dr. Sarah Jenkins
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '20px' }}>
                Apex Health Associates &bull; Provider NPI: 1487293810
              </p>

              {/* Portal Metric Preview Snapshot */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px', textAlign: 'left' }}>
                <div style={{ background: '#F8FBFC', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Claims Submitted (MTD)</span>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-navy)', marginTop: '2px' }}>$184,250</div>
                  <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>98.9% Clean First-Pass</span>
                </div>
                <div style={{ background: '#F8FBFC', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Days in A/R</span>
                  <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-teal)', marginTop: '2px' }}>24.2 Days</div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Goal: &lt; 30 Days</span>
                </div>
              </div>

              <div style={{ background: '#EAF8F8', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(23, 154, 158, 0.2)', fontSize: '0.8125rem', color: 'var(--color-navy)', marginBottom: '20px', textAlign: 'left' }}>
                <strong>Live Dedicated Account Specialist:</strong> Elena Rostova (Direct phone &amp; secure portal messaging active).
              </div>

              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: '100%' }}
                onClick={() => {
                  setDemoLoggedIn(false);
                  onClose();
                }}
              >
                Log Out &amp; Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="portal-email" className="form-label">Work Email / Provider NPI</label>
                <input
                  id="portal-email"
                  type="email"
                  required
                  placeholder="provider@practice.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="portal-password" className="form-label">Password</label>
                  <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your verified clinic administrator email.'); }} style={{ fontSize: '0.75rem', color: 'var(--color-teal)', fontWeight: 600 }}>
                    Forgot Password?
                  </a>
                </div>
                <div style={{ position: 'relative' }}>
                  <input
                    id="portal-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    style={{ paddingRight: '40px' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Demo Fill Helper */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                <button
                  type="button"
                  onClick={handleFillDemo}
                  style={{ fontSize: '0.8125rem', color: 'var(--color-teal)', display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                >
                  <KeyRound size={14} />
                  <span>Use Demo Provider Credentials</span>
                </button>
              </div>

              <div style={{ background: '#F8FBFC', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                <ShieldCheck size={20} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
                <span>Protected by 256-bit SSL encryption &amp; HIPAA audit logs. Unauthorized access is prohibited.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                {loading ? (
                  <span>Authenticating via StelleCloud...</span>
                ) : (
                  <>
                    <Lock size={16} />
                    <span>Secure Sign In</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
