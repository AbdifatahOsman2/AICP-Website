import type { Metadata } from 'next';
import AboutPage from '@/page-components/AboutPage';

export const metadata: Metadata = {
    title: 'About Al Rahma Islamic Center',
    description:
        "Learn about Al Rahma Islamic Center of Phoenix (AICP), a sanctuary of peace and reflection established in 1998. Discover our mission, architectural harmony, community programs, and Islamic education services in Phoenix, AZ.",
    keywords:
        'about al rahma, islamic center phoenix history, masjid phoenix az, muslim community phoenix, islamic center arizona',
    alternates: { canonical: 'https://masjidal-rahma.com/about' },
};

export default function Page() {
    return <AboutPage />;
}
