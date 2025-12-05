import { cookies } from 'next/headers';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { SetContainerToken } from '@/components/layout/set-container-token';
import { COOKIES_CONFIG } from '@/config/cookies';

type Props = Readonly<{
  children?: React.ReactNode;
}>;
export default async function ApplicationLayout({ children }: Props) {
  const Cookies = await cookies();
  const token = Cookies.get(COOKIES_CONFIG.TOKEN_KEY)?.value;

  return (
    <>
      <SetContainerToken token={token} />
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
