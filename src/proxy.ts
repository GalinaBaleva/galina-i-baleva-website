import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const VALID_LANGS = ['bg', 'de', 'ru', 'en']
const DEFAULT_LANG = 'bg'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files, API routes, Next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files like /favicon.ico
  ) {
    return NextResponse.next()
  }

  // Root → default lang
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${DEFAULT_LANG}`, request.url))
  }

  // Already has a valid lang prefix → pass through
  const firstSegment = pathname.split('/')[1]
  if (VALID_LANGS.includes(firstSegment)) {
    return NextResponse.next()
  }

  // Unknown path → redirect to home
  return NextResponse.redirect(new URL(`/${DEFAULT_LANG}`, request.url))
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
