'use client';

import { fakerPT_BR } from '@faker-js/faker';

import StatusSelect from '@/components/common/status-select';
import UserSelect from '@/components/common/user-select';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const mockTickets = Array.from({ length: 5 }).map(() => ({
  tenantId: fakerPT_BR.lorem.slug(),
  id: fakerPT_BR.string.uuid(),
  userId: fakerPT_BR.string.uuid(),
  ticket: fakerPT_BR.string.alphanumeric(6),
  title: fakerPT_BR.book.title(),
  description: fakerPT_BR.lorem.sentence(),
  status: fakerPT_BR.helpers.enumValue({
    aberto: 'aberto',
    em_andamento: 'em_andamento',
    finalizado: 'finalizado',
  }),
  updatedAt: fakerPT_BR.date.recent(),
  createdAt: fakerPT_BR.date.past(),
}));

type Props = React.ComponentProps<'div'>;
export function TicketCardList({ className, ...props }: Props) {
  return (
    <div className={cn(`grid grid-cols-1 gap-3`, className)} {...props}>
      {mockTickets.map(ticket => (
        <Card.Root
          key={`ticket-${ticket.id}`}
          className='flex flex-col md:flex-row md:items-center'
        >
          <p className='ml-6 text-sm font-medium text-muted-foreground'>
            {ticket.ticket}
          </p>

          <Card.Header className='max-w-[320px]'>
            <Card.Title className='font-medium'>{ticket.title}</Card.Title>
            <Card.Description className='truncate'>
              {ticket.description}
            </Card.Description>
          </Card.Header>

          <Card.Content>
            <StatusSelect />
            <UserSelect />
          </Card.Content>
        </Card.Root>
      ))}
    </div>
  );
}
