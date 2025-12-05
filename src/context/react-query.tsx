'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRef } from 'react';
import { toast } from 'sonner';

type Props = Readonly<{
  children: React.ReactNode;
}>;
export function QueryProvider({ children }: Props) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
        mutations: {
          retry: false,
          // All mutations will use this if not specified
          onError: error => {
            toast.error(error.message);
          },
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
