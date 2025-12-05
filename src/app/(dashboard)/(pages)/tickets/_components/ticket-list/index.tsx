'use client';

import { Table } from '@/components/common/table';
import { DateTimeZoned } from '@/helpers/date';
import { useStateRoute } from '@/hooks/use-state-route';
import { useTable } from '@/hooks/use-table';
import { container } from '@/lib/container';
import { ETicketFilterKeys } from '../ticket-tool-bar/filter-keys';
import { taskColumns } from './columns';

export function TicketList() {
  const stateRoute = useStateRoute();

  const filtersParams = {
    search: stateRoute.getParam(ETicketFilterKeys.search),
  };

  const table = useTable({
    tableKey: ['tasks', { ...filtersParams }],
    fetchFn: async tableFilters => {
      const { TicketGateway } = container;
      const tickets = await TicketGateway.listAll({
        ...tableFilters,
        ...filtersParams,
      });

      return {
        rows: tickets.map(ticket => ({
          ...ticket,
          formattedUpdatedAt: DateTimeZoned().toFormat(`dd/MM/yyyy 'às' H:mm`),
          formattedCreatedAt: DateTimeZoned().toFormat('dd/MM/yyyy'),
        })),
        // TODO: Refactor hook to new api
        meta: { page: 1, lastPage: 1 },
      };
    },
  });

  return (
    <Table
      className='max-h-[calc(100dvh-134px)]'
      columns={taskColumns}
      data={table.data}
      isLoading={table.isPending}
      hasMore={table.hasNextPage}
      loadMore={() => table.fetchNextPage()}
    />
  );
}
