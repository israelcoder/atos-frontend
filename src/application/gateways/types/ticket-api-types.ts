export type TicketStatusFromHttp = 'aberto' | 'em_andamento' | 'finalizado';

export type TicketFromHttp = {
  tenantId: string;
  id: string;
  userId: string;
  ticket: string;
  title: string;
  description: string;
  status: TicketStatusFromHttp;
  createdAt: string;
  updatedAt: string;
};

export type ListAllTicketFromHttp = TicketFromHttp[];
