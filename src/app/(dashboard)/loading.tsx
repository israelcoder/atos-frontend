export default function ApplicationLoading() {
  return (
    <section className='flex h-dvh flex-1 flex-col items-center justify-center gap-3'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        className='size-10 text-primary'
      >
        <circle
          cx='50'
          cy='50'
          r='45'
          fill='none'
          strokeWidth='8'
          strokeLinecap='round'
          stroke='currentColor'
          strokeDasharray='141.37166941154067 49.12388980384689'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='0.7692307692307692s'
            keyTimes='0;1'
            values='0 50 50;360 50 50'
          />
        </circle>
      </svg>
      <p className='text-muted-foreground'>Carregando...</p>
    </section>
  );
}
