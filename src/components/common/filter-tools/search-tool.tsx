'use client';

import { Input, Props as InputProps } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useCallback, useMemo } from 'react';

type Props = Omit<InputProps, 'type'> & {
  debounceTime?: number;
  onSearch?(query: string): void;
  onPressEnter?(): void;
};
export function SearchTool({
  debounceTime = 500,
  className,
  onChange,
  onSearch,
  onPressEnter,
  ...props
}: Props) {
  const debouncedOnChange = useMemo(() => {
    let timeout: NodeJS.Timeout;

    return (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(event);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onSearch?.((event.target as HTMLInputElement).value.trim());
      }, debounceTime);
    };
  }, [debounceTime, onChange, onSearch]);

  const handleOnKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
      if (!onPressEnter || key !== 'Enter') return;
      event.preventDefault();
      onPressEnter();
    },
    [onPressEnter],
  );

  return (
    <Input
      inputMode='search'
      placeholder={'Buscar...'}
      className={cn('min-w-72 appearance-none', className)}
      {...props}
      onChange={debouncedOnChange}
      onKeyDown={handleOnKeyDown}
    />
  );
}
