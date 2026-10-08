'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, useInView } from 'framer-motion';
import { StructuredData } from '../components/StructuredData';
import '../IslamicCalendar.css';

interface RamadanDay {
  day: number;
  date: string;
  suhoor: string;
  iftar: string;
  taraweeh: string;
}

interface EidPrayer {
  name: string;
  date: string;
  hijriDate: string;
  firstPrayer: string;
  secondPrayer: string;
  location: string;
}

const IslamicCalendar: React.FC = () => {
  const heroRef = React.useRef(null);
  const ramadanRef = React.useRef(null);
  const eidRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-50px' });
  const ramadanInView = useInView(ramadanRef, { once: true, margin: '-100px' });
  const eidInView = useInView(eidRef, { once: true, margin: '-100px' });

  const [activeTab, setActiveTab] = useState<'schedule' | 'events'>('schedule');

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

  // Sample Ramadan schedule data (would be dynamic in production)
  const ramadanSchedule: RamadanDay[] = [
    { day: 1, date: 'Feb 28', suhoor: '5:15 AM', iftar: '6:12 PM', taraweeh: '7:30 PM' },
    { day: 2, date: 'Mar 1', suhoor: '5:14 AM', iftar: '6:13 PM', taraweeh: '7:30 PM' },
    { day: 3, date: 'Mar 2', suhoor: '5:13 AM', iftar: '6:14 PM', taraweeh: '7:30 PM' },
    { day: 4, date: 'Mar 3', suhoor: '5:12 AM', iftar: '6:15 PM', taraweeh: '7:30 PM' },
    { day: 5, date: 'Mar 4', suhoor: '5:11 AM', iftar: '6:16 PM', taraweeh: '7:30 PM' },
    { day: 6, date: 'Mar 5', suhoor: '5:10 AM', iftar: '6:17 PM', taraweeh: '7:30 PM' },
    { day: 7, date: 'Mar 6', suhoor: '5:09 AM', iftar: '6:18 PM', taraweeh: '7:30 PM' },
    { day: 8, date: 'Mar 7', suhoor: '5:08 AM', iftar: '6:19 PM', taraweeh: '7:30 PM' },
    { day: 9, date: 'Mar 8', suhoor: '5:07 AM', iftar: '6:20 PM', taraweeh: '7:30 PM' },
    { day: 10, date: 'Mar 9', suhoor: '5:06 AM', iftar: '6:21 PM', taraweeh: '7:30 PM' },
  ];

  const ramadanEvents = [
    {
      title: 'Taraweeh Prayers',
      description: 'Nightly Taraweeh prayers throughout Ramadan',
      time: '7:30 PM',
      frequency: 'Every Night',
      icon: 'fas fa-moon'
    },
    {
      title: 'Iftar Program',
      description: 'Community iftar meals provided at the masjid',
      time: 'At Maghrib',
      frequency: 'Daily',
      icon: 'fas fa-utensils'
    },
    {
      title: 'Quran Khatam',
      description: 'Complete Quran recitation during Taraweeh',
      time: 'Throughout Ramadan',
      frequency: '27th Night',
      icon: 'fas fa-quran'
    },
    {
      title: 'Last 10 Nights',
      description: 'Special prayers and I\'tikaf during the blessed last 10 nights',
      time: 'After Isha',
      frequency: 'Last 10 Days',
      icon: 'fas fa-star'
    },
    {
      title: 'Laylatul Qadr',
      description: 'Night of Power program with special prayers and du\'a',
      time: 'All Night',
      frequency: '27th Night',
      icon: 'fas fa-star-and-crescent'
    },
  ];

  const eidPrayers: EidPrayer[] = [
    {
      name: 'Eid ul-Fitr',
      date: 'March 30, 2025',
      hijriDate: '1 Shawwal 1446',
      firstPrayer: '7:00 AM',
      secondPrayer: '8:30 AM',
      location: 'Al Rahma Islamic Center'
    },
    {
      name: 'Eid ul-Adha',
      date: 'June 6, 2025',
      hijriDate: '10 Dhul Hijjah 1446',
      firstPrayer: '7:00 AM',
      secondPrayer: '8:30 AM',
      location: 'Al Rahma Islamic Center'
    }
  ];

  const upcomingDates = [
    { name: 'Ramadan Begins', date: 'February 28, 2025', hijri: '1 Ramadan 1446', icon: 'fas fa-moon' },
    { name: 'Laylatul Qadr', date: 'March 26, 2025', hijri: '27 Ramadan 1446', icon: 'fas fa-star' },
    { name: 'Eid ul-Fitr', date: 'March 30, 2025', hijri: '1 Shawwal 1446', icon: 'fas fa-gift' },
    { name: 'Hajj Season', date: 'June 3-8, 2025', hijri: '7-12 Dhul Hijjah 1446', icon: 'fas fa-kaaba' },
    { name: 'Eid ul-Adha', date: 'June 6, 2025', hijri: '10 Dhul Hijjah 1446', icon: 'fas fa-mosque' },
    { name: 'Islamic New Year', date: 'June 26, 2025', hijri: '1 Muharram 1447', icon: 'fas fa-calendar-alt' },
  ];

  return (
    <div className="islamic-calendar-page">
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Islamic Calendar', url: '/islamic-calendar' },
        ]}
      />
      {/* Back Navigation */}
      <motion.header
        className="ic-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link href="/" className="ic-back-link">
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>
      </motion.header>

      {/* Hero Section */}
      <section className="ic-hero" ref={heroRef}>
        <motion.div
          className="ic-hero-content"
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.span className="ic-label" variants={fadeUp}>
            ISLAMIC CALENDAR 1446
          </motion.span>
          <motion.h1 className="ic-title" variants={fadeUp}>
            Special Prayers & Events
          </motion.h1>
          <motion.p className="ic-subtitle" variants={fadeUp}>
            Stay informed about Ramadan schedules, Eid prayers, and important Islamic dates
          </motion.p>
        </motion.div>
      </section>

      {/* Upcoming Dates Banner */}
      <section className="ic-upcoming">
        <div className="container">
          <motion.div
            className="ic-upcoming-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {upcomingDates.slice(0, 4).map((date, index) => (
              <div key={index} className="ic-upcoming-card">
                <div className="ic-upcoming-icon">
                  <i className={date.icon}></i>
                </div>
                <div className="ic-upcoming-info">
                  <h4>{date.name}</h4>
                  <p>{date.date}</p>
                  <span className="ic-hijri">{date.hijri}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ramadan Section */}
      <section className="ic-ramadan" ref={ramadanRef}>
        <div className="container">
          <motion.div
            className="ic-section-header"
            initial="hidden"
            animate={ramadanInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div className="ic-section-icon" variants={fadeUp}>
              <i className="fas fa-moon"></i>
            </motion.div>
            <motion.h2 className="ic-section-title" variants={fadeUp}>
              Ramadan 1446
            </motion.h2>
            <motion.p className="ic-section-description" variants={fadeUp}>
              February 28 - March 29, 2025
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="ic-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={ramadanInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className={`ic-tab ${activeTab === 'schedule' ? 'active' : ''}`}
              onClick={() => setActiveTab('schedule')}
            >
              <i className="fas fa-clock"></i>
              Prayer Schedule
            </button>
            <button
              className={`ic-tab ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              <i className="fas fa-calendar-check"></i>
              Events & Programs
            </button>
          </motion.div>

          {/* Schedule Table */}
          {activeTab === 'schedule' && (
            <motion.div
              className="ic-schedule-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="ic-schedule-header">
                <div className="ic-schedule-legend">
                  <span><i className="fas fa-sun"></i> Suhoor ends 10 min before Fajr</span>
                  <span><i className="fas fa-moon"></i> Iftar at Maghrib time</span>
                </div>
              </div>
              <table className="ic-schedule-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Suhoor</th>
                    <th>Iftar</th>
                    <th>Taraweeh</th>
                  </tr>
                </thead>
                <tbody>
                  {ramadanSchedule.map((day) => (
                    <tr key={day.day}>
                      <td className="ic-day-cell">{day.day}</td>
                      <td>{day.date}</td>
                      <td className="ic-suhoor">{day.suhoor}</td>
                      <td className="ic-iftar">{day.iftar}</td>
                      <td>{day.taraweeh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="ic-schedule-note">
                <i className="fas fa-info-circle"></i>
                Showing first 10 days. Full schedule available for download.
              </p>
              <button className="ic-download-btn" onClick={() => window.print()}>
                <i className="fas fa-download"></i>
                Download / Print Full Schedule
              </button>
            </motion.div>
          )}

          {/* Events Grid */}
          {activeTab === 'events' && (
            <motion.div
              className="ic-events-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {ramadanEvents.map((event, index) => (
                <div key={index} className="ic-event-card">
                  <div className="ic-event-icon">
                    <i className={event.icon}></i>
                  </div>
                  <div className="ic-event-content">
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <div className="ic-event-meta">
                      <span><i className="fas fa-clock"></i> {event.time}</span>
                      <span><i className="fas fa-redo"></i> {event.frequency}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Eid Section */}
      <section className="ic-eid" ref={eidRef}>
        <div className="container">
          <motion.div
            className="ic-section-header"
            initial="hidden"
            animate={eidInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.div className="ic-section-icon gold" variants={fadeUp}>
              <i className="fas fa-star-and-crescent"></i>
            </motion.div>
            <motion.h2 className="ic-section-title" variants={fadeUp}>
              Eid Prayers
            </motion.h2>
            <motion.p className="ic-section-description" variants={fadeUp}>
              Join us for Eid celebrations at Al Rahma Islamic Center
            </motion.p>
          </motion.div>

          <motion.div
            className="ic-eid-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={eidInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {eidPrayers.map((eid, index) => (
              <div key={index} className={`ic-eid-card ${index === 0 ? 'featured' : ''}`}>
                {index === 0 && <span className="ic-eid-badge">Upcoming</span>}
                <h3>{eid.name}</h3>
                <div className="ic-eid-date">
                  <span className="ic-eid-gregorian">{eid.date}</span>
                  <span className="ic-eid-hijri">{eid.hijriDate}</span>
                </div>
                <div className="ic-eid-times">
                  <div className="ic-eid-prayer">
                    <span className="ic-prayer-label">1st Prayer</span>
                    <span className="ic-prayer-time">{eid.firstPrayer}</span>
                  </div>
                  <div className="ic-eid-prayer">
                    <span className="ic-prayer-label">2nd Prayer</span>
                    <span className="ic-prayer-time">{eid.secondPrayer}</span>
                  </div>
                </div>
                <div className="ic-eid-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {eid.location}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="ic-eid-info"
            initial={{ opacity: 0 }}
            animate={eidInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4>Eid Prayer Guidelines</h4>
            <ul>
              <li><i className="fas fa-check"></i> Arrive 15-20 minutes early</li>
              <li><i className="fas fa-check"></i> Perform Ghusl before coming</li>
              <li><i className="fas fa-check"></i> Wear your best clothes</li>
              <li><i className="fas fa-check"></i> Bring your own prayer rug</li>
              <li><i className="fas fa-check"></i> Pay Zakat ul-Fitr before Eid ul-Fitr prayer</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ic-cta">
        <div className="container">
          <motion.div
            className="ic-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Stay Updated</h3>
            <p>Check daily prayer timings, Adhan &amp; Iqamah times for Ramadan and all year round</p>
            <Link href="/prayer-times" className="ic-cta-btn">
              <i className="fas fa-clock"></i>
              View Daily Prayer Times
            </Link>
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
              © {new Date().getFullYear()} Al Rahma Islamic Center of Phoenix
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IslamicCalendar;
