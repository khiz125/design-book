import { useRef, useEffect, useCallback } from "react";

export const useThrottle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
) => {
  const lastRan = useRef<number | null>(null);
  const lastFunc = useRef<ReturnType<typeof setTimeout> | null>(null);
  const throttledFunc = useCallback(
    (...args: Parameters<T>) => {
      const context = this;
      if (lastRan.current === null) {
        func.apply(context, args);
        lastRan.current = Date.now();
      } else {
        if (lastFunc.current) {
          clearTimeout(lastFunc.current);
        }
        lastFunc.current = setTimeout(() => {
          if (Date.now() - (lastRan.current as number) >= limit) {
            func.apply(context, args);
            lastRan.current = Date.now();
          }
        }, limit - (Date.now() - lastRan.current));
      }
    },
    [func, limit]
  );
  useEffect(() => {
    return () => {
      if (lastFunc.current) {
        clearTimeout(lastFunc.current);
      }
    };
  }, []);
  return throttledFunc;
};
