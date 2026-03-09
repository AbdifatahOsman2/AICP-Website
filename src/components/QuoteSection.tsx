'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from './animations';

export function QuoteSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-gallery quote-section" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="quote-content"
        >
          <motion.i
            className="fas fa-moon quote-icon"
            variants={scaleIn}
          />
          <motion.h2
            className="quote-text"
            variants={fadeUp}
          >
            "Our Lord descends every night to the lowest heaven...
            Who would invoke Me, so that I would answer him?"
          </motion.h2>
          <motion.p
            className="quote-attribution"
            variants={fadeUp}
          >
            — Sahih Bukhari & Muslim
          </motion.p>
          <motion.p
            className="quote-description"
            variants={fadeUp}
          >
            The Prophet, sallalahu alayhe wa sallam, taught us about the blessed
            hour of the night. We strive to create an environment that nurtures
            the soul, fosters brotherhood, and serves humanity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
