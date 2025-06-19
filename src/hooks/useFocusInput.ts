import { useRef, useEffect } from 'react';

export const useFocusInput = () => {
  const inputRef: any = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return {
    inputRef,
  };
};
