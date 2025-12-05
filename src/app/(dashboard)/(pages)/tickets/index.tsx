'use client';

import { TicketCardList } from './_components/ticket-card-list';
import { TicketToolBar } from './_components/ticket-tool-bar';

export function TicketPageContent() {
  return (
    <>
      <TicketToolBar />
      <TicketCardList />
      {/* <TicketList /> */}
    </>
  );
}
