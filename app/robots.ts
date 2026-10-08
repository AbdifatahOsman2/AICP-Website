import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Allow all standard crawlers
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
            // OpenAI / ChatGPT
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            // Google Gemini & AI Overviews
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            // Anthropic Claude
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            // Perplexity AI
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            // Apple Intelligence
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
            },
            // Microsoft Copilot / Bing Chat
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            // Meta AI
            {
                userAgent: 'FacebookBot',
                allow: '/',
            },
            // Amazon Alexa
            {
                userAgent: 'Amazonbot',
                allow: '/',
            },
            // ByteDance / TikTok
            {
                userAgent: 'Bytespider',
                allow: '/',
            },
        ],
        sitemap: 'https://masjidal-rahma.com/sitemap.xml',
    };
}
