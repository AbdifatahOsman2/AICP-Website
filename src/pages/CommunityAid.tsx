import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../CommunityAid.css';

interface Opportunity {
  title: string;
  description: string;
  icon: string;
  commitment: string;
  category: string;
}

const opportunities: Opportunity[] = [
  {
    title: 'Masjid Maintenance',
    description: 'Help keep our masjid clean and welcoming. Tasks include general cleaning, organizing prayer areas, and facility upkeep.',
    icon: 'fas fa-broom',
    commitment: 'Weekly, 2-3 hours',
    category: 'Facility'
  },
  {
    title: 'Event Support',
    description: 'Assist with community events, Friday prayers, and special occasions like Eid celebrations and Ramadan programs.',
    icon: 'fas fa-calendar-check',
    commitment: 'As needed',
    category: 'Events'
  },
  {
    title: 'Youth Programs',
    description: 'Mentor and support our youth through educational activities, sports, and Islamic learning sessions.',
    icon: 'fas fa-users',
    commitment: 'Weekly, 2-4 hours',
    category: 'Education'
  },
  {
    title: 'Food Distribution',
    description: 'Help prepare and distribute meals during Ramadan iftars, community dinners, and food assistance programs.',
    icon: 'fas fa-utensils',
    commitment: 'Seasonal/Monthly',
    category: 'Outreach'
  },
  {
    title: 'Parking & Security',
    description: 'Ensure safe and organized parking during Jumu\'ah and special events. Help maintain a secure environment.',
    icon: 'fas fa-car',
    commitment: 'Fridays, 1-2 hours',
    category: 'Operations'
  },
  {
    title: 'Administrative Support',
    description: 'Assist with office tasks, phone calls, data entry, and helping community members with inquiries.',
    icon: 'fas fa-clipboard-list',
    commitment: 'Flexible hours',
    category: 'Admin'
  }
];

const CommunityAid: React.FC = () => {
  const heroRef = React.useRef(null);
  const opportunitiesRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const opportunitiesInView = useInView(opportunitiesRef, { once: true, margin: '-100px' });

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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  return (
    <div className="community-aid-page">
      {/* Back Navigation */}
      <motion.header
        className="ca-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link to="/" className="ca-back-link">
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>
      </motion.header>

      {/* Hero Section with Image */}
      <section className="ca-hero" ref={heroRef}>
        <div className="ca-hero-image">
          <img src="/inside.jpg" alt="Inside Al Rahma Islamic Center" loading="lazy" decoding="async" />
          <div className="ca-hero-overlay"></div>
        </div>
        <motion.div
          className="ca-hero-content"
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.span className="ca-label" variants={fadeUp}>
            GET INVOLVED
          </motion.span>
          <motion.h1 className="ca-title" variants={fadeUp}>
            Community Aid
          </motion.h1>
          <motion.p className="ca-subtitle" variants={fadeUp}>
            Join hands with your community. Your time and skills can make a meaningful difference.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/volunteer" className="ca-hero-btn">
              <i className="fas fa-hand-holding-heart"></i>
              Become a Volunteer
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="ca-stats">
        <div className="container">
          <div className="ca-stats-grid">
            <div className="ca-stat">
              <span className="ca-stat-number">50+</span>
              <span className="ca-stat-label">Active Volunteers</span>
            </div>
            <div className="ca-stat">
              <span className="ca-stat-number">1,000+</span>
              <span className="ca-stat-label">Hours Contributed</span>
            </div>
            <div className="ca-stat">
              <span className="ca-stat-number">500+</span>
              <span className="ca-stat-label">Families Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="ca-featured">
        <div className="container">
          <div className="ca-featured-grid">
            <motion.div
              className="ca-featured-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/Outside cleaning.png" alt="Community volunteers cleaning outside the masjid" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div
              className="ca-featured-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Together We Serve</h2>
              <p>
                Our volunteers are the heart of Al Rahma Islamic Center. From maintaining our
                beautiful facility to organizing community programs, every contribution makes
                our masjid a welcoming home for all.
              </p>
              <p>
                Whether you can spare a few hours a week or help during special occasions,
                your involvement strengthens our community bonds and earns rewards in this
                life and the hereafter.
              </p>
              <blockquote>
                <p>"The best of people are those who are most beneficial to others."</p>
                <cite>— Prophet Muhammad (PBUH)</cite>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="ca-opportunities" ref={opportunitiesRef}>
        <div className="container">
          <motion.div
            className="ca-section-header"
            initial="hidden"
            animate={opportunitiesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.h2 className="ca-section-title" variants={fadeUp}>
              Volunteer Opportunities
            </motion.h2>
            <motion.p className="ca-section-description" variants={fadeUp}>
              Find a role that matches your skills and availability
            </motion.p>
          </motion.div>

          <motion.div
            className="ca-opportunities-grid"
            initial="hidden"
            animate={opportunitiesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {opportunities.map((opp, index) => (
              <motion.div key={index} className="ca-opportunity-card" variants={fadeUp}>
                <div className="ca-opportunity-icon">
                  <i className={opp.icon}></i>
                </div>
                <div className="ca-opportunity-content">
                  <span className="ca-opportunity-category">{opp.category}</span>
                  <h3>{opp.title}</h3>
                  <p>{opp.description}</p>
                  <div className="ca-opportunity-commitment">
                    <i className="fas fa-clock"></i>
                    {opp.commitment}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ca-cta">
        <div className="container">
          <motion.div
            className="ca-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Ready to Make a Difference?</h3>
            <p>Sign up today and become part of our volunteer family</p>
            <Link to="/volunteer" className="ca-cta-btn">
              <i className="fas fa-user-plus"></i>
              Register as Volunteer
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ca-footer">
        <div className="container">
          <div className="ca-footer-content">
            <div className="ca-footer-brand">
              <div className="logo-icon">
                <i className="fas fa-mosque"></i>
              </div>
              <div className="logo-text">
                <span className="logo-name" style={{ color: 'var(--primary)' }}>Al Rahma</span>
                <span className="logo-tagline" style={{ color: 'rgba(26,26,26,0.5)' }}>Islamic Center of Phoenix</span>
              </div>
            </div>
            <p className="ca-footer-copyright">
              © {new Date().getFullYear()} Al Rahma Islamic Center of Phoenix
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityAid;
