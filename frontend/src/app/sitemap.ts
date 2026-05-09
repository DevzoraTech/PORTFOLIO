import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hamza.devzoratech.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more URLs if you add pages like /blog or /projects
  ];
}
