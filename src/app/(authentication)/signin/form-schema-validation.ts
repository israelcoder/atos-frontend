import { z } from 'zod';

import { stringSchema } from '@/lib/validation-schemas';

export const signinSchema = z.object({
  email: stringSchema.trim().email({ message: 'E-mail inválido' }),
  password: stringSchema
    .min(6, 'Mínimo de 6 caracteres')
    .max(20, 'Máximo de 20 caracteres'),
});

export type SigninFormInput = z.input<typeof signinSchema>;
export type SigninFormOutput = z.output<typeof signinSchema>;
