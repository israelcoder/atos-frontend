'use client';

import { useIsFetching } from '@tanstack/react-query';
import { LuX } from 'react-icons/lu';

import { SearchTool } from '@/components/common/filter-tools/search-tool';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DateTimeZoned } from '@/helpers/date';
import { useStateRoute } from '@/hooks/use-state-route';
import { cn } from '@/lib/utils';
import { ETicketFilterKeys } from './filter-keys';

export const defaultDates = {
  from: DateTimeZoned().minus({ days: 15 }).toFormat('yyyy-MM-dd'),
  to: DateTimeZoned().toFormat('yyyy-MM-dd'),
};

type Props = React.ComponentProps<'header'>;
export function TicketToolBar({ className, ...props }: Props) {
  const stateRoute = useStateRoute();

  const isFetchingTickets = useIsFetching({
    queryKey: ['tickets'],
  });

  return (
    <header className={cn(`flex items-center gap-2`, className)} {...props}>
      <SearchTool
        inputMode='search'
        placeholder='Pesquisar'
        className='max-w-sm'
        defaultValue={stateRoute.getParam(ETicketFilterKeys.search, '')}
        onSearch={value => {
          stateRoute.setParams({ [ETicketFilterKeys.search]: value }, true);
        }}
      />

      {stateRoute.isDirty && (
        <Button
          type='button'
          title='Limpar filtros'
          variant={'ghost'}
          className='gap-1.5 border border-dashed [&_svg]:size-4'
          disabled={!!isFetchingTickets}
          onClick={() => stateRoute.resetParams()}
        >
          <LuX />
        </Button>
      )}

      <Separator orientation='vertical' className='my-auto ml-auto h-6' />
      <Button
        type='button'
        variant={'outline'}
        disabled={!!isFetchingTickets}
        onClick={() => stateRoute.applyRoute()}
      >
        Aplicar
      </Button>
    </header>
  );
}
