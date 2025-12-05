'use client';

import { cn } from '@/lib/utils';

type Props = React.ComponentPropsWithoutRef<'fieldset'>;
export function Field({ className, ...props }: Props) {
  return (
    <fieldset className={cn(`flex flex-col gap-3`, className)} {...props} />
  );
}
