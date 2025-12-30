import React from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Community.css';

// Gallery images - Community events and gatherings
const galleryImages = [
  {
    id: 1,
    images: ['/gallery/BBQ1.jpg', '/gallery/BBQ2.jpg', '/gallery/BBQ3.jpg'],
    title: 'Community BBQ',
    description: 'Annual summer gathering bringing families together',
  },
  {
    id: 2,
    images: ['/gallery/quranGrad.jpg'],
    title: 'Quran Graduation',
    description: 'Celebrating our students\' achievements in Quran memorization',
  },
  {
    id: 3,
    images: ['/gallery/BBQ4.jpg', '/gallery/BBQ5.jpg'],
    title: 'Community Gathering',
    description: 'Sharing meals and building bonds as one family',
  },
  {
    id: 4,
    images: ['/gallery/604913093_18212017039315123_3491130923211631296_n.jpg'],
    title: 'Special Event',
    description: 'Memorable moments from our community programs',
  },
  {
    id: 5,
    images: ['/gallery/BBQ6.jpg'],
    title: 'Outdoor Activities',
    description: 'Enjoying time together at the masjid grounds',
  },
];

const CommunityPage: React.FC = () => {
  const heroRef = React.useRef(null);
  const galleryRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const galleryInView = useInView(galleryRef, { once: true, margin: '-100px' });

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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <div className="community-page">
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
            <Link to="/education" className="about-nav-link">Education</Link>
            <Link to="/community" className="about-nav-link active">Community</Link>
            <Link to="/prayer-times" className="about-nav-link">Prayer Times</Link>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="community-hero" ref={heroRef}>
        <motion.div 
          className="community-hero-content"
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.span className="community-label" variants={fadeUp}>
            OUR GALLERY
          </motion.span>
          <motion.h1 className="community-title" variants={fadeUp}>
            Moments from our Community
          </motion.h1>
          <motion.p className="community-subtitle" variants={fadeUp}>
            Explore the vibrant daily life, special events, and learning atmosphere at 
            Al Rahma Islamic Center.
          </motion.p>
        </motion.div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-section" ref={galleryRef}>
        <div className="container">
          <motion.div 
            className="gallery-grid"
            initial="hidden"
            animate={galleryInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {galleryImages.map((image, index) => (
              <motion.div 
                key={image.id}
                className={`gallery-item gallery-item-${index + 1} ${image.images.length > 1 ? 'has-multiple' : ''}`}
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="gallery-images-container">
                  {image.images.map((src, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={src}
                      alt={`${image.title} ${imgIndex + 1}`}
                      className="gallery-image"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
                <div className="gallery-overlay">
                  <div className="gallery-caption">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                  </div>
                </div>
                {image.images.length > 1 && (
                  <div className="gallery-photo-count">
                    <i className="fas fa-images"></i>
                    <span>{image.images.length} Photos</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="gallery-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a 
              href="https://www.instagram.com/masjidalrahma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gallery-btn"
            >
              View Full Gallery
              <i className="fas fa-arrow-right"></i>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="community-events">
        <div className="container">
          <motion.div 
            className="events-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="community-label" variants={fadeUp}>
              STAY CONNECTED
            </motion.span>
            <motion.h2 className="events-title" variants={fadeUp}>
              Join Our Community Events
            </motion.h2>
            <motion.p className="events-subtitle" variants={fadeUp}>
              Follow us on social media for updates on upcoming gatherings, classes, and special programs.
            </motion.p>
          </motion.div>

          <motion.div 
            className="social-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.a 
              href="https://www.facebook.com/AlRahmaAZ/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-card"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="social-icon facebook">
                <i className="fab fa-facebook-f"></i>
              </div>
              <h4>Facebook</h4>
              <p>Follow for updates and announcements</p>
            </motion.a>

            <motion.a 
              href="https://www.instagram.com/masjidalrahma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-card"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="social-icon instagram">
                <i className="fab fa-instagram"></i>
              </div>
              <h4>Instagram</h4>
              <p>Photos and stories from our community</p>
            </motion.a>

            <motion.a 
              href="https://www.youtube.com/channel/UCZhSVWVHK0vfxZOOKWA_-ZQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-card"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="social-icon youtube">
                <i className="fab fa-youtube"></i>
              </div>
              <h4>YouTube</h4>
              <p>Watch lectures and special events</p>
            </motion.a>
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

export default CommunityPage;

