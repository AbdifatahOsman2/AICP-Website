import type { Metadata } from 'next';
import VolunteerForm from '@/page-components/VolunteerForm';

export const metadata: Metadata = {
    title: 'Volunteer Registration',
    description:
        "Register as a volunteer at Al Rahma Islamic Center Phoenix. Choose from masjid maintenance, event support, youth programs, food distribution, and more.",
    keywords:
        'volunteer registration mosque, islamic volunteer phoenix, community service mosque phoenix',
    alternates: { canonical: 'https://masjidal-rahma.com/volunteer' },
};

export default function Page() {
    return <VolunteerForm />;
}
