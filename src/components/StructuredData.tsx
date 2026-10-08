const SITE_URL = 'https://masjidal-rahma.com';

// ── Canonical NAP ─────────────────────────────────────────────────────────────
// Name, Address, Phone must be IDENTICAL here, in Google Business Profile,
// and in every local directory citation for AI trust signals.
const NAP = {
    name: 'Al Rahma Islamic Center of Phoenix',
    streetAddress: '2916 E McDowell Rd, Unit 15',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    postalCode: '85008',
    addressCountry: 'US',
    telephone: '+1-602-574-8750',   // E.164 canonical format
    displayPhone: '(602) 574-8750', // Human-readable display format
};

// Mosque + Organization structured data
const mosqueSchema = {
    '@context': 'https://schema.org',
    '@type': ['Mosque', 'LocalBusiness'],
    '@id': `${SITE_URL}/#mosque`,
    name: NAP.name,
    alternateName: ['AICP', 'Masjid Al-Rahma', 'Al Rahma Masjid', 'Al-Rahma Islamic Center'],
    description:
        "Al Rahma Islamic Center of Phoenix (AICP) is a community mosque at 2916 E McDowell Rd, Unit 15, Phoenix, AZ 85008. AICP offers daily congregational prayers (Fajr, Dhuhr, Asr, Maghrib, Isha), Jumu'ah Friday prayer, Qur'an classes, Arabic language education, Islamic studies, youth programs, women's halaqahs, Janazah services, zakat assistance, and newcomer support for the Phoenix Muslim community.",
    url: SITE_URL,
    telephone: NAP.telephone,
    email: 'info@masjidal-rahma.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: NAP.streetAddress,
        addressLocality: NAP.addressLocality,
        addressRegion: NAP.addressRegion,
        postalCode: NAP.postalCode,
        addressCountry: NAP.addressCountry,
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.4656,
        longitude: -112.0324,
    },
    image: `${SITE_URL}/aicp-logo.png`,
    logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/aicp-logo.png`,
        width: 512,
        height: 512,
    },
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
    hasMap: `https://maps.google.com/?q=2916+E+McDowell+Rd+Unit+15+Phoenix+AZ+85008`,
    isAccessibleForFree: true,
    publicAccess: true,
    priceRange: 'Free',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Online',
    // Geographic service area — used by AI to answer "mosque near me in Phoenix"
    areaServed: [
        { '@type': 'City', name: 'Phoenix', containedIn: { '@type': 'State', name: 'Arizona' } },
        { '@type': 'City', name: 'Scottsdale' },
        { '@type': 'City', name: 'Tempe' },
        { '@type': 'City', name: 'Mesa' },
        { '@type': 'City', name: 'Glendale' },
        { '@type': 'AdministrativeArea', name: 'Maricopa County' },
    ],
    // Topical authority signals — AI engines use these to answer domain questions
    knowsAbout: [
        'Islamic prayer times in Phoenix AZ',
        "Jumu'ah Friday prayer Phoenix",
        'Qur\'an classes Phoenix Arizona',
        'Arabic language classes Phoenix',
        'Islamic education for children Phoenix',
        'Muslim community Phoenix Arizona',
        'Halal food assistance Phoenix',
        'Zakat distribution Phoenix',
        'Janazah funeral services Phoenix',
        'Nikah Islamic marriage Phoenix',
        'Muslim newcomer support Phoenix',
        'Somali Muslim community Phoenix',
        'Islamic center Maricopa County',
        'Masjid Phoenix AZ',
    ],
    amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: "Women's prayer area", value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Wudu facilities', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
        { '@type': 'LocationFeatureSpecification', name: "Children's Islamic school", value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Wheelchair accessible', value: true },
    ],
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
