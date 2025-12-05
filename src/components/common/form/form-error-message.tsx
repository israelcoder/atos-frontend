'use client';

import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';

function get(obj: Record<string, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj,
      );

  return travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
}

type Props = React.ComponentPropsWithoutRef<'span'> & {
  field: string;
};
export function FormErrorMessage({ className, field, ...props }: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = get(errors, field);

  if (!fieldError) return null;

  return (
    <span className={cn(`mt-1 text-xs text-rose-500`, className)} {...props}>
      {fieldError.message?.toString()}
    </span>
  );
}
