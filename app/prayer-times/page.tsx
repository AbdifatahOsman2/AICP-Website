import type { Metadata } from 'next';
import PrayerTimesPage from '@/page-components/PrayerTimesPage';

export const metadata: Metadata = {
    title: 'Daily Prayer Times',
    description:
        "Accurate daily prayer times (Salah times) for Al Rahma Islamic Center in Phoenix, AZ. View Fajr, Dhuhr, Asr, Maghrib, Isha adhan and iqamah times. Updated daily with countdown to next prayer.",
    keywords:
        'prayer times phoenix az, salah times phoenix, fajr time phoenix, maghrib time phoenix, isha time phoenix, masjid prayer schedule, jummah prayer times phoenix',
    alternates: { canonical: 'https://masjidal-rahma.com/prayer-times' },
};

export default function Page() {
    return <PrayerTimesPage />;
}
