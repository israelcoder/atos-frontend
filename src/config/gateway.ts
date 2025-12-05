import { z } from 'zod';

import { stringSchema } from '@/lib/validation-schemas';

const schema = z.object({
  API_BASE_URL: stringSchema.trim().url(),
});

export const GATEWAY_CONFIG = schema.parse({
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
