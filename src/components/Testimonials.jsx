import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, HeartHandshake, Info } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Clearly identified realistic healthcare placeholder testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Having one dedicated account manager instead of an impersonal support queue changed everything for our practice. They actually know our providers, understand our specialty, and turn claims around in days.",
      author: "Maria Lopez",
      role: "Practice Administrator",
      organization: "Summit Regional Medical Group",
      specialty: "Multi-Specialty Care",
      avatar: "https://images.unsplash.com/photo-1594824813583-a75d1f87c88b?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      impact: "Reduced A/R days from 54 to 26 days"
    },
    {
      id: 2,
      quote: "The monthly reports finally gave our executive team a transparent, clear picture of where our revenue was going — and where denials were getting stuck. StelleMed cleaned up our aging A/R in under 60 days.",
      author: "David Chen, MHA",
      role: "Chief Operating Officer",
      organization: "Apex Family Medicine Network",
      specialty: "Primary Care & Pediatrics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      impact: "+22% increase in monthly collections"
    },
    {
      id: 3,
      quote: "Patient billing used to consume hours of our front-desk staff’s time every single day. With StelleMed and StelleCloud handling patient statements and digital collections, our staff can focus 100% on patients in the waiting room.",
      author: "Dr. Sarah Bennett, MD",
      role: "Medical Director",
      organization: "Coastal Orthopedic & Spine Center",
      specialty: "Orthopedic Surgery",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      impact: "Clean claim rate steady at 98.6%"
    },
    {
      id: 4,
      quote: "We used to spend hours every week on hold with commercial payers fighting over trivial modifier rejections. Our StelleMed account specialist tackles appeals aggressively and recovers funds we had written off.",
      author: "Lisa Alvarez",
      role: "Billing Coordinator",
      organization: "Harborview Cardiology Associates",
      specialty: "Cardiology",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      impact: "99% payer contract compliance"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section testimonials-section" aria-label="Client Testimonials Section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <HeartHandshake size={14} className="text-teal" aria-hidden="true" />
            <span>Healthcare Provider Feedback</span>
          </div>
          <h2 className="section-title">
            Trusted by Healthcare <span className="text-teal">Providers Nationwide</span>
          </h2>
          <p className="section-desc">
            Discover how independent practices, medical groups, and clinics across the United States 
            partner with StelleMed to conquer billing complexity.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="testimonials-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonial-card-active">
            {/* Background Quote Watermark */}
            <Quote className="testimonial-quote-icon" aria-hidden="true" />

            {/* Star Rating & Impact Pill */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
              <div className="testimonial-stars" aria-label={`Rated ${current.rating} out of 5 stars`}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>
              <span className="badge-pill badge-teal">
                {current.impact}
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="testimonial-quote-text">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Profile */}
            <div className="testimonial-author-row">
              <img
                src={current.avatar}
                alt={current.author}
                className="author-avatar"
                loading="lazy"
                width="56"
                height="56"
              />
              <div className="author-details">
                <span className="author-name">{current.author}</span>
                <span className="author-role">{current.role} &bull; {current.organization}</span>
                <span className="author-practice">{current.specialty}</span>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <button
              type="button"
              onClick={handlePrev}
              className="carousel-btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="carousel-dots" role="tablist">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  role="tab"
                  aria-selected={currentIndex === idx}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="carousel-btn"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Transparency Disclaimer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '20px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <Info size={13} />
            <span>Illustrative client case scenarios representing common healthcare provider workflows and results.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
