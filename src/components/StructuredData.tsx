import React from 'react';

const SITE_URL = 'https://masjidal-rahma.com';

// Mosque + Organization structured data
const mosqueSchema = {
    '@context': 'https://schema.org',
    '@type': 'Mosque',
    '@id': `${SITE_URL}/#mosque`,
    name: 'Al Rahma Islamic Center of Phoenix',
    alternateName: ['AICP', 'Masjid Al-Rahma', 'Al Rahma Masjid'],
    description:
        "Al Rahma Islamic Center of Phoenix (AICP) is a community mosque offering daily prayers, Jumu'ah services, Islamic education, Arabic language classes, and community programs in Phoenix, Arizona.",
    url: SITE_URL,
    telephone: '+1-602-574-8750',
    email: 'info@masjidal-rahma.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '2916 E McDowell Rd unit 15',
        addressLocality: 'Phoenix',
        addressRegion: 'AZ',
        postalCode: '85008',
        addressCountry: 'US',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.4656,
        longitude: -112.0324,
    },
    image: `${SITE_URL}/aicp-logo.png`,
    logo: `${SITE_URL}/aicp-logo.png`,
    sameAs: [
        'https://www.facebook.com/AlRahmaAZ/',
        'https://www.instagram.com/masjidalrahma/',
        'https://www.youtube.com/channel/UCZhSVWVHK0vfxZOOKWA_-ZQ',
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '05:00',
            closes: '22:00',
        },
    ],
    hasMap: 'https://maps.google.com/?q=2916+E+McDowell+Rd+unit+15+Phoenix+AZ+85008',
    isAccessibleForFree: true,
    publicAccess: true,
};

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Al Rahma Islamic Center of Phoenix',
    alternateName: 'AICP',
    url: SITE_URL,
    logo: `${SITE_URL}/aicp-logo.png`,
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-602-574-8750',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic', 'Somali'],
    },
    sameAs: [
        'https://www.facebook.com/AlRahmaAZ/',
        'https://www.instagram.com/masjidalrahma/',
        'https://www.youtube.com/channel/UCZhSVWVHK0vfxZOOKWA_-ZQ',
    ],
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Al Rahma Islamic Center of Phoenix',
    url: SITE_URL,
    publisher: {
        '@id': `${SITE_URL}/#organization`,
    },
};

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface StructuredDataProps {
    breadcrumbs?: BreadcrumbItem[];
    additionalSchemas?: object[];
}

export function StructuredData({ breadcrumbs, additionalSchemas }: StructuredDataProps) {
    const schemas: object[] = [mosqueSchema, organizationSchema, websiteSchema];

    if (breadcrumbs && breadcrumbs.length > 0) {
        const breadcrumbSchema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: `${SITE_URL}${item.url}`,
            })),
        };
        schemas.push(breadcrumbSchema);
    }

    if (additionalSchemas) {
        schemas.push(...additionalSchemas);
    }

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

export default StructuredData;
