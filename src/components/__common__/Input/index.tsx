import { ReactNode, useEffect, useRef } from 'react';
import './style.scss';

type InputProps = {
  children: ReactNode;
  onChange: any;
  type: string;
  placeholder: string;
};

export const Input = ({
  children,
  onChange,
  type,
  placeholder,
}: InputProps) => {
  const inputRef: any = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <label htmlFor="input" className="c-logincard__label">
        {children}
      </label>
      <input
        id="input"
        className="c-logincard__input"
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
