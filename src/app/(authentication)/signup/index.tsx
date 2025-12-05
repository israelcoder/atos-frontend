'use client';

import { useState } from 'react';

import { Card } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { SignupConfirmationForm } from './_components/signup-confirmation-form';
import { SignupConfirmationSchemaOutput } from './_components/signup-confirmation-form/form-schema-validation';
import { SignupForm } from './_components/signup-form';
import { SignupSchemaOutput } from './_components/signup-form/form-schema-validation';

type SignInContentProps = React.ComponentProps<'section'>;
export default function SignupContent({
  className,
  ...props
}: SignInContentProps) {
  const router = useRouter();
  const { signup, signupConfirmation } = useAuth();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleOnSubmitStepOne = async (formData: SignupSchemaOutput) => {
    await signup(formData);

    setEmail(formData.email);
    setStep(2);
  };

  const handleOnSubmitStepTwo = async (
    formData: SignupConfirmationSchemaOutput,
  ) => {
    await signupConfirmation({ email, ...formData });

    toast.success('Cadastro realizado com sucesso! Faça login.');
    router.push('/signin');
  };

  return (
    <section className={cn('flex flex-col gap-6', className)} {...props}>
      <Card.Root>
        <Card.Header>
          <Card.Title>
            {step === 1 && 'Cadastre-se'}
            {step === 2 && 'Código de confirmação'}
          </Card.Title>
          <Card.Description>
            {step === 1 && 'Preencha os campos para criar uma conta.'}
            {step === 2 &&
              `Insira o código que enviamos para o e-mail: ${email}.`}
          </Card.Description>
        </Card.Header>
        <Card.Content>
          {step === 1 && <SignupForm handlerOnSubmit={handleOnSubmitStepOne} />}
          {step === 2 && (
            <SignupConfirmationForm handlerOnSubmit={handleOnSubmitStepTwo} />
          )}
        </Card.Content>
      </Card.Root>
    </section>
  );
}
