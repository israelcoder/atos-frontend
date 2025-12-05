import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { SigninFormOutput } from '@/app/(authentication)/signin/form-schema-validation';
import { SignupSchemaOutput } from '@/app/(authentication)/signup/_components/signup-form/form-schema-validation';
import { COOKIES_CONFIG } from '@/config/cookies';
import { container } from '@/lib/container';

export function useAuth() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    data: tokenSignup,
    mutateAsync: signup,
    status: statusSignup,
  } = useMutation({
    mutationFn: async (body: SignupSchemaOutput) => {
      const { AuthGateway } = container;
      return AuthGateway.signup({ ...body });
    },
  });

  const { mutateAsync: signupConfirmation, status: statusSignupConfirmation } =
    useMutation({
      mutationFn: async (body: any) => {
        const { AuthGateway } = container;
        return AuthGateway.sendEmailConfirmationCode({ ...body });
      },
    });

  const {
    data: token,
    mutateAsync: signin,
    status: statusSign,
  } = useMutation({
    mutationFn: async (body: SigninFormOutput) => {
      const { AuthGateway } = container;
      const { token } = await AuthGateway.signin({ ...body });

      const { AppApiGateway, ApiHttpProvider } = container;
      ApiHttpProvider.setToken(token);
      await AppApiGateway.setCookies({
        cookies: [
          {
            key: COOKIES_CONFIG.TOKEN_KEY,
            value: token,
            path: '/',
            secure: true,
            expires: new Date(new Date().getTime() + 60 * 60 * 1000).toString(), // 1 hour
          },
        ],
      });

      return token;
    },
    onSuccess: () => router.push('/dashboard'),
    onSettled: () => queryClient.refetchQueries({ queryKey: ['me'] }),
  });

  const { data, status } = useQuery({
    enabled: !!token || !!tokenSignup || container.ApiHttpProvider.hasToken(),
    queryKey: ['me'],
    staleTime: 1000 * 60 * 3, // 3 minutes
    queryFn: async () => {
      return new Promise<{
        id: number;
        name: string;
        email: string;
        avatar: string;
      }>(resolve =>
        setTimeout(
          () =>
            resolve({
              id: 1,
              name: 'John Doe',
              email: 'john.doe@motion.com',
              avatar: 'https://ui.shadcn.com/avatars/shadcn.jpg',
            }),
          1500,
        ),
      );
    },
  });

  const signout = useCallback(() => {
    container.AppApiGateway.deleteCookies({
      cookies: [COOKIES_CONFIG.TOKEN_KEY],
    });
    container.ApiHttpProvider.setToken(null);
    queryClient.removeQueries();
    router.push('/signin');
  }, [queryClient, router]);

  const isLoading =
    status === 'pending' ||
    statusSign === 'pending' ||
    statusSignup === 'pending' ||
    statusSignupConfirmation;

  return {
    user: data,
    status,
    isLoading,
    isAuthenticated: status === 'success',
    signin,
    signout,
    signup,
    signupConfirmation,
  };
}
