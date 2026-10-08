'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from './animations';

const updates = [
  {
    category: 'Night Prayer',
    date: 'Every Night',
    title: 'The Blessed Hour of the Night',
    description: 'There is an hour of the night which, no Muslim person encounters it and asks for a good thing, but Allah grants it.',
    image: '/TheBlessedHourOfTheNight.webp',
    href: '/blessed-hour',
  },
  {
    category: 'Community',
    date: 'Ongoing',
    title: 'Helping Those in Need',
    description: 'If Allah blessed us with money, good health or knowledge, we should share with those who are less fortunate.',
    image: '/HelpThoseInNeed.webp',
    href: '/helping-those-in-need',
  },
  {
    category: 'Daily Prayers',
    date: '5 Times Daily',
    title: 'Join Us for Salah',
    description: 'Come pray with us at Al-Rahma. Our doors are open for all five daily prayers.',
    image: '/JoinUsForSalah.webp',
    href: '/join-us-for-salah',
  },
];

export function UpdatesSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-gallery" id="community" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div className="section-header-text" variants={fadeUp}>
            <h3 className="section-title">Community &amp; Programs</h3>
            <p className="section-subtitle">Stay connected with our community events, prayers, and announcements.</p>
          </motion.div>
          <motion.a href="/community" className="view-all-link" variants={fadeUp}>
            View All
            <i className="fas fa-arrow-right"></i>
          </motion.a>
        </motion.div>

        <motion.div
          className="updates-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {updates.map((update, index) => (
            <Link href={update.href} key={index} style={{ textDecoration: 'none' }}>
              <motion.article
                className="update-card"
                variants={fadeUp}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.5 }}
                style={{ cursor: 'pointer', height: '100%' }}
              >
                <motion.div
                  className="update-card-image"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={update.image} alt={update.title} loading="lazy" decoding="async" />
                  <span className="badge badge-glass">{update.category}</span>
                </motion.div>
                <div className="update-card-content">
                  <span className="update-date">{update.date}</span>
                  <h4 className="update-title">{update.title}</h4>
                  <p className="update-description">{update.description}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#6a8fff', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.75rem' }}>
                    Read More <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} />
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
