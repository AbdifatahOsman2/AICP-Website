import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';
import '../VolunteerForm.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interests: string[];
  availability: string;
  experience: string;
  message: string;
}

const volunteerAreas = [
  { id: 'maintenance', label: 'Masjid Maintenance', icon: 'fas fa-broom' },
  { id: 'events', label: 'Event Support', icon: 'fas fa-calendar-check' },
  { id: 'youth', label: 'Youth Programs', icon: 'fas fa-users' },
  { id: 'food', label: 'Food Distribution', icon: 'fas fa-utensils' },
  { id: 'parking', label: 'Parking & Security', icon: 'fas fa-car' },
  { id: 'admin', label: 'Administrative', icon: 'fas fa-clipboard-list' },
];

const VolunteerForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [],
    availability: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(i => i !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="volunteer-form-page">
        <motion.header
          className="vf-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link to="/community-aid" className="vf-back-link">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Community Aid</span>
          </Link>
        </motion.header>

        <div className="vf-success-container">
          <motion.div
            className="vf-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="vf-success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Thank You for Volunteering!</h2>
            <p>
              Your registration has been received. A member of our team will contact you
              soon to discuss volunteer opportunities that match your interests.
            </p>
            <p className="vf-success-note">
              JazakAllah Khair for your willingness to serve our community.
            </p>
            <div className="vf-success-actions">
              <Link to="/community-aid" className="vf-btn-secondary">
                <i className="fas fa-arrow-left"></i>
                Back to Community Aid
              </Link>
              <Link to="/" className="vf-btn-primary">
                <i className="fas fa-home"></i>
                Go to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="volunteer-form-page">
      <SEO
        title="Volunteer Registration"
        description="Register as a volunteer at Al Rahma Islamic Center Phoenix. Choose from masjid maintenance, event support, youth programs, food distribution, and more."
        canonical="/volunteer"
        keywords="volunteer registration mosque, islamic volunteer phoenix, community service mosque phoenix"
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Community Aid', url: '/community-aid' },
          { name: 'Volunteer', url: '/volunteer' },
        ]}
      />
      {/* Back Navigation */}
      <motion.header
        className="vf-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link to="/community-aid" className="vf-back-link">
          <i className="fas fa-arrow-left"></i>
          <span>Back to Community Aid</span>
        </Link>
      </motion.header>

      {/* Hero Section */}
      <section className="vf-hero">
        <motion.div
          className="vf-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="vf-hero-icon">
            <i className="fas fa-hand-holding-heart"></i>
          </div>
          <h1>Volunteer Registration</h1>
          <p>Join our volunteer team and make a difference in your community</p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="vf-content">
        <div className="container">
          <motion.form
            className="vf-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Personal Information */}
            <div className="vf-section">
              <h3 className="vf-section-title">
                <i className="fas fa-user"></i>
                Personal Information
              </h3>
              <div className="vf-form-grid">
                <div className="vf-input-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="vf-input-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="vf-input-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="vf-input-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(602) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="vf-section">
              <h3 className="vf-section-title">
                <i className="fas fa-heart"></i>
                Areas of Interest *
              </h3>
              <p className="vf-section-hint">Select all that apply</p>
              <div className="vf-interests-grid">
                {volunteerAreas.map(area => (
                  <button
                    key={area.id}
                    type="button"
                    className={`vf-interest-btn ${formData.interests.includes(area.id) ? 'active' : ''}`}
                    onClick={() => handleInterestToggle(area.id)}
                  >
                    <i className={area.icon}></i>
                    <span>{area.label}</span>
                    {formData.interests.includes(area.id) && (
                      <i className="fas fa-check vf-check"></i>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="vf-section">
              <h3 className="vf-section-title">
                <i className="fas fa-calendar-alt"></i>
                Availability *
              </h3>
              <div className="vf-input-group full-width">
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="fridays">Fridays Only</option>
                  <option value="evenings">Evenings Only</option>
                  <option value="flexible">Flexible Schedule</option>
                  <option value="events">Special Events Only</option>
                </select>
              </div>
            </div>

            {/* Experience */}
            <div className="vf-section">
              <h3 className="vf-section-title">
                <i className="fas fa-briefcase"></i>
                Experience (Optional)
              </h3>
              <div className="vf-input-group full-width">
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Tell us about any relevant skills or volunteer experience you have..."
                  rows={3}
                />
              </div>
            </div>

            {/* Additional Message */}
            <div className="vf-section">
              <h3 className="vf-section-title">
                <i className="fas fa-comment-alt"></i>
                Additional Comments (Optional)
              </h3>
              <div className="vf-input-group full-width">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any questions or additional information you'd like to share..."
                  rows={3}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="vf-submit-section">
              <button
                type="submit"
                className="vf-submit-btn"
                disabled={isSubmitting || formData.interests.length === 0}
              >
                {isSubmitting ? (
                  <>
                    <span className="vf-spinner"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Submit Registration
                  </>
                )}
              </button>
              <p className="vf-submit-note">
                <i className="fas fa-shield-alt"></i>
                Your information is secure and will only be used for volunteer coordination.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="vf-footer">
        <div className="container">
          <div className="vf-footer-content">
            <div className="vf-footer-brand">
              <div className="logo-icon">
                <i className="fas fa-mosque"></i>
              </div>
              <div className="logo-text">
                <span className="logo-name" style={{ color: 'var(--primary)' }}>Al Rahma</span>
                <span className="logo-tagline" style={{ color: 'rgba(26,26,26,0.5)' }}>Islamic Center of Phoenix</span>
              </div>
            </div>
            <p className="vf-footer-copyright">
              © {new Date().getFullYear()} Al Rahma Islamic Center of Phoenix
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VolunteerForm;
