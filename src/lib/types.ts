export const LANGS = ['BG', 'DE', 'RU', 'EN'] as const
export type Lang = (typeof LANGS)[number]

export interface NavLink {
  href: string
  label: string
}

export interface Stat {
  value: string
  suffix: string
  label: string
}

export interface Skill {
  id: string
  icon: string
  /** bg color for the icon box, e.g. "rgba(0,229,255,.1)" */
  iconBg: string
  level: number          // 0–100
  tags: string[]
  name: Record<Lang, string>
  description: Record<Lang, string>
}

export interface ProjectTag {
  label: string
  /** tailwind bg/text/border classes or inline style color set */
  color: 'cyan' | 'purple' | 'red'
}

export interface ProjectLink {
  href: string
  label: Record<Lang, string>
  variant: 'primary' | 'secondary'
}

export interface Project {
  id: string
  emoji: string
  /** gradient CSS string for the thumbnail background */
  thumbBg: string
  tags: ProjectTag[]
  title: Record<Lang, string>
  description: Record<Lang, string>
  links: ProjectLink[]
}

export interface ContactInfoItem {
  id: string
  icon: React.ReactNode
  label: Record<Lang, string>
  value: string
}

export interface AboutChip {
  icon: string
  label: Record<Lang, string>
}