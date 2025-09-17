import { MetadataRoute } from 'next'

// Definisi sitemap sebagai array
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fake-store-beta-taupe.vercel.app",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: "https://fake-store-beta-taupe.vercel.app/products",
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: "https://fake-store-beta-taupe.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}