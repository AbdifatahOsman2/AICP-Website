import { useState, useEffect, useCallback } from 'react';
import { 
  fetchPrayerTimes, 
  ProcessedPrayerTimes 
} from '../services/prayerTimes';

interface UsePrayerTimesOptions {
  /** Refresh interval in milliseconds (default: 60000 = 1 minute) */
  refreshInterval?: number;
  /** Whether to automatically refresh (default: true) */
  autoRefresh?: boolean;
}

interface UsePrayerTimesReturn {
  /** Processed prayer times data */
  prayerTimes: ProcessedPrayerTimes | null;
  /** Loading state */
  isLoading: boolean;
  /** Error state */
  error: Error | null;
  /** Manually refresh prayer times */
  refresh: () => Promise<void>;
  /** Countdown to next prayer (updates every minute) */
  countdown: string;
}

/**
 * Custom hook for fetching and managing prayer times
 * 
 * @example
 * ```tsx
 * const { prayerTimes, isLoading, error, countdown } = usePrayerTimes();
 * 
 * if (isLoading) return <div>Loading...</div>;
 * if (error) return <div>Error: {error.message}</div>;
 * 
 * return (
 *   <div>
 *     {prayerTimes?.prayers.map(prayer => (
 *       <div key={prayer.name}>{prayer.name}: {prayer.time}</div>
 *     ))}
 *     <div>Next prayer in: {countdown}</div>
 *   </div>
 * );
 * ```
 */
export function usePrayerTimes(options: UsePrayerTimesOptions = {}): UsePrayerTimesReturn {
  const { 
    refreshInterval = 60000, // 1 minute
    autoRefresh = true 
  } = options;

  const [prayerTimes, setPrayerTimes] = useState<ProcessedPrayerTimes | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [countdown, setCountdown] = useState('');

  const refresh = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchPrayerTimes();
      setPrayerTimes(data);
      setCountdown(data.countdown);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch prayer times'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    refresh();
  }, [refresh]);

  // Auto refresh data
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      refresh();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, refresh]);

  // Update countdown every minute
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

      const diffMinutes = Math.floor(diff / 60000);
      const h = Math.floor(diffMinutes / 60);
      const m = diffMinutes % 60;

      setCountdown(h > 0 ? `${h}h ${m}m` : `${m}m`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, [prayerTimes?.nextPrayer]);

  return {
    prayerTimes,
    isLoading,
    error,
    refresh,
    countdown,
  };
}

export default usePrayerTimes;

