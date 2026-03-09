import type { Metadata } from 'next';
import {
    Header,
    HeroSection,
    QuoteSection,
    StatsSection,
    MadrasahSection,
    StorySection,
    UpdatesSection,
    ConnectSection,
    NewsletterSection,
    Footer,
    StructuredData,
} from '@/components';

export const metadata: Metadata = {
    description:
        "Al Rahma Islamic Center of Phoenix (AICP) — Your local masjid offering daily prayers, Jumu'ah, Islamic education, Arabic classes, Quran studies, and community programs. Located at 2916 E McDowell Rd, Phoenix, AZ 85008.",
    keywords:
        'islamic center phoenix, masjid phoenix az, mosque near me phoenix, prayer times phoenix, jummah prayer phoenix, islamic school phoenix, arabic classes phoenix, al rahma phoenix, muslim community phoenix',
    alternates: { canonical: 'https://masjidal-rahma.com/' },
};

export default function HomePage() {
    return (
        <div className="app">
            <StructuredData breadcrumbs={[{ name: 'Home', url: '/' }]} />
            <Header />
            <HeroSection />
            <QuoteSection />
            <StatsSection />
            <MadrasahSection />
            <StorySection />
            <UpdatesSection />
            <ConnectSection />
            <NewsletterSection />
            <Footer />
        </div>
    );
}
