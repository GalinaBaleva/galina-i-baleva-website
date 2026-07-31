import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SLUGS } from '@/lib/i18n/slugs'

const DE_SLUGS = new Set(Object.values(SLUGS.DE))
const OTHER_LANGS = ['bg', 'ru', 'en']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // www.galina-baleva.com → galina-baleva.com (301)
  const host = request.headers.get('host') ?? ''
  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone()
    url.host = host.slice(4)
    return NextResponse.redirect(url, { status: 301 })
  }

  const segments = pathname.split('/').filter(Boolean)

  // /de → 301 to /  (German home is now root)
  if (segments.length === 1 && segments[0] === 'de') {
    return NextResponse.redirect(new URL('/', request.url), { status: 301 })
  }

  // /de/uber-mich → 301 to /uber-mich
  if (segments.length === 2 && segments[0] === 'de' && DE_SLUGS.has(segments[1])) {
    return NextResponse.redirect(new URL(`/${segments[1]}`, request.url), { status: 301 })
  }

  // / → serve German home (internal rewrite, URL stays /)
  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/de', request.url))
  }

  // /uber-mich etc. → serve German section (internal rewrite, URL stays /uber-mich)
  if (segments.length === 1 && DE_SLUGS.has(segments[0])) {
    return NextResponse.rewrite(new URL(`/de/${segments[0]}`, request.url))
  }

  // /bg, /ru, /en and their slugs → pass through
  if (segments.length >= 1 && OTHER_LANGS.includes(segments[0])) {
    return NextResponse.next()
  }

  // Unknown path → redirect to German home
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
