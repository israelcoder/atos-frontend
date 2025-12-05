'use client';

import {
  OTPInput,
  OTPInputContext,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from 'input-otp';
import { forwardRef, useContext } from 'react';
import { LuMinus } from 'react-icons/lu';

import { cn } from '@/lib/utils';

const InputOTPRoot = forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName,
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
    {...props}
  />
));
InputOTPRoot.displayName = 'InputOTPRoot';

const InputOTPGroup = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex size-10 items-center justify-center border-y border-r border-input text-xl capitalize shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
        isActive && 'z-10 ring-1 ring-ring',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
          <div className='animate-caret-blink h-4 w-px bg-foreground duration-1000' />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role='separator' {...props}>
    <LuMinus />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export const InputOTP = {
  Root: InputOTPRoot,
  Group: InputOTPGroup,
  Separator: InputOTPSeparator,
  Slot: InputOTPSlot,
};
