import type { Metadata } from 'next'
import { LangProvider } from '@/context/LangContext'
import { HtmlLang } from '@/components/ui/HtmlLang'
import Nav from '@/app/components/Nav'
import { parseLang, VALID_LANGS } from '@/lib/i18n/slugs'
import type { Lang } from '@/lib/types'

const BASE = 'https://galina-baleva.com'

export function generateStaticParams() {
  return VALID_LANGS.map((lang) => ({ lang: lang.toLowerCase() }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: langParam } = await params
  const lang: Lang = parseLang(langParam)

  const canonical = lang === 'DE' ? BASE : `${BASE}/${langParam}`

  return {
    alternates: {
      canonical,
      languages: {
        'de':        `${BASE}/`,
        'bg':        `${BASE}/bg`,
        'ru':        `${BASE}/ru`,
        'en':        `${BASE}/en`,
        'x-default': `${BASE}/`,
      },
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang: langParam } = await params
  const lang: Lang = parseLang(langParam)

  return (
    <LangProvider initialLang={lang}>
      <HtmlLang />
      <Nav />
      {children}
    </LangProvider>
  )
}
