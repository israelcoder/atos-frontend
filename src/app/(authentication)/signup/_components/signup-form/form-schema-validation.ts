import { z } from 'zod';

import { stringSchema } from '@/lib/validation-schemas';

export const signupSchema = z
  .object({
    name: stringSchema
      .trim()
      .min(2, 'Mínimo de 2 caracteres')
      .max(50, 'Máximo de 50 caracteres'),
    email: stringSchema.trim().email({ message: 'E-mail inválido' }),
    password: stringSchema
      .min(6, 'Mínimo de 6 caracteres')
      .max(20, 'Máximo de 20 caracteres'),
    passwordConfirmation: stringSchema
      .min(6, 'Mínimo de 6 caracteres')
      .max(20, 'Máximo de 20 caracteres'),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'As senhas não coincidem',
    path: ['passwordConfirmation'],
  })
  .transform(data => ({
    name: data.name,
    email: data.email,
    password: data.password,
    role: 'usuario',
    tenantId: 'default',
  }));

export type SignupSchemaInput = z.input<typeof signupSchema>;
export type SignupSchemaOutput = z.output<typeof signupSchema>;
