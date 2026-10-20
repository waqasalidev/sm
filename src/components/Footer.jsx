import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Clock, ArrowUpRight, ShieldCheck 
} from 'lucide-react';

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function Footer({ onOpenConsultation, onOpenLogin, onOpenPolicy }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionScroll = (sectionId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        const navOffset = 85;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer id="contact" className="footer" aria-label="Website Footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-brand">
            <Link 
              to="/" 
              className="brand-logo" 
              aria-label="StelleMed Home"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div className="brand-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M7 12H9.5L11 8L13 16L14.5 12H17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">Stelle<span>Med</span></span>
                <span className="brand-tagline" style={{ color: '#A3B9CC' }}>Healthcare Billing Solutions</span>
              </div>
            </Link>

            <p className="footer-desc">
              StelleMed manages the complete revenue cycle for healthcare providers across the United States. 
              Delivering accurate medical billing, certified coding, aggressive denial management, 
              and transparent reporting backed by the security of StelleCloud™.
            </p>

            <div className="footer-social-links" aria-label="Social media channels">
              <a 
                href="https://www.linkedin.com/company/stellemed/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                aria-label="Follow StelleMed on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="https://www.facebook.com/stellemed" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                aria-label="Follow StelleMed on Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://www.instagram.com/stellemed/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                aria-label="Follow StelleMed on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/">
                  <ArrowUpRight size={14} />
                  <span>Home</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about">
                  <ArrowUpRight size={14} />
                  <span>About Us</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/services">
                  <ArrowUpRight size={14} />
                  <span>Services Overview</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <a 
                  href="#how-it-works" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    handleSectionScroll('how-it-works'); 
                  }}
                >
                  <ArrowUpRight size={14} />
                  <span>How It Works</span>
                </a>
              </li>
              <li className="footer-link-item">
                <a 
                  href="#roi-calculator" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    handleSectionScroll('roi-calculator'); 
                  }}
                >
                  <ArrowUpRight size={14} />
                  <span>ROI Calculator</span>
                </a>
              </li>
              <li className="footer-link-item">
                <a 
                  href="#faq" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    handleSectionScroll('faq'); 
                  }}
                >
                  <ArrowUpRight size={14} />
                  <span>FAQ</span>
                </a>
              </li>
              <li className="footer-link-item">
                <button
                  type="button"
                  onClick={onOpenLogin}
                  style={{ background: 'none', border: 'none', color: '#38D4D8', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', padding: 0, cursor: 'pointer' }}
                >
                  <ShieldCheck size={14} />
                  <span>Client Login Portal</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="footer-col-title">Our Solutions</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/services/insurance-payer">
                  <ArrowUpRight size={14} />
                  <span>Insurance &amp; Payer Services</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/services/patient-practice">
                  <ArrowUpRight size={14} />
                  <span>Patient &amp; Practice Services</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/services/technology-support">
                  <ArrowUpRight size={14} />
                  <span>Technology &amp; Support</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/services/insurance-payer">
                  <ArrowUpRight size={14} />
                  <span>Provider Credentialing</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/services/insurance-payer">
                  <ArrowUpRight size={14} />
                  <span>Denial Management &amp; Appeals</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/services/technology-support">
                  <ArrowUpRight size={14} />
                  <span>EHR/PM Workflow Integration</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Mail size={16} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#A3B9CC' }}>Email Us</span>
                  <a href="mailto:info@stellemed.com" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    info@stellemed.com
                  </a>
                </div>
              </li>

              <li className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Phone size={16} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#A3B9CC' }}>Call Office</span>
                  <a href="tel:+15169797418" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    +1 (516) 979-7418
                  </a>
                </div>
              </li>

              <li className="footer-contact-item">
                <div className="footer-contact-icon">
                  <MapPin size={16} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#A3B9CC' }}>Location</span>
                  <address style={{ fontStyle: 'normal', color: 'var(--text-light-muted)' }}>
                    Hicksville, NY
                  </address>
                </div>
              </li>

              <li className="footer-contact-item">
                <div className="footer-contact-icon">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: '#A3B9CC' }}>Official Website</span>
                  <a href="https://www.stellemed.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    www.stellemed.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="footer-bottom">
          <p style={{ color: '#A3B9CC' }}>
            &copy; {new Date().getFullYear()} StelleMed. All rights reserved. Powered by StelleCloud™ Healthcare Technology.
          </p>

          <div className="footer-bottom-links">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              style={{ background: 'none', border: 'none', color: '#A3B9CC', cursor: 'pointer', padding: 0 }}
            >
              Privacy Policy
            </button>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>&bull;</span>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              style={{ background: 'none', border: 'none', color: '#A3B9CC', cursor: 'pointer', padding: 0 }}
            >
              Terms &amp; Conditions
            </button>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>&bull;</span>
            <button
              type="button"
              onClick={() => onOpenPolicy('hipaa')}
              style={{ background: 'none', border: 'none', color: '#A3B9CC', cursor: 'pointer', padding: 0 }}
            >
              HIPAA Notice
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
