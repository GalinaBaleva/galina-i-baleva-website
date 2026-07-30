import { bg } from '@/locales/bg'
import { de } from '@/locales/de'
import { en } from '@/locales/en'
import { ru } from '@/locales/ru'

const TOP_LEVEL_KEYS = ['nav', 'hero', 'about', 'skills', 'projects'] as const

const locales = { bg, de, en, ru }

describe('locale top-level keys', () => {
  for (const [name, locale] of Object.entries(locales)) {
    it(`${name} has all top-level sections`, () => {
      for (const key of TOP_LEVEL_KEYS) {
        expect(locale).toHaveProperty(key)
      }
    })
  }
})

describe('locale section keys', () => {
  for (const [name, locale] of Object.entries(locales)) {
    it(`${name} hero has required keys`, () => {
      const { badge, name: n, role, description, cta, stats, scroll } = locale.hero
      expect(badge).toBeTruthy()
      expect(n).toBeTruthy()
      expect(role).toBeTruthy()
      expect(description).toBeTruthy()
      expect(cta.primary).toBeTruthy()
      expect(cta.secondary).toBeTruthy()
      expect(stats).toHaveLength(3)
      expect(scroll).toBeTruthy()
    })

    it(`${name} nav has 4 links`, () => {
      expect(locale.nav.links).toHaveLength(4)
    })

    it(`${name} nav links all have section and label`, () => {
      for (const link of locale.nav.links) {
        expect(link.section).toBeTruthy()
        expect(link.label).toBeTruthy()
      }
    })

    it(`${name} about has required keys`, () => {
      const { label, title, bio1, bio2, chips, cta1, cta2 } = locale.about
      expect(label).toBeTruthy()
      expect(title).toBeTruthy()
      expect(bio1).toBeTruthy()
      expect(bio2).toBeTruthy()
      expect(chips.length).toBeGreaterThan(0)
      expect(cta1).toBeTruthy()
      expect(cta2).toBeTruthy()
    })

    it(`${name} about chips each have icon and text`, () => {
      for (const chip of locale.about.chips) {
        expect(chip.icon).toBeTruthy()
        expect(chip.text).toBeTruthy()
      }
    })

    it(`${name} skills has 4 items`, () => {
      expect(locale.skills.items).toHaveLength(4)
    })

    it(`${name} skills items have required fields`, () => {
      for (const item of locale.skills.items) {
        expect(item.name).toBeTruthy()
        expect(item.desc).toBeTruthy()
        expect(item.level).toBeGreaterThan(0)
        expect(item.level).toBeLessThanOrEqual(100)
        expect(item.tags.length).toBeGreaterThan(0)
      }
    })

    it(`${name} projects has 3 items`, () => {
      expect(locale.projects.items).toHaveLength(3)
    })

    it(`${name} projects items have required fields`, () => {
      for (const item of locale.projects.items) {
        expect(item.title).toBeTruthy()
        expect(item.desc).toBeTruthy()
        expect(item.live).toBeTruthy()
        expect(item.code).toBeTruthy()
      }
    })
  }
})

describe('locale structural parity', () => {
  const reference = bg

  function getLeafPaths(obj: unknown, prefix = ''): string[] {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) return [prefix]
    return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
      getLeafPaths(v, prefix ? `${prefix}.${k}` : k)
    )
  }

  const refPaths = new Set(getLeafPaths(reference))

  for (const [name, locale] of Object.entries(locales)) {
    if (name === 'bg') continue
    it(`${name} has the same leaf-path structure as bg`, () => {
      const paths = new Set(getLeafPaths(locale))
      for (const path of refPaths) {
        expect(paths).toContain(path)
      }
    })
  }
})
