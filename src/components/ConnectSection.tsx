import React from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from './animations';

export function ConnectSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-gallery" id="contact" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header centered"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div className="section-header-text" variants={fadeUp}>
            <h3 className="section-title">Connect With Us</h3>
            <p className="section-subtitle">We can be of service to you or answer any questions you may have.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="connect-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div 
            className="connect-card"
            variants={fadeUp}
            whileHover={{ 
              y: -12, 
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
              backgroundColor: '#FAFAF8'
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="connect-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className="fas fa-phone-alt"></i>
            </motion.div>
            <h4 className="connect-title">Call Us</h4>
            <p className="connect-description">
              Please stop by or call us. We're here to help with any questions.
            </p>
            <motion.a 
              href="tel:+16025748750"
              className="btn btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              (602) 574-8750
              <i className="fas fa-arrow-right"></i>
            </motion.a>
          </motion.div>

          <motion.div 
            className="connect-card"
            variants={fadeUp}
            whileHover={{ 
              y: -12, 
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
              backgroundColor: '#FAFAF8'
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="connect-icon"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className="fas fa-map-marker-alt"></i>
            </motion.div>
            <h4 className="connect-title">Visit Us</h4>
            <p className="connect-description">
              2916 E McDowell Rd unit 15, Phoenix, AZ 85008
            </p>
            <motion.a 
              href="https://maps.google.com/?q=2916+E+McDowell+Rd+unit+15+Phoenix+AZ+85008"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Get Directions
              <i className="fas fa-arrow-right"></i>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
