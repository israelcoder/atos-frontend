import { LuTrendingDown, LuTrendingUp } from 'react-icons/lu';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function SectionCards() {
  return (
    <div className='*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6'>
      <Card.Root className='@container/card'>
        <Card.Header className='@container/card-header'>
          <Card.Description>Total Revenue</Card.Description>
          <Card.Title className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
            $1,250.00
          </Card.Title>
          <div
            data-slot='card-action'
            className='col-start-2 row-span-2 row-start-1 self-start justify-self-end'
          >
            <Badge variant='outline'>
              <LuTrendingUp />
              +12.5%
            </Badge>
          </div>
        </Card.Header>
        <Card.Footer className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Trending up this month <LuTrendingDown className='size-4' />
          </div>
          <div className='text-muted-foreground'>
            Visitors for the last 6 months
          </div>
        </Card.Footer>
      </Card.Root>
      <Card.Root className='@container/card'>
        <Card.Header>
          <Card.Description>Total Revenue</Card.Description>
          <Card.Title className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
            $1,250.00
          </Card.Title>
          <div
            data-slot='card-action'
            className='col-start-2 row-span-2 row-start-1 self-start justify-self-end'
          >
            <Badge variant='outline'>
              <LuTrendingUp />
              +12.5%
            </Badge>
          </div>
        </Card.Header>
        <Card.Footer className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Trending up this month <LuTrendingDown className='size-4' />
          </div>
          <div className='text-muted-foreground'>
            Visitors for the last 6 months
          </div>
        </Card.Footer>
      </Card.Root>
      <Card.Root className='@container/card'>
        <Card.Header>
          <Card.Description>Total Revenue</Card.Description>
          <Card.Title className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
            $1,250.00
          </Card.Title>
          <div
            data-slot='card-action'
            className='col-start-2 row-span-2 row-start-1 self-start justify-self-end'
          >
            <Badge variant='outline'>
              <LuTrendingUp />
              +12.5%
            </Badge>
          </div>
        </Card.Header>
        <Card.Footer className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Trending up this month <LuTrendingDown className='size-4' />
          </div>
          <div className='text-muted-foreground'>
            Visitors for the last 6 months
          </div>
        </Card.Footer>
      </Card.Root>
      <Card.Root className='@container/card'>
        <Card.Header>
          <Card.Description>Total Revenue</Card.Description>
          <Card.Title className='@[250px]/card:text-3xl text-2xl font-semibold tabular-nums'>
            $1,250.00
          </Card.Title>
          <div
            data-slot='card-action'
            className='col-start-2 row-span-2 row-start-1 self-start justify-self-end'
          >
            <Badge variant='outline'>
              <LuTrendingUp />
              +12.5%
            </Badge>
          </div>
        </Card.Header>
        <Card.Footer className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Trending up this month <LuTrendingDown className='size-4' />
          </div>
          <div className='text-muted-foreground'>
            Visitors for the last 6 months
          </div>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
