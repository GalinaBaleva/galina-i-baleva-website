import { redirect } from 'next/navigation'

// Fallback: proxy.ts rewrites / → /de at runtime, this only fires if middleware is bypassed
export default function RootPage() {
  redirect('/de')
}
