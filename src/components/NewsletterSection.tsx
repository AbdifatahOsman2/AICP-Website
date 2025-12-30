import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp, SuccessButton } from './animations';

export function NewsletterSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // TODO: Integrate with actual newsletter service
    setEmail('');
  };

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
          <motion.div
            className="newsletter-form"
            variants={fadeUp}
          >
            <input
              type="email"
              className="input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <SuccessButton
              className="btn btn-accent"
              onClick={handleSubscribe}
              successText="Subscribed!"
              loadingText="Subscribing..."
              disabled={!email}
              ariaLabel="Subscribe to newsletter"
            >
              Subscribe
            </SuccessButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
