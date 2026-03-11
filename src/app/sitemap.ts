import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/mdx';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://nowruz.wiki';

// All hard-coded custom pages
const staticPages = [
  '',              // homepage
  '/history',
  '/haft-sin',
  '/chaharshanbe-suri',
  '/nowruz-foods',
  '/science',
  '/sizdah-bedar',
  '/shahanshahi-calendar',
  '/wiki',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const articles = getAllArticles();

  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const locale of locales) {
    for (const page of staticPages) {
      const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${prefix}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
  }

  // Dynamic MDX article pages
  for (const locale of locales) {
    for (const article of articles) {
      const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${prefix}/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
