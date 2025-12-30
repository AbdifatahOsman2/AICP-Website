import React, { useState, useRef, useCallback } from 'react';
import { motion, useInView, Variants, useSpring, useMotionValue } from 'framer-motion';

// ============================================
// Shared Animation Config - Performance Optimized
// All animations kept under 300ms for snappy feel
// ============================================

// Custom easing as tuple type for TypeScript compatibility
const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Consistent spring config for all interactive elements
export const springConfig = {
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

// Fast spring for micro-interactions (under 300ms)
export const fastSpring = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 30,
  mass: 0.5,
};

// Animation durations (kept under 300ms)
export const durations = {
  instant: 0.1,
  fast: 0.15,
  normal: 0.25,
  slow: 0.3,
};

// Animation Variants with proper typing
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: easeOutExpo
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 1, 
      ease: easeOutExpo
    }
  }
};

// Reusable Animation Wrapper
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.2,
            delay,
            ease: easeOutExpo
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// Magnetic Button Component
// Subtle "pull" effect towards cursor for CTAs
// ============================================
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  as?: 'button' | 'div' | 'a';
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  radius = 100,
  as = 'button',
  onClick,
  disabled = false,
  ariaLabel,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < radius) {
      const pull = (1 - distance / radius) * strength;
      x.set(distanceX * pull);
      y.set(distanceY * pull);
    }
  }, [disabled, radius, strength, x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const MotionComponent = motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      role={as === 'button' ? 'button' : undefined}
      tabIndex={disabled ? -1 : 0}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={(e) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {children}
    </MotionComponent>
  );
}

// ============================================
// Success Button Component
// Shows checkmark animation on success
// ============================================
type ButtonState = 'idle' | 'loading' | 'success' | 'error';

interface SuccessButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => Promise<void> | void;
  successDuration?: number;
  disabled?: boolean;
  type?: 'button' | 'submit';
  loadingText?: string;
  successText?: string;
  ariaLabel?: string;
}

export function SuccessButton({
  children,
  className = '',
  onClick,
  successDuration = 2000,
  disabled = false,
  type = 'button',
  loadingText = 'Processing...',
  successText = 'Success!',
  ariaLabel,
}: SuccessButtonProps) {
  const [state, setState] = useState<ButtonState>('idle');

  const handleClick = async () => {
    if (state !== 'idle' || disabled) return;

    setState('loading');

    try {
      await onClick?.();
      setState('success');

      // Announce success to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = successText;
      document.body.appendChild(announcement);
      setTimeout(() => announcement.remove(), 1000);

      setTimeout(() => setState('idle'), successDuration);
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 2000);
    }
  };

  return (
    <motion.button
      type={type}
      className={`success-button ${className} ${state}`}
      onClick={handleClick}
      disabled={disabled || state !== 'idle'}
      aria-label={ariaLabel}
      aria-busy={state === 'loading'}
      animate={{
        backgroundColor: state === 'success' ? '#22c55e' : undefined,
        scale: state === 'success' ? [1, 1.02, 1] : 1,
      }}
      transition={fastSpring}
    >
      <span className="success-button-content" style={{
        opacity: state === 'idle' ? 1 : 0,
        transform: state === 'idle' ? 'translateY(0)' : 'translateY(-10px)',
        transition: `all ${durations.fast}s ease`
      }}>
        {children}
      </span>

      {state === 'loading' && (
        <span className="success-button-loading" aria-hidden="true">
          <span className="success-spinner" />
          {loadingText}
        </span>
      )}

      {state === 'success' && (
        <motion.span
          className="success-button-success"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={fastSpring}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <motion.path
              d="M4 10L8 14L16 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: durations.normal, ease: 'easeOut' }}
            />
          </svg>
          {successText}
        </motion.span>
      )}
    </motion.button>
  );
}

// ============================================
// Parallax Image Component
// Subtle movement on scroll - home page only
// ============================================
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}

export function ParallaxImage({ src, alt, speed = 0.5, className = '' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = -rect.top * speed * 0.1;
      y.set(scrollProgress);
    };

    // Use passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, y]);

  return (
    <div ref={ref} className={`parallax-container ${className}`} style={{ overflow: 'hidden' }}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="parallax-image"
      />
    </div>
  );
}

// ============================================
// Pulse Animation for Prayer Times
// Accessible pulsing indicator
// ============================================
interface PulseIndicatorProps {
  active?: boolean;
  color?: string;
  size?: number;
  ariaLabel?: string;
}

export function PulseIndicator({
  active = true,
  color = 'var(--secondary)',
  size = 8,
  ariaLabel = 'Active indicator'
}: PulseIndicatorProps) {
  if (!active) return null;

  return (
    <span
      className="pulse-indicator"
      role="status"
      aria-label={ariaLabel}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        display: 'inline-block',
        position: 'relative',
      }}
    >
      <motion.span
        style={{
          position: 'absolute',
          inset: -2,
          borderRadius: '50%',
          border: `2px solid ${color}`,
        }}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        aria-hidden="true"
      />
    </span>
  );
}

// ============================================
// Jumu'ah Friday Banner Component
// Shows 2 hours before Khutbah with live indicator
// ============================================
interface JumuahBannerProps {
  khutbahTime?: string; // 24h format, e.g., "12:30"
  className?: string;
}

export function JumuahBanner({ khutbahTime = '12:30', className = '' }: JumuahBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0 });
  const [isLive, setIsLive] = useState(false);

  React.useEffect(() => {
    const checkJumuah = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 = Sunday, 5 = Friday

      if (dayOfWeek !== 5) {
        setIsVisible(false);
        return;
      }

      const [khutbahHour, khutbahMinute] = khutbahTime.split(':').map(Number);
      const khutbahDate = new Date();
      khutbahDate.setHours(khutbahHour, khutbahMinute, 0, 0);

      const twoHoursBefore = new Date(khutbahDate.getTime() - 2 * 60 * 60 * 1000);
      const thirtyMinutesAfter = new Date(khutbahDate.getTime() + 30 * 60 * 1000);

      // Show banner 2 hours before until 30 min after
      if (now >= twoHoursBefore && now <= thirtyMinutesAfter) {
        setIsVisible(true);

        // Check if currently during Khutbah (from start time to 30 min after)
        if (now >= khutbahDate && now <= thirtyMinutesAfter) {
          setIsLive(true);
          setCountdown({ hours: 0, minutes: 0 });
        } else {
          setIsLive(false);
          const diff = khutbahDate.getTime() - now.getTime();
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          setCountdown({ hours, minutes });
        }
      } else {
        setIsVisible(false);
      }
    };

    checkJumuah();
    const interval = setInterval(checkJumuah, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [khutbahTime]);

  if (!isVisible) return null;

  return (
    <motion.div
      className={`jumuah-banner ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={fastSpring}
      role="banner"
      aria-label={isLive ? 'Jumu\'ah prayer is happening now' : `Jumu'ah prayer starts in ${countdown.hours} hours and ${countdown.minutes} minutes`}
    >
      <div className="jumuah-banner-content">
        {isLive ? (
          <>
            <span className="jumuah-live-indicator" aria-hidden="true">
              <span className="jumuah-live-dot" />
              LIVE
            </span>
            <span className="jumuah-text">Jumu'ah Khutbah is happening now</span>
          </>
        ) : (
          <>
            <i className="fas fa-mosque" aria-hidden="true" />
            <span className="jumuah-text">
              Jumu'ah in <strong>{countdown.hours}h {countdown.minutes}m</strong>
            </span>
          </>
        )}
        <span className="jumuah-time">Khutbah at {formatTime12h(khutbahTime)}</span>
      </div>
    </motion.div>
  );
}

// Helper to format 24h to 12h
function formatTime12h(time24: string): string {
  const [hours, minutes] = time24.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}
