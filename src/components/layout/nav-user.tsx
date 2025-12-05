'use client';

import { LuEllipsisVertical, LuLogOut } from 'react-icons/lu';

import { getNameInitials } from '@/helpers/string';
import { useAuth } from '@/hooks/use-auth';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar } from '../ui/avatar';
import { DropdownMenu } from '../ui/dropdown-menu';
import { Sidebar } from '../ui/sidebar';

export function NavUser() {
  const isMobile = useIsMobile();
  const { user, signout, isLoading } = useAuth();

  // TODO:
  if (!user) return;

  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Sidebar.MenuButton
              disabled={isLoading}
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar.Root className='size-8 rounded-lg grayscale'>
                <Avatar.Image src={user.avatar} alt={user.name} />
                <Avatar.Fallback className='rounded-lg'>CN</Avatar.Fallback>
              </Avatar.Root>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-medium'>{user.name}</span>
                <span className='truncate text-xs text-muted-foreground'>
                  {user.email}
                </span>
              </div>
              <LuEllipsisVertical className='ml-auto size-4' />
            </Sidebar.MenuButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenu.Label className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar.Root className='size-8 rounded-lg'>
                  <Avatar.Image src={user.avatar} alt={user.name} />
                  <Avatar.Fallback className='rounded-lg'>
                    {getNameInitials(user.name)}
                  </Avatar.Fallback>
                </Avatar.Root>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-medium'>{user.name}</span>
                  <span className='truncate text-xs text-muted-foreground'>
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item disabled={isLoading}>
                {/* <IconUserCircle /> */}
                Gerenciar contar
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Item
              className='text-destructive'
              disabled={isLoading}
              onClick={signout}
            >
              <LuLogOut />
              Sair
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );
}
