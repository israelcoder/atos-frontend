'use client';

import { useMutation } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';

import { Form } from '@/components/common/form';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';

type Props = {
  description?: string;
  handlerDeleteRequest(): Promise<void>;
  onSuccess?: () => void;
};
export function DeleteConfirmationModal({
  onSuccess,
  description,
  handlerDeleteRequest: mutationFn,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => onSuccess && onSuccess(),
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button
          type='button'
          title='Excluir'
          className='gap-2 text-muted'
          variant={'outline'}
          size={'icon'}
          onClick={() => setIsOpen(true)}
        >
          <TrashIcon className='text-destructive' />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Atenção!</Dialog.Title>
          <Dialog.Description>
            {!!description && (
              <>
                {description}
                <br />
              </>
            )}
            Esta ação é irreversível.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer className='gap-2'>
          <Button variant={'outline'} disabled={mutation.status === 'pending'}>
            Fechar
          </Button>
          <Form.Button
            variant={'destructive'}
            isLoading={mutation.status === 'pending'}
            onClick={() => mutation.mutate()}
          >
            Excluir
          </Form.Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
