import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

type QueryValue = string | string[];
export function useStateRoute() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [localState, setLocalState] = useState<Record<string, QueryValue>>({});

  const getParam = useCallback(
    <V, DefaultValue = undefined>(
      key: string,
      defaultValue?: DefaultValue,
    ): DefaultValue extends undefined
      ? V | null
      : NonNullable<DefaultValue> => {
      if (key in localState) return localState[key] as any;

      const queryValues = searchParams
        .getAll(key)
        .filter(v => v !== 'undefined' && v !== 'null')
        .map(v => v.trim());

      const hasQueryValue = queryValues.length > 0;

      if (!hasQueryValue) return (localState?.[key] ?? defaultValue) as any;

      const isArray = key.includes('[]');

      return (isArray ? queryValues : queryValues[0]) as any;
    },
    [localState, searchParams],
  );

  const applyRoute = useCallback(
    (overrideValues?: Record<string, QueryValue>): void => {
      const newParams = new URLSearchParams(searchParams);

      Object.entries({ ...localState, ...overrideValues }).forEach(
        ([key, value]) => {
          // Remove empty values
          if (value === null || value === undefined) {
            newParams.delete(key);
            return;
          } else if (Array.isArray(value)) {
            // Remove empty values
            if (!value.length) {
              newParams.delete(key);
              return;
            }

            // Serialize array values
            const serializedValue = value
              .filter(v => v !== 'null' && v !== 'undefined')
              .map(v => v.toString().trim());

            newParams.delete(key);
            for (const v of serializedValue) newParams.append(key, v);
            return;
          }

          const finalValue = value.toString().trim();
          if (finalValue) newParams.set(key, finalValue);
          else newParams.delete(key);
        },
      );

      /**
       * @description
       * This is a hack to prevent error on navigate in the same tick of update component
       */
      setTimeout(() => {
        router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
      }, 0);
    },
    [localState, pathname, router, searchParams],
  );

  const setParams = useCallback(
    (params: Record<string, QueryValue>, updateURL = false): void => {
      setLocalState(prev => {
        const newParams = { ...prev, ...params };
        if (updateURL) applyRoute(newParams);
        return newParams;
      });
    },
    [applyRoute],
  );

  const resetParams = useCallback(() => {
    setLocalState({});
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  return {
    getParam,
    setParams,
    applyRoute,
    resetParams,
    isDirty: false,
  };
}
