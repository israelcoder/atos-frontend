import { FilterContainer } from '@/temp/filter-container';
import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

type ListResponse<T> = {
  rows: T[];
  meta: {
    page: number;
    lastPage: number;
  };
};
type Fetcher<T> = (filters?: any) => Promise<ListResponse<T>> | ListResponse<T>;
type Page<T> = {
  data: T[];
  currentCursor: number;
  previousCursor: number;
  nextCursor: number;
};

type Options<TData> = {
  tableKey: QueryKey;
  fetchFn: Fetcher<TData>;
};
export function useTable<TData = unknown>({
  tableKey,
  fetchFn,
}: Options<TData>) {
  const filterContainer = useMemo(() => new FilterContainer(), []);

  const fetchData = async ({ pageParam = 1 }: { pageParam?: unknown }) => {
    const { rows, meta } = await fetchFn({
      ...filterContainer.serialized,
      page: pageParam,
    });

    const previousCursor = meta.page - 1;
    const nextCursor = Math.min(meta.lastPage, meta.page + 1);

    return {
      data: rows,
      currentCursor: meta.page,
      previousCursor,
      nextCursor,
    };
  };

  const {
    data,
    error,
    isPending,
    isFetching,
    refetch,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<Page<TData>, Error>({
    queryKey: tableKey,
    queryFn: fetchData,
    initialPageParam: 1,
    /**
     * lastPage Stop fetching when we return undefined
     */
    getNextPageParam: (lastPage: Page<TData>) => {
      if (lastPage.currentCursor === lastPage.nextCursor) return undefined;
      return lastPage.nextCursor;
    },
    getPreviousPageParam: (firstPage: Page<TData>) => {
      return firstPage.previousCursor === 0
        ? undefined
        : firstPage.previousCursor;
    },
  });

  const normalizedData = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap(page => page.data);
  }, [data?.pages]);

  return {
    data: normalizedData,
    isEmpty: normalizedData.length === 0,
    error,
    isPending: isPending || isFetching,
    refetch,
    hasNextPage,
    fetchNextPage,
  };
}
