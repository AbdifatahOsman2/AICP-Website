'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { StructuredData } from '../components/StructuredData';
import '../Registration.css';

interface FormData {
  // Student Information
  studentFirstName: string;
  studentLastName: string;
  dateOfBirth: string;
  gender: string;

  // Parent/Guardian Information
  parentFirstName: string;
  parentLastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;

  // Program Selection
  programs: string[];
  schedule: string;

  // Additional Information
  previousExperience: string;
  specialNeeds: string;
  howDidYouHear: string;

  // Emergency Contact
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;
}

const Registration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    gender: '',
    parentFirstName: '',
    parentLastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    programs: [],
    schedule: '',
    previousExperience: '',
    specialNeeds: '',
    howDidYouHear: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProgramChange = (program: string) => {
    setFormData(prev => ({
      ...prev,
      programs: prev.programs.includes(program)
        ? prev.programs.filter(p => p !== program)
        : [...prev.programs, program]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const programs = [
    { id: 'quran', label: 'Quran Memorization', icon: 'fas fa-quran' },
    { id: 'arabic', label: 'Arabic Language', icon: 'fas fa-language' },
    { id: 'islamic', label: 'Islamic Studies', icon: 'fas fa-book-reader' },
    { id: 'weekend', label: 'Weekend School', icon: 'fas fa-mosque' },
  ];

  const scheduleOptions = [
    { id: 'weekend', label: 'Weekend Classes', time: 'Sat & Sun: 10:00 AM - 1:00 PM' },
    { id: 'evening', label: 'Evening Classes', time: 'Mon - Thu: 5:00 PM - 7:00 PM' },
    { id: 'summer', label: 'Summer Intensive', time: 'June - August: Full-day' },
  ];

  if (isSubmitted) {
    return (
      <div className="registration-page">
        <motion.header
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="about-nav-container">
            <Link href="/" className="about-back-link">
              <i className="fas fa-arrow-left"></i>
              <span>Back to Home</span>
            </Link>
          </div>
        </motion.header>

        <div className="reg-success-container">
          <motion.div
            className="reg-success-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="reg-success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h1>Registration Submitted!</h1>
            <p>
              Thank you for registering your child at AICP Madrasah.
              We have received your application and will contact you within 2-3 business days.
            </p>
            <div className="reg-success-info">
              <div className="reg-success-detail">
                <i className="fas fa-envelope"></i>
                <span>Confirmation email sent to {formData.email}</span>
              </div>
              <div className="reg-success-detail">
                <i className="fas fa-phone"></i>
                <span>Questions? Call us at (602) 574-8750</span>
              </div>
            </div>
            <div className="reg-success-buttons">
              <Link href="/education" className="reg-btn-secondary">
                Back to Education
              </Link>
              <Link href="/" className="reg-btn-primary">
                Go to Homepage
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Education', url: '/education' },
          { name: 'Registration', url: '/register' },
        ]}
      />
      {/* Navigation Header */}
      <motion.header
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="about-nav-container">
          <Link href="/education" className="about-back-link">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Education</span>
          </Link>
          <nav className="about-nav-links">
            <Link href="/about" className="about-nav-link">About</Link>
            <Link href="/education" className="about-nav-link">Education</Link>
            <Link href="/community" className="about-nav-link">Community</Link>
            <Link href="/prayer-times" className="about-nav-link">Prayer Times</Link>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="reg-hero">
        <motion.div
          className="reg-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="reg-label" variants={fadeUp}>
            AICP MADRASAH
          </motion.span>
          <motion.h1 className="reg-title" variants={fadeUp}>
            Student Registration
          </motion.h1>
          <motion.p className="reg-subtitle" variants={fadeUp}>
            Begin your child's journey in Islamic education
          </motion.p>
        </motion.div>
      </section>

      {/* Progress Steps */}
      <div className="reg-progress-container">
        <div className="reg-progress">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`reg-progress-step ${currentStep >= step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
            >
              <div className="reg-step-number">
                {currentStep > step ? <i className="fas fa-check"></i> : step}
              </div>
              <span className="reg-step-label">
                {step === 1 && 'Student'}
                {step === 2 && 'Parent'}
                {step === 3 && 'Program'}
                {step === 4 && 'Review'}
              </span>
            </div>
          ))}
          <div className="reg-progress-line">
            <div
              className="reg-progress-fill"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Container */}
      <section className="reg-form-section">
        <div className="container">
          <form onSubmit={handleSubmit} className="reg-form">
            {/* Step 1: Student Information */}
            {currentStep === 1 && (
              <motion.div
                className="reg-step-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="reg-step-header">
                  <h2>Student Information</h2>
                  <p>Please provide details about the student being enrolled</p>
                </div>

                <div className="reg-form-grid">
                  <div className="reg-input-group">
                    <label htmlFor="studentFirstName">First Name *</label>
                    <input
                      type="text"
                      id="studentFirstName"
                      name="studentFirstName"
                      value={formData.studentFirstName}
                      onChange={handleInputChange}
                      placeholder="Enter first name"
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="studentLastName">Last Name *</label>
                    <input
                      type="text"
                      id="studentLastName"
                      name="studentLastName"
                      value={formData.studentLastName}
                      onChange={handleInputChange}
                      placeholder="Enter last name"
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="dateOfBirth">Date of Birth *</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="gender">Gender *</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="reg-input-group full-width">
                  <label htmlFor="previousExperience">Previous Islamic Education (Optional)</label>
                  <textarea
                    id="previousExperience"
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleInputChange}
                    placeholder="Describe any previous Quran memorization, Arabic, or Islamic studies experience..."
                    rows={3}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Parent/Guardian Information */}
            {currentStep === 2 && (
              <motion.div
                className="reg-step-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="reg-step-header">
                  <h2>Parent/Guardian Information</h2>
                  <p>Primary contact for communication and updates</p>
                </div>

                <div className="reg-form-grid">
                  <div className="reg-input-group">
                    <label htmlFor="parentFirstName">First Name *</label>
                    <input
                      type="text"
                      id="parentFirstName"
                      name="parentFirstName"
                      value={formData.parentFirstName}
                      onChange={handleInputChange}
                      placeholder="Enter first name"
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="parentLastName">Last Name *</label>
                    <input
                      type="text"
                      id="parentLastName"
                      name="parentLastName"
                      value={formData.parentLastName}
                      onChange={handleInputChange}
                      placeholder="Enter last name"
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(602) 555-0123"
                      required
                    />
                  </div>

                  <div className="reg-input-group full-width">
                    <label htmlFor="address">Street Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter street address"
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="zipCode">ZIP Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="85008"
                      required
                    />
                  </div>
                </div>

                <div className="reg-section-divider">
                  <span>Emergency Contact</span>
                </div>

                <div className="reg-form-grid">
                  <div className="reg-input-group">
                    <label htmlFor="emergencyName">Contact Name *</label>
                    <input
                      type="text"
                      id="emergencyName"
                      name="emergencyName"
                      value={formData.emergencyName}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="emergencyPhone">Phone Number *</label>
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      placeholder="(602) 555-0123"
                      required
                    />
                  </div>

                  <div className="reg-input-group">
                    <label htmlFor="emergencyRelation">Relationship *</label>
                    <input
                      type="text"
                      id="emergencyRelation"
                      name="emergencyRelation"
                      value={formData.emergencyRelation}
                      onChange={handleInputChange}
                      placeholder="e.g., Grandparent, Uncle"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Program Selection */}
            {currentStep === 3 && (
              <motion.div
                className="reg-step-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="reg-step-header">
                  <h2>Program Selection</h2>
                  <p>Choose the programs and schedule that work best for your family</p>
                </div>

                <div className="reg-programs-section">
                  <label className="reg-section-label">Select Programs *</label>
                  <div className="reg-programs-grid">
                    {programs.map((program) => (
                      <div
                        key={program.id}
                        className={`reg-program-card ${formData.programs.includes(program.id) ? 'selected' : ''}`}
                        onClick={() => handleProgramChange(program.id)}
                      >
                        <div className="reg-program-icon">
                          <i className={program.icon}></i>
                        </div>
                        <span className="reg-program-label">{program.label}</span>
                        <div className="reg-program-check">
                          <i className="fas fa-check"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="reg-schedule-section">
                  <label className="reg-section-label">Preferred Schedule *</label>
                  <div className="reg-schedule-options">
                    {scheduleOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`reg-schedule-option ${formData.schedule === option.id ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="schedule"
                          value={option.id}
                          checked={formData.schedule === option.id}
                          onChange={handleInputChange}
                        />
                        <div className="reg-schedule-content">
                          <span className="reg-schedule-name">{option.label}</span>
                          <span className="reg-schedule-time">{option.time}</span>
                        </div>
                        <div className="reg-schedule-check">
                          <i className="fas fa-check"></i>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="reg-form-grid">
                  <div className="reg-input-group full-width">
                    <label htmlFor="specialNeeds">Special Needs or Accommodations (Optional)</label>
                    <textarea
                      id="specialNeeds"
                      name="specialNeeds"
                      value={formData.specialNeeds}
                      onChange={handleInputChange}
                      placeholder="Please let us know if your child has any special needs or requires accommodations..."
                      rows={3}
                    />
                  </div>

                  <div className="reg-input-group full-width">
                    <label htmlFor="howDidYouHear">How did you hear about us?</label>
                    <select
                      id="howDidYouHear"
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleInputChange}
                    >
                      <option value="">Select an option</option>
                      <option value="friend">Friend or Family</option>
                      <option value="social">Social Media</option>
                      <option value="website">Website</option>
                      <option value="mosque">At the Mosque</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <motion.div
                className="reg-step-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="reg-step-header">
                  <h2>Review & Submit</h2>
                  <p>Please review your information before submitting</p>
                </div>

                <div className="reg-review-sections">
                  <div className="reg-review-section">
                    <div className="reg-review-header">
                      <h3><i className="fas fa-user-graduate"></i> Student Information</h3>
                      <button type="button" onClick={() => setCurrentStep(1)} className="reg-edit-btn">
                        Edit
                      </button>
                    </div>
                    <div className="reg-review-grid">
                      <div className="reg-review-item">
                        <span className="reg-review-label">Name</span>
                        <span className="reg-review-value">{formData.studentFirstName} {formData.studentLastName}</span>
                      </div>
                      <div className="reg-review-item">
                        <span className="reg-review-label">Date of Birth</span>
                        <span className="reg-review-value">{formData.dateOfBirth}</span>
                      </div>
                      <div className="reg-review-item">
                        <span className="reg-review-label">Gender</span>
                        <span className="reg-review-value">{formData.gender}</span>
                      </div>
                    </div>
                  </div>

                  <div className="reg-review-section">
                    <div className="reg-review-header">
                      <h3><i className="fas fa-user"></i> Parent/Guardian</h3>
                      <button type="button" onClick={() => setCurrentStep(2)} className="reg-edit-btn">
                        Edit
                      </button>
                    </div>
                    <div className="reg-review-grid">
                      <div className="reg-review-item">
                        <span className="reg-review-label">Name</span>
                        <span className="reg-review-value">{formData.parentFirstName} {formData.parentLastName}</span>
                      </div>
                      <div className="reg-review-item">
                        <span className="reg-review-label">Email</span>
                        <span className="reg-review-value">{formData.email}</span>
                      </div>
                      <div className="reg-review-item">
                        <span className="reg-review-label">Phone</span>
                        <span className="reg-review-value">{formData.phone}</span>
                      </div>
                      <div className="reg-review-item full-width">
                        <span className="reg-review-label">Address</span>
                        <span className="reg-review-value">{formData.address}, {formData.city} {formData.zipCode}</span>
                      </div>
                    </div>
                  </div>

                  <div className="reg-review-section">
                    <div className="reg-review-header">
                      <h3><i className="fas fa-book"></i> Programs & Schedule</h3>
                      <button type="button" onClick={() => setCurrentStep(3)} className="reg-edit-btn">
                        Edit
                      </button>
                    </div>
                    <div className="reg-review-grid">
                      <div className="reg-review-item">
                        <span className="reg-review-label">Programs</span>
                        <span className="reg-review-value">
                          {formData.programs.map(p => programs.find(prog => prog.id === p)?.label).join(', ') || 'None selected'}
                        </span>
                      </div>
                      <div className="reg-review-item">
                        <span className="reg-review-label">Schedule</span>
                        <span className="reg-review-value">
                          {scheduleOptions.find(s => s.id === formData.schedule)?.label || 'Not selected'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="reg-terms">
                  <label className="reg-checkbox-label">
                    <input type="checkbox" required />
                    <span>I agree to the <strong>terms and conditions</strong> and <strong>privacy policy</strong>. I understand that registration is subject to availability and confirmation.</span>
                  </label>
                </div>
              </motion.div>
            )}

            {/* Form Navigation */}
            <div className="reg-form-nav">
              {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="reg-btn-secondary">
                  <i className="fas fa-arrow-left"></i>
                  Previous
                </button>
              )}

              {currentStep < 4 ? (
                <button type="button" onClick={nextStep} className="reg-btn-primary">
                  Continue
                  <i className="fas fa-arrow-right"></i>
                </button>
              ) : (
                <button
                  type="submit"
                  className="reg-btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="reg-spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Submit Registration
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
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

export default Registration;
