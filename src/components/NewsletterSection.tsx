import React from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from './animations';

export function NewsletterSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="newsletter-section" ref={ref}>
      <div className="newsletter-bg-shape"></div>
      <div className="container">
        <motion.div 
          className="newsletter-content"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h3 className="newsletter-title" variants={fadeUp}>
            Stay Connected
          </motion.h3>
          <motion.p className="newsletter-subtitle" variants={fadeUp}>
            Receive prayer times, event updates, and community news directly to your inbox.
          </motion.p>
          <motion.form 
            className="newsletter-form" 
            onSubmit={(e) => e.preventDefault()}
            variants={fadeUp}
          >
            <input 
              type="email" 
              className="input" 
              placeholder="Enter your email address"
            />
            <motion.button 
              type="submit" 
              className="btn btn-accent"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
