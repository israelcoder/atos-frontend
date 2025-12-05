import { NextRequest, NextResponse } from 'next/server';

export type SetCookiesAPIBody = {
  cookies: string[];
};
export async function POST(request: NextRequest) {
  const { cookies } = (await request.json()) as SetCookiesAPIBody;

  const response = new NextResponse();

  for (const cookie of cookies) response.cookies.delete(cookie);

  return response;
}
