'use client';

import { LuEllipsisVertical, LuPen, LuTrash2 } from 'react-icons/lu';

import {
  TicketFromHttp,
  TicketStatusFromHttp,
} from '@/application/gateways/types/ticket-api-types';
import { ColumnDef } from '@/components/common/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export const StatusBadge = ({ status }: { status: TicketStatusFromHttp }) => {
  return (
    <Badge
      variant={'outline'}
      className={cn(
        `gap-1 capitalize`,
        status === 'aberto' && 'border-cyan-500 text-cyan-500',
        status === `em_andamento` && 'border-amber-500 text-amber-500',
        status === 'finalizado' && 'border-emerald-500 text-emerald-500',
      )}
    >
      {status}
    </Badge>
  );
};

type ColumnWithFormattedValues = TicketFromHttp & {
  formattedCreatedAt: string;
  formattedUpdatedAt: string;
};
export const taskColumns: ColumnDef<ColumnWithFormattedValues>[] = [
  {
    accessorKey: 'actions',
    header: '',
    cell: () => (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant={'ghost'} size={'icon'}>
            <LuEllipsisVertical />
            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content side='right'>
          <DropdownMenu.Item onClick={() => alert('Em desenvolvimento!')}>
            <LuPen />
            Editar
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item
            className='text-destructive'
            onClick={() => alert('Em desenvolvimento!')}
          >
            <LuTrash2 />
            Apagar
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    ),
  },
  {
    accessorKey: 'ticket',
    header: 'Código',
    cell: ({ value }) => <span>{value}</span>,
  },
  {
    accessorKey: 'title',
    header: 'Título',
    cell: ({ value, row }) => (
      <div>
        <p className='capitalize'>{value}</p>
        <time className='text-xs text-muted-foreground'>
          Criado em: {row.formattedCreatedAt}
        </time>
      </div>
    ),
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
    cell: ({ value }) => (
      <span className='block max-w-[200px] truncate'>{value}</span>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ value }) => <StatusBadge status={value} />,
  },
  {
    accessorKey: 'formattedUpdatedAt',
    header: 'Dt. Atualização',
    cell: ({ value }) => <time>{value}</time>,
  },
  {
    accessorKey: 'formattedCreatedAt',
    header: 'Dt. Criação',
    cell: ({ value }) => <time>{value}</time>,
  },
] as const;
