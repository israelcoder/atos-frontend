import { z } from 'zod';

import { stringSchema } from '@/lib/validation-schemas';

export const signupConfirmationSchema = z.object({
  confirmationCode: stringSchema
    .trim()
    .length(8, 'Código deve conter 8 caracteres'),
});

export type SignupConfirmationSchemaInput = z.input<
  typeof signupConfirmationSchema
>;
export type SignupConfirmationSchemaOutput = z.output<
  typeof signupConfirmationSchema
>;
