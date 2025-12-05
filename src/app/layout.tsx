import { Poppins } from '@/assets/poppins';
import { Providers } from '@/context/providers';
import '@/styles/globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata = {
  title: {
    default: `Atos Tasks`,
    template: `%s - Atos Tasks`,
  },
  description: `Atos Tasks`,
};

type Props = Readonly<{
  children: React.ReactNode;
}>;
export default function RootLayout({ children }: Props) {
  return (
    /**
     * Add suppressHydrationWarning because the 'theme-provider'
     */
    <html translate='no' suppressHydrationWarning>
      <body className={Poppins.className}>
        <Providers>{children}</Providers>
        <div id='portal-container' />
      </body>
    </html>
  );
}
