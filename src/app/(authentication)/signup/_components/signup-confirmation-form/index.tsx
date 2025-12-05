'use client';

import { Form } from '@/components/common/form';
import { InputOTP } from '@/components/ui/input-otp';
import { cn } from '@/lib/utils';
import {
  signupConfirmationSchema,
  SignupConfirmationSchemaOutput,
} from './form-schema-validation';

type Props = Omit<React.ComponentProps<'form'>, 'children' | 'onSubmit'> & {
  handlerOnSubmit(formData: SignupConfirmationSchemaOutput): MaybePromise<void>;
};
export function SignupConfirmationForm({
  handlerOnSubmit,
  className,
  ...props
}: Props) {
  const form = Form.useForm<SignupConfirmationSchemaOutput>({
    resolver: Form.zodResolver(signupConfirmationSchema),
  });

  return (
    <form
      className={cn(`flex flex-col gap-4`, className)}
      {...props}
      onSubmit={form.handleSubmit(handlerOnSubmit)}
    >
      <Form.Provider {...form}>
        <Form.Field className='items-center'>
          <InputOTP.Root
            maxLength={8}
            onChange={code => form.setValue('confirmationCode', code)}
          >
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
              <InputOTP.Slot index={6} />
              <InputOTP.Slot index={7} />
            </InputOTP.Group>
          </InputOTP.Root>
          <Form.ErrorMessage field='confirmationCode' />
        </Form.Field>
      </Form.Provider>

      <footer className='flex flex-col flex-wrap gap-2'>
        <Form.Button isLoading={form.formState.isSubmitting}>
          Confirmar
        </Form.Button>
      </footer>
    </form>
  );
}
