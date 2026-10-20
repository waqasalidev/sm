import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import InsurancePayerPage from './pages/InsurancePayerPage';
import PatientPracticePage from './pages/PatientPracticePage';
import TechnologySupportPage from './pages/TechnologySupportPage';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ClientLoginModal from './components/ClientLoginModal';
import PolicyModal from './components/PolicyModal';
import Toast from './components/Toast';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('info');

  const showToast = (message, type = 'info') => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage('');
    }, 5000);
  };

  const handleOpenConsultation = (serviceTitle = '') => {
    setPrefilledService(serviceTitle);
    setConsultationOpen(true);
  };

  return (
    <div className="stellemed-app-root">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* 1. Top Information Bar */}
      <TopBar onOpenLogin={() => setLoginModalOpen(true)} />

      {/* 2. Main Sticky Navigation Bar */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* 3. Main Routed Page Content */}
      <div className="main-route-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenConsultation={handleOpenConsultation}
                onOpenLogin={() => setLoginModalOpen(true)}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesOverviewPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />
          <Route
            path="/services/insurance-payer"
            element={
              <InsurancePayerPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />
          <Route
            path="/services/patient-practice"
            element={
              <PatientPracticePage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />
          <Route
            path="/services/technology-support"
            element={
              <TechnologySupportPage
                onOpenConsultation={handleOpenConsultation}
              />
            }
          />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* 4. Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenPolicy={(type) => setPolicyType(type)}
      />

      {/* 5. Modals & Notifications */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        prefilledService={prefilledService}
        onShowToast={showToast}
      />

      <ClientLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onShowToast={showToast}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage('')}
      />

      {/* 6. Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
