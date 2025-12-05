'use client';

import InfiniteScroll from '@/components/ui/infinite-scroll';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type DefaultColumnDef<T> = {
  [K in keyof T]: {
    accessorKey: K;
    header: string | ((props: { column: ColumnDef<T> }) => React.ReactNode);
    cell: (props: { row: T; value: T[K] }) => React.ReactNode;
  };
}[keyof T];
type ActionColumnDef<T> = {
  accessorKey: 'actions';
  header: string | ((props: { column: ColumnDef<T> }) => React.ReactNode);
  cell: (props: { row: T }) => React.ReactNode;
};
export type ColumnDef<T> = DefaultColumnDef<T> | ActionColumnDef<T>;

type Props<T> = {
  columns: ColumnDef<T>[];
  data: T[];
  className?: string;
  isLoading?: boolean;
  hasMore?: boolean;
  loadMore?: () => void;
};
export function Table<T>({
  data,
  columns,
  hasMore = false,
  isLoading = false,
  loadMore,
  className,
}: Props<T>) {
  return (
    <TableWrapper className={className}>
      <table className='size-full caption-bottom border-collapse text-sm'>
        <thead className='sticky top-0 z-10 bg-muted'>
          <tr className='border-b drop-shadow-sm'>
            {columns.map((column, index) => (
              <Header
                key={`th-${String(column.accessorKey)}`}
                column={column}
                className={cn(
                  index === 0 && `rounded-tl-lg`,
                  index === columns.length - 1 && `rounded-tr-lg`,
                )}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={`row-${rowIndex}`}
              className='z-10 border-b drop-shadow-sm hover:bg-muted/50 [&_tr]:border-b'
            >
              {columns.map((column, columnIndex) => (
                <Cell
                  key={`cell-${rowIndex}-${columnIndex}`}
                  column={column}
                  row={row}
                  className={cn(
                    columnIndex === 0 && `rounded-bl-lg`,
                    columnIndex === columns.length - 1 && `rounded-br-lg`,
                  )}
                />
              ))}
            </tr>
          ))}
          {loadMore && (
            <InfiniteScroll
              hasMore={hasMore}
              isLoading={isLoading}
              next={() => loadMore()}
            >
              {!isLoading && hasMore && (
                <tr>
                  <td colSpan={columns.length} className='text-center'>
                    <Skeleton className='h-10' />
                  </td>
                </tr>
              )}
            </InfiniteScroll>
          )}
        </tbody>
      </table>
    </TableWrapper>
  );
}

type WrapperProps = React.ComponentProps<'div'>;
function TableWrapper({ children, className, ...props }: WrapperProps) {
  return (
    <div
      className={cn(`overflow-auto rounded-lg border`, className)}
      {...props}
    >
      {children}
    </div>
  );
}

type HeaderProps<T> = React.ComponentProps<'th'> & {
  column: ColumnDef<T>;
};
export function Header<T>({ column, className, ...props }: HeaderProps<T>) {
  return (
    <th
      className={cn(
        `h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,
        className,
      )}
      {...props}
    >
      {typeof column.header === 'string'
        ? column.header
        : column.header({ column })}
    </th>
  );
}

function checkIsActionColumn<T>(
  column: ColumnDef<T>,
): column is ActionColumnDef<T> {
  return column.accessorKey === 'actions';
}
type CellProps<T> = React.ComponentProps<'th'> & {
  column: ColumnDef<T>;
  row: T;
};
export function Cell<T>({ column, row, className, ...props }: CellProps<T>) {
  const render = checkIsActionColumn(column)
    ? column.cell({ row })
    : column.cell({ row, value: row[column.accessorKey] });

  return (
    <td
      className={cn(
        `h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground`,
        className,
      )}
      {...props}
    >
      {render}
    </td>
  );
}
