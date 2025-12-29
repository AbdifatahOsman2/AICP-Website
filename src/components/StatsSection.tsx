import React from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from './animations';
import { CountUp } from './CountUp';

const stats = [
  { value: 5, suffix: '', label: 'Daily Prayers' },
  { value: 500, suffix: '+', label: 'Community Members' },
  { value: 10, suffix: '+', label: 'Weekly Programs' },
  { value: 1, suffix: '', label: 'United Community' },
];

export function StatsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-gallery stats-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="stats-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-card"
              variants={fadeUp}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.12)',
                backgroundColor: '#FAFAF8'
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="stat-value">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2500} />
              </span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
