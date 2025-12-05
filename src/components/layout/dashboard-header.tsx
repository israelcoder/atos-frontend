import { Separator } from '@/components/ui/separator';
import { Sidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../common/mode-toggle';

type Props = React.ComponentProps<'header'> & {
  title?: string;
};
export function DashboardHeader({ title, className, ...props }: Props) {
  return (
    <header
      className={cn(
        `h-(--header-height) group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) flex shrink-0 items-center gap-2 border-b py-1 transition-[width,height] ease-linear`,
        className,
      )}
      {...props}
    >
      <div className='flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6'>
        <Sidebar.Trigger className='-ml-1' />
        <Separator
          orientation='vertical'
          className='mx-2 data-[orientation=vertical]:h-4'
        />
        <h1 className='text-base font-medium'>{title}</h1>
        <div className='ml-auto flex items-center gap-2'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
