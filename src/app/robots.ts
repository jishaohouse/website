import { MetadataRoute } from 'next';

const baseUrl = 'https://www.jishaowindows.com'; // TODO: Replace with your actual domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
