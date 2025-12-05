'use client';

import { Props as BaseInputProps, Input } from '@/components/ui/input';
import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

type InputProps = BaseInputProps &
  NumericFormatProps & {
    name: string;
  };

const InputWithForm = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { register, getFieldState, setValue } = useFormContext();

  return (
    <NumericFormat
      {...register(props.name)}
      {...props}
      getInputRef={ref}
      customInput={Input}
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      prefix='R$ '
      onValueChange={values => {
        const { floatValue } = values;
        setValue(props.name, floatValue || 0);
      }}
      aria-invalid={getFieldState(props.name).invalid}
    />
  );
});
InputWithForm.displayName = 'InputMoneyWithForm';

function InputWithoutForm(props: InputProps) {
  return (
    <NumericFormat
      {...props}
      customInput={Input}
      thousandSeparator='.'
      decimalSeparator=','
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      prefix='R$ '
    />
  );
}

type SelectorProps = InputProps & {
  withForm?: boolean;
};

export function FormInputMoney({ withForm = true, ...props }: SelectorProps) {
  return withForm ? (
    <InputWithForm {...props} inputMode='decimal' />
  ) : (
    <InputWithoutForm {...props} inputMode='decimal' />
  );
}
