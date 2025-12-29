import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Custom easing
const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

const navItems = [
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Prayer Times', href: '/prayer-times', isRoute: true },
  { label: 'Education', href: '/education', isRoute: true },
  { label: 'Community', href: '/community', isRoute: true },
  { label: 'Contact', href: '#contact', isRoute: false },
];

interface HeaderProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ isScrolled, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <motion.header 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <i className="fas fa-mosque"></i>
          </div>
          <div className="logo-text">
            <span className="logo-name">Al-Rahma</span>
            <span className="logo-tagline">Islamic Center of Phoenix</span>
          </div>
        </Link>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            item.isRoute ? (
              <motion.span key={item.label}>
                <Link 
                  to={item.href}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'inline-block' }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              </motion.span>
            ) : (
              <motion.a 
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                {item.label}
              </motion.a>
            )
          ))}
        </nav>

        <div className="header-actions">
          <motion.button 
            className="donate-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-heart"></i>
            <span>Donate</span>
          </motion.button>
          <button 
            className="mobile-menu-btn hide-desktop"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          className="mobile-menu glass"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <nav className="mobile-nav">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link 
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <motion.button 
              className="btn btn-primary" 
              style={{ marginTop: '16px', width: '100%' }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fas fa-heart"></i>
              Donate
            </motion.button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
