import React from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from './animations';

const updates = [
  {
    category: 'Night Prayer',
    date: 'Every Night',
    title: 'The Blessed Hour of the Night',
    description: 'There is an hour of the night which, no Muslim person encounters it and asks for a good thing, but Allah grants it.',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2940&auto=format&fit=crop',
  },
  {
    category: 'Community',
    date: 'Ongoing',
    title: 'Helping Those in Need',
    description: 'If Allah blessed us with money, good health or knowledge, we should share with those who are less fortunate.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2940&auto=format&fit=crop',
  },
  {
    category: 'Daily Prayers',
    date: '5 Times Daily',
    title: 'Join Us for Salah',
    description: 'Come pray with us at Al-Rahma. Our doors are open for all five daily prayers.',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2940&auto=format&fit=crop',
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
            <h3 className="section-title">Community & Programs</h3>
            <p className="section-subtitle">Stay connected with our community events, prayers, and announcements.</p>
          </motion.div>
          <motion.a href="#" className="view-all-link" variants={fadeUp}>
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
            <motion.article 
              key={index} 
              className="update-card"
              variants={fadeUp}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="update-card-image"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              >
                <img src={update.image} alt={update.title} />
                <span className="badge badge-glass">{update.category}</span>
              </motion.div>
              <div className="update-card-content">
                <span className="update-date">{update.date}</span>
                <h4 className="update-title">{update.title}</h4>
                <p className="update-description">{update.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
