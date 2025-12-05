'use client';

import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { VscLoading } from 'react-icons/vsc';

import { Button } from '@/components/ui/button';
import { Command } from '@/components/ui/command';
import { Popover } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import { Separator } from './separator';

export type OptionDef = {
  value: string;
  label: string;
  group?: string | null;
};

type Mode = 'single' | 'multiple';

type Props = {
  mode?: Mode;
  options: OptionDef[];
  selected: string | string[];
  className?: string;
  placeholder?: string;
  isLoading?: boolean;
  disabled?: boolean;
  maxToShow?: number;
  onChange?: (event: string | string[]) => void;
};
export function Combobox({
  options,
  selected,
  className,
  placeholder,
  mode = 'single',
  isLoading = false,
  disabled = false,
  maxToShow = 2,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const groups = useMemo(() => {
    const groups = new Map<string, OptionDef[]>();
    for (const option of options) {
      const group = option?.group ?? 'unknown';
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group)!.push(option);
    }

    return Array.from(groups.entries());
  }, [options]);

  const handleSelect = useCallback(
    (option: OptionDef) => {
      if (!onChange) return;

      if (mode === 'single' || !Array.isArray(selected)) {
        onChange(option.value);
        return;
      }

      const hasSelected = selected.includes(option.value);
      const newSelected = hasSelected
        ? selected.filter(item => item !== option.value)
        : [...selected, option.value];

      onChange(newSelected);
    },
    [mode, onChange, selected],
  );

  function checkOptionIsSelected(option: OptionDef) {
    return mode === 'single'
      ? selected === option.value
      : selected.includes(option.value);
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger disabled={disabled} asChild>
        <Button
          type='button'
          variant='outline'
          role='combobox'
          className={cn(`justify-between gap-2 border-dashed px-2`, className)}
        >
          {isLoading && <VscLoading className='w-3 text-muted' />}
          <span>{placeholder}</span>
          {selected?.length > 0 && (
            <>
              <Separator orientation='vertical' className='h-4' />
              <Badge className='rounded-sm px-1 lg:hidden'>
                {selected.length}
                {selected.length > 1 ? ' selecionados' : ' selecionado'}
              </Badge>
              <div className='hidden space-x-1 lg:flex'>
                {selected.length > maxToShow ? (
                  <Badge className='rounded-sm px-1'>
                    {selected.length}
                    {selected.length > 1 ? ' selecionados' : ' selecionado'}
                  </Badge>
                ) : (
                  options
                    .filter(option => checkOptionIsSelected(option))
                    .slice(0, maxToShow)
                    .map(option => (
                      <Badge
                        key={option.value}
                        variant={'outline'}
                        className='rounded-sm px-1'
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
              <Separator orientation='vertical' className='h-4' />
            </>
          )}
          <ChevronsUpDown className='h-3 text-muted-foreground' />
        </Button>
      </Popover.Trigger>
      <Popover.Content
        className='w-full min-w-64 max-w-sm p-0'
        align='start'
        asChild
      >
        <Command.Root
          filter={(value, search) => {
            if (!search) return 1;
            const queryIsFounded = options.some(option => {
              if (option.value !== value) return false;
              return (
                option.value.toLowerCase().includes(search) ||
                option.label.toLowerCase().includes(search) ||
                option.group?.toLowerCase().includes(search)
              );
            });

            return queryIsFounded ? 1 : 0;
          }}
        >
          <Command.Input placeholder={`Buscar ${placeholder}`} />
          <Command.Empty>Nenhum resultado encontrado!</Command.Empty>
          <Command.List>
            {groups.map(([group, options], index) => (
              <Fragment key={`command-group-${group}`}>
                {index > 0 && <Command.Separator />}
                <Command.Group
                  heading={group !== 'unknown' ? group : undefined}
                >
                  {options.map(option => (
                    <Command.Item
                      key={`command-item-${group}-${option.value}`}
                      value={option.value}
                      onSelect={() => handleSelect(option)}
                    >
                      <CheckIcon
                        className={cn(`size-4 opacity-0`, {
                          'opacity-100': checkOptionIsSelected(option),
                        })}
                      />
                      {option.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Fragment>
            ))}
          </Command.List>
          {selected.length > 0 && (
            <>
              <Command.Separator />
              <Command.Group>
                <Command.Item
                  onSelect={() =>
                    onChange && onChange(mode === 'single' ? '' : [])
                  }
                  className='justify-center text-center'
                >
                  Limpar
                </Command.Item>
              </Command.Group>
            </>
          )}
        </Command.Root>
      </Popover.Content>
    </Popover.Root>
  );
}
