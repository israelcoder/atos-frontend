import { VscLoading } from 'react-icons/vsc';

import { Button, Props as ButtonProps } from '@/components/ui/button';

type Props = ButtonProps & {
  isLoading?: boolean;
  icon?: React.ReactNode;
};
export function FormButton({
  type = 'submit',
  children,
  disabled,
  icon,
  isLoading: loading = false,
  ...props
}: Props) {
  return (
    <Button disabled={disabled || loading} type={type} {...props}>
      {children}
      {!loading ? (
        icon
      ) : (
        <VscLoading
          color={props.variant === 'outline' ? '#000' : '#fff'}
          fontSize={20}
          className='ml-1 animate-spin'
        />
      )}
    </Button>
  );
}
