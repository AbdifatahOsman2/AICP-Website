'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, Variants, useInView, AnimatePresence } from 'framer-motion';
import { StructuredData } from '../components/StructuredData';
import '../Community.css';

// Gallery images - 18 distinct photos from the community and images folder
const galleryImages = [
  {
    id: 1,
    image: '/gallery/madrasah-graduation.jpg',
    title: 'Madrasah Students Celebration',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Islamic school students proudly celebrating their milestones and achievement certificates.',
  },
  {
    id: 2,
    image: '/gallery/BBQ1.webp',
    title: 'Annual Community BBQ',
    category: 'community',
    categoryLabel: 'Community',
    description: 'Masjid volunteers and community members firing up the grill for the annual summer picnic.',
  },
  {
    id: 3,
    image: '/gallery/youth-brothers.jpg',
    title: 'Youth Brotherhood Gathering',
    category: 'youth',
    categoryLabel: 'Youth',
    description: 'Young men of our community united in brotherhood and faith at the masjid mihrab.',
  },
  {
    id: 4,
    image: '/gallery/community-gathering.jpg',
    title: 'Community Halaqah',
    category: 'gatherings',
    categoryLabel: 'Halaqah',
    description: 'Brothers and youth gathered in the prayer hall for evening remembrance, learning, and reflection.',
  },
  {
    id: 5,
    image: '/gallery/quranGrad.webp',
    title: 'Quran Memorization Graduation',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Celebrating our dedicated youth upon completing blessed Quranic memorization milestones.',
  },
  {
    id: 6,
    image: '/gallery/BBQ2.webp',
    title: 'Community Picnic Gathering',
    category: 'community',
    categoryLabel: 'Community',
    description: 'Families and neighbors sharing meals, laughter, and brotherhood under the Arizona sunshine.',
  },
  {
    id: 7,
    image: '/gallery/sisters-awards.jpg',
    title: 'Sisters Program Recognition',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Honoring our dedicated sisters and educators for their outstanding commitment to Islamic learning.',
  },
  {
    id: 8,
    image: '/gallery/volunteer-award.jpg',
    title: 'Volunteer Appreciation Ceremony',
    category: 'community',
    categoryLabel: 'Community',
    description: 'Recognizing selfless community volunteers whose hard work sustains our masjid operations.',
  },
  {
    id: 9,
    image: '/gallery/halaqah-session.jpg',
    title: 'Islamic Knowledge Circle',
    category: 'gatherings',
    categoryLabel: 'Halaqah',
    description: 'Brothers engaged in interactive Islamic lectures and Q&A sessions in the main prayer hall.',
  },
  {
    id: 10,
    image: '/gallery/BBQ3.webp',
    title: 'Community Fellowship Meal',
    category: 'community',
    categoryLabel: 'Community',
    description: 'Sharing hot meals and strengthening communal bonds across generations as one united family.',
  },
  {
    id: 11,
    image: '/gallery/prayer-hall-lecture.jpg',
    title: 'Evening Community Lecture',
    category: 'gatherings',
    categoryLabel: 'Halaqah',
    description: 'A full prayer hall listening attentively to an inspirational spiritual reminder.',
  },
  {
    id: 12,
    image: '/gallery/youth-outdoors.jpg',
    title: 'Youth Sports & Outdoor Activities',
    category: 'youth',
    categoryLabel: 'Youth',
    description: 'Youth staying active, building camaraderie, and having fun together after prayers.',
  },
  {
    id: 13,
    image: '/gallery/BBQ4.webp',
    title: 'Family Gathering & Hospitality',
    category: 'community',
    categoryLabel: 'Community',
    description: 'Warm conversations, elders sharing wisdom, and welcoming atmosphere for all guests.',
  },
  {
    id: 14,
    image: '/gallery/BBQ5.webp',
    title: 'Community Refreshments & Dining',
    category: 'community',
    categoryLabel: 'Community',
    description: 'Delicious food and generous refreshments prepared with care by our community organizers.',
  },
  {
    id: 15,
    image: '/gallery/604913093_18212017039315123_3491130923211631296_n.webp',
    title: 'Youth Town Hall Meeting',
    category: 'youth',
    categoryLabel: 'Youth',
    description: 'Open discussion empowering young voices to help lead and shape the future of our masjid.',
  },
  {
    id: 16,
    image: '/gallery/BBQ6.webp',
    title: 'Masjid Grounds Celebration',
    category: 'community',
    categoryLabel: 'Community',
    description: 'Community members enjoying vibrant fellowship on the spacious outdoor masjid grounds.',
  },
  {
    id: 17,
    image: '/Outside cleaning.webp',
    title: 'Masjid Beautification Day',
    category: 'community',
    categoryLabel: 'Community',
    description: 'Volunteers and youth working together to keep the House of Allah clean, welcoming, and pristine.',
  },
  {
    id: 18,
    image: '/class1.webp',
    title: 'Youth Quran & Arabic Classrooms',
    category: 'education',
    categoryLabel: 'Education',
    description: 'Students engaged in structured daily Quranic recitation and Arabic language learning.',
  },
];

const CommunityPage: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const heroRef = React.useRef(null);
  const galleryRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const galleryInView = useInView(galleryRef, { once: true, margin: '-100px' });

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % galleryImages.length));
    }
  }, [activeLightboxIndex]);

  const prevImage = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [activeLightboxIndex]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, nextImage, prevImage]);

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
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <div className="community-page">
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Community', url: '/community' },
        ]}
      />

      {/* Navigation Header */}
      <motion.header
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="about-nav-container">
          <Link href="/" className="about-back-link">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
          <nav className="about-nav-links">
            <Link href="/about" className="about-nav-link">About</Link>
            <Link href="/education" className="about-nav-link">Education</Link>
            <Link href="/community" className="about-nav-link active">Community</Link>
            <Link href="/prayer-times" className="about-nav-link">Prayer Times</Link>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="community-hero" ref={heroRef}>
        <motion.div
          className="community-hero-content"
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.span className="community-label" variants={fadeUp}>
            COMMUNITY GALLERY
          </motion.span>
          <motion.h1 className="community-title" variants={fadeUp}>
            Moments from our Community
          </motion.h1>
          <motion.p className="community-subtitle" variants={fadeUp}>
            Explore the vibrant daily life, celebrations, educational programs, and gatherings at
            Al Rahma Islamic Center of Phoenix.
          </motion.p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" ref={galleryRef}>
        <div className="container">
          {/* Unstacked Responsive Gallery Grid */}
          <motion.div
            className="gallery-grid"
            initial="hidden"
            animate={galleryInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-image-wrapper">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="gallery-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="gallery-zoom-icon">
                  <i className="fas fa-expand"></i>
                </div>

                <div className="gallery-overlay">
                  <div className="gallery-caption">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="gallery-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://www.instagram.com/masjidalrahma/"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-btn"
            >
              <i className="fab fa-instagram"></i>
              <span>Follow @masjidalrahma on Instagram</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && galleryImages[activeLightboxIndex] && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>

            <button
              className="lightbox-nav-btn prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button
              className="lightbox-nav-btn next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-image-wrapper">
                <img
                  src={galleryImages[activeLightboxIndex].image}
                  alt={galleryImages[activeLightboxIndex].title}
                  className="lightbox-image"
                />
              </div>

              <div className="lightbox-info">
                <div className="lightbox-header-line">
                  <span className="lightbox-counter">
                    {activeLightboxIndex + 1} of {galleryImages.length}
                  </span>
                </div>
                <h3 className="lightbox-title">
                  {galleryImages[activeLightboxIndex].title}
                </h3>
                <p className="lightbox-description">
                  {galleryImages[activeLightboxIndex].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upcoming Events & Social Connections Section */}
      <section className="community-events">
        <div className="container">
          <motion.div
            className="events-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="community-label" variants={fadeUp}>
              STAY CONNECTED
            </motion.span>
            <motion.h2 className="events-title" variants={fadeUp}>
              Join Our Community Events
            </motion.h2>
            <motion.p className="events-subtitle" variants={fadeUp}>
              Follow us on social media for announcements on upcoming gatherings, classes, youth halaqahs, and community programs.
            </motion.p>
          </motion.div>

          <motion.div
            className="social-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.a
              href="https://www.facebook.com/AlRahmaAZ/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="social-icon facebook">
                <i className="fab fa-facebook-f"></i>
              </div>
              <h4>Facebook</h4>
              <p>Follow for daily updates and announcements</p>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/masjidalrahma/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="social-icon instagram">
                <i className="fab fa-instagram"></i>
              </div>
              <h4>Instagram</h4>
              <p>Photos and stories from our community events</p>
            </motion.a>

            <motion.a
              href="https://www.youtube.com/channel/UCZhSVWVHK0vfxZOOKWA_-ZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="social-icon youtube">
                <i className="fab fa-youtube"></i>
              </div>
              <h4>YouTube</h4>
              <p>Watch recorded lectures, halaqahs, and programs</p>
            </motion.a>
          </motion.div>
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
              © {new Date().getFullYear()} Al Rahma Islamic Center of Phoenix. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityPage;

