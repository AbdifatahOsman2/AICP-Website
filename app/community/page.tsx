import type { Metadata } from 'next';
import CommunityPage from '@/page-components/CommunityPage';

export const metadata: Metadata = {
    title: 'Community Events & Programs',
    description:
        "Explore community events, gatherings, and programs at Al Rahma Islamic Center Phoenix. View our gallery of BBQs, Quran graduations, and community celebrations.",
    keywords:
        'islamic community events phoenix, masjid events phoenix az, muslim gatherings phoenix, community bbq mosque, quran graduation phoenix',
    alternates: { canonical: 'https://masjidal-rahma.com/community' },
};

export default function Page() {
    return <CommunityPage />;
}
