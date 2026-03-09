import type { Metadata } from 'next';
import IslamicCalendar from '@/page-components/IslamicCalendar';

export const metadata: Metadata = {
    title: 'Islamic Calendar & Hijri Dates',
    description:
        "View the Islamic (Hijri) calendar, Ramadan schedule with suhoor and iftar times, Eid prayer times, and important Islamic dates at Al Rahma Islamic Center Phoenix.",
    keywords:
        'islamic calendar phoenix, hijri calendar, ramadan schedule phoenix az, eid prayer times phoenix, suhoor iftar times phoenix, taraweeh prayers phoenix',
    alternates: { canonical: 'https://masjidal-rahma.com/islamic-calendar' },
};

export default function Page() {
    return <IslamicCalendar />;
}
