import { LangProvider } from '@/context/LangContext'
import Nav from '@/app/components/Nav'
import { parseLang, VALID_LANGS } from '@/lib/i18n/slugs'
import type { Lang } from '@/lib/types'

export function generateStaticParams() {
  return VALID_LANGS.map((lang) => ({ lang: lang.toLowerCase() }))
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
      <Nav />
      {children}
    </LangProvider>
  )
}
