import { z } from 'zod';

const schema = z
  .object({
    environment: z.enum(['development', 'production']).default('development'),
  })
  .transform(config => ({
    ...config,
    isDevelopment: config.environment === 'development',
    isProduction: config.environment === 'production',
  }));

export const APP_CONFIG = schema.parse({
  environment: process.env.NODE_ENV,
});
