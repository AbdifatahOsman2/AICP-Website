import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const footerLinks = {
  discover: [
    { label: 'About Us', href: '/about', isRoute: true },
    { label: 'Our Imams', href: '#', isRoute: false },
    { label: 'FAQ', href: '#', isRoute: false },
    { label: 'Glossary', href: '#', isRoute: false },
  ],
  community: [
    { label: 'Prayer Schedule', href: '#prayer-times' },
    { label: 'Events', href: '#community' },
    { label: 'Videos', href: 'https://www.youtube.com/channel/UCZhSVWVHK0vfxZOOKWA_-ZQ', external: true },
    { label: 'Contact Us', href: '#contact' },
  ],
  resources: [
    { label: 'Night Prayer', href: '#', isRoute: false },
    { label: 'Daily Prayers', href: '#prayer-times', isRoute: false },
    { label: 'Islamic Education', href: '/education', isRoute: true },
    { label: 'Community Aid', href: '#', isRoute: false },
  ],
};

const socialLinks = [
  { icon: 'facebook-f', label: 'Facebook', href: 'https://www.facebook.com/AlRahmaAZ/' },
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/masjidalrahma/?hl=en' },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UCZhSVWVHK0vfxZOOKWA_-ZQ' },
];

export function Footer() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.footer 
      className="footer" 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo footer-logo">
              <div className="logo-icon">
                <i className="fas fa-mosque"></i>
              </div>
              <div className="logo-text">
                <span className="logo-name">Al Rahma</span>
                <span className="logo-tagline">Islamic Center of Phoenix</span>
              </div>
            </a>
            <address className="footer-address">
              2916 E McDowell Rd unit 15<br />
              Phoenix, AZ 85008
            </address>
            <a href="tel:+16025748750" className="footer-phone">
              (602) 574-8750
            </a>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links-column">
            <h5 className="footer-links-title">Discover</h5>
            {footerLinks.discover.map((link) => (
              link.isRoute ? (
                <motion.span key={link.label}>
                  <Link 
                    to={link.href}
                    className="footer-link"
                  >
                    <motion.span
                      whileHover={{ x: 4, color: '#083475' }}
                      transition={{ duration: 0.3 }}
                      style={{ display: 'inline-block' }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.span>
              ) : (
                <motion.a 
                  key={link.label} 
                  href={link.href} 
                  className="footer-link"
                  whileHover={{ x: 4, color: '#083475' }}
                  transition={{ duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              )
            ))}
          </div>

          <div className="footer-links-column">
            <h5 className="footer-links-title">Community</h5>
            {footerLinks.community.map((link) => (
              <motion.a 
                key={link.label} 
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="footer-link"
                whileHover={{ x: 4, color: '#083475' }}
                transition={{ duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="footer-links-column">
            <h5 className="footer-links-title">Resources</h5>
            {footerLinks.resources.map((link) => (
              link.isRoute ? (
                <motion.span key={link.label}>
                  <Link 
                    to={link.href}
                    className="footer-link"
                  >
                    <motion.span
                      whileHover={{ x: 4, color: '#083475' }}
                      transition={{ duration: 0.3 }}
                      style={{ display: 'inline-block' }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.span>
              ) : (
                <motion.a 
                  key={link.label} 
                  href={link.href} 
                  className="footer-link"
                  whileHover={{ x: 4, color: '#083475' }}
                  transition={{ duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              )
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Al Rahma Islamic Center of Phoenix. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>Designed & Developed with ❤️ by Usman</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
