'use client';

import Link from 'next/link';
import { IoLogoNoSmoking } from 'react-icons/io';
import { LuLayoutDashboard, LuTicket } from 'react-icons/lu';

import { Sidebar } from '../ui/sidebar';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';

const menus = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LuLayoutDashboard,
  },
  {
    title: 'Chamados',
    url: '/tickets',
    icon: LuTicket,
  },
];
export type MenuItem = (typeof menus)[number];

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar.Root>) {
  return (
    <Sidebar.Root collapsible='offcanvas' {...props}>
      <Sidebar.Header>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Sidebar.MenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5'
            >
              <Link href='/'>
                <IoLogoNoSmoking className='!size-5' />
                <span className='text-base font-semibold'>Atos Inc.</span>
              </Link>
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.Header>
      <Sidebar.Content>
        <NavMain items={menus} />
      </Sidebar.Content>
      <Sidebar.Footer>
        <NavUser />
      </Sidebar.Footer>
    </Sidebar.Root>
  );
}
