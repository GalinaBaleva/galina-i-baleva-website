import type { Lang } from '@/lib/types'

export type SectionId = 'about' | 'skills' | 'certificates' | 'contact' | 'projects'

export const SLUGS: Record<Lang, Record<SectionId, string>> = {
  DE: {
    about:        'uber-mich',
    skills:       'fahigkeiten',
    projects:     'projekte',
    certificates: 'zertifikate',
    contact:      'kontakt',
  },
  RU: {
    about:        'obo-mne',
    skills:       'naviki',
    projects:     'proekty',
    certificates: 'sertifikaty',
    contact:      'kontakt',
  },
  BG: {
    about:        'za-men',
    skills:       'umenya',
    projects:     'proekti',
    certificates: 'sertifikati',
    contact:      'kontakt',
  },
  EN: {
    about:        'about',
    skills:       'skills',
    projects:     'projects',
    certificates: 'certificates',
    contact:      'contact',
  },
}

export function slugToSection(lang: Lang, slug: string): SectionId | null {
  const map = SLUGS[lang]
  const entry = Object.entries(map).find(([, s]) => s === slug)
  return entry ? (entry[0] as SectionId) : null
}

export function sectionSlug(lang: Lang, section: SectionId): string {
  return SLUGS[lang][section]
}

export const VALID_LANGS: Lang[] = ['BG', 'DE', 'RU', 'EN']

export function parseLang(param: string): Lang {
  const upper = param.toUpperCase() as Lang
  return VALID_LANGS.includes(upper) ? upper : 'BG'
}
