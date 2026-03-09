import type { Metadata } from 'next';
import Education from '@/page-components/Education';

export const metadata: Metadata = {
    title: 'Islamic Education & Arabic Classes',
    description:
        "Enroll in AICP's Madrasah programs: Quran memorization (Hifz), Arabic language classes, Islamic studies, and weekend school for all ages. Certified teachers, small class sizes, and flexible schedules in Phoenix, AZ.",
    keywords:
        'islamic school phoenix, arabic classes phoenix az, quran memorization phoenix, hifz program arizona, islamic studies phoenix, weekend islamic school, madrasah phoenix',
    alternates: { canonical: 'https://masjidal-rahma.com/education' },
};

export default function Page() {
    return <Education />;
}
