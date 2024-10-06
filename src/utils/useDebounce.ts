import React from "react";

export const useDebounce = <T extends (...args: any[]) => void> (func: T, wait: number): T => {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFunction = function(this: any, ...args: Parameters<T>) {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };

  return debouncedFunction as T;
}
