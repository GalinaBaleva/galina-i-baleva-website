import { MetadataRoute } from 'next'
import { SLUGS, VALID_LANGS } from '@/lib/i18n/slugs'
import type { SectionId } from '@/lib/i18n/slugs'

const BASE = 'https://galina-baleva.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Home pages per language
  for (const lang of VALID_LANGS) {
    entries.push({
      url: `${BASE}/${lang.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  }

  // Section pages per language
  const sections: SectionId[] = ['about', 'skills', 'certificates', 'contact']
  for (const lang of VALID_LANGS) {
    for (const section of sections) {
      entries.push({
        url: `${BASE}/${lang.toLowerCase()}/${SLUGS[lang][section]}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return entries
}
