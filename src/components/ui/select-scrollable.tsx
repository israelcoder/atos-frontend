import { IconType } from 'react-icons/lib';
import { Select } from './select';

type OptonDef = {
  label: string;
  value: string;
  icon?: IconType;
  disable?: boolean;
};

type Props = React.ComponentProps<'select'> & {
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  options: OptonDef[];
  onOptionSelected?: (value: string) => void;
};
export function SelectScrollable({
  autoFocus,
  disabled,
  value,
  defaultValue,
  options,
  onOptionSelected,
  className,
  placeholder,
}: Props) {
  return (
    <Select.Root
      disabled={disabled}
      defaultValue={defaultValue}
      onValueChange={onOptionSelected}
    >
      <Select.Trigger value={value} autoFocus={autoFocus} className={className}>
        <Select.Value placeholder={value ?? placeholder ?? 'Selecione'} />
      </Select.Trigger>
      <Select.Content>
        {options.map((option, index) => (
          <Select.Item
            key={`option-${index}-${option.value}`}
            value={option.value}
            disabled={option.disable}
          >
            <div className='mr-2 inline-flex items-center gap-2'>
              {option.icon && <option.icon className='size-4' />}
              {option.label}
            </div>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
