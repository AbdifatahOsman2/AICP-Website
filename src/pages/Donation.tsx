import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Donation.css';

type DonationType = 'one-time' | 'monthly';

interface DonationFormData {
  amount: number | null;
  customAmount: string;
  donationType: DonationType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverFees: boolean;
  anonymous: boolean;
}

const PRESET_AMOUNTS = [25, 50, 100, 250, 500, 1000];
const PROCESSING_FEE_PERCENT = 0.029; // 2.9% Stripe fee
const PROCESSING_FEE_FIXED = 0.30; // $0.30 fixed fee

const Donation: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<DonationFormData>({
    amount: 100,
    customAmount: '',
    donationType: 'one-time',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverFees: true,
    anonymous: false,
  });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  // Calculate the actual donation amount
  const getSelectedAmount = (): number => {
    if (formData.amount === null && formData.customAmount) {
      return parseFloat(formData.customAmount) || 0;
    }
    return formData.amount || 0;
  };

  // Calculate processing fee if user opts to cover it
  const getProcessingFee = (): number => {
    const amount = getSelectedAmount();
    if (!formData.coverFees || amount === 0) return 0;
    return Math.round((amount * PROCESSING_FEE_PERCENT + PROCESSING_FEE_FIXED) * 100) / 100;
  };

  // Get total amount including optional fee coverage
  const getTotalAmount = (): number => {
    return getSelectedAmount() + getProcessingFee();
  };

  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({
      ...prev,
      amount,
      customAmount: ''
    }));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setFormData(prev => ({
      ...prev,
      amount: null,
      customAmount: value
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const amount = getTotalAmount();
    if (amount < 1) {
      alert('Please enter a valid donation amount of at least $1.');
      return;
    }

    setIsProcessing(true);

    // TODO: Integrate with Stripe
    // This is where you would:
    // 1. Create a PaymentIntent on your backend
    // 2. Use Stripe Elements to collect card details
    // 3. Confirm the payment

    // Simulate processing for now
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsProcessing(false);
    alert('Stripe integration coming soon! Your generous donation will be processed securely.');
  };

  return (
    <div className="donation-page">
      {/* Back Navigation */}
      <motion.header
        className="donate-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link to="/" className="donate-back-link">
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>
      </motion.header>

      {/* Hero Section */}
      <section className="donate-hero">
        <motion.div
          className="donate-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="donate-hero-icon" variants={fadeUp}>
            <i className="fas fa-hand-holding-heart"></i>
          </motion.div>
          <motion.h1 className="donate-title" variants={fadeUp}>
            Support Our Community
          </motion.h1>
          <motion.p className="donate-subtitle" variants={fadeUp}>
            Your generosity helps us maintain our mosque, support Islamic education,
            and serve our community.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="donate-content">
        <div className="donate-container">
          <motion.form
            className="donate-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Donation Type Toggle */}
            <div className="donate-section">
              <div className="donate-type-toggle">
                <button
                  type="button"
                  className={`donate-type-btn ${formData.donationType === 'one-time' ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, donationType: 'one-time' }))}
                >
                  One-time
                </button>
                <button
                  type="button"
                  className={`donate-type-btn ${formData.donationType === 'monthly' ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, donationType: 'monthly' }))}
                >
                  <i className="fas fa-sync-alt"></i>
                  Monthly
                </button>
              </div>
              {formData.donationType === 'monthly' && (
                <p className="donate-type-note">
                  <i className="fas fa-info-circle"></i>
                  Monthly donations provide sustained support for our programs
                </p>
              )}
            </div>

            {/* Amount Selection */}
            <div className="donate-section">
              <label className="donate-section-label">Select Amount</label>
              <div className="donate-amounts">
                {PRESET_AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`donate-amount-btn ${formData.amount === amount ? 'active' : ''}`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="donate-custom-amount">
                <span className="donate-currency">$</span>
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="Other amount"
                  value={formData.customAmount}
                  onChange={handleCustomAmountChange}
                  className={formData.amount === null && formData.customAmount ? 'active' : ''}
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="donate-section">
              <label className="donate-section-label">Your Information</label>
              <div className="donate-form-grid">
                <div className="donate-input-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required={!formData.anonymous}
                    disabled={formData.anonymous}
                  />
                </div>
                <div className="donate-input-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required={!formData.anonymous}
                    disabled={formData.anonymous}
                  />
                </div>
                <div className="donate-input-group full-width">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="donate-input-group full-width">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (Optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <label className="donate-checkbox">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleInputChange}
                />
                <span>Make this donation anonymous</span>
              </label>
            </div>

            {/* Payment Section Placeholder */}
            <div className="donate-section">
              <label className="donate-section-label">Payment Method</label>
              <div className="donate-payment-placeholder">
                <div className="donate-stripe-placeholder">
                  <i className="fas fa-lock"></i>
                  <span>Secure payment powered by Stripe</span>
                  <div className="donate-card-icons">
                    <i className="fab fa-cc-visa"></i>
                    <i className="fab fa-cc-mastercard"></i>
                    <i className="fab fa-cc-amex"></i>
                    <i className="fab fa-cc-discover"></i>
                  </div>
                </div>
                {/*
                  TODO: Replace with Stripe Elements
                  <CardElement options={CARD_ELEMENT_OPTIONS} />
                */}
                <div className="donate-card-element-placeholder">
                  <div className="donate-card-field">
                    <i className="far fa-credit-card"></i>
                    <span>Card details will appear here</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Processing Fees */}
            <div className="donate-section">
              <label className="donate-checkbox cover-fees">
                <input
                  type="checkbox"
                  name="coverFees"
                  checked={formData.coverFees}
                  onChange={handleInputChange}
                />
                <span>
                  Cover processing fees
                  {getProcessingFee() > 0 && (
                    <span className="fee-amount">(+${getProcessingFee().toFixed(2)})</span>
                  )}
                </span>
              </label>
              <p className="donate-fee-note">
                Adding {(PROCESSING_FEE_PERCENT * 100).toFixed(1)}% + ${PROCESSING_FEE_FIXED.toFixed(2)} ensures 100% of your intended gift reaches us.
              </p>
            </div>

            {/* Submit Button */}
            <div className="donate-submit-section">
              <div className="donate-total">
                <span>Total</span>
                <span className="donate-total-amount">
                  ${getTotalAmount().toFixed(2)}
                  {formData.donationType === 'monthly' && <span className="donate-frequency">/month</span>}
                </span>
              </div>
              <button
                type="submit"
                className="donate-submit-btn"
                disabled={isProcessing || getSelectedAmount() < 1}
              >
                {isProcessing ? (
                  <>
                    <span className="donate-spinner"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <i className="fas fa-heart"></i>
                    {formData.donationType === 'monthly' ? 'Start Monthly Donation' : 'Complete Donation'}
                  </>
                )}
              </button>
              <p className="donate-secure-note">
                <i className="fas fa-shield-alt"></i>
                Your payment information is encrypted and secure
              </p>
            </div>
          </motion.form>

          {/* Sidebar */}
          <motion.aside
            className="donate-sidebar"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="donate-impact-card">
              <h3>Your Impact</h3>
              <ul className="donate-impact-list">
                <li>
                  <i className="fas fa-mosque"></i>
                  <span>Maintain our mosque facilities</span>
                </li>
                <li>
                  <i className="fas fa-graduation-cap"></i>
                  <span>Support Madrasah education programs</span>
                </li>
                <li>
                  <i className="fas fa-hands-helping"></i>
                  <span>Fund community outreach initiatives</span>
                </li>
                <li>
                  <i className="fas fa-utensils"></i>
                  <span>Provide meals during Ramadan</span>
                </li>
              </ul>
            </div>

            <div className="donate-quote-card">
              <i className="fas fa-quote-left"></i>
              <p>"The believer's shade on the Day of Resurrection will be their charity."</p>
              <cite>— Prophet Muhammad (PBUH)</cite>
            </div>

            <div className="donate-contact-card">
              <h4>Questions?</h4>
              <p>Contact us for assistance with your donation.</p>
              <a href="tel:+16025748750" className="donate-contact-link">
                <i className="fas fa-phone"></i>
                (602) 574-8750
              </a>
              <a href="mailto:donate@alrahmaicop.org" className="donate-contact-link">
                <i className="fas fa-envelope"></i>
                donate@alrahmaicop.org
              </a>
            </div>

            <div className="donate-tax-note">
              <i className="fas fa-file-invoice-dollar"></i>
              <p>Al Rahma Islamic Center is a 501(c)(3) nonprofit. Your donation may be tax-deductible.</p>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="container">
          <div className="about-footer-content">
            <div className="about-footer-brand">
              <div className="logo-icon">
                <i className="fas fa-mosque"></i>
              </div>
              <div className="logo-text">
                <span className="logo-name" style={{ color: 'var(--primary)' }}>Al Rahma</span>
                <span className="logo-tagline" style={{ color: 'rgba(26,26,26,0.5)' }}>Islamic Center of Phoenix</span>
              </div>
            </div>
            <p className="about-footer-copyright">
              © {new Date().getFullYear()} Al Rahma Islamic Center of Phoenix
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Donation;
