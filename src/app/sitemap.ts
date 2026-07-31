import { MetadataRoute } from 'next'
import { SLUGS, VALID_LANGS } from '@/lib/i18n/slugs'
import type { SectionId } from '@/lib/i18n/slugs'

const BASE = 'https://galina-baleva.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Home pages per language (DE is at root /)
  for (const lang of VALID_LANGS) {
    entries.push({
      url: lang === 'DE' ? BASE : `${BASE}/${lang.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  }

  // Section pages per language (DE slugs are at root /uber-mich etc.)
  const sections: SectionId[] = ['about', 'skills', 'certificates', 'contact']
  for (const lang of VALID_LANGS) {
    for (const section of sections) {
      const url = lang === 'DE'
        ? `${BASE}/${SLUGS[lang][section]}`
        : `${BASE}/${lang.toLowerCase()}/${SLUGS[lang][section]}`
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return entries
}
