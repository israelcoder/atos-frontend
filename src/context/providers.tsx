import { Toaster } from '@/components/ui/sonner';
import { QueryProvider } from './react-query';
import { ThemeProvider } from './theme-provider';

type Props = {
  children: React.ReactNode;
};
export function Providers({ children }: Props) {
  return (
    <>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
      <Toaster position='top-right' />
    </>
  );
}
