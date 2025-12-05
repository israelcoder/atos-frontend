'use client';

import { Sidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { useSideBarStore } from '@/store/side-bar-store';
import { AppSidebar } from './app-sidebar';
import { DashboardHeader } from './dashboard-header';

type Props = React.ComponentProps<'main'>;
export function DashboardLayout({ className, ...props }: Props) {
  const { isOpen, setIsOpen } = useSideBarStore();

  return (
    <Sidebar.Provider open={isOpen} onOpenChange={setIsOpen}>
      <AppSidebar variant='inset' />

      <Sidebar.Inset>
        <DashboardHeader />

        <main
          className={cn(
            `@container/main flex flex-1 flex-col gap-4 p-4 pb-1`,
            className,
          )}
          {...props}
        />
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
