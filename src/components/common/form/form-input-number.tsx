'use client';

import { inputClasses } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { Input } from 'react-aria-components';
import { useFormContext } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';

type Props = React.ComponentProps<typeof Input> & {
  name: string;
  min?: number;
  max?: number;
};
export default function FormInputNumber({
  min = 0,
  max = 100,
  className,
  ...props
}: Props) {
  const { register, getFieldState, getValues, setValue } = useFormContext();
  const registerWithMask = useHookFormMask(register);

  const handleDecrement = () => {
    const currentValue = getValues(props.name);
    const newValue = Math.max(min, parseInt(currentValue) - 1);
    setValue(props.name, newValue.toString());
  };

  const handleIncrement = () => {
    const currentValue = getValues(props.name);
    const newValue = Math.min(max, parseInt(currentValue) + 1);
    setValue(props.name, newValue.toString());
  };

  return (
    <fieldset className={cn(inputClasses, `overflow-hidden p-0`, className)}>
      <button
        type='button'
        className='flex aspect-square h-8 min-w-8 items-center justify-center rounded-s-lg border-r border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
        onClick={() => handleDecrement()}
      >
        <MinusIcon size={16} strokeWidth={3} aria-hidden='true' />
      </button>
      <Input
        inputMode='numeric'
        className='w-full min-w-12 grow bg-transparent text-center focus:outline-none'
        aria-invalid={getFieldState(props.name).invalid}
        {...props}
        {...registerWithMask(props.name, '999', {
          showMaskOnHover: false,
          autoUnmask: true,
          placeholder: '',
        })}
      />
      <button
        type='button'
        className='flex aspect-square h-8 min-w-8 items-center justify-center rounded-e-lg border-l border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
        onClick={() => handleIncrement()}
      >
        <PlusIcon size={16} strokeWidth={3} aria-hidden='true' />
      </button>
    </fieldset>
  );
}
