'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { StructuredData } from '../components/StructuredData';
import '../Imams.css';

interface Imam {
  name: string;
  title: string;
  image: string;
  description: string;
  highlights: string[];
}

const imams: Imam[] = [
  {
    name: 'Sheikh Nageya',
    title: 'Senior Imam',
    image: '/nga.webp',
    description: 'Sheikh Nageya serves as the Senior Imam at Al Rahma Islamic Center, bringing decades of experience in Islamic scholarship and community leadership. His deep knowledge of the Quran and Sunnah, combined with his compassionate approach to guidance, has made him a beloved figure in our community.',
    highlights: [
      'Over 25 years of experience in Islamic scholarship',
      'Leads Jumu\'ah prayers and delivers weekly Khutbahs',
      'Provides spiritual guidance and counseling',
      'Oversees religious education programs'
    ]
  }
];

const Imams: React.FC = () => {
  const heroRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  return (
    <div className="imams-page">
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Our Imams', url: '/imams' },
        ]}
      />
      {/* Back Navigation */}
      <motion.header
        className="imams-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link href="/" className="imams-back-link">
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>
      </motion.header>

      {/* Hero Section */}
      <section className="imams-hero" ref={heroRef}>
        <motion.div
          className="imams-hero-content"
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.span className="imams-label" variants={fadeUp}>
            SPIRITUAL LEADERSHIP
          </motion.span>
          <motion.h1 className="imams-title" variants={fadeUp}>
            Our Imams
          </motion.h1>
          <motion.p className="imams-subtitle" variants={fadeUp}>
            Dedicated leaders guiding our community with knowledge, wisdom, and compassion
          </motion.p>
        </motion.div>
      </section>

      {/* Imams Section */}
      <section className="imams-content" ref={contentRef}>
        <div className="container">
          <motion.div
            className="imams-grid"
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {imams.map((imam, index) => (
              <motion.div
                key={imam.name}
                className={`imam-card ${index === 0 ? 'senior' : ''}`}
                variants={fadeUp}
              >
                <div className="imam-image-wrapper">
                  <img src={imam.image} alt={imam.name} className="imam-image" loading="lazy" decoding="async" />
                  {index === 0 && <span className="imam-badge">Senior Imam</span>}
                </div>
                <div className="imam-info">
                  <h2 className="imam-name">{imam.name}</h2>
                  <span className="imam-title">{imam.title}</span>
                  <p className="imam-description">{imam.description}</p>
                  <ul className="imam-highlights">
                    {imam.highlights.map((highlight, i) => (
                      <li key={i}>
                        <i className="fas fa-check"></i>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="imams-cta">
        <div className="container">
          <motion.div
            className="imams-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Need Spiritual Guidance?</h3>
            <p>Our Imams are here to support you. Reach out for counseling, questions, or guidance.</p>
            <a href="tel:+16025748750" className="imams-cta-btn">
              <i className="fas fa-phone"></i>
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="imams-footer">
        <div className="container">
          <div className="imams-footer-content">
            <div className="imams-footer-brand">
              <div className="logo-icon">
                <i className="fas fa-mosque"></i>
              </div>
              <div className="logo-text">
                <span className="logo-name" style={{ color: 'var(--primary)' }}>Al Rahma</span>
                <span className="logo-tagline" style={{ color: 'rgba(26,26,26,0.5)' }}>Islamic Center of Phoenix</span>
              </div>
            </div>
            <p className="imams-footer-copyright">
              © {new Date().getFullYear()} Al Rahma Islamic Center of Phoenix
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Imams;
