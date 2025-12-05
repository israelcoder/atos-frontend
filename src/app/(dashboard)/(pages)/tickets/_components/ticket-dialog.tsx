'use client';

import { Dialog } from '@/components/ui/dialog';

export function TicketDialog() {
  return (
    <Dialog.Root open>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Novo chamado</Dialog.Title>
          <Dialog.Description>Uma descrição bem legal!</Dialog.Description>
        </Dialog.Header>

        <div>aasdsad</div>

        <Dialog.Footer></Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
