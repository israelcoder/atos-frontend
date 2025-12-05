import { CookiesApiBody } from '@/application/gateways/types/app-api-types';
import { NextRequest, NextResponse } from 'next/server';

export type SetCookiesAPIBody = {
  cookies: CookiesApiBody[];
};
export async function POST(request: NextRequest) {
  const { cookies } = (await request.json()) as SetCookiesAPIBody;

  const response = new NextResponse();

  for (const cookie of cookies) {
    response.cookies.set(cookie.key, cookie.value, {
      path: cookie.path,
      expires: !!cookie?.expires ? new Date(cookie.expires) : undefined,
      httpOnly: cookie.httpOnly,
      secure: cookie.secure,
    });
  }

  return response;
}
