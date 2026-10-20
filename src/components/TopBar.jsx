import React from 'react';
import { Mail, Phone, Lock, ShieldCheck } from 'lucide-react';

export default function TopBar({ onOpenLogin }) {
  return (
    <aside className="topbar" aria-label="Top information bar">
      <div className="container topbar-container">
        <div className="topbar-left">
          <span className="topbar-badge">
            <span className="pulse-dot" aria-hidden="true" />
            <ShieldCheck size={14} aria-hidden="true" />
            <span>Trusted Medical Billing &amp; Healthcare Solutions</span>
          </span>
          <span className="topbar-divider" aria-hidden="true" />
          <span className="topbar-extra-text" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
            HIPAA Compliant Infrastructure Powered by StelleCloud™
          </span>
        </div>

        <div className="topbar-right">
          <a href="mailto:info@stellemed.com" className="topbar-item" aria-label="Email StelleMed at info@stellemed.com">
            <Mail size={13} aria-hidden="true" />
            <span>info@stellemed.com</span>
          </a>
          <span className="topbar-divider" aria-hidden="true" />
          <a href="tel:+15169797418" className="topbar-item" aria-label="Call StelleMed at +1 (516) 979-7418">
            <Phone size={13} aria-hidden="true" />
            <span>+1 (516) 979-7418</span>
          </a>
          <span className="topbar-divider" aria-hidden="true" />
          <button
            type="button"
            onClick={onOpenLogin}
            className="topbar-login-btn"
            aria-label="Open Client Portal Login"
          >
            <Lock size={12} aria-hidden="true" />
            <span>Client Login</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
