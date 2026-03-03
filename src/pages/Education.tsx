import React from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';
import '../Education.css';

const Education: React.FC = () => {
  const heroRef = React.useRef(null);
  const programsRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const programsInView = useInView(programsRef, { once: true, margin: '-100px' });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const programs = [
    {
      icon: 'fas fa-quran',
      title: 'Quran Memorization',
      description: 'Structured Hifz program with certified teachers guiding students through complete Quran memorization with proper Tajweed.',
      ages: 'Ages 5-18'
    },
    {
      icon: 'fas fa-language',
      title: 'Arabic Language',
      description: 'Comprehensive Arabic curriculum from beginner to advanced levels, focusing on reading, writing, and conversational skills.',
      ages: 'All Ages'
    },
    {
      icon: 'fas fa-book-reader',
      title: 'Islamic Studies',
      description: 'Age-appropriate lessons on Aqeedah, Fiqh, Seerah, and Islamic history to build a strong foundation of faith.',
      ages: 'Ages 6-16'
    },
    {
      icon: 'fas fa-mosque',
      title: 'Weekend School',
      description: 'Saturday and Sunday classes combining Quran, Arabic, and Islamic studies in a structured weekend program.',
      ages: 'Ages 5-15'
    }
  ];

  const classFeatures = [
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Qualified Instructors',
      description: 'Our teachers are certified Hafiz and Islamic scholars with years of teaching experience.'
    },
    {
      icon: 'fas fa-users',
      title: 'Small Class Sizes',
      description: 'Personalized attention with a maximum of 10 students per class for optimal learning.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Progress Tracking',
      description: 'Regular assessments and parent updates to monitor your child\'s learning journey.'
    }
  ];

  return (
    <div className="education-page">
      <SEO
        title="Islamic Education & Arabic Classes"
        description="Enroll in AICP's Madrasah programs: Quran memorization (Hifz), Arabic language classes, Islamic studies, and weekend school for all ages. Certified teachers, small class sizes, and flexible schedules in Phoenix, AZ."
        canonical="/education"
        keywords="islamic school phoenix, arabic classes phoenix az, quran memorization phoenix, hifz program arizona, islamic studies phoenix, weekend islamic school, madrasah phoenix"
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Education', url: '/education' },
        ]}
      />
      {/* Navigation Header - Same as AboutPage */}
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
            <Link to="/about" className="about-nav-link">About</Link>
            <Link to="/education" className="about-nav-link active">Education</Link>
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
          <motion.span className="about-established" variants={fadeUp}>
            AICP Madrasah
          </motion.span>
          <motion.h1 className="about-title" variants={fadeUp}>
            Nurturing Future<br />
            <span className="about-title-italic">Leaders of Faith</span>
          </motion.h1>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="about-featured-image"
          variants={scaleIn}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
        >
          <picture>
            <source srcSet="/class2.webp" type="image/webp" />
            <img src="/class2.webp" alt="Students learning at AICP" loading="lazy" decoding="async" />
          </picture>
          <div className="about-image-overlay"></div>
          <div className="about-image-caption">
            <span className="about-image-title">Weekend Madrasah</span>
            <span className="about-image-subtitle">Quran & Arabic Classes</span>
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="edu-programs" ref={programsRef}>
        <div className="container">
          <motion.div
            className="edu-programs-header"
            initial="hidden"
            animate={programsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span className="edu-section-label" variants={fadeUp}>
              OUR PROGRAMS
            </motion.span>
            <motion.h2 className="edu-section-title" variants={fadeUp}>
              Comprehensive Islamic Education
            </motion.h2>
            <motion.p className="edu-section-description" variants={fadeUp}>
              Building strong foundations in Quran, Arabic, and Islamic studies for students of all ages.
            </motion.p>
          </motion.div>

          <motion.div
            className="edu-programs-grid"
            initial="hidden"
            animate={programsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="edu-program-card"
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <div className="edu-program-icon">
                  <i className={program.icon}></i>
                </div>
                <h3 className="edu-program-title">{program.title}</h3>
                <p className="edu-program-description">{program.description}</p>
                <span className="edu-program-ages">{program.ages}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="edu-features">
        <div className="container">
          <motion.div
            className="edu-features-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="edu-section-label" variants={fadeUp}>
              WHY CHOOSE AICP
            </motion.span>
            <motion.h2 className="edu-section-title" variants={fadeUp}>
              Excellence in Islamic Education
            </motion.h2>
            <motion.p className="edu-section-description" variants={fadeUp}>
              Our commitment to quality teaching and nurturing environments sets us apart.
            </motion.p>
          </motion.div>
          <motion.div
            className="edu-features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {classFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="edu-feature-card"
                variants={fadeUp}
              >
                <div className="edu-feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="edu-feature-title">{feature.title}</h3>
                <p className="edu-feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="edu-schedule">
        <div className="container">
          <motion.div
            className="edu-schedule-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="edu-schedule-content" variants={fadeUp}>
              <span className="edu-section-label accent">CLASS SCHEDULE</span>
              <h2 className="edu-section-title">Flexible Learning Options</h2>
              <p className="edu-schedule-description">
                We offer classes throughout the week to accommodate busy family schedules.
                Our programs run during evenings and weekends to ensure every child can participate.
              </p>
              <div className="edu-schedule-times">
                <div className="edu-schedule-item">
                  <i className="fas fa-sun"></i>
                  <div>
                    <h4>Weekend Classes</h4>
                    <p>Saturday & Sunday: 10:00 AM - 1:00 PM</p>
                  </div>
                </div>
                <div className="edu-schedule-item">
                  <i className="fas fa-moon"></i>
                  <div>
                    <h4>Evening Classes</h4>
                    <p>Monday - Thursday: 5:00 PM - 7:00 PM</p>
                  </div>
                </div>
                <div className="edu-schedule-item">
                  <i className="fas fa-star"></i>
                  <div>
                    <h4>Summer Intensive</h4>
                    <p>June - August: Full-day programs available</p>
                  </div>
                </div>
              </div>
              <Link to="/register" className="edu-enroll-btn">
                <i className="fas fa-user-plus"></i>
                Enroll Your Child
              </Link>
            </motion.div>
            <motion.div
              className="edu-schedule-image"
              variants={scaleIn}
            >
              <picture>
                <source srcSet="/class1.webp" type="image/webp" />
                <img src="/class1.webp" alt="AICP Learning Environment" loading="lazy" decoding="async" />
              </picture>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Section - Compact */}
      <section className="edu-app-section">
        <div className="container">
          <motion.div
            className="edu-app-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="edu-app-content" variants={fadeUp}>
              <span className="edu-section-label">STAY CONNECTED</span>
              <h2 className="edu-section-title">Track Progress with Our App</h2>
              <p className="edu-app-description">
                Download the Markaz Al Najah app to stay updated on your child's learning journey.
                View lesson history, receive teacher feedback, and never miss an important update.
              </p>
              <div className="edu-app-buttons">
                <button type="button" className="edu-app-btn ios" aria-label="Download on the App Store - Coming Soon">
                  <i className="fab fa-apple"></i>
                  <div>
                    <span>Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </button>
                <button type="button" className="edu-app-btn android" aria-label="Get it on Google Play - Coming Soon">
                  <i className="fab fa-google-play"></i>
                  <div>
                    <span>Get it on</span>
                    <strong>Google Play</strong>
                  </div>
                </button>
              </div>
            </motion.div>
            <motion.div
              className="edu-app-mockup"
              variants={scaleIn}
            >
              <div className="edu-phone-frame">
                <picture>
                  <source srcSet="/pic1 1.webp" type="image/webp" />
                  <img src="/pic1 1.webp" alt="Markaz Al Najah App" className="edu-phone-screenshot" loading="lazy" decoding="async" />
                </picture>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="edu-cta">
        <div className="edu-cta-container">
          <motion.h2
            className="edu-cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Begin Your Child's Journey?
          </motion.h2>
          <motion.p
            className="edu-cta-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Registration is open for all programs. Contact us today to learn more about our classes and schedule a visit.
          </motion.p>
          <motion.div
            className="edu-cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/register" className="edu-cta-btn-primary">Register Now</Link>
            <a href="tel:+16025748750" className="edu-cta-btn-outline">
              <i className="fas fa-phone"></i>
              Call Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer - Same as About page */}
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
};

export default Education;

