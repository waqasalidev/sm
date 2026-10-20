import React from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import RevenueLeaks from '../components/RevenueLeaks';
import RevenueCycleWorkflow from '../components/RevenueCycleWorkflow';
import SixChecks from '../components/SixChecks';
import WaysToWork from '../components/WaysToWork';
import SpecialtiesSection from '../components/SpecialtiesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import RoiCalculator from '../components/RoiCalculator';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home({ onOpenConsultation, onOpenLogin, onSelectServiceForConsultation }) {
  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content">
      {/* 1. Official Hero Section */}
      <Hero
        onOpenConsultation={() => onOpenConsultation('Hero Section')}
        onExploreServices={handleExploreServices}
      />

      {/* 2. Key Performance Commitments & Statistics */}
      <Statistics />

      {/* 3. Three Core Pillars Overview */}
      <Services
        onOpenConsultation={(serviceTitle) => onOpenConsultation(serviceTitle)}
      />

      {/* 4. Where Practices Lose Money (Page 7 Booklet: 8 Revenue Leaks) */}
      <RevenueLeaks
        onOpenConsultation={(title) => onOpenConsultation(title)}
      />

      {/* 5. How We Manage the Revenue Cycle (Page 6 Booklet: 2 Workflows) */}
      <RevenueCycleWorkflow
        onOpenConsultation={(flow) => onOpenConsultation(flow)}
      />

      {/* 6. Six Checks Before Every Claim Goes Out (Page 6 Booklet) */}
      <SixChecks />

      {/* 7. Ways to Work With Us (Page 8 Booklet: 4 Engagement Plans) */}
      <WaysToWork
        onOpenConsultation={(plan) => onOpenConsultation(plan)}
      />

      {/* 8. Specialties We Serve (Page 9 Booklet: 28 Specialties) */}
      <SpecialtiesSection
        onOpenConsultation={(spec) => onOpenConsultation(spec)}
      />

      {/* 9. Why Choose StelleMed Section */}
      <WhyChooseUs
        onOpenConsultation={() => onOpenConsultation('Practice Audit')}
      />

      {/* 10. Interactive Practice ROI / Revenue Recovery Calculator */}
      <RoiCalculator
        onOpenConsultation={(calcNotes) => onOpenConsultation(calcNotes)}
      />

      {/* 11. Healthcare Provider Testimonials Carousel */}
      <Testimonials />

      {/* 12. Interactive FAQ Accordion */}
      <FAQ
        onOpenConsultation={() => onOpenConsultation('FAQ Inquiry')}
      />

      {/* 13. Final Call to Action ("Let's Find Your Missing Revenue") */}
      <FinalCTA
        onOpenConsultation={() => onOpenConsultation('Final CTA')}
        onContactClick={handleContactClick}
      />
    </main>
  );
}
