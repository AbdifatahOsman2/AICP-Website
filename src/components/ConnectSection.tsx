'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from './animations';

export function ConnectSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          data: formData,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setSubmitError(
        err.message || 'There was an issue sending your message. Please try again or call (602) 574-8750.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-gallery" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header centered"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div className="section-header-text" variants={fadeUp}>
            <h3 className="section-title">Connect With Us</h3>
            <p className="section-subtitle">We can be of service to you or answer any questions you may have.</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="connect-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div
            className="connect-card"
            variants={fadeUp}
            whileHover={{
              y: -8,
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
              backgroundColor: '#FAFAF8'
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="connect-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className="fas fa-phone-alt"></i>
            </motion.div>
            <h4 className="connect-title">Call Us</h4>
            <p className="connect-description">
              Please stop by or call us. We're here to help with any questions.
            </p>
            <motion.a
              href="tel:+16025748750"
              className="btn btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              (602) 574-8750
              <i className="fas fa-arrow-right"></i>
            </motion.a>
          </motion.div>

          <motion.div
            className="connect-card"
            variants={fadeUp}
            whileHover={{
              y: -8,
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.12)',
              backgroundColor: '#FAFAF8'
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="connect-icon"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <i className="fas fa-map-marker-alt"></i>
            </motion.div>
            <h4 className="connect-title">Visit Us</h4>
            <p className="connect-description">
              2916 E McDowell Rd unit 15, Phoenix, AZ 85008
            </p>
            <motion.a
              href="https://maps.google.com/?q=2916+E+McDowell+Rd+unit+15+Phoenix+AZ+85008"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Get Directions
              <i className="fas fa-arrow-right"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Send a Message Form */}
        <motion.div
          style={{
            marginTop: '2.5rem',
            background: 'var(--white)',
            borderRadius: '16px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            boxShadow: '0 4px 40px -10px rgba(8, 52, 117, 0.08)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', margin: '0 0 0.5rem 0' }}>
              Send Us a Message
            </h4>
            <p style={{ color: 'rgba(26,26,26,0.6)', fontSize: '0.95rem', margin: 0 }}>
              Have an inquiry or need assistance? Fill out the form below and we'll reply directly to your email.
            </p>
          </div>

          {isSubmitted ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem 1rem',
              backgroundColor: '#f0fdf4',
              borderRadius: '12px',
              border: '1px solid #bbf7d0',
            }}>
              <i className="fas fa-check-circle" style={{ fontSize: '2.5rem', color: '#16a34a', marginBottom: '0.75rem', display: 'block' }} />
              <h5 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#166534', margin: '0 0 0.5rem 0' }}>
                Message Sent Successfully!
              </h5>
              <p style={{ color: '#15803d', fontSize: '0.95rem', margin: '0 0 1rem 0' }}>
                Thank you for reaching out. We have received your message and will get back to you shortly.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsSubmitted(false)}
                style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.35rem' }}>
                  Phone Number (Optional)
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="(602) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.35rem' }}>
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              {submitError && (
                <div style={{
                  marginBottom: '1rem',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#dc2626',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <i className="fas fa-exclamation-circle" />
                  <span>{submitError}</span>
                </div>
              )}

              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 2.25rem',
                    fontSize: '1rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-circle-notch fa-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
