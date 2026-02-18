import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://masfpakistan.org";
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/get-involved`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/donate`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/developers`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/study-guidelines`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}
