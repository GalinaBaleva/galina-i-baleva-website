'use client'

import { createContext, useContext, useState } from 'react'
import type { Lang } from '@/lib/types'
import { dict, type Dict } from '@/locales'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('BG')

  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
