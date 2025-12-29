import React from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from './animations';

// Custom easing
const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function StorySection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-gallery feature-section feature-section-dark" id="about" ref={ref}>
      <div className="container">
        <div className="feature-grid reverse">
          <motion.div 
            className="feature-content"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span className="accent-line" variants={fadeUp}>Our Story</motion.span>
            <motion.h2 className="feature-title" variants={fadeUp}>
              From Humble Beginnings to a Thriving Community
            </motion.h2>
            <motion.p className="feature-description" variants={fadeUp}>
              Al Rahma Islamic Center of Phoenix began as a small gathering of faithful 
              Muslims who came together with a shared dream. What started as prayers in 
              living rooms grew into a determined community. Through collective effort, 
              sacrifice, and the mercy of Allah, our community pooled their resources 
              to purchase this building and transform it into the beautiful masjid it 
              is today. Every brick laid and every room built represents the unity and 
              dedication of our brothers and sisters.
            </motion.p>
            <motion.div variants={fadeUp}>
              <motion.button 
                className="btn btn-accent"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                Learn Our Story
                <i className="fas fa-arrow-right"></i>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Desktop/Tablet Image - Plans */}
          <motion.div 
            className="feature-image feature-image-plans hide-mobile"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: easeOutExpo }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/plans.png"
              alt="Al Rahma Islamic Center architectural plans"
            />
            <motion.span 
              className="badge badge-primary feature-badge right"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Phase 1 Plans
            </motion.span>
          </motion.div>

          {/* Mobile Image - Side view of masjid */}
          <motion.div 
            className="feature-image show-mobile-only"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: easeOutExpo }}
          >
            <img 
              src="/side.png"
              alt="Al Rahma Islamic Center side view"
            />
            <div className="feature-image-overlay"></div>
            <motion.span 
              className="badge badge-primary feature-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Our Masjid
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
