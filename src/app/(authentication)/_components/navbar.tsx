import { cn } from '@/lib/utils';

type Props = React.ComponentProps<'header'>;
function NavBarRoot({ children, className, ...props }: Props) {
  return (
    <header
      className={cn(
        `flex h-12 min-h-12 items-center justify-between py-6`,
        className,
      )}
      {...props}
    >
      <p className='mb-14 h-10 text-4xl font-semibold uppercase text-primary'>
        Logo
      </p>
      <div className='inline-flex items-center gap-2'>{children}</div>
    </header>
  );
}

function NavBarActions({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className='inline-flex items-center gap-2'>{children}</div>;
}

export const NavBar = {
  Root: NavBarRoot,
  Actions: NavBarActions,
};
