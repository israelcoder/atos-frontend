import Link from 'next/link';

import { NotFoundSVG } from '@/components/icons/not-found-svg';

export default function NotFoundPage() {
  return (
    <div className='fixed left-0 top-0 flex size-full min-h-screen flex-col items-center justify-center px-4'>
      <p className='mb-14 h-10 text-4xl font-semibold uppercase text-primary'>
        Logo
      </p>

      <div className='flex max-w-screen-sm flex-col items-center justify-center gap-10'>
        <div className='flex flex-col gap-6'>
          <NotFoundSVG className='mx-auto h-auto max-w-96 text-primary' />
          <p className='text-sm text-muted md:text-base'>
            Oops! A página que você está procurando não foi encontrada.
          </p>
        </div>
        <div className='flex w-full items-center justify-center gap-6 md:flex-row'>
          <Link href='/' className='w-full md:w-fit'>
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
