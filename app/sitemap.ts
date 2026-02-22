import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

const baseUrl = 'https://docs.runveto.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...source.getPages().map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page.url === '/docs' ? 1 : 0.8,
    })),
  ];
}
