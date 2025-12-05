import { AppApiGateway } from '../gateways/app-api-gateway';
import { AuthGateway } from '../gateways/auth-gateway';
import { TicketGateway } from '../gateways/ticket-gateway';
import { HttpProvider } from '../providers/http-provider';

type Options = {
  apiBaseURL: string;
};
export function createContainer(options: Options) {
  const proxyHttpProvider = new HttpProvider('/api');
  const apiHttpProvider = new HttpProvider(options.apiBaseURL);

  return {
    // Providers
    ApiHttpProvider: apiHttpProvider,

    // Gateways
    AppApiGateway: new AppApiGateway(proxyHttpProvider),
    AuthGateway: new AuthGateway(apiHttpProvider),
    TicketGateway: new TicketGateway(apiHttpProvider),
  };
}
