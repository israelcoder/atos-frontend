import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { COOKIES_CONFIG } from './config/cookies';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(COOKIES_CONFIG.TOKEN_KEY)?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next({
    headers: {
      token,
    },
  });
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - signin (no authenticated routes)
   * - _next (static folder)
   */
  matcher:
    '/((?!signin|signup|api|static|monitoring|_next/static|_next/image|favicon.ico|manifest.json).*)/',
};
