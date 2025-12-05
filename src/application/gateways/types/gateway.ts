import { HttpProvider } from '@/application/providers/http-provider';

export abstract class Gateway {
  constructor(protected readonly httpProvider: HttpProvider) {}
}
