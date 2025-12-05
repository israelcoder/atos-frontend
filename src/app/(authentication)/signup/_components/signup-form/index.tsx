'use client';

import { LuLock, LuLockKeyhole, LuMail } from 'react-icons/lu';

import { Form } from '@/components/common/form';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { signupSchema, SignupSchemaOutput } from './form-schema-validation';

type Props = Omit<React.ComponentProps<'form'>, 'children' | 'onSubmit'> & {
  handlerOnSubmit(formData: SignupSchemaOutput): MaybePromise<void>;
};
export function SignupForm({ handlerOnSubmit, className, ...props }: Props) {
  const form = Form.useForm<SignupSchemaOutput>({
    resolver: Form.zodResolver(signupSchema),
  });

  return (
    <form
      className={cn(`flex flex-col gap-4`, className)}
      {...props}
      onSubmit={form.handleSubmit(handlerOnSubmit)}
    >
      <Form.Provider {...form}>
        <Form.Field>
          <Form.Label htmlFor='name'>Nome completo</Form.Label>
          <Form.Input
            type='text'
            name='name'
            placeholder='Nome completo'
            autoFocus
          />
          <Form.ErrorMessage field='name' />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor='email'>E-Mail</Form.Label>
          <Form.Input
            icon={LuMail}
            type='email'
            inputMode='email'
            name='email'
            placeholder='mail@example.com'
            autoFocus
          />
          <Form.ErrorMessage field='email' />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor='password'>Senha</Form.Label>
          <Form.Input
            name='password'
            type='password'
            icon={LuLock}
            placeholder='Senha'
            autoComplete='current-password'
          />
          <Form.ErrorMessage field='password' />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor='passwordConfirmation'>
            Confirmação de Senha
          </Form.Label>
          <Form.Input
            name='passwordConfirmation'
            type='password'
            icon={LuLockKeyhole}
            placeholder='Confirme sua senha'
          />
          <Form.ErrorMessage field='passwordConfirmation' />
        </Form.Field>
      </Form.Provider>

      <footer className='flex flex-col flex-wrap gap-2'>
        <Form.Button isLoading={form.formState.isSubmitting}>
          Cadastrar
        </Form.Button>

        <p className='mt-4 text-center text-sm text-muted-foreground'>
          Já tem uma conta?{' '}
          <Link
            href='/signin'
            className='text-primary underline underline-offset-4'
          >
            Faça login
          </Link>
        </p>
      </footer>
    </form>
  );
}
