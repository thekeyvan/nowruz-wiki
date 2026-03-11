import { MetadataRoute } from 'next/server';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nowruz.wiki';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
