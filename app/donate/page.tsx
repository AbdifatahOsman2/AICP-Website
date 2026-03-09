import type { Metadata } from 'next';
import Donation from '@/page-components/Donation';

export const metadata: Metadata = {
    title: 'Donate to Al Rahma Islamic Center',
    description:
        "Support Al Rahma Islamic Center of Phoenix with your Zakat, Sadaqah, or general donation. Your tax-deductible contribution helps maintain our mosque, fund education programs, and serve our community.",
    keywords:
        'donate to mosque phoenix, zakat phoenix az, sadaqah donation, islamic charity phoenix, support masjid phoenix, tax deductible mosque donation',
    alternates: { canonical: 'https://masjidal-rahma.com/donate' },
};

export default function Page() {
    return <Donation />;
}
