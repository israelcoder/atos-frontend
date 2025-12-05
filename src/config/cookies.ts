import { z } from 'zod';

import { stringSchema } from '@/lib/validation-schemas';

const schema = z.object({
  TOKEN_KEY: stringSchema.trim(),
});

const prefix = 'atos-app';
export const COOKIES_CONFIG = schema.parse({
  TOKEN_KEY: `${prefix}@token`,
});
