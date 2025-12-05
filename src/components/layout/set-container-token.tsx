'use client';

import { container } from '@/lib/container';

type Props = {
  token?: string;
};
export function SetContainerToken({ token }: Props) {
  if (!!token) container.ApiHttpProvider.setToken(token);

  return null;
}
