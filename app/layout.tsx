import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Al Rahma Islamic Center of Phoenix | Masjid & Community Center in Phoenix, AZ',
        template: '%s | Al Rahma Islamic Center of Phoenix',
    },
    description:
        "Al Rahma Islamic Center of Phoenix (AICP) — Your local masjid in Phoenix, AZ offering daily prayers, Islamic education, Arabic classes, community programs, and more. Visit us at 2916 E McDowell Rd.",
    metadataBase: new URL('https://masjidal-rahma.com'),
    keywords: 'islamic center phoenix, masjid phoenix az, mosque phoenix, prayer times phoenix, jummah prayer phoenix, islamic school phoenix, al rahma phoenix, muslim community phoenix arizona',
    openGraph: {
        siteName: 'Al Rahma Islamic Center of Phoenix',
        locale: 'en_US',
        type: 'website',
        title: 'Al Rahma Islamic Center of Phoenix | Masjid & Community Center in Phoenix, AZ',
        description: 'Your local masjid in Phoenix, AZ — daily prayers, Islamic education, Arabic classes, community programs and more. Visit us at 2916 E McDowell Rd.',
        images: [{
            url: '/aicp-logo.png',
            width: 800,
            height: 600,
            alt: 'Al Rahma Islamic Center of Phoenix Logo',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Al Rahma Islamic Center of Phoenix',
        description: 'Your local masjid in Phoenix, AZ — daily prayers, Islamic education, and community programs.',
        images: ['/aicp-logo.png'],
    },
    other: {
        'geo.placename': 'Phoenix, Arizona',
        'geo.region': 'US-AZ',
        'geo.position': '33.4734;-112.0493',
        'ICBM': '33.4734, -112.0493',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="hide-scrollbar">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    );
}
