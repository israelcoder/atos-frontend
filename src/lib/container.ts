import { createContainer } from '@/application/core/create-container';
import { GATEWAY_CONFIG } from '@/config/gateway';

export const container = createContainer({
  apiBaseURL: GATEWAY_CONFIG.API_BASE_URL,
});
