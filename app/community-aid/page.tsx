import type { Metadata } from 'next';
import CommunityAid from '@/page-components/CommunityAid';

export const metadata: Metadata = {
    title: 'Community Aid & Volunteer Opportunities',
    description:
        "Get involved with Al Rahma Islamic Center Phoenix. Volunteer for masjid maintenance, events, youth programs, food distribution, and more. Join 50+ active volunteers serving 500+ families.",
    keywords:
        'volunteer mosque phoenix, islamic community service, muslim volunteer phoenix az, masjid volunteer opportunities, community aid phoenix',
    alternates: { canonical: 'https://masjidal-rahma.com/community-aid' },
};

export default function Page() {
    return <CommunityAid />;
}
