/**
 * Prayer Times Service
 * Fetches prayer times from AlAdhan API for Phoenix, Arizona
 * https://aladhan.com/prayer-times-api
 */

// Types for the AlAdhan API response
export interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}

export interface HijriDate {
  date: string;
  format: string;
  day: string;
  weekday: { en: string; ar: string };
  month: { number: number; en: string; ar: string };
  year: string;
  designation: { abbreviated: string; expanded: string };
  holidays: string[];
}

export interface GregorianDate {
  date: string;
  format: string;
  day: string;
  weekday: { en: string };
  month: { number: number; en: string };
  year: string;
  designation: { abbreviated: string; expanded: string };
}

export interface PrayerTimesData {
  timings: PrayerTimings;
  date: {
    readable: string;
    timestamp: string;
    hijri: HijriDate;
    gregorian: GregorianDate;
  };
  meta: {
    latitude: number;
    longitude: number;
    timezone: string;
    method: {
      id: number;
      name: string;
      params: { Fajr: number; Isha: number };
      location: { latitude: number; longitude: number };
    };
    latitudeAdjustmentMethod: string;
    midnightMode: string;
    school: string;
    offset: { [key: string]: number };
  };
}

export interface AlAdhanResponse {
  code: number;
  status: string;
  data: PrayerTimesData;
}

export interface PrayerTime {
  name: string;
  time: string;
  time24: string;
  isNext: boolean;
  isPast: boolean;
}

export interface ProcessedPrayerTimes {
  prayers: PrayerTime[];
  nextPrayer: PrayerTime | null;
  hijriDate: string;
  gregorianDate: string;
  countdown: string;
  lastUpdated: Date;
}

// Phoenix, Arizona coordinates
const PHOENIX_CONFIG = {
  city: 'Phoenix',
  state: 'Arizona',
  country: 'USA',
  latitude: 33.4484,
  longitude: -112.0740,
  timezone: 'America/Phoenix',
  // Method 2 = Islamic Society of North America (ISNA)
  method: 2,
};

/**
 * Convert 24-hour time string to 12-hour format
 */
function formatTo12Hour(time24: string): string {
  const [hours, minutes] = time24.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}

/**
 * Convert time string to minutes since midnight for comparison
 */
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * Get current time in minutes since midnight
 */
function getCurrentMinutes(): number {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

/**
 * Calculate countdown to next prayer
 */
function calculateCountdown(nextPrayerTime: string): string {
  const currentMinutes = getCurrentMinutes();
  const prayerMinutes = timeToMinutes(nextPrayerTime);
  
  let diffMinutes = prayerMinutes - currentMinutes;
  
  // If negative, prayer is tomorrow
  if (diffMinutes < 0) {
    diffMinutes += 24 * 60;
  }
  
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

/**
 * Process raw API response into usable prayer times
 */
function processPrayerTimes(data: PrayerTimesData): ProcessedPrayerTimes {
  const { timings, date } = data;
  const currentMinutes = getCurrentMinutes();
  
  // Main prayers we want to display
  const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const;
  
  const prayers: PrayerTime[] = prayerNames.map((name) => {
    const time24 = timings[name].split(' ')[0]; // Remove any timezone suffix
    const prayerMinutes = timeToMinutes(time24);
    
    return {
      name,
      time: formatTo12Hour(time24),
      time24,
      isNext: false,
      isPast: prayerMinutes < currentMinutes,
    };
  });
  
  // Find next prayer
  let nextPrayer: PrayerTime | null = null;
  for (const prayer of prayers) {
    if (!prayer.isPast) {
      prayer.isNext = true;
      nextPrayer = prayer;
      break;
    }
  }
  
  // If all prayers are past, next prayer is Fajr tomorrow
  if (!nextPrayer && prayers.length > 0) {
    prayers[0].isNext = true;
    nextPrayer = prayers[0];
  }
  
  // Format Hijri date
  const hijriDate = `${date.hijri.day} ${date.hijri.month.en} ${date.hijri.year}`;
  
  // Format Gregorian date
  const gregorianDate = `${date.gregorian.weekday.en}, ${date.gregorian.month.en} ${date.gregorian.day}, ${date.gregorian.year}`;
  
  return {
    prayers,
    nextPrayer,
    hijriDate,
    gregorianDate,
    countdown: nextPrayer ? calculateCountdown(nextPrayer.time24) : '',
    lastUpdated: new Date(),
  };
}

/**
 * Fetch prayer times from AlAdhan API
 */
export async function fetchPrayerTimes(date?: Date): Promise<ProcessedPrayerTimes> {
  const targetDate = date || new Date();
  const dateStr = `${targetDate.getDate()}-${targetDate.getMonth() + 1}-${targetDate.getFullYear()}`;
  
  const params = new URLSearchParams({
    city: PHOENIX_CONFIG.city,
    state: PHOENIX_CONFIG.state,
    country: PHOENIX_CONFIG.country,
    method: PHOENIX_CONFIG.method.toString(),
    school: '0', // Shafi (standard)
  });
  
  const url = `https://api.aladhan.com/v1/timingsByCity/${dateStr}?${params}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const json: AlAdhanResponse = await response.json();
    
    if (json.code !== 200) {
      throw new Error(`API error: ${json.status}`);
    }
    
    return processPrayerTimes(json.data);
  } catch (error) {
    console.error('Failed to fetch prayer times:', error);
    throw error;
  }
}

/**
 * Fetch prayer times calendar for a month
 */
export async function fetchMonthlyPrayerTimes(
  month: number, 
  year: number
): Promise<PrayerTimesData[]> {
  const params = new URLSearchParams({
    city: PHOENIX_CONFIG.city,
    state: PHOENIX_CONFIG.state,
    country: PHOENIX_CONFIG.country,
    method: PHOENIX_CONFIG.method.toString(),
    month: month.toString(),
    year: year.toString(),
  });
  
  const url = `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?${params}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const json = await response.json();
    
    if (json.code !== 200) {
      throw new Error(`API error: ${json.status}`);
    }
    
    return json.data;
  } catch (error) {
    console.error('Failed to fetch monthly prayer times:', error);
    throw error;
  }
}

/**
 * Get Phoenix configuration
 */
export function getLocationConfig() {
  return { ...PHOENIX_CONFIG };
}

