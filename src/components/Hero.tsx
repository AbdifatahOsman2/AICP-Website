import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PrayerTimesBar } from './PrayerTimesBar';

// Custom easing
const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero">
      <motion.div className="hero-bg" style={{ y }}>
        <img 
          src="/hero.png" 
          alt="Masjid Al-Rahma Islamic Center of Phoenix"
        />
        <div className="hero-overlay"></div>
      </motion.div>

      <motion.div className="hero-content" style={{ opacity }}>
        <motion.span 
          className="accent-line"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Islamic Center of Phoenix
        </motion.span>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: easeOutExpo }}
        >
          Welcome to Al-Rahma
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: easeOutExpo }}
        >
          A sanctuary for reflection, connection, and spiritual growth.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: easeOutExpo }}
        >
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            Visit Us
            <i className="fas fa-arrow-right"></i>
          </motion.button>
          <motion.a 
            href="tel:+16025748750"
            className="btn btn-secondary"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-phone"></i>
            (602) 574-8750
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Prayer Times Bar */}
      <motion.div 
        className="prayer-bar-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.4, ease: easeOutExpo }}
      >
        <PrayerTimesBar variant="hero" />
      </motion.div>
    </section>
  );
}
