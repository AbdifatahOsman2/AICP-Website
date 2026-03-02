import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    keywords?: string;
    noindex?: boolean;
}

const SITE_NAME = 'Al Rahma Islamic Center of Phoenix';
const DEFAULT_DESCRIPTION =
    'Al Rahma Islamic Center of Phoenix (AICP) — Your local masjid in Phoenix, AZ offering daily prayers, Islamic education, Arabic classes, community programs, and more. Visit us at 2916 E McDowell Rd.';
const SITE_URL = 'https://masjidal-rahma.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/aicp-logo.png`;

export function SEO({
    title,
    description = DEFAULT_DESCRIPTION,
    canonical,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    keywords,
    noindex = false,
}: SEOProps) {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Masjid & Community Center in Phoenix, AZ`;
    const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Canonical */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional SEO */}
            <meta name="geo.placename" content="Phoenix, Arizona" />
            <meta name="geo.region" content="US-AZ" />
        </Helmet>
    );
}

export default SEO;
