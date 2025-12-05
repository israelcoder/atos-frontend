declare module '*.svg' {
  import { SVGProps, VFC } from 'react';
  const content: VFC<SVGProps<SVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const content: any;
  export default content;
}

type MaybePromise<T> = T | Promise<T>;
