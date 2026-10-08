'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp, SuccessButton } from './animations';

export function NewsletterSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubscribe = async () => {
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmed || !emailRegex.test(trimmed)) {
      setErrorMsg('Please enter a valid email address.');
      throw new Error('Invalid email');
    }

    setErrorMsg(null);
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'newsletter',
        data: { email: trimmed },
      }),
    });

    const json = await res.json();
    if (!res.ok || !json.success) {
      setErrorMsg(json.error || 'Unable to subscribe. Please try again.');
      throw new Error(json.error || 'Failed');
    }

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
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorMsg) setErrorMsg(null);
              }}
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
          {errorMsg && (
            <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '8px' }}>
              {errorMsg}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
