import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, FileCheck, Users, Cpu, 
  Calculator, HelpCircle, Layers, ArrowRight, PhoneCall, ShieldCheck, Sparkles
} from 'lucide-react';

export default function Navbar({ onOpenConsultation, onOpenLogin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
  }, [location.pathname]);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);

    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const navOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const isServicesActive = location.pathname.startsWith('/services');
  const isAboutActive = location.pathname === '/about';
  const isHomeActive = location.pathname === '/' && !location.hash;

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar" aria-label="Main Navigation">
            {/* Logo */}
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
                {/* Custom Healthcare Pulse & Cross Emblem */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M7 12H9.5L11 8L13 16L14.5 12H17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">Stelle<span>Med</span></span>
                <span className="brand-tagline">Healthcare Billing Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${isHomeActive ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li 
                className={`nav-dropdown ${servicesDropdownOpen ? 'is-open' : ''}`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-trigger ${isServicesActive ? 'active' : ''}`}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown size={15} className="dropdown-chevron" aria-hidden="true" />
                </button>

                <div className="dropdown-menu" role="menu">
                  <Link
                    to="/services"
                    className="dropdown-item"
                    role="menuitem"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="dropdown-item-icon" style={{ background: 'rgba(23, 154, 158, 0.15)', color: '#179A9E' }}>
                      <Sparkles size={18} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">All Services Overview</span>
                      <span className="dropdown-item-desc">Comprehensive RCM &amp; billing solutions</span>
                    </div>
                  </Link>

                  <Link
                    to="/services/insurance-payer"
                    className="dropdown-item"
                    role="menuitem"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="dropdown-item-icon">
                      <FileCheck size={18} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Insurance &amp; Payer Services</span>
                      <span className="dropdown-item-desc">Verifications, credentialing &amp; claims</span>
                    </div>
                  </Link>

                  <Link
                    to="/services/patient-practice"
                    className="dropdown-item"
                    role="menuitem"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="dropdown-item-icon">
                      <Users size={18} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Patient &amp; Practice Services</span>
                      <span className="dropdown-item-desc">Billing, statements &amp; self-pay support</span>
                    </div>
                  </Link>

                  <Link
                    to="/services/technology-support"
                    className="dropdown-item"
                    role="menuitem"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="dropdown-item-icon">
                      <Cpu size={18} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Technology &amp; Support</span>
                      <span className="dropdown-item-desc">StelleCloud™ portal &amp; automation</span>
                    </div>
                  </Link>
                </div>
              </li>

              <li>
                <Link
                  to="/about"
                  className={`nav-link ${isAboutActive ? 'active' : ''}`}
                >
                  About Us
                </Link>
              </li>

              {/* Resources Dropdown */}
              <li 
                className={`nav-dropdown ${resourcesDropdownOpen ? 'is-open' : ''}`}
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link dropdown-trigger"
                  onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                  aria-expanded={resourcesDropdownOpen}
                >
                  <span>Resources</span>
                  <ChevronDown size={15} className="dropdown-chevron" aria-hidden="true" />
                </button>

                <div className="dropdown-menu" role="menu">
                  <a
                    href="#roi-calculator"
                    className="dropdown-item"
                    role="menuitem"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('roi-calculator');
                    }}
                  >
                    <div className="dropdown-item-icon">
                      <Calculator size={18} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Revenue Recovery Calculator</span>
                      <span className="dropdown-item-desc">Estimate your practice ROI</span>
                    </div>
                  </a>

                  <a
                    href="#how-it-works"
                    className="dropdown-item"
                    role="menuitem"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('how-it-works');
                    }}
                  >
                    <div className="dropdown-item-icon">
                      <Layers size={18} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">How It Works</span>
                      <span className="dropdown-item-desc">Our 4-step onboarding journey</span>
                    </div>
                  </a>

                  <a
                    href="#faq"
                    className="dropdown-item"
                    role="menuitem"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('faq');
                    }}
                  >
                    <div className="dropdown-item-icon">
                      <HelpCircle size={18} />
                    </div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">Knowledge Base &amp; FAQ</span>
                      <span className="dropdown-item-desc">Common provider questions answered</span>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('contact')}
                  className="nav-link"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Desktop Actions */}
            <div className="nav-actions">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn btn-primary btn-nav-cta"
              >
                <span>Get Started</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                type="button"
                className="hamburger-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="mobile-nav-header">
          <div className="brand-logo">
            <div className="brand-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M7 12H9.5L11 8L13 16L14.5 12H17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">Stelle<span>Med</span></span>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-nav-body">
          <Link
            to="/"
            className={`mobile-nav-link ${isHomeActive ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              type="button"
              className={`mobile-nav-link ${isServicesActive ? 'active' : ''}`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown 
                size={18} 
                style={{ 
                  transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }} 
              />
            </button>
            {mobileServicesOpen && (
              <div className="mobile-nav-submenu">
                <Link
                  to="/services"
                  className="mobile-nav-sublink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Sparkles size={16} />
                  <span>All Services Overview</span>
                </Link>
                <Link
                  to="/services/insurance-payer"
                  className="mobile-nav-sublink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileCheck size={16} />
                  <span>Insurance &amp; Payer Services</span>
                </Link>
                <Link
                  to="/services/patient-practice"
                  className="mobile-nav-sublink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Users size={16} />
                  <span>Patient &amp; Practice Services</span>
                </Link>
                <Link
                  to="/services/technology-support"
                  className="mobile-nav-sublink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Cpu size={16} />
                  <span>Technology &amp; Support</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`mobile-nav-link ${isAboutActive ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Resources Accordion */}
          <div>
            <button
              type="button"
              className="mobile-nav-link"
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            >
              <span>Resources</span>
              <ChevronDown 
                size={18} 
                style={{ 
                  transform: mobileResourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }} 
              />
            </button>
            {mobileResourcesOpen && (
              <div className="mobile-nav-submenu">
                <button
                  type="button"
                  className="mobile-nav-sublink"
                  onClick={() => handleNavClick('roi-calculator')}
                >
                  <Calculator size={16} />
                  <span>Practice ROI Calculator</span>
                </button>
                <button
                  type="button"
                  className="mobile-nav-sublink"
                  onClick={() => handleNavClick('how-it-works')}
                >
                  <Layers size={16} />
                  <span>How It Works</span>
                </button>
                <button
                  type="button"
                  className="mobile-nav-sublink"
                  onClick={() => handleNavClick('faq')}
                >
                  <HelpCircle size={16} />
                  <span>FAQ &amp; Knowledge Base</span>
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="mobile-nav-link"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </div>

        <div className="mobile-nav-footer">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <PhoneCall size={16} />
            <span>Book Free Consultation</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenLogin();
            }}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <ShieldCheck size={16} />
            <span>Client Login Portal</span>
          </button>
        </div>
      </div>
    </>
  );
}
