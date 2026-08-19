import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { slugToSection, SLUGS, parseLang, VALID_LANGS, sectionSlug } from '@/lib/i18n/slugs'
import type { SectionId } from '@/lib/i18n/slugs'
import { dict } from '@/locales'

import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Certificates from '@/components/sections/Certificates'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

const SECTION_COMPONENTS: Record<SectionId, React.ComponentType> = {
  about:        About,
  skills:       Skills,
  certificates: Certificates,
  contact:      Contact,
  projects:     () => null,
}

type Params = Promise<{ lang: string; slug: string }>

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = []
  for (const lang of VALID_LANGS) {
    for (const slug of Object.values(SLUGS[lang])) {
      params.push({ lang: lang.toLowerCase(), slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang: langParam, slug } = await params
  const lang = parseLang(langParam)
  const section = slugToSection(lang, slug)
  if (!section) return {}

  const t = dict[lang]
  const sectionMeta: Record<SectionId, { title: string; description: string }> = {
    about:        { title: t.about.title,        description: t.about.bio1.replace(/<[^>]+>/g, '') },
    skills:       { title: t.skills.title,       description: t.skills.sub },
    certificates: { title: t.certificates.title, description: t.certificates.sub },
    contact:      { title: t.contact.title,      description: t.contact.desc },
    projects:     { title: t.projects.title,     description: t.projects.sub },
  }

  const BASE = 'https://galina-baleva.com'
  const canonical = lang === 'DE'
    ? BASE
    : `${BASE}/${langParam}`

  const languages: Record<string, string> = { 'x-default': `${BASE}/${sectionSlug('DE', section)}` }
  for (const l of VALID_LANGS) {
    const s = sectionSlug(l, section)
    languages[l.toLowerCase()] = l === 'DE' ? `${BASE}/${s}` : `${BASE}/${l.toLowerCase()}/${s}`
  }

  const meta = sectionMeta[section]
  return {
    title: `${meta.title} | Galina Baleva`,
    description: meta.description,
    alternates: { canonical, languages },
  }
}

export default async function SectionPage({ params }: { params: Params }) {
  const { lang: langParam, slug } = await params
  const lang = parseLang(langParam)
  const section = slugToSection(lang, slug)

  if (!section) notFound()

  const Component = SECTION_COMPONENTS[section]

  return (
    <main style={{ paddingTop: '64px' }}>
      <Component />
      <Footer />
    </main>
  )
}
