'use client';

import Link from 'next/link';
import { HiMiniLockClosed, HiOutlineEnvelope } from 'react-icons/hi2';

import { Form } from '@/components/common/form';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';
import { signinSchema } from './form-schema-validation';

type SignInContentProps = React.ComponentProps<'section'>;
export default function SignInContent({
  className,
  ...props
}: SignInContentProps) {
  const { signin } = useAuth();

  const form = Form.useForm({
    resolver: Form.zodResolver(signinSchema),
  });

  return (
    <section className={cn('flex flex-col gap-6', className)} {...props}>
      <Card.Root>
        <Card.Header>
          <Card.Title>Entrar na sua conta</Card.Title>
          <Card.Description>
            Insira seu e-mail abaixo para continuar
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <form
            className='flex flex-col gap-6'
            onSubmit={form.handleSubmit(signin as never)}
          >
            <Form.Provider {...form}>
              <Form.Field>
                <Form.Label htmlFor='email'>E-Mail</Form.Label>
                <Form.Input
                  icon={HiOutlineEnvelope}
                  type='email'
                  inputMode='email'
                  name='email'
                  placeholder='mail@example.com'
                  autoFocus
                />
                <Form.ErrorMessage field='email' />
              </Form.Field>
              <Form.Field>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Input
                  name='password'
                  type='password'
                  icon={HiMiniLockClosed}
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <Form.ErrorMessage field='password' />
              </Form.Field>
            </Form.Provider>

            <footer className='mt-4 flex flex-col flex-wrap gap-2'>
              <Form.Button isLoading={form.formState.isSubmitting}>
                Entrar
              </Form.Button>

              <p className='mt-4 text-center text-sm text-muted-foreground'>
                Ainda não tem uma conta?{' '}
                <Link
                  href='/signup'
                  className='text-primary underline underline-offset-4'
                >
                  Cadastre-se
                </Link>
              </p>
            </footer>
          </form>
        </Card.Content>
      </Card.Root>
    </section>
  );
}
