import { bg } from './bg'
import { de } from './de'
import { en } from './en'
import { ru } from './ru'
import type { Lang } from '@/lib/types'

export const dict: Record<Lang, typeof bg> = { BG: bg, DE: de, EN: en, RU: ru }

export type Dict = typeof bg
