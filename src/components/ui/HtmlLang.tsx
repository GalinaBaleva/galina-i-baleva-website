'use client'

import { useEffect } from 'react'
import { useLang } from '@/context/LangContext'

export function HtmlLang() {
  const { lang } = useLang()
  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase()
  }, [lang])
  return null
}
