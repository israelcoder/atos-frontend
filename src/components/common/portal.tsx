'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = { children: React.ReactNode };
export function Portal({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      {mounted
        ? createPortal(
            children as React.ReactElement,
            document.querySelector('#portal-container') as HTMLElement,
          )
        : null}
    </>
  );
}
