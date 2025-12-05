import { forwardRef, useRef } from 'react';
import OTPInput, { OTPInputProps } from 'react-otp-input';

export const OtpInputComponent = forwardRef(
  (props: Omit<OTPInputProps, 'renderInput'>, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const first = useRef(ref);

    return (
      <OTPInput
        {...props}
        renderInput={(props, index) => (
          <input
            {...props}
            data-index={index}
            className='form-control m-2 min-h-16 min-w-14 rounded-lg border bg-background text-center outline-black focus:ring-2 focus:ring-primary/10 focus:ring-offset-2'
          />
        )}
      />
    );
  },
);
OtpInputComponent.displayName = 'OtpInputComponent';
