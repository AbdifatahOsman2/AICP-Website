import React from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from './animations';

// Custom easing
const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function MadrasahSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-gallery feature-section" id="education" ref={ref}>
      <div className="container">
        <div className="feature-grid">
          <motion.div
            className="feature-image"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: easeOutExpo }}
            whileHover={{ scale: 1.02 }}
          >
            <picture>
              <source srcSet="/education.webp" type="image/webp" />
              <img
                src="/education.png"
                alt="Arabic and Islamic education at Al-Rahma"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="feature-image-overlay"></div>
            <motion.span
              className="badge badge-primary feature-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Islamic Education
            </motion.span>
          </motion.div>

          <motion.div
            className="feature-content"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span className="accent-line" variants={fadeUp}>Future Leaders</motion.span>
            <motion.h2 className="feature-title" variants={fadeUp}>
              Nurturing Young Hearts and Minds
            </motion.h2>
            <motion.p className="feature-description" variants={fadeUp}>
              Our Islamic education programs provide a vibrant and engaging learning
              environment where children gain essential Islamic knowledge, memorize
              the Quran, and develop strong moral character rooted in faith.
            </motion.p>
            <motion.div className="feature-buttons" variants={fadeUp}>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                Learn More
                <i className="fas fa-arrow-right"></i>
              </motion.button>
              <motion.button
                className="btn btn-secondary-dark"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <i className="fas fa-mobile-alt"></i>
                Madrasah App
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
