import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeUp, scaleIn } from '../components/animations';

const features = [
  {
    icon: 'fas fa-archway',
    title: 'Architectural Harmony',
    description: 'The golden dome reflects the light of knowledge, while our spacious halls are designed with minimalism to minimize distraction during prayer. The structure utilizes sustainable materials, blending environmental responsibility with spiritual stewardship.',
  },
  {
    icon: 'fas fa-users',
    title: 'Community First',
    description: 'We believe the heart of the Masjid is its people. From youth programs in our community center to interfaith dialogues held in our courtyard, Al-Rahma is an open door to anyone seeking understanding and connection.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Education & Growth',
    description: 'Our adjoining library and classrooms provide resources for Islamic studies, Arabic language learning, and modern skills workshops, empowering the next generation of leaders.',
  },
];

export function AboutPage() {
  const heroRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

  return (
    <div className="about-page">
      {/* Navigation Header */}
      <motion.header 
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="about-nav-container">
          <Link to="/" className="about-back-link">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
          <nav className="about-nav-links">
            <Link to="/about" className="about-nav-link active">About</Link>
            <Link to="/education" className="about-nav-link">Education</Link>
            <Link to="/community" className="about-nav-link">Community</Link>
            <Link to="/prayer-times" className="about-nav-link">Prayer Times</Link>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="about-hero" ref={heroRef}>
        <motion.div 
          className="about-hero-content"
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.span 
            className="about-established"
            variants={fadeUp}
          >
            Established 1998
          </motion.span>
          <motion.h1 
            className="about-title"
            variants={fadeUp}
          >
            A Sanctuary of<br />
            <span className="about-title-italic">Peace & Reflection</span>
          </motion.h1>
        </motion.div>

        {/* Featured Image */}
        <motion.div 
          className="about-featured-image"
          variants={scaleIn}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
        >
          <img src="/side.png" alt="Al-Rahma Islamic Center Campus" />
          <div className="about-image-overlay"></div>
          <div className="about-image-caption">
            <span className="about-image-title">The Campus</span>
            <span className="about-image-subtitle">South Entrance • Sunset View</span>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="about-content-section" ref={contentRef}>
        <div className="container">
          <motion.div 
            className="about-grid"
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {/* Left Column - Story */}
            <motion.div className="about-story" variants={fadeUp}>
              <h2 className="about-story-title">
                Bridging tradition with modern community needs.
              </h2>
              <div className="about-story-text">
                <p>
                  Masjid Al-Rahma is more than a place of worship; it is a spiritual 
                  home designed to nurture the soul and intellect. Founded over 
                  two decades ago, our vision has always been to create a space 
                  that breathes tranquility.
                </p>
                <p>
                  Inspired by the geometric harmony of traditional Islamic 
                  architecture yet rooted in the contemporary landscape of our 
                  city, the Masjid stands as a testament to the enduring relevance 
                  of faith.
                </p>
              </div>
              <motion.a 
                href="#" 
                className="about-history-link"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                Read Our Full History <i className="fas fa-arrow-right"></i>
              </motion.a>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div 
              className="about-features"
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="about-feature-card"
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="about-feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="about-feature-content">
                    <h3 className="about-feature-title">{feature.title}</h3>
                    <p className="about-feature-description">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="container">
          <div className="about-footer-content">
            <div className="about-footer-brand">
              <div className="logo-icon">
                <i className="fas fa-mosque"></i>
              </div>
              <div className="logo-text">
                <span className="logo-name" style={{ color: 'var(--primary)' }}>Al Rahma</span>
                <span className="logo-tagline" style={{ color: 'rgba(26,26,26,0.5)' }}>Islamic Center of Phoenix</span>
              </div>
            </div>
            <p className="about-footer-copyright">
              © {new Date().getFullYear()} Al Rahma Islamic Center of Phoenix
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

