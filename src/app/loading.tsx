export default function Loading() {
  return (
    <section className='flex h-dvh items-center justify-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        className='size-11'
      >
        <circle
          cx='50'
          cy='50'
          r='45'
          fill='none'
          strokeWidth='5'
          stroke='hsl(var(--primary))'
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
    </section>
  );
}
