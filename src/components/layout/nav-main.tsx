'use client';

import Link from 'next/link';

import { Sidebar } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { MenuItem } from './app-sidebar';

type Props = {
  items: MenuItem[];
};
export function NavMain({ items }: Props) {
  const pathname = usePathname();

  return (
    <Sidebar.Group>
      <Sidebar.GroupContent className='flex flex-col gap-2'>
        <Sidebar.Menu>
          {items.map(item => (
            <Sidebar.MenuItem key={`menu-item-${item.title}`}>
              <Sidebar.MenuButton
                tooltip={item.title}
                isActive={item.url === pathname}
                asChild
              >
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          ))}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  );
}
