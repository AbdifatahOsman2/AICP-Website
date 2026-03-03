import React, { useState, useEffect } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { usePrayerTimes } from '../hooks/usePrayerTimes';
import { fetchMonthlyPrayerTimes, PrayerTimesData } from '../services/prayerTimes';
import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';
import '../PrayerTimes.css';

type TabType = 'daily' | 'monthly';

// Iqamah offsets (in minutes after Adhan) - can be customized
const IQAMAH_OFFSETS: Record<string, number> = {
  Fajr: 30,
  Dhuhr: 30,
  Asr: 30,
  Maghrib: 10,
  Isha: 30,
};

const PrayerTimesPage: React.FC = () => {
  const heroRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });

  const [activeTab, setActiveTab] = useState<TabType>('daily');
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [monthlyData, setMonthlyData] = useState<PrayerTimesData[]>([]);
  const [isLoadingMonthly, setIsLoadingMonthly] = useState(false);

  const { prayerTimes, isLoading, error } = usePrayerTimes();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  // Calculate countdown with seconds
  useEffect(() => {
    if (!prayerTimes?.nextPrayer) return;

    const updateCountdown = () => {
      const now = new Date();
      const [hours, minutes] = prayerTimes.nextPrayer!.time24.split(':').map(Number);
      const prayerTime = new Date();
      prayerTime.setHours(hours, minutes, 0, 0);

      let diff = prayerTime.getTime() - now.getTime();

      // If negative, prayer is tomorrow
      if (diff < 0) {
        diff += 24 * 60 * 60 * 1000;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      setCountdown({ hours: h, minutes: m, seconds: s });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [prayerTimes?.nextPrayer]);

  // Fetch monthly data when tab changes
  useEffect(() => {
    if (activeTab === 'monthly' && monthlyData.length === 0) {
      const now = new Date();
      setIsLoadingMonthly(true);
      fetchMonthlyPrayerTimes(now.getMonth() + 1, now.getFullYear())
        .then(data => setMonthlyData(data))
        .catch(console.error)
        .finally(() => setIsLoadingMonthly(false));
    }
  }, [activeTab, monthlyData.length]);

  // Calculate Iqamah time
  const getIqamahTime = (prayerName: string, adhanTime: string): string => {
    const offset = IQAMAH_OFFSETS[prayerName] || 15;
    const [hours, minutes] = adhanTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + offset;
    const newHours = Math.floor(totalMinutes / 60) % 24;
    const newMinutes = totalMinutes % 60;

    const period = newHours >= 12 ? 'PM' : 'AM';
    const hours12 = newHours % 12 || 12;
    return `${hours12.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')} ${period}`;
  };

  // Format time to 12-hour
  const formatTo12Hour = (time24: string): string => {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  const prayersList = prayerTimes ? [
    { name: 'Fajr', adhan: prayerTimes.prayers[0].time24, isNext: prayerTimes.prayers[0].isNext },
    { name: 'Sunrise', adhan: '', isSunrise: true },
    { name: 'Dhuhr', adhan: prayerTimes.prayers[1].time24, isNext: prayerTimes.prayers[1].isNext },
    { name: 'Asr', adhan: prayerTimes.prayers[2].time24, isNext: prayerTimes.prayers[2].isNext },
    { name: 'Maghrib', adhan: prayerTimes.prayers[3].time24, isNext: prayerTimes.prayers[3].isNext },
    { name: 'Isha', adhan: prayerTimes.prayers[4].time24, isNext: prayerTimes.prayers[4].isNext },
  ] : [];

  return (
    <div className="prayer-times-page">
      <SEO
        title="Daily Prayer Times"
        description="Accurate daily prayer times (Salah times) for Al Rahma Islamic Center in Phoenix, AZ. View Fajr, Dhuhr, Asr, Maghrib, Isha adhan and iqamah times. Updated daily with countdown to next prayer."
        canonical="/prayer-times"
        keywords="prayer times phoenix az, salah times phoenix, fajr time phoenix, maghrib time phoenix, isha time phoenix, masjid prayer schedule, jummah prayer times phoenix"
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Prayer Times', url: '/prayer-times' },
        ]}
        additionalSchemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What are the daily prayer times at Al Rahma Islamic Center?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our daily prayer times (Adhan and Iqamah) are updated daily. Please check the Prayer Times table on this page for the exact times for Fajr, Dhuhr, Asr, Maghrib, and Isha.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you offer Jumu\'ah (Friday) prayers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we offer Jumu\'ah services every Friday. Please check our weekly schedule or contact the mosque for the exact Khutbah time.'
                }
              }
            ]
          }
        ]}
      />
      {/* Navigation Header - Same as AboutPage */}
      <motion.header
        className="about-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="about-nav-container">
          <Link to="/" className="about-back-link">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
          <nav className="about-nav-links">
            <Link to="/about" className="about-nav-link">About</Link>
            <Link to="/education" className="about-nav-link">Education</Link>
            <Link to="/community" className="about-nav-link">Community</Link>
            <Link to="/prayer-times" className="about-nav-link active">Prayer Times</Link>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section with Date */}
      <section className="prayer-hero" ref={heroRef}>
        <motion.div
          className="prayer-hero-content"
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.h1 className="prayer-date" variants={fadeUp}>
            {prayerTimes?.gregorianDate || 'Loading...'}
          </motion.h1>
          <motion.p className="prayer-hijri" variants={fadeUp}>
            <i className="fas fa-calendar-alt"></i>
            {prayerTimes?.hijriDate || ''}
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="prayer-content">
        <div className="container">
          {/* Next Prayer Card */}
          <motion.div
            className="next-prayer-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="next-prayer-label">UPCOMING PRAYER</span>
            <h2 className="next-prayer-name">
              {prayerTimes?.nextPrayer?.name || 'Loading...'}
            </h2>
            <p className="next-prayer-time">
              Begins at {prayerTimes?.nextPrayer?.time || '--:--'}
            </p>

            <div className="countdown-display">
              <div className="countdown-item">
                <span className="countdown-value">
                  {countdown.hours.toString().padStart(2, '0')}
                </span>
                <span className="countdown-label">HOURS</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-value">
                  {countdown.minutes.toString().padStart(2, '0')}
                </span>
                <span className="countdown-label">MINUTES</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span className="countdown-value">
                  {countdown.seconds.toString().padStart(2, '0')}
                </span>
                <span className="countdown-label">SECONDS</span>
              </div>
            </div>
          </motion.div>

          {/* Schedule Tabs */}
          <motion.div
            className="schedule-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              className={`schedule-tab ${activeTab === 'daily' ? 'active' : ''}`}
              onClick={() => setActiveTab('daily')}
            >
              Daily Schedule
            </button>
            <button
              className={`schedule-tab ${activeTab === 'monthly' ? 'active' : ''}`}
              onClick={() => setActiveTab('monthly')}
            >
              Monthly Schedule
            </button>
          </motion.div>

          {/* Prayer Times Table */}
          <motion.div
            className="prayer-table-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {activeTab === 'daily' ? (
              <table className="prayer-table">
                <thead>
                  <tr>
                    <th>PRAYER</th>
                    <th>ADHAN</th>
                    <th>IQAMAH</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={3} className="loading-cell">
                        <div className="loading-spinner"></div>
                        Loading prayer times...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={3} className="error-cell">
                        Unable to load prayer times
                      </td>
                    </tr>
                  ) : (
                    prayersList.map((prayer) => (
                      <tr
                        key={prayer.name}
                        className={`${prayer.isNext ? 'next-prayer-row' : ''} ${prayer.isSunrise ? 'sunrise-row' : ''}`}
                      >
                        <td className="prayer-name-cell">
                          {prayer.isSunrise && <i className="fas fa-sun sunrise-icon"></i>}
                          {prayer.name}
                          {prayer.isNext && <span className="next-indicator"></span>}
                        </td>
                        <td className="adhan-cell">
                          {prayer.isSunrise ? '06:45 AM' : formatTo12Hour(prayer.adhan)}
                        </td>
                        <td className="iqamah-cell">
                          {prayer.isSunrise ? '-' : getIqamahTime(prayer.name, prayer.adhan)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            ) : (
              <div className="monthly-schedule">
                {isLoadingMonthly ? (
                  <div className="loading-cell">
                    <div className="loading-spinner"></div>
                    Loading monthly schedule...
                  </div>
                ) : (
                  <table className="prayer-table monthly">
                    <thead>
                      <tr>
                        <th>DATE</th>
                        <th>FAJR</th>
                        <th>DHUHR</th>
                        <th>ASR</th>
                        <th>MAGHRIB</th>
                        <th>ISHA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyData.slice(0, 7).map((day, index) => (
                        <tr key={index}>
                          <td>{day.date.gregorian.day}</td>
                          <td>{formatTo12Hour(day.timings.Fajr.split(' ')[0])}</td>
                          <td>{formatTo12Hour(day.timings.Dhuhr.split(' ')[0])}</td>
                          <td>{formatTo12Hour(day.timings.Asr.split(' ')[0])}</td>
                          <td>{formatTo12Hour(day.timings.Maghrib.split(' ')[0])}</td>
                          <td>{formatTo12Hour(day.timings.Isha.split(' ')[0])}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </motion.div>

          {/* Google Maps */}
          <motion.div
            className="map-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="map-wrapper">
              <iframe
                title="Al Rahma Islamic Center Location"
                src="https://maps.google.com/maps?q=2916+E+McDowell+Rd+unit+15,+Phoenix,+AZ+85008&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-info">
              <div className="map-location">
                <span className="map-label">LOCATION</span>
                <h4>Al Rahma Islamic Center</h4>
                <p>2916 E McDowell Rd unit 15, Phoenix, AZ 85008</p>
              </div>
              <a
                href="https://www.google.com/maps/dir//Al+Rahma+Islamic+Center,2916+E+McDowell+Rd,Phoenix,AZ"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                <i className="fas fa-directions"></i>
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Same as About page */}
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

export default PrayerTimesPage;

