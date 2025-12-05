import localFont from 'next/font/local';

export const Poppins = localFont({
  display: 'swap',
  variable: '--font-poppins',
  src: [
    {
      path: './Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Poppins-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});
