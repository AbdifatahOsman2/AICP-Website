'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePrayerTimes } from '../hooks/usePrayerTimes';

interface PrayerTimesBarProps {
  /** Visual variant of the component */
  variant?: 'hero' | 'standalone' | 'compact';
  /** Whether to show the date */
  showDate?: boolean;
  /** Whether to show Hijri date */
  showHijri?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * Reusable Prayer Times Bar Component
 * Fetches real-time prayer times from AlAdhan API for Phoenix, AZ
 * 
 * @example
 * ```tsx
 * // Hero variant (glass effect, used in hero section)
 * <PrayerTimesBar variant="hero" />
 * 
 * // Standalone variant (for dedicated prayer times page)
 * <PrayerTimesBar variant="standalone" showDate showHijri />
 * 
 * // Compact variant (for widgets/sidebars)
 * <PrayerTimesBar variant="compact" />
 * ```
 */
export function PrayerTimesBar({
  variant = 'hero',
  showDate = false,
  showHijri = false,
  className = ''
}: PrayerTimesBarProps) {
  const { prayerTimes, isLoading, error, countdown } = usePrayerTimes();

  // Loading state
  if (isLoading && !prayerTimes) {
    return (
      <div className={`prayer-bar glass ${className}`}>
        <div className="prayer-bar-loading">
          <div className="pulse-dot"></div>
          <span>Loading prayer times...</span>
        </div>
      </div>
    );
  }

  // Error state with fallback
  if (error && !prayerTimes) {
    return (
      <div className={`prayer-bar glass ${className}`}>
        <div className="prayer-bar-error">
          <i className="fas fa-exclamation-circle"></i>
          <span>Unable to load prayer times</span>
        </div>
      </div>
    );
  }

  if (!prayerTimes) return null;

  const { prayers, nextPrayer, hijriDate, gregorianDate } = prayerTimes;

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={`prayer-bar-compact ${className}`}>
        {nextPrayer && (
          <div className="prayer-bar-compact-next">
            <span className="label">Next: {nextPrayer.name}</span>
            <span className="time">{nextPrayer.time}</span>
            <span className="countdown">in {countdown}</span>
          </div>
        )}
      </div>
    );
  }

  // Standalone variant
  if (variant === 'standalone') {
    return (
      <div className={`prayer-times-standalone ${className}`}>
        {(showDate || showHijri) && (
          <div className="prayer-times-header">
            {showDate && <span className="gregorian-date">{gregorianDate}</span>}
            {showHijri && <span className="hijri-date">{hijriDate}</span>}
          </div>
        )}

        <div className="prayer-times-grid">
          {prayers.map((prayer) => (
            <div
              key={prayer.name}
              className={`prayer-time-card ${prayer.isNext ? 'next' : ''} ${prayer.isPast ? 'past' : ''}`}
            >
              <span className="prayer-name">{prayer.name}</span>
              <span className="prayer-time">{prayer.time}</span>
              {prayer.isNext && (
                <span className="next-badge">Next • {countdown}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Hero variant (default)
  return (
    <div className={`prayer-bar glass ${className}`}>
      <div className="prayer-bar-next">
        <div className="pulse-dot"></div>
        <div className="prayer-bar-next-info">
          <span className="label">Next Prayer</span>
          <span className="prayer-bar-next-name">
            {nextPrayer?.name || 'Fajr'}
            <span className="countdown-text"> in {countdown}</span>
          </span>
        </div>
      </div>

      <div className="prayer-bar-times">
        {prayers.map((prayer) => (
          <motion.div
            key={prayer.name}
            className={`prayer-time-item ${prayer.isNext ? 'active' : ''} ${prayer.isPast ? 'past' : ''}`}
            whileHover={{
              scale: 1.08,
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="prayer-time-name">{prayer.name}</span>
            <span className="prayer-time-value">{prayer.time}</span>
          </motion.div>
        ))}
      </div>

      <div className="prayer-bar-date hide-mobile">
        {showHijri ? (
          <span>{hijriDate}</span>
        ) : (
          <span>Phoenix, AZ</span>
        )}
      </div>
    </div>
  );
}

export default PrayerTimesBar;

