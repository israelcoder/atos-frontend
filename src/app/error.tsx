'use client';

import { Button } from '@/components/ui/button';

type Props = {
  error: Error;
  reset(): void;
};
export default function ErrorPage({ error, reset }: Props) {
  console.warn('[Error]', error);

  return (
    <div className='fixed left-0 top-0 flex size-full min-h-screen flex-col items-center justify-center px-4'>
      <div className='flex max-w-screen-sm flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-center gap-6'>
          <h2 className='text-lg font-semibold md:text-2xl'>
            Ops, algo deu errado!
          </h2>
          <p className='text-sm md:text-base'>
            Não conseguimos acessar o recurso no momento
          </p>
        </div>
        <div className='flex w-full items-center justify-center gap-6 md:flex-row'>
          <Button className='w-full md:w-fit' onClick={() => reset()}>
            Tentar Novamente
          </Button>
        </div>
      </div>
    </div>
  );
}
