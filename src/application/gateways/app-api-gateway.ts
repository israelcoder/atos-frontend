import { HttpProvider } from '../providers/http-provider';
import { CookiesApiBody } from './types/app-api-types';

export class AppApiGateway {
  constructor(private readonly httpProvider: HttpProvider) {}

  public setCookies(body: { cookies: CookiesApiBody[] }) {
    return this.httpProvider.post(`/set-cookies`, body);
  }

  public deleteCookies(body: { cookies: string[] }) {
    return this.httpProvider.post(`/delete-cookies`, body);
  }
}
