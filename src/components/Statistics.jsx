import React, { useEffect, useState, useRef } from 'react';
import { Award, Building2, Users2, ThumbsUp } from 'lucide-react';

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 'clean-claim',
      target: 98,
      suffix: '%',
      label: 'Clean Claim Rate',
      icon: <Award size={24} />,
      desc: 'First-pass acceptance rate'
    },
    {
      id: 'payer-partners',
      target: 50,
      suffix: '+',
      label: 'Payer Partners',
      icon: <Building2 size={24} />,
      desc: 'Direct electronic clearinghouse ties'
    },
    {
      id: 'providers-served',
      target: 1000,
      suffix: '+',
      label: 'Healthcare Providers',
      icon: <Users2 size={24} />,
      desc: 'Across 30+ medical specialties'
    },
    {
      id: 'client-satisfaction',
      target: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: <ThumbsUp size={24} />,
      desc: 'Provider retention & trust'
    }
  ];

  return (
    <section className="stats-section" aria-label="Key Performance Statistics">
      <div className="container" ref={containerRef}>
        <div className="stats-card-container">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = stat.target;
    const duration = 1800; // ms
    const increment = end / (duration / 25);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isVisible, stat.target]);

  return (
    <div className="stat-item" id={`stat-${stat.id}`}>
      <div className="stat-icon-wrapper" aria-hidden="true">
        {stat.icon}
      </div>
      <div className="stat-details">
        <div className="stat-number">
          {isVisible ? count.toLocaleString() : '0'}
          {stat.suffix}
        </div>
        <div className="stat-label">{stat.label}</div>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {stat.desc}
        </span>
      </div>
    </div>
  );
}
