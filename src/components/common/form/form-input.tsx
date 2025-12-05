import { Props as BaseInputProps, Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons/lib';
import { RiSearch2Line } from 'react-icons/ri';
import { useHookFormMask, withMask } from 'use-mask-input';

type InputProps = BaseInputProps & {
  name: string;
  mask?: string | string[];
  icon?: IconType;
  autoUnmask?: boolean;
};

function InputWithForm({
  icon: Icon,
  autoUnmask = true,
  inputMode = 'text',
  mask,
  className,
  ...props
}: InputProps) {
  const { register, getFieldState } = useFormContext();
  const registerWithMask = useHookFormMask(register);

  const maskOptions = {
    showMaskOnHover: false,
    autoUnmask,
  };
  const normalizeRegister = mask
    ? registerWithMask(props.name, mask, maskOptions)
    : register(props.name);

  return (
    <div className='relative'>
      {Icon && (
        <Icon className='absolute left-2 top-1/2 size-4 -translate-y-1/2' />
      )}
      {inputMode == 'search' && (
        <RiSearch2Line className='absolute left-2 top-1/2 size-4 -translate-y-1/2' />
      )}
      <Input
        id={props.name}
        {...normalizeRegister}
        {...props}
        aria-invalid={getFieldState(props.name).invalid}
        className={cn(className, (!!Icon || inputMode === 'search') && `pl-8`)}
      />
    </div>
  );
}

function InputWithoutForm({
  icon: Icon,
  inputMode = 'text',
  mask = '',
  ...props
}: InputProps) {
  const ref = withMask(mask, { showMaskOnHover: false });

  // eslint-disable-next-line
  // @ts-ignore
  return (
    <div className='relative'>
      {Icon && (
        <Icon className='absolute left-3 top-1/2 size-4 -translate-y-1/2' />
      )}
      {inputMode == 'search' && (
        <RiSearch2Line className='absolute left-3 top-1/2 size-4 -translate-y-1/2' />
      )}
      <Input ref={ref} id={props.name} {...props} />;
    </div>
  );
}

type SelectorProps = InputProps & {
  withForm?: boolean;
};
export function FormInput({ withForm = true, ...props }: SelectorProps) {
  return withForm ? (
    <InputWithForm {...props} />
  ) : (
    <InputWithoutForm {...props} />
  );
}
