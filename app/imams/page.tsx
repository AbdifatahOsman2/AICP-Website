import type { Metadata } from 'next';
import Imams from '@/page-components/Imams';

export const metadata: Metadata = {
    title: 'Our Imams & Scholars',
    description:
        "Meet the spiritual leaders of Al Rahma Islamic Center Phoenix. Sheikh Nageya (Senior Imam) and Sheikh Abdimalik bring decades of Islamic scholarship, Quran expertise, and community guidance.",
    keywords:
        'imam phoenix az, islamic scholar phoenix, sheikh nageya, sheikh abdimalik, muslim leaders phoenix, spiritual guidance phoenix',
    alternates: { canonical: 'https://masjidal-rahma.com/imams' },
};

export default function Page() {
    return <Imams />;
}
