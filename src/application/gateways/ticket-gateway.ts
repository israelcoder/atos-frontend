import { Gateway } from './types/gateway';
import { ListAllTicketFromHttp } from './types/ticket-api-types';

export class TicketGateway extends Gateway {
  public listAll(input: any) {
    return this.httpProvider.get<ListAllTicketFromHttp>('/tickets', {
      params: input,
    });
  }
}
