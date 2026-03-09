import type { Metadata } from 'next';
import Registration from '@/page-components/Registration';

export const metadata: Metadata = {
    title: 'Register for Islamic Education Programs',
    description:
        "Enroll your child in Al Rahma Islamic Center's Madrasah programs. Register for Quran memorization, Arabic language, Islamic studies, and weekend school in Phoenix, AZ.",
    keywords:
        'register islamic school phoenix, enroll madrasah phoenix az, quran class registration, arabic class enrollment phoenix',
    alternates: { canonical: 'https://masjidal-rahma.com/register' },
};

export default function Page() {
    return <Registration />;
}
