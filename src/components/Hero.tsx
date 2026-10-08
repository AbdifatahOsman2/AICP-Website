'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PrayerTimesBar } from './PrayerTimesBar';
import { JumuahBanner, MagneticButton } from './animations';

// Custom easing
const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroSection() {
  const { scrollY } = useScroll();
  // Enhanced parallax with smoother, subtler motion
  const bgY = useTransform(scrollY, [0, 800], [0, 120]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="hero">
      {/* Jumu'ah Friday Banner */}
      <JumuahBanner khutbahTime="12:30" />

      <motion.div
        className="hero-bg"
        style={{ y: bgY, scale: bgScale }}
      >
        <picture>
          <source srcSet="/hero.webp" type="image/webp" />
          <img
            src="/hero.webp"
            alt="Masjid Al-Rahma Islamic Center of Phoenix"
          />
        </picture>
        <div className="hero-overlay"></div>
      </motion.div>

      <motion.div className="hero-content" style={{ opacity: contentOpacity, y: contentY }}>
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
          <MagneticButton className="magnetic-wrapper" strength={0.2} radius={80}>
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Al+Rahma+Islamic+Center+2916+E+McDowell+Rd+Phoenix+AZ+85008"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              Visit Us
              <i className="fas fa-map-marker-alt"></i>
            </motion.a>
          </MagneticButton>
          <MagneticButton className="magnetic-wrapper" strength={0.2} radius={80}>
            <motion.a
              href="tel:+16025748750"
              className="btn btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              <i className="fas fa-phone"></i>
              (602) 574-8750
            </motion.a>
          </MagneticButton>
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
